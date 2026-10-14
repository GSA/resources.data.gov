var SmoothScroll = require("smooth-scroll");
require("./glossary.js");

new SmoothScroll('a[href*="#"]');

// Wide tables in document bodies get a scrollable container so content
// is reachable instead of clipped. USWDS pattern; tabindex makes it
// keyboard scrollable.
document.querySelectorAll(".resource-prose > table").forEach(function (table) {
  var wrapper = document.createElement("div");
  wrapper.className = "usa-table-container--scrollable";
  wrapper.setAttribute("tabindex", "0");
  table.parentNode.insertBefore(wrapper, table);
  wrapper.appendChild(table);
});var SmoothScroll = require("smooth-scroll");
require("./glossary.js");

new SmoothScroll('a[href*="#"]');

// Wide tables in document bodies get a scrollable container so content
// is reachable instead of clipped. USWDS pattern; tabindex makes it
// keyboard scrollable.
document.querySelectorAll(".resource-prose > table").forEach(function (table) {
  var wrapper = document.createElement("div");
  wrapper.className = "usa-table-container--scrollable";
  wrapper.setAttribute("tabindex", "0");
  table.parentNode.insertBefore(wrapper, table);
  wrapper.appendChild(table);
});
