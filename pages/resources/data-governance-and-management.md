---
title: Data Governance and Management
primary_nav_section: Resources
layout: page
---

{% assign resources = site.resources | concat: site.summaries | sort: "name" | where: "category", "Data governance & management" %}

<ul>
  {% for resource in resources %}
    <li>
      {{ resource.name }}
      {% if resource.shortdescription %}
        <span class="usa-tag">summary</span>
      {% endif %}
    </li>
  {% endfor %}
</ul>
