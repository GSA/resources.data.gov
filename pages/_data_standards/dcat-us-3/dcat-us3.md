---
resource_name: DCAT-US Schema v3.0
slug: dcat-us-3
description: Reference documentation for DCAT-US v3.0, the federal metadata standard
  for documenting datasets, APIs, and data services. Use this reference to build or
  validate your agency's data inventory.
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - DCAT
  - DCAT-US
  - metadata standard
  - data inventory
  - data standards
guidance_tags: ""
format: ""
details: >+

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/README.md -->

  <table class="usa-table vertical-headings">
    <tbody>
      <tr>
        <th>Specification name:</th>
        <td>DCAT-US Schema v3.0</td>
      </tr>
      <tr>
        <th>This version:</th>
        <td>3.0</td>
      </tr>
      <tr>
        <th>Previous version:</th>
        <td><a href="https://resources.data.gov/catalog/dcat-us/">DCAT-US v1.1 (Project Open Data Metadata Schema)</a></td>
      </tr>
      <tr>
        <th>Schema repository:</th>
        <td><a href="https://github.com/GSA/dcat-us">github.com/GSA/dcat-us</a></td>
      </tr>
      <tr>
        <th>JSON Schema:</th>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json">jsonschema/definitions/Catalog.json</a></td>
      </tr>
    </tbody>
  </table>

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ### What is DCAT-US v3.0?

  DCAT-US v3.0 is the federal data catalog metadata standard, updated to improve the Findability, Accessibility, Interoperability, and Reusability (FAIRness) of federal data. It is a U.S. application profile of the [W3C Data Catalog Vocabulary (DCAT) version 3](https://www.w3.org/TR/vocab-dcat-3/) — not a new or separate standard. This means most DCAT-US v3.0 metadata is valid W3C DCAT 3 metadata, making it easier to share federal data with international catalogs and platforms that understand the W3C standard.

  DCAT-US v3.0 was developed collaboratively by the Federal Chief Data Officers Council, the Federal Committee on Statistical Methodology, and the Data.gov team at GSA, drawing on more than a decade of implementation experience with v1.1 and feedback from agencies, data providers, and data users across government. The schema is maintained in a [public GitHub repository](https://github.com/GSA/dcat-us) and governed through a CDO Tiger Team review process to ensure ongoing accuracy and responsiveness to agency needs.

  ---

  ### Why v3.0?

  DCAT-US v1.1 was published in 2014 and served federal agencies well for over a decade. But the data landscape changed significantly. Agencies increasingly publish APIs alongside downloadable files, with no standard way to describe them at the catalog level. Geospatial data required a separate metadata standard. Datasets published in recurring series — annual surveys, quarterly reports, versioned reference data — had no standard way to express their relationship to each other. And the international open data community moved forward with W3C DCAT 2 and DCAT 3, leaving v1.1 increasingly out of step with global practice.

  DCAT-US v3.0 addresses these gaps while preserving the core investment agencies have made in their existing metadata. It aligns the U.S. federal standard with W3C DCAT 3, introduces structured support for APIs, geospatial data, dataset series, and data quality, and brings a consistent requirement level framework — Mandatory, Recommended, or Optional — that tells agencies exactly which fields matter most.

  ---

  ### What stays the same

  For most agencies the core structure of your data.json file carries forward unchanged. Your Catalog still holds an array of Datasets. Each Dataset still describes its Distributions. The fields you have been required to populate — title, description, publisher, contactPoint, keyword, modified, bureauCode, programCode, accessLevel — are all still present and recognized in v3.0.

  The upgrade work is real but manageable. Most of it involves converting a handful of fields from plain strings to structured objects, and updating a small number of field formats that are no longer valid. See the [Changes from v1.1](#changes-from-v11) section below for the full list.

  ---

  ### Who needs to act and when

  **For agencies currently implementing v1.1:** Continue operating your existing data.json files as-is until you are ready to migrate. v1.1 continues to be harvested by Data.gov during the transition period. When you are ready to migrate, start with the breaking changes listed in the Changes from v1.1 section — particularly `modified`, `temporal`, `spatial`, and `language` — since these are the fields most likely to fail v3.0 validation.

  **For agencies building new implementations:** Use v3.0 from the start. The [v1.1 reference](../dcat-us/) remains available but new implementations should not be built against it.

  **For system and tool developers:** The schema has moved from JSON Schema Draft-04 to JSON Schema 2020-12. Update your validators accordingly. See [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema) for tooling guidance.

  ---

  ### How the schema is organized

  DCAT-US v3.0 continues the same three-tier structure that agencies have used since v1.1: a Catalog holds Datasets, and each Dataset describes its Distributions.

  <pre><code>Catalog
  └── Dataset (one or more)
      └── Distribution (one or more)
  </code></pre>

  Your data.json file is a Catalog. Each entry in its `dataset` array is a Dataset. Each Dataset's `distribution` array contains one or more Distribution records describing how to access or download the data. This is the same flow as v1.1.

  However, v3.0 introduces several field-level changes that affect existing records. See the [Changes from v1.1](#changes-from-v11) section before migrating.

  ---

  ### What's new in v3.0

  **Requirement levels.** For the first time, every field is explicitly labeled Mandatory, Recommended, or Optional. Mandatory fields must be present for a record to be valid. Recommended fields are not required by the schema validator but should be populated whenever the information exists — they improve discoverability and interoperability. Optional fields are available but not expected in most records.

  **Two new classes** can appear alongside Dataset in the Catalog:

  - **DataService:** describes an API or other programmatic interface that provides access to data. In v1.1, APIs were documented only as Distributions inside a Dataset. In v3.0, a DataService can be listed at the Catalog level as its own resource, which is useful for services that serve many datasets or are not tied to a single one. See [DataService fields](/standards/catalog/dcat-us-3/quality-governance/#data-service).
  - **DatasetSeries:** groups related datasets published over time — annual releases, recurring surveys, versioned reference data — under a single series record. Individual Dataset records point back to the series using the `inSeries` field. See [DatasetSeries fields](../dcat-us-3-dataset-series/).

  **Supporting classes** provide structured definitions for information that was unstructured in v1.1, such as geographic location, temporal coverage, contact information, attribution, quality measurements, and access restrictions. These classes are referenced from Dataset, Distribution, and the new classes above. Most agencies will encounter them indirectly, through a field that points to one of these structures. In this reference set they are grouped across five pages: [Agents](/standards/catalog/dcat-us-3/agents/), [Temporal, Spatial, and Metrics](/standards/catalog/dcat-us-3/temporal-spatial-metrics/), [Identifiers and Relationships](/standards/catalog/dcat-us-3/identifiers-and-relationships/), [Quality and Governance](/standards/catalog/dcat-us-3/quality-governance/), and [Constraints and Restrictions](/standards/catalog/dcat-us-3/constraints-and-restrictions/).

  **JSON Schema validation.** DCAT-US v3.0 is a valid JSON Schema (2020-12). Agencies can programmatically validate their metadata files against the schema. See [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema) for tooling.

  **Federal access and use restrictions.** Three new structured classes — AccessRestriction, UseRestriction, and CUIRestriction — replace the v1.1 pattern of expressing restrictions as free text in `rights` or using the three-value `accessLevel` field. These are documented on the [Constraints and Restrictions](/standards/catalog/dcat-us-3/constraints-and-restrictions/) page and referenced from Distribution where applicable.

  ---

  ### Class hierarchy

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ -->

  The diagram below shows how the classes relate to each other. The three core classes of Catalog, Dataset, and Distribution form the primary spine, exactly as in v1.1. DataService and DatasetSeries extend what a Catalog can describe. Supporting classes are referenced from the core classes as needed.

  {% comment %}
  Static SVG diagram — regenerate if class structure changes.
  Source: GSA/dcat-us jsonschema/definitions/
  {% endcomment %}

  ---

  ### Reference pages

  Each core class has its own reference page with field-level detail, requirement levels, and JSON examples.

  #### Catalog → Dataset → Distribution

  These three pages cover the fields most agencies interact with directly.

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json -->
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Distribution.json -->

  - [Catalog fields](/standards/catalog/dcat-us-3/catalog/) — the top-level container; your `data.json` is a Catalog
  - [Dataset fields](/standards/catalog/dcat-us-3/dataset/) — the primary inventory unit; one record per dataset
  - [Distribution fields](/standards/catalog/dcat-us-3/distribution/) — a specific file or access point for a dataset

  #### Additional classes (new in v3.0)

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->

  - [DataService fields](/standards/catalog/dcat-us-3/quality-governance/#data-service) — APIs and query endpoints
  - [DatasetSeries fields](/standards/catalog/dcat-us-3/dataset-series/) — recurring or versioned dataset releases

  #### Supporting classes

  <!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema/definitions/ -->

  Supporting classes are referenced from the core classes above. In this site, they are grouped by function across five reference pages rather than a single consolidated supporting-classes page.

  <table class="usa-table">
    <thead>
      <tr>
        <th>Group</th>
        <th>Classes</th>
        <th>Referenced from</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Agents</td>
        <td>Agent, Organization, Kind, Address</td>
        <td><code>publisher</code>, <code>contactPoint</code>, <code>creator</code> on Dataset and DataService</td>
      </tr>
      <tr>
        <td>Location and time</td>
        <td>Location, PeriodOfTime</td>
        <td><code>spatial</code>, <code>temporal</code> on Dataset, DataService, DatasetSeries</td>
      </tr>
      <tr>
        <td>Controlled vocabularies</td>
        <td>Concept, ConceptScheme</td>
        <td><code>status</code>, <code>theme</code>, <code>representationTechnique</code> and others</td>
      </tr>
      <tr>
        <td>Quality and provenance</td>
        <td>QualityMeasurement, Metric, Activity</td>
        <td><code>hasQualityMeasurement</code>, <code>wasGeneratedBy</code> on Dataset</td>
      </tr>
      <tr>
        <td>Identifiers and integrity</td>
        <td>Identifier, Checksum, Standard, Document</td>
        <td><code>otherIdentifier</code>, <code>checksum</code>, <code>conformsTo</code>, <code>page</code></td>
      </tr>
      <tr>
        <td>Relationships</td>
        <td>Attribution, Relationship, CatalogRecord</td>
        <td><code>qualifiedAttribution</code>, <code>qualifiedRelation</code>, <code>record</code></td>
      </tr>
      <tr>
        <td>Restrictions</td>
        <td>AccessRestriction, CUIRestriction, UseRestriction</td>
        <td><code>accessRights</code> and related fields</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Changes from v1.1

  The table below summarizes the most significant changes from DCAT-US v1.1 to v3.0. For a complete field-by-field comparison, see the [schema repository](https://github.com/GSA/dcat-us). For field-level detail see the individual reference pages for [Catalog](/standards/catalog/dcat-us-3/catalog/), [Dataset](/standards/catalog/dcat-us-3/dataset/), and [Distribution](/standards/catalog/dcat-us-3/distribution/).

  #### Breaking changes

  These are changes where existing v1.1 field values will fail v3.0 schema validation and must be updated.

  <table class="usa-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>What changed</th>
        <th>Action required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>modified</code> with repeating intervals</td>
        <td>v1.1 accepted repeating duration formats like <code>R/P1D</code> or <code>R/P1Y</code> to indicate continually updated datasets. v3.0 requires a plain ISO 8601 date.</td>
        <td>Set <code>modified</code> to the actual date the data last changed (e.g., <code>"2024-06-01"</code>). Use <code>accrualPeriodicity</code> to express update frequency.</td>
      </tr>
      <tr>
        <td><code>temporal</code> as an ISO 8601 string</td>
        <td>v1.1 used a plain interval string (e.g., <code>"2000-01-15T00:00:00Z/2010-01-15T00:00:00Z"</code>). v3.0 uses a structured PeriodOfTime object.</td>
        <td>Convert to a PeriodOfTime object: <code>[{"@type": "PeriodOfTime", "startDate": "2000-01-15", "endDate": "2010-01-15"}]</code>. Open-ended periods are valid — you can omit either <code>startDate</code> or <code>endDate</code>.</td>
      </tr>
      <tr>
        <td><code>spatial</code> as a plain string</td>
        <td>v1.1 accepted plain strings like <code>"United States"</code> or bounding box coordinate strings. v3.0 uses a structured Location object.</td>
        <td>Convert to a Location object: <code>[{"@type": "Location", "prefLabel": "United States"}]</code>. Add a <code>bbox</code> for geospatial precision.</td>
      </tr>
      <tr>
        <td><code>language</code> with RFC 5646 tags</td>
        <td>v1.1 used RFC 5646 language tags like <code>en-US</code>. v3.0 uses two-letter ISO 639-1 codes only, with a maximum length of two characters.</td>
        <td>Simplify to two-letter codes: change <code>en-US</code> to <code>en</code>, <code>es-MX</code> to <code>es</code>, etc.</td>
      </tr>
    </tbody>
  </table>

  #### Fields replaced or removed

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
        <td><code>accessLevel</code></td>
        <td>Replaced by <code>accessRights</code> on Dataset</td>
        <td>Use <code>accessRights</code> as a free-text string. The value <code>"public"</code> remains valid. For restricted datasets write a plain-language explanation of the restriction.</td>
      </tr>
      <tr>
        <td><code>isPartOf</code></td>
        <td>Replaced by <code>inSeries</code> and <code>hasPart</code></td>
        <td>Use <code>inSeries</code> for datasets that belong to a recurring temporal series. Use <code>hasPart</code> at the parent dataset level for generic collections.</td>
      </tr>
      <tr>
        <td><code>describedByType</code></td>
        <td>Absorbed into <code>describedBy</code></td>
        <td>Express the format as <code>mediaType</code> within the <code>describedBy</code> Distribution object. No separate field needed.</td>
      </tr>
      <tr>
        <td><code>license</code> at Dataset level</td>
        <td>Now at Distribution level</td>
        <td>Move <code>license</code> from each Dataset to each Distribution object. If all distributions share the same license add it to each one individually.</td>
      </tr>
      <tr>
        <td><code>@context</code> at Catalog level</td>
        <td>Removed</td>
        <td>Remove from your catalog file.</td>
      </tr>
      <tr>
        <td><code>describedBy</code> at Catalog level</td>
        <td>Removed — replaced by <code>conformsTo</code> Standard object</td>
        <td>Remove from your catalog file. Use a Standard object in <code>conformsTo</code> instead.</td>
      </tr>
    </tbody>
  </table>

  #### Fields not in the v3.0 core schema

  The following fields were introduced in v1.1 specifically for U.S. federal agencies. They are not defined in the v3.0 core schema but agencies should continue populating them until updated OMB policy guidance is issued. The v3.0 schema will not reject records that include them.

  <table class="usa-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bureauCode</code></td>
        <td>Required by existing OMB policy (M-13-13). Continue populating per current guidance.</td>
      </tr>
      <tr>
        <td><code>programCode</code></td>
        <td>Required by existing OMB policy (M-13-13). Continue populating per current guidance.</td>
      </tr>
      <tr>
        <td><code>accessLevel</code></td>
        <td>Required by existing OMB policy. Use alongside the new <code>accessRights</code> field until updated guidance is issued.</td>
      </tr>
      <tr>
        <td><code>dataQuality</code></td>
        <td>Not in v3.0 schema. Use <code>hasQualityMeasurement</code> for structured quality reporting going forward.</td>
      </tr>
      <tr>
        <td><code>primaryITInvestmentUII</code></td>
        <td>Not in v3.0 schema. Can be preserved in <code>otherIdentifier</code> if needed.</td>
      </tr>
      <tr>
        <td><code>systemOfRecords</code></td>
        <td>Not in v3.0 schema. Reference the SORN URL in <code>accessRights</code> or <code>rights</code> until formal guidance is issued.</td>
      </tr>
    </tbody>
  </table>

  #### Structural changes

  The following fields changed type or structure between v1.1 and v3.0. Existing string values in these fields will not validate against the v3.0 schema and must be converted to the new object format.

  <table class="usa-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>v1.1 type</th>
        <th>v3.0 type</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>landingPage</code></td>
        <td>string (URL)</td>
        <td>Document object</td>
        <td>Wrap in a Document object with <code>title</code> and <code>accessURL</code>.</td>
      </tr>
      <tr>
        <td><code>theme</code></td>
        <td>array of strings</td>
        <td>array of Concept objects</td>
        <td>Each Concept requires a <code>prefLabel</code>. Plain string values are no longer valid.</td>
      </tr>
      <tr>
        <td><code>describedBy</code> on Dataset and Distribution</td>
        <td>string (URL)</td>
        <td>Distribution object</td>
        <td>Wrap in a Distribution object with <code>title</code>, <code>downloadURL</code> or <code>accessURL</code>, and <code>mediaType</code>.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code> on Dataset and Distribution</td>
        <td>string (URI)</td>
        <td>array of Standard objects</td>
        <td>Wrap in an array of Standard objects. Each Standard should include <code>title</code> and <code>identifier</code>.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code> on Catalog</td>
        <td>string (URI)</td>
        <td>Standard object</td>
        <td>Use <code>{"@type": "Standard", "title": "DCAT-US 3.0", "identifier": "https://resources.data.gov/dcat-us/3.0.0"}</code></td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>string — max 255 characters</td>
        <td>array of strings — no character limit</td>
        <td>Convert to an array. The 255-character limit no longer applies.</td>
      </tr>
      <tr>
        <td><code>byteSize</code> on Distribution</td>
        <td>number</td>
        <td>string</td>
        <td>Express as a numeric string, e.g. <code>"52428800"</code>.</td>
      </tr>
      <tr>
        <td><code>publisher.subOrganizationOf</code></td>
        <td>single Organization object</td>
        <td>array of Organization objects</td>
        <td>Wrap in an array if you have parent organization hierarchy.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Validation

  <!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema -->

  Note: the generated reference documentation in `jsonschema/docs/` currently shows all fields as Optional regardless of their actual requirement level. This is a known issue. Trust the requirement levels documented on the reference pages and in the JSON schema files directly.

  Validate your metadata against the v3.0 schema:

  - JSON Schema file: [jsonschema/definitions/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json)
  - Validation script: [jsonschema/test_json_schema.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py)
  - Instructions: [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema)

  ---

  ### Still using DCAT-US v1.1?

  The [DCAT-US v1.1 reference](https://resources.data.gov/catalog/dcat-us/) remains available.


  ## DCAT US Pages

  ### [Changes from v1.1](#changes-from-v11)
  
  ### [Index](https://resources.data.gov/catalog/dcat-us-3/)
  
  ### [Catalog](/standards/catalog/dcat-us-3/catalog/)
  
  ### [Data Service](/standards/catalog/dcat-us-3/quality-governance/#data-service)
  
  ### [Dataset Series](/standards/catalog/dcat-us-3/dataset-series/)
  
  ### [Dataset](/standards/catalog/dcat-us-3/dataset/)
  
  ### [Distribution](/standards/catalog/dcat-us-3/distribution/)
  
  ### [Agents](/standards/catalog/dcat-us-3/agents/)
  
  ### [Temporal, Spatial, and Metrics](/standards/catalog/dcat-us-3/temporal-spatial-metrics/)
  
  ### [Identifiers and Relationships](/standards/catalog/dcat-us-3/identifiers-and-relationships/)
  
  ### [Quality and Governance](/standards/catalog/dcat-us-3/quality-governance/)
  
  ### [Constraints and Restrictions](/standards/catalog/dcat-us-3/constraints-and-restrictions/)
  
  ### [DCAT Priorities](/resources/dcat-us-priorities/)
  
  ### [DCAT US General Information](https://resources.data.gov/catalog/dcat-us/)

examples: ""
link: ""
layout: resource
toc: true
publish: true
---