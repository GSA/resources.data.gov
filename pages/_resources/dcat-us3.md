---
resource_name: DCAT-US Schema v3.0
slug: dcat-us3
description: Reference documentation for DCAT-US v3.0, the federal metadata standard
  for documenting datasets, APIs, and data services. Use this reference to build or
  validate your agency's data inventory.
source: data.gov
category: Data standards
resource: resource
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
        <td><a href="../dcat-us/">DCAT-US v1.1 (Project Open Data Metadata Schema)</a></td>
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



  

  ### Why v3.0?


  DCAT-US v1.1 was published in 2014 and served federal agencies well for over a decade. But the data landscape changed significantly. Agencies increasingly publish APIs alongside downloadable files, with no standard way to describe them at the catalog level. Geospatial data required a separate metadata standard. Datasets published in recurring series (annual surveys, quarterly reports, versioned reference data) had no standard way to express their relationship to each other. And the international open data community moved forward with W3C DCAT 2 and DCAT 3, leaving v1.1 increasingly out of step with global practice.


  DCAT-US v3.0 addresses these gaps while preserving the core investment agencies' existing metadata. It aligns the U.S. federal standard with W3C DCAT 3, introduces structured support for APIs, geospatial data, dataset series, and data quality, and brings a consistent requirement level framework — Mandatory, Recommended, or Optional — that tells agencies exactly which fields matter most.



  

  ### What stays the same



  For most agencies, the core structure of your data.json file carries forward unchanged. Your Catalog still holds an array of Datasets. Each Dataset still describes its Distributions. The fields you have been required to populate — `title`, `description`, `publisher`, `contactPoint`, `keyword`, `modified`, `bureauCode`, and `programCode` are all still present and recognized in v3.0.


  Note: `accessLevel` is not part of the v3.0 core schema. The v3.0 equivalent is `accessRights`, a free-text string. Agencies may continue populating `accessLevel`and add `accessRights` alongside it. See the [Changes from v1.1](#changes-from-v11) section for details.


  The upgrade work is real but manageable. Most of it involves converting a handful of fields from plain strings to structured objects, and updating a small number of field formats that are no longer valid. See the [Technical Migration Guide](../dcat-us-3-migration/) for step-by-step instructions.




  ### Who needs to act and when



  **For agencies currently implementing v1.1:** Continue operating your existing data.json files as-is until you are ready to migrate. v1.1 continues to be harvested by Data.gov during the transition period. When you are ready to migrate, start with the breaking changes listed in the Changes from v1.1 section — particularly `modified`, `temporal`, `spatial`, and `language` — since these are the fields most likely to fail validation in v3.0.


  **For agencies building new implementations:** Use v3.0 from the start. The [v1.1 reference](../dcat-us/) remains available, but new implementations should not be built against it.
  

  **For system and tool developers:** The schema has moved from JSON Schema Draft-04 to JSON Schema 2020-12. Update your validators accordingly. See [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema) for tooling guidance.

 

  

  ### How the schema is organized



  DCAT-US v3.0 continues the same three-tier structure that agencies have used since v1.1: a Catalog holds Datasets, and each Dataset describes its Distributions.


  <pre><code>Catalog
  └── Dataset (one or more)
      └── Distribution (one or more)
  </code></pre>


  Your data.json file is a Catalog. Each entry in its `dataset` array is a Dataset. Each Dataset's `distribution` array contains one or more Distribution records describing how to access or download the data. This is the same flow as v1.1.


  However, v3.0 introduces several field-level changes that affect existing records. See the [Changes from v1.1](#changes-from-v11) section before migrating.



  

  ### What's new in v3.0



  **Requirement levels.** For the first time, every field is explicitly labeled Mandatory, Recommended, or Optional. Mandatory fields must be present for a record to be valid. Recommended fields are not required by the schema validator but should be populated whenever the information exists — they improve discoverability and interoperability. Optional fields are available but not expected in most records.
  

  **Two new classes** can appear alongside Dataset in the Catalog:

 
  - **DataService:** describes an API or other programmatic interface that provides access to data. In v1.1, APIs were documented only as Distributions inside a Dataset. In v3.0, a DataService can be listed at the Catalog level as its own resource, which is useful for services that serve many datasets or are not tied to a single one. See [Catalog fields](/standards/catalog/dcat-us-3/catalog/) for how DataService fits into the catalog structure.


  - **DatasetSeries:** groups related datasets published over time — annual releases, recurring surveys, versioned reference data — under a single series record. Individual Dataset records point back to the series using the `inSeries` field. See [DatasetSeries fields](/standards/catalog/dcat-us-3/dataset-series/).


  **Supporting classes** provide structured definitions for information that was unstructured in v1.1, such as geographic location, temporal coverage, contact information, attribution, quality measurements, and access restrictions. These classes are referenced from Dataset, Distribution, and the new classes above. Most agencies will encounter them indirectly, through a field that points to one of these structures.


  **JSON Schema validation.** DCAT-US v3.0 is a valid JSON Schema (2020-12). Agencies can programmatically validate their metadata files against the schema. See [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema) for tooling.


  **Federal access and use restrictions.** Three new structured classes — AccessRestriction, UseRestriction, and CUIRestriction — replace the v1.1 pattern of expressing restrictions as free text in `rights` or using the three-value `accessLevel` field. These are documented on the [Constraints and Restrictions](/standards/catalog/dcat-us-3/constraints-and-restrictions/) reference page.

 

  

  ### Schema reference pages



  The schema reference pages below are generated directly from the [DCAT-US v3.0 schema repository](https://github.com/GSA/dcat-us) and reflect the current authoritative field definitions, types, and requirement levels. For human-readable implementation guidance, migration help, and examples, see the [Implementation guidance](#implementation-guidance) section below.



  #### Core classes




  These three pages cover the fields most agencies interact with directly.


  <table class="usa-table">
    <thead>
      <tr>
        <th>Class</th>
        <th>Description</th>
        <th>Schema reference</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Catalog</td>
        <td>The top-level container. Your agency's <code>data.json</code> file is a Catalog.</td>
        <td><a href="/standards/catalog/dcat-us-3/catalog/">Catalog fields</a></td>
      </tr>
      <tr>
        <td>Dataset</td>
        <td>The primary inventory unit. One record per dataset.</td>
        <td><a href="/standards/catalog/dcat-us-3/dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Distribution</td>
        <td>A specific file or access point for a dataset.</td>
        <td><a href="/standards/catalog/dcat-us-3/distribution/">Distribution fields</a></td>
      </tr>
      <tr>
        <td>Dataset Series</td>
        <td>New in v3.0. A named collection of related datasets published over time.</td>
        <td><a href="/standards/catalog/dcat-us-3/dataset-series/">Dataset Series fields</a></td>
      </tr>
    </tbody>
  </table>



  #### Supporting classes



  Supporting classes are referenced from the core classes above. Each page covers a group of related classes.


  <table class="usa-table">
    <thead>
      <tr>
        <th>Group</th>
        <th>Classes covered</th>
        <th>Referenced from</th>
        <th>Schema reference</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Agents</td>
        <td>Agent, Organization, Kind, Address</td>
        <td><code>publisher</code>, <code>contactPoint</code>, <code>creator</code></td>
        <td><a href="/standards/catalog/dcat-us-3/agents/">Agents</a></td>
      </tr>
      <tr>
        <td>Temporal, Spatial, and Metrics</td>
        <td>Location, PeriodOfTime, QualityMeasurement, Metric</td>
        <td><code>spatial</code>, <code>temporal</code>, <code>hasQualityMeasurement</code></td>
        <td><a href="/standards/catalog/dcat-us-3/temporal-spatial-metrics/">Temporal, Spatial, and Metrics</a></td>
      </tr>
      <tr>
        <td>Identifiers and Relationships</td>
        <td>Identifier, Checksum, Attribution, Relationship, CatalogRecord</td>
        <td><code>otherIdentifier</code>, <code>checksum</code>, <code>qualifiedRelation</code>, <code>record</code></td>
        <td><a href="/standards/catalog/dcat-us-3/identifiers-and-relationships/">Identifiers and Relationships</a></td>
      </tr>
      <tr>
        <td>Quality and Governance</td>
        <td>Activity and related governance terms</td>
        <td><code>wasGeneratedBy</code>, <code>wasUsedBy</code></td>
        <td><a href="/standards/catalog/dcat-us-3/quality-governance/">Quality and Governance</a></td>
      </tr>
      <tr>
        <td>Constraints and Restrictions</td>
        <td>AccessRestriction, UseRestriction, CUIRestriction</td>
        <td><code>accessRestriction</code>, <code>useRestriction</code>, <code>cuiRestriction</code> on Distribution</td>
        <td><a href="/standards/catalog/dcat-us-3/constraints-and-restrictions/">Constraints and Restrictions</a></td>
      </tr>
    </tbody>
  </table>



  

  ### Implementation guidance



  The pages below are written for federal agency data managers and developers implementing DCAT-US v3.0. They explain what the standard means in practice, what changed from v1.1, and how to document common types of federal data assets. These pages complement the schema reference pages above — the schema reference pages tell you what every field is, the implementation pages tell you what to do with them.


  <table class="usa-table">
    <thead>
      <tr>
        <th>Page</th>
        <th>What it covers</th>
        <th>Best for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="../../assets/documents/dcat-us-3-implementation-guide.pdf">Agency Implementation Guide</a></td>
        <td>Human-readable guidance for the core classes — Catalog, Dataset, Distribution, DataService, and DatasetSeries. Includes federal-specific context, before/after upgrade examples, common mistakes, and a breaking changes summary.</td>
        <td>Data managers implementing v3.0 for the first time or upgrading from v1.1</td>
      </tr>
      <tr>
        <td><a href="../dcat-us-3-migration/">Technical Migration Guide</a></td>
        <td>Step-by-step instructions for updating an existing v1.1 data.json file to v3.0. Covers the eight most important changes in order of priority.</td>
        <td>Agencies with existing v1.1 implementations ready to migrate</td>
      </tr>
      <tr>
        <td><a href="../dcat-us3/">DCAT-US Priorities</a></td>
        <td>Keyword and field requirements for priority federal data assets, including COVID-19 response data and AI research datasets. Shows how v1.1 field guidance maps to v3.0.</td>
        <td>Agencies with COVID-19 or AI research datasets in their inventory</td>
      </tr>
    </tbody>
  </table>



  

  ### Changes from v1.1



  For a complete field-by-field comparison, see the [schema repository](https://github.com/GSA/dcat-us). For field-level detail see the individual schema reference pages linked above.


  For step-by-step migration instructions see the [Technical Migration Guide](../dcat-us-3-migration/).


  #### Fields not in the v3.0 core schema



  The following fields were introduced in v1.1 specifically for U.S. federal agencies. They are not defined in the v3.0 core schema however the v3.0 schema will not reject records that include them.


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
        <td>DCAT-US 3.0 will not reject this if it is included.</td>
      </tr>
      <tr>
        <td><code>programCode</code></td>
        <td>DCAT-US 3.0 will not reject this if it is included.</td>
      </tr>
      <tr>
        <td><code>accessLevel</code></td>
        <td>DCAT-US 3.0 will not reject this if it is included. Use alongside the new <code>accessRights</code> field.</td>
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


  ### Validation



  <!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema -->


  Validate your metadata against the v3.0 schema in data.gov's [online validator](https://harvest.data.gov/validate/), or build your own using the following resources:


  - JSON Schema file: [jsonschema/definitions/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json)


  - Validation script: [jsonschema/test_json_schema.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py)



  - Instructions: [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema)



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
        <td>September 2026</td>
        <td>Page rewritten to correct several errors and add links to schema reference pages generated from the DCAT-US v3.0 GitHub repository.
        </td>
      </tr>
      <tr>
        <td>May 2026</td>
        <td>Page rewritten to correct several errors and add links to schema reference pages generated from the DCAT-US v3.0 GitHub repository.
          <br><br>
          Corrections made: removed <code>accessLevel</code> from the "What stays the same" list (not in v3.0 core schema); corrected <code>language</code> breaking change description from BCP 47 to ISO 639-1 two-letter codes; corrected <code>landingPage</code> entry (still in schema as Recommended, moved to Structural changes table); corrected <code>accrualPeriodicity</code> description to reflect three accepted vocabularies; removed <code>webService</code> and <code>accessLevelComment</code> (v1.0 fields, not relevant to v1.1 to v3.0 migration); added <code>bureauCode</code>, <code>programCode</code>, and <code>accrualPeriodicity</code> to the relevant tables.
        </td>
      </tr>
    </tbody>
  </table>



  

  ### Still using DCAT-US v1.1?


  The [DCAT-US v1.1 reference](../dcat-us/) remains available.



examples: ""
link: ""
layout: resource
toc: true
publish: true
---
