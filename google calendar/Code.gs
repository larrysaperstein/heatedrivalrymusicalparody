/**
 * Quick & Funny Musicals — Calendar Events API
 *
 * SETUP (one-time):
 * 1. Set CALENDAR_ID below
 * 2. In Apps Script left sidebar: Services (+) → Google Calendar API → Add
 * 3. Deploy as Web App (Execute as: Me, Access: Anyone)
 *
 * Per-event timezones come from each Google Calendar event's own timezone setting.
 *
 * SOLD OUT: add the text "SOLD OUT" (any case) in the event Location, Description, or Title.
 * Ticket URL rules are unchanged — Location URL first, else first URL in Description.
 *
 * Description is also sent to the website for city/venue display (SOLD OUT is stripped on the site).
 * The soldOut boolean is still derived from Title, Location, and Description before display parsing.
 */

// ---------------------------------------------------------------------------
// CONFIG
// ---------------------------------------------------------------------------

/**
 * Your Google Calendar ID.
 * Google Calendar → Settings → your calendar → Integrate calendar → Calendar ID
 */
const CALENDAR_ID = '1e5737318d324b5d08763527464baa547cd365711f16fc4be02e006961b0edac@group.calendar.google.com';

/** Used only when an event has no timezone set */
const FALLBACK_TIMEZONE = 'America/Los_Angeles';

const SOLD_OUT_PATTERN = /\bSOLD\s*OUT\b/i;

// ---------------------------------------------------------------------------
// Web App entry point
// ---------------------------------------------------------------------------

function doGet() {
  try {
    const events = getUpcomingEvents();

    return ContentService
      .createTextOutput(JSON.stringify(events))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ---------------------------------------------------------------------------
// Fetch events — uses Advanced Calendar API for per-event timezones
// ---------------------------------------------------------------------------

function getUpcomingEvents() {
  if (typeof Calendar === 'undefined' || !Calendar.Events) {
    throw new Error(
      'Google Calendar API service is not enabled. In Apps Script, click Services (+) and add Google Calendar API.'
    );
  }

  const now = new Date();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  const response = Calendar.Events.list(CALENDAR_ID, {
    timeMin: now.toISOString(),
    timeMax: oneYearFromNow.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
    maxResults: 100,
  });

  const items = response.items || [];

  return items.map(formatApiEvent);
}

function formatApiEvent(item) {
  const isAllDay = Boolean(item.start.date);
  const timeZone = item.start.timeZone || FALLBACK_TIMEZONE;
  const startValue = isAllDay ? item.start.date : item.start.dateTime;
  const start = new Date(startValue);

  return {
    date: formatDate(start, timeZone),
    time: isAllDay ? 'All day' : formatTime(start, timeZone),
    title: item.summary || '',
    description: item.description || '',
    location: (item.location || '').trim(),
    ticketUrl: extractTicketUrlFromApiEvent(item),
    soldOut: eventIsSoldOut(item),
    startDate: start.toISOString(),
    timeZone: timeZone,
  };
}

// ---------------------------------------------------------------------------
// Formatting helpers — matches website design (Aug. 5th, 7:30pm)
// ---------------------------------------------------------------------------

function formatDate(date, timeZone) {
  const months = [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
    'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.',
  ];

  const monthIndex = parseInt(Utilities.formatDate(date, timeZone, 'M'), 10) - 1;
  const day = parseInt(Utilities.formatDate(date, timeZone, 'd'), 10);

  return months[monthIndex] + ' ' + day + getOrdinalSuffix(day);
}

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }

  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function formatTime(date, timeZone) {
  const formatted = Utilities.formatDate(date, timeZone, 'h:mma');
  return formatted.toLowerCase();
}

// ---------------------------------------------------------------------------
// Ticket link — Location first, then Description
// ---------------------------------------------------------------------------

function extractTicketUrlFromApiEvent(item) {
  const location = (item.location || '').trim();

  if (/^https?:\/\//i.test(location)) {
    return location;
  }

  const description = item.description || '';
  const match = description.match(/https?:\/\/[^\s<>"']+/i);

  return match ? match[0] : '';
}

// ---------------------------------------------------------------------------
// Sold out — Location, Description, or Title contains "SOLD OUT"
// ---------------------------------------------------------------------------

function eventIsSoldOut(item) {
  const location = (item.location || '').trim();
  const description = item.description || '';
  const title = item.summary || '';

  return SOLD_OUT_PATTERN.test(location)
    || SOLD_OUT_PATTERN.test(description)
    || SOLD_OUT_PATTERN.test(title);
}

// ---------------------------------------------------------------------------
// Manual tests
// ---------------------------------------------------------------------------

function testGetUpcomingEvents() {
  const events = getUpcomingEvents();
  const output = {
    calendarId: CALENDAR_ID,
    fallbackTimezone: FALLBACK_TIMEZONE,
    count: events.length,
    events: events,
  };

  Logger.log(JSON.stringify(output, null, 2));
  console.log(JSON.stringify(output, null, 2));
  return output;
}

function testDoGet() {
  const output = doGet().getContent();

  Logger.log(output);
  console.log(output);
  return output;
}