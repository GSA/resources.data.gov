---
title: Browse Resources By Format
layout: page
---

{% assign all_resources = site.resources | concat: site.summaries | sort: "name" %}

{% for format in site.resource_formats %}
  <h2 id="{{ format | slugify }}">{{ format }}</h2>
  <ul>
    {% for resource in all_resources %}
      {% if resource.format contains format %}
        <li>
          {% if resource.shortdescription %}
            {{ resource.name }}
            <span class="usa-tag">summary</span>
          {% else %}
            <a href="{{ "/resources/" | append: resource.slug | relative_url }}">
              {{ resource.name }}
            </a>
          {% endif %}
        </li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}
