---
resource_name: DCAT-US Schema v3.0 — Catalog fields
slug: dcat-us-3/catalog
description: >-
  Field-level reference for the DCAT-US v3.0 Catalog class. A Catalog is the
  top-level container for an agency's data inventory.
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

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/Catalog.json -->
<!-- GENERATED DOCS: https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Catalog.md -->

[← DCAT-US v3.0 overview]({{ site.baseurl }}/resources/dcat-us-3/)

### Catalog fields

The Catalog class is the top-level container for an agency's data inventory. Your agency's `data.json` file is an instance of a DCAT-US Catalog. It holds the collection of Dataset records and, in v3.0, can also reference DataService records.

**Required fields in v3.0:** `dataset`

---

#### Catalog fields

<!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/Catalog.json -->

{: .field-table}
| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `dataset` | Required | array of Dataset objects | The list of datasets in this catalog. See [Dataset fields]({{ site.baseurl }}/resources/dcat-us-3/dataset/). |
| `@id` | Optional | string (IRI) | A unique identifier for the Catalog. Recommended: use the URL of the `data.json` file itself. Example: `https://www.agency.gov/data.json`. |
| `@type` | Optional | string | Should be `dcat:Catalog`. |
| `@context` | Optional | string (URL) or object | The JSON-LD context URL or object that defines the schema. |
| `conformsTo` | Optional | string (URI) | The URI identifying the version of the DCAT-US schema the catalog conforms to. For v3.0, use `https://resources.data.gov/dcat-us/3.0.0`. |
| `describedBy` | Optional | string (URL) | URL to the JSON Schema file that defines the schema. Use the canonical schema at `https://github.com/GSA/dcat-us/blob/main/jsonschema/Catalog.json` or a URL to your own extended schema. |
| `title` | Optional | string | A human-readable title for the catalog. |
| `description` | Optional | string | A human-readable description of the catalog and its contents. |
| `issued` | Optional | string (ISO 8601) | Date the catalog was formally issued. |
| `modified` | Optional | string (ISO 8601) | Most recent date the catalog was modified. |
| `language` | Optional | array of strings | Language(s) of the catalog. Use RFC 5646 tags (e.g., `en-US`). |
| `license` | Optional | string (URL) | License for the catalog as a whole. See [Open Licenses]({{ site.baseurl }}/resources/open-licenses/). |
| `rights` | Optional | string | Rights information for the catalog. |
| `spatial` | Optional | object | Spatial coverage of the catalog. References the [Location class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#location). |
| `contactPoint` | Optional | array | Contact points for the catalog. References the [Kind class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#kind). |
| `keyword` | Optional | array of strings | Keywords or tags describing the catalog. |
| `publisher` | Optional | object | The publishing entity for this catalog. References the [Agent class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#agent). |
| `catalog` | Optional | array | Related catalogs linked from this one — for example, sub-agency catalogs within a department-level catalog. |
| `service` | Optional | array of DataService objects | DataService resources accessible through this catalog. New in v3.0. See [DataService fields]({{ site.baseurl }}/resources/dcat-us-3/data-service/). |
| `record` | Optional | array of CatalogRecord objects | Metadata about individual catalog entries. References the [CatalogRecord class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#catalogrecord). |
| `themeTaxonomy` | Optional | array | A knowledge organization system used to classify the catalog's datasets. References the [ConceptScheme class]({{ site.baseurl }}/resources/dcat-us-3/supporting-classes/#conceptscheme). |

---

#### Example

A minimal Catalog with one Dataset:

```json
{
  "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
  "@id": "https://www.agency.gov/data.json",
  "@type": "dcat:Catalog",
  "conformsTo": "https://resources.data.gov/dcat-us/3.0.0",
  "describedBy": "https://github.com/GSA/dcat-us/blob/main/jsonschema/Catalog.json",
  "dataset": [
    {
      "@type": "Dataset",
      "title": "Agency Travel Data FY2024",
      "description": "Records of official travel expenditures during fiscal year 2024.",
      "publisher": {
        "@type": "org:Organization",
        "name": "Example Federal Agency"
      },
      "contactPoint": {
        "@type": "vcard:Contact",
        "fn": "Jane Smith",
        "hasEmail": "mailto:jane.smith@agency.gov"
      }
    }
  ]
}
```

---

*Source: [jsonschema/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/Catalog.json) · Generated reference: [jsonschema/docs/Catalog.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Catalog.md)*
