---
resource_name: Migrating from DCAT-US v1.1 to v3.0
slug: dcat-us-3-migration
description: >-
  A step-by-step guide to updating your existing v1.1 data.json file to be
  valid against the DCAT-US v3.0 schema.
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - DCAT
  - DCAT-US
  - metadata standard
  - data inventory
  - migration
guidance_tags: ""
format: ""
details: >+

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ -->

  ---

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ### Overview

  This guide covers the minimum changes needed to make your existing v1.1 `data.json` file valid against the v3.0 schema. Work through the steps in order: steps 1 through 4 address breaking changes that will cause validation failures. Steps 5 through 8 are structural changes required for correct v3.0 implementation.

  After completing all steps, run your updated `data.json` against the v3.0 validation script: [jsonschema/test_json_schema.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py)

  Note: the generated reference documentation in `jsonschema/docs/` currently shows all fields as Optional regardless of their actual requirement level. This is a known issue. Trust the requirement levels in the JSON schema files and on the reference pages, not the generated docs.

  ---

  ### Breaking changes: fix these first

  These are changes where your existing v1.1 values will fail v3.0 schema validation.

  #### Step 1: Fix `modified`

  If you use repeating intervals like `R/P1D` or `R/P1Y` in `modified`, replace them with the actual date the data last changed. Move your update frequency to `accrualPeriodicity` using a plain-language code.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"modified": "R/P1Y"</code></td>
        <td><code>"modified": "2024-10-01"</code></td>
      </tr>
      <tr>
        <td><code>"modified": "R/P1D"</code></td>
        <td><code>"modified": "2024-10-15"</code></td>
      </tr>
    </tbody>
  </table>

  Add `accrualPeriodicity` to express update frequency:

  <pre><code>"accrualPeriodicity": "annually"
  </code></pre>

  Accepted values include: `daily`, `weekly`, `monthly`, `quarterly`, `annually`, `irregular`. ISO 8601 repeating duration format (e.g., `R/P1Y`) is also still accepted.

  ---

  #### Step 2: Fix `temporal`

  Replace the v1.1 ISO 8601 interval string with an array of PeriodOfTime objects. At least one of `startDate` or `endDate` is required per object. Open-ended periods are valid; omit `endDate` for ongoing datasets.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"temporal": "2000-01-15T00:00:00Z/2010-01-15T00:00:00Z"</code></td>
        <td>
  <pre><code>"temporal": [
    {
      "@type": "PeriodOfTime",
      "startDate": "2000-01-15",
      "endDate": "2010-01-15"
    }
  ]</code></pre>
        </td>
      </tr>
      <tr>
        <td><code>"temporal": "2020-01-01T00:00:00Z/P1Y"</code></td>
        <td>
  <pre><code>"temporal": [
    {
      "@type": "PeriodOfTime",
      "startDate": "2020-01-01"
    }
  ]</code></pre>
        </td>
      </tr>
    </tbody>
  </table>

  ---

  #### Step 3: Fix `spatial`

  Replace the v1.1 plain string or ad-hoc GeoJSON with an array of Location objects. No fields are required on Location; include `prefLabel` at minimum, and add `bbox` for geospatial precision.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"spatial": "United States"</code></td>
        <td>
  <pre><code>"spatial": [
    {
      "@type": "Location",
      "prefLabel": "United States"
    }
  ]</code></pre>
        </td>
      </tr>
      <tr>
        <td><code>"spatial": "-125,24,-66,50"</code></td>
        <td>
  <pre><code>"spatial": [
    {
      "@type": "Location",
      "prefLabel": "Continental United States",
      "bbox": "POLYGON((-125 24, -66 24, -66 50, -125 50, -125 24))"
    }
  ]</code></pre>
        </td>
      </tr>
    </tbody>
  </table>

  ---

  #### Step 4: Fix `language`

  Replace RFC 5646 language tags with two-letter ISO 639-1 codes. The v3.0 schema enforces a maximum length of two characters; values like `en-US` will fail validation.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"language": ["en-US"]</code></td>
        <td><code>"language": ["en"]</code></td>
      </tr>
      <tr>
        <td><code>"language": ["es-MX"]</code></td>
        <td><code>"language": ["es"]</code></td>
      </tr>
      <tr>
        <td><code>"language": ["fr-CA"]</code></td>
        <td><code>"language": ["fr"]</code></td>
      </tr>
    </tbody>
  </table>

  This applies to `language` on Dataset, Distribution, DataService, and Catalog.

  ---

  ### Structural changes: required for correct v3.0 implementation

  These changes will not cause immediate validation failures, but are required to implement v3.0 correctly.

  #### Step 5: Update `conformsTo` on the Catalog

  Change the plain string URI to a Standard object pointing to DCAT-US v3.0.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"conformsTo": "https://project-open-data.cio.gov/v1.1/schema"</code></td>
        <td>
  <pre><code>"conformsTo": {
    "@type": "Standard",
    "title": "DCAT-US 3.0",
    "identifier": "https://resources.data.gov/dcat-us/3.0.0"
  }</code></pre>
        </td>
      </tr>
    </tbody>
  </table>

  ---

  #### Step 6: Remove `@context` and `describedBy` from the Catalog

  Both fields have been removed at the catalog level in v3.0. Delete these lines from your catalog object.

  <pre><code>// Remove these lines from your catalog:
  "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
  "describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json"
  </code></pre>

  ---

  #### Step 7: Replace `accessLevel` with `accessRights`

  `accessLevel` is not in the v3.0 schema. Add `accessRights` as a free-text string alongside your existing `accessLevel` field. Until updated OMB guidance is issued, keep `accessLevel` in your records the v3.0 schema will not reject it, and existing OMB policy still requires it.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1 <code>accessLevel</code></th>
        <th>v3.0 <code>accessRights</code> (add alongside)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"public"</code></td>
        <td><code>"public"</code></td>
      </tr>
      <tr>
        <td><code>"restricted public"</code></td>
        <td><code>"Access restricted. Contact the publisher to request access."</code></td>
      </tr>
      <tr>
        <td><code>"non-public"</code></td>
        <td><code>"Not available for public release. Contact the publisher for more information."</code></td>
      </tr>
    </tbody>
  </table>

  ---

  #### Step 8: Add `license` to Distribution objects

  In v3.0, `license` is defined at the Distribution level per W3C DCAT. The recommended approach is to add `license` to each Distribution object. You do not need to remove it from the Dataset level during the transition period; the v3.0 schema will not reject records that include it there.

  <table class="usa-table">
    <thead>
      <tr>
        <th>v1.1 (on Dataset)</th>
        <th>v3.0 (add to each Distribution)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
  <pre><code>{
    "@type": "Dataset",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "distribution": [...]
  }</code></pre>
        </td>
        <td>
  <pre><code>{
    "@type": "Dataset",
    "distribution": [
      {
        "title": "Dataset CSV",
        "downloadURL": "https://agency.gov/data/dataset.csv",
        "mediaType": "text/csv",
        "license": "https://creativecommons.org/publicdomain/zero/1.0/"
      }
    ]
  }</code></pre>
        </td>
      </tr>
    </tbody>
  </table>

  If all your distributions share the same license you will need to add it to each one individually.

  ---

  ### You are done with the minimum migration

  After completing steps 1 through 8 your records should validate against the v3.0 schema. Run your updated `data.json` against the validation script at [jsonschema/test_json_schema.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py) to confirm.

  ---

  ### Additional improvements

  These changes are not required for validation but improve the quality and interoperability of your metadata. Work through them when you are ready.

  <table class="usa-table">
    <thead>
      <tr>
        <th>Improvement</th>
        <th>What to do</th>
        <th>More detail</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Upgrade <code>landingPage</code></td>
        <td>Change from a plain URL string to a Document object with <code>title</code> and <code>accessURL</code>.</td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Upgrade <code>theme</code></td>
        <td>Change from plain strings to Concept objects with <code>prefLabel</code>. Example: <code>[{"prefLabel": "Climate Science"}]</code></td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Upgrade <code>describedBy</code></td>
        <td>Change from a plain URL to a Distribution object with <code>title</code>, <code>downloadURL</code> or <code>accessURL</code>, and <code>mediaType</code>. Remove <code>describedByType</code>; it is now expressed as <code>mediaType</code> within the Distribution object.</td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Upgrade <code>conformsTo</code> on Dataset and Distribution</td>
        <td>Change from a plain URI string to an array of Standard objects. Example: <code>[{"@type": "Standard", "title": "ISO 19115", "identifier": "https://www.iso.org/standard/53798.html"}]</code></td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Convert <code>rights</code> to an array</td>
        <td>Change from a single string (max 255 characters in v1.1) to an array of strings with no character limit. Example: <code>["This data is in the public domain."]</code></td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Add <code>accessRestriction</code>, <code>useRestriction</code>, <code>cuiRestriction</code> to Distributions</td>
        <td>Replace free-text access restriction descriptions in <code>rights</code> with structured restriction objects. These are Recommended fields in v3.0 for federal agencies.</td>
        <td><a href="../dcat-us-3-distribution/">Distribution fields</a></td>
      </tr>
      <tr>
        <td>Register APIs as DataService objects</td>
        <td>Move API documentation from Distribution records to DataService objects at the Catalog level. Each DataService requires <code>title</code>, <code>endpointURL</code>, <code>contactPoint</code>, and <code>publisher</code>.</td>
        <td><a href="../dcat-us-3-data-service/">DataService fields</a></td>
      </tr>
      <tr>
        <td>Add <code>purpose</code>, <code>scopeNote</code>, <code>liabilityStatement</code></td>
        <td>New optional fields that improve discoverability and help users assess fitness for use. Plain-language strings.</td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Group recurring datasets into DatasetSeries</td>
        <td>Create DatasetSeries records for annual surveys, recurring publications, and versioned reference data. Link each Dataset to its series using the <code>inSeries</code> field.</td>
        <td><a href="../dcat-us-3-dataset-series/">DatasetSeries fields</a></td>
      </tr>
    </tbody>
  </table>


  ## DCAT US Pages

  ### [Quick Migration Guide](https://resources.data.gov/catalog/dcat-us-3-migration/)

  ### [Quick Migration Guide](https://resources.data.gov/catalog/dcat-us-3-migration/)
  
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
