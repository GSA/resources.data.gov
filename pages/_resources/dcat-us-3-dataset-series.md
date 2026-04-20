---
resource_name: DCAT-US Schema v3.0 — DatasetSeries fields
slug: dcat-us-3-dataset-series
description: >-
  Field-level reference for the DCAT-US v3.0 DatasetSeries class. DatasetSeries
  is new in v3.0 and groups related datasets published over time or across
  versions under a single series record.
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - DCAT
  - DCAT-US
  - metadata standard
  - data inventory
guidance_tags: ""
format: ""
details: >+

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

  ---

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ---

  ### Overview

  <strong>New in v3.0.</strong> DatasetSeries groups related datasets that are published in an ordered sequence — such as annual budget data, recurring survey releases, or versioned reference datasets — under a single series record.

  The series record describes the collection as a whole. Each edition within the series is its own Dataset record that points back to the series using the Dataset's <code>inSeries</code> field.

  <strong>Required fields in v3.0:</strong> None. A useful series record should at minimum include <code>title</code>, <code>description</code>, and <code>publisher</code>.

  ---

  ### Core fields

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

  <table class="usa-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Required</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>title</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>A human-readable name for the series. Example: <code>Federal IT Dashboard Annual Data</code>.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>A human-readable description of the series — what it covers, how often it is published, and what each edition contains.</td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Recommended</td>
        <td>object</td>
        <td>The publishing entity for the series. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Agent class</a>.</td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Contact information for the series. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Kind class</a>.</td>
      </tr>
      <tr>
        <td><code>identifier</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A unique identifier for this series. A persistent URI is recommended.</td>
      </tr>
      <tr>
        <td><code>keyword</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Tags describing the series.</td>
      </tr>
      <tr>
        <td><code>accrualPeriodicity</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The frequency at which new editions of the series are published. Use ISO 8601 repeating duration format (e.g., <code>R/P1Y</code> for annual) or an ISO 19115 Maintenance Frequency code.</td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Date the series was first issued.</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Most recent date any aspect of the series was changed.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Series structure

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

  <table class="usa-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Required</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>seriesMember</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>The Dataset records that are members of this series.</td>
      </tr>
      <tr>
        <td><code>first</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>The first Dataset in the series.</td>
      </tr>
      <tr>
        <td><code>last</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>The most recent or final Dataset in the series.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Coverage and rights

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

  <table class="usa-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Required</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>spatial</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>Geographic coverage of the series. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Location class</a>.</td>
      </tr>
      <tr>
        <td><code>temporal</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>Temporal coverage of the series as a whole — typically from the first edition to the most recent. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">PeriodOfTime class</a>.</td>
      </tr>
      <tr>
        <td><code>license</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>License applying to the series as a whole. See <a href="https://resources.data.gov/open-licenses/">Open Licenses</a>.</td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Rights information for the series.</td>
      </tr>
      <tr>
        <td><code>accessRights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Access restrictions for the series.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### How to link datasets to a series

  In each Dataset record that belongs to the series, use the <code>inSeries</code> field to reference the series:

  ```
  {
    "@type": "Dataset",
    "title": "Federal IT Dashboard Annual Data - FY2024",
    "inSeries": {
      "@id": "https://www.agency.gov/data/it-dashboard-series"
    }
  }
  ```

  ---

  ### Example series record

  ```
  {
    "@type": "DatasetSeries",
    "@id": "https://www.agency.gov/data/it-dashboard-series",
    "title": "Federal IT Dashboard Annual Data",
    "description": "Annual releases of federal IT investment data from the IT Dashboard, published each fiscal year.",
    "accrualPeriodicity": "R/P1Y",
    "publisher": {
      "@type": "org:Organization",
      "name": "Office of the Chief Information Officer",
      "subOrganizationOf": {
        "@type": "org:Organization",
        "name": "Example Federal Agency"
      }
    },
    "contactPoint": [
      {
        "@type": "vcard:Contact",
        "fn": "IT Dashboard Team",
        "hasEmail": "mailto:itdashboard@agency.gov"
      }
    ],
    "issued": "2010-01-01"
  }
  ```

  ---

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json">jsonschema/definitions/DatasetSeries.json</a> · Generated reference: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DatasetSeries.md">jsonschema/docs/DatasetSeries.md</a>

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
