---
resource_name: DCAT-US Schema v3.0 — Supporting classes
slug: dcat-us-3-supporting-classes
description: >-
  Reference for the DCAT-US v3.0 supporting classes. These classes are
  referenced from Dataset, Distribution, Catalog, DataService, and
  DatasetSeries.
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

<!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema/definitions -->
<!-- GENERATED DOCS: https://github.com/GSA/dcat-us/tree/main/jsonschema/docs -->

[← DCAT-US v3.0 overview](https://resources.data.gov/standards/catalog/dcat-us-3/)

### Supporting classes

These classes are referenced from Dataset, Distribution, Catalog, DataService, and DatasetSeries. Most agencies will encounter them indirectly — through a field that points to one of these structures. Where applicable, the context in which each class appears is noted.

---

#### Agents and organizations

{: #agent}
##### Agent

An entity responsible for a resource — a person, organization, or automated system. Referenced by the `publisher`, `creator`, `contributor`, and `rightsHolder` fields on Dataset and DataService.

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `name` | Required | string | The name of the agent. |
| `@type` | Optional | string | Should be `org:Organization` for organizations or `foaf:Person` for individuals. |
| `subOrganizationOf` | Optional | object | A parent organization. Can be nested to express hierarchy (bureau within agency within U.S. Government). |
| `mbox` | Optional | string | An email address for the agent. |
| `identifier` | Optional | string | A unique identifier for the agent, such as a URI. |
| `address` | Optional | object | A mailing or physical address. References the [Address class](#address). |

*Source: [definitions/Agent.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json) · [docs/Agent.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Agent.md)*

---

{: #organization}
##### Organization

A specific type of Agent representing a formal organization. Shares the same field structure as Agent.

*Source: [definitions/Organization.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Organization.json) · [docs/Organization.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Organization.md)*

---

{: #kind}
##### Kind

Contact information modeled on vCard. Referenced by the `contactPoint` field on Dataset, DataService, and Catalog.

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `fn` | Required | string | The full name of the contact person. |
| `hasEmail` | Required | string | Email address, formatted as `mailto:name@agency.gov`. |
| `@type` | Optional | string | Should be `vcard:Contact`. |

*Source: [definitions/Kind.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json) · [docs/Kind.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Kind.md)*

---

{: #address}
##### Address

A physical or mailing address for an Agent or Organization.

*Source: [definitions/Address.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Address.json) · [docs/Address.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Address.md)*

---

#### Spatial and temporal

{: #location}
##### Location

A geographic location. Referenced by the `spatial` field on Dataset, DataService, and DatasetSeries.

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `geometry` | Optional | string | A GeoJSON or WKT geometry string describing the location. |
| `bbox` | Optional | array | A bounding box as `[min longitude, min latitude, max longitude, max latitude]`. |
| `centroid` | Optional | string | A point geometry representing the centroid of the location. |

*Source: [definitions/Location.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json) · [docs/Location.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Location.md)*

---

{: #periodoftime}
##### PeriodOfTime

A temporal interval defined by start and end dates. Referenced by the `temporal` field on Dataset, DataService, and DatasetSeries.

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `startDate` | Optional | string (ISO 8601) | The start date of the period. |
| `endDate` | Optional | string (ISO 8601) | The end date of the period. |

*Source: [definitions/PeriodOfTime.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json) · [docs/PeriodOfTime.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/PeriodOfTime.md)*

---

#### Controlled vocabularies

{: #concept}
##### Concept

A SKOS concept used in controlled vocabularies. Referenced by `status`, `representationTechnique`, `theme`, and other fields that draw from approved value lists.

*Source: [definitions/Concept.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Concept.json) · [docs/Concept.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Concept.md)*

---

{: #conceptscheme}
##### ConceptScheme

A SKOS concept scheme — a collection of related Concepts forming a controlled vocabulary. Referenced by `themeTaxonomy` on Catalog.

*Source: [definitions/ConceptScheme.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ConceptScheme.json) · [docs/ConceptScheme.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/ConceptScheme.md)*

---

#### Documentation and standards

{: #document}
##### Document

A document resource such as a data dictionary, methodology, or user guide. Referenced by the `page` field on Dataset and Distribution.

*Source: [definitions/Document.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Document.json) · [docs/Document.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Document.md)*

---

{: #standard}
##### Standard

A standard or specification referenced by the `conformsTo` field on Dataset or Distribution.

*Source: [definitions/Standard.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Standard.json) · [docs/Standard.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Standard.md)*

---

#### Identifiers and checksums

{: #identifier}
##### Identifier

An identifier paired with an identifying scheme. Referenced by the `otherIdentifier` field on Dataset.

*Source: [definitions/Identifier.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Identifier.json) · [docs/Identifier.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Identifier.md)*

---

{: #checksum}
##### Checksum

A checksum for verifying data integrity of a Distribution. New in v3.0.

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `checksumValue` | Required | string | The checksum value as a hex string. |
| `algorithm` | Required | object | The algorithm used to generate the checksum (e.g., SHA-256, MD5). |

*Source: [definitions/Checksum.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Checksum.json) · [docs/Checksum.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Checksum.md)*

---

#### Quality and provenance

{: #qualitymeasurement}
##### QualityMeasurement

A quality measurement result associated with a dataset. Referenced by the `hasQualityMeasurement` field on Dataset. New in v3.0.

*Source: [definitions/QualityMeasurement.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/QualityMeasurement.json) · [docs/QualityMeasurement.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/QualityMeasurement.md)*

---

{: #metric}
##### Metric

A quality metric definition used with QualityMeasurement. New in v3.0.

*Source: [definitions/Metric.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Metric.json) · [docs/Metric.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Metric.md)*

---

{: #activity}
##### Activity

A provenance activity — an action that generated or transformed the dataset. Referenced by the `wasGeneratedBy` field on Dataset. New in v3.0.

*Source: [definitions/Activity.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Activity.json) · [docs/Activity.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Activity.md)*

---

#### Relationships and attribution

{: #attribution}
##### Attribution

A qualified attribution linking a resource to an agent with a specific role. Referenced by the `qualifiedAttribution` field on Dataset.

*Source: [definitions/Attribution.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Attribution.json) · [docs/Attribution.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Attribution.md)*

---

{: #relationship}
##### Relationship

A qualified relationship between two resources. Referenced by the `qualifiedRelation` field on Dataset.

*Source: [definitions/Relationship.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Relationship.json) · [docs/Relationship.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Relationship.md)*

---

#### Access and use restrictions

{: #accessrestriction}
##### AccessRestriction

Access restriction information for restricted or non-public datasets. New in v3.0.

*Source: [definitions/AccessRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/AccessRestriction.json) · [docs/AccessRestriction.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/AccessRestriction.md)*

---

{: #cuirestriction}
##### CUIRestriction

Controlled Unclassified Information (CUI) restriction details. New in v3.0.

*Source: [definitions/CUIRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CUIRestriction.json) · [docs/CUIRestriction.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/CUIRestriction.md)*

---

{: #userestriction}
##### UseRestriction

Use restriction information, such as terms of use or licensing conditions. New in v3.0.

*Source: [definitions/UseRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/UseRestriction.json) · [docs/UseRestriction.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/UseRestriction.md)*

---

#### Catalog metadata

{: #catalogrecord}
##### CatalogRecord

Metadata about a specific catalog entry — when it was added to the catalog, by whom, and in what form. Referenced by the `record` field on Catalog.

*Source: [definitions/CatalogRecord.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CatalogRecord.json) · [docs/CatalogRecord.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/CatalogRecord.md)*

---

#### Full class index

| Class | Group | Source file | Generated docs |
|-------|-------|-------------|----------------|
| [Agent](#agent) | Agents | [Agent.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json) | [Agent.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Agent.md) |
| [Organization](#organization) | Agents | [Organization.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Organization.json) | [Organization.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Organization.md) |
| [Kind](#kind) | Agents | [Kind.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json) | [Kind.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Kind.md) |
| [Address](#address) | Agents | [Address.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Address.json) | [Address.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Address.md) |
| [Location](#location) | Spatial/Temporal | [Location.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json) | [Location.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Location.md) |
| [PeriodOfTime](#periodoftime) | Spatial/Temporal | [PeriodOfTime.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json) | [PeriodOfTime.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/PeriodOfTime.md) |
| [Concept](#concept) | Vocabularies | [Concept.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Concept.json) | [Concept.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Concept.md) |
| [ConceptScheme](#conceptscheme) | Vocabularies | [ConceptScheme.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ConceptScheme.json) | [ConceptScheme.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/ConceptScheme.md) |
| [Document](#document) | Docs/Standards | [Document.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Document.json) | [Document.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Document.md) |
| [Standard](#standard) | Docs/Standards | [Standard.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Standard.json) | [Standard.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Standard.md) |
| [Identifier](#identifier) | Identifiers | [Identifier.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Identifier.json) | [Identifier.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Identifier.md) |
| [Checksum](#checksum) | Identifiers | [Checksum.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Checksum.json) | [Checksum.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Checksum.md) |
| [QualityMeasurement](#qualitymeasurement) | Quality/Provenance | [QualityMeasurement.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/QualityMeasurement.json) | [QualityMeasurement.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/QualityMeasurement.md) |
| [Metric](#metric) | Quality/Provenance | [Metric.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Metric.json) | [Metric.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Metric.md) |
| [Activity](#activity) | Quality/Provenance | [Activity.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Activity.json) | [Activity.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Activity.md) |
| [Attribution](#attribution) | Relationships | [Attribution.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Attribution.json) | [Attribution.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Attribution.md) |
| [Relationship](#relationship) | Relationships | [Relationship.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Relationship.json) | [Relationship.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Relationship.md) |
| [AccessRestriction](#accessrestriction) | Restrictions | [AccessRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/AccessRestriction.json) | [AccessRestriction.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/AccessRestriction.md) |
| [CUIRestriction](#cuirestriction) | Restrictions | [CUIRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CUIRestriction.json) | [CUIRestriction.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/CUIRestriction.md) |
| [UseRestriction](#userestriction) | Restrictions | [UseRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/UseRestriction.json) | [UseRestriction.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/UseRestriction.md) |
| [CatalogRecord](#catalogrecord) | Catalog metadata | [CatalogRecord.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CatalogRecord.json) | [CatalogRecord.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/CatalogRecord.md) |
