---
resource_name: DCAT-US Schema v3.0 — Dataset fields
slug: dcat-us-3/dataset
description: >-
  Field-level reference for the DCAT-US v3.0 Dataset class. The Dataset is the
  primary unit of a federal data inventory.
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

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->
<!-- GENERATED DOCS: https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Dataset.md -->

[← DCAT-US v3.0 overview](https://resources.data.gov/standards/catalog/dcat-us-3/)

### Dataset fields

The Dataset class describes an individual dataset or API. Most agency data inventory work happens at this level — each record in your data.json array is an instance of a Dataset.

**Required fields in v3.0:** `title`, `description`, `publisher`, `contactPoint`

All other fields are optional unless noted. Fields that were required in v1.1 but are no longer schema-required in v3.0 are noted below. Agencies should consult current OMB policy guidance for any fields that remain required by policy.

---

#### Core fields

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | Required | string | Human-readable name of the dataset. Should be in plain English with sufficient detail for search and discovery. Avoid acronyms. |
| `description` | Required | string | Human-readable description with sufficient detail for a user to quickly understand whether the dataset is of interest. |
| `publisher` | Required | object | The publishing entity and optionally its parent organization(s). References the [Agent class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `contactPoint` | Required | object | Contact person's name and email for the dataset. References the [Kind class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `identifier` | Optional | string | A unique identifier maintained within the agency catalog. A persistent URI is strongly recommended. |
| `keyword` | Optional | array of strings | Tags to help users discover the dataset. Include both technical and non-technical terms. *(Required in v1.1)* |
| `modified` | Optional | string (ISO 8601) | Most recent date the dataset was changed or updated. *(Required in v1.1)* |
| `issued` | Optional | string (ISO 8601) | Date of formal release. |
| `language` | Optional | array of strings | Language(s) of the dataset. Use RFC 5646 tags (e.g., `en-US`). |
| `landingPage` | Optional | string (URL) | A human-friendly hub or landing page for all resources tied to the dataset. Not intended for an agency's homepage. |
| `theme` | Optional | array of strings | Main thematic category or categories of the dataset. |
| `accrualPeriodicity` | Optional | string | The frequency with which the dataset is published. Use ISO 8601 repeating duration format (e.g., `R/P1Y` for annual, `R/P1D` for daily) or `irregular`. |
| `conformsTo` | Optional | string (URI) | A standard the dataset conforms to. Use a URI that uniquely identifies the standard. |
| `describedBy` | Optional | string (URL) | URL to the data dictionary for the dataset. |
| `isPartOf` | Optional | string | The identifier of a parent dataset, for grouping datasets into a collection. |

---

#### Distribution and access

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `distribution` | Conditional | array of objects | A container for one or more Distribution objects describing how the dataset can be accessed or downloaded. Required if the dataset has an `accessURL` or `downloadURL`. See [Distribution fields](https://resources.data.gov/standards/catalog/dcat-us-3-distribution/). |
| `sample` | Optional | array of objects | Links to sample distributions of the dataset. |

---

#### Access and rights

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `accessRights` | Optional | string | Information about who can access the dataset and under what conditions. |
| `rights` | Optional | string | Rights information, including any restrictions based on privacy, security, or other policies. *(Corresponds to `rights` in v1.1)* |
| `rightsHolder` | Optional | object | An agent owning or managing rights over the dataset. References the [Agent class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `license` | Optional | string (URL) | The license or public domain dedication status of the dataset. Provide as a URL. |

---

#### Spatial and temporal

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `spatial` | Conditional | object | Spatial coverage of the dataset. References the [Location class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). Required if the dataset has a spatial dimension. *(Was a string in v1.1; now uses the Location class)* |
| `temporal` | Conditional | object | Temporal coverage of the dataset. References the [PeriodOfTime class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `spatialResolutionInMeters` | Optional | number | Minimum spatial separation resolvable in the dataset, in meters. New in v3.0. |
| `temporalResolution` | Optional | string (ISO 8601 duration) | Minimum time period resolvable in the dataset. New in v3.0. |

---

#### Versioning and series

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `version` | Optional | string | The version indicator for this dataset. |
| `versionNotes` | Optional | string | A description of changes between this version and the previous version. |
| `hasCurrentVersion` | Optional | string (IRI) | A link to the current version of the dataset. |
| `hasVersion` | Optional | array | Links to known versions of the dataset. |
| `previousVersion` | Optional | string (IRI) | A link to the previous version of the dataset. |
| `replaces` | Optional | array | Datasets that this dataset replaces. |
| `inSeries` | Optional | object | A DatasetSeries to which this dataset belongs. See [DatasetSeries fields](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/). |
| `first` | Optional | object | The first dataset in a series. Used when the dataset itself is a series entry. |

---

#### Provenance and quality

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `provenance` | Optional | array of strings | A statement about the lineage of the dataset. |
| `source` | Optional | array | Datasets from which this dataset was derived. |
| `wasGeneratedBy` | Optional | array | Activities that generated this dataset. References the [Activity class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `hasQualityMeasurement` | Optional | array | Quality measurements associated with the dataset. References the [QualityMeasurement class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |

---

#### Related resources

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `relation` | Optional | array of strings | Related resources, such as companion datasets or documentation. |
| `isReferencedBy` | Optional | array | Other resources that reference or cite this dataset. |
| `hasPart` | Optional | array | Datasets that are part of this dataset. |
| `qualifiedRelation` | Optional | array | A qualified relationship between this dataset and another resource. References the [Relationship class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `subject` | Optional | array | The topic or subject matter of the dataset. |
| `page` | Optional | array | Documentation pages for the dataset. References the [Document class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |

---

#### Attribution and contributors

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `creator` | Optional | array | The entity or entities that created the dataset. References the [Agent class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `contributor` | Optional | array | Entities that contributed to the dataset. |
| `qualifiedAttribution` | Optional | array | A qualified attribution linking a dataset to an agent with a specific role. References the [Attribution class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `wasAttributedTo` | Optional | array | Agents to whom the dataset is attributed. |

---

#### Federal government fields

These fields were introduced in DCAT-US v1.1 for federal agency use and are preserved in v3.0. They are not required at the schema level but may be required by OMB policy guidance.

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `bureauCode` | Policy-dependent | array of strings | Agency and bureau code from OMB Circular A-11, Appendix C. Format: `015:11`. |
| `programCode` | Policy-dependent | array of strings | Primary program related to this dataset, from the Federal Program Inventory. Format: `015:001`. |
| `accessLevel` | Policy-dependent | string | The degree to which the dataset could be made publicly available. One of: `public`, `restricted public`, `non-public`. *(Required in v1.1)* |
| `primaryITInvestmentUII` | Optional | string | IT Unique Investment Identifier linking the dataset to an IT investment in Exhibit 53. |
| `systemOfRecords` | Optional | string (URL) | URL to the System of Records Notice (SORN) if this dataset is a Privacy Act system of records. |
| `dataQuality` | Optional | boolean | Whether the dataset meets the agency's Information Quality Guidelines (`true` or `false`). |

---

#### Identifiers

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `@id` | Optional | string (IRI) | A globally unique identifier for this Dataset as a JSON-LD node. Recommended: use the dataset's persistent URI. |
| `@type` | Optional | string | Should be `Dataset`. |
| `otherIdentifier` | Optional | array | Additional identifiers for the dataset beyond the primary identifier. References the [Identifier class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |
| `supportedSchema` | Optional | object | A schema that the dataset conforms to. |
| `status` | Optional | object | The lifecycle status of the dataset. References the [Concept class](https://resources.data.gov/standards/catalog/dcat-us-3/supporting-classes/). |

---

#### Example

The following is a minimal Dataset record meeting the v3.0 required fields:

```json
{
  "@type": "Dataset",
  "title": "Agency Travel Data FY2024",
  "description": "Records of official travel expenditures by agency employees during fiscal year 2024, including destination, purpose, and cost.",
  "publisher": {
    "@type": "org:Organization",
    "name": "Office of the Chief Financial Officer",
    "subOrganizationOf": {
      "@type": "org:Organization",
      "name": "Example Federal Agency"
    }
  },
  "contactPoint": {
    "@type": "vcard:Contact",
    "fn": "Jane Smith",
    "hasEmail": "mailto:jane.smith@agency.gov"
  }
}
```

---

*Source: [jsonschema/definitions/Dataset.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json) · Generated reference: [jsonschema/docs/Dataset.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Dataset.md)*
