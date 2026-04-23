---
resource_name: DCAT-US Schema v3.0 Catalog fields
slug: dcat-us-3-catalog
description: Field-level reference for the DCAT-US v3.0 Catalog class. A Catalog
  is the top-level container for an agency's data inventory.
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

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json -->

  ---

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ### Overview

  The Catalog class is the top-level container for an agency's data inventory. Your agency's `data.json` file is an instance of a DCAT-US Catalog. It holds the array of Dataset records and, in v3.0, can also reference DataService records.

  Required field in v3.0: A Catalog must contain at least one Dataset.

  ---

  ### Moving from DCAT-US v1.1 to v3.0

  If your agency is upgrading from v1.1, your catalog structure carries forward with minimal changes. The `dataset` array works the same way. The main differences are: `@context` is no longer a catalog field, `conformsTo` now uses a Standard object rather than a plain URI string, and `describedBy` has been removed. Several new optional fields are available, including `service` for registering APIs and `title` and `description` for the catalog itself.

  A valid v3.0 catalog requires only one thing: a `dataset` array containing at least one Dataset record. Everything else is optional at the catalog level. However, adding `@id`, `@type`, `conformsTo`, `title`, `modified`, and `publisher` at the catalog level is strongly recommended as it makes your catalog self-describing and helps harvesters like Data.gov identify and process it correctly.

  Your agency's `data.json` file is an instance of the Catalog class. The file hosted at `agency.gov/data.json` is what Data.gov harvests. Setting `@id` to the URL of your `data.json` file itself is the recommended way to give your catalog a persistent identifier.

  ---

  ### Changes from v1.1

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
        <td><code>@context</code></td>
        <td>Removed</td>
        <td>Remove from your catalog file.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code> as plain string URI</td>
        <td>Now a Standard object</td>
        <td>Change to <code>{"@type": "Standard", "title": "DCAT-US 3.0", "identifier": "https://resources.data.gov/dcat-us/3.0.0"}</code></td>
      </tr>
      <tr>
        <td><code>describedBy</code></td>
        <td>Removed at catalog level</td>
        <td>Remove from your catalog file. The Standard object in <code>conformsTo</code> serves this purpose.</td>
      </tr>
      <tr>
        <td><code>dataset</code></td>
        <td>Unchanged</td>
        <td>No change required. Dataset objects inside must be updated to v3.0 format.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Recommended catalog-level fields

  New in v3.0: `title`, `description`, `publisher`, `contactPoint`, `keyword`, `spatial`, `language`, `license`, `rights`, `issued`, `modified`, `service`, `record`, `themeTaxonomy`, `catalog`

  <table class="usa-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Why it matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>@id</code></td>
        <td>Uniquely identifies your catalog. Use the URL of your data.json file itself — for example, <code>https://www.agency.gov/data.json</code>. This helps harvesters like Data.gov track your catalog as a persistent resource.</td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Tells harvesters this is a DCAT Catalog. Should be <code>dcat:Catalog</code>.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Identifies which version of DCAT-US your catalog uses. For v3.0 use a Standard object: <code>{"@type": "Standard", "title": "DCAT-US 3.0", "identifier": "https://resources.data.gov/dcat-us/3.0.0"}</code></td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>A human-readable name for your catalog. Makes your catalog discoverable as a named resource rather than just a file.</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>The most recent date your catalog content changed. Harvesters use this to detect when to re-index your catalog. Keep it updated whenever datasets are added, removed, or changed.</td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Identifies your agency as the catalog owner. Use an Agent object: <code>{"name": "Example Federal Agency"}</code>.</td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Declares the language of your catalog metadata. Use two-letter ISO 639-1 codes — for example, <code>["en"]</code> for English.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Catalog fields

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json -->

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
        <td><code>dataset</code></td>
        <td>Mandatory</td>
        <td>array of Dataset objects</td>
        <td>The list of datasets in this catalog. See <a href="https://resources.data.gov/catalog/dcat-us-3-dataset/">Dataset fields</a>.</td>
      </tr>
      <tr>
        <td><code>@id</code></td>
        <td>Optional</td>
        <td>string (IRI)</td>
        <td>A unique identifier for the Catalog. Recommended: use the URL of the <code>data.json</code> file itself. Example: <code>https://www.agency.gov/data.json</code>.</td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Should be <code>dcat:Catalog</code>.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Recommended</td>
        <td>Standard object</td>
        <td>A Standard object identifying the schema version this catalog conforms to. For v3.0 use: <code>{"@type": "Standard", "title": "DCAT-US 3.0", "identifier": "https://resources.data.gov/dcat-us/3.0.0"}</code></td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A human-readable title for the catalog.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A human-readable description of the catalog and its contents.</td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Date the catalog was formally issued.</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Most recent date the catalog was modified. Keep this updated — harvesters use it to detect changes.</td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Language(s) of the catalog. Use two-letter ISO 639-1 codes (e.g., <code>en</code>, <code>es</code>, <code>fr</code>).</td>
      </tr>
      <tr>
        <td><code>license</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>License for the catalog as a whole. See <a href="https://resources.data.gov/open-licenses/">Open Licenses</a>.</td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Rights information for the catalog.</td>
      </tr>
      <tr>
        <td><code>spatial</code></td>
        <td>Optional</td>
        <td>array of Location objects</td>
        <td>Spatial coverage of the catalog. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Location class</a>.</td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Optional</td>
        <td>array of Kind objects</td>
        <td>Contact points for the catalog. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Kind class</a>.</td>
      </tr>
      <tr>
        <td><code>keyword</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Keywords or tags describing the catalog.</td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Optional</td>
        <td>Agent object</td>
        <td>The publishing entity for this catalog. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Agent class</a>.</td>
      </tr>
      <tr>
        <td><code>catalog</code></td>
        <td>Optional</td>
        <td>array of Catalog objects</td>
        <td>Related catalogs linked from this one — for example, sub-agency catalogs within a department-level catalog. The Department of Commerce could maintain a top-level catalog that references separate catalogs from the Census Bureau, NOAA, NIST, and other bureaus. Each sub-agency continues to maintain its own data.json and the department-level catalog links to them via this field.</td>
      </tr>
      <tr>
        <td><code>service</code></td>
        <td>Optional</td>
        <td>array of DataService objects</td>
        <td>New in v3.0. DataService resources accessible through this catalog. In v1.1, APIs were documented only as Distributions inside a Dataset record. In v3.0, a DataService can be a first-class catalog resource. See <a href="https://resources.data.gov/catalog/dcat-us-3-data-service/">DataService fields</a>.</td>
      </tr>
      <tr>
        <td><code>record</code></td>
        <td>Optional</td>
        <td>array of CatalogRecord objects</td>
        <td>Catalog records describing when and how individual datasets or services were registered in this catalog. Useful for tracking catalog provenance — when a dataset was added, by whom, and under what schema. Each CatalogRecord requires a <code>modified</code> date and a <code>primaryTopic</code> pointing to the described resource. Most agencies implementing v3.0 for the first time can omit this field and add it later as their catalog management matures.</td>
      </tr>
      <tr>
        <td><code>themeTaxonomy</code></td>
        <td>Optional</td>
        <td>array of ConceptScheme objects</td>
        <td>A knowledge organization system used to classify the catalog's datasets. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">ConceptScheme class</a>. Use this to declare the controlled vocabulary behind your <code>theme</code> values. Federal agencies may reference Data.gov topic categories, ISO 19115 topic categories for geospatial data, or their own agency-specific taxonomy.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Example

  A minimal valid v3.0 catalog:

  <pre><code>{
    "@id": "https://www.agency.gov/data.json",
    "@type": "dcat:Catalog",
    "conformsTo": {
      "@type": "Standard",
      "title": "DCAT-US 3.0",
      "identifier": "https://resources.data.gov/dcat-us/3.0.0"
    },
    "dataset": [
      {
        "@type": "Dataset",
        "title": "Agency Travel Data FY2024",
        "description": "Records of official travel expenditures during fiscal year 2024.",
        "identifier": "https://www.agency.gov/data/travel-fy2024",
        "publisher": {
          "@type": "Organization",
          "name": "Example Federal Agency"
        },
        "contactPoint": {
          "@type": "Kind",
          "fn": "Jane Smith",
          "hasEmail": "mailto:jane.smith@agency.gov"
        }
      }
    ]
  }
  </code></pre>

  A more complete catalog showing recommended fields and a DataService:

  <pre><code>{
    "@id": "https://www.agency.gov/data.json",
    "@type": "dcat:Catalog",
    "conformsTo": {
      "@type": "Standard",
      "title": "DCAT-US 3.0",
      "identifier": "https://resources.data.gov/dcat-us/3.0.0"
    },
    "title": "Example Federal Agency Open Data Catalog",
    "description": "The comprehensive data inventory for Example Federal Agency, including all publicly available datasets and APIs.",
    "publisher": {
      "@type": "Agent",
      "name": "Example Federal Agency"
    },
    "contactPoint": [
      {
        "@type": "Kind",
        "fn": "Open Data Team",
        "hasEmail": "mailto:opendata@agency.gov"
      }
    ],
    "language": ["en"],
    "modified": "2025-04-15",
    "issued": "2014-11-06",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "rights": ["This catalog is maintained by Example Federal Agency."],
    "spatial": [
      {
        "@type": "Location",
        "prefLabel": "United States"
      }
    ],
    "dataset": [
      {
        "@type": "Dataset",
        "title": "Agency Travel Data FY2024",
        "description": "Records of official travel expenditures during fiscal year 2024.",
        "identifier": "https://www.agency.gov/data/travel-fy2024",
        "publisher": {
          "@type": "Organization",
          "name": "Office of the Chief Financial Officer",
          "subOrganizationOf": [
            {
              "@type": "Organization",
              "name": "Example Federal Agency"
            }
          ]
        },
        "contactPoint": {
          "@type": "Kind",
          "fn": "Jane Smith",
          "hasEmail": "mailto:jane.smith@agency.gov"
        },
        "keyword": ["travel", "expenditure", "fiscal year"],
        "modified": "2024-10-15",
        "accessRights": "public",
        "bureauCode": ["015:11"],
        "programCode": ["015:001"]
      }
    ],
    "service": [
      {
        "@type": "DataService",
        "title": "Agency Open Data REST API",
        "description": "A REST API providing queryable access to agency datasets in JSON and CSV formats.",
        "endpointURL": ["https://api.agency.gov/v1/"],
        "endpointDescription": ["https://api.agency.gov/v1/openapi.json"],
        "publisher": {
          "@type": "Agent",
          "name": "Example Federal Agency"
        },
        "contactPoint": [
          {
            "@type": "Kind",
            "fn": "API Support Team",
            "hasEmail": "mailto:api-support@agency.gov"
          }
        ]
      }
    ]
  }
  </code></pre>

  Source: [jsonschema/definitions/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json) · Generated reference: [jsonschema/docs/Catalog.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Catalog.md)


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
