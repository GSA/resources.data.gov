---
resource_name: DCAT-US Schema v3.0 Supporting classes
slug: dcat-us-3-supporting-classes
description: >-
  Reference for the DCAT-US v3.0 supporting classes. These classes are
  referenced from Dataset, Distribution, Catalog, DataService, and DatasetSeries.
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
  <!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema/definitions -->

  ---

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

  ### Overview


    
  When you look at the DCAT-US v3.0 field reference pages for [Dataset](../dcat-us-3-dataset/), [Distribution](../dcat-us-3-distribution/), [Catalog](../dcat-us-3-catalog/), [DataService](../dcat-us-3-data-service/), and [DatasetSeries](../dcat-us-3-dataset-series/), many fields say something like "References the Location class" or "Uses a Kind object." Those are supporting classes.


  
  Supporting classes are structured objects that show up inside your main records. Rather than putting a plain text string in a field, you put a small structured object with its own fields. This makes your metadata machine-readable and interoperable -- a system can reliably find a contact email, parse a bounding box, or look up a quality measurement without guessing at the format.


  
  Most agencies will encounter supporting classes indirectly. You are not filing a separate record for each one -- you are embedding a small structured object directly inside your Dataset or Distribution record.


  
  For full technical specifications and field-level details, see the [DCAT-US 3.0 technical schema reference](https://resources.data.gov/standards/catalog/dcat-us-3/).

  
  ---

  
  ### People and organizations

  
  You will encounter these classes any time a field asks for a publisher, contact, or contributor.


  
  **Agent** is the most general class. It represents any entity involved with a resource -- a federal agency, a person, or a software system. Use Agent for `publisher` on Catalog and DataService, and for `creator`, `contributor`, and `wasAttributedTo` on Dataset. An Agent only requires a `name`.



  
  **Organization** is a more structured version of Agent, designed specifically for named organizational entities. Use Organization for `publisher` on Dataset. It adds support for preferred legal names, abbreviations, and parent hierarchy -- so you can express that the Bureau of Labor Statistics is part of the Department of Labor. In v3.0, `subOrganizationOf` is an array, so you can nest as many levels as needed.


  
  **Kind** is the contact information class, modeled on vCard. Every `contactPoint` field uses Kind. It requires a formatted name (`fn`) and an email address (`hasEmail`) formatted with a `mailto:` prefix. You can optionally add a phone number, position title, and organization name.


  
  The practical rule: use Organization for publisher on datasets, Agent for everything else that needs an entity, and Kind for every contact point.


  
  [Full technical reference: Agents](https://resources.data.gov/standards/catalog/dcat-us-3/agents/)


  
  ---

  
  
  ### Location and time


  
  These classes replace the plain-string and interval-string formats from v1.1. Both are now required to be structured objects.


  
  **Location** is used in any `spatial` field. At minimum, provide a `prefLabel` -- a plain-language place name like "United States" or "Pacific Northwest." For geospatial datasets, add a `bbox` bounding box using WKT or GeoJSON format. You can also provide a `centroid` point, a full `geometry`, or link to a GeoNames identifier. Zip codes, state names, city names, and coordinate-based geometries are all valid -- geospatial does not mean coordinates only.


  
  **PeriodOfTime** is used in any `temporal` field. It requires at least one of `startDate` or `endDate` -- both are not required. Open-ended periods are valid, so a dataset that is ongoing can have a `startDate` with no `endDate`. All date values accept full dates (`YYYY-MM-DD`), datetimes, year-month (`YYYY-MM`), or year-only (`YYYY`) format.


  
  If you are upgrading from v1.1: the old slash-separated interval string format (e.g., `2000-01/2010-12`) is no longer valid. You must convert to a PeriodOfTime object.


  
  [Full technical reference: Temporal, spatial, and metrics](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/)


  
  ---


  
  ### Controlled vocabularies


  
  These classes are used wherever the schema wants a structured term rather than a free-text string.


  
  **Concept** is the building block for controlled terms. It shows up in `theme`, `category`, `status`, `accrualPeriodicity`, and many other fields. The simplest valid Concept is just an object with a `prefLabel` string. You can also link a Concept to a formal vocabulary using `inScheme`. For most federal agencies getting started, a `prefLabel` is sufficient.


  
  **ConceptScheme** represents the vocabulary or taxonomy that a set of Concepts belongs to. It is used in `themeTaxonomy` on Catalog to declare what controlled vocabulary your theme values come from. A ConceptScheme requires a `title`. You can also link it to a version, publication date, and description. If your agency uses the Data.gov topic categories, ISO 19115 topic categories, or your own internal taxonomy, you would declare that here.


  
  [Full technical reference: Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/)


  
  ---


  
  ### Documents and standards


  
  These classes are used for human-readable documentation and machine-readable standard declarations.


  
  **Document** is used in `page` on Dataset and Distribution, `landingPage` on Dataset, and `homepage` on Catalog. A Document is any publication or web page related to a resource -- a user guide, a data dictionary landing page, or a technical report. It requires a `title` and should include either an `accessURL` (a web page) or `downloadURL` (a direct file link). Add `mediaType` when linking to a specific file format like a PDF.


  
  **Standard** is used in `conformsTo` on Dataset, Distribution, DataService, and Catalog. A Standard declares what specification or schema a resource follows. It should include a `title` and an `identifier` (a stable URI for the standard). A single resource can conform to multiple standards -- for example, a geospatial dataset might conform to both DCAT-US 3.0 and ISO 19115.


  
  [Full technical reference: Quality and governance](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/)


  
  ---


  
  ### Identifiers and data integrity


  
  These classes are used when you need to express a structured identifier or verify file integrity.


  
  **Identifier** is used in `identifier` and `otherIdentifier` fields on Dataset, Distribution, and DataService. It can be as simple as a plain URI string, or a structured object that includes the identifier value (`notation`), the issuing agency (`schemaAgency`), and the date it was issued. Use the structured form when you have a DOI, ISBN, or other formally registered identifier with a known issuing authority.


  
  **Checksum** is new in v3.0 and is used in `checksum` on Distribution. It lets you publish a cryptographic hash (such as SHA-256) alongside a downloadable file so users can verify the file has not been altered. It requires two fields: `algorithm` (the hash algorithm used) and `checksumValue` (the lowercase hexadecimal hash string). Strongly recommended for all downloadable distributions.


  
  [Full technical reference: Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/)


  
  ---


  
  ### Quality and provenance


  
  These classes are new in v3.0 and replace the old boolean `dataQuality` field from v1.1.


  
  **QualityMeasurement** is used in `hasQualityMeasurement` on Dataset, Distribution, and DataService. It lets you express a specific, measured quality result -- for example, "98.5% completeness" or "validated against WMO guidelines." Each QualityMeasurement requires a `value` and an `isMeasurementOf` field pointing to a **Metric** object.


  
  **Metric** defines the quality dimension being measured. It is always embedded inside a QualityMeasurement -- you do not file Metrics separately. A Metric requires an `expectedDataType` (the data type of the value, like `xsd:decimal`) and an `inDimension` URI identifying the quality dimension (for example, a URI for "completeness" from a quality vocabulary your agency uses).


  
  **Activity** is used in `wasGeneratedBy` and `wasUsedBy` on Dataset and DataService. It describes a process or event that created or used the resource -- for example, a data collection exercise, a quality control review, or a modeling run. An Activity requires only a `label`.


  
  [Full technical reference: Quality and governance](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/)


  
  ---


  
  ### Relationships and attribution


  
  These classes let you express named, structured relationships between resources and the people or organizations responsible for them.


  
  **Attribution** is used in `qualifiedAttribution` on Dataset, Catalog, and DataService. Use it when you need to express a specific named role that goes beyond what `publisher` or `creator` can capture -- for example, a Data Steward, a Quality Reviewer, or a Program Manager. An Attribution requires a `hadRole` string and an `agent` object.


  
  **Relationship** is used in `qualifiedRelation` on Dataset. Use it when a dataset is related to another resource in a named way that `relation` or `isReferencedBy` cannot express precisely enough -- for example, "isInputTo" a model, or "dataProvider" for a dashboard. A Relationship requires a `hadRole` string and the IRI of the related resource.


  
  **CatalogRecord** is used in `record` on Catalog. It tracks when and how individual datasets or services were registered -- useful for catalog provenance and audit trails. Most agencies can omit this during initial v3.0 migration and add it later as their catalog management matures. A CatalogRecord requires a `modified` date and a `primaryTopic` IRI pointing to the described resource.


  
  [Full technical reference: Quality and governance](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/) (Attribution, CatalogRecord) and [Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/) (Relationship)


  
  ---


  
  ### Access and use restrictions


  
  These three classes are new in v3.0 and specific to the U.S. federal context. They go on Distribution records and replace the practice of writing free-text restriction descriptions in the `rights` field.


  
  **AccessRestriction** expresses who can access a distribution and under what conditions. It uses the NARA Access Restriction Status controlled vocabulary. At minimum provide a `restrictionStatus` Concept (for example, "Unrestricted" or "Restricted - Fully"). For restricted distributions, also provide a `specificRestriction` (the specific authority, such as a FOIA exemption) and a plain-language `restrictionNote`.


  
  **UseRestriction** expresses how a distribution may be used after access is granted -- for example, attribution requirements, restrictions on commercial use, or embargo terms. It is structurally identical to AccessRestriction but uses the NARA Use Restriction Status vocabulary.
  
   
  **CUIRestriction** applies specifically to distributions that contain Controlled Unclassified Information. It requires a `cuiBannerMarking` (the CUI banner marking string from the NARA CUI Registry, such as `CUI//SP-PRVCY`) and a `designationIndicator` identifying the agency that designated the information as CUI. Distributions that do not contain CUI should set `cuiRestriction` to `null`.


  
  See the [Distribution fields page](../dcat-us-3-distribution/) for guidance on how to use all three restriction classes together.


  
  [Full technical reference: Constraints and restrictions](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/)


  
  ---


  
  ### Quick reference


  
  | Class | Where you use it | Requires | Technical reference |
  |---|---|---|---|
  | Agent | `publisher` on Catalog, DataService; `creator`, `contributor` on Dataset | `name` | [Agents](https://resources.data.gov/standards/catalog/dcat-us-3/agents/) |
  | Organization | `publisher` on Dataset; `subOrganizationOf` nesting | `name` | [Agents](https://resources.data.gov/standards/catalog/dcat-us-3/agents/) |
  | Kind | `contactPoint` on all primary classes | `fn`, `hasEmail` (with mailto: prefix) | [Agents](https://resources.data.gov/standards/catalog/dcat-us-3/agents/) |
  | Location | `spatial` on Dataset, DataService, DatasetSeries, Catalog | none (include `prefLabel` at minimum) | [Temporal, spatial, and metrics](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/) |
  | PeriodOfTime | `temporal` on Dataset, DataService, DatasetSeries, Catalog | `startDate` or `endDate` (at least one) | [Temporal, spatial, and metrics](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/) |
  | Concept | `theme`, `category`, `status`, restriction fields, and others | `prefLabel` (if object form) | [Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/) |
  | ConceptScheme | `themeTaxonomy` on Catalog; `inScheme` on Concept | `title` | [Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/) |
  | Document | `page`, `landingPage`, `homepage` | `title` | [Quality and governance](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/) |
  | Standard | `conformsTo` on all primary classes | `title` recommended | [Quality and governance](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/) |
  | Identifier | `identifier`, `otherIdentifier` | none (plain string or structured object) | [Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/) |
  | Checksum | `checksum` on Distribution | `algorithm`, `checksumValue` | [Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/) |
  | QualityMeasurement | `hasQualityMeasurement` on Dataset, Distribution, DataService | `value`, `isMeasurementOf` | [Temporal, spatial, and metrics](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/) |
  | Metric | inside QualityMeasurement | `expectedDataType`, `inDimension` | [Temporal, spatial, and metrics](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/) |
  | Activity | `wasGeneratedBy`, `wasUsedBy` on Dataset, DataService | `label` | [Temporal, spatial, and metrics](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/) |
  | Attribution | `qualifiedAttribution` on Dataset, Catalog, DataService | `hadRole`, `agent` | [Quality and governance](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/) |
  | Relationship | `qualifiedRelation` on Dataset | `hadRole`, `relation` | [Identifiers and relationships](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/) |
  | CatalogRecord | `record` on Catalog | `modified`, `primaryTopic` | [Quality and governance](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/) |
  | AccessRestriction | `accessRestriction` on Distribution | `restrictionStatus` | [Constraints and restrictions](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/) |
  | UseRestriction | `useRestriction` on Distribution | `restrictionStatus` | [Constraints and restrictions](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/) |
  | CUIRestriction | `cuiRestriction` on Distribution | `cuiBannerMarking`, `designationIndicator` | [Constraints and restrictions](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/) |


  
  ---

  
  
  ### Changelog


  
  | Date | Change |
  |---|---|
  | 2026-05-27 | Page rewritten as plain-language guide. Removed duplicated technical field-level detail in favor of links to the auto-generated schema reference pages at resources.data.gov/standards/catalog/dcat-us-3/. Added quick reference table. |


  
  
  ## DCAT US Pages
  
  ### [Index](https://resources.data.gov/resources/dcat-us3/)
  
  ### [Catalog](../dcat-us-3-catalog/)
  
  ### [Data Service](../dcat-us-3-data-service/)
  
  ### [Dataset Series](../dcat-us-3-dataset-series/)
  
  ### [Dataset](../dcat-us-3-dataset/)
  
  ### [Distribution](../dcat-us-3-distribution/)
  
  ### [Supporting Classes](../dcat-us-3-supporting-classes/)
  
  ### [DCAT Priorities](../dcat-us-priorities/)
  
  ### [DCAT US General Information](../dcat-us/)

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
