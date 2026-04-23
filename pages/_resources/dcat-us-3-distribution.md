---
---
resource_name: DCAT-US Schema v3.0 Distribution fields
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

  ### Overview

  A Distribution represents a specific way of accessing or obtaining a dataset: a downloadable CSV, a ZIP package, a REST API endpoint, or any other form of access. A single dataset can have multiple distributions.

  **Required fields in v3.0:** None. However, each distribution should contain at least one of `accessURL` or `downloadURL`.

  ---

  ### Changes from v1.1

  The table below summarizes field-level changes from DCAT-US v1.1 to v3.0 for the Distribution class. See the [DCAT-US v3.0 overview](../dcat-us-3/) for a full list of changes across all classes.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1 Field</th>
        <th>Status in v3.0</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>describedByType</code></td>
        <td>Absorbed into <code>describedBy</code></td>
        <td>Remove <code>describedByType</code> as a standalone field. Express the format as <code>mediaType</code> within the <code>describedBy</code> Distribution object. Example: <code>{"@type": "Distribution", "title": "Data Dictionary", "downloadURL": "https://agency.gov/dict.pdf", "mediaType": "application/pdf"}</code></td>
      </tr>
      <tr>
        <td><code>conformsTo</code> as a plain string URI</td>
        <td>Now an array of Standard objects</td>
        <td>Change from a plain URI string to an array of Standard objects. Example: <code>[{"@type": "Standard", "title": "CSV on the Web", "identifier": "https://www.w3.org/TR/tabular-data-primer/"}]</code>. A distribution can now conform to multiple standards.</td>
      </tr>
      <tr>
        <td><code>rights</code> as a single string</td>
        <td>Now an array of strings</td>
        <td>Convert from a single string to an array of strings. Example: <code>["This data is in the public domain.", "Please cite the source when using this data."]</code></td>
      </tr>
      <tr>
        <td><code>language</code> with RFC 5646 tags (e.g., <code>en-US</code>)</td>
        <td>Now ISO 639-1 two-letter codes only</td>
        <td>Simplify to two-letter ISO 639-1 codes. Change <code>en-US</code> to <code>en</code>, <code>es-MX</code> to <code>es</code>, etc.</td>
      </tr>
      <tr>
        <td><code>license</code> at the Dataset level</td>
        <td>Now at the Distribution level</td>
        <td>Move <code>license</code> from your Dataset objects to each Distribution object. If all distributions share the same license add it to each one individually. Example on each distribution: <code>"license": "https://creativecommons.org/publicdomain/zero/1.0/"</code></td>
      </tr>
      <tr>
        <td><code>byteSize</code> as a number</td>
        <td>Now a string</td>
        <td>Change from a numeric value to a string. Example: <code>"52428800"</code> instead of <code>52428800</code>.</td>
      </tr>
      <tr>
        <td>Access restrictions expressed as free text in <code>rights</code> or via <code>accessLevel</code> on the Dataset</td>
        <td>Now structured via <code>accessRestriction</code>, <code>useRestriction</code>, and <code>cuiRestriction</code></td>
        <td>Use the new restriction fields on each Distribution to express access and use restrictions in a structured, machine-readable way. See the Access and use restrictions section below.</td>
      </tr>
    </tbody>
  </table>

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
        <td>Recommended</td>
        <td>string</td>
        <td>Human-readable description of the file format. Use <code>API</code> for web APIs. Example: <code>CSV</code>, <code>XML</code>, <code>Zipped CSV</code>.</td>
      </tr>
      <tr>
        <td><code>byteSize</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The size of the distribution in bytes, expressed as a numeric string. Example: <code>"52428800"</code> for 50 MB.</td>
      </tr>
      <tr>
        <td><code>checksum</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>A Checksum object for verifying that the downloadable file has not been corrupted or tampered with. Requires <code>algorithm</code> (e.g., <code>SHA-256</code>) and <code>checksumValue</code> (a lowercase hexadecimal string). Example: <code>{"@type": "Checksum", "algorithm": "SHA-256", "checksumValue": "a1b2c3..."}</code>. Strongly recommended for all downloadable distributions. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Checksum class</a>. New in v3.0.</td>
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
        <td>Recommended</td>
        <td>string</td>
        <td>A human-readable title for the distribution. Example: <code>FY2024 Travel Data (CSV)</code>.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>A human-readable description of this distribution.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Optional</td>
        <td>array of Standard objects</td>
        <td>Standards or specifications this distribution conforms to. A distribution can conform to multiple standards. Example: <code>[{"@type": "Standard", "title": "CSV on the Web", "identifier": "https://www.w3.org/TR/tabular-data-primer/"}]</code></td>
      </tr>
      <tr>
        <td><code>describedBy</code></td>
        <td>Recommended</td>
        <td>object</td>
        <td>A Distribution object describing the data dictionary or schema for this distribution. Example: <code>{"@type": "Distribution", "title": "Data Dictionary", "downloadURL": "https://agency.gov/dict.pdf", "mediaType": "application/pdf"}</code>. The <code>describedByType</code> field from v1.1 is no longer needed — express the format as <code>mediaType</code> within this Distribution object.</td>
      </tr>
      <tr>
        <td><code>license</code></td>
        <td>Recommended</td>
        <td>string (URL)</td>
        <td>The license or public domain dedication for this distribution. See <a href="https://resources.data.gov/open-licenses/">Open Licenses</a>. In v1.1 <code>license</code> was documented at the Dataset level. In v3.0 it is more correctly expressed here at the Distribution level per W3C DCAT. If all distributions share the same license add it to each one individually.</td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Recommended</td>
        <td>array of strings</td>
        <td>Rights information for this specific distribution. Example: <code>["This data is in the public domain.", "Please cite the source when using this data."]</code></td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>ISO 639-1 two-letter language codes (e.g., <code>en</code>, <code>es</code>, <code>fr</code>).</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Recommended</td>
        <td>string (ISO 8601)</td>
        <td>The most recent date this specific distribution's content changed. Use an ISO 8601 date, datetime, year, or year-month value — for example, <code>"2024-06-01"</code>. Particularly useful when a dataset has multiple distributions updated on different schedules — for example, a CSV file updated monthly and a ZIP archive updated annually.</td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>The date this specific distribution was formally published. Use an ISO 8601 date, datetime, year, or year-month value — for example, <code>"2024-01-15"</code>. Use this when a distribution was published at a different time from the dataset itself — for example, when a new file format is added to an existing dataset.</td>
      </tr>
      <tr>
        <td><code>page</code></td>
        <td>Optional</td>
        <td>array of Document objects</td>
        <td>Documentation pages for this distribution. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Document class</a>.</td>
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
        <td>Concept object</td>
        <td>The format in which the distribution is released, beyond the file format. For geospatial data, use this to express the spatial representation type (grid, vector, TIN) using URIs from an approved registry. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Concept class</a>.</td>
      </tr>
      <tr>
        <td><code>status</code></td>
        <td>Optional</td>
        <td>Concept object</td>
        <td>The lifecycle status of this distribution. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Concept class</a>.</td>
      </tr>
      <tr>
        <td><code>characterEncoding</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>The character encoding(s) of the distribution. Example: <code>["UTF-8"]</code>.</td>
      </tr>
      <tr>
        <td><code>spatialResolutionInMeters</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Minimum spatial separation resolvable in this distribution, in meters. Example: <code>"1000"</code>.</td>
      </tr>
      <tr>
        <td><code>temporalResolution</code></td>
        <td>Optional</td>
        <td>string (ISO 8601 duration)</td>
        <td>Minimum time period resolvable in this distribution.</td>
      </tr>
      <tr>
        <td><code>compressFormat</code></td>
        <td>Optional</td>
        <td>string (IANA Media Type)</td>
        <td>The compression format of the file — for example, <code>"application/gzip"</code>. Use this when the downloadable file is compressed. Distinct from <code>mediaType</code> (the underlying data format) and <code>packageFormat</code> (how multiple files are bundled). For example, a collection of CSV files compressed with gzip and packaged in a ZIP archive would have <code>"mediaType": "text/csv"</code>, <code>"compressFormat": "application/gzip"</code>, and <code>"packageFormat": "application/zip"</code>.</td>
      </tr>
      <tr>
        <td><code>packageFormat</code></td>
        <td>Optional</td>
        <td>string (IANA Media Type)</td>
        <td>The packaging format used when one or more data files are grouped together for download — for example, <code>"application/zip"</code>. Use this when a distribution bundles multiple files into a single downloadable archive. Distinct from <code>compressFormat</code> (compression) and <code>mediaType</code> (underlying data format).</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Access and use restrictions

  These fields are new in v3.0 and specific to the U.S. federal context. They provide structured, machine-readable ways to express access and use restrictions on a distribution — replacing the v1.1 pattern of writing free text in `rights` or using the three-value `accessLevel` field on the dataset.

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
        <td><code>accessRestriction</code></td>
        <td>Recommended</td>
        <td>array of AccessRestriction objects</td>
        <td>
          Structured access restriction information describing who can access this distribution and under what conditions. Each AccessRestriction object requires a <code>restrictionStatus</code> Concept. Optionally include <code>specificRestriction</code> (the specific authority or policy, such as a FOIA exemption) and <code>restrictionNote</code> (a plain-language explanation).
          <br><br>
          Controlled vocabulary: <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status">NARA Access Restriction Status list</a>.
          <br><br>
          Example for a public distribution: <code>[{"@type": "AccessRestriction", "restrictionStatus": {"prefLabel": "Unrestricted"}}]</code>
          <br><br>
          Example for a restricted distribution: <code>[{"@type": "AccessRestriction", "restrictionStatus": {"prefLabel": "Restricted - Fully"}, "specificRestriction": {"prefLabel": "FOIA Exemption 6"}, "restrictionNote": "Contains personally identifiable information. Not available for public release."}]</code>
        </td>
      </tr>
      <tr>
        <td><code>useRestriction</code></td>
        <td>Recommended</td>
        <td>array of UseRestriction objects</td>
        <td>
          Structured information about how this distribution may be used after access is granted — for example, attribution requirements, restrictions on commercial use, or terms of service. Each UseRestriction object requires a <code>restrictionStatus</code> Concept. Optionally include <code>specificRestriction</code> and <code>restrictionNote</code>.
          <br><br>
          Controlled vocabulary: <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status">NARA Use Restriction Status list</a>.
          <br><br>
          Example: <code>[{"@type": "UseRestriction", "restrictionStatus": {"prefLabel": "Unrestricted"}, "restrictionNote": "Data is in the public domain. Please cite the source when using this data."}]</code>
        </td>
      </tr>
      <tr>
        <td><code>cuiRestriction</code></td>
        <td>Recommended</td>
        <td>CUIRestriction object</td>
        <td>
          Controlled Unclassified Information (CUI) marking for this distribution, per Executive Order 13556 and NARA guidelines. Required for any distribution containing CUI. Requires <code>cuiBannerMarking</code> (e.g., <code>CUI//SP-PRVCY</code>) and <code>designationIndicator</code> (e.g., <code>Controlled by: Example Federal Agency</code>). Optionally include <code>requiredIndicatorPerAuthority</code> (an array of applicable authority strings).
          <br><br>
          See the <a href="https://www.archives.gov/cui/registry/category-marking-list">NARA CUI Registry</a> for valid banner marking values.
          <br><br>
          Example: <code>{"@type": "CUIRestriction", "cuiBannerMarking": "CUI//SP-PRVCY", "designationIndicator": "Controlled by: Example Federal Agency; POC: jane.smith@agency.gov"}</code>
          <br><br>
          Distributions that do not contain CUI should set this field to <code>null</code>.
        </td>
      </tr>
    </tbody>
  </table>

  ---

  ### Example

  A minimal distribution with a direct file download:

  <pre><code>{
    "@type": "Distribution",
    "title": "FY2024 Travel Data (CSV)",
    "description": "Full travel records as a comma-separated values file.",
    "downloadURL": "https://www.agency.gov/data/travel-fy2024.csv",
    "mediaType": "text/csv",
    "format": "CSV",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/"
  }
  </code></pre>

  A distribution for an API endpoint:

  <pre><code>{
    "@type": "Distribution",
    "title": "Travel Data REST API",
    "description": "A fully queryable REST API returning JSON or XML.",
    "accessURL": "https://api.agency.gov/travel/",
    "format": "API",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/"
  }
  </code></pre>

  A more complete distribution showing commonly used fields:

  <pre><code>{
    "@type": "Distribution",
    "title": "FY2024 Travel Data (CSV)",
    "description": "Full travel records as a comma-separated values file. Includes destination, purpose, and cost for all official travel during fiscal year 2024.",
    "downloadURL": "https://www.agency.gov/data/travel-fy2024.csv",
    "mediaType": "text/csv",
    "format": "CSV",
    "byteSize": "52428800",
    "modified": "2024-10-15",
    "issued": "2024-10-01",
    "language": ["en"],
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "rights": ["This data is in the public domain under 17 USC 105."],
    "describedBy": {
      "@type": "Distribution",
      "title": "FY2024 Travel Data Dictionary",
      "downloadURL": "https://www.agency.gov/data/travel-fy2024-dictionary.pdf",
      "mediaType": "application/pdf"
    },
    "conformsTo": [
      {
        "@type": "Standard",
        "title": "CSV on the Web",
        "identifier": "https://www.w3.org/TR/tabular-data-primer/"
      }
    ],
    "checksum": {
      "@type": "Checksum",
      "algorithm": "SHA-256",
      "checksumValue": "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
    },
    "accessRestriction": [
      {
        "@type": "AccessRestriction",
        "restrictionStatus": {
          "prefLabel": "Unrestricted"
        }
      }
    ],
    "useRestriction": [
      {
        "@type": "UseRestriction",
        "restrictionStatus": {
          "prefLabel": "Unrestricted"
        },
        "restrictionNote": "Data is in the public domain. Please cite the source when using this data."
      }
    ],
    "cuiRestriction": null
  }
  </code></pre>

  A distribution for a ZIP archive containing multiple files:

  <pre><code>{
    "@type": "Distribution",
    "title": "FY2024 Travel Data (Zipped CSV with data dictionary)",
    "description": "Travel records and accompanying data dictionary packaged as a ZIP archive.",
    "downloadURL": "https://www.agency.gov/data/travel-fy2024-package.zip",
    "mediaType": "text/csv",
    "format": "Zipped CSV",
    "packageFormat": "application/zip",
    "byteSize": "15728640",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "checksum": {
      "@type": "Checksum",
      "algorithm": "SHA-256",
      "checksumValue": "b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a"
    }
  }
  </code></pre>

  ---

  Source: [jsonschema/definitions/Distribution.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json) · Generated reference: [jsonschema/docs/Distribution.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Distribution.md)


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
