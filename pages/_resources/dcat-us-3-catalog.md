---
resource_name: DCAT-US Schema v3.0 Catalog fields
slug: dcat-us-3-catalog
description: Field-level reference for the DCAT-US v3.0 Catalog class. A Catalog is the
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
guidance_tags: ""
format: ""
details: >+

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json -->

  ---

  See an error on this page or have other feedback? [Email us](datagovhelp@gsa.gov)



  ### Overview

  The Catalog class is the top-level container for an agency's data inventory. Your agency's <code>data.json</code> file is an instance of a DCAT-US Catalog. It holds the array of Dataset records and, in v3.0, can also reference DataService records.   Required field in v3.0: A Catalog must contain at least one Dataset.

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
        <td><code>@context</code></td>
        <td>Optional</td>
        <td>string (URL) or object</td>
        <td>The JSON-LD context URL or object that defines the schema.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Optional</td>
        <td>string (URI)</td>
        <td>The URI identifying the version of the DCAT-US schema the catalog conforms to. For v3.0, use <code>https://resources.data.gov/dcat-us/3.0.0</code>.</td>
      </tr>
      <tr>
        <td><code>describedBy</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>URL to the JSON Schema file that defines the schema. Use the canonical schema at <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json">jsonschema/definitions/Catalog.json</a> or a URL to your own extended schema.</td>
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
        <td>Most recent date the catalog was modified.</td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Language(s) of the catalog. Use RFC 5646 tags (e.g., <code>en-US</code>).</td>
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
        <td>string</td>
        <td>Rights information for the catalog.</td>
      </tr>
      <tr>
        <td><code>spatial</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>Spatial coverage of the catalog. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Location class</a>.</td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Optional</td>
        <td>array</td>
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
        <td>object</td>
        <td>The publishing entity for this catalog. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Agent class</a>.</td>
      </tr>
      <tr>
        <td><code>catalog</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Related catalogs linked from this one — for example, sub-agency catalogs within a department-level catalog.</td>
      </tr>
      <tr>
        <td><code>service</code></td>
        <td>Optional</td>
        <td>array of DataService objects</td>
        <td>DataService resources accessible through this catalog. New in v3.0. See <a href="https://resources.data.gov/catalog/dcat-us-3-data-service/">DataService fields</a>.</td>
      </tr>
      <tr>
        <td><code>record</code></td>
        <td>Optional</td>
        <td>array of CatalogRecord objects</td>
        <td>Metadata about individual catalog entries. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">CatalogRecord class</a>.</td>
      </tr>
      <tr>
        <td><code>themeTaxonomy</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>A knowledge organization system used to classify the catalog's datasets. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">ConceptScheme class</a>.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Example

  A minimal Catalog with one Dataset:

    <pre><code>{
      "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
      "@id": "https://www.agency.gov/data.json",
      "@type": "dcat:Catalog",
      "conformsTo": "https://resources.data.gov/dcat-us/3.0.0",
      "describedBy": "https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json",
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
    </code></pre>

  ---


  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json">jsonschema/definitions/Catalog.json</a> · Generated reference: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Catalog.md">jsonschema/docs/Catalog.md</a>


  ## DCAT US 3 <a href="https://resources.data.gov/catalog/dcat-us-3/">Index Page</a>


  ### Link to DCAT US 3 <a href="https://resources.data.gov/catalog/dcat-us-3-catalog/">Catalog</a>
  

  ### Link to DCAT US 3 <a href="https://resources.data.gov/catalog/dcat-us-3-data-service/">Data Service</a>
  
  
  ### Link to DCAT US 3 <a href="https://resources.data.gov/catalog/dcat-us-3-dataset-series/">Dataset Series</a>
  

  ### Link to DCAT US 3 <a href="https://resources.data.gov/catalog/dcat-us-3-dataset/">Dataset</a>
  

  ### Link to DCAT US 3 <a href="https://resources.data.gov/catalog/dcat-us-3-distribution/">Distribution</a>
  

  ### Link to DCAT US 3 <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Supporting Classes</a>
  

  ### Link to <a href="https://resources.data.gov/catalog/dcat-us-priorities/">DCAT Priorities</a>
  

  ### Link to <a href="https://resources.data.gov/catalog/dcat-us/">DCAT US General Information</a>


examples: ""
link: ""
layout: resource
toc: true
publish: true
---
