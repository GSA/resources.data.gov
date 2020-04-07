---
title: Resource List
layout: page
primary_nav_section: Resources
---

{% assign all_resources = site.resources | concat: site.summaries | sort: "name" | group_by: "category" %}

{% for group in all_resources %}
  <h2>{{ group.name }}</h2>
  <ul>
    {% for resource in group.items %}
      <li>
        {{ resource.name }}
        {% if resource.shortdescription %}
          <span class="usa-tag">summary</span>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% endfor %}
