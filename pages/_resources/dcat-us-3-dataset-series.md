---
resource_name: DCAT-US Schema v3.0 DatasetSeries fields
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

  ### Overview

  New in v3.0. DatasetSeries groups related datasets that are published in an ordered sequence — such as annual budget data, recurring survey releases, or versioned reference datasets — under a single series record. The series record describes the collection as a whole. Each edition within the series is its own Dataset record that points back to the series using the Dataset's `inSeries` field.

  DatasetSeries is a subclass of Dataset. This means a DatasetSeries record can be included directly in the `dataset` array of a Catalog alongside individual Dataset records.

  **Required fields in v3.0:** `title`, `description`

  **Important date distinctions:** `issued` is the date the series was *established* — not the publication date of the oldest dataset in the series. `modified` is the date the series *description* changed — not the modified date of the newest dataset. Keep these distinct from the `issued` and `modified` fields on the individual Dataset records within the series.

  ---

  ### Core fields

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
        <td>Mandatory</td>
        <td>string</td>
        <td>A human-readable name for the series. Example: <code>"Federal IT Dashboard Annual Data"</code></td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>A human-readable description of the series — what it covers, how often it is published, and what each edition contains. Example: <code>"Annual releases of federal IT investment data from the IT Dashboard, published each fiscal year."</code></td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Recommended</td>
        <td>Agent object</td>
        <td>The organization responsible for maintaining the series as a coherent collection. May differ from the publishers of individual datasets within the series. References the <a href="../dcat-us-3-supporting-classes/">Agent class</a>.
          <br><br>
          Example: <code>{"name": "Office of the Chief Information Officer"}</code></td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Recommended</td>
        <td>array of Kind objects</td>
        <td>Contact information for questions about the series as a whole. References the <a href="../dcat-us-3-supporting-classes/">Kind class</a>. Example: <code>[{"fn": "IT Dashboard Team", "hasEmail": "mailto:itdashboard@agency.gov"}]</code></td>
      </tr>
      <tr>
        <td><code>accrualPeriodicity</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The frequency at which new editions of the series are published. Accepts plain-language codes (e.g., <code>"annually"</code>, <code>"quarterly"</code>, <code>"monthly"</code>), ISO 8601 repeating duration format (e.g., <code>"R/P1Y"</code>), or Dublin Core frequency vocabulary terms. Plain-language codes are preferred.
          <br><br>
          Example: <code>"annually"</code></td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>The date the series was formally established — not the publication date of the oldest dataset in the series. Accepts date, datetime, year (YYYY), or year-month (YYYY-MM).
          <br><br>
          Example: <code>"2010-01-01"</code></td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Recommended</td>
        <td>string (ISO 8601)</td>
        <td>The most recent date the series description or metadata changed — not the modified date of the newest dataset in the series. Accepts date, datetime, year (YYYY), or year-month (YYYY-MM).
          <br><br>
          Example: <code>"2024-12-01"</code></td>
      </tr>
    </tbody>
  </table>

  ---

  ### Series structure

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
        <td><code>first</code></td>
        <td>Recommended</td>
        <td>Dataset object</td>
        <td>The first Dataset in the series — the earliest or founding edition. Providing <code>first</code> and <code>last</code> together gives users a quick sense of the series' temporal span without needing to retrieve all members.
          <br><br>
          The Dataset object must include at minimum <code>title</code>, <code>description</code>, <code>identifier</code>, <code>publisher</code>, and <code>contactPoint</code>.</td>
      </tr>
      <tr>
        <td><code>last</code></td>
        <td>Recommended</td>
        <td>Dataset object</td>
        <td>The most recent or final Dataset in the series. Update this field whenever a new edition is published.
          <br><br>
          The Dataset object must include at minimum <code>title</code>, <code>description</code>, <code>identifier</code>, <code>publisher</code>, and <code>contactPoint</code>.</td>
      </tr>
      <tr>
        <td><code>seriesMember</code></td>
        <td>Recommended</td>
        <td>array of Dataset objects</td>
        <td>The Dataset records that are members of this series. You do not need to list every member here — it is sufficient for each individual Dataset to reference the series via its own <code>inSeries</code> field. However listing key members here improves discoverability and allows catalog browsers to navigate between editions directly.
          <br><br>
          Each Dataset object must include at minimum <code>title</code>, <code>description</code>, <code>identifier</code>, <code>publisher</code>, and <code>contactPoint</code>.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Coverage

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
        <td>Recommended</td>
        <td>array of Location objects</td>
        <td>Geographic region(s) covered by the series as a whole. References the <a href="../dcat-us-3-supporting-classes/">Location class</a>.
          <br><br>
          Example: <code>[{"@type": "Location", "prefLabel": "United States"}]</code></td>
      </tr>
      <tr>
        <td><code>temporal</code></td>
        <td>Recommended</td>
        <td>array of PeriodOfTime objects</td>
        <td>Temporal coverage of the series as a whole — typically from the first edition to the most recent. References the <a href="../dcat-us-3-supporting-classes/">PeriodOfTime class</a>. Update <code>endDate</code> whenever a new edition is published, or omit it for an ongoing series.
          <br><br>
          Ongoing series: <code>[{"@type": "PeriodOfTime", "startDate": "2010-01-01"}]</code>
          <br><br>
          Completed series: <code>[{"@type": "PeriodOfTime", "startDate": "2010-01-01", "endDate": "2024-12-31"}]</code></td>
      </tr>
    </tbody>
  </table>

  ---

  ### How to link datasets to a series

  In each Dataset record that belongs to the series, use the `inSeries` field to reference the series. `inSeries` is an array of DatasetSeries objects — include at minimum the series `@id` so the link can be resolved.

  <pre><code>{
    "@type": "Dataset",
    "title": "Federal IT Dashboard Annual Data - FY2024",
    "description": "Federal IT investment data for fiscal year 2024.",
    "identifier": "https://www.agency.gov/data/it-dashboard-fy2024",
    "publisher": {"name": "Office of the Chief Information Officer"},
    "contactPoint": {"fn": "IT Dashboard Team", "hasEmail": "mailto:itdashboard@agency.gov"},
    "inSeries": [
      {
        "@id": "https://www.agency.gov/data/it-dashboard-series",
        "@type": "DatasetSeries",
        "title": "Federal IT Dashboard Annual Data"
      }
    ]
  }
  </code></pre>

  ---

  ### Example

  A minimal DatasetSeries record meeting all v3.0 required fields:

  <pre><code>{
    "@type": "DatasetSeries",
    "title": "Federal IT Dashboard Annual Data",
    "description": "Annual releases of federal IT investment data from the IT Dashboard, published each fiscal year."
  }
  </code></pre>

  A more complete record showing recommended fields:

  <pre><code>{
    "@type": "DatasetSeries",
    "@id": "https://www.agency.gov/data/it-dashboard-series",
    "title": "Federal IT Dashboard Annual Data",
    "description": "Annual releases of federal IT investment data from the IT Dashboard, published each fiscal year. Each edition covers one fiscal year of IT investment activity across all federal agencies.",
    "publisher": {
      "@type": "Organization",
      "name": "Office of the Chief Information Officer",
      "subOrganizationOf": [
        {
          "@type": "Organization",
          "name": "Example Federal Agency"
        }
      ]
    },
    "contactPoint": [
      {
        "@type": "Kind",
        "fn": "IT Dashboard Team",
        "hasEmail": "mailto:itdashboard@agency.gov"
      }
    ],
    "accrualPeriodicity": "annually",
    "issued": "2010-01-01",
    "modified": "2024-12-01",
    "spatial": [
      {
        "@type": "Location",
        "prefLabel": "United States"
      }
    ],
    "temporal": [
      {
        "@type": "PeriodOfTime",
        "startDate": "2010-10-01"
      }
    ],
    "first": {
      "@type": "Dataset",
      "title": "Federal IT Dashboard Annual Data - FY2010",
      "description": "Federal IT investment data for fiscal year 2010.",
      "identifier": "https://www.agency.gov/data/it-dashboard-fy2010",
      "publisher": {"name": "Office of the Chief Information Officer"},
      "contactPoint": {"fn": "IT Dashboard Team", "hasEmail": "mailto:itdashboard@agency.gov"}
    },
    "last": {
      "@type": "Dataset",
      "title": "Federal IT Dashboard Annual Data - FY2024",
      "description": "Federal IT investment data for fiscal year 2024.",
      "identifier": "https://www.agency.gov/data/it-dashboard-fy2024",
      "publisher": {"name": "Office of the Chief Information Officer"},
      "contactPoint": {"fn": "IT Dashboard Team", "hasEmail": "mailto:itdashboard@agency.gov"}
    },
    "seriesMember": [
      {
        "@type": "Dataset",
        "title": "Federal IT Dashboard Annual Data - FY2022",
        "description": "Federal IT investment data for fiscal year 2022.",
        "identifier": "https://www.agency.gov/data/it-dashboard-fy2022",
        "publisher": {"name": "Office of the Chief Information Officer"},
        "contactPoint": {"fn": "IT Dashboard Team", "hasEmail": "mailto:itdashboard@agency.gov"}
      },
      {
        "@type": "Dataset",
        "title": "Federal IT Dashboard Annual Data - FY2023",
        "description": "Federal IT investment data for fiscal year 2023.",
        "identifier": "https://www.agency.gov/data/it-dashboard-fy2023",
        "publisher": {"name": "Office of the Chief Information Officer"},
        "contactPoint": {"fn": "IT Dashboard Team", "hasEmail": "mailto:itdashboard@agency.gov"}
      },
      {
        "@type": "Dataset",
        "title": "Federal IT Dashboard Annual Data - FY2024",
        "description": "Federal IT investment data for fiscal year 2024.",
        "identifier": "https://www.agency.gov/data/it-dashboard-fy2024",
        "publisher": {"name": "Office of the Chief Information Officer"},
        "contactPoint": {"fn": "IT Dashboard Team", "hasEmail": "mailto:itdashboard@agency.gov"}
      }
    ]
  }
  </code></pre>

  Source: [jsonschema/definitions/DatasetSeries.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json) · Generated reference: [jsonschema/docs/DatasetSeries.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DatasetSeries.md)


  ## DCAT US Pages
  
  ### [Index](https://resources.data.gov/catalog/dcat-us-3/)
  
  ### [Catalog](https://resources.data.gov/catalog/dcat-us-3-catalog/)
  
  ### [Data Service](https://resources.data.gov/catalog/dcat-us-3-data-service/)
  
  ### [Dataset Series](https://resources.data.gov/catalog/dcat-us-3-dataset-series/)
  
  ### [Dataset](https://resources.data.gov/catalog/dcat-us-3-dataset/)
  
  ### [Distribution](https://resources.data.gov/catalog/dcat-us-3-distribution/)
  
  ### [Supporting Classes](https://resources.data.gov/catalog/dcat-us-3-supporting-classes/)
  
  ### [DCAT Priorities](https://resources.data.gov/catalog/dcat-us-priorities/)
  
  ### [DCAT US General Information](https://resources.data.gov/catalog/dcat-us/)

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
