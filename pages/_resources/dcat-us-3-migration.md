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
guidance_tags: ""
format: ""
details: >+
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ -->

  ---



  **This page is a technical guide and not meant to provide implementation guidance for M25-05 or specific field definitions.** Want to know when that happens? Email us at DataGovHelp@gsa.gov, and we'll let you know!

  
  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov


  
  ### Overview
  
  
  This guide covers the changes needed to make your existing v1.1 `data.json` file valid against the v3.0 schema. Each step below describes what needs to change and why.
  
  
  If your agency has a developer or IT team, there is also a Python script developed to implement these changes and verify DCAT-US3.0 validity. See [Using the migration script](#using-the-migration-script) below.
  
  

  Data.gov has tested this migration against 128 federal harvest sources covering 174,847 datasets. Before transformation, 15,955 datasets had validation errors against the v1.1 schema. After running the migration script and validating against DCAT-US3.0, that number dropped to 4,641 -- a 71% reduction in invalid records and a 79% reduction in total validation errors. If your agency has a developer or IT team, hand them the migration script and point them to this page.


  
  ---
  
  ### Using the migration script
  
  
  A Python script is available that transforms the fields described in this guide. If your agency has a developer or IT staff, they can use this script to convert your agency's `data.json` file automatically instead of making changes manually. This can also be integrated into your catalog system to export these fields correctly at catalog (DCAT-US3.0 file) creation time.

  
  There are two files in the [GSA/dcat-us](https://github.com/GSA/dcat-us/tree/main/jsonschema) repository that relate to the transformation from DCAT-US1.1 to 3.0:

  
  - [**transforms.py**](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py) contains the individual translation functions, one per field. Developers who want to integrate the migration logic into their own systems can use these functions directly and/or review the logic for implementation.

  
  - [**convert_dcat_1_1_to_3_0.py**](https://github.com/GSA/dcat-us/blob/main/jsonschema/convert_dcat_1_1_to_3_0.py) is the full conversion tool. It fetches your agency's catalog from a URL, runs all the field transformations, validates the result against the v3.0 schema, and writes the converted catalog to a file.

  
  **Important:** The conversion tool fetches your catalog from a live URL. This was designed to test current DCAT-US1.1 implementations. The script will require modification for any direct implementation in your metadata pipeline.

  
  Your agency can use these scripts as-is, adapt them, or use them as a reference when building your own migration process. Data.gov does not run these scripts on behalf of agencies.

  
  The current conversion tool applies the catalog-level updates in `convert_dcat_1_1_to_3_0.py`, then runs dataset-level transforms. The overview of each step is below.

  
  Please note not all steps may be necessary for all agencies or metadata providers, however applying all of these changes will make the DCAT-US1.1 metadata 3.0 compliant.
  
  
  ---

  ### Transformation Steps
  
  #### Step 1 — Fix `modified`

  
  If you use repeating intervals like `R/P1D` or `R/P1Y` in `modified`, replace them with the actual date the data last changed. Move your update frequency to `accrualPeriodicity` using a plain-language code.
  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step1-r-p1y">
  <td><code>"modified": "R/P1Y"</code></td>
  <td><code>"modified": "2024-10-01"</code></td>
  </tr>
  <tr id="step1-r-p1d">
  <td><code>"modified": "R/P1D"</code></td>
  <td><code>"modified": "2024-10-15"</code></td>
  </tr>
  </tbody>
  </table>

  
  Add `accrualPeriodicity` to express update frequency:

  
  <pre><code>"accrualPeriodicity": "annually"
  </code></pre>

  
  In the current script, repeating durations are mapped to plain-language values including `daily`, `weekly`, `fortnightly`, `monthly`, `quarterly`, `biannually`, `annually`, and `continual`. If the script cannot map the duration, it falls back to `irregular`. ISO 8601 repeating duration format (for example, `R/P1Y`) is also still accepted by the v3.0 schema.

  
  See [`transform_modified()` in transforms.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L182-L203) for how this translation is implemented.

  
  ---

  
  #### Step 2 — Fix `temporal`
  
  
  Replace the v1.1 ISO 8601 interval string with an array of PeriodOfTime objects. At least one of `startDate` or `endDate` is required per object. Open-ended periods are valid — omit `endDate` for ongoing datasets. The current script also strips a repeating prefix such as `R/` or `R5/` before evaluating the interval.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step2-full-interval">
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
  <tr id="step2-open-ended">
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

  
  See [`transform_temporal()` in transforms.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L280-L313) for how this translation is implemented.

  
  ---
  
  
  #### Step 3 — Revise `spatial`

  
  Replace the v1.1 plain string or comma-separated bounding box string with an array of Location objects. The current script converts bbox values in the format `<minLon>,<minLat>,<maxLon>,<maxLat>` into a WKT polygon. Other strings are carried into `prefLabel`.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step3-string">
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
  <tr id="step3-bbox">
  <td><code>"spatial": "-125,24,-66,50"</code></td>
  <td>
  <pre><code>"spatial": [
    {
      "@type": "Location",
      "bbox": "POLYGON((-125 24, -66 24, -66 50, -125 50, -125 24))"
    }
  ]</code></pre>
  </td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_spatial()` in transforms.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L226-L255) for how this translation is implemented.

  
  ---
  
  
  #### Step 4 — Fix `language`

  
  Replace RFC 5646 language tags with two-letter ISO 639-1 codes. The v3.0 schema enforces a maximum length of two characters — values like `en-US` will fail validation.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step4-en">
  <td><code>"language": ["en-US"]</code></td>
  <td><code>"language": ["en"]</code></td>
  </tr>
  <tr id="step4-es">
  <td><code>"language": ["es-MX"]</code></td>
  <td><code>"language": ["es"]</code></td>
  </tr>
  <tr id="step4-fr">
  <td><code>"language": ["fr-CA"]</code></td>
  <td><code>"language": ["fr"]</code></td>
  </tr>
  </tbody>
  </table>
  
  In the current conversion script, this applies to `language` on Dataset and nested Distribution objects.
  
  See [`transform_language()` in transforms.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L171-L181) for how this translation is implemented.

  
  ---
  
  #### Step 5 — Manage `accessLevel` alongside `accessRights`

  
  `accessLevel` is not in the v3.0 schema. Add `accessRights` as a free-text string alongside your existing `accessLevel` field. Until updated OMB guidance is issued, keep `accessLevel` in your records — the v3.0 schema will not reject it.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1 <code>accessLevel</code></th>
  <th>v3.0 <code>accessRights</code> (add alongside)</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step5-public">
  <td><code>"public"</code></td>
  <td><code>"public"</code></td>
  </tr>
  <tr id="step5-restricted">
  <td><code>"restricted public"</code></td>
  <td><code>"Access restricted. Contact the publisher to request access."</code></td>
  </tr>
  <tr id="step5-non-public">
  <td><code>"non-public"</code></td>
  <td><code>"Not available for public release. Contact the publisher for more information."</code></td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_access_rights()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L66-L84) in transforms.py for how this translation is implemented.

  
  ---
  
  
  #### Step 6 — Add `license` to Distribution objects

  
  In v3.0, `license` is defined at the Distribution level per W3C DCAT. The recommended approach is to add `license` to each Distribution object. You do not need to remove it from the Dataset level during the transition period — the v3.0 schema will not reject records that include it there.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1 (on Dataset)</th>
  <th>v3.0 (add to each Distribution)</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step6-license">
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
  
  
  If all your distributions share the same license, the conversion script copies it to each Distribution that does not already declare its own `license`.

  
  See [`propagate_license()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L42-L65) in transforms.py for how this translation is implemented.

  
  ---

  
  #### Step 7 — Convert `rights` to an array

  
  In v3.0, `rights` is an array of strings. The conversion script wraps a single string value in an array and removes `rights` if the value is neither a string nor an array.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step7-rights-string">
  <td><code>"rights": "This data is in the public domain."</code></td>
  <td><code>"rights": ["This data is in the public domain."]</code></td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_rights()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L204-L225) in transforms.py for how this translation is implemented.

  
  ---

  
  #### Step 8 — Upgrade `describedBy` and remove `describedByType`

  
  The conversion script upgrades `describedBy` from a plain URL string to a Distribution-like object at both the Dataset level and on nested Distribution objects. If `describedByType` is present, it is removed and carried into `mediaType`.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step8-describedBy">
  <td>
  <pre><code>"describedBy": "https://agency.gov/schema.json",
  "describedByType": "application/schema+json"</code></pre>
  </td>
  <td>
  <pre><code>"describedBy": {
    "accessURL": "https://agency.gov/schema.json",
    "mediaType": "application/schema+json"
  }</code></pre>
  </td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_described_by()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L100-L115) in transforms.py for how this translation is implemented.

  
  ---

  
  #### Step 9 — Wrap `publisher.subOrganizationOf` in arrays

  
  In v1.1, `publisher.subOrganizationOf` is typically a single Organization object. In v3.0, it must be an array of Organization objects. The conversion script walks the full parent chain and wraps each level.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step9-subOrganizationOf">
  <td>
  <pre><code>"publisher": {
    "name": "Program Office",
    "subOrganizationOf": {
      "name": "Department",
      "subOrganizationOf": {
        "name": "Cabinet Agency"
      }
    }
  }</code></pre>
  </td>
  <td>
  <pre><code>"publisher": {
    "name": "Program Office",
    "subOrganizationOf": [
      {
        "name": "Department",
        "subOrganizationOf": [
          {
            "name": "Cabinet Agency"
          }
        ]
      }
    ]
  }</code></pre>
  </td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_sub_organization_of()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L256-L279) in transforms.py for how this translation is implemented.

  
  ---

  
  #### Step 10 — Upgrade `conformsTo` on Dataset and Distribution

  
  The conversion script upgrades `conformsTo` from a plain URI string to an array containing a Standard object on both the Dataset and each nested Distribution. The current script preserves the identifier but does not add a title.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step10-conformsTo-dataset">
  <td><code>"conformsTo": "https://www.iso.org/standard/53798.html"</code></td>
  <td><code>"conformsTo": [{"@type": "Standard", "identifier": "https://www.iso.org/standard/53798.html"}]</code></td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_conforms_to()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L85-L99) in transforms.py for how this translation is implemented.

  
  ---

  
  #### Step 11 — Upgrade `landingPage`

  
  The conversion script upgrades a plain `landingPage` URL string to a Document object with `accessURL`. If the Dataset already has a `title`, that title is copied into the Document.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step11-landingPage">
  <td>
  <pre><code>"landingPage": "https://agency.gov/air-quality"</code></pre>
  </td>
  <td>
  <pre><code>"landingPage": {
    "@type": "Document",
    "title": "Air Quality Data",
    "accessURL": "https://agency.gov/air-quality"
  }</code></pre>
  </td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_landing_page()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L149-L170) in transforms.py for how this translation is implemented.

  
  ---

  
  #### Step 12 — Normalize `issued`

  
  In v3.0, `issued` must be a valid ISO date or date-time. The conversion script keeps plain dates as dates, normalizes valid date-times to UTC Zulu format, and removes `issued` if it cannot be parsed.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step12-issued-date">
  <td><code>"issued": "2015-06-02T00:00:00"</code></td>
  <td><code>"issued": "2015-06-02"</code></td>
  </tr>
  <tr id="step12-issued-datetime">
  <td><code>"issued": "2018-09-28T02:00:00-04:00"</code></td>
  <td><code>"issued": "2018-09-28T06:00:00Z"</code></td>
  </tr>
  </tbody>
  </table>

  
  See [`transform_issued()`](https://github.com/GSA/dcat-us/blob/main/jsonschema/transforms.py#L116-L148) in transforms.py for how this translation is implemented.

  
  ---
    #### Step 13 — Convert legacy `isPartOf` into catalog-level `datasetSeries`

    If a v1.1 Dataset uses `isPartOf` to point at another Dataset's `identifier`, the conversion script promotes that parent Dataset into a catalog-level `DatasetSeries` and moves the related child Datasets into `seriesMember`.

    The current script also:

    - removes legacy `isPartOf` from the converted child Datasets
    - removes the child Datasets from the top-level `dataset` array
    - changes the promoted parent Dataset `identifier` into DatasetSeries `@id`
    - wraps the promoted series `contactPoint` in an array when needed
    - does not populate `first` or `last`

    <table class="usa-table">
    <thead>
    <tr>
    <th>v1.1</th>
    <th>v3.0</th>
    </tr>
    </thead>
    <tbody>
    <tr id="step13-datasetSeries">
    <td>
    <pre><code>"dataset": [
      {
        "title": "Annual Widget Releases",
        "identifier": "https://example.gov/series/widget-series",
        "contactPoint": {
          "fn": "Widget Desk",
          "hasEmail": "mailto:widgets@agency.gov"
        }
      },
      {
        "title": "Widget Inventory 2024",
        "identifier": "widget-2024",
        "isPartOf": "https://example.gov/series/widget-series"
      }
    ]</code></pre>
    </td>
    <td>
    <pre><code>"dataset": [],
    "datasetSeries": [
      {
        "@type": "DatasetSeries",
        "@id": "https://example.gov/series/widget-series",
        "title": "Annual Widget Releases",
        "contactPoint": [
          {
            "fn": "Widget Desk",
            "hasEmail": "mailto:widgets@agency.gov"
          }
        ],
        "seriesMember": [
          {
            "title": "Widget Inventory 2024",
            "identifier": "widget-2024"
          }
        ]
      }
    ]</code></pre>
    </td>
    </tr>
    </tbody>
    </table>

    If an `isPartOf` parent cannot be found, the script leaves that Dataset in the top-level `dataset` array and logs a warning instead of creating a partial DatasetSeries.

    This catalog-level change is handled by the conversion script directly. See [`convert_dcat_1_1_to_3_0.py`](https://github.com/GSA/dcat-us/blob/main/jsonschema/convert_dcat_1_1_to_3_0.py#L275-L433) for the implementation.

    ---

    #### Step 14 — Update `conformsTo` on the Catalog
  
  #### Step 13 — Update `conformsTo` on the Catalog
  
  Change the plain string URI to a Standard object pointing to DCAT-US v3.0.
  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step14-conformsTo">
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

  
  This catalog-level change is handled by the conversion script directly. See [`convert_dcat_1_1_to_3_0.py`](https://github.com/GSA/dcat-us/blob/main/jsonschema/convert_dcat_1_1_to_3_0.py#L275-L327) for the implementation.

  
  ---
  
  #### Step 15 — Remove `@context` and `describedBy` from the Catalog
  #### Step 14 — Remove `@context` and `describedBy` from the Catalog

  
  Both fields have been removed at the catalog level in v3.0. Delete these lines from your catalog object.

  
  <pre><code>// Remove these lines from your catalog:
  "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
  "describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json"
  </code></pre>

  
  This catalog-level change is handled by the conversion script directly. See [`convert_dcat_1_1_to_3_0.py`](https://github.com/GSA/dcat-us/blob/main/jsonschema/convert_dcat_1_1_to_3_0.py#L275-L327) for the implementation.

  
  ---

  #### Step 16 — Normalize catalog-level `modified`
  #### Step 15 — Normalize catalog-level `modified`

  
  If the Catalog itself has a `modified` value, the conversion script normalizes valid date-times to UTC Zulu format. If the value cannot be parsed as a date, the script removes it.

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>v1.1</th>
  <th>v3.0</th>
  </tr>
  </thead>
  <tbody>
  <tr id="step16-catalog-modified-datetime">
  <td><code>"modified": "2024-10-01T12:30:00-04:00"</code></td>
  <td><code>"modified": "2024-10-01T16:30:00Z"</code></td>
  </tr>
  <tr id="step16-catalog-modified-invalid">
  <td><code>"modified": "unknown"</code></td>
  <td><code>// removed</code></td>
  </tr>
  </tbody>
  </table>

  
  This catalog-level change is handled by the conversion script directly. See [`convert_dcat_1_1_to_3_0.py`](https://github.com/GSA/dcat-us/blob/main/jsonschema/convert_dcat_1_1_to_3_0.py#L275-L327) for the implementation.

  
  ---

  
  ### You are done with the minimum migration

  
  After completing steps 1 through 16, your records should be much closer to the current conversion script output and should validate against the v3.0 schema more consistently. Run your updated `data.json` against the validation script at <https://harvest.data.gov/validate/> to confirm.

  
  ---
  
  
  ### Changelog

  
  <table class="usa-table">
  <thead>
  <tr>
  <th>Date</th>
  <th>Change</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>2026-09-18</td>
  <td>Added the legacy <code>isPartOf</code> to catalog <code>datasetSeries</code> migration step to match DCAT-US3 translation updates and renumbered the catalog-level steps that follow.</td>
  </tr>
  <tr>
  <td>2026-06-24</td>
  <td>Rewrote overview; aligned the migration steps to the current conversion script; removed the split between breaking and structural changes; added coverage for catalog <code>modified</code>, <code>rights</code>, <code>describedBy</code>, <code>subOrganizationOf</code>, Dataset and Distribution <code>conformsTo</code>, <code>landingPage</code>, and <code>issued</code>.</td>
  </tr>
  <tr>
  <td>2026-05-27</td>
  <td>Added deep-link anchors to all table rows. No content changes.</td>
  </tr>
  </tbody>
  </table>

    

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
