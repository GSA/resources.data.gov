---
resource_name: DCAT-US Schema v3.0 — Supporting classes
slug: dcat-us-3-supporting-classes
description: >-
  Reference for the DCAT-US v3.0 supporting classes. These classes are
  referenced from Dataset, Distribution, Catalog, DataService, and
  DatasetSeries.
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

  ---

  ### Overview

  Supporting classes are referenced from Dataset, Distribution, Catalog, DataService, and DatasetSeries. Most agencies will encounter them indirectly — through a field that points to one of these structures. The table at the bottom of this page lists all supporting classes with links to their source files.

  ---

  ### Agents and organizations

  #### Agent

  An entity responsible for a resource — a person, organization, or automated system. Referenced by <code>publisher</code>, <code>creator</code>, <code>contributor</code>, and <code>rightsHolder</code> on Dataset and DataService.

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json -->

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
        <td>The name of the agent.</td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Should be <code>org:Organization</code> for organizations or <code>foaf:Person</code> for individuals.</td>
      </tr>
      <tr>
        <td><code>subOrganizationOf</code></td>
        <td>Optional</td>
        <td>object</td>
        <td>A parent organization. Can be nested to express hierarchy (bureau within agency within U.S. Government).</td>
      </tr>
      <tr>
        <td><code>mbox</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>An email address for the agent.</td>
      </tr>
      <tr>
        <td><code>identifier</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A unique identifier for the agent, such as a URI.</td>
      </tr>
    </tbody>
  </table>

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json">Agent.json</a> · <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Agent.md">docs/Agent.md</a>

  ---

  #### Kind

  Contact information modeled on vCard. Referenced by <code>contactPoint</code> on Dataset, DataService, Catalog, and DatasetSeries.

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json -->

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
        <td>The full name of the contact person.</td>
      </tr>
      <tr>
        <td><code>hasEmail</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>Email address, formatted as <code>mailto:name@agency.gov</code>.</td>
      </tr>
      <tr>
        <td><code>@type</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>Should be <code>vcard:Contact</code>.</td>
      </tr>
    </tbody>
  </table>

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json">Kind.json</a> · <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Kind.md">docs/Kind.md</a>

  ---

  ### Location and time

  #### Location

  A geographic location. Referenced by <code>spatial</code> on Dataset, DataService, and DatasetSeries.

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json -->

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
        <td><code>geometry</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A GeoJSON or WKT geometry string describing the location.</td>
      </tr>
      <tr>
        <td><code>bbox</code></td>
        <td>Optional</td>
        <td>array</td>
        <td>A bounding box as <code>[min longitude, min latitude, max longitude, max latitude]</code>.</td>
      </tr>
      <tr>
        <td><code>centroid</code></td>
        <td>Optional</td>
        <td>string</td>
        <td>A point geometry representing the centroid of the location.</td>
      </tr>
    </tbody>
  </table>

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json">Location.json</a> · <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Location.md">docs/Location.md</a>

  ---

  #### PeriodOfTime

  A temporal interval defined by start and end dates. Referenced by <code>temporal</code> on Dataset, DataService, and DatasetSeries.

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json -->

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
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>The start date of the period.</td>
      </tr>
      <tr>
        <td><code>endDate</code></td>
        <td>Optional</td>
        <td>string (ISO 8601)</td>
        <td>The end date of the period.</td>
      </tr>
    </tbody>
  </table>

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json">PeriodOfTime.json</a> · <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/PeriodOfTime.md">docs/PeriodOfTime.md</a>

  ---

  ### Identifiers and integrity

  #### Checksum

  A checksum for verifying data integrity of a Distribution. New in v3.0.

  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Checksum.json -->

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
        <td><code>checksumValue</code></td>
        <td>Mandatory</td>
        <td>string</td>
        <td>The checksum value as a hex string.</td>
      </tr>
      <tr>
        <td><code>algorithm</code></td>
        <td>Mandatory</td>
        <td>object</td>
        <td>The algorithm used to generate the checksum (e.g., SHA-256, MD5).</td>
      </tr>
    </tbody>
  </table>

  Source: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Checksum.json">Checksum.json</a> · <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/docs/Checksum.md">docs/Checksum.md</a>

  ---

  ### Full class index

  <!-- SOURCE: https://github.com/GSA/dcat-us/tree/main/jsonschema/definitions -->

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
        <td><code>publisher</code>, <code>creator</code>, <code>contributor</code></td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Agent.json">Agent.json</a></td>
      </tr>
      <tr>
        <td>Organization</td>
        <td>Agents</td>
        <td><code>publisher</code>, <code>subOrganizationOf</code></td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Organization.json">Organization.json</a></td>
      </tr>
      <tr>
        <td>Kind</td>
        <td>Agents</td>
        <td><code>contactPoint</code></td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Kind.json">Kind.json</a></td>
      </tr>
      <tr>
        <td>Address</td>
        <td>Agents</td>
        <td><code>address</code> on Agent</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Address.json">Address.json</a></td>
      </tr>
      <tr>
        <td>Location</td>
        <td>Location and time</td>
        <td><code>spatial</code></td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Location.json">Location.json</a></td>
      </tr>
      <tr>
        <td>PeriodOfTime</td>
        <td>Location and time</td>
        <td><code>temporal</code></td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/PeriodOfTime.json">PeriodOfTime.json</a></td>
      </tr>
      <tr>
        <td>Concept</td>
        <td>Controlled vocabularies</td>
        <td><code>status</code>, <code>theme</code>, <code>representationTechnique</code></td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Concept.json">Concept.json</a></td>
      </tr>
      <tr>
        <td>ConceptScheme</td>
        <td>Controlled vocabularies</td>
        <td><code>themeTaxonomy</code> on Catalog</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ConceptScheme.json">ConceptScheme.json</a></td>
      </tr>
      <tr>
        <td>Document</td>
        <td>Docs and standards</td>
        <td><code>page</code> on Dataset and Distribution</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Document.json">Document.json</a></td>
      </tr>
      <tr>
        <td>Standard</td>
        <td>Docs and standards</td>
        <td><code>conformsTo</code></td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Standard.json">Standard.json</a></td>
      </tr>
      <tr>
        <td>Identifier</td>
        <td>Identifiers and integrity</td>
        <td><code>otherIdentifier</code> on Dataset</td>
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
        <td><code>hasQualityMeasurement</code> on Dataset</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/QualityMeasurement.json">QualityMeasurement.json</a></td>
      </tr>
      <tr>
        <td>Metric</td>
        <td>Quality and provenance</td>
        <td>Used with QualityMeasurement</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Metric.json">Metric.json</a></td>
      </tr>
      <tr>
        <td>Activity</td>
        <td>Quality and provenance</td>
        <td><code>wasGeneratedBy</code> on Dataset</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/Activity.json">Activity.json</a></td>
      </tr>
      <tr>
        <td>Attribution</td>
        <td>Relationships</td>
        <td><code>qualifiedAttribution</code> on Dataset</td>
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
        <td><code>accessRights</code> and related fields</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/AccessRestriction.json">AccessRestriction.json</a></td>
      </tr>
      <tr>
        <td>CUIRestriction</td>
        <td>Restrictions</td>
        <td>CUI-designated datasets</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/CUIRestriction.json">CUIRestriction.json</a></td>
      </tr>
      <tr>
        <td>UseRestriction</td>
        <td>Restrictions</td>
        <td>Licensing and terms of use</td>
        <td><a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/UseRestriction.json">UseRestriction.json</a></td>
      </tr>
    </tbody>
  </table>

  ---

  Source: <a href="https://github.com/GSA/dcat-us/tree/main/jsonschema/definitions">jsonschema/definitions/</a> · Generated reference: <a href="https://github.com/GSA/dcat-us/tree/main/jsonschema/docs">jsonschema/docs/</a>

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
