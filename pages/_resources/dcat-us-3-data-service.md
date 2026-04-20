---
resource_name: DCAT-US Schema v3.0 — DataService fields
slug: dcat-us-3/data-service
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
format: ""
details: ""
publish: true
---

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->
<!-- GENERATED DOCS: https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DataService.md -->

[← DCAT-US v3.0 overview]({{ site.baseurl }}/resources/dcat-us-3/)

### DataService fields

**New in v3.0.** DataService describes a collection of operations accessible through an interface — such as a REST API, a SPARQL endpoint, or an OGC web service — that provides access to one or more datasets.

In v1.1, APIs were documented as Distributions within a Dataset record. In v3.0, a DataService can be documented at the Catalog level as a first-class resource, separate from any individual dataset's distribution list. This is particularly useful for services that provide access to many datasets, or for services that are not tied to a single dataset.

**Required fields in v3.0:** `endpointURL`, `contactPoint`

---

#### Core fields

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `endpointURL` | Required | array of strings (IRI) | The root location or primary endpoint URL(s) of the service. Must be web-resolvable IRIs. |
| `contactPoint` | Required | array | Contact information for the service. References the [Kind class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#kind). |
| `title` | Optional | string | A human-readable name for the service. |
| `description` | Optional | string | A human-readable description of the service and what data it provides access to. |
| `endpointDescription` | Optional | array of strings | A description of the service endpoint, such as a URL to an OpenAPI specification or WSDL document. |
| `keyword` | Optional | array of strings | Tags describing the service. |
| `landingPage` | Optional | string (URL) | A web page that provides information about the service. |
| `license` | Optional | string (URL) | The license under which the service is made available. |
| `rights` | Optional | string | Rights information for the service. |
| `accessRights` | Optional | string | Information about who can access the service and under what conditions. |

---

#### Coverage and scope

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `servesDataset` | Optional | array | The datasets accessible through this service. Reference each by identifier or Dataset object. |
| `spatial` | Optional | object | Geographic coverage of the data accessible through the service. References the [Location class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#location). |
| `temporal` | Optional | object | Temporal coverage of the data accessible through the service. References the [PeriodOfTime class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#periodoftime). |
| `theme` | Optional | array | Thematic category of the service. |
| `language` | Optional | array of strings | Language(s) supported by the service. Use RFC 5646 tags. |

---

#### Attribution

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `publisher` | Optional | object | The publishing entity for the service. References the [Agent class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#agent). |
| `creator` | Optional | array | The entity or entities that created the service. |

---

#### Identifiers

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `@id` | Optional | string (IRI) | A globally unique identifier for this DataService. |
| `@type` | Optional | string | Should be `DataService`. |
| `identifier` | Optional | string | A unique identifier for the service within the agency catalog. |

---

#### Example

```json
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

*Source: [jsonschema/definitions/DataService.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json) · Generated reference: [jsonschema/docs/DataService.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DataService.md)*
