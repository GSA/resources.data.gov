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

  <strong>Required fields in v3.0:</strong> <code>title</code>, <code>description</code>, <code>publisher</code>, <code>contactPoint</code>

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
        <td>Optional</td>
        <td>string</td>
        <td>A unique identifier maintained within the agency catalog. A persistent URI is strongly recommended.</td>
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
        <td>Most recent date the dataset was changed or updated. (Required in v1.1)</td>
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
        <td>Language(s) of the dataset. Use RFC 5646 tags (e.g., <code>en-US</code>).</td>
      </tr>
      <tr>
        <td><code>landingPage</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>A human-friendly hub or landing page for all resources tied to the dataset. Not intended for an agency's homepage.</td>
      </tr>
      <tr>
        <td><code>theme</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Main thematic category or categories of the dataset.</td>
      </tr>
      <tr>
        <td><code>accrualPeriodicity</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The frequency with which the dataset is published. Use ISO 8601 repeating duration format (e.g., <code>R/P1Y</code> for annual, <code>R/P1D</code> for daily) or <code>irregular</code>.</td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Optional</td>
        <td>string (URI)</td>
        <td>A standard the dataset conforms to. Use a URI that uniquely identifies the standard.</td>
      </tr>
      <tr>
        <td><code>describedBy</code></td>
        <td>Optional</td>
        <td>string (URL)</td>
        <td>URL to the data dictionary for the dataset.</td>
      </tr>
      <tr>
        <td><code>isPartOf</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The identifier of a parent dataset, for grouping datasets into a collection.</td>
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
        <td>Information about who can access the dataset and under what conditions.</td>
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
        <td>The license or public domain dedication status of the dataset. Provide as a URL. See <a href="https://resources.data.gov/open-licenses/">Open Licenses</a>.</td>
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
        <td>Spatial coverage of the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">Location class</a>. Required if the dataset has a spatial dimension. (Was a string in v1.1; now uses the Location class.)</td>
      </tr>
      <tr>
        <td><code>temporal</code></td>
        <td>Conditional</td>
        <td>object</td>
        <td>Temporal coverage of the dataset. References the <a href="https://resources.data.gov/catalog/dcat-us-3-supporting-classes/">PeriodOfTime class</a>.</td>
      </tr>
      <tr>
        <td><code>spatialResolutionInMeters</code></td>
        <td>Optional</td>
        <td>number</td>
        <td>Minimum spatial separation resolvable in the dataset, in meters. New in v3.0.</td>
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
        <td>A DatasetSeries to which this dataset belongs. See <a href="https://resources.data.gov/catalog/dcat-us-3-dataset-series/">DatasetSeries fields</a>.</td>
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

  These fields were introduced in DCAT-US v1.1 for federal agency use and are preserved in v3.0. They are not required at the schema level but may be required by OMB policy guidance.

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
