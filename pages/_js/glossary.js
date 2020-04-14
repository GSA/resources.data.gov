var Glossary = require("glossary-panel");
var terms = require("../_data/glossary.json");

var body = document.querySelectorAll(
  ".usa-layout__docs-main.usa-prose p, .usa-layout__docs-main.usa-prose li"
);

if (body) {
  Object.keys(terms).forEach(function(key) {
    var term = terms[key].term;
    var re = new RegExp("(\\b" + term + "\\b)(?![^<]*>|[^<>]*</)", "i");

    for (var i = 0; i < body.length; i++) {
      var match = re.exec(body[i].innerHTML);

      if (match) {
        body[i].innerHTML = body[i].innerHTML.replace(
          re,
          `<span data-term="${term}">${match[0]}</span>`
        );
        break;
      }
    }
  });
}

function decorator(glossary) {
  var accordion = glossary.accordion;

  accordion.opts.collapseOthers = true;
  accordion.collapse = function(button) {
    var content = document.getElementById(button.getAttribute("aria-controls"));
    if (!content) return;
    button.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
    this.setStyles(content);
  };
}

var g = new Glossary(terms);
decorator(g);
