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

  <h2>Quickest path from DCAT-US v1.1 to v3.0</h2>

  <p>This guide covers the minimum changes needed to make your existing v1.1 <code>data.json</code> file valid against the v3.0 schema. Work through the steps in order — the first four address breaking changes that will cause validation failures. The remaining steps are improvements that will not block validation but are strongly recommended.</p>
  
  ---
  
  <h3>Step 1 — Fix <code>modified</code> (breaking)</h3>
  
  <p>If you use repeating intervals like <code>R/P1D</code> or <code>R/P1Y</code> in <code>modified</code>, replace them with the actual date the data last changed.</p>
  
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
  
  <p>Move your update frequency to <code>accrualPeriodicity</code> using a plain-language code:</p>
  
  <pre><code>"accrualPeriodicity": "annually"
  </code></pre>
  
  ---
  
  <h3>Step 2 — Fix <code>temporal</code> (breaking)</h3>
  
  <p>Replace the v1.1 ISO 8601 interval string with a PeriodOfTime object array.</p>
  
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
    </tbody>
  </table>
  
  <p>Open-ended periods are valid — omit <code>endDate</code> for ongoing datasets.</p>
  
  ---
  
  <h3>Step 3 — Fix <code>spatial</code> (breaking)</h3>
  
  <p>Replace the v1.1 plain string with a Location object array.</p>
  
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
    </tbody>
  </table>
  
  ---
  
  <h3>Step 4 — Fix <code>language</code> (breaking)</h3>
  
  <p>Replace RFC 5646 tags with two-letter ISO 639-1 codes.</p>
  
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
    </tbody>
  </table>
  
  ---
  
  <h3>Step 5 — Update <code>conformsTo</code> on the Catalog</h3>
  
  <p>Change the plain string URI to a Standard object.</p>
  
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
  
  <p>Both fields have been removed at the catalog level in v3.0. Simply delete these lines from your catalog object.</p>
  
  <pre><code>// Remove these lines from your catalog:
  "@context": "https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld",
  "describedBy": "https://project-open-data.cio.gov/v1.1/schema/catalog.json"
  </code></pre>
  
  ---
  
  <h3>Step 7 — Add <code>identifier</code> to Dataset records (now Mandatory)</h3>
  
  <p><code>identifier</code> is now in the v3.0 required array. If your datasets already have identifiers this is just a check. If any are missing, add a persistent URI.</p>
  
  <pre><code>"identifier": "https://www.agency.gov/data/dataset-name"
  </code></pre>
  
  ---
  
  <h3>Step 8 — Replace <code>accessLevel</code> with <code>accessRights</code></h3>
  
  <p><code>accessLevel</code> is not in the v3.0 schema. Replace it with <code>accessRights</code> as a free-text string. Until updated OMB guidance is issued, keep <code>accessLevel</code> in your records alongside <code>accessRights</code> — the v3.0 schema will not reject it.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1</th>
        <th>v3.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>"accessLevel": "public"</code></td>
        <td><code>"accessRights": "public"</code></td>
      </tr>
      <tr>
        <td><code>"accessLevel": "restricted public"</code></td>
        <td><code>"accessRights": "Access restricted to authorized users. Contact data@agency.gov to request access."</code></td>
      </tr>
      <tr>
        <td><code>"accessLevel": "non-public"</code></td>
        <td><code>"accessRights": "Not available for public release. Contains personally identifiable information."</code></td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h3>Step 9 — Move <code>license</code> from Dataset to Distribution</h3>
  
  <p>In v3.0 <code>license</code> belongs at the Distribution level. Add it to each Distribution object and remove it from the Dataset object.</p>
  
  <pre><code>"distribution": [
    {
      "title": "Dataset CSV",
      "downloadURL": "https://agency.gov/data/dataset.csv",
      "mediaType": "text/csv",
      "license": "https://creativecommons.org/publicdomain/zero/1.0/"
    }
  ]
  </code></pre>
  
  ---
  
  <h3>Step 10 — Update <code>publisher</code> and <code>contactPoint</code> type values</h3>
  
  <p>The v1.1 <code>@type</code> values for these objects have changed in v3.0.</p>
  
  <table>
    <thead>
      <tr>
        <th>Field</th>
        <th>v1.1 @type</th>
        <th>v3.0 @type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>publisher</code></td>
        <td><code>org:Organization</code></td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td><code>vcard:Contact</code></td>
        <td><code>Kind</code></td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h3>That's it for the minimum migration</h3>
  
  <p>After completing steps 1 through 10 your records should validate against the v3.0 schema. Run your updated <code>data.json</code> against the validation script at <a href="https://github.com/GSA/dcat-us/blob/main/jsonschema/test_json_schema.py">jsonschema/test_json_schema.py</a> to confirm.</p>
  
  <p>Once your records are valid, consider these additional improvements:</p>
  
  <ul>
    <li>Upgrade <code>landingPage</code> from a plain URL to a Document object</li>
    <li>Upgrade <code>theme</code> from plain strings to Concept objects</li>
    <li>Upgrade <code>describedBy</code> from a plain URL to a Distribution object</li>
    <li>Upgrade <code>conformsTo</code> on Dataset and Distribution from a plain URI to an array of Standard objects</li>
    <li>Convert <code>rights</code> from a single string to an array of strings</li>
    <li>Convert <code>publisher.subOrganizationOf</code> from a single object to an array</li>
    <li>Add <code>accessRestriction</code>, <code>useRestriction</code>, and <code>cuiRestriction</code> to Distribution records</li>
    <li>Register your APIs as DataService objects in the Catalog</li>
  </ul>
  
  <p>See the full <a href="../dcat-us-3/">DCAT-US v3.0 reference</a> for field-level detail on all of these.</p>

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
