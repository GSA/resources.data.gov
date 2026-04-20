---
resource_name: DCAT-US Schema v3.0 — Distribution fields
slug: dcat-us-3-distribution
description: >-
  Field-level reference for the DCAT-US v3.0 Distribution class. A Distribution
  describes a specific file or access point for a dataset.
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

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

  ---

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ---

  ### Overview

  A Distribution represents a specific way of accessing or obtaining a dataset — a downloadable CSV, a ZIP package, a REST API endpoint, or any other form of access. A single dataset can have multiple distributions.

  <strong>Required fields in v3.0:</strong> None. However, each distribution should contain at least one of <code>accessURL</code> or <code>downloadURL</code>.

  ---

  ### Access fields

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

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
        <td><code>accessURL</code></td>
        <td>Conditional</td>
        <td>string (URL)</td>
        <td>URL providing indirect access to the dataset, such as an API or graphical interface. Use this when the data is not available as a direct download. Should not be a direct download URL.</td>
      </tr>
      <tr>
        <td><code>downloadURL</code></td>
        <td>Conditional</td>
        <td>string (URL)</td>
        <td>URL providing direct access to a downloadable file. Always accompany with <code>mediaType</code>.</td>
      </tr>
      <tr>
        <td><code>mediaType</code></td>
        <td>Conditional</td>
        <td>string (IANA Media Type)</td>
        <td>The MIME type of the file at <code>downloadURL</code>. Required when <code>downloadURL</code> is provided. Example: <code>text/csv</code>, <code>application/zip</code>.</td>
      </tr>
      <tr>
        <td><code>format</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Human-readable description of the file format. Use <code>API</code> for web APIs. Example: <code>CSV</code>, <code>XML</code>, <code>Zipped CSV</code>.</td>
      </tr>
      <tr>
        <td><code>byteSize</code></td>
        <td>Optional</td>
        <td>number</td>
        <td>The size of the distribution in bytes.</td>
      </tr>
      <tr>
        <td><code>checksum</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>A checksum for verifying data integrity. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Checksum class</a>. New in v3.0.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Descriptive fields

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

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
        <td>Optional</td>
        <td>string</td>
        <td>A human-readable title for the distribution. Example: <code>FY2024 Travel Data (CSV)</code>.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A human-readable description of this distribution.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Optional</td>
        <td>string (URI)</td>
        <td>A standard or specification this distribution conforms to.</td>
      </tr>
      <tr>
        <td><code>describedBy</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>URL to the data dictionary or schema for this distribution.</td>
      </tr>
      <tr>
        <td><code>describedByType</code></td>
        <td>Optional</td>
        <td>string (IANA Media Type)</td>
        <td>The MIME type of the file at <code>describedBy</code>. Example: <code>application/schema+json</code>.</td>
      </tr>
      <tr>
        <td><code>license</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>The license or public domain dedication for this distribution. See <a href="https://resources.data.gov/open-licenses/">Open Licenses</a>.</td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Rights information for this specific distribution.</td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Language(s) of this distribution. Use RFC 5646 tags (e.g., <code>en-US</code>).</td>
      </tr>
      <tr>
        <td><code>page</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Documentation pages for this distribution. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Document class</a>.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### New in v3.0

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

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
        <td><code>representationTechnique</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>The format in which the distribution is released, beyond the file format. For geospatial data, use this to express the spatial representation type (grid, vector, TIN) using URIs from an approved registry. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Concept class</a>.</td>
      </tr>
      <tr>
        <td><code>status</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>The lifecycle status of this distribution. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Concept class</a>.</td>
      </tr>
      <tr>
        <td><code>characterEncoding</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The character encoding of the distribution. Example: <code>UTF-8</code>.</td>
      </tr>
      <tr>
        <td><code>spatialResolutionInMeters</code></td>
        <td>Optional</td>
        <td>number</td>
        <td>Minimum spatial separation resolvable in this distribution, in meters.</td>
      </tr>
      <tr>
        <td><code>temporalResolution</code></td>
        <td>Optional</td>
        <td>string (ISO 8601 duration)</td>
        <td>Minimum time period resolvable in this distribution.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Example

  A dataset with two distributions — a CSV download and a REST API:

  ```
  "distribution": [
    {
      "@type": "dcat:Distribution",
      "title": "FY2024 Travel Data (CSV)",
      "description": "Full travel records as a comma-separated values file.",
      "downloadURL": "https://www.agency.gov/data/travel-fy2024.csv",
      "mediaType": "text/csv",
      "format": "CSV"
    },
    {
      "@type": "dcat:Distribution",
      "title": "Travel Data REST API",
      "description": "A fully queryable REST API returning JSON or XML.",
      "accessURL": "https://api.agency.gov/travel/",
      "format": "API"
    }
  ]
  ```

  ---

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json">jsonschema/definitions/Distribution.json</a> · Generated reference: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Distribution.md">jsonschema/docs/Distribution.md</a>

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
