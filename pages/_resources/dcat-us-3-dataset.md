---
resource_name: DCAT-US Schema v3.0 Dataset fields
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

  **Required fields in v3.0:** `title`, `description`, `publisher`, `contactPoint`, `identifier`

  All other fields are Optional unless noted. Fields that were required in v1.1 but are no longer schema-required in v3.0 are noted below. Agencies should consult the current OMB policy guidance for any fields that remain required.

  ---

  ### Transition from DCAT-US v1.1 to v3.0

  If your agency is upgrading from v1.1, most of your existing dataset records will carry forward with minimal changes. The required fields are largely the same. The main things to be aware of are: `modified` no longer accepts repeating intervals; `temporal` and `spatial` now use structured objects instead of strings; `accessLevel` is replaced by `accessRights`; and `license` should move to the Distribution level. The table at the bottom of this page summarizes all field-level changes from v1.1.

  ---

  ### Discovery and context

  These fields are new in v3.0 and help users understand what a dataset is for, what it covers, and any limitations on its use. They are all optional but strongly encouraged for publicly visible datasets.

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
        <td><code>purpose</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The purpose of the dataset — why it was created and what problem it addresses. Example: <code>"To provide comprehensive climate observations for research, planning, and decision-making."</code></td>
      </tr>
      <tr>
        <td><code>liabilityStatement</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A statement clarifying limitations of responsibility, qualifications on accuracy or completeness, or absence of endorsement by the publisher. Example: <code>"This dataset is provided as-is without warranty. Users are responsible for determining fitness for their intended use."</code></td>
      </tr>
      <tr>
        <td><code>scopeNote</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A usage note clarifying what the dataset includes and excludes, or guidance on how it should be interpreted. Example: <code>"This dataset contains raw observational data. For derived products such as monthly averages see related datasets."</code></td>
      </tr>
      <tr>
        <td><code>creator</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>The person or organization that created the dataset, if different from the publisher. References the Agent class. Example: <code>{"name": "National Climate Data Center"}</code></td>
      </tr>
      <tr>
        <td><code>provenance</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Plain-language statements about the lineage of the dataset — how the data was collected, processed, and quality-controlled. Example: <code>["Data collected from automated weather stations at 2,500 locations.", "Quality control applied per WMO guidelines."]</code></td>
      </tr>
    </tbody>
  </table>

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
        <td>The publishing entity and optionally its parent organization(s). References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Organization class</a>. At a minimum, provide <code>name</code>. Optionally add <code>prefLabel</code> (preferred legal name), <code>altLabel</code> (acronym), and <code>subOrganizationOf</code> (array of parent organizations).</td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Mandatory</td>
        <td>object or array</td>
        <td>Contact person's name and email for the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Kind class</a>. Must include <code>fn</code> (full name) and <code>hasEmail</code> (formatted as <code>mailto:name@agency.gov</code>). Can be a single object or an array for multiple contacts. Optionally add <code>tel</code> and <code>organization-name</code>.</td>
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
        <td>Most recent date the dataset was changed or updated. (Required in v1.1). <strong>Note for agencies upgrading from v1.1:</strong> If you currently use a repeating interval like <code>R/P1D</code> or <code>R/P1Y</code> in this field, that format is no longer valid in v3.0. Set <code>modified</code> to the actual date the data last changed (e.g., <code>2024-06-01</code>) and use <code>accrualPeriodicity</code> to express update frequency.</td>
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
        <td>ISO 639-1 two-letter language codes (e.g., <code>en</code>, <code>es</code>, <code>fr</code>). Note: v1.1 used RFC 5646 tags like <code>en-US</code> — v3.0 simplifies to two-letter codes only.</td>
      </tr>
      <tr>
        <td><code>landingPage</code></td>
        <td>Recommended</td>
        <td>object</td>
        <td>A Document object with a <code>title</code> and <code>accessURL</code> pointing to a human-friendly hub or landing page for all resources tied to the dataset. Example: <code>{"@type": "Document", "title": "Dataset Homepage", "accessURL": "https://agency.gov/dataset"}</code></td>
      </tr>
      <tr>
        <td><code>theme</code></td>
        <td>Recommended</td>
        <td>array of Concept objects</td>
        <td>Each Concept requires a <code>prefLabel</code>. Example: <code>[{"prefLabel": "Climate Science"}]</code>. Can reference a ConceptScheme for controlled vocabulary linkage.</td>
      </tr>
      <tr>
        <td><code>accrualPeriodicity</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Accepts plain-language codes (e.g., <code>daily</code>, <code>weekly</code>, <code>monthly</code>, <code>quarterly</code>, <code>annually</code>, <code>irregular</code>), ISO 8601 repeating duration format (e.g., <code>R/P1Y</code>), or Dublin Core frequency terms. Plain-language codes are preferred.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Optional</td>
        <td>array of Standard objects</td>
        <td>Each Standard should include a <code>title</code> and optionally an <code>identifier</code> and <code>issued</code> date. Example: <code>[{"@type": "Standard", "title": "ISO 19115", "identifier": "https://www.iso.org/standard/53798.html"}]</code>. A dataset can conform to multiple standards.</td>
      </tr>
      <tr>
        <td><code>describedBy</code></td>
        <td>Recommended</td>
        <td>object</td>
        <td>A Distribution object describing the data dictionary. Example: <code>{"@type": "Distribution", "title": "Data Dictionary", "downloadURL": "https://agency.gov/dict.pdf", "mediaType": "application/pdf"}</code>. The <code>describedByType</code> field from v1.1 is no longer needed — express the format as <code>mediaType</code> within this Distribution object.</td>
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
        <td>A container for one or more Distribution objects describing how the dataset can be accessed or downloaded. Required if the dataset has an <code>accessURL</code> or <code>downloadURL</code>. See <a href="https://resources.data.gov/catalog/dcat-us-3-distribution/">Distribution fields</a>. In v3.0, <code>license</code> should be included on each Distribution object rather than at the Dataset level. If all distributions share the same license, add it to each one.</td>
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
        <td>Information about who can access the dataset and under what conditions. In v1.1 this was the <code>accessLevel</code> field with three fixed values (<code>public</code>, <code>restricted public</code>, <code>non-public</code>). In v3.0 <code>accessRights</code> is a free-text string. The value <code>public</code> remains valid. For restricted datasets, write a plain-language explanation of the restriction and how to request access.</td>
      </tr>
      <tr>
        <td><code>rights</code></td>
        <td>Recommended</td>
        <td>array of strings</td>
        <td>Rights statements not already covered by <code>license</code> or <code>accessRights</code> — for example, copyright statements, attribution requirements, or policy restrictions on use. Example: <code>["Data is in the public domain under 17 USC 105.", "Please cite the National Climate Data Center when using this data."]</code>. In v1.1 this was a single string with a 255-character limit. In v3.0 it is an array with no character limit.</td>
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
        <td>The license or public domain dedication status of the dataset. Provide as a URL. See <a href="https://resources.data.gov/open-licenses/">Open Licenses</a>. In v3.0, <code>license</code> is more correctly expressed at the Distribution level per W3C DCAT. Including it here at the dataset level is supported, but agencies are encouraged to move <code>license</code> to each Distribution object.</td>
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
        <td>Recommended</td>
        <td>array of Location objects</td>
        <td>Spatial coverage of the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Location class</a>. (Was a string in v1.1; now uses the Location class.) Minimum upgrade: <code>{"@type": "Location", "prefLabel": "United States"}</code>. For geospatial precision, add a <code>bbox</code> as a WKT string: <code>"POLYGON((-125 24, -66 24, -66 50, -125 50, -125 24))"</code> or as a GeoJSON Polygon object.</td>
      </tr>
      <tr>
        <td><code>temporal</code></td>
        <td>Recommended</td>
        <td>array of PeriodOfTime objects</td>
        <td>Temporal coverage of the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">PeriodOfTime class</a>. <strong>Note for agencies upgrading from v1.1:</strong> The v1.1 string format (e.g., <code>2000-01-15T00:00:00Z/2010-01-15T00:00:00Z</code>) is no longer valid. Use a PeriodOfTime object: <code>{"@type": "PeriodOfTime", "startDate": "2000-01-15", "endDate": "2010-01-15"}</code>. Open-ended periods are valid — you can omit either <code>startDate</code> or <code>endDate</code>.</td>
      </tr>
      <tr>
        <td><code>spatialResolutionInMeters</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A numeric value expressed as a string (e.g., <code>"1000"</code> for 1 kilometer resolution).</td>
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
        <td>array of DatasetSeries objects</td>
        <td>A DatasetSeries to which this dataset belongs. See <a href="https://resources.data.gov/catalog/dcat-us-3-dataset-series/">DatasetSeries fields</a>. In v1.1, <code>isPartOf</code> was used to group datasets into a collection. In v3.0, use <code>inSeries</code> for temporal series membership, or document collection membership at the parent dataset level using <code>hasPart</code>.</td>
      </tr>
    </tbody>
  </table>

  #### When to use which versioning field

  - Use **`inSeries`** when your dataset is one edition in a recurring sequence — for example, the FY2024 edition of an annual survey. Create a DatasetSeries record for the series as a whole and reference it here. See [DatasetSeries fields](../dcat-us-3-dataset-series/).
  - Use **`version`** when you are publishing a corrected or updated version of the same dataset — for example, version 2.1 of a reference file. Pair it with `versionNotes` to describe what changed.
  - Use **`hasVersion`** to link a dataset record to all its known versions, and **`hasCurrentVersion`** to point users to the latest one.
  - Use **`replaces`** when a dataset supersedes one or more previous datasets entirely — not just an update, but a replacement.

  These fields can be used together. A dataset can belong to a series via `inSeries` and also carry a `version` number and `versionNotes`.

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
        <td>Plain-language statements about the lineage of the dataset — how the data was collected, processed, and quality-controlled.</td>
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

  These fields were introduced in DCAT-US v1.1 for federal agency use. They are not defined in the v3.0 core schema but agencies should continue populating them under existing OMB policy (M-13-13 and the OPEN Government Data Act) until updated guidance is issued. The v3.0 schema will not reject records that include them.

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
        <td>Whether the dataset meets the agency's Information Quality Guidelines (<code>true</code> or <code>false</code>). Not in v3.0 schema — use <code>hasQualityMeasurement</code> for structured quality reporting going forward.</td>
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
    }
  }
  </code></pre>

  A more complete record showing commonly used fields:

  <pre><code>{
    "@type": "Dataset",
    "title": "Agency Travel Data FY2024",
    "description": "Records of official travel expenditures by agency employees during fiscal year 2024, including destination, purpose, and cost.",
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
      "hasEmail": "mailto:jane.smith@agency.gov",
      "tel": "+1-202-555-0100",
      "organization-name": "Office of the Chief Financial Officer"
    },
    "keyword": ["travel", "expenditure", "fiscal year", "FY2024"],
    "modified": "2024-10-15",
    "accrualPeriodicity": "annually",
    "accessRights": "public",
    "purpose": "To provide transparency into federal employee travel expenditures.",
    "temporal": [
      {
        "@type": "PeriodOfTime",
        "startDate": "2023-10-01",
        "endDate": "2024-09-30"
      }
    ],
    "spatial": [
      {
        "@type": "Location",
        "prefLabel": "United States"
      }
    ],
    "distribution": [
      {
        "@type": "Distribution",
        "title": "FY2024 Travel Data (CSV)",
        "description": "Full travel records as a comma-separated values file.",
        "downloadURL": "https://www.agency.gov/data/travel-fy2024.csv",
        "mediaType": "text/csv",
        "format": "CSV",
        "license": "https://creativecommons.org/publicdomain/zero/1.0/"
      },
      {
        "@type": "Distribution",
        "title": "Travel Data REST API",
        "description": "A fully queryable REST API returning JSON.",
        "accessURL": "https://api.agency.gov/travel/",
        "format": "API"
      }
    ],
    "bureauCode": ["015:11"],
    "programCode": ["015:001"],
    "accessLevel": "public"
  }
  </code></pre>

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

  Source: [jsonschema/definitions/Dataset.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Dataset.json) · Generated reference: [jsonschema/docs/Dataset.md](https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Dataset.md)


  ## DCAT US Pages

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
