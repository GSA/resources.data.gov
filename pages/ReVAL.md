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

## Description
ReVAL (Reusable Validation & Aggregation Library) is a Django App for validating and aggregating data via API and web interface.

## How the US Government uses {{page.title}}
USDA FNS uses ReVAL to implement their Data Validation Service tool for validating data from FNS-742 form submissions.  Each year state agencies report these data for each School Food Authority (SFA) with schools operating the National School Lunch Programs (NSLP) and/or the School Breakfast Program (SBP).

The Census Bureau uses ReVAL to explore an implementation to check Commodity Flow Survey (CFS) Data.  These CFS data are used by policy makers and transportation planners in various federal, state, and local agencies for assessing the demand for transportation facilities and services, energy use, and safety risk and environmental concerns.

The Department of Transportation uses ReVAL to validate Work Zone Data by validating it against the Work Zone Data Exchange (WZDx) Specification.  The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones into vehicles to help automated driving systems (ADS) and human drivers navigate more safely.


#### Case studies
(only generate this section and links to case studies if this has the case studies tag)


## Get started

[Source code](https://github.com/18F/ReVAL)
