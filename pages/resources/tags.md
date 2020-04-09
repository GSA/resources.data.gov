---
title: Resource Tags
layout: page
---

{% assign all_resources = site.resources | concat: site.summaries | sort: "name" %}

{% for tag in site.resource_tags %}
  <h2 id="{{ tag | slugify }}">{{ tag }}</h2>
  <ul>
    {% for resource in all_resources %}
      {% assign resource_tags = resource.tags | join: " " | split: "," %}
      {% if resource_tags contains tag %}
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
