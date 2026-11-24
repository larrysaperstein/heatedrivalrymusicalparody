(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var listEl = document.getElementById('tickets-dates-list');

    if (!listEl || typeof QFCalendar === 'undefined') {
      return;
    }

    QFCalendar.loadIntoList(listEl).finally(function () {
      listEl.setAttribute('aria-busy', 'false');
    });
  });
})();