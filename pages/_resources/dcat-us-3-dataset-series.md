---
resource_name: DCAT-US Schema v3.0 — DatasetSeries fields
slug: dcat-us-3/dataset-series
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
format: ""
details: ""
publish: true
---

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->
<!-- GENERATED DOCS: https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DatasetSeries.md -->

[← DCAT-US v3.0 overview](https://resources.data.gov/standards/catalog/dcat-us-3)

### DatasetSeries fields

**New in v3.0.** DatasetSeries groups related datasets that are published in an ordered sequence — such as annual budget data, recurring survey releases, or versioned reference datasets — under a single series record.

The series record describes the collection as a whole. Each edition within the series is its own Dataset record that points back to the series using the Dataset's `inSeries` field.

**Required fields in v3.0:** None. However, a useful series record should at minimum include `title`, `description`, and `publisher`.

---

#### Core fields

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | Optional | string | A human-readable name for the series. Example: `Federal IT Dashboard Annual Data`. |
| `description` | Optional | string | A human-readable description of the series — what it covers, how often it is published, and what each edition contains. |
| `publisher` | Optional | object | The publishing entity for the series. References the [Agent class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#agent). |
| `contactPoint` | Optional | array | Contact information for the series. References the [Kind class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#kind). |
| `identifier` | Optional | string | A unique identifier for this series. A persistent URI is recommended. |
| `keyword` | Optional | array of strings | Tags describing the series. |
| `accrualPeriodicity` | Optional | string | The frequency at which new editions of the series are published. Use ISO 8601 repeating duration format (e.g., `R/P1Y` for annual) or an ISO 19115 Maintenance Frequency code. |
| `issued` | Optional | string (ISO 8601) | Date the series was first issued. |
| `modified` | Optional | string (ISO 8601) | Most recent date any aspect of the series was changed. |

---

#### Series structure

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `seriesMember` | Optional | array | The Dataset records that are members of this series. |
| `first` | Optional | object | The first Dataset in the series. |
| `last` | Optional | object | The most recent or final Dataset in the series. |

---

#### Coverage and scope

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `spatial` | Optional | object | Geographic coverage of the series. References the [Location class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#location). |
| `temporal` | Optional | object | Temporal coverage of the series as a whole — typically from the first edition to the most recent. References the [PeriodOfTime class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#periodoftime). |
| `theme` | Optional | array | Thematic category or categories of the series. |
| `language` | Optional | array of strings | Language(s) of the series. Use RFC 5646 tags (e.g., `en-US`). |

---

#### Rights and access

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `license` | Optional | string (URL) | License applying to the series as a whole. See [Open Licenses]({{ site.baseurl }}/resources/open-licenses/). |
| `rights` | Optional | string | Rights information for the series. |
| `accessRights` | Optional | string | Access restrictions for the series. |

---

#### Identifiers

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `@id` | Optional | string (IRI) | A globally unique identifier for this DatasetSeries. |
| `@type` | Optional | string | Should be `DatasetSeries`. |

---

#### How to link datasets to a series

In each Dataset record that belongs to the series, use the `inSeries` field to reference the series:

```json
{
  "@type": "Dataset",
  "title": "Federal IT Dashboard Annual Data — FY2024",
  "inSeries": {
    "@id": "https://www.agency.gov/data/it-dashboard-series"
  },
  ...
}
```

---

#### Example series record

```json
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
  "issued": "2010-01-01",
  "temporal": {
    "startDate": "2010-01-01"
  }
}
```

---

*Source: [jsonschema/definitions/DatasetSeries.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json) · Generated reference: [jsonschema/docs/DatasetSeries.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/DatasetSeries.md)*
