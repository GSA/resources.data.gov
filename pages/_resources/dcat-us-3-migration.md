---
resource_name: DCAT-US Migration from 1.1 to 3
slug: dcat-us-3-migration
description: Quick guide for upgrading from 1.1 to 3
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

  <p>This guide covers the minimum changes needed to make your existing v1.1 <code>data.json</code> file valid against the v3.0 schema. Work through the steps in order — steps 1 through 4 address breaking changes that will cause validation failures. Steps 5 through 10 are structural changes that are not breaking but are required for correct v3.0 implementation. The additional improvements at the end will not block validation but are strongly recommended.</p>

  <p>After completing all steps, run your updated <code>data.json</code> against the v3.0 validation script: <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py">jsonschema/test_json_schema.py</a></p>
  
  ---
  
  <h2>Breaking changes — fix these first</h2>
  
  <p>These are changes where your existing v1.1 values will fail v3.0 schema validation.</p>
  
  <h3>Step 1 — Fix <code>modified</code></h3>
  
  <p>If you use repeating intervals like <code>R/P1D</code> or <code>R/P1Y</code> in <code>modified</code>, replace them with the actual date the data last changed. Move your update frequency to <code>accrualPeriodicity</code> using a plain-language code.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"modified": "R/P1Y"</code></td>
        <td><code>"modified": "2024-10-01"</code></td>
      </tr>
      <tr>
        <td><code>"modified": "R/P1D"</code></td>
        <td><code>"modified": "2024-10-15"</code></td>
      </tr>
    </tbody>
  </table>
  
  <p>Add <code>accrualPeriodicity</code> to express update frequency:</p>
  
  <pre><code>"accrualPeriodicity": "annually"
  </code></pre>
  
  <p>Accepted values include: <code>daily</code>, <code>weekly</code>, <code>monthly</code>, <code>quarterly</code>, <code>annually</code>, <code>irregular</code>. ISO 8601 repeating duration format (e.g., <code>R/P1Y</code>) is also still accepted.</p>
  
  ---
  
  <h3>Step 2 — Fix <code>temporal</code></h3>
  
  <p>Replace the v1.1 ISO 8601 interval string with an array of PeriodOfTime objects. At least one of <code>startDate</code> or <code>endDate</code> is required per object. Open-ended periods are valid — omit <code>endDate</code> for ongoing datasets.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"temporal": "2000-01-15T00:00:00Z/2010-01-15T00:00:00Z"</code></td>
        <td>
  <pre><code>"temporal": [
    {
      "@type": "PeriodOfTime",
      "startDate": "2000-01-15",
      "endDate": "2010-01-15"
    }
  ]</code></pre>
        </td>
      </tr>
      <tr>
        <td><code>"temporal": "2020-01-01T00:00:00Z/P1Y"</code></td>
        <td>
  <pre><code>"temporal": [
    {
      "@type": "PeriodOfTime",
      "startDate": "2020-01-01"
    }
  ]</code></pre>
        </td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h3>Step 3 — Fix <code>spatial</code></h3>
  
  <p>Replace the v1.1 plain string or ad-hoc GeoJSON with an array of Location objects. No fields are required on Location — include <code>prefLabel</code> at minimum, and add <code>bbox</code> for geospatial precision.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"spatial": "United States"</code></td>
        <td>
  <pre><code>"spatial": [
    {
      "@type": "Location",
      "prefLabel": "United States"
    }
  ]</code></pre>
        </td>
      </tr>
      <tr>
        <td><code>"spatial": "-125,24,-66,50"</code></td>
        <td>
  <pre><code>"spatial": [
    {
      "@type": "Location",
      "prefLabel": "Continental United States",
      "bbox": "POLYGON((-125 24, -66 24, -66 50, -125 50, -125 24))"
    }
  ]</code></pre>
        </td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h3>Step 4 — Fix <code>language</code></h3>
  
  <p>Replace RFC 5646 language tags with two-letter ISO 639-1 codes. The v3.0 schema enforces a maximum length of two characters — values like <code>en-US</code> will fail validation.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"language": ["en-US"]</code></td>
        <td><code>"language": ["en"]</code></td>
      </tr>
      <tr>
        <td><code>"language": ["es-MX"]</code></td>
        <td><code>"language": ["es"]</code></td>
      </tr>
      <tr>
        <td><code>"language": ["fr-CA"]</code></td>
        <td><code>"language": ["fr"]</code></td>
      </tr>
    </tbody>
  </table>
  
  <p>This applies to <code>language</code> on Dataset, Distribution, DataService, and Catalog.</p>
  
  ---
  
  <h2>Structural changes — required for correct v3.0 implementation</h2>
  
  <p>These changes will not cause immediate validation failures but are required to correctly implement v3.0.</p>
  
  <h3>Step 5 — Update <code>conformsTo</code> on the Catalog</h3>
  
  <p>Change the plain string URI to a Standard object pointing to DCAT-US v3.0.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"conformsTo": "https://project-open-data.cio.gov/v1.1/schema"</code></td>
        <td>
  <pre><code>"conformsTo": {
    "@type": "Standard",
    "title": "DCAT-US 3.0",
    "identifier": "https://resources.data.gov/dcat-us/3.0.0"
  }</code></pre>
        </td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h3>Step 6 — Remove <code>@context</code> and <code>describedBy</code> from the Catalog</h3>
  
  <p>Both fields have been removed at the catalog level in v3.0. Delete these lines from your catalog object.</p>
  
  <pre><code>// Remove these lines from your catalog:
  "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
  "describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json"
  </code></pre>
  
  ---
  
  <h3>Step 7 — Verify <code>identifier</code> on every Dataset</h3>
  
  <p><code>identifier</code> is now Mandatory in v3.0 — it is in the schema's required array. If your datasets already have identifiers this is a check rather than a change. If any Dataset records are missing an identifier, add a persistent URI.</p>
  
  <pre><code>"identifier": "https://www.agency.gov/data/dataset-name"
  </code></pre>
  
  ---
  
  <h3>Step 8 — Replace <code>accessLevel</code> with <code>accessRights</code></h3>
  
  <p><code>accessLevel</code> is not in the v3.0 schema. Add <code>accessRights</code> as a free-text string alongside your existing <code>accessLevel</code> field. Until updated OMB guidance is issued, keep <code>accessLevel</code> in your records — the v3.0 schema will not reject it, and existing OMB policy still requires it.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1 <code>accessLevel</code></th>
        <th>v3.0 <code>accessRights</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"public"</code></td>
        <td><code>"public"</code></td>
      </tr>
      <tr>
        <td><code>"restricted public"</code></td>
        <td><code>"Access restricted to authorized users. Contact data@agency.gov to request access."</code></td>
      </tr>
      <tr>
        <td><code>"non-public"</code></td>
        <td><code>"Not available for public release. Contains personally identifiable information."</code></td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h3>Step 9 — Move <code>license</code> from Dataset to Distribution</h3>
  
  <p><code>license</code> is not defined at the Dataset level in v3.0 — it belongs on each Distribution object. The v3.0 schema will not reject records that still have it at the Dataset level, but it will not be recognized there. Add it to each Distribution and remove it from the Dataset.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1 (on Dataset)</th>
        <th>v3.0 (on each Distribution)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
  <pre><code>{
    "@type": "Dataset",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "distribution": [...]
  }</code></pre>
        </td>
        <td>
  <pre><code>{
    "@type": "Dataset",
    "distribution": [
      {
        "title": "Dataset CSV",
        "downloadURL": "https://agency.gov/data/dataset.csv",
        "mediaType": "text/csv",
        "license": "https://creativecommons.org/publicdomain/zero/1.0/"
      }
    ]
  }</code></pre>
        </td>
      </tr>
    </tbody>
  </table>
  
  <p>If all your distributions share the same license you will need to add it to each one individually.</p>
  
  ---
  
  <h3>Step 10 — Update <code>publisher</code>, <code>contactPoint</code>, and <code>subOrganizationOf</code></h3>
  
  <p>Three changes to these common fields:</p>
  
  <table>
    <thead>
      <tr>
        <th>Field</th>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>publisher @type</code></td>
        <td><code>"org:Organization"</code></td>
        <td><code>"Organization"</code></td>
      </tr>
      <tr>
        <td><code>contactPoint @type</code></td>
        <td><code>"vcard:Contact"</code></td>
        <td><code>"Kind"</code></td>
      </tr>
      <tr>
        <td><code>publisher.subOrganizationOf</code></td>
        <td>Single Organization object</td>
        <td>Array of Organization objects — wrap in square brackets</td>
      </tr>
    </tbody>
  </table>
  
  <p>Example showing all three changes together:</p>
  
  <pre><code>// v1.1
  "publisher": {
    "@type": "org:Organization",
    "name": "Census Bureau",
    "subOrganizationOf": {
      "@type": "org:Organization",
      "name": "U.S. Department of Commerce"
    }
  },
  "contactPoint": {
    "@type": "vcard:Contact",
    "fn": "Jane Smith",
    "hasEmail": "mailto:jane@agency.gov"
  }
  </code></pre>
  
  <pre><code>// v3.0
  "publisher": {
    "@type": "Organization",
    "name": "Census Bureau",
    "subOrganizationOf": [
      {
        "@type": "Organization",
        "name": "U.S. Department of Commerce"
      }
    ]
  },
  "contactPoint": {
    "@type": "Kind",
    "fn": "Jane Smith",
    "hasEmail": "mailto:jane@agency.gov"
  }
  </code></pre>
  
  ---
  
  <h2>You are done with the minimum migration</h2>
  
  <p>After completing steps 1 through 10 your records should validate against the v3.0 schema. Run your updated <code>data.json</code> against the validation script at <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py">jsonschema/test_json_schema.py</a> to confirm.</p>
  
  <p>Note: the generated reference documentation in <code>jsonschema/docs/</code> currently shows all fields as Optional regardless of their actual requirement level. This is a known issue. Trust the requirement levels in the JSON schema files and on the reference pages, not the generated docs.</p>
  
  ---
  
  <h2>Additional improvements</h2>
  
  <p>These changes are not required for validation but improve the quality and interoperability of your metadata. Work through them when you are ready.</p>
  
  <table>
    <thead>
      <tr>
        <th>Improvement</th>
        <th>What to do</th>
        <th>More detail</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Upgrade <code>landingPage</code></td>
        <td>Change from a plain URL string to a Document object with <code>title</code> and <code>accessURL</code>.</td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Upgrade <code>theme</code></td>
        <td>Change from plain strings to Concept objects with <code>prefLabel</code>. Example: <code>[{"prefLabel": "Climate Science"}]</code></td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Upgrade <code>describedBy</code></td>
        <td>Change from a plain URL to a Distribution object with <code>title</code>, <code>downloadURL</code> or <code>accessURL</code>, and <code>mediaType</code>. Remove <code>describedByType</code> — it is now expressed as <code>mediaType</code> within the Distribution object.</td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Upgrade <code>conformsTo</code> on Dataset and Distribution</td>
        <td>Change from a plain URI string to an array of Standard objects. Example: <code>[{"@type": "Standard", "title": "ISO 19115", "identifier": "https://www.iso.org/standard/53798.html"}]</code></td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Convert <code>rights</code> to an array</td>
        <td>Change from a single string (max 255 characters in v1.1) to an array of strings with no character limit. Example: <code>["This data is in the public domain."]</code></td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Add <code>accessRestriction</code>, <code>useRestriction</code>, <code>cuiRestriction</code> to Distributions</td>
        <td>Replace free-text access restriction descriptions in <code>rights</code> with structured restriction objects. These are Recommended fields in v3.0 for federal agencies.</td>
        <td><a href="../dcat-us-3-distribution/">Distribution fields</a></td>
      </tr>
      <tr>
        <td>Register APIs as DataService objects</td>
        <td>Move API documentation from Distribution records to DataService objects at the Catalog level. Each DataService requires <code>title</code>, <code>endpointURL</code>, <code>contactPoint</code>, and <code>publisher</code>.</td>
        <td><a href="../dcat-us-3-data-service/">DataService fields</a></td>
      </tr>
      <tr>
        <td>Add <code>purpose</code>, <code>scopeNote</code>, <code>liabilityStatement</code></td>
        <td>New optional fields that improve discoverability and help users assess fitness for use. Plain-language strings.</td>
        <td><a href="../dcat-us-3-dataset/">Dataset fields</a></td>
      </tr>
      <tr>
        <td>Group recurring datasets into DatasetSeries</td>
        <td>Create DatasetSeries records for annual surveys, recurring publications, and versioned reference data. Link each Dataset to its series using the <code>inSeries</code> field.</td>
        <td><a href="../dcat-us-3-dataset-series/">DatasetSeries fields</a></td>
      </tr>
    </tbody>
  </table>

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
