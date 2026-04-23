---
resource_name: DCAT-US Schema v3.0 DataService fields
slug: dcat-us-3-data-service
description: >-
  Field-level reference for the DCAT-US v3.0 DataService class. DataService is
  new in v3.0 and describes an API or other service that provides programmatic
  access to one or more datasets.
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - DCAT
  - DCAT-US
  - metadata standard
  - data inventory
  - API
guidance_tags: ""
format: ""
details: >+

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->

  ---

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ### Overview

  New in v3.0. DataService describes a collection of operations accessible through an interface — such as a REST API, a SPARQL endpoint, or an OGC web service — that provides access to one or more datasets.

  In v1.1, APIs were documented as Distributions within a Dataset record. In v3.0, a DataService can be documented at the Catalog level as a first-class resource, separate from any individual dataset's distribution list. This is particularly useful for services that provide access to many datasets, or for services that are not tied to a single dataset.

  **When to use DataService vs Distribution:** Use a Distribution when an API is the primary access method for a specific single dataset. Use a DataService when an API serves multiple datasets, is not tied to a single dataset, or when you want to describe the service itself as a catalog-level resource with its own metadata, contact information, and documentation.

  **Required fields in v3.0:** `endpointURL`, `contactPoint`, `publisher`, `title`

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
        <td>A human-readable name for the service. Example: <code>"Agency Open Data REST API"</code></td>
      </tr>
      <tr>
        <td><code>endpointURL</code></td>
        <td>Mandatory</td>
        <td>array of strings (IRI)</td>
        <td>The root location(s) or primary endpoint URL(s) of the service. Must be web-resolvable IRIs. This is an array — a service can expose multiple endpoints simultaneously, for example both a v1 and v2 API.
          <br><br>
          Example: <code>["https://api.agency.gov/v1/"]</code> or <code>["https://api.agency.gov/v1/", "https://api.agency.gov/v2/"]</code></td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Mandatory</td>
        <td>array of Kind objects</td>
        <td>Contact information for questions about the service. Must include an email address that is continuously monitored. References the <a href="../dcat-us-3-supporting-classes/">Kind class</a>. Example: <code>[{"fn": "API Support Team", "hasEmail": "mailto:api-support@agency.gov"}]</code></td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Mandatory</td>
        <td>Agent object</td>
        <td>The person or organization responsible for publishing and making the service available. References the <a href="../dcat-us-3-supporting-classes/">Agent class</a>. Example: <code>{"name": "Example Federal Agency"}</code></td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A plain-language description of the service and what data it provides access to.</td>
      </tr>
      <tr>
        <td><code>endpointDescription</code></td>
        <td>Recommended</td>
        <td>array of strings</td>
        <td>URLs pointing to documentation that describes the service endpoint, its operations, and parameters. Typically a URL to an OpenAPI specification, WSDL document, or similar service description.
          <br><br>
          Example: <code>["https://api.agency.gov/v1/openapi.json"]</code></td>
      </tr>
      <tr>
        <td><code>servesDataset</code></td>
        <td>Recommended</td>
        <td>array of Dataset objects</td>
        <td>The datasets this service provides access to. Each Dataset must include at minimum <code>title</code>, <code>description</code>, <code>identifier</code>, <code>publisher</code>, and <code>contactPoint</code>. Use this to link the service to the datasets it serves.
          <br><br>
          A DataService does not need to serve a specific dataset — for general-purpose APIs this field can be omitted.</td>
      </tr>
      <tr>
        <td><code>keyword</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Keywords or tags describing the service. Include both technical and non-technical terms. Example: <code>["climate", "weather", "API", "REST"]</code></td>
      </tr>
      <tr>
        <td><code>identifier</code></td>
        <td>Optional</td>
        <td>Identifier object or string</td>
        <td>A unique identifier for the service in the context of the catalog. A persistent URI is recommended. Example: <code>"https://agency.gov/services/open-data-api"</code></td>
      </tr>
      <tr>
        <td><code>otherIdentifier</code></td>
        <td>Optional</td>
        <td>array of Identifier objects</td>
        <td>Additional identifiers for the service beyond the main identifier.</td>
      </tr>
      <tr>
        <td><code>created</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Date the service was first created. Distinct from a public launch date.</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Most recent date the service was changed or updated. Accepts date, datetime, year (YYYY), or year-month (YYYY-MM). Example: <code>"2024-03-20"</code></td>
      </tr>
    </tbody>
  </table>

  ---

  ### Access and rights

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
        <td><code>license</code></td>
        <td>Recommended</td>
        <td>string (URL)</td>
        <td>The license under which the service is made available. Provide as a URL. Example: <code>"https://creativecommons.org/publicdomain/zero/1.0/"</code></td>
      </tr>
      <tr>
        <td><code>accessRights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Information about who can access the service and under what conditions. Example: <code>"Public access with no restrictions."</code></td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Rights statements not already covered by <code>license</code> or <code>accessRights</code>, such as copyright or attribution requirements. Example: <code>["Data provided by the National Climate Data Center is in the public domain."]</code></td>
      </tr>
      <tr>
        <td><code>rightsHolder</code></td>
        <td>Optional</td>
        <td>array of Organization objects</td>
        <td>Organizations holding rights on the service. References the <a href="../dcat-us-3-supporting-classes/">Organization class</a>.</td>
      </tr>
      <tr>
        <td><code>creator</code></td>
        <td>Optional</td>
        <td>array of Agent objects</td>
        <td>Agents primarily responsible for producing the service, if different from publisher.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Coverage and scope

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
        <td>array of Location objects</td>
        <td>Geographic region(s) covered by the data accessible through this service. References the <a href="../dcat-us-3-supporting-classes/">Location class</a>.
          <br><br>
          Example: <code>[{"@type": "Location", "prefLabel": "United States"}]</code></td>
      </tr>
      <tr>
        <td><code>temporal</code></td>
        <td>Optional</td>
        <td>array of PeriodOfTime objects</td>
        <td>Time period(s) covered by the data accessible through this service. References the <a href="../dcat-us-3-supporting-classes/">PeriodOfTime class</a>.
          <br><br>
          Example: <code>[{"@type": "PeriodOfTime", "startDate": "2000-01-01", "endDate": "2024-12-31"}]</code></td>
      </tr>
      <tr>
        <td><code>spatialResolutionInMeters</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The minimum spatial separation resolvable by this service, in meters. Expressed as a numeric string. Example: <code>"1000"</code> for 1 kilometre resolution.</td>
      </tr>
      <tr>
        <td><code>temporalResolution</code></td>
        <td>Optional</td>
        <td>string (ISO 8601 duration)</td>
        <td>The minimum time period resolvable by this service. Example: <code>"P1D"</code> for daily resolution.</td>
      </tr>
      <tr>
        <td><code>theme</code></td>
        <td>Optional</td>
        <td>array of Concept objects</td>
        <td>Thematic categories for the service. Each Concept requires a <code>prefLabel</code>. Example: <code>[{"prefLabel": "Climate Science"}]</code></td>
      </tr>
      <tr>
        <td><code>category</code></td>
        <td>Optional</td>
        <td>array of Concept objects</td>
        <td>High-level categories for the service. Distinct from <code>theme</code>.</td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>string or array of strings</td>
        <td>ISO 639-1 two-letter language codes supported by the service. Example: <code>"en"</code> or <code>["en", "es"]</code></td>
      </tr>
    </tbody>
  </table>

  ---

  ### Provenance and quality

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
        <td><code>conformsTo</code></td>
        <td>Optional</td>
        <td>array of Standard objects</td>
        <td>Standards or specifications the service endpoints implement. References the <a href="../dcat-us-3-supporting-classes/">Standard class</a>.
          <br><br>
          Example: <code>[{"@type": "Standard", "title": "OGC API - Features", "identifier": "https://ogcapi.ogc.org/features/"}]</code></td>
      </tr>
      <tr>
        <td><code>qualifiedAttribution</code></td>
        <td>Optional</td>
        <td>array of Attribution objects</td>
        <td>Agents with specific named responsibilities for the service — for example, a service owner or technical lead. References the <a href="../dcat-us-3-supporting-classes/">Attribution class</a>.</td>
      </tr>
      <tr>
        <td><code>wasUsedBy</code></td>
        <td>Optional</td>
        <td>array of Activity objects</td>
        <td>Activities that used or tested the service. References the <a href="../dcat-us-3-supporting-classes/">Activity class</a>.</td>
      </tr>
      <tr>
        <td><code>hasQualityMeasurement</code></td>
        <td>Optional</td>
        <td>array of QualityMeasurement objects</td>
        <td>Quality measurements for the service — for example, availability percentage, average response time, or reliability metrics. References the <a href="../dcat-us-3-supporting-classes/">QualityMeasurement class</a>.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Example

  A minimal DataService record meeting all v3.0 required fields:

  <pre><code>{
    "@type": "DataService",
    "title": "Agency Open Data REST API",
    "endpointURL": ["https://api.agency.gov/v1/"],
    "contactPoint": [
      {
        "@type": "Kind",
        "fn": "API Support Team",
        "hasEmail": "mailto:api-support@agency.gov"
      }
    ],
    "publisher": {
      "@type": "Agent",
      "name": "Example Federal Agency"
    }
  }
  </code></pre>

  A more complete record showing recommended and commonly used fields:

  <pre><code>{
    "@type": "DataService",
    "title": "Agency Open Data REST API",
    "description": "A REST API providing queryable access to agency datasets in JSON and CSV formats. Supports filtering by date range, geographic area, and dataset type.",
    "endpointURL": [
      "https://api.agency.gov/v1/",
      "https://api.agency.gov/v2/"
    ],
    "endpointDescription": [
      "https://api.agency.gov/v1/openapi.json",
      "https://api.agency.gov/v2/openapi.json"
    ],
    "contactPoint": [
      {
        "@type": "Kind",
        "fn": "API Support Team",
        "hasEmail": "mailto:api-support@agency.gov",
        "tel": "+1-202-555-0100"
      }
    ],
    "publisher": {
      "@type": "Agent",
      "name": "Example Federal Agency"
    },
    "identifier": "https://agency.gov/services/open-data-api",
    "keyword": ["open data", "API", "REST", "federal data"],
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "accessRights": "Public access with no restrictions.",
    "rights": ["Data provided by Example Federal Agency is in the public domain."],
    "modified": "2024-03-20",
    "language": ["en"],
    "spatial": [
      {
        "@type": "Location",
        "prefLabel": "United States"
      }
    ],
    "temporal": [
      {
        "@type": "PeriodOfTime",
        "startDate": "2000-01-01"
      }
    ],
    "theme": [
      {
        "prefLabel": "Open Government Data"
      }
    ],
    "conformsTo": [
      {
        "@type": "Standard",
        "title": "OpenAPI Specification 3.0",
        "identifier": "https://spec.openapis.org/oas/v3.0.0"
      }
    ],
    "servesDataset": [
      {
        "@type": "Dataset",
        "title": "Agency Travel Data FY2024",
        "description": "Records of official travel expenditures during fiscal year 2024.",
        "identifier": "https://agency.gov/data/travel-fy2024",
        "publisher": {
          "name": "Example Federal Agency"
        },
        "contactPoint": {
          "fn": "Jane Smith",
          "hasEmail": "mailto:jane.smith@agency.gov"
        }
      }
    ]
  }
  </code></pre>

  Source: [jsonschema/definitions/DataService.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json) · Generated reference: [jsonschema/docs/DataService.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DataService.md)


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
