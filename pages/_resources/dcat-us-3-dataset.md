---
resource_name: DCAT-US Schema v3.0 — Dataset fields
slug: dcat-us-3-dataset
description: >-
  Field-level reference for the DCAT-US v3.0 Dataset class. The Dataset is the
  primary unit of a federal data inventory.
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

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

  ---

  See an error on this page or have other feedback? Email us at DataGovHelp@gsa.gov

 
  ### Overview

  The Dataset class describes an individual dataset or API. Most agency data inventory work happens at this level.

  <strong>Required fields in v3.0:</strong> <code>title</code>, <code>description</code>, <code>publisher</code>, <code>contactPoint</code>, <code>identifier</code>

  All other fields are Optional unless noted. Fields that were required in v1.1 but are no longer schema-required in v3.0 are noted below. Agencies should consult current OMB policy guidance for any fields that remain required by policy.

  ---

  ### Core fields

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

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
        <td><code>title</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>Human-readable name of the dataset. Should be in plain English with sufficient detail for search and discovery. Avoid acronyms.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>Human-readable description with sufficient detail for a user to quickly understand whether the dataset is of interest.</td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Mandatory</td>
        <td>object</td>
        <td>The publishing entity and optionally its parent organization(s). References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Agent class</a>.</td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Mandatory</td>
        <td>object</td>
        <td>Contact person's name and email for the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Kind class</a>.</td>
      </tr>
      <tr>
        <td><code>identifier</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>A unique identifier for the dataset. Must be unique across the agency's catalog and remain fixed over time. Use a persistent URI where possible.</td>
      </tr>
      <tr>
        <td><code>keyword</code></td>
        <td>Recommended</td>
        <td>array of strings</td>
        <td>Tags to help users discover the dataset. Include both technical and non-technical terms. (Required in v1.1)</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Recommended</td>
        <td>string (ISO 8601)</td>
        <td>Most recent date the dataset was changed or updated. (Required in v1.1).  Note for agencies upgrading from v1.1: If you currently use a repeating interval like R/P1D or R/P1Y in this field, that format is no longer valid in v3.0. Set modified to the actual date the data last changed (e.g., 2024-06-01) and use accrualPeriodicity to express update frequency.</td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Date of formal release.</td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>ISO 639-1 two-letter language codes (e.g., en, es, fr). Note: v1.1 used RFC 5646 tags like en-US — v3.0 simplifies to two-letter codes only.</td>
      </tr>
      <tr>
        <td><code>landingPage</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>A Document object with a title and accessURL pointing to a human-friendly hub or landing page for all resources tied to the dataset. Example: {"@type": "Document", "title": "Dataset Homepage", "accessURL": "https://agency.gov/dataset"}</td>
      </tr>
      <tr>
        <td><code>theme</code></td>
        <td>Optional</td>
        <td>array of Concept objects</td>
        <td>Each Concept requires a prefLabel. Example: [{"prefLabel": "Climate Science"}]. Can reference a ConceptScheme for controlled vocabulary linkage.</td>
      </tr>
      <tr>
        <td><code>accrualPeriodicity</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Accepts plain-language codes (e.g., daily, weekly, monthly, quarterly, annually, irregular), ISO 8601 repeating duration format (e.g., R/P1Y), or Dublin Core frequency terms. Plain-language codes are preferred.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Optional</td>
        <td>array of Standard objects</td>
        <td>Each Standard should include a title and optionally an identifier and issued date. Example: [{"@type": "Standard", "title": "ISO 19115", "identifier": "https://www.iso.org/standard/53798.html"}]. A dataset can conform to multiple standards.</td>
      </tr>
      <tr>
        <td><code>describedBy</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>A Distribution object describing the data dictionary. Example: {"@type": "Distribution", "title": "Data Dictionary", "downloadURL": "https://agency.gov/dict.pdf", "mediaType": "application/pdf"}. The describedByType field from v1.1 is no longer needed; express the format as mediaType within this Distribution object.</td>
      </tr>
      </tbody>
  </table>

  ---

  ### Distribution and access

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

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
        <td><code>distribution</code></td>
        <td>Conditional</td>
        <td>array of objects</td>
        <td>A container for one or more Distribution objects describing how the dataset can be accessed or downloaded. Required if the dataset has an <code>accessURL</code> or <code>downloadURL</code>. See <a href="https://resources.data.gov/catalog/dcat-us-3-distribution/">Distribution fields</a>.</td>
      </tr>
      <tr>
        <td><code>sample</code></td>
        <td>Optional</td>
        <td>array of objects</td>
        <td>Links to sample distributions of the dataset.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Access and rights

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

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
        <td><code>accessRights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Information about who can access the dataset and under what conditions.  Note: In v1.1 this was the accessLevel field with three fixed values (public, restricted public, non-public). In v3.0 accessRights is a free-text string. The value public remains valid. For restricted datasets write a plain-language explanation of the restriction and how to request access.</td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Rights information, including any restrictions based on privacy, security, or other policies.</td>
      </tr>
      <tr>
        <td><code>rightsHolder</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>An agent owning or managing rights over the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Agent class</a>.</td>
      </tr>
      <tr>
        <td><code>license</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>The license or public domain dedication status of the dataset. Provide as a URL. See <a href="https://resources.data.gov/open-licenses/">Open Licenses</a>.  In v3.0, license is more correctly expressed at the Distribution level per W3C DCAT. Including it here at the dataset level is supported, but agencies are encouraged to move license to each Distribution object.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Spatial and temporal

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

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
        <td><code>spatial</code></td>
        <td>Conditional</td>
        <td>object</td>
        <td>Spatial coverage of the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Location class</a>. Required if the dataset has a spatial dimension. (Was a string in v1.1; now uses the Location class.).  Minimum upgrade: {"@type": "Location", "prefLabel": "United States"}. For geospatial precision, add a bbox as a WKT string: "POLYGON((-125 24, -66 24, -66 50, -125 50, -125 24))" or as a GeoJSON Polygon object.</td>
      </tr>
      <tr>
        <td><code>temporal</code></td>
        <td>Conditional</td>
        <td>object</td>
        <td>Temporal coverage of the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">PeriodOfTime class</a>.  Note for agencies upgrading from v1.1: The v1.1 string format (e.g., 2000-01-15T00:00:00Z/2010-01-15T00:00:00Z) is no longer valid. Use a PeriodOfTime object: {"@type": "PeriodOfTime", "startDate": "2000-01-15", "endDate": "2010-01-15"}. Open-ended periods are valid; you can omit either startDate or endDate.</td>
      </tr>
      <tr>
        <td><code>spatialResolutionInMeters</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A numeric value expressed as a string (e.g., "1000" for 1 kilometer resolution).</td>
      </tr>
      <tr>
        <td><code>temporalResolution</code></td>
        <td>Optional</td>
        <td>string (ISO 8601 duration)</td>
        <td>Minimum time period resolvable in the dataset. New in v3.0.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Versioning and series

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

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
        <td><code>version</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The version indicator for this dataset.</td>
      </tr>
      <tr>
        <td><code>versionNotes</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A description of changes between this version and the previous version.</td>
      </tr>
      <tr>
        <td><code>hasCurrentVersion</code></td>
        <td>Optional</td>
        <td>string (IRI)</td>
        <td>A link to the current version of the dataset.</td>
      </tr>
      <tr>
        <td><code>hasVersion</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Links to known versions of the dataset.</td>
      </tr>
      <tr>
        <td><code>previousVersion</code></td>
        <td>Optional</td>
        <td>string (IRI)</td>
        <td>A link to the previous version of the dataset.</td>
      </tr>
      <tr>
        <td><code>replaces</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Datasets that this dataset replaces.</td>
      </tr>
      <tr>
        <td><code>inSeries</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>A DatasetSeries to which this dataset belongs. See <a href="https://resources.data.gov/catalog/dcat-us-3-dataset-series/">DatasetSeries fields</a>.  Note: In v1.1, isPartOf was used to group datasets into a collection. In v3.0, use inSeries for temporal series membership, or document collection membership at the parent dataset level using hasPart."</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Provenance and quality

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

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
        <td><code>provenance</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>A statement about the lineage of the dataset.</td>
      </tr>
      <tr>
        <td><code>source</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Datasets from which this dataset was derived.</td>
      </tr>
      <tr>
        <td><code>wasGeneratedBy</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Activities that generated this dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Activity class</a>.</td>
      </tr>
      <tr>
        <td><code>hasQualityMeasurement</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>Quality measurements associated with the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">QualityMeasurement class</a>.</td>
      </tr>
    </tbody>
  </table>

  ---

  ### Federal government fields

  These fields were introduced in DCAT-US v1.1 for federal agency use and are preserved in v3.0. They are not required at the schema level but may be required by OMB policy guidance.  These fields are not defined in the v3.0 core schema. They are documented here for continuity because agencies are currently required to include them under existing OMB policy (M-13-13 and the OPEN Government Data Act). Agencies should continue populating these fields until updated OMB guidance is issued. The v3.0 schema will not reject records that include them.

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json -->

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
        <td><code>bureauCode</code></td>
        <td>Policy-dependent</td>
        <td>array of strings</td>
        <td>Agency and bureau code from OMB Circular A-11, Appendix C. Format: <code>015:11</code>.</td>
      </tr>
      <tr>
        <td><code>programCode</code></td>
        <td>Policy-dependent</td>
        <td>array of strings</td>
        <td>Primary program related to this dataset, from the Federal Program Inventory. Format: <code>015:001</code>.</td>
      </tr>
      <tr>
        <td><code>accessLevel</code></td>
        <td>Policy-dependent</td>
        <td>string</td>
        <td>The degree to which the dataset could be made publicly available. One of: <code>public</code>, <code>restricted public</code>, <code>non-public</code>. (Required in v1.1)</td>
      </tr>
      <tr>
        <td><code>primaryITInvestmentUII</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>IT Unique Investment Identifier linking the dataset to an IT investment in Exhibit 53.</td>
      </tr>
      <tr>
        <td><code>systemOfRecords</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>URL to the System of Records Notice (SORN) if this dataset is a Privacy Act system of records.</td>
      </tr>
      <tr>
        <td><code>dataQuality</code></td>
        <td>Optional</td>
        <td>boolean</td>
        <td>Whether the dataset meets the agency's Information Quality Guidelines (<code>true</code> or <code>false</code>).</td>
      </tr>
    </tbody>
  </table>

    ---


    ### Example
  
    A minimal Dataset record meeting the v3.0 required fields:
  
    <pre><code>{
    "@type": "Dataset",
    "title": "Agency Travel Data FY2024",
    "description": "Records of official travel expenditures by agency employees during fiscal year 2024, including destination, purpose, and cost.",
    "publisher": {
      "@type": "org:Organization",
      "name": "Office of the Chief Financial Officer",
      "subOrganizationOf": {
        "@type": "org:Organization",
        "name": "Example Federal Agency"
      }
    },
    "contactPoint": {
      "@type": "vcard:Contact",
      "fn": "Jane Smith",
      "hasEmail": "mailto:jane.smith@agency.gov"
    }
  }
  </code></pre>



  <pre><code>{
  "@type": "Dataset",
  "title": "Agency Travel Data FY2024",
  "description": "Records of official travel expenditures...",
  "identifier": "https://www.agency.gov/data/travel-fy2024",
  "publisher": {"name": "Example Federal Agency"},
  "contactPoint": {"fn": "Jane Smith", "hasEmail": "mailto:jane@agency.gov"},
  "keyword": ["travel", "expenditure", "fiscal year"],
  "modified": "2024-10-01",
  "accrualPeriodicity": "annually",
  "accessRights": "public",
  "temporal": [{"@type": "PeriodOfTime", "startDate": "2024-10-01", "endDate": "2025-09-30"}],
  "spatial": [{"@type": "Location", "prefLabel": "United States"}],
  "distribution": [{"title": "FY2024 Travel Data CSV", "downloadURL": "https://agency.gov/data/travel-fy2024.csv", "mediaType": "text/csv", "license": "https://creativecommons.org/publicdomain/zero/1.0/"}]
  }
  </code></pre>


  <table>
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
      <td>Replaced by <code>accessRights</code></td>
      <td>Use a free-text string. The value <code>public</code> remains valid. For restricted datasets write a plain-language explanation.</td>
    </tr>
    <tr>
      <td><code>modified</code> with repeating intervals (e.g., <code>R/P1D</code>)</td>
      <td>Format no longer valid</td>
      <td>Set to the actual date the data last changed (e.g., <code>2024-06-01</code>). Use <code>accrualPeriodicity</code> for update frequency.</td>
    </tr>
    <tr>
      <td><code>temporal</code> as an ISO 8601 string</td>
      <td>Format no longer valid</td>
      <td>Use a PeriodOfTime object: <code>{"@type": "PeriodOfTime", "startDate": "2000-01-15", "endDate": "2010-01-15"}</code></td>
    </tr>
    <tr>
      <td><code>spatial</code> as a plain string or ad-hoc GeoJSON</td>
      <td>Format no longer valid</td>
      <td>Use a Location object: <code>{"@type": "Location", "prefLabel": "United States"}</code></td>
    </tr>
    <tr>
      <td><code>language</code> with RFC 5646 tags (e.g., <code>en-US</code>)</td>
      <td>Format no longer valid</td>
      <td>Use two-letter ISO 639-1 codes only (e.g., <code>en</code>, <code>es</code>).</td>
    </tr>
    <tr>
      <td><code>isPartOf</code></td>
      <td>Replaced</td>
      <td>Use <code>inSeries</code> for temporal series membership or <code>hasPart</code> at the parent dataset level for generic collections.</td>
    </tr>
    <tr>
      <td><code>describedByType</code></td>
      <td>Absorbed into <code>describedBy</code></td>
      <td>Express the format as <code>mediaType</code> within the <code>describedBy</code> Distribution object. No separate field needed.</td>
    </tr>
    <tr>
      <td><code>bureauCode</code></td>
      <td>Not in v3.0 core schema</td>
      <td>Continue populating per existing OMB policy guidance until updated guidance is issued.</td>
    </tr>
    <tr>
      <td><code>programCode</code></td>
      <td>Not in v3.0 core schema</td>
      <td>Continue populating per existing OMB policy guidance until updated guidance is issued.</td>
    </tr>
    <tr>
      <td><code>dataQuality</code></td>
      <td>Not in v3.0 core schema</td>
      <td>Use <code>hasQualityMeasurement</code> for structured quality reporting, or note conformance in <code>scopeNote</code>.</td>
    </tr>
  </tbody>
  </table>
  
    ---

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json">jsonschema/definitions/Dataset.json</a> · Generated reference: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Dataset.md">jsonschema/docs/Dataset.md</a>
  

  ## DCAT US Pages
  

  ### <a href="https://resources.data.gov/catalog/dcat-us-3/">Index</a>


  ### <a href="https://resources.data.gov/catalog/dcat-us-3-catalog/">Catalog</a>
  

  ### <a href="https://resources.data.gov/catalog/dcat-us-3-data-service/">Data Service</a>
  
  
  ### <a href="https://resources.data.gov/catalog/dcat-us-3-dataset-series/">Dataset Series</a>
  

  ### <a href="https://resources.data.gov/catalog/dcat-us-3-dataset/">Dataset</a>
  

  ### <a href="https://resources.data.gov/catalog/dcat-us-3-distribution/">Distribution</a>
  

  ### <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Supporting Classes</a>
  

  ### <a href="https://resources.data.gov/catalog/dcat-us-priorities/">DCAT Priorities</a>
  

  ### <a href="https://resources.data.gov/catalog/dcat-us/">DCAT US General Information</a>



examples: ""
link: ""
layout: resource
toc: true
publish: true
---
