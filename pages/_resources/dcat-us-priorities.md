---
resource_name: Improving Discoverability, Usability and Governance of Priority Agency Data
slug: dcat-us-priorities
description: To improve the discoverability, usability, and governance of these 
  priority agency data assets agencies shall apply the documenting techniques 
  illustrated below. 
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - DCAT
  - Project Open Data Metadata Schema
  - data standards
  - data inventory 
guidance_tags: ""
format: ""
details: >-
  
  {: .margin-top-0}

  The requirements outlined here are meant to be used in conjunction with the documentation for the full DCAT US 3 schema. 

  <p>This page documents metadata priorities for federal agency data assets. It describes specific keyword and field requirements tied to federal policy directives, and shows how those requirements map to DCAT-US v3.0 fields.</p>
  
  <p><strong>Note on DCAT-US version:</strong> The original version of this page was written for DCAT-US v1.1. Field guidance has been updated to reflect DCAT-US v3.0. Where fields have changed between versions, both the original v1.1 field and the v3.0 equivalent are noted.</p>
  
  ---
  
  <h2>COVID-19 Response Related Data Assets</h2>
  
  <h3>Policy background</h3>
  
  <p>In April 2020, OMB Memorandum <a href="https://www.whitehouse.gov/wp-content/uploads/2020/04/M-20-16.pdf">M-20-16</a>, <em>Federal Agency Operational Alignment to Slow the Spread of Coronavirus COVID-19</em>, directed agencies to prioritize COVID-19 response data as their highest priority data asset. This memo was issued during the public health emergency and required agencies participating in the Federal Data Strategy 2020 Action Plan to elevate COVID-19 datasets in their data inventories.</p>
  
  <p><strong>Current status:</strong> M-20-16 was a pandemic-era directive. The federal public health emergency for COVID-19 ended in May 2023. M-20-16 is no longer actively enforced as a current data prioritization requirement. Agencies that documented COVID-19 datasets under M-20-16 do not need to remove those keywords -- the keywords remain useful for discoverability -- but there is no active policy mandate requiring new COVID-19 prioritization at this time.</p>
  
  <p>Agencies with COVID-19 datasets in their inventories are encouraged to keep their existing keyword documentation in place and ensure those datasets remain accessible and well-described for ongoing research use.</p>
  
  <h3>Field guidance</h3>
  
  <table>
    <thead>
      <tr>
        <th>Field</th>
        <th>Requirement (under M-20-16)</th>
        <th>v1.1 guidance</th>
        <th>v3.0 guidance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>keyword</code></td>
        <td>Required under M-20-16</td>
        <td>Include <code>COVID-19</code> and <code>coronavirus</code> as keywords. Additional keywords encouraged.</td>
        <td>No change — <code>keyword</code> works the same way in v3.0. Continue including <code>COVID-19</code> and <code>coronavirus</code> for discoverability.
          <br><br>
          Example:
          <br>
          <code>["COVID-19", "coronavirus", "viral-testing", "CARES-Act", "SARS-CoV-2"]</code>
        </td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h2>Data Assets to Fuel AI Research and Development</h2>
  
  <h3>Policy background</h3>
  
  <p>In February 2019, President Trump signed <a href="https://www.federalregister.gov/documents/2019/02/14/2019-02544/maintaining-american-leadership-in-artificial-intelligence">Executive Order 13859</a>, <em>Maintaining American Leadership in Artificial Intelligence</em>. This order directed agencies to improve data inventory documentation to enable discovery and usability of federal data assets for AI research, and to prioritize improvements to access and quality of data based on the AI research community's feedback.</p>
  
  <p>Under EO 13859, agencies were directed to tag datasets suitable for AI research with standardized keywords to make them discoverable by the research community.</p>
  
  <p><strong>Current status:</strong> EO 13859 remains on the books and was never formally rescinded. However the AI policy landscape has evolved significantly since 2019. President Biden issued EO 14110 (<em>Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence</em>) in October 2023, which substantially expanded federal AI governance requirements. President Trump revoked EO 14110 on January 20, 2025, and issued <a href="https://www.federalregister.gov/documents/2025/01/31/2025-02172/removing-barriers-to-american-leadership-in-artificial-intelligence">EO 14179</a> (<em>Removing Barriers to American Leadership in Artificial Intelligence</em>) on January 23, 2025, which is the current governing AI executive order. EO 14179 directs agencies to sustain and enhance American AI dominance and continues to support making federal data available for AI research.</p>
  
  <p>The <code>usg-artificial-intelligence</code> keyword convention established under EO 13859 remains a useful and recognized practice for tagging AI-relevant datasets. Agencies should continue applying it. Consult current OMB guidance for any updated keyword requirements under EO 14179.</p>
  
  <h3>Field guidance</h3>
  
  <table>
    <thead>
      <tr>
        <th>Field</th>
        <th>Requirement (under EO 13859)</th>
        <th>v1.1 guidance</th>
        <th>v3.0 guidance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>keyword</code></td>
        <td>Required</td>
        <td>Include <code>usg-artificial-intelligence</code>. For training data also include <code>usg-ai-training-data</code>. Additional descriptive keywords encouraged.</td>
        <td>No change — <code>keyword</code> works the same way in v3.0. Continue using the established keyword conventions.
          <br><br>
          Example:
          <br>
          <code>["usg-artificial-intelligence", "AI", "machine-learning", "natural-language-processing", "usg-ai-training-data"]</code>
        </td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td>Required</td>
        <td>Include a contact who can discuss restrictions or controls on the dataset with AI researchers.</td>
        <td>In v3.0 <code>contactPoint</code> uses a Kind object instead of the v1.1 vCard format. The requirement to include a knowledgeable contact remains.
          <br><br>
          Minimum example:
          <br>
          <pre><code>{
    "@type": "Kind",
    "fn": "AI Data Contact",
    "hasEmail": "mailto:ai-data@agency.gov"
  }</code></pre>
          <br>
          Fuller example including a domain expert:
          <br>
          <pre><code>{
    "@type": "Kind",
    "fn": "Dr. Jane Smith",
    "hasEmail": "mailto:jane.smith@agency.gov",
    "title": "Lead Data Scientist",
    "organization-name": "Office of Data Science"
  }</code></pre>
        </td>
      </tr>
      <tr>
        <td><code>dataQuality</code> (v1.1) → <code>hasQualityMeasurement</code> (v3.0)</td>
        <td>Required under EO 13859 for AI datasets</td>
        <td>Set <code>dataQuality</code> to <code>true</code> to indicate the dataset meets the agency's Information Quality Guidelines.</td>
        <td><code>dataQuality</code> is not in the v3.0 schema. Use <code>hasQualityMeasurement</code> to express quality information in a structured, machine-readable way.
          <br><br>
          Example:
          <br>
          <pre><code>{
    "@type": "QualityMeasurement",
    "isMeasurementOf": {
      "@type": "Metric",
      "expectedDataType": "xsd:boolean",
      "inDimension": "https://agency.gov/quality/iq-guidelines",
      "definition": "Meets agency Information Quality Guidelines"
    },
    "value": "true"
  }</code></pre>
          <br>
          See <a href="../dcat-us-3-supporting-classes/#qualitymeasurement">QualityMeasurement</a> for full field details.
        </td>
      </tr>
      <tr>
        <td><code>references</code> (v1.1) → <code>isReferencedBy</code> / <code>page</code> (v3.0)</td>
        <td>Required under EO 13859 if references or model documentation exist</td>
        <td>Include URLs to publications, model documentation, or other references using the <code>references</code> field.</td>
        <td><code>references</code> is not in the v3.0 schema. Use one of two replacements depending on the nature of the link:
          <br><br>
          Use <code>isReferencedBy</code> for publications or papers that cite or use the dataset:
          <br>
          <code>"isReferencedBy": ["https://doi.org/10.xxxx/example"]</code>
          <br><br>
          Use <code>page</code> for documentation, model cards, or technical references about the dataset:
          <br>
          <pre><code>"page": [
    {
      "@type": "Document",
      "title": "Model Documentation",
      "accessURL": "https://github.com/GSA/AI-Assistant-Pilot",
      "description": "Technical documentation for the AI model trained on this dataset."
    }
  ]</code></pre>
        </td>
      </tr>
    </tbody>
  </table>
  
  ---
  
  <h2>Summary: field changes for priority datasets</h2>
  
  <p>The table below summarizes how the v1.1 fields used in priority dataset documentation map to v3.0.</p>
  
  <table>
    <thead>
      <tr>
        <th>v1.1 Field</th>
        <th>v3.0 Equivalent</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>keyword</code></td>
        <td><code>keyword</code></td>
        <td>No change. Same field, same format.</td>
      </tr>
      <tr>
        <td><code>contactPoint</code></td>
        <td><code>contactPoint</code></td>
        <td>Same field. Format updated — use a Kind object with <code>fn</code> and <code>hasEmail</code>. Can now be an array for multiple contacts.</td>
      </tr>
      <tr>
        <td><code>dataQuality</code> (boolean)</td>
        <td><code>hasQualityMeasurement</code> (array of QualityMeasurement objects)</td>
        <td>Field replaced. Use a structured QualityMeasurement object instead of a boolean value.</td>
      </tr>
      <tr>
        <td><code>references</code> (array of URLs)</td>
        <td><code>isReferencedBy</code> (citations) or <code>page</code> (documentation)</td>
        <td>Field replaced by two more specific fields. Use <code>isReferencedBy</code> for things that cite the dataset, <code>page</code> for documentation about the dataset.</td>
      </tr>
    </tbody>
  </table>




  <h2>DCAT US Pages</h2>
  

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
