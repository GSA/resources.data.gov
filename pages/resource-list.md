---
title: Resource List
layout: page
primary_nav_section: Resources
---

<h1>Resources</h1>

<ul>
  {% for resource in site.resources %}
    <li>
      {{ resource.name }}
    </li>
  {% endfor %}
</ul>

<h1>Summaries</h1>

<ul>
  {% for summary in site.summaries %}
    <li>
      {{ summary.name }}
    </li>
  {% endfor %}
</ul>
