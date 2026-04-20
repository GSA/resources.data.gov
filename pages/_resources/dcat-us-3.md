---
resource_name: DCAT-US Schema v3.0
slug: dcat-us-3
description: Reference documentation for DCAT-US v3.0, the federal metadata standard for
  documenting datasets, APIs, and data services. Use this reference to build or
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
  
  {: .vertical-headings}
  | Specification name: | DCAT-US Schema v3.0 |
  |---------------------|---------------------|
  | This version:       | 3.0                 |
  | Previous version:   | [DCAT-US v1.1 (Project Open Data Metadata Schema)](https://resources.data.gov/standards/catalog/dcat-us/) |
  | Schema repository:  | [github.com/GSA/dcat-us](https://github.com/GSA/dcat-us) |
  | JSON Schema:        | [jsonschema/definitions/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json) |
  
  ---
  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov 
  
  ### What is DCAT-US v3.0?
  
  DCAT-US v3.0 is the federal data catalog metadata standard, updated to improve the Findability, Accessibility, Interoperability, and Reusability (FAIRness) of federal data. It is a U.S. profile of the [W3C Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat/), not a new or separate standard.
  
  Version 3.0 builds on more than ten years of implementation experience with the Project Open Data Metadata Schema (DCAT-US v1.1) and introduces a single metadata standard that consistently supports business, technical, statistical, and geospatial data. 
  
  ---
  
  ### How the schema is organized
  
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ -->
  
  DCAT-US v3.0 continues the same three-tier structure that agencies have used since v1.1: a **Catalog** holds **Datasets**, and each Dataset describes its **Distributions**.
  
  ```
  Catalog
  └── Dataset (one or more)
      └── Distribution (one or more)
  ```
  
  Your `data.json` file is a Catalog. Each entry in its `dataset` array is a Dataset. Each Dataset's `distribution` array contains one or more Distribution records describing how to access or download the data.
  
  This is the same flow as v1.1. Agencies already implementing v1.1 can continue using this structure; v3.0 adds optional fields and new classes on top of it, but does not change the core pattern.
  
  ---
  
  ### What's new in v3.0
  
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/README.md -->
  
  **Two new classes** can appear alongside Dataset in the Catalog:
  
  - **DataService:** describes an API or other programmatic interface that provides access to data. In v1.1, APIs were documented only as Distributions inside a Dataset. In v3.0, a DataService can be listed at the Catalog level as its own resource, which is useful for services that serve many datasets or are not tied to a single one.

  - **DatasetSeries:** groups related datasets published over time (annual releases, recurring surveys, versioned reference data) under a single series record. Individual Dataset records point back to the series using the `inSeries` field.
  
  **Supporting classes** provide structured definitions for information that was unstructured in v1.1, such as geographic location, temporal coverage, contact information, attribution, and quality measurements. These classes are referenced from Dataset, Distribution, and the new classes above. Most agencies will encounter them indirectly, through a field that points to one of these structures.
  
  **JSON Schema validation.** DCAT-US v3.0 is a valid JSON Schema (2020-12). Agencies can programmatically validate their metadata files against the schema. See [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema) for tooling.
  
  **Requirement levels.** Fields are now explicitly labeled Mandatory, Recommended, or Optional throughout the schema and in this reference.
  
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
  
  Add these values when data exists
  - [Catalog fields](https://resources.data.gov/standards/catalog/dcat-us-3-catalog/) — the top-level container; your `data.json` is a Catalog
    
  - [Dataset fields](https://resources.data.gov/standards/catalog/dcat-us-3-dataset/) — the primary inventory unit; one record per dataset
    
  - [Distribution fields](https://resources.data.gov/standards/catalog/dcat-us-3-distribution/) — a specific file or access point for a dataset
  
  
  #### Additional classes (new in v3.0)
  
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DataService.json -->
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/DatasetSeries.json -->
  
  - [DataService fields](https://resources.data.gov/standards/catalog/dcat-us-3-data-service/) — APIs and query endpoints
  
  - [DatasetSeries fields](https://resources.data.gov/standards/catalog/dcat-us-3-data-series/) — recurring or versioned dataset releases
  
  
  
  #### Supporting classes
  
  <!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema/definitions/ -->
  
  Supporting classes are referenced from the core classes above. The [supporting classes reference](https://resources.data.gov/standards/catalog/dcat-us-3-supporting-classes/) covers all of them in one place, grouped by function.
  
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
  
  ### Changes from v1.1 (This section is not complete as of 4/20/2026)
  
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/README.md -->
  
  For a full comparison, see the repository: [GSA/dcat-us](https://github.com/GSA/dcat-us).
  
  ---
  
  ### Validation
  
  <!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema -->
  
  Validate your metadata against the v3.0 schema:
  
  JSON Schema file: [jsonschema/definitions/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json)
  
  Validation script: [jsonschema/test_json_schema.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py)
  
  Instructions: [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema)
  
  ---
  
  ### Still using DCAT-US v1.1?
  
  The [DCAT-US v1.1 reference](https://resources.data.gov/standards/catalog/dcat-us/) remains available.

 

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
