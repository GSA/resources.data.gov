---
resource_name: DCAT-US Schema v3.0 — DataService fields
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

  ---

  ### Overview

  <strong>New in v3.0.</strong> DataService describes a collection of operations accessible through an interface — such as a REST API, a SPARQL endpoint, or an OGC web service — that provides access to one or more datasets.

  In v1.1, APIs were documented as Distributions within a Dataset record. In v3.0, a DataService can be documented at the Catalog level as a first-class resource, separate from any individual dataset's distribution list. This is particularly useful for services that provide access to many datasets, or for services that are not tied to a single dataset.

  <strong>Required fields in v3.0:</strong> <code>endpointURL</code>, <code>contactPoint</code>

  ---

  ### Core fields

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->

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
        <td><code>endpointURL</code></td>
        <td>Mandatory</td>
        <td>array of strings (IRI)</td>
        <td>The root location or primary endpoint URL(s) of the service. Must be web-resolvable IRIs.</td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Mandatory</td>
        <td>array</td>
        <td>Contact information for the service. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Kind class</a>.</td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A human-readable name for the service.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A human-readable description of the service and what data it provides access to.</td>
      </tr>
      <tr>
        <td><code>endpointDescription</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>A description of the service endpoint, such as a URL to an OpenAPI specification or WSDL document.</td>
      </tr>
      <tr>
        <td><code>keyword</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Tags describing the service.</td>
      </tr>
      <tr>
        <td><code>landingPage</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>A web page that provides information about the service.</td>
      </tr>
      <tr>
        <td><code>license</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>The license under which the service is made available.</td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Rights information for the service.</td>
      </tr>
      <tr>
        <td><code>accessRights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Information about who can access the service and under what conditions.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Coverage and scope

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->

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
        <td><code>servesDataset</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>The datasets accessible through this service. Reference each by identifier or Dataset object.</td>
      </tr>
      <tr>
        <td><code>spatial</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>Geographic coverage of the data accessible through the service. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Location class</a>.</td>
      </tr>
      <tr>
        <td><code>temporal</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>Temporal coverage of the data accessible through the service. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">PeriodOfTime class</a>.</td>
      </tr>
      <tr>
        <td><code>theme</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Thematic category of the service.</td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Language(s) supported by the service. Use RFC 5646 tags.</td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>The publishing entity for the service. References the <a href="https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/">Agent class</a>.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Example

  ```
  {
    "@type": "DataService",
    "title": "Agency Open Data REST API",
    "description": "A REST API providing queryable access to agency datasets in JSON and CSV formats.",
    "endpointURL": ["https://api.agency.gov/v1/"],
    "endpointDescription": ["https://api.agency.gov/v1/openapi.json"],
    "contactPoint": [
      {
        "@type": "vcard:Contact",
        "fn": "API Support Team",
        "hasEmail": "mailto:api-support@agency.gov"
      }
    ],
    "publisher": {
      "@type": "org:Organization",
      "name": "Example Federal Agency"
    }
  }
  ```

  ---

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json">jsonschema/definitions/DataService.json</a> · Generated reference: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DataService.md">jsonschema/docs/DataService.md</a>

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
