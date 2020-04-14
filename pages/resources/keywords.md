---
title: Browse Resources By Keyword
toc: true
layout: toc
---

<h1>Browse Resources By Keyword</h1>

{% assign all_resources = site.resources | concat: site.summaries | sort: "name" %}
{% assign all_tags = site.resource_tags | sort %}

{% for tag in all_tags %}

  <div class="resource-keyword">
    {% assign tagged_resources = "" | split: "," %}
    {% for resource in all_resources %}
      {% assign resource_tags = resource.tags | join: " " | split: "," %}
      {% if resource_tags contains tag %}
        {% assign tagged_resources = tagged_resources | push: resource %}
      {% endif %}
    {% endfor %}

    {% assign tagged_resources_length = tagged_resources | size %}
    {% if tagged_resources_length != 0 %}
      <h2 id="{{ tag | slugify }}">{{ tag }}</h2>
      {% for resource in tagged_resources %}
        {% include resource_block.html resource=resource %}
      {% endfor %}
    {% endif %}
  </div>

{% endfor %}
