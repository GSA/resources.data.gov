---
resource_name: DCAT-US 3 / M-25-05 Crosswalk
slug: dcat-us-3-crosswalk
description: DCAT-US 3 / M-25-05 Crosswalk
source: data.gov
category: Skills development
tags:
  - open data
  - data sharing
  - data inventory
guidance_tags: ""
format: ""
details: >-

  <p>In accordance with OMB Memorandum M-25-05, *Phase 2 Implementation of the Foundations for Evidence-Based Policymaking Act of 2018: Open Government Data Access and Management Guidance*, Section 4.a.ii, this is a metadata crosswalk between the statutory metadata requirements and the DCAT-US v3.0 schema.</p>

  <p>The crosswalk is intended to assist federal agencies in understanding how each metadata element required by OMB Memorandum M-25-05 can be represented using the classes and properties defined within the DCAT-US v3.0 schema. For each statutory metadata requirement, the crosswalk identifies the corresponding DCAT-US v3.0 property or properties and, where appropriate, provides implementation considerations, recommended practices, and explanatory notes to support consistent application across agencies.</p>

  <p>The crosswalk should be used as a technical reference when developing or updating agency data inventories, mapping existing metadata to the DCAT-US v3.0 schema, and preparing metadata for submission to the Federal Data Catalog, Data.gov. It is intended to promote consistent implementation, improve interoperability across federal agencies, and support standardized metadata practices while recognizing that agencies may need to implement additional metadata or business rules to satisfy mission-specific, legal, security, privacy, records management, or operational requirements.</p>

  <p>The crosswalk is provided as implementation guidance and does not create new statutory or policy requirements. Where any inconsistency exists between this guidance and applicable law, regulation, or binding OMB policy, the applicable law or policy governs.</p>

  <p>Agencies may share feedback regarding the crosswalk by emailing <a href="mailto:datagovhelp@gsa.gov">DataGovHelp@gsa.gov</a> or opening a new issue on the <a href="https://github.com/GSA/dcat-us/issues">DCAT-US GitHub</a>.</p>
  
  <p>This crosswalk is also available as an <a href="/assets/documents/dcat-us3-crosswalk.xlsx">Excel file</a>.</p>

  <table class="usa-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>M-25-05 Requirement (Exact Wording)</th>
      <th>DCAT-US v3.0 Class</th>
      <th>DCAT-US v3.0 Property</th>
      <th>Implementation Notes/Value(s) to Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>A description of the data asset</td>
      <td>Dataset</td>
      <td>description</td>
      <td>Narrative abstract describing the content and purpose.</td>
    </tr>
    <tr>
      <td>B</td>
      <td>The names and definitions of all variables in the data asset</td>
      <td>Dataset</td>
      <td>describedBy</td>
      <td>
        <p>For public and restricted assets: Point to a machine-readable feature catalog. It can be a link, file, or webpage with technical documentation and/or points of contact.</p>
        <p>For nonpublic assets: use null and provide an explanation in the access/use/CUI restrictions.</p>
      </td>
    </tr>
    <tr>
      <td>C</td>
      <td>The name or title of the data asset</td>
      <td>Dataset</td>
      <td>title</td>
      <td>The formal human-readable name of the dataset.</td>
    </tr>
    <tbody><tr>
      <td rowspan="5">D</td>
      <th colspan="4">(Open Data Indication) An indication of whether the agency has determined that:</th>
    </tr>
    <tr>
      <td>a. The data asset is an open Government data asset</td>
      <td>Dataset<br>Distribution</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: public</p>
        <p>rights: This data asset is an open Government data asset.</p>
      </td>
    </tr>
    <tr>
      <td>b. The data asset is not an open Government data asset</td>
      <td>Dataset<br>Distribution</td>
      <td>Dataset=&gt;accessRights with rights and<br><br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</td>
      <td>
        <p>accessRights: non-public</p>
        <p>accessRestriction &gt; restrictionStatus: Restricted - Fully<br>restrictionNote: This asset is not an open Government data asset.</p>
      </td>
    </tr>
    <tr>
      <td>c. The agency is unable to determine whether the data asset is an open Government data asset</td>
      <td>Dataset<br>Distribution</td>
      <td>Dataset=&gt;accessRights with rights and<br><br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</td>
      <td>
        <p>accessRights: non-public</p>
        <p>accessRestriction &gt; restrictionStatus: Restricted - Possibly<br>restrictionNote: The agency is unable to determine if the data asset is an open Government data asset.</p>
      </td>
    </tr>
    <tr>
      <td>d. Has not yet made any of those determinations</td>
      <td>Dataset<br>Distribution</td>
      <td>Dataset=&gt;accessRights with rights and<br><br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</td>
      <td>
        <p>accessRights: non-public</p>
        <p>accessRestriction &gt; restrictionStatus: Undetermined.<br>restrictionNote: The agency has not yet determined if the data asset is an open Government data asset.</p>
      </td>
    </tr></tbody>
    <tbody><tr>
      <td rowspan="6">E</td>
      <th colspan="4">(FOIA Indication) An indication of whether the agency has determined that:</th>
    </tr>
    <tr>
      <td>a. The entire data asset is exempt from disclosure under FOIA</td>
      <td>Dataset<br>Distribution</td>
      <td>Dataset=&gt;accessRights with rights and<br><br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</td>
      <td>
        <p>accessRights: non-public</p>
        <p>rights: This data asset is exempt from disclosure under FOIA.</p>
        <p>accessRestriction &gt; restrictionStatus: Restricted - Fully<br>specificRestriction: cite the FOIA exemption.</p>
      </td>
    </tr>
    <tr>
      <td>b. Part of the data asset is exempt from disclosure under FOIA</td>
      <td>Dataset<br>Distribution</td>
      <td>Dataset=&gt;accessRights with rights and<br><br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</td>
      <td>
        <p>accessRights: restricted public;</p>
        <p>rights: "Part of this data asset is exempt from disclosure under FOIA" then explain and include why partially restricted (e.g. Partially protected under FOIA exemption).</p>
        <p>accessRestriction &gt; restrictionStatus: Restricted - Partly<br>specificRestriction: cite the FOIA exemption.<br>restrictionNote: document information about the redacted portion of the data asset.</p>
      </td>
    </tr>
    <tr>
      <td>c. The data asset is not exempt from disclosure under FOIA</td>
      <td>Dataset</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: public</p>
        <p>rights: This data asset is not exempt from disclosure under FOIA.</p>
      </td>
    </tr>
    <tr>
      <td>d. The agency is unable to determine whether the data asset is exempt from disclosure under FOIA</td>
      <td>Dataset</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: non-public</p>
        <p>rights: The agency unable to determine if data asset is exempt from disclosure under FOIA.</p>
      </td>
    </tr>
    <tr>
      <td>e. Has not yet made any of those determinations</td>
      <td>Dataset</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: non-public</p>
        <p>rights: The agency has not yet made FOIA disclosure determinations for data asset.</p>
      </td>
    </tr></tbody>
    <tbody><tr>
      <td rowspan="5">F</td>
      <th colspan="4">(Federal Data Catalog) An indication of whether the agency has determined that:</th>
    </tr>
    <tr>
      <td>a. The dataset is a public data asset eligible for disclosure in the Federal Data Catalog</td>
      <td>Dataset</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: public</p>
        <p>rights: This dataset is eligible for disclosure in the Federal Data Catalog.</p>
      </td>
    </tr>
    <tr>
      <td>b. The dataset is not a public data asset eligible for disclosure in the Federal Data Catalog</td>
      <td>Dataset</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: non-public</p>
        <p>rights: This dataset is not eligible for disclosure in the Federal Data Catalog.</p>
      </td>
    </tr>
    <tr>
      <td>c. The agency cannot determine whether the public data asset is a public data asset eligible for disclosure in the Federal Data Catalog</td>
      <td>Dataset</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: non-public</p>
        <p>rights: The agency cannot determine eligibility for Federal Data Catalog.</p>
      </td>
    </tr>
    <tr>
      <td>d. Has not yet made any of those determinations</td>
      <td>Dataset</td>
      <td>accessRights with rights</td>
      <td>
        <p>accessRights: non-public</p>
        <p>rights: The agency has not yet determined eligibility for Federal Data Catalog.</p>
      </td>
    </tr></tbody>
    <tbody><tr>
      <td rowspan="5">G</td>
      <th colspan="4">(Open Format) An indication of whether the agency has determined that:</th>
    </tr>
    <tr>
      <td>a. The data asset is subject to open format</td>
      <td>Distribution</td>
      <td>mediaType with format</td>
      <td>
        <p>mediaType: Use an IANA-registered open media type (e.g., text/csv, application/json, application/xml). <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">https://www.iana.org/assignments/media-types/media-types.xhtml</a></p>
        <p>format: provide human-readable description of the file format of the distribution that provides useful information that might not be apparent from mediaType</p>
      </td>
    </tr>
    <tr>
      <td>b. The data asset is not subject to open format requirements due to existing limitations or restrictions on government distribution of the asset</td>
      <td>Distribution</td>
      <td>rights</td>
      <td>
        <p>rights: The data asset is not subject to open format requirements due to existing limitations or restrictions on government distribution of the asset.</p>
        <p>Provide link to the specific legal or technical limitation at the Dataset level that prevents conversion to an open format.</p>
      </td>
    </tr>
    <tr>
      <td>c. The agency cannot determine whether the data asset is subject to open format</td>
      <td>Distribution</td>
      <td>rights</td>
      <td>rights: "The agency cannot determine whether the data asset is subject to open format."</td>
    </tr>
    <tr>
      <td>d. Has not yet made any of those determinations</td>
      <td>Distribution</td>
      <td>rights</td>
      <td>rights: "The agency has not yet determined if the data asset is subject to open format."</td>
    </tr></tbody>
    <tbody><tr>
      <td rowspan="5">H</td>
      <th>(Licensing) An indication of whether the agency has determined that:</th>
      <td>Dataset or Distribution</td>
      <td>license</td>
      <td>URL to the legal document (e.g., Creative Commons, U.S. Public Domain).</td>
    </tr>
    <tr>
      <td>a. The data asset is subject to open license requirements.</td>
      <td>Dataset or Distribution</td>
      <td>license</td>
      <td>Use a URL to a known open license (e.g., <a href="https://creativecommons.org/publicdomain/zero/1.0/">https://creativecommons.org/publicdomain/zero/1.0/</a>).</td>
    </tr>
    <tr>
      <td>b. The data asset is not subject to open license requirements.</td>
      <td>Dataset or Distribution</td>
      <td>license</td>
      <td>URL to restrictive terms/license</td>
    </tr>
    <tr>
      <td>c. The agency cannot determine whether the data asset is subject to open license requirements</td>
      <td>Dataset or Distribution</td>
      <td>license</td>
      <td>Link to agency licensing policy or note stating "The agency cannot determine whether data asset is subject to open license requirements."</td>
    </tr>
    <tr>
      <td>d. Has not yet made any of those determinations</td>
      <td>Dataset or Distribution</td>
      <td>license</td>
      <td>Note saying "The agency has not yet determined if the data asset is subject to open license requirements."</td>
    </tr></tbody>
    <tbody><tr>
      <td>I</td>
      <td>A description of any determinations made about the data asset under Subchapter III of Chapter 35 of Title 44</td>
      <td>Dataset</td>
      <td>rights</td>
      <td>Used to document security/privacy determinations under Title 44. A narrative description of security and privacy determinations. (Subject to change based on input from FCSM)</td>
    </tr>
    <tr>
      <td>J</td>
      <td>The date the data asset was added to the agency's comprehensive data inventory</td>
      <td>Dataset</td>
      <td>inventoried</td>
      <td>Captures the date the data asset was inventoried (not the date it was created/issued)</td>
    </tr>
    <tr>
      <td>K</td>
      <td>The date on which the data asset was most recently updated</td>
      <td>Dataset + Distribution</td>
      <td>modified</td>
      <td>Timestamp for the most recent data content change, using string such as "2024-01-15". Should be defined in every Dataset and Distribution</td>
    </tr></tbody>
    <tbody><tr>
      <td rowspan="4">L</td>
      <th colspan="4">A description of the method by which the public may access or request access to the data asset, which may include:</th>
    </tr>
    <tr>
      <td>The URL of the data asset; or</td>
      <td>Distribution</td>
      <td>accessURL or downloadURL</td>
      <td>
        <p>Use accessURL if link leads to landing page - point to request form if data isn't directly downloadable;</p>
        <p>Use downloadURL if link points directly to file (i.e. the .zip or .csv, etc. file)</p>
      </td>
    </tr>
    <tr>
      <td>The persistent identifier of the data asset; or</td>
      <td>Dataset</td>
      <td>identifier</td>
      <td>A persistent, unique string (e.g., DOI, UUID, or internal ID).</td>
    </tr>
    <tr>
      <td>A description of the process to request access to the data asset</td>
      <td>Dataset<br>Distribution</td>
      <td>accessRights and<br>accessURL and<br>accessRestriction</td>
      <td>
        <p>accessRights: include instructions for requesting access here or under accessRestriction</p>
        <p>accessURL: link to page where user can request access or</p>
        <p>accessRestriction: note any instructions for accessing the data asset or to describe who can access the resource.</p>
      </td>
    </tr></tbody>
    <tbody><tr>
      <td rowspan="4">M</td>
      <th colspan="4">(Restrictions) An indication of:</th>
    </tr>
    <tr>
      <td>Any restriction on the use of the data asset</td>
      <td>Dataset or Distribution</td>
      <td>useRestriction</td>
      <td>
        <p>restrictionStatus: should be defined using this list - <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status">https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status</a></p>
        <p>specificRestriction: should be defined using this list - <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-use-restriction">https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-use-restriction</a></p>
        <p>restrictionNote: An optional note related to the use restriction</p>
      </td>
    </tr>
    <tr>
      <td>Any restriction on the use of the data asset</td>
      <td>Dataset or Distribution</td>
      <td>cuiRestriction</td>
      <td>
        <p>cuiBannerMarking: should be defined using this list: <a href="https://www.archives.gov/cui/registry/category-marking-list">https://www.archives.gov/cui/registry/category-marking-list</a></p>
        <p>designationIndicator: agency that made CUI designation</p>
        <p>requiredIndicatorPerAuthority: should explain what law, regulation, or government-wide policy led to the designation</p>
      </td>
    </tr>
    <tr>
      <td>Any restriction on the access to the data asset</td>
      <td>Dataset or Distribution</td>
      <td>accessRestriction</td>
      <td>
        <p>restrictionStatus: should be defined using this list - <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status">https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status</a></p>
        <p>specificRestriction: should be defined using this list - <a href="https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction">https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction</a></p>
        <p>restrictionNote: An optional note related to the access restriction</p>
      </td>
    </tr></tbody>
    <tbody><tr>
      <td>N</td>
      <td>The location of the data asset</td>
      <td>Dataset</td>
      <td>if accessRights = public:<br>accessURL or downloadURL<br><br>if accessRights = non-public or restricted:<br>spatial</td>
      <td>
        <p>For public assets: provide URL for where the data asset can be accessed - Use accessURL if link leads to landing page - point to request form if data isn't directly downloadable; Use downloadURL if link points directly to file (i.e. the .zip or .csv, etc. file)</p>
        <p>For restricted/nonpublic assets: provide location indicator of where data is housed (city, state). (rdfs:label). If it's cloud-hosted, use city and state of agency HQ for simplicity (ex: Washington, DC), or the region where the data is hosted by the cloud service provider, such as US East - Northern Virginia (for example, see AWS regions here). Use NULL and provide an explanation under altLabel or prefLabel as appropriate.</p>
      </td>
    </tr>
    <tr>
      <td>O</td>
      <td>The name of each agency responsible for maintaining and updating the data asset</td>
      <td>Dataset</td>
      <td>publisher<br>contributor</td>
      <td>
        <p>publisher: Must be an org:Organization and should include the agency's name.</p>
        <p>contributor: list of agencies contributing to dataset</p>
      </td>
    </tr>
    <tr>
      <td>P</td>
      <td>The name of each owner of the data asset</td>
      <td>Dataset</td>
      <td>rightsHolder, contactPoint, or publisher</td>
      <td>
        <p>The legal entity (person or organization) that owns the data asset.</p>
        <p>rightsholder=&gt; meets the requirement if the agency does not own the data asset</p>
        <p>contactPoint or publisher=&gt; either one meets the requirement if the agency owns the data asset</p>
      </td>
    </tr>
    <tr>
      <td>Q</td>
      <td>Other metadata elements as determined by OMB</td>
      <td>Dataset</td>
      <td>contactPoint<br>keyword</td>
      <td>
        <p>Use tags or the subject property for additional topical categorization. Suggest to include:</p>
        <ul>
          <li>contactPoint</li>
          <li>keyword</li>
        </ul>
      </td>
    </tr>
  </tbody>
  
examples: ""

link: ""

layout: resource

toc: true

publish: true
---
