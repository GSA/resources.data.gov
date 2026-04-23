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

  Supporting classes are referenced from Dataset, Distribution, Catalog, DataService, and DatasetSeries. Most agencies will encounter them indirectly — through a field that points to one of these structures. The sections below cover the classes agencies are most likely to work with directly. The full class index at the bottom of this page lists all supporting classes with links to their source files.

  Most supporting class objects also accept an optional `@id` field — a URI that uniquely identifies the specific instance of that object. This is useful for linked data implementations but is not required for standard federal data inventory use.

  ---

  ### Agents and organizations

  Three classes handle people and organizations in DCAT-US v3.0: **Agent** (an abstract entity — person, organization, or system), **Organization** (a named organizational entity with hierarchy support), and **Kind** (contact information modeled on vCard). A fourth class, **Address**, is used within Kind to express physical addresses.

  As a general rule: use **Organization** for `publisher` on Dataset — it supports preferred labels, abbreviations, and parent hierarchy. Use **Agent** for `publisher` on Catalog and DataService, and for `creator`, `contributor`, and `wasAttributedTo` on Dataset and DataService — it is a simpler class intended for any type of entity. Use **Kind** for all `contactPoint` fields.

  #### Agent

  An entity responsible for a resource — a person, organization, software agent, or other entity. Referenced by `creator`, `contributor`, and `wasAttributedTo` on Dataset and DataService. Also used by `publisher` on Catalog and DataService.

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
        <td><code>name</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The name of the agent. Example: <code>"National Climate Data Center"</code></td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Defaults to <code>Agent</code>.</td>
      </tr>
      <tr>
        <td><code>category</code></td>
        <td>Optional</td>
        <td>array of Concept objects</td>
        <td>The type of agent — for example, a federal agency, contractor, or research institution.</td>
      </tr>
    </tbody>
  </table>

  Source: [Agent.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json)

  #### Organization

  A named organizational entity, typically used for `publisher` on Dataset. Extends Agent with support for preferred labels, alternative names, abbreviations, and hierarchical parent organizations.

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
        <td><code>name</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The full name of the organization. Example: <code>"U.S. Census Bureau"</code></td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Defaults to <code>Organization</code>.</td>
      </tr>
      <tr>
        <td><code>prefLabel</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The preferred or legal name of the organization. Example: <code>"United States Census Bureau"</code></td>
      </tr>
      <tr>
        <td><code>altLabel</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>An alternative name, trading name, or common abbreviation. Example: <code>"Census Bureau"</code></td>
      </tr>
      <tr>
        <td><code>notation</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Official abbreviations or codes for the organization. Example: <code>["USCB", "CB"]</code></td>
      </tr>
      <tr>
        <td><code>subOrganizationOf</code></td>
        <td>Optional</td>
        <td>array of Organization objects</td>
        <td>Parent organization(s). Can be nested to express full hierarchy — bureau within agency within U.S. Government. In v3.0 this is an array; in v1.1 it was a single object.</td>
      </tr>
    </tbody>
  </table>

  Example:

  <pre><code>{
    "@type": "Organization",
    "name": "U.S. Census Bureau",
    "prefLabel": "United States Census Bureau",
    "altLabel": "Census Bureau",
    "notation": ["USCB"],
    "subOrganizationOf": [
      {
        "@type": "Organization",
        "name": "U.S. Department of Commerce"
      }
    ]
  }
  </code></pre>

  Source: [Organization.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Organization.json)

  #### Kind

  Contact information modeled on vCard. Referenced by `contactPoint` on Dataset, DataService, Catalog, and DatasetSeries. Can be a single object or an array of objects when multiple contacts are needed.

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
        <td><code>fn</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The full formatted name of the contact. Can be a person's name or a team name. Example: <code>"Climate Data Support Team"</code></td>
      </tr>
      <tr>
        <td><code>hasEmail</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>Email address formatted with the <code>mailto:</code> prefix. Example: <code>"mailto:climate@agency.gov"</code></td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Defaults to <code>Kind</code>.</td>
      </tr>
      <tr>
        <td><code>tel</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Telephone number. Example: <code>"+1-202-555-0100"</code></td>
      </tr>
      <tr>
        <td><code>organization-name</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The name of the organization the contact belongs to. Example: <code>"Office of Data Management"</code></td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The position or role of the contact. Example: <code>"Data Steward"</code></td>
      </tr>
      <tr>
        <td><code>given-name</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The contact's given (first) name.</td>
      </tr>
      <tr>
        <td><code>family-name</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The contact's family (last) name.</td>
      </tr>
      <tr>
        <td><code>address</code></td>
        <td>Optional</td>
        <td>array of Address objects</td>
        <td>Physical or mailing address(es) for the contact. See Address below.</td>
      </tr>
    </tbody>
  </table>

  Example:

  <pre><code>{
    "@type": "Kind",
    "fn": "Climate Data Support Team",
    "hasEmail": "mailto:climate@agency.gov",
    "tel": "+1-202-555-0100",
    "organization-name": "National Climate Data Center",
    "title": "Data Steward"
  }
  </code></pre>

  Source: [Kind.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json)

  #### Address

  A physical or mailing address. Referenced by `address` on Kind. No fields are required — include what is available.

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
        <td><code>street-address</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Street name and civic number. Example: <code>"1401 Constitution Ave NW"</code></td>
      </tr>
      <tr>
        <td><code>locality</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>City. Example: <code>"Washington"</code></td>
      </tr>
      <tr>
        <td><code>region</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>State or administrative area. Example: <code>"DC"</code></td>
      </tr>
      <tr>
        <td><code>postal-code</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Postal or ZIP code. Example: <code>"20230"</code></td>
      </tr>
      <tr>
        <td><code>country-name</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Country name. Example: <code>"United States"</code></td>
      </tr>
    </tbody>
  </table>

  Source: [Address.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Address.json)

  ---

  ### Location and time

  #### Location

  A named place or geographic area. Referenced by `spatial` on Dataset, DataService, and DatasetSeries. No fields are required — use what is available. At minimum provide a `prefLabel`. For geospatial precision add a `bbox`.

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
        <td><code>prefLabel</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>The preferred name of the location. Example: <code>"United States"</code>, <code>"Washington, D.C."</code></td>
      </tr>
      <tr>
        <td><code>bbox</code></td>
        <td>Recommended</td>
        <td>string (WKT) or GeoJSON Polygon object</td>
        <td>Bounding box for the location. Accepts either a WKT string or a GeoJSON Polygon object.
          <br><br>
          WKT example: <code>"POLYGON((-125 24, -66 24, -66 50, -125 50, -125 24))"</code>
          <br><br>
          GeoJSON example: <code>{"type": "Polygon", "coordinates": [[[-125.0, 24.0], [-66.0, 24.0], [-66.0, 50.0], [-125.0, 50.0], [-125.0, 24.0]]]}</code></td>
      </tr>
      <tr>
        <td><code>centroid</code></td>
        <td>Optional</td>
        <td>string (WKT) or GeoJSON Point object</td>
        <td>The geographic center of the location. Example: <code>{"type": "Point", "coordinates": [-77.0369, 38.9072]}</code></td>
      </tr>
      <tr>
        <td><code>geometry</code></td>
        <td>Optional</td>
        <td>string or GeoJSON object</td>
        <td>Full geometry of the location in WKT, GeoJSON, or GML format.</td>
      </tr>
      <tr>
        <td><code>altLabel</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>An alternative name for the location. Example: <code>"DC"</code> for Washington D.C.</td>
      </tr>
      <tr>
        <td><code>identifier</code></td>
        <td>Optional</td>
        <td>Identifier object</td>
        <td>A unique geographic identifier, such as a GeoNames URI.</td>
      </tr>
      <tr>
        <td><code>inScheme</code></td>
        <td>Optional</td>
        <td>ConceptScheme object</td>
        <td>The gazetteer or geographic authority list this location belongs to.</td>
      </tr>
    </tbody>
  </table>

  Example:

  <pre><code>{
    "@type": "Location",
    "prefLabel": "Continental United States",
    "bbox": "POLYGON((-125 24, -66 24, -66 50, -125 50, -125 24))"
  }
  </code></pre>

  Source: [Location.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json)

  #### PeriodOfTime

  A temporal interval defined by a start date and/or end date. Referenced by `temporal` on Dataset, DataService, and DatasetSeries. At least one of `startDate` or `endDate` must be present. Open-ended periods are valid — you can omit either date.

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
        <td><code>startDate</code></td>
        <td>Recommended</td>
        <td>string (ISO 8601)</td>
        <td>The start date of the period. Accepts date, datetime, year (YYYY), or year-month (YYYY-MM). Example: <code>"2020-01-01"</code>
          <br><br>
          <strong>Upgrading from v1.1?</strong> The v1.1 plain interval string format (e.g., <code>"2000-01-15T00:00:00Z/2010-01-15T00:00:00Z"</code>) is no longer valid. Convert to a PeriodOfTime object with explicit <code>startDate</code> and <code>endDate</code> fields.</td>
      </tr>
      <tr>
        <td><code>endDate</code></td>
        <td>Recommended</td>
        <td>string (ISO 8601)</td>
        <td>The end date of the period. Accepts date, datetime, year, or year-month. Example: <code>"2024-12-31"</code></td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Defaults to <code>PeriodOfTime</code>.</td>
      </tr>
    </tbody>
  </table>

  Examples:

  <pre><code>{
    "@type": "PeriodOfTime",
    "startDate": "2020-01-01",
    "endDate": "2024-12-31"
  }
  </code></pre>

  <pre><code>{
    "@type": "PeriodOfTime",
    "startDate": "2020-01-01"
  }
  </code></pre>

  Note: In v1.1 `temporal` was a plain ISO 8601 interval string (e.g., `"2000-01-15T00:00:00Z/2010-01-15T00:00:00Z"`). That format is no longer valid in v3.0.

  Source: [PeriodOfTime.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json)

  ---

  ### Controlled vocabularies

  #### Concept

  A controlled term or label, optionally drawn from a concept scheme (controlled vocabulary). Used throughout the schema in fields like `theme`, `status`, `category`, `accrualPeriodicity`, and `accessRestriction.restrictionStatus`.

  Concept is flexible — it can be a **plain string** for simple cases, or a **full object** with vocabulary linkage for richer implementations.

  <table class="usa-table">
    <thead>
      <tr>
        <th>Form</th>
        <th>When to use</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Plain string</td>
        <td>When you have a label but no controlled vocabulary URI</td>
        <td><code>"Climate Science"</code></td>
      </tr>
      <tr>
        <td>Object with <code>prefLabel</code></td>
        <td>When you want a structured label without linking to a scheme</td>
        <td><code>{"prefLabel": "Climate Science"}</code></td>
      </tr>
      <tr>
        <td>Object with <code>prefLabel</code> and <code>inScheme</code></td>
        <td>When linking to a formal controlled vocabulary</td>
        <td><code>{"prefLabel": "Climate Science", "inScheme": {"title": "Federal Data Categories"}}</code></td>
      </tr>
    </tbody>
  </table>

  Full Concept object fields:

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
        <td><code>prefLabel</code></td>
        <td>Mandatory (if object)</td>
        <td>string</td>
        <td>The preferred label for this concept.</td>
      </tr>
      <tr>
        <td><code>altLabel</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>An alternative label.</td>
      </tr>
      <tr>
        <td><code>definition</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A definition of the concept.</td>
      </tr>
      <tr>
        <td><code>notation</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Abbreviations or codes from code lists.</td>
      </tr>
      <tr>
        <td><code>inScheme</code></td>
        <td>Optional</td>
        <td>ConceptScheme object</td>
        <td>The controlled vocabulary or taxonomy this concept belongs to.</td>
      </tr>
    </tbody>
  </table>

  Examples showing all three forms:

  <pre><code>"theme": ["Climate Science"]
  </code></pre>

  <pre><code>"theme": [
    {
      "prefLabel": "Climate Science"
    }
  ]
  </code></pre>

  <pre><code>"theme": [
    {
      "prefLabel": "Climate Science",
      "definition": "Data related to climate observations, modeling, and research.",
      "inScheme": {
        "@type": "ConceptScheme",
        "title": "Federal Data Categories"
      }
    }
  ]
  </code></pre>

  Source: [Concept.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Concept.json)

  #### ConceptScheme

  A controlled vocabulary, taxonomy, or other list of approved terms. Referenced by `themeTaxonomy` on Catalog and by `inScheme` on Concept and Location.

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
        <td>The title of the concept scheme. Example: <code>"Federal Data Categories"</code></td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>A description of the vocabulary and what it covers.</td>
      </tr>
      <tr>
        <td><code>version</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Version number or designation. Example: <code>"2.0.1"</code></td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Date the vocabulary was formally published.</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Most recent date the vocabulary was updated.</td>
      </tr>
    </tbody>
  </table>

  Source: [ConceptScheme.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ConceptScheme.json)

  ---

  ### Identifiers and integrity

  #### Identifier

  A unique identifier and optionally its scheme and other relevant information. Referenced by `identifier` and `otherIdentifier` on Dataset, Distribution, DataService, and other classes.

  Like Concept, Identifier is flexible — it can be a **plain string** or a **full object**.

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
        <td><code>notation</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The identifier value. Example: <code>"10.7927/H45X26V8"</code></td>
      </tr>
      <tr>
        <td><code>schemaAgency</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The name of the agency that issued the identifier. Example: <code>"DOI Foundation"</code></td>
      </tr>
      <tr>
        <td><code>creator</code></td>
        <td>Optional</td>
        <td>Organization object</td>
        <td>The organization that manages the identifier scheme.</td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>Date the identifier was issued.</td>
      </tr>
      <tr>
        <td><code>version</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Version of the identifier scheme.</td>
      </tr>
    </tbody>
  </table>

  Identifier is flexible — it can be a plain string or a structured object:

  <pre><code>"identifier": "https://doi.org/10.7927/H45X26V8"
  </code></pre>

  <pre><code>"identifier": {
    "@type": "Identifier",
    "notation": "10.7927/H45X26V8",
    "schemaAgency": "DOI Foundation",
    "issued": "2018-03-01"
  }
  </code></pre>

  Source: [Identifier.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Identifier.json)

  #### Checksum

  A mechanism for verifying that the contents of a Distribution have not changed. Referenced by `checksum` on Distribution. New in v3.0.

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
        <td><code>algorithm</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The algorithm used to produce the checksum. Example: <code>"SHA-256"</code></td>
      </tr>
      <tr>
        <td><code>checksumValue</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>A lowercase hexadecimal encoded digest value. Example: <code>"a1b2c3d4e5f6..."</code></td>
      </tr>
    </tbody>
  </table>

  Example:

  <pre><code>{
    "@type": "Checksum",
    "algorithm": "SHA-256",
    "checksumValue": "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
  }
  </code></pre>

  Source: [Checksum.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Checksum.json)

  #### Standard

  A standard or specification that another resource conforms to. Referenced by `conformsTo` on Dataset, Distribution, DataService, and Catalog. No fields are required — include what is available.

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
        <td>Recommended</td>
        <td>string</td>
        <td>Human-readable title of the standard. Example: <code>"DCAT-US 3.0"</code></td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>Plain-language summary of the standard.</td>
      </tr>
      <tr>
        <td><code>identifier</code></td>
        <td>Recommended</td>
        <td>Identifier object or string</td>
        <td>A persistent URI for the standard. Example: <code>"https://resources.data.gov/dcat-us/3.0.0"</code></td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Recommended</td>
        <td>string (ISO 8601)</td>
        <td>Date the standard was formally published.</td>
      </tr>
      <tr>
        <td><code>inScheme</code></td>
        <td>Recommended</td>
        <td>ConceptScheme object</td>
        <td>A standards registry this standard belongs to.</td>
      </tr>
      <tr>
        <td><code>created</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>The date the standard was first created.</td>
      </tr>
      <tr>
        <td><code>modified</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>The most recent date the standard was updated.</td>
      </tr>
    </tbody>
  </table>

  Example:

  <pre><code>{
    "@type": "Standard",
    "title": "DCAT-US 3.0",
    "identifier": "https://resources.data.gov/dcat-us/3.0.0",
    "issued": "2025-05-01"
  }
  </code></pre>

  Source: [Standard.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Standard.json)

  #### Document

  A publication or other document related to a resource. Referenced by `page` on Dataset and Distribution, and by `landingPage` and `homepage` on Dataset and Catalog respectively.

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
        <td>The title of the document. Example: <code>"Climate Data User Guide"</code></td>
      </tr>
      <tr>
        <td><code>accessURL</code></td>
        <td>Optional</td>
        <td>string (IRI)</td>
        <td>A URL that gives access to the document — typically an HTML page.</td>
      </tr>
      <tr>
        <td><code>downloadURL</code></td>
        <td>Optional</td>
        <td>string (IRI)</td>
        <td>A direct download URL for the document file.</td>
      </tr>
      <tr>
        <td><code>mediaType</code></td>
        <td>Optional</td>
        <td>string (IANA Media Type)</td>
        <td>The file format of the document. Example: <code>"application/pdf"</code></td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>Plain-language summary of the document.</td>
      </tr>
      <tr>
        <td><code>creator</code></td>
        <td>Optional</td>
        <td>array of Kind objects</td>
        <td>The individual person(s) responsible for creating the document. Uses Kind objects — the same class as contactPoint. Use this for named individuals.</td>
      </tr>
      <tr>
        <td><code>corporateCreator</code></td>
        <td>Optional</td>
        <td>array of Organization objects</td>
        <td>The corporate organization(s) responsible for creating the document. Uses Organization objects. Use this for institutional authorship. Example: <code>[{"name": "National Climate Data Center"}]</code></td>
      </tr>
      <tr>
        <td><code>bibliographicCitation</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>A plain-text bibliographic citation for the document.</td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Recommended</td>
        <td>string (ISO 8601)</td>
        <td>Publication date of the document.</td>
      </tr>
      <tr>
        <td><code>publisher</code></td>
        <td>Recommended</td>
        <td>array of Organization objects</td>
        <td>The organization(s) that published the document.</td>
      </tr>
      <tr>
        <td><code>identifier</code></td>
        <td>Recommended</td>
        <td>Identifier object</td>
        <td>A unique identifier for the document such as a DOI or ISBN.</td>
      </tr>
    </tbody>
  </table>

  Source: [Document.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Document.json)

  ---

  ### Quality and provenance

  #### QualityMeasurement

  A measurement of a resource against a specific quality metric. Referenced by `hasQualityMeasurement` on Dataset, Distribution, and DataService. New in v3.0. Replaces the boolean `dataQuality` field from v1.1.

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
        <td><code>isMeasurementOf</code></td>
        <td>Mandatory</td>
        <td>Metric object</td>
        <td>The quality metric being measured. See Metric below.</td>
      </tr>
      <tr>
        <td><code>value</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The measured value, expressed as a string. Example: <code>"98.5"</code>. The data type is declared in the Metric's <code>expectedDataType</code> field.</td>
      </tr>
      <tr>
        <td><code>unitMeasure</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Unit of measure for the value. Example: <code>"percent"</code></td>
      </tr>
    </tbody>
  </table>

  #### Metric

  A standard used to measure one aspect of data quality. Used within QualityMeasurement as the `isMeasurementOf` field.

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
        <td><code>expectedDataType</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The expected data type of the measured value. Example: <code>"xsd:decimal"</code>, <code>"xsd:boolean"</code></td>
      </tr>
      <tr>
        <td><code>inDimension</code></td>
        <td>Mandatory</td>
        <td>string (URI)</td>
        <td>URI of the quality dimension being measured. Example: <code>"https://agency.gov/quality/completeness"</code></td>
      </tr>
      <tr>
        <td><code>definition</code></td>
        <td>Recommended</td>
        <td>string</td>
        <td>A plain-language definition of the metric. Example: <code>"Percentage of non-null values in required fields."</code></td>
      </tr>
    </tbody>
  </table>

  Example of a complete quality measurement:

  <pre><code>{
    "@type": "QualityMeasurement",
    "isMeasurementOf": {
      "@type": "Metric",
      "expectedDataType": "xsd:decimal",
      "inDimension": "https://agency.gov/quality/completeness",
      "definition": "Percentage of non-null values in required fields."
    },
    "value": "98.5",
    "unitMeasure": "percent"
  }
  </code></pre>

  Source: [QualityMeasurement.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/QualityMeasurement.json) · [Metric.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Metric.json)

  #### Activity

  An activity related to creating, changing, or using a resource. Referenced by `wasGeneratedBy` and `wasUsedBy` on Dataset and DataService.

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
        <td><code>label</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>A human-readable label for the activity. Example: <code>"Data Collection"</code>, <code>"Quality Control Review"</code></td>
      </tr>
      <tr>
        <td><code>category</code></td>
        <td>Optional</td>
        <td>array of Concept objects</td>
        <td>Categories for the activity type.</td>
      </tr>
    </tbody>
  </table>

  Source: [Activity.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Activity.json)

  ---

  ### Relationships

  #### Attribution

  A responsibility that an agent has for a resource. Referenced by `qualifiedAttribution` on Dataset, Catalog, and DataService. Useful when you need to distinguish specific roles — data collector, quality reviewer, data steward — beyond what `creator` or `publisher` can express.

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
        <td><code>hadRole</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The role the agent plays. Example: <code>"Data Steward"</code>, <code>"Quality Reviewer"</code></td>
      </tr>
      <tr>
        <td><code>agent</code></td>
        <td>Mandatory</td>
        <td>Agent object</td>
        <td>The agent that has this role. Requires <code>name</code>.</td>
      </tr>
    </tbody>
  </table>

  Source: [Attribution.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Attribution.json)

  #### Relationship

  Additional information about how one resource is related to another, including the named role of that relationship. Referenced by `qualifiedRelation` on Dataset. Use this when `isReferencedBy` or `relation` are not specific enough about the nature of the relationship.

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
        <td><code>hadRole</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The nature of the relationship. Example: <code>"isInputTo"</code>, <code>"dataProvider"</code></td>
      </tr>
      <tr>
        <td><code>relation</code></td>
        <td>Mandatory</td>
        <td>string (IRI)</td>
        <td>The IRI of the related resource. Example: <code>"https://agency.gov/models/climate-prediction"</code></td>
      </tr>
    </tbody>
  </table>

  Source: [Relationship.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Relationship.json)

  #### CatalogRecord

  A record describing when and how a single resource was registered in a catalog. Referenced by `record` on Catalog. Useful for tracking catalog provenance — when a dataset was added, by whom, and under what schema.

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
        <td><code>modified</code></td>
        <td>Mandatory</td>
        <td>string (ISO 8601)</td>
        <td>The most recent date the catalog record was changed.</td>
      </tr>
      <tr>
        <td><code>primaryTopic</code></td>
        <td>Mandatory</td>
        <td>string (IRI)</td>
        <td>IRI linking to the Dataset, DataService, or Catalog described by this record. Example: <code>"https://agency.gov/datasets/climate-2024"</code></td>
      </tr>
      <tr>
        <td><code>status</code></td>
        <td>Recommended</td>
        <td>Concept object</td>
        <td>Editorial status of the record. Example: <code>{"prefLabel": "published"}</code></td>
      </tr>
      <tr>
        <td><code>conformsTo</code></td>
        <td>Recommended</td>
        <td>Standard object</td>
        <td>The application profile the catalog record's metadata conforms to.</td>
      </tr>
      <tr>
        <td><code>description</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>One or more plain-language descriptions of the catalog record. Note: unlike most other classes where <code>description</code> is a single string, CatalogRecord accepts an array of strings.
          <br><br>
          Example: <code>["This catalog record describes the registration of the Climate Data 2024 dataset.", "Added to catalog January 2025."]</code></td>
      </tr>
      <tr>
        <td><code>language</code></td>
        <td>Optional</td>
        <td>string or array of strings</td>
        <td>ISO 639-1 two-letter language code(s) for the catalog record metadata. Example: <code>"en"</code> or <code>["en", "es"]</code></td>
      </tr>
      <tr>
        <td><code>issued</code></td>
        <td>Optional</td>
        <td>array of ISO 8601 date strings</td>
        <td>Date(s) on which the record was included in the catalog. Note: this is an array, not a single date.</td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A name for the catalog record.</td>
      </tr>
      <tr>
        <td><code>source</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>The original metadata this record was derived from — a URL or description of the source.</td>
      </tr>
    </tbody>
  </table>

  Source: [CatalogRecord.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CatalogRecord.json)

  ---

  ### Access and use restrictions

  Three classes provide structured, machine-readable ways to express access and use restrictions on a Distribution. They are new in v3.0 and specific to the U.S. federal context. See the [Distribution fields](../dcat-us-3-distribution/) page for guidance on how to use them together.

  #### AccessRestriction

  Rules or indicators describing who can access a resource. Referenced by `accessRestriction` on Distribution. Uses NARA authority lists for controlled vocabulary values.

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
        <td><code>restrictionStatus</code></td>
        <td>Mandatory</td>
        <td>Concept object</td>
        <td>Whether or not there are access restrictions. Use the <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status">NARA Access Restriction Status list</a>. Example: <code>{"prefLabel": "Unrestricted"}</code> or <code>{"prefLabel": "Restricted - Fully"}</code></td>
      </tr>
      <tr>
        <td><code>specificRestriction</code></td>
        <td>Recommended</td>
        <td>Concept object</td>
        <td>The specific authority or policy defining the restriction. Use the <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction">NARA Specific Access Restriction list</a>. Example: <code>{"prefLabel": "FOIA Exemption 6"}</code></td>
      </tr>
      <tr>
        <td><code>restrictionNote</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A plain-language explanation of the restriction.</td>
      </tr>
    </tbody>
  </table>

  Source: [AccessRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/AccessRestriction.json)

  #### UseRestriction

  Rules or legal limits on how a resource may be used after access is granted. Referenced by `useRestriction` on Distribution. Structurally identical to AccessRestriction but applies to use rather than access.

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
        <td><code>restrictionStatus</code></td>
        <td>Mandatory</td>
        <td>Concept object</td>
        <td>Whether or not there are use restrictions. Use the <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status">NARA Use Restriction Status list</a>. Example: <code>{"prefLabel": "Unrestricted"}</code></td>
      </tr>
      <tr>
        <td><code>specificRestriction</code></td>
        <td>Recommended</td>
        <td>Concept object</td>
        <td>The specific use restriction authority or policy. Example: <code>{"prefLabel": "Copyright"}</code></td>
      </tr>
      <tr>
        <td><code>restrictionNote</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A plain-language explanation of the use restriction or terms of use.</td>
      </tr>
    </tbody>
  </table>

  Source: [UseRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/UseRestriction.json)

  #### CUIRestriction

  Controlled Unclassified Information (CUI) marking information for a distribution. Referenced by `cuiRestriction` on Distribution. Required for any distribution containing CUI per Executive Order 13556 and NARA guidelines. Distributions that do not contain CUI should set this field to `null`.

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
        <td><code>cuiBannerMarking</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The CUI banner marking string per the <a href="https://www.archives.gov/cui/registry/category-marking-list">NARA CUI Registry</a>. Example: <code>"CUI//SP-PRVCY"</code>, <code>"CUI//SP-CTI"</code></td>
      </tr>
      <tr>
        <td><code>designationIndicator</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>Identifies the agency that designated the information as CUI. Must include "Controlled by:" followed by agency name and contact where possible. Example: <code>"Controlled by: Example Federal Agency; POC: jane.smith@agency.gov"</code></td>
      </tr>
      <tr>
        <td><code>requiredIndicatorPerAuthority</code></td>
        <td>Optional</td>
        <td>array of strings</td>
        <td>Required indicators from the applicable authority. Example: <code>["Privacy Act of 1974", "Federal Records Act"]</code></td>
      </tr>
    </tbody>
  </table>

  Source: [CUIRestriction.json](https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CUIRestriction.json)

  ---

  ### Full class index

  <table class="usa-table">
    <thead>
      <tr>
        <th>Class</th>
        <th>Group</th>
        <th>Referenced from</th>
        <th>Source</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Agent</td>
        <td>Agents</td>
        <td><code>creator</code>, <code>contributor</code>, <code>wasAttributedTo</code> on Dataset; <code>publisher</code> on Catalog and DataService</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json">Agent.json</a></td>
      </tr>
      <tr>
        <td>Organization</td>
        <td>Agents</td>
        <td><code>publisher</code> on Dataset; <code>subOrganizationOf</code> on Organization</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Organization.json">Organization.json</a></td>
      </tr>
      <tr>
        <td>Kind</td>
        <td>Agents</td>
        <td><code>contactPoint</code> on Dataset, DataService, Catalog, DatasetSeries</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json">Kind.json</a></td>
      </tr>
      <tr>
        <td>Address</td>
        <td>Agents</td>
        <td><code>address</code> on Kind</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Address.json">Address.json</a></td>
      </tr>
      <tr>
        <td>Location</td>
        <td>Location and time</td>
        <td><code>spatial</code> on Dataset, DataService, DatasetSeries, Catalog</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json">Location.json</a></td>
      </tr>
      <tr>
        <td>PeriodOfTime</td>
        <td>Location and time</td>
        <td><code>temporal</code> on Dataset, DataService, DatasetSeries, Catalog</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json">PeriodOfTime.json</a></td>
      </tr>
      <tr>
        <td>Concept</td>
        <td>Controlled vocabularies</td>
        <td><code>theme</code>, <code>status</code>, <code>category</code>, <code>accrualPeriodicity</code>, restriction fields and others</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Concept.json">Concept.json</a></td>
      </tr>
      <tr>
        <td>ConceptScheme</td>
        <td>Controlled vocabularies</td>
        <td><code>themeTaxonomy</code> on Catalog; <code>inScheme</code> on Concept and Location</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ConceptScheme.json">ConceptScheme.json</a></td>
      </tr>
      <tr>
        <td>Document</td>
        <td>Docs and standards</td>
        <td><code>page</code> on Dataset and Distribution; <code>landingPage</code> on Dataset; <code>homepage</code> on Catalog</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Document.json">Document.json</a></td>
      </tr>
      <tr>
        <td>Standard</td>
        <td>Docs and standards</td>
        <td><code>conformsTo</code> on Dataset, Distribution, DataService, Catalog</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Standard.json">Standard.json</a></td>
      </tr>
      <tr>
        <td>Identifier</td>
        <td>Identifiers and integrity</td>
        <td><code>identifier</code>, <code>otherIdentifier</code> on Dataset, Distribution, DataService, Location</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Identifier.json">Identifier.json</a></td>
      </tr>
      <tr>
        <td>Checksum</td>
        <td>Identifiers and integrity</td>
        <td><code>checksum</code> on Distribution</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Checksum.json">Checksum.json</a></td>
      </tr>
      <tr>
        <td>QualityMeasurement</td>
        <td>Quality and provenance</td>
        <td><code>hasQualityMeasurement</code> on Dataset, Distribution, DataService</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/QualityMeasurement.json">QualityMeasurement.json</a></td>
      </tr>
      <tr>
        <td>Metric</td>
        <td>Quality and provenance</td>
        <td><code>isMeasurementOf</code> on QualityMeasurement</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Metric.json">Metric.json</a></td>
      </tr>
      <tr>
        <td>Activity</td>
        <td>Quality and provenance</td>
        <td><code>wasGeneratedBy</code>, <code>wasUsedBy</code> on Dataset and DataService</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Activity.json">Activity.json</a></td>
      </tr>
      <tr>
        <td>Attribution</td>
        <td>Relationships</td>
        <td><code>qualifiedAttribution</code> on Dataset, Catalog, DataService</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Attribution.json">Attribution.json</a></td>
      </tr>
      <tr>
        <td>Relationship</td>
        <td>Relationships</td>
        <td><code>qualifiedRelation</code> on Dataset</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Relationship.json">Relationship.json</a></td>
      </tr>
      <tr>
        <td>CatalogRecord</td>
        <td>Relationships</td>
        <td><code>record</code> on Catalog</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CatalogRecord.json">CatalogRecord.json</a></td>
      </tr>
      <tr>
        <td>AccessRestriction</td>
        <td>Restrictions</td>
        <td><code>accessRestriction</code> on Distribution</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/AccessRestriction.json">AccessRestriction.json</a></td>
      </tr>
      <tr>
        <td>UseRestriction</td>
        <td>Restrictions</td>
        <td><code>useRestriction</code> on Distribution</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/UseRestriction.json">UseRestriction.json</a></td>
      </tr>
      <tr>
        <td>CUIRestriction</td>
        <td>Restrictions</td>
        <td><code>cuiRestriction</code> on Distribution</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CUIRestriction.json">CUIRestriction.json</a></td>
      </tr>
    </tbody>
  </table>

  Source: [jsonschema/definitions/](https://github.com/GSA/dcat-us/tree/main/jsonschema/definitions)

  
  ## DCAT US Pages
  
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
