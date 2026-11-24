/**
 * Shared calendar fetch and render utilities
 */
var QFCalendar = (function () {
  'use strict';
  var CACHE_KEY = 'qf-calendar-events-v6';
  var CACHE_TTL_MS = 10 * 60 * 1000;
  var SOLD_OUT_PATTERN = /\bSOLD\s*OUT\b/i;
  var HEATED_RIVALRY_TITLE_PATTERN = /heated\s+rivalry/i;

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function isHeatedRivalryEvent(event) {
    const title = event && event.title;
    return typeof title === 'string' && HEATED_RIVALRY_TITLE_PATTERN.test(title);
  }

  function stripHtml(text) {
    return String(text)
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/gi, ' ')
      .replace(/&#39;/g, '\'')
      .replace(/&amp;/g, '&')
      .replace(/\r\n/g, '\n')
      .trim();
  }

  function isHttpUrl(value) {
    return typeof value === 'string' && /^https?:\/\//i.test(value.trim());
  }

  function parseCityFromTitle(title) {
    if (!title || typeof title !== 'string') {
      return '';
    }

    var parenMatch = title.match(/\(([^)]+)\)\s*$/);
    if (!parenMatch) {
      return '';
    }

    return parenMatch[1]
      .replace(SOLD_OUT_PATTERN, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  function parseTheaterFromDescription(description) {
    if (!description || typeof description !== 'string') {
      return '';
    }

    var lines = stripHtml(description)
      .replace(SOLD_OUT_PATTERN, '')
      .split(/\n+/)
      .map(function (line) { return line.trim(); })
      .filter(Boolean);

    for (var i = 0; i < lines.length; i++) {
      if (!isHttpUrl(lines[i])) {
        return lines[i];
      }
    }

    return '';
  }

  function getEventVenueParts(event) {
    var city = parseCityFromTitle(event.title);
    var theater = parseTheaterFromDescription(event.description);

    if (!theater && event.location && !isHttpUrl(event.location)) {
      theater = String(event.location)
        .replace(SOLD_OUT_PATTERN, '')
        .trim();
    }

    return { city: city, theater: theater };
  }

  function buildVenueMarkup(event) {
    var parts = getEventVenueParts(event);
    var city = parts.city;
    var theater = parts.theater;

    if (city && theater) {
      return (
        '<span class="dates__title">' +
          '<span class="dates__city-name">' + escapeHtml(city) + '</span> ' +
          '<span class="dates__theater">(' + escapeHtml(theater) + ')</span>' +
        '</span>'
      );
    }

    if (city) {
      return (
        '<span class="dates__title">' +
          '<span class="dates__city-name">' + escapeHtml(city) + '</span>' +
        '</span>'
      );
    }

    if (theater) {
      return (
        '<span class="dates__title">' +
          '<span class="dates__theater">(' + escapeHtml(theater) + ')</span>' +
        '</span>'
      );
    }

    var fallback = (event.title || '')
      .replace(SOLD_OUT_PATTERN, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    return '<span class="dates__title">' + escapeHtml(fallback) + '</span>';
  }

  function fetchEvents(calendarApiUrl) {
    return fetch(calendarApiUrl, { redirect: 'follow' })
      .then(function (response) {
        return response.text().then(function (text) {
          let data;

          try {
            data = JSON.parse(text);
          } catch (parseError) {
            throw new Error('Calendar API returned invalid JSON');
          }

          if (data && data.error) {
            throw new Error(data.error);
          }

          if (!Array.isArray(data)) {
            throw new Error('Calendar API returned unexpected data');
          }

          return data;
        });
      })
      .then(function (data) {
        const now = new Date();

        return data
          .filter(function (event) {
            return isHeatedRivalryEvent(event);
          })
          .filter(function (event) {
            return new Date(event.startDate) >= now;
          })
          .sort(function (a, b) {
            return new Date(a.startDate) - new Date(b.startDate);
          });
      });
  }

  function isTruthySoldOutFlag(value) {
    return value === true || value === 1 || value === '1' || String(value).toLowerCase() === 'true';
  }

  function fieldIndicatesSoldOut(value) {
    return typeof value === 'string' && value.trim() !== '' && SOLD_OUT_PATTERN.test(value);
  }

  function isEventSoldOut(event) {
    if (isTruthySoldOutFlag(event.soldOut)) {
      return true;
    }

    const fieldsToCheck = [
      event.status,
      event.location,
      event.description,
      event.ticketStatus,
      event.buttonLabel,
    ];

    return fieldsToCheck.some(fieldIndicatesSoldOut);
  }

  function getEventSoldOutState(event) {
    var soldOut = isEventSoldOut(event);
    var displayTitle = event.title || '';

    if (!soldOut && fieldIndicatesSoldOut(displayTitle)) {
      soldOut = true;
    }

    if (soldOut && fieldIndicatesSoldOut(displayTitle)) {
      displayTitle = displayTitle
        .replace(/\s*[\[(]?\s*SOLD\s*OUT\s*[\])]?\s*/gi, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();
    }

    return {
      soldOut: soldOut,
      displayTitle: displayTitle,
    };
  }

  function buildTicketsMarkup(event, soldOut) {
    const ticketUrl = event.ticketUrl || '#';
    const ticketLinkAttrs = ticketUrl !== '#'
      ? ' target="_blank" rel="noopener noreferrer"'
      : '';
    const btnClass = soldOut
      ? 'primary-btn dates__tickets dates__tickets-btn dates__tickets--sold-out'
      : 'primary-btn dates__tickets dates__tickets-btn';
    const label = soldOut ? 'SOLD OUT' : 'TICKETS';

    if (ticketUrl !== '#') {
      return '<a href="' + escapeHtml(ticketUrl) + '" class="' + btnClass + '"' + ticketLinkAttrs + '>' + label + '</a>';
    }

    return '<span class="' + btnClass + '" aria-disabled="true">' + label + '</span>';
  }

  function renderEvents(listEl, events) {
    listEl.innerHTML = '';

    if (!events.length) {
      listEl.innerHTML = '<li class="dates__empty">No upcoming dates at this time. Check back soon!</li>';
      return;
    }

    events.forEach(function (event) {
      const li = document.createElement('li');
      li.className = 'dates__item';

      const soldOutState = getEventSoldOutState(event);
      const ticketsMarkup = buildTicketsMarkup(event, soldOutState.soldOut);

      li.innerHTML =
        '<div class="dates__main">' +
          '<span class="dates__datetime">' +
            '<span class="dates__date">' + escapeHtml(event.date) + '</span> ' +
            '<span class="dates__time">' + escapeHtml(event.time) + '</span>' +
          '</span>' +
          '<span class="dates__separator" aria-hidden="true"></span>' +
          buildVenueMarkup(event) +
        '</div>' +
        ticketsMarkup;

      listEl.appendChild(li);
    });
  }

  function getCachedEvents() {
    try {
      var raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) {
        return null;
      }

      var parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.events) || typeof parsed.timestamp !== 'number') {
        return null;
      }

      if ((Date.now() - parsed.timestamp) > CACHE_TTL_MS) {
        return null;
      }

      return parsed.events;
    } catch (error) {
      return null;
    }
  }

  function setCachedEvents(events) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        events: events,
      }));
    } catch (error) {
      /* ignore cache write errors */
    }
  }

  function fetchEventsWithRetry(calendarApiUrl, attemptsRemaining) {
    return fetchEvents(calendarApiUrl).catch(function (error) {
      if (attemptsRemaining <= 1) {
        throw error;
      }

      return new Promise(function (resolve) {
        setTimeout(resolve, 600);
      }).then(function () {
        return fetchEventsWithRetry(calendarApiUrl, attemptsRemaining - 1);
      });
    });
  }

  function loadIntoList(listEl, options) {
    const maxEvents = options && options.maxEvents;
    const calendarApiUrl = QF_CONFIG.calendarApiUrl;

    if (!calendarApiUrl) {
      renderEvents(listEl, []);
      return Promise.resolve();
    }

    var cachedEvents = getCachedEvents();
    if (cachedEvents) {
      var cachedLimited = typeof maxEvents === 'number'
        ? cachedEvents.slice(0, maxEvents)
        : cachedEvents;
      renderEvents(listEl, cachedLimited);
    }

    return fetchEventsWithRetry(calendarApiUrl, 3)
      .then(function (events) {
        setCachedEvents(events);
        const limited = typeof maxEvents === 'number'
          ? events.slice(0, maxEvents)
          : events;

        renderEvents(listEl, limited);
      })
      .catch(function (err) {
        console.error('Failed to load calendar events:', err);
        if (!cachedEvents) {
          listEl.innerHTML =
            '<li class="dates__empty">Unable to load upcoming dates right now. Please check back soon.</li>';
        }
      });
  }

  return {
    loadIntoList: loadIntoList,
  };
})();
