---
resource_name: DCAT-US 3 / M-25-05 Crosswalk
slug: dcat-us-3-crosswalk
description: A metadata crosswalk between the statutory metadata requirements of OMB
  Memorandum M-25-05 and the DCAT-US v3.0 schema.
source: data.gov
category: Data standards
tags:
  - open data
  - data sharing
  - data inventory
guidance_tags: ""
format: ""
details: >-

  <p>In accordance with OMB Memorandum M-25-05, <em>Phase 2 Implementation of the Foundations for Evidence-Based Policymaking Act of 2018: Open Government Data Access and Management Guidance</em>, Section 4.a.ii, this is a metadata crosswalk between the statutory metadata requirements and the DCAT-US v3.0 schema.</p>

  <p>The crosswalk is intended to assist federal agencies in understanding how each metadata element required by OMB Memorandum M-25-05 can be represented using the classes and properties defined within the DCAT-US v3.0 schema. For each statutory metadata requirement, the crosswalk identifies the corresponding DCAT-US v3.0 property or properties and, where appropriate, provides implementation considerations, recommended practices, and explanatory notes to support consistent application across agencies.</p>

  <p>The crosswalk should be used as a technical reference when developing or updating agency data inventories, mapping existing metadata to the DCAT-US v3.0 schema, and preparing metadata for submission to the Federal Data Catalog, Data.gov. It is intended to promote consistent implementation, improve interoperability across federal agencies, and support standardized metadata practices while recognizing that agencies may need to implement additional metadata or business rules to satisfy mission-specific, legal, security, privacy, records management, or operational requirements.</p>

  <p>The crosswalk is provided as implementation guidance and does not create new statutory or policy requirements. Where any inconsistency exists between this guidance and applicable law, regulation, or binding OMB policy, the applicable law or policy governs.</p>

  <p>This crosswalk is also available as an <a href="../../assets/documents/dcat-us3-crosswalk.xlsx">Excel file</a>, which can be sorted and filtered.</p>

  <p>Agencies may share feedback regarding the crosswalk by emailing <a href="mailto:datagovhelp@gsa.gov">DataGovHelp@gsa.gov</a> or opening a new issue on the <a href="https://github.com/GSA/dcat-us/issues">DCAT-US GitHub</a>.</p>

  <h2 id="requirement-a">A. A description of the data asset</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>description</code></p>
  <p>Narrative abstract describing the content and purpose.</p>
  <h2 id="requirement-b">B. The names and definitions of all variables in the data asset</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>describedBy</code></p>
  <p>For public and restricted assets: Point to a machine-readable feature catalog. It can be a link, file, or webpage with technical documentation and/or points of contact.</p>
  <p>For nonpublic assets: use null and provide an explanation in the access/use/CUI restrictions.</p>
  <h2 id="requirement-c">C. The name or title of the data asset</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>title</code></p>
  <p>The formal human-readable name of the dataset.</p>
  <h2 id="requirement-d">D. (Open Data Indication) An indication of whether the agency has determined that:</h2>
  <h4>a. The data asset is an open Government data asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset<br>Distribution &middot; <strong>Property:</strong> <code>accessRights with<br>rights</code></p>
  <p>accessRights: public</p>
  <p>rights: This data asset is an open Government data asset.</p>
  <h4>b. The data asset is not an open Government data asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset<br>Distribution &middot; <strong>Property:</strong> <code>Dataset=&gt;accessRights with rights and<br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</code></p>
  <p>accessRights: non-public</p>
  <p>accessRestriction &gt; restrictionStatus: Restricted - Fully restrictionNote: This asset is not an open Government data asset.</p>
  <h4>c. The agency is unable to determine whether the data asset is an open Government data asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset<br>Distribution &middot; <strong>Property:</strong> <code>Dataset=&gt;accessRights with rights and<br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</code></p>
  <p>accessRights: non-public</p>
  <p>accessRestriction &gt; restrictionStatus: Restricted - Possibly restrictionNote: The agency is unable to determine if the data asset is an open Government data asset.</p>
  <h4>d. Has not yet made any of those determinations</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset<br>Distribution &middot; <strong>Property:</strong> <code>Dataset=&gt;accessRights with rights and<br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</code></p>
  <p>accessRights: non-public</p>
  <p>accessRestriction &gt; restrictionStatus: Undetermined. restrictionNote: The agency has not yet determined if the data asset is an open Government data asset.</p>
  <h2 id="requirement-e">E. (FOIA Indication) An indication of whether the agency has determined that:</h2>
  <h4>a. The entire data asset is exempt from disclosure under FOIA</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset<br>Distribution &middot; <strong>Property:</strong> <code>Dataset=&gt;accessRights with rights and<br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</code></p>
  <p>accessRights: non-public</p>
  <p>rights: This data asset is exempt from disclosure under FOIA.</p>
  <p>accessRestriction &gt; restrictionStatus: Restricted - Fully specificRestriction: cite the FOIA exemption.</p>
  <h4>b. Part of the data asset is exempt from disclosure under FOIA</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset<br>Distribution &middot; <strong>Property:</strong> <code>Dataset=&gt;accessRights with rights and<br>Dataset &gt;accessRestriction or<br>Distribution &gt; accessRestriction</code></p>
  <p>accessRights: restricted public;</p>
  <p>rights: "Part of this data asset is exempt from disclosure under FOIA" then explain and include why partially restricted (e.g. Partially protected under FOIA exemption).</p>
  <p>accessRestriction &gt; restrictionStatus: Restricted - Partly specificRestriction: cite the FOIA exemption. restrictionNote: document information about the redacted portion of the data asset.</p>
  <h4>c. The data asset is not exempt from disclosure under FOIA</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <p>accessRights: public rights: This data asset is not exempt from disclosure under FOIA.</p>
  <h4>d. The agency is unable to determine whether the data asset is exempt from disclosure under FOIA</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <p>accessRights: non-public</p>
  <p>rights: The agency unable to determine if data asset is exempt from disclosure under FOIA.</p>
  <h4>e. Has not yet made any of those determinations</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <p>accessRights: non-public</p>
  <p>rights: The agency has not yet made FOIA disclosure determinations for data asset.</p>
  <h2 id="requirement-f">F. (Federal Data Catalog) An indication of whether the agency has determined that:</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <h4>a. The dataset is a public data asset eligible for disclosure in the Federal Data Catalog</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <p>accessRights: public</p>
  <p>rights: This dataset is eligible for disclosure in the Federal Data Catalog.</p>
  <h4>b. The dataset is not a public data asset eligible for disclosure in the Federal Data Catalog</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <p>accessRights: non-public</p>
  <p>rights: This dataset is not eligible for disclosure in the Federal Data Catalog.</p>
  <h4>c. The agency cannot determine whether the public data asset is a public data asset eligible for disclosure in the Federal Data Catalog</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <p>accessRights: non-public</p>
  <p>rights: The agency cannot determine eligibility for Federal Data Catalog.</p>
  <h4>d. Has not yet made any of those determinations</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>accessRights with rights</code></p>
  <p>accessRights: non-public</p>
  <p>rights: The agency has not yet determined eligibility for Federal Data Catalog.</p>
  <h2 id="requirement-g">G. (Open Format) An indication of whether the agency has determined that:</h2>
  <h4>a. The data asset is subject to open format</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Distribution &middot; <strong>Property:</strong> <code>mediaType with<br>format</code></p>
  <p>mediaType: Use an IANA-registered open media type (e.g., text/csv, application/json, application/xml). https://www.iana.org/assignments/media-types/media-types.xhtml</p>
  <p>format: provide human-readable description of the file format of the distribution that provides useful information that might not be apparent from mediaType</p>
  <h4>b. The data asset is not subject to open format requirements due to existing limitations or restrictions on government distribution of the asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Distribution &middot; <strong>Property:</strong> <code>rights</code></p>
  <p>rights: The data asset is not subject to open format requirements due to existing limitations or restrictions on government distribution of the asset.</p>
  <p>Provide link to the specific legal or technical limitation at the Dataset level that prevents conversion to an open format.</p>
  <h4>c. The agency cannot determine whether the data asset is subject to open format</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Distribution &middot; <strong>Property:</strong> <code>rights</code></p>
  <p>rights: "The agency cannot determine whether the data asset is subject to open format."</p>
  <h4>d. Has not yet made any of those determinations</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Distribution &middot; <strong>Property:</strong> <code>rights</code></p>
  <p>rights: "The agency has not yet determined if the data asset is subject to open format."</p>
  <h2 id="requirement-h">H. (Licensing) An indication of whether the agency has determined that:</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>license</code></p>
  <p>URL to the legal document (e.g., Creative Commons, U.S. Public Domain).</p>
  <h4>a. The data asset is subject to open license requirements.</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>license</code></p>
  <p>Use a URL to a known open license (e.g., https://creativecommons.org/publicdomain/zero/1.0/).</p>
  <h4>b. The data asset is not subject to open license requirements.</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>license</code></p>
  <p>URL to restrictive terms/license</p>
  <h4>c. The agency cannot determine whether the data asset is subject to open license requirements</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>license</code></p>
  <p>Link to agency licensing policy or note stating "The agency cannot determine whether data asset is subject to open license requirements."</p>
  <h4>d. Has not yet made any of those determinations</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>license</code></p>
  <p>Note saying "The agency has not yet determined if the data asset is subject to open license requirements."</p>
  <h2 id="requirement-i">I. A description of any determinations made about the data asset under Subchapter III of Chapter 35 of Title 44</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>rights</code></p>
  <p>Used to document security/privacy determinations under Title 44. A narrative description of security and privacy determinations. (Subject to change based on input from FCSM)</p>
  <h2 id="requirement-j">J. The date the data asset was added to the agency’s comprehensive data inventory</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>inventoried</code></p>
  <p>Captures the date the data asset was inventoried (not the date it was created/issued)</p>
  <h2 id="requirement-k">K. The date on which the data asset was most recently updated</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset + Distribution &middot; <strong>Property:</strong> <code>modified</code></p>
  <p>Timestamp for the most recent data content change, using string such as "2024-01-15". Should be defined in every Dataset and Distribution</p>
  <h2 id="requirement-l">L. A description of the method by which the public may access or request access to the data asset, which may include:</h2>
  <h4>The URL of the data asset; or</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Distribution &middot; <strong>Property:</strong> <code>accessURL or<br>downloadURL</code></p>
  <p>Use accessURL if link leads to landing page - point to request form if data isn't directly downloadable; Use downloadURL if link points directly to file (i.e. the .zip or .csv, etc. file)</p>
  <h4>The persistent identifier of the data asset; or</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>identifier</code></p>
  <p>A persistent, unique string (e.g., DOI, UUID, or internal ID).</p>
  <h4>A description of the process to request access to the data asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset<br>Distribution &middot; <strong>Property:</strong> <code>accessRights and<br>accessURL and<br>accessRestriction</code></p>
  <p>accessRights: include instructions for requesting access here or under accessRestriction accessURL: link to page where user can request access or accessRestriction: note any instructions for accessing the data asset or to describe who can access the resource.</p>
  <h2 id="requirement-m">M. (Restrictions) An indication of:</h2>
  <h4>Any restriction on the use of the data asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>useRestriction</code></p>
  <p>restrictionStatus: should be defined using this list - https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status specificRestriction: should be defined using this list - https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-use-restriction restrictionNote: An optional note related to the use restriction</p>
  <h4>Any restriction on the use of the data asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>cuiRestriction</code></p>
  <p>cuiBannerMarking:  should be defined using this list: https://www.archives.gov/cui/registry/category-marking-list designationIndicator: agency that made CUI designation requiredIndicatorPerAuthority: should explain what law, regulation, or government-wide policy led to the designation</p>
  <h4>Any restriction on the access to the data asset</h4>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset or<br>Distribution &middot; <strong>Property:</strong> <code>accessRestriction</code></p>
  <p>restrictionStatus:  should be defined using this list - https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status specificRestriction:  should be defined using this list - https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction restrictionNote: An optional note related to the access restriction</p>
  <h2 id="requirement-n">N. The location of the data asset</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>if accessRights = public:<br>accessURL or downloadURL<br>if accessRights = non-public or restricted:<br>spatial</code></p>
  <p>For public assets: provide URL for where the data asset can be accessed - Use accessURL if link leads to landing page - point to request form if data isn't directly downloadable; Use downloadURL if link points directly to file (i.e. the .zip or .csv, etc. file)</p>
  <p>For restricted/nonpublic assets: provide location indicator of where data is housed (city, state). (rdfs:label). If it's cloud-hosted, use city and state of agency HQ for simplicity (ex: Washington, DC), or the region where the data is hosted by the cloud service provider, such as US East - Northern Virginia ( for example, see AWS regions here). Use NULL and provide an explanation under altLabel or prefLabel as appropriate.</p>
  <h2 id="requirement-o">O. The name of each agency responsible for maintaining and updating the data asset</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>publisher<br>contributor</code></p>
  <p>publisher: Must be an org:Organization and should include the agency's name.</p>
  <p>contributor: list of agencies contributing to dataset</p>
  <h2 id="requirement-p">P. The name of each owner of the data asset</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>rightsHolder, contactPoint, or publisher</code></p>
  <p>The legal entity (person or organization) that owns the data asset.</p>
  <p>rightsholder=&gt;  meets the requirement if the agency does not own the data asset contactPoint or publisher=&gt; either one meets the requirement if the agency owns the data asset</p>
  <h2 id="requirement-q">Q. Other metadata elements as determined by OMB</h2>
  <p class="crosswalk-meta"><strong>Class:</strong> Dataset &middot; <strong>Property:</strong> <code>contactPoint<br>keyword</code></p>
  <p>Use tags or the subject property for additional topical categorization. Suggest to include:</p>
  <ul><li>contactPoint</li><li>keyword</li></ul>

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
