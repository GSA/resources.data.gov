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
        <li>
          <div class="resource">
            <div class="resource-main">
              <h3>{{ resource.name }}</h3>

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
                  <a class="usa-button" href="{{ "/resources/" | append: resource.slug | relative_url }}">
                    Learn More
                  </a>
                {% else if resource.shortdescription %}
                  <a href="{{ resource.link }}">Link to Resource</a>
                {% endif %}
              </p>
            </div>

            <div class="resource-side no_toc_section">
              <h4>Keywords</h4>
              <!-- TODO: tags are not quoted in front matter, so they are split into spaces. -->
              {% assign resource_tags = resource.tags | join: " " | split: "," %}
              <p>
                {% for tag in resource_tags %}
                  {% assign slug_tag = tag | slugify %}
                  <a href="{{ "/resources/keywords#" | append: slug_tag | relative_url }}">
                    {{ tag }}
                  </a>
      {% else %}
                  This resource has no keywords.
                {% endfor %}
              </p>

              <h4>Format</h4>
              <p>
                {% if resource.format != "" %}
                  {% assign slug_format = resource.format | slugify %}
                  <a href="{{ "/resources/formats#" | append: slug_format | relative_url }}">
                    {{ resource.format }}
                  </a>
                {% else %}
                  No format provided.
                {% endif %}
              </p>
            </div>
          </div>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}
