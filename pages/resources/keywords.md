---
title: Browse Resources By Keyword
toc: true
layout: toc
---

<h1>Browse Resources By Keyword</h1>

{% assign all_resources = site.resources | concat: site.summaries | sort: "name" %}
{% assign all_tags = site.resource_tags | sort %}

{% for tag in all_tags %}
  <h2 id="{{ tag | slugify }}">{{ tag }}</h2>
  <ul>
    {% for resource in all_resources %}
      {% assign resource_tags = resource.tags | join: " " | split: "," %}
      {% if resource_tags contains tag %}
        {% include resource_block.html resource=resource %}
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}
