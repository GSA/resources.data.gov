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
format: ""
details: ""
publish: true
---

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->
<!-- GENERATED DOCS: https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Distribution.md -->

[← DCAT-US v3.0 overview](https://resources.data.gov/standards/catalog/dcat-us-3/)

### Distribution fields

A Distribution represents a specific way of accessing or obtaining a dataset — a downloadable CSV, a ZIP package, a REST API endpoint, or any other form of access. A single dataset can have multiple distributions.

**Required fields in v3.0:** None. However, each distribution should contain at least one of `accessURL` or `downloadURL`.

---

#### Access fields

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `accessURL` | Conditional | string (URL) | URL providing indirect access to the dataset, such as an API, a graphical interface, or a web form. Use this when the data is not available as a direct download. Should not be a direct download URL. |
| `downloadURL` | Conditional | string (URL) | URL providing direct access to a downloadable file. Always accompany with `mediaType`. |
| `mediaType` | Conditional | string (IANA Media Type) | The MIME type of the file at `downloadURL`. Required when `downloadURL` is provided. Example: `text/csv`, `application/zip`. |
| `format` | Optional | string | Human-readable description of the file format. Use `API` for web APIs. Example: `CSV`, `XML`, `Zipped CSV`. |
| `byteSize` | Optional | number | The size of the distribution in bytes. |
| `checksum` | Optional | object | A checksum for verifying data integrity. References the [Checksum class](https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/). New in v3.0. |

---

#### Descriptive fields

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | Optional | string | A human-readable title for the distribution. Example: `FY2024 Travel Data (CSV)`. |
| `description` | Optional | string | A human-readable description of this distribution. |
| `conformsTo` | Optional | string (URI) | A standard or specification this distribution conforms to. |
| `describedBy` | Optional | string (URL) | URL to the data dictionary or schema for this distribution. |
| `describedByType` | Optional | string (IANA Media Type) | The MIME type of the file at `describedBy`. Example: `application/schema+json`. |
| `license` | Optional | string (URL) | The license or public domain dedication for this distribution. |
| `rights` | Optional | string | Rights information for this specific distribution. |
| `language` | Optional | array of strings | Language(s) of this distribution. Use RFC 5646 tags (e.g., `en-US`). |
| `page` | Optional | array | Documentation pages for this distribution. References the [Document class](https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/). |

---

#### New in v3.0

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `representationTechnique` | Optional | object | The format in which the distribution is released, beyond the file format. For geospatial data, use this to express the spatial representation type (grid, vector, TIN) using URIs from an approved registry. References the [Concept class](https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/). |
| `status` | Optional | object | The lifecycle status of this distribution. References the [Concept class](https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/). |
| `characterEncoding` | Optional | string | The character encoding of the distribution. Example: `UTF-8`. |
| `spatialResolutionInMeters` | Optional | number | Minimum spatial separation resolvable in this distribution, in meters. |
| `temporalResolution` | Optional | string (ISO 8601 duration) | Minimum time period resolvable in this distribution. |
| `hasPolicy` | Optional | object | A policy under which the distribution is made available. |

---

#### Identifiers

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `@id` | Optional | string (IRI) | A globally unique identifier for this Distribution as a JSON-LD node. |
| `@type` | Optional | string | Should be `Distribution`. |

---

#### Example

A dataset with two distributions — a CSV download and a REST API:

```json
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

*Source: [jsonschema/definitions/Distribution.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json) · Generated reference: [jsonschema/docs/Distribution.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Distribution.md)*
