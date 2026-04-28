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
  - metadata standard
  - data inventory
  - data standards
guidance_tags: ""
format: ""
details: |
  {: .vertical-headings}

  | Specification name: | DCAT-US Schema v3.0 |
  |---------------------|---------------------|
  | This version: | 3.0 |
  | Previous version: | [DCAT-US v1.1 (Project Open Data Metadata Schema)](https://resources.data.gov/catalog/dcat-us/) |
  | Schema repository: | [github.com/GSA/dcat-us](https://github.com/GSA/dcat-us) |
  | JSON Schema: | [jsonschema/definitions/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json) |

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ### What is DCAT-US v3.0?

  DCAT-US v3.0 is the federal data catalog metadata standard, updated to improve the Findability, Accessibility, Interoperability, and Reusability (FAIRness) of federal data. It is a U.S. application profile of the [W3C Data Catalog Vocabulary (DCAT) version 3](https://www.w3.org/TR/vocab-dcat-3/) and is not a new or separate standard. Most DCAT-US v3.0 metadata is valid W3C DCAT 3 metadata, which makes it easier to share federal data with international catalogs and platforms that already understand the W3C standard.

  DCAT-US v3.0 was developed collaboratively by the Federal Chief Data Officers Council, the Federal Committee on Statistical Methodology, and the Data.gov team at GSA, drawing on more than a decade of implementation experience with v1.1 and feedback from agencies, data providers, and data users across government. The schema is maintained in a [public GitHub repository](https://github.com/GSA/dcat-us) and governed through a CDO Tiger Team review process.

  ### Why v3.0?

  DCAT-US v1.1 was published in 2014 and served federal agencies well for over a decade, but several gaps emerged over time:

  - APIs increasingly needed to be described as first-class resources, not only as Distributions inside Datasets.
  - Geospatial data and richer spatial metadata needed better support.
  - Recurring releases such as annual surveys and quarterly reports needed a standard way to express series relationships.
  - The international open data community moved to W3C DCAT 2 and DCAT 3, leaving v1.1 increasingly out of step with global practice.

  DCAT-US v3.0 addresses those gaps while preserving the core investment agencies have already made in existing metadata.

  ### What stays the same

  For most agencies the overall structure of `data.json` stays familiar. Your Catalog still holds an array of Datasets. Each Dataset still describes its Distributions. Most of the required federal metadata fields agencies already maintain, including `title`, `description`, `publisher`, `contactPoint`, `keyword`, `modified`, and `accessLevel`, still exist in v3.0.

  The biggest migration work is not a ground-up rewrite. It is mostly a matter of converting some values from plain strings into structured objects and updating a small number of field formats that are no longer valid.

  ### Who needs to act and when

  **Agencies currently on v1.1:** Continue operating your existing `data.json` files during the transition period. When you are ready to migrate, start with the breaking changes listed below, especially `modified`, `temporal`, `spatial`, and `language`, since those are the most likely to fail v3.0 validation.

  **New implementations:** Start with v3.0. The [v1.1 reference](https://resources.data.gov/catalog/dcat-us/) remains available for existing implementations, but new implementations should not be built against it.

  ### How the schema is organized

  DCAT-US v3.0 allows for the same three-tier structure agencies already know:

  ```text
  Catalog
  └── Dataset (one or more)
      └── Distribution (one or more)
  ```

  Your `data.json` file is a Catalog. Each entry in its `dataset` array is a Dataset. Each Dataset's `distribution` array contains one or more Distribution records describing how to access or download the data.

  ### What's new in v3.0

  - Requirement levels are now explicit: each field is labeled Mandatory, Recommended, or Optional.
  - `DataService` adds support for APIs and other programmatic access methods as first-class catalog entries. See [DataService fields](/standards/catalog/dcat-us-3/quality-governance/#data-service).
  - `DatasetSeries` adds support for recurring or versioned releases grouped under a single series. See [DatasetSeries fields](/standards/catalog/dcat-us-3/dataset-series/).
  - Supporting classes now provide structured definitions for contact information, locations, time periods, identifiers, quality measurements, provenance, and restrictions.
  - Federal access and use restrictions are now represented with structured restriction classes instead of relying only on free text.

  ### Main reference pages

  - [DCAT-US v3.0 overview](/standards/catalog/dcat-us-3/)
  - [Catalog fields](/standards/catalog/dcat-us-3/catalog/)
  - [Dataset fields](/standards/catalog/dcat-us-3/dataset/)
  - [Distribution fields](/standards/catalog/dcat-us-3/distribution/)
  - [Dataset Series fields](/standards/catalog/dcat-us-3/dataset-series/)

  ### Supporting classes

  Supporting classes are referenced from the core classes above. On this site they are grouped across five pages rather than a single supporting-classes page:

  | Group | Classes | Referenced from |
  |-------|---------|-----------------|
  | [Agents](/standards/catalog/dcat-us-3/agents/) | Agent, Organization, Kind, Address | `publisher`, `contactPoint`, `creator` |
  | [Temporal, Spatial, and Metrics](/standards/catalog/dcat-us-3/temporal-spatial-metrics/) | Location, PeriodOfTime, QualityMeasurement, Metric | `spatial`, `temporal`, `hasQualityMeasurement` |
  | [Identifiers and Relationships](/standards/catalog/dcat-us-3/identifiers-and-relationships/) | Identifier, Checksum, Attribution, Relationship, CatalogRecord | `otherIdentifier`, `checksum`, `qualifiedRelation`, `record` |
  | [Quality and Governance](/standards/catalog/dcat-us-3/quality-governance/) | Activity, DataService and related governance terms | `wasGeneratedBy`, catalog-level services |
  | [Constraints and Restrictions](/standards/catalog/dcat-us-3/constraints-and-restrictions/) | AccessRestriction, CUIRestriction, UseRestriction | `accessRights` and related restriction fields |

  ### Migration from v1.1

  DCAT-US v1.1 continues to be available during the transition period, but new implementations should start with v3.0. Agencies upgrading existing `data.json` files should review the [Changes from v1.1](#changes-from-v11) section and the v3.0 reference pages before migrating.

  More detail is expected after complete review of current DCAT-US1.1 catalogs is complete, see backlogged issue [here](https://github.com/GSA/dcat-us/issues/32)

  ### Changes from v1.1

  The summary below captures the highest-impact changes for agencies migrating existing records.

  #### Breaking changes

  | Field | What changed | Action required |
  |-------|--------------|-----------------|
  | `modified` | Repeating interval values are no longer valid. | Use an ISO 8601 date for the most recent update, and move the repeating interval information to `accrualPeriodicity`. |
  | `temporal` | Plain strings are no longer valid. | Use a `PeriodOfTime` object with `startDate` and optionally `endDate`. |
  | `spatial` | Plain strings are no longer valid. | Use a `Location` object with WKT, GML, or GeoJSON values. |
  | `language` | Free-text names are no longer valid. | Use BCP 47 language tags, for example `en` or `es`. |
  | `accrualPeriodicity` | Legacy string values are no longer valid. | Use a controlled vocabulary URI or concept object. |

  #### Fields replaced or removed

  | v1.1 field | v3.0 status | Notes |
  |------------|-------------|-------|
  | `webService` | Replaced | Use `DataService` or Distribution access URLs depending on the case. |
  | `accessLevelComment` | Replaced | Use structured restriction fields when applicable. |
  | `license` as free text | Narrowed | Prefer a URI and align with DCAT 3 usage. |
  | `rights` for restrictions | Replaced in many cases | Use restriction classes for federal access and use restrictions. |

  #### Fields no longer in the core schema

  These fields may still appear in agency pipelines or legacy implementations, but they are not part of the DCAT-US v3.0 core schema: `dataQuality`, `references`, `systemOfRecords`, `describedByType`, and `landingPage` variants that were modeled outside DCAT alignment.

  #### Structural changes

  - APIs can now be represented as `DataService` records instead of only as Distributions.
  - Recurring releases can now be grouped with `DatasetSeries` and linked using `inSeries`.
  - Restrictions and access controls now use explicit classes instead of overloading a few text fields.
  - Several fields that were loosely typed in v1.1 now use structured objects aligned to W3C DCAT 3.

  ### Validation

  Validate your metadata against the v3.0 schema:

  - JSON Schema file: [jsonschema/definitions/Catalog.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Catalog.json)
  - Validation script: [jsonschema/test_json_schema.py](https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py)
  - Instructions: [jsonschema/README.md](https://github.com/GSA/dcat-us/tree/main/jsonschema)

  ### Related pages

  - [DCAT-US v1.1 reference](/resources/dcat-us/)
  - [DCAT Priorities](/resources/dcat-us-priorities/)
  - [Catalog](/standards/catalog/dcat-us-3/catalog/)
  - [Dataset](/standards/catalog/dcat-us-3/dataset/)
  - [Distribution](/standards/catalog/dcat-us-3/distribution/)
  - [Dataset Series](/standards/catalog/dcat-us-3/dataset-series/)
  - [Agents](/standards/catalog/dcat-us-3/agents/)
  - [Constraints and Restrictions](/standards/catalog/dcat-us-3/constraints-and-restrictions/)
  - [Identifiers and Relationships](/standards/catalog/dcat-us-3/identifiers-and-relationships/)
  - [Temporal, Spatial, and Metrics](/standards/catalog/dcat-us-3/temporal-spatial-metrics/)
  - [Quality and Governance](/standards/catalog/dcat-us-3/quality-governance/)

examples: ""
link: ""
layout: resource
toc: true
publish: true
---