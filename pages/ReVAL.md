---
title: ReVAL
layout: page
categories: [Data Validation]
format: Software tool
tags: [API, web interface, data aggregation, Python]
---
#### Categories

{{ page.categories }}

#### Tags

{% assign siteTags = site.page_tags %}
{% for tag in page.tags %}
  {% if siteTags contains tag %}
    {{ tag }}
  {% endif %}
{% endfor %}

#### Format

{% assign siteFormats = site.page_formats %}
{% if siteFormats contains page.format %}
  {{ page.format }}
{% endif %}

{% assign reval = site.data.resources[0] %}

## Description

{{ reval.summary }}

## How the US Government uses {{page.title}}

{{ reval.description | markdownify }}

### Case studies

{{ reval.case_studies }}

## Get started

{{ reval.get_started }}
