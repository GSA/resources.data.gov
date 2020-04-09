---
title: Data Governance and Management
primary_nav_section: Resources
layout: page
---

{% assign resources = site.resources | concat: site.summaries | where: "category", "Data governance & management" | sort: "name" %}

<p class="resource-introduction">
  <p>Intro text about this category</p>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</p>

{% for resource in resources %}
  <div class="resource">
    <div class="resource-main">
      <h2>{{ resource.name }}</h2>

      <p>
        {% if resource.description %}
          {{ resource.description | default: "No description provided" }}
        {% else if resource.shortdescription %}
          {{ resource.shortdescription | default: "No short description provided" }}
        {% endif %}
      </p>

      <p class="resource-source">
        Source: {{ resource.source | default: "No source provided" }}
      </p>

      <p class="resource-link">
        {% if resource.description %}
          <a href="/resources/{{ resource.slug }}">Learn More</a>
        {% else if resource.shortdescription %}
          <a href="{{ resource.link }}">Link to Resource</a>
        {% endif %}
      </p>
    </div>

    <div class="resource-side">
      <h3>Keywords</h3>
      <!-- TODO: tags are not quoted in front matter, so they are split into spaces. -->
      {% assign resource_tags = resource.tags | join: " " | split: "," %}
      <p>
        {% for tag in resource_tags %}
          <a href="/resources/tags#{{ tag | slugify }}">{{ tag }}</a>
        {% else %}
          This resource has no keywords.
        {% endfor %}
      </p>

      <h3>Format</h3>
      <p>
        {{ resource.format | default: "No format provided" }}
      </p>
    </div>
  </div>
{% endfor %}
