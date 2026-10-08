---
resource_name: Implementation Guide
slug: dcat-us-3-implementation
description: >-
  Implementation Guide
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - DCAT
  - DCAT-US
  - data inventory
  - metadata standard
guidance_tags: ""
format: ""
details: |+
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ -->

  ---

  <p>A <a href="../../assets/documents/dcat-us-3-implementation-guide.pdf">PDF version</a> of this guide is also available.</p>

  **DCAT-US v3.0 Schema Implementation Guide**

  August 21, 2026

  ## Version History {#version-history}

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Version**</th><th scope="col" markdown="span">**Date**</th><th scope="col" markdown="span">**Scope**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">1.0</td>
  <td markdown="span">Aug 21, 2026</td>
  <td markdown="span">Final</td>
  </tr>
  <tr>
  <td markdown="span">1.1</td>
  <td markdown="span">Sept 9, 2026</td>
  <td markdown="span">Updated reference to ISO 19115-1 and administrative edits.</td>
  </tr>
  </tbody>
  </table>

  ## Executive Summary {#executive-summary}

  Title II of the **Foundations for Evidence-Based Policymaking Act of 2018**, also referred to as the **Open, Public, Electronic, and Necessary (OPEN) Government Data Act**, and **Office of Management and Budget (OMB) Memorandum M-25-05** mandate federal agencies develop and maintain comprehensive data inventories. To fulfill this requirement, agencies must submit standardized metadata of agency data assets to the **Federal Data Catalog (Data.gov)**. This submission must conform to the **DCAT-US v3.0**[^1] schema, which has the necessary capabilities to support submission of metadata that aligns with the M-25-05 metadata requirements.

  This DCAT Implementation Guide is provided as a best-practice resource to assist federal agencies in implementing the DCAT-US v3.0 schema, and applicable requirements of OMB Memorandum M-25-05 related to data inventory metadata and submission to Data.gov. The guide is intended to support consistency, interoperability, and effective implementation across agencies. Other aspects of M-25-05, such as open data and public engagement plans, are not addressed in this Guide.

  This guide was developed by an interagency tiger team consisting of representatives from the Federal Chief Data Officers Council’s Customer Experience Working Group, GSA’s [data.gov](http://data.gov) team, and various agency representatives. It is not a legally binding document and does not create, modify, nor supersede any statute, regulation, OMB policy, agency requirement, or other authoritative directive. Agencies remain responsible for determining how best to meet their legal, policy, operational, security, privacy, records management, and mission requirements. To the extent there is any inconsistency between this guide and applicable law, regulation, or binding policy, the law, regulation, or binding policy controls.

  This guide reflects the recommendations that reached sufficient consensus and were feasible to incorporate during the current development cycle. Several additional recommendations proposed by the tiger team were not included in this version due to considerations such as implementation timing, the need for additional policy or technical clarification, or current system and platform constraints. To ensure these recommendations remain available for future consideration, the tiger team consolidated all outstanding recommendations and formally elevated them to OMB and the Federal Chief Data Officers Council (CDOC) for review and potential incorporation into future updates of this guide.

  To support implementation, this guide presents a structured, five-step approach agencies can use to execute their data management activities. Some steps may be conducted concurrently, and agencies may adjust the order of steps to better align with their organizational structures, governance processes, and mission needs:

  ### Five-Step Implementation Approach {#five-step-implementation-approach}

  - **Step 1: Identify All Data Assets**: Establish a baseline by locating all agency data assets consistent with the Evidence Act and OMB Memorandum M-25-05.
  - **Step 2: Inventory Data Assets:** Document data assets and associated metadata across agency programs, and organizational components utilizing prioritization approaches based on high-value assets, mission relevance, access level, publication status, stakeholder needs, or system readiness.
  - [**Step 3: Categorize Data Assets:**](#step-3-categorize-data-assets) Classify data assets as non-public, restricted, public, or open government data assets and document access determinations in accordance with the "open by default" policy.
  - [**Step 4: Catalog Data Assets and Submission to Data.gov:**](#step-4-catalog-data-assets-and-submission-to-datagov) Implement the DCAT-US v3.0 schema to submit required metadata to [Data.gov](http://data.gov). The guide provides implementation guidance for the **Catalog**, **Dataset**, **Distribution**, **DataService**, and **DatasetSeries** classes. It includes a mapping of M-25-05 metadata requirements to DCAT-US v3.0 properties, recommended implementation practices, JSON examples, and guidance for agencies transitioning from DCAT-US v1.1.
  - [**Step 5: Update Data Inventory and Catalog**](#step-5-update-data-inventory-and-catalog): Maintain the inventory through an annual review cycle, with new data assets added within 90 days. This step includes management of data asset retirement, delisting, and metadata updates necessitated by schema changes or data asset status modifications.

  ### Role of Data Governance {#role-of-data-governance}

  Data governance is a continuous function that supports each step of this process. Chief Data Officers (CDOs), working in partnership with data governance bodies, data stewards, subject matter experts, and cross-functional stakeholders, are responsible for establishing governance policies, overseeing metadata quality, resolving data management issues, and promoting consistent implementation throughout the agency. Effective governance also enables agencies to balance transparency, privacy, security, records management, and mission requirements while maintaining accurate and authoritative data inventories.

  ### Acknowledgments {#acknowledgments}

  The Federal CDO Council acknowledges the contributions of OMB, the Federal Geographic Data Committee (FGDC), the Interagency Council on Statistical Policy (ICSP), the Federal Committee on Statistical Methodology (FCSM), the National Archives and Records Administration (NARA), the Federal Privacy Council, and data practitioners from across federal government in preparing this guide. The council appreciates the time and expertise contributed by participating agencies and interagency partners in support of effective implementation. Their expertise, review, and input helped ensure that the guide reflects the needs of the broader federal data community and supports consistent implementation across agencies.

  ## Background {#background}

  Through the passage of Title II of the Foundations for Evidence-Based Policymaking Act of 2018 (also known as the OPEN Government Data Act), and the release of [OMB M-25-05](https://bidenwhitehouse.archives.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf),[^2] each federal agency has been directed to “develop and maintain a comprehensive data inventory” and submit metadata for agency data assets to the public-facing Federal Data Catalog hosted on [Data.gov](http://data.gov)[^3] by September 30, 2026[^4] (M-25-05 Key Requirements and Actions are located in [Appendix A](#appendix-a-m-25-05-key-requirements-and-actions)). This centralization supports government-wide data visibility and fosters innovation and civic engagement by providing the public and private sectors with access to federal data assets.

  To fulfill these requirements "to the maximum extent practicable,"[^5] agencies are strongly encouraged to establish operationally feasible, phased implementation plans.[^6] While agencies may adopt different [implementation strategies](#step-2-inventory-data-assets) based on mission needs, available resources, data sensitivity, and publication readiness, one of the most important implementation considerations is ensuring that agency metadata conforms to the DCAT-US v3.0 schema.

  As part of M-25-05, OMB requires metadata submitted to [Data.gov](http://data.gov) to conform to the DCAT-US v3.0 schema, which was finalized and released in May 2026.[^7] Although the development of the DCAT-US v3.0 schema largely focused on accommodating public and open government data assets, it can also meet the new M-25-05 requirements to inventory and catalog restricted and non-public data assets.

  **DCAT-US v3.0 modernizes the federal metadata standard by aligning with** [**World Wide Web Consortium (W3C) Data Catalog Vocabulary (DCAT) - Version 3**](https://www.w3.org/TR/vocab-dcat-3/) **standard, improving support for current data discovery, sharing and reuse needs.** Since 2014, federal agencies have used DCAT-US v1.1[^8], a US-based profile of the W3C DCAT 1 Standard,[^9] to submit their metadata to [Data.gov](http://data.gov). As the DCAT-US v1.1 schema became increasingly insufficient for the evolving agency data ecosystems, OMB mandated use of the DCAT-US v3.0 schema[^10] to ensure datasets are more visible, accessible, and useful across the broader data ecosystem.[^11] DCAT-US v3.0 provides a more structured, interoperable, and flexible framework for describing data assets, which will enable improvements in linkage between related datasets, and enhanced representation of data series and live data services, such as APIs.[^12] A more detailed comparison of DCAT-US v1.1 and DCAT-US v3.0 is available at [resources.data.gov](https://resources.data.gov/resources/dcat-us3/#changes-from-v11).

  The DCAT-US v3.0 schema will continue to improve over time as agencies identify implementation challenges and new versions of the schema address them. Agencies should align their inventory with these schema updates as they are released.[^13]

  Adopting the DCAT-US v3.0 schema also aligns with the administration’s priorities related to artificial intelligence (AI).[^14] As agencies use the schema to make their metadata more descriptive, comprehensive, and understandable, their data assets will more easily convey context, structure, and lineage needed for AI models to correctly interpret and use the data.[^15]

  Agencies should be aware that successfully submitting a data catalog entry to [Data.gov](http://data.gov) that conforms to the DCAT-US v3.0 schema **does not, by itself,** guarantee compliance with the metadata requirements of M-25-05. While the schema’s openness and flexibility make it possible to meet these requirements, [Data.gov](http://data.gov) verifies only that catalog submissions include the DCAT-US v3.0 mandatory properties and that those properties are correctly formatted according to the schema.[^16] [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov) below provides detailed guidance on how to submit metadata to [Data.gov](http://data.gov) in a manner that is both M-25-05-compliant and DCAT-US v3.0-compliant.

  ### Implementation Approach {#implementation-approach}

  This guide outlines a five-step approach agencies can use to meet the core M-25-05 requirements for developing a comprehensive data inventory and submitting their metadata to [Data.gov](http://data.gov) using the DCAT-US v3.0 schema:

  1. **Identify** all data assets within the agency.
  2. **Inventory** all agency data assets.
  3. **Categorize** all data assets based on M-25-05 definitions.
  4. **Catalog** all data assets and submit catalog entries with the required metadata to [Data.gov](http://data.gov) using DCAT-US v3.0 schema.
  5. **Update** the data inventory and data catalog.

  This approach serves as a flexible framework agencies can use to execute their data management activities, particularly those related to M-25-05 and comprehensive data inventorying. Some steps can be executed concurrently, and agencies may adjust the order of steps to better align with their organizational processes. Figure 1 illustrates how this process can be iterative over time as agency data assets change and inventories and catalogs are updated annually, or more frequently as needed.[^17]

  **Figure 1: Five Steps for Comprehensive Data Inventorying and Cataloging**

  ![Five arrows in a row: 1 Identify all data assets, 2 Inventory all data assets, 3 Categorize all data assets, 4 Catalog and submit to Data.gov, 5 Update inventory and catalog. Curved arrows loop from step 5 back to steps 1 and 3.](../../assets/img/dcat-us-3-implementation/figure-01.png)

  ### Data Governance {#data-governance}

  Data Governance is not a distinct step, but a continuous function that must **permeate the entire data lifecycle**. Throughout the five-step process described above, effective governance is essential to successfully navigating the many complex data-related issues that arise, including determining appropriate access restrictions and prioritizing data assets for inventory and public release.

  Most agencies maintain a data governance body, though their organizational structures vary. Illustrative agency examples are shown in [Appendix B](#appendix-b-illustrative-examples-of-data-governance-structure). Typically, agencies operate a single, centralized board, while some also maintain smaller governance bodies aligned to individual offices or bureaus. At the department or agency level, this central body is chaired by the agency Chief Data Officer (CDO), and must include the statistical official and evaluation officer, as required by M-19-23.[^18] To provide comprehensive oversight that balances regulatory, functional, and operational needs, this central body should include the following key parties:

  1. **Data stewards**: Individuals knowledgeable about the data’s volume, structure, hosting, access procedures, and mission-specific usage.
  2. **Subject matter experts (SMEs)**: Individuals with specialized knowledge of how data is utilized in day-to-day operations, including program managers, functional specialists, or other leaders. Their involvement ensures that data governance practices are feasible and effectively support the agency’s mission.
  3. **Cross-functional stakeholders**: Agency-level officials with equities in data, (e.g., the Chief Information Officer (CIO), Chief Information Security Officer (CISO), the Senior Agency Official for Privacy (SAOP), and the records officer), who facilitate balancing regulatory and functional needs in data governance policy establishment.

  To operationalize this oversight, the data governance body should establish agencywide policies, procedures, and documentation practices for data stewards to implement within their respective offices, bureaus, or components. These policies and practices should help data stewards assess and document key information about agency data assets, such as:[^19]

  - The scope of data collected, created, maintained, or stored by the office, bureau, or component.
  - The statutes, regulations, policies, standards, and agreements that govern the use of data throughout its lifecycle, including creation, collection, use, processing, storage, maintenance, dissemination, disclosure, and disposition.[^20]
  - The methods used to collect, process, store, document, and manage the data.
  - The procedures for accessing the data, including whether those procedures are clearly documented and consistently applied.
  - The current and potential uses of the data, including whether the data may provide public value if released, and any issues that may arise if making the data public.
  - The process for determining whether the data asset may be categorized as a public data asset or open government data asset under M-25-05.
  - The legal, contractual, privacy, confidentiality, security, or other restrictions that may limit access, sharing, publication, or reuse.

  This continuous governance function provides the operational framework for effective data management throughout the data lifecycle, additionally enabling more streamlined M-25-05 implementation. The following sections outline the sequential five-step process for compliance, detailing the required actions for data asset identification, inventory, categorization, and the DCAT-US v3.0-compliant submission of metadata to [Data.gov](http://data.gov).

  ## Step 1: Identify All Data Assets {#step-1-identify-all-data-assets}

  To identify agency data assets, the CDO and agency-level data governance body should apply the definition of “data asset” established in M-25-05 and the Evidence Act. The Evidence Act defines **data** as “recorded information, regardless of form or the media on which the data is recorded.”[^21] M-25-05 defines a **data asset** as “a collection of data elements or \[datasets\][^22]” that are composed of structured[^23] or semi-structured[^24] data and may be grouped together logically, such as by similar characteristics or business functions.[^25] An example on how agencies can approach the process of defining data assets, is illustrated in Figure 2 below.

  **Figure 2: Defining Data Assets within an Agency**[^26]

  ![Flowchart for defining a data asset. Potential data asset identified. Composed of structured or semi-structured data? If no, not defined as data asset. If yes, logically grouped by similar characteristic, function, or purpose? If no, not defined as data asset. If yes, defined as data asset.](../../assets/img/dcat-us-3-implementation/figure-02.png)

  Building upon these definitions, the [*Federal Zero Trust Data Security Guide*](https://resources.data.gov/assets/documents/Zero-Trust-DataSecurityGuide_RevisedMay2025_CIO.govVersion.pdf) emphasizes that a data asset must “**\[serve\] a mission purpose and \[bring\] value to the agency**.”[^27] This purpose or value could involve serving a particular business community or answering a common set of questions. Agencies may add upon this definition to reflect their mission and operational needs; however, they should not adopt criteria that narrow or otherwise limit the scope of data assets identified under the M-25-05 definition. More specific examples of types of data assets are defined in [Appendix C](#appendix-c-examples-of-data-asset-types).

  Applying this data asset definition, in some agency contexts, can be challenging, including scenarios where:

  1. Data assets are aggregated, transformed or modified within a pipeline to create new data assets.
  2. Data assets are maintained by, funded from, or ingested from another organization.

  Within a data pipeline, many data versions or iterations may technically meet the definition of a data asset. However, **agencies can initially focus on inventorying and cataloging foundational data assets (i.e. data assets owned or collected by the agency), which serve as the building blocks for other data and outputs both within the agency and externally**.

  In cases where the agency and an outside organization share responsibility for a data asset, the Evidence Act[^28] requires agencies to inventory all data that they create, collect, control, or maintain, even if some of these functions are being handled outside of the agency. This would include, for example, data assets that are ingested from another agency, purchased from an outside organization, or submitted to another agency as part of a compliance requirement. The DCAT-US v3.0 schema has properties where agencies can specify the nuances of these relationships (see [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov) for additional guidance).

  ## Step 2: Inventory Data Assets {#step-2-inventory-data-assets}

  Although the terms **data inventory** and **data catalog** are often used interchangeably, they refer to distinct concepts and should not be treated as synonymous. A **data inventory** captures “more technical and granular metadata such as the definitions of specific data elements, their format, valid values, and their completeness.”[^29] A **data catalog**, however, functions as a user interface that interested parties can use to locate and learn basic information about a data asset, such as the owner, its contents, and access procedures.[^30] Data catalogs will be described in greater detail in [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov).

  Before an agency can develop a well-structured data catalog, it must first establish a comprehensive data inventory that identifies data assets across all agency components or operational units (e.g., administrative, technical, mission-specific) and captures the metadata necessary to effectively manage those assets. Identifying SMEs and data stewards across the agency and building strong relationships with them are key steps in accurately ascertaining which data assets exist and continuously updating the data inventory.

  Although the functional needs of an agency’s data inventory may extend beyond the requirements set forth in M-25-05, the OMB memo states that a truly **comprehensive data inventory should** adhere to these requirements as a minimum baseline:[^31]

  1. Be interoperable with the Federal Data Catalog hosted on [Data.gov](http://data.gov), including being in JSON format on both [Data.gov](http://data.gov) and the agency website at \[agency\].gov/data.json.
  2. Conform to the DCAT-US v3.0 standards for metadata.[^32]
  3. Be submitted to [Data.gov](http://data.gov) with applicable restrictions.[^33]
  4. Include data from all agency components or operating units, which they should regularly update for accuracy and quality.

  Agencies implementing M-25-05 may adopt a phased approach, beginning with critical, high-use, or statutorily mandated data assets and developing long-term plans to inventory remaining assets according to established priorities. The following are examples of prioritization strategies agencies can use for data inventorying:[^34]

  - **Security-based**: As recommended in the [Federal Zero Trust Data Security Guide](https://resources.data.gov/assets/documents/Zero-Trust-DataSecurityGuide_RevisedMay2025_CIO.govVersion.pdf), agencies may begin by inventorying data associated with high-value assets (HVAs)[^35] or systems with stringent security requirements.[^36],[^37]
  - **Mission-based**: Begin with mission-critical operating units and inventory the remaining units based on their level of importance to agency mission. For example, this could include identifying and prioritizing each operating unit’s data collections cleared by OMB under the Paperwork Reduction Act (PRA).[^38]
  - **Access level-based**: Begin with public-facing data, then move to internal data, including data from information technology and human resources systems. For sensitive internal data, such as personally identifiable information (PII), agencies are still required to publish the metadata and define access rights and restrictions, as described in Step 4.
  - **Stakeholder-based**: Common stakeholder groups frequently requesting data — such as Congress, OMB, auditing bodies, and the general public — provide an effective foundation for prioritization. See [Appendix D](#appendix-d-stakeholder-based-prioritization) for one agency’s approach to stakeholder-based prioritization.

  Once a comprehensive and prioritized inventory is established, the next essential step is to categorize these assets.

  ## Step 3: Categorize Data Assets {#step-3-categorize-data-assets}

  Agencies familiar with the DCAT-US v1.1 schema will recognize the previously-used classifications for data assets provided in the [accessLevel](https://resources.data.gov/resources/dcat-us/#accessLevel) property:[^39]

  - **Public**: Data assets that are or could be made accessible to the public.
  - **Restricted Public**: Data assets available under certain conditions or to designated audiences, such as researchers who obtain authorization through a waiver or application process.
  - **Non-public**: Data assets that cannot be made available to the public due to privacy, security, or other agency-determined constraints.

  OMB M-25-05 expands upon these definitions and provides updated guidance for populating inventory metadata for [Data.gov](http://data.gov). A key enhancement in M-25-05 is the distinction between **public data assets** and **open government data assets** (see Figure 3 below). Open government data assets represent a subset of public data assets that are available in an open format under an open license.

  A data asset’s categorization can be captured in the DCAT-US v3.0 schema using a combination of the newly created [accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRights) property and the rights property carried over from DCAT-US v1.1. Within accessRights, agencies can mark a data asset as Non-public, Restricted, or Public, and they can indicate whether the asset is an open government data asset using a plain-language explanation within the rights property (see [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov) for more details).

  **Figure 3: Categories of Data Assets in DCAT-US v1.1 and v3.0**[^40]

  ![Two boxes connected by an arrow. Left box, Agency Data Assets in DCAT-US v1.1: Public, Restricted Public, Non-public. Right box, Agency Data Assets in M-25-05 / DCAT-US v3.0: Public, which contains Open Government, then Restricted, then Non-public.](../../assets/img/dcat-us-3-implementation/figure-03.png)

  Additionally, agencies must populate metadata for **all data assets** irrespective of categorization. Metadata should include all information permitted for disclosure, including the rationale for the asset’s categorization, public release determinations, and open format status (detailed implementation procedures are outlined in [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov)).[^41]

  This approach aligns with the “**open by default**” policy communicated in M-25-05, which establishes the following requirements:[^42]

  1. **Open formats**: Agencies must maintain data assets in an **open format,** unless exemption applies. **An open format** is defined as “a file format for storing digital data where that format is platform independent and machine readable, and is maintained (A) at no cost to the public; and (B) with no restrictions on copying, publishing, distributing, transmitting, citing, or adapting such format.”[^43] For assets currently in non-open formats, agencies must conduct a balanced cost-benefit analysis, considering constraints such as intellectual property (IP), privacy, confidentiality, and legal risks to determine feasibility of format conversion.
  2. **Open Government Data Assets**: Public data assets should be maintained as **open government data assets** —stored in open formats and accessible under an open license. An **open license** is “a legal guarantee that a data asset is made available (A) at no cost to the public; and (B) with no restrictions on copying, publishing, distributing, transmitting, citing, or adapting such asset.”[^44] Examples of open licenses include Creative Commons[^45] and the Public Domain Dedication and License[^46] (PDDL v1.0).

  DCAT-US v3.0 provides a robust framework for agencies to achieve baseline compliance with M-25-05. The following sections delineate the four primary data asset categorizations, outlining applicable criteria established by M-25-05 and providing guidance for metadata population.

  ### Non-Public Data Assets {#non-public-data-assets}

  A data asset is categorized as **non-public** if:

  1. No portion or version of the asset can be released; or
  2. The public, or any subset thereof, is not legally permitted to access the asset.

  When documenting non-public data assets in the agency’s comprehensive data inventory, agencies should cite the specific statutory or regulatory authority justifying the non-public designation. While certain metadata fields required by M-25-05 may not be disclosable for these assets, agencies are expected to provide as much information as legally permissible, as outlined in the table below.

  **Table 1: Metadata for Non-Public Data Assets**

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Required Metadata (M-25-05)**</th><th scope="col" markdown="span">**Alternative Information to Provide**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">Description</td>
  <td markdown="span">If possible, provide a concise narrative abstract describing the data asset, which may include the mission or operational need it supports, and the questions, decisions, or business processes it informs.</td>
  </tr>
  <tr>
  <td markdown="span">Link to Variable Definitions</td>
  <td markdown="span">Link to variable names, or types of variables (e.g., boolean, string, numerical).</td>
  </tr>
  <tr>
  <td markdown="span">Location</td>
  <td markdown="span">Provide agency’s headquarters (city/state),[^47] the hosting region, (if cloud-hosted),[^48] or bureau/operational unit that maintains the data.</td>
  </tr>
  </tbody>
  </table>

  By thoroughly documenting this metadata and clearly explaining access restrictions, agencies promote transparency, ensuring that both OMB and the public can understand the rationale for limited disclosure of the data asset.

  ### Restricted Data Assets {#restricted-data-assets}

  **Restricted data assets** are defined as data assets that can only be made available in a limited format or to a restrictive audience. A restricted data asset contains identifiable or otherwise confidential data that requires special data and/or access restrictions in a controlled setting.

  Restrictions may stem from an agency’s legal requirements. In these cases, agencies should take the appropriate steps to mitigate privacy or other risks and make their restricted data assets available to the public, consistent with their statutory and regulatory requirements. For example, statistical agencies and units make their restricted data available for approved projects via the Standard Application Process (SAP). A researcher must apply and be approved via the SAP before they are granted access to the restricted data. Statistical agencies and units assess project proposals against standardized review criteria, as well as additional considerations where required by law or regulation.[^49]

  Restrictions may also result from additional contractual, diplomatic or stakeholder requirements that govern the maintenance, access, sharing or distribution of data. Notably, foreign government or tribal data assets may be restricted or classified as non-public due to specific interagency, intergovernmental,[^50] or international agreements.

  Where authorized, agencies can publish versions of the data assets to which disclosure avoidance techniques[^51] have been applied. When such approaches are not feasible, agencies are encouraged to maintain robust stakeholder relationships to preserve the data’s value as a strategic resource. This approach facilitates potential public release should legal or policy conditions change in the future and both parties see the value of doing so.[^52]

  Agencies should document specific access restrictions using the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) or [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/) class within the DCAT-US v3.0 schema (refer to [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov) for details).

  ### Public Data Assets {#public-data-assets}

  M-25-05 defines a **public data asset** as “\[a\] data asset, or part thereof, maintained by the Federal Government that has been, or may be, released to the public, including any data asset, or part thereof, subject to disclosure under FOIA.”[^53] Common examples include:

  - Public data releases, such as census, weather, or atmospheric data
  - Budget data for annual appropriations
  - Grant award data

  #### Compliance and Review Process {#compliance-and-review-process}

  While agencies can readily confirm previously released public assets through publication records, determining which assets *may be released* necessitates a structured review process. This process should involve coordination with the SAOP, privacy officials (to screen for PII or other sensitive information), and General Counsel/FOIA officers to assess disclosure eligibility. Although data assets sometimes remain undisclosed until they are requested through the FOIA process, the Department of Justice has indicated that agencies can proactively disclose data and information without waiting for a request to be made.[^54] Agency data practitioners can proactively identify whether their data assets include any FOIA exemptions, such as national security, privileged communications, or law enforcement or financial information (see full list of exemptions [here](https://www.justice.gov/d9/what_are_the_9_foia_exemptions.pdf)), and share their findings with their FOIA office to enable a more streamlined review.

  In general, the review process for privacy and FOIA considerations may include the following aspects:

  - **Review Focus**: Data assets that could directly or indirectly reveal the identity of respondents or other sensitive information, such as demographic data from small jurisdictions or medical studies with patient information, require heightened scrutiny.
  - **Governance:** Agencies should leverage existing data governance bodies to streamline these reviews. Establishing cross-functional working groups —comprising the SAOP, statistical official (SO), CIO, General Counsel, FOIA officers, and records officers — ensures categorization decisions are documented, repeatable, and aligned with applicable authorities.

  For an illustrative example of how an agency may conduct this review process, see Figure 9 in [Appendix E](#appendix-e-illustrative-example-of-data-asset-workflow).

  *Note: Agencies must inventory public data assets and publish their metadata even if immediate release is not feasible (e.g., limited capacity, budgetary constraints, insufficient public interest, privacy, or FOIA exemptions). In such cases, metadata should clearly state the status and, where possible, provide a timeline for future release (see* [*Step 4*](#step-4-catalog-data-assets-and-submission-to-datagov) *for additional guidance).*

  ### Open Government Data Assets {#open-government-data-assets}

  Open government data assets are defined by M-25-05 as a subset of public data assets that satisfy specific technical and policy attributes:[^55]

  A) **Accessible:** The data asset is available (or could be made available) in a

  platform-independent, machine-readable, open format at no cost to the public with no restrictions on copying, publishing, distributing, transmitting, citing or adapting them.[^56] B) **Unrestricted**: The data asset is free from restrictions, excluding intellectual property

  (IP) rights. C) **Standards-Based:** The data relies on an underlying open standard maintained by a

  standards organization.

  #### Implementation Considerations: {#implementation-considerations}

  Evaluating an asset’s eligibility for open-format publication requires an assessment of both technical feasibility of conversion and existing constraints. Agencies must weigh the costs and complexities inherent in transforming legacy, industry-standard, or other formats against the directive to maximize openness.[^57] To ensure alignment, the established data governance body should lead these evaluations, providing technically sound and strategically aligned recommendations to the CDO for final determination. For more information on categorizing open government data assets, see Figure 10 in [Appendix E](#appendix-e-illustrative-example-of-data-asset-workflow).

  ### Next Steps: {#next-steps}

  Once all data assets are inventoried and categorized — as non-public, restricted, or public — agencies should catalog and submit them to [Data.gov](http://data.gov). The DCAT-US v3.0 schema supports this process by allowing for granular access procedures and the use of a “not yet determined” status for assets currently undergoing review. Further guidance on this approach is provided in [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov).

  ## Step 4: Catalog Data Assets and Submission to Data.gov {#step-4-catalog-data-assets-and-submission-to-datagov}

  Agencies frequently utilize internal data catalogs — ranging from commercial platforms to custom-built solutions – to manage metadata tailored to specific mission needs.[^58] Agencies should ensure these catalogs capture all necessary metadata to satisfy both the policy mandates of M-25-05 and the technical specifications of the DCAT-US v3.0 schema so that it will be accepted and validated by [Data.gov](http://data.gov). Step 4 provides guidance on how to meet both of these needs. For agencies handling geospatial data, additional guidance is provided in [Guidance for Geospatial Providers](#guidance-for-geospatial-data-providers).

  ### DCAT-US v3.0 {#dcat-us-v30}

  DCAT-US v3.0 maintains continuity with DCAT-US v1.1, which utilized a hierarchical structure consisting of the [Catalog](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/), [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/), and [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/) classes. DCAT-US v3.0 builds upon this structure by incorporating two additional core classes, [DatasetSeries](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/) and [DataService](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service), as explained below:

  - [**DatasetSeries**](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/): Enables grouping of related datasets (from the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class) that are published independently but share a common theme or purpose. For example, annual releases of census data could be individual datasets within a DatasetSeries.
  - [**DataService**](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service): Represents data processing functions, including [^59]. In cases where an API serves as the primary means of accessing data, the DataService class may be used as an alternative to a [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/).[^60]

  Figure 4 below illustrates the functional relationships between all five classes, highlighting common ways these classes could represent data assets within an agency’s catalog. Understanding these relationships is essential for accurately documenting data resources and ensuring consistent implementation of the DCAT-US v3.0 schema across agency data catalogs.[^61]

  **Figure 4: Relationship Between Core Classes in DCAT-US v3.0**

  ![Diagram of an example agency data catalog showing how the core classes relate.](../../assets/img/dcat-us-3-implementation/figure-04.png)

  <details markdown="1">
  <summary>Text description of Figure 4</summary>

  Agency Data Catalog (Example):

  - Dataset A links to Distribution 1. Label: Dataset with a Distribution.
  - Dataset B links to Distribution 2 and Distribution 3. Label: Dataset with multiple Distributions.
  - DatasetSeries A links to Dataset C (which links to Distribution 4) and Dataset D (which links to Distribution 5). Label: Multiple Datasets referenced in a DatasetSeries.
  - DataService A links to Dataset E and Dataset F. Label: Multiple Datasets referenced in a DataService.

  </details>

  In accordance with these hierarchical relationships, many classes also exist as properties within the Catalog and Dataset classes. For example, the Catalog class includes the dataset, datasetSeries, and service **properties**, which are populated using the Dataset, DatasetSeries, and DataService **classes**, respectively. Similarly, the Dataset class includes the distribution property, which can be populated using the Distribution class.[^62]

  *Note: DCAT-US v3.0 includes a broad set of supporting classes that provide additional context and metadata enrichment. Examples include* [***Agent***](https://resources.data.gov/standards/catalog/dcat-us-3/agents/#class-agent-)*,* [***Location***](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/#class-location-)*, or* [***Identifier***](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)*. Agencies should consult the* [*Supporting Classes Quick Reference*](https://resources.data.gov/resources/dcat-us3/#schema-reference-pages) *to understand the purpose and applicability of each supporting class.*

  ***Overall,*** the properties in each class are categorized as **mandatory, recommended, and optional** based on [Data.gov](http://data.gov) technical implementation requirements. Mandatory properties must always be populated, whereas recommended properties are useful and functionally necessary in many contexts. As *agencies populate these properties, they should initially use the* [***@type***](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#@type) ***property within their JSON*** *to specify the class*.

  Agencies should be aware that successfully submitting a data catalog entry to [Data.gov](http://data.gov) that includes all mandatory properties **does not, by itself,** guarantee compliance with the metadata requirements of M-25-05. Table 2 below outlines how agencies can use the DCAT-US v3.0 schema to address each M-25-05 metadata requirement, indicating the classes and properties that can satisfy each requirement.

  **Table 2: DCAT-US v3.0 Mapped to M-25-05**

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**M-25-05 Requirement**</th><th scope="col" markdown="span">**DCAT-US v3.0 Class**</th><th scope="col" markdown="span">**Relevant Properties**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">A. Description of the data asset</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/)</td>
  <td markdown="span">[description](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#description)</td>
  </tr>
  <tr>
  <td markdown="span">B. Names & definitions of variables</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/)[^63],[^64]</td>
  <td markdown="span">[describedBy](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#describedBy)</td>
  </tr>
  <tr>
  <td markdown="span">C. Name or title of the data asset</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/)</td>
  <td markdown="span">[title](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#title)</td>
  </tr>
  <tr>
  <td markdown="span">D. Indicator whether open government data asset</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) and [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/) (if applicable)</td>
  <td markdown="span">[accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRights), [rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights) and [accessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessRestriction)[^65]</td>
  </tr>
  <tr>
  <td markdown="span">E. FOIA exemption status</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) and [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/) (if applicable)</td>
  <td markdown="span">[accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRights), [rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights) and [accessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessRestriction)</td>
  </tr>
  <tr>
  <td markdown="span">F. Public data asset eligible for Data.gov</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/)</td>
  <td markdown="span">[accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRights), [rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights)</td>
  </tr>
  <tr>
  <td markdown="span">G. Indicator whether open format applies</td>
  <td markdown="span">[Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/)</td>
  <td markdown="span">[mediaType](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#mediaType), [format](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#format), [rights](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#rights)</td>
  </tr>
  <tr>
  <td markdown="span">H. Indicator whether open license applies</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) and/or [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/)</td>
  <td markdown="span">[license](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#license)[^66]</td>
  </tr>
  <tr>
  <td markdown="span">I. Description of determinations made under Title II (CIPSEA)[^67]</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/)</td>
  <td markdown="span">[rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights)[^68]</td>
  </tr>
  <tr>
  <td markdown="span">J. Date added to inventory</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/)</td>
  <td markdown="span">[inventoried](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#inventoried)</td>
  </tr>
  <tr>
  <td markdown="span">K. Date most recently updated[^69]</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) and [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/)</td>
  <td markdown="span">[modified](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#modified) (use in both classes)[^70]</td>
  </tr>
  <tr>
  <td markdown="span">L. Method for public access</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) and [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/)</td>
  <td markdown="span">[identifier](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#identifier), [accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRights) and [accessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessRestriction),[^71] [accessURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessURL), [downloadURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#downloadURL)</td>
  </tr>
  <tr>
  <td markdown="span">M. Indication of restrictions on use/access</td>
  <td markdown="span">[Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) and/or [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/)</td>
  <td markdown="span">[useRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#useRestriction), [accessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessRestriction), [cuiRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#cuiRestriction)[^72]</td>
  </tr>
  <tr>
  <td markdown="span">N. Location of the data asset</td>
  <td markdown="span">[Dataset](https://resources.data.gov/resources/dcat-us-3-dataset/) or [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/)</td>
  <td markdown="span">[spatial](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#spatial) or [accessURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessURL), [downloadURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#downloadURL)</td>
  </tr>
  <tr>
  <td markdown="span">O. Agency responsible</td>
  <td markdown="span">[Dataset](https://resources.data.gov/resources/dcat-us-3-dataset/)</td>
  <td markdown="span">[publisher](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#publisher), or [contributor](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#contributor)</td>
  </tr>
  <tr>
  <td markdown="span">P. Owner of the data asset</td>
  <td markdown="span">[Dataset](https://resources.data.gov/resources/dcat-us-3-dataset/)</td>
  <td markdown="span">[rightsHolder](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rightsHolder), [publisher](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#publisher), [contactPoint](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#contactPoint)</td>
  </tr>
  <tr>
  <td markdown="span">Q. Other metadata as determined by OMB</td>
  <td markdown="span">N/A at this time</td>
  <td markdown="span">N/A at this time</td>
  </tr>
  </tbody>
  </table>

  The following sections describe each core class in DCAT-US v3.0 (e.g., Catalog, Dataset, Distribution, DataService, and DatasetSeries), and explain how to meet both the [Data.gov](http://data.gov) technical requirements and M-25-05 metadata requirements that are relevant to each class.

  *Note: Agencies migrating from* [***DCAT-US v1.1***](https://resources.data.gov/resources/dcat-us/) *are encouraged to reference the* [***DCAT-US v1.1 to v3.0 Migration Steps***](https://resources.data.gov/resources/dcat-us-3-migration/) *first before incorporating the additional properties below. All other agencies should use this guide as a baseline supplementing with any metadata needed to meet agency-specific business, governance, and operational requirements.*

  ### Catalog {#catalog}

  The [Catalog](https://resources.data.gov/resources/dcat-us-3-catalog/) class contains “a curated collection of metadata about datasets, data services, or other resources.”[^73] In the Catalog class, agencies can provide a comprehensive listing of data assets within the agency catalog,[^74] using the [dataset](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#dataset) property. Each listed dataset should include the minimum recommended properties for the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class, as detailed in the following section.[^75]

  The following table delineates the minimum recommended properties for the [Catalog](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/) class, and indicates whether each property is related to DCAT-US v3.0 technical requirements, M-25-05 metadata requirements, or recommended as best practice. The property links point to the [full technical reference documentation](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/) for the Catalog class, which provides detailed instructions for how each property should be populated.

  **Table 3: Minimum Recommended Properties for Catalog Class**

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Property**</th><th scope="col" markdown="span">**Justification**</th><th scope="col" markdown="span">**Purpose**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">[dataset](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#dataset)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0 and aligned with M-25-05</td>
  <td markdown="span">Lists the datasets included in the catalog. See the Dataset section below for additional guidance.</td>
  </tr>
  <tr>
  <td markdown="span">[@type](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#@type)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the class being used. Example: “Catalog”</td>
  </tr>
  <tr>
  <td markdown="span">[homepage](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#homepage)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the main public web page for the catalog, usually an HTML page.</td>
  </tr>
  <tr>
  <td markdown="span">[issued](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#issued)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Indicates the date when the catalog was formally issued, such as its initial publication date. Example: “2020-05-14”</td>
  </tr>
  <tr>
  <td markdown="span">[modified](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#modified)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Indicates the most recent date when the catalog content changed. Example: “2024-04-29”</td>
  </tr>
  <tr>
  <td markdown="span">[rights](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#rights)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Provides rights statement(s) about the catalog, such as copyright or policy restrictions. Example: "Data within this catalog may be subject to individual dataset licensing terms."</td>
  </tr>
  <tr>
  <td markdown="span">[spatial](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#spatial)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Specifies the geographic area covered by the catalog using the [Location](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) class.</td>
  </tr>
  <tr>
  <td markdown="span">[themeTaxonomy](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#themeTaxonomy)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Lists the controlled vocabulary or taxonomy used to classify catalog resources, such as datasets and services.</td>
  </tr>
  <tr>
  <td markdown="span">[conformsTo](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#conformsTo)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="1">

  Identifies the standard used in the JSON.

  Example: “DCAT-US v3.0”

  </td>
  </tr>
  <tr>
  <td markdown="span">[language](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#language)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the language used in the catalog using the two-letter [ISO 639-1](https://localizely.com/iso-639-1-list/) codes. Example: “en”</td>
  </tr>
  <tr>
  <td markdown="span">[datasetSeries](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#datasetSeries)</td>
  <td markdown="span">Necessary if defining any dataset series.</td>
  <td markdown="span">Lists the dataset series included in the catalog, including all minimum recommended properties [mentioned below](#datasetseries) for the [DatasetSeries](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/) class.</td>
  </tr>
  <tr>
  <td markdown="span">[service](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#service)</td>
  <td markdown="span">Necessary if defining any data services.</td>
  <td markdown="span">Lists the data services included in the catalog, including all minimum recommended properties [mentioned below](#dataservice) for the [DataService](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service) class.</td>
  </tr>
  </tbody>
  </table>

  #### Recommended Implementation Practices {#recommended-implementation-practices}

  Agencies should consider the following practices to avoid common implementation issues when populating the Catalog class:

  - **Correctly define the dataset property**: The catalog should clearly identify the datasets included within it. Agencies should define the [dataset](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#dataset) property as an array rather than a string and ensure that each dataset includes the minimum required properties for the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class. (see section below).
  - **Use valid date formats**: Date properties, including issued and modified, should use [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)-compliant formatting. In most cases, agencies should use the YYYY-MM-DD format.

  #### JSON Example {#json-example}

  The following example illustrates a catalog with the minimum recommended properties populated.

  **Example 1: Catalog Class**[^76]

      {
        "@type": "Catalog",
        "conformsTo": {
          "@type": "Standard",
          "title": "DCAT-US v3.0"
        },
        "title": "GSA Public Buildings Service Data Inventory",
        "homepage": {
          "@type": "Document",
          "title": "GSA PBS Data Catalog Homepage",
          "accessURL": "https://www.gsa.gov/data"
        },
        "issued": "2026-01-15",
        "modified": "2026-07-27",
        "rights": ["Data within this catalog may be subject to individual dataset licensing terms."],
        "spatial": {
          "@type": "Location",
          "label": "United States"
        },
        "themeTaxonomy": [
          {
            "@type": "ConceptScheme",
            "title": "Data.gov Theme Taxonomy",
            "identifier": "https://resources.data.gov/categories/"
          },
          {
            "@type": "ConceptScheme",
            "title": "GSA Data Themes",
            "identifier": "https://www.gsa.gov/data"
          }
        ],
        "language": "en",
        "publisher": {
          "@type": "Organization",
          "name": "U.S. General Services Administration"
        },
        "dataset": [
          {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-use-2026",
            "title": "GSA Federal Building Energy Use Summary 2026",
            "description": "Aggregate public data describing annual energy use for selected GSA-managed federal buildings during FY26, including aggregate-level statistics on areas usch as electricity, natural gas, steam, and chilled water.",
            "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-use-2026",
            "contactPoint": {
              "fn": "GSA Data Support",
              "hasEmail": "mailto:public-inquiries@gsa.gov"
            }
          }
        ],
      "datasetSeries": {
          "@type": "DatasetSeries",
          "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-series",
          "title": "GSA Federal Building Energy Usage Data Series",
          "description": "Annual public aggregate datasets describing energy usage for selected GSA-managed federal buildings. The series groups fiscal-year datasets covering electricity, natural gas, steam, and chilled water.",
          "contactPoint": {
            "@type": "Kind",
            "fn": "GSA Public Buildings Service Data Support",
            "hasEmail": "mailto:public-inquiries@gsa.gov"
          },
          "publisher": {
            "name": "U.S. General Services Administration"
          },
          "seriesMember": [
            {
              "@type": "Dataset",
              "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-2025",
              "title": "GSA Federal Building Energy Usage Data 2025",
              "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY25.",
              "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25",
              "publisher": {
                "@type": "Organization",
                "name": "U.S. General Services Administration"
              }
            },
            {
              "@type": "Dataset",
              "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26",
              "title": "GSA Federal Building Energy Usage Data 2026",
              "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY26.",
              "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26",
              "publisher": {
                "@type": "Organization",
                "name": "U.S. General Services Administration"
              }
            }
          ]
        }
      }

  ### Dataset {#dataset}

  The [**Dataset**](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class describes “a collection of data published or curated by one provider.”[^77] It provides the core metadata for a data asset, including identifiers, points of contact, coverage, access rights, ownership, and related resources. The **Dataset** class is the vehicle through which agencies implement the majority of the technical requirements for comprehensive data inventories mandated by **M-25-05**.[^78]

  *Note: Legal metadata properties, including* ***license, accessRestriction, useRestriction, and cuiRestriction, can be populated in either the Dataset or Distribution class****. Agencies should populate them in the Dataset class when any of the following occurs:*

  1. *1.* *The dataset is non-public or restricted public and/or has no distributions.*
  2. *2.* *All distributions of the dataset have the same circumstances (e.g., same access restrictions and/or access methods).*

  *Otherwise, agencies are recommended to populate these properties in the Distribution class.*

  The following table delineates the minimum recommended properties for the Dataset class and indicates whether each property is required by DCAT-US v3.0, M-25-05, or recommended as a best practice. The property links point to the [full technical reference documentation](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) for the Dataset class, which provides detailed instructions for how each property should be populated.

  **Table 4: Minimum Recommended Properties for Dataset Class**

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Property**</th><th scope="col" markdown="span">**Justification**</th><th scope="col" markdown="span">**Purpose**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">[title](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#title)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0 and satisfies M-25-05 (C)</td>
  <td markdown="span">Provides the formal human-readable name of the dataset. Example: “Federal Employment Data 2024”</td>
  </tr>
  <tr>
  <td markdown="span">[description](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#description)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0 and satisfies M-25-05 (A)</td>
  <td markdown="span">Provides a narrative summary describing the content and purpose of the dataset. Example: “Employment rates and average wages by state for the 2024 calendar year.”</td>
  </tr>
  <tr>
  <td markdown="span">[contactPoint](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#contactPoint)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0 and can be used to satisfy M-25-05 (P)</td>
  <td markdown="span">Identifies the appropriate point of contact (e.g., legal entity or person) for the data asset, using the [Kind](https://resources.data.gov/standards/catalog/dcat-us-3/agents/#kind) class.</td>
  </tr>
  <tr>
  <td markdown="span">[identifier](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#identifier)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0 and satisfies M-25-05 (L)</td>
  <td markdown="1">

  Provides a persistent, unique identifier that users can reference to locate or cite the dataset, such as a URL.

  Example:

  “https://www.gsa.gov/datasets/federal-it-survey-2026”

  </td>
  </tr>
  <tr>
  <td markdown="span">[describedBy](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#describedBy)</td>
  <td markdown="span">Satisfies M-25-05 (B)</td>
  <td markdown="1">

  For **public and restricted data assets**: Points to a machine-readable feature catalog, data dictionary, or related documentation (e.g., link, file, webpage), using the [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#root) class.

  For **non-public assets**, agencies may use a NULL value when disclosure is not appropriate.

  </td>
  </tr>
  <tr>
  <td markdown="span">[license](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#license)</td>
  <td markdown="span">Satisfies M-25-05 (H)</td>
  <td markdown="span">Identifies the license or public domain dedication that applies to the dataset.</td>
  </tr>
  <tr>
  <td markdown="span">[inventoried](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#inventoried)</td>
  <td markdown="span">Satisfies M-25-05 (J)</td>
  <td markdown="span">Indicates the date that the data asset was added to the inventory.</td>
  </tr>
  <tr>
  <td markdown="span">[distribution](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#distribution)</td>
  <td markdown="span">Partially satisfies M-25-05 (D-E, G-H, K-M)</td>
  <td markdown="span">Lists the available distribution(s) for the dataset. Can be omitted when no distribution is available yet.</td>
  </tr>
  <tr>
  <td markdown="span">[modified](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#modified)</td>
  <td markdown="span">Partially satisfies M-25-05 (K)</td>
  <td markdown="span">Indicates the date of the most recent update to the dataset. Example: “2026-06-11”</td>
  </tr>
  <tr>
  <td markdown="span">[spatial](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#spatial)</td>
  <td markdown="span">Satisfies M-25-05 (N)</td>
  <td markdown="span">Defines the geographic area covered by the dataset, using the [Location](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) class. Can also be used to define the location of the dataset using the city and state of the agency’s headquarters.</td>
  </tr>
  <tr>
  <td markdown="span">[accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRights)</td>
  <td markdown="span">Partially satisfies M-25-05 (D-F, L)</td>
  <td markdown="1">

  States whether the data asset is non-public, restricted, or public.

  Example: “Public”

  </td>
  </tr>
  <tr>
  <td markdown="span">[rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights)</td>
  <td markdown="span">Partially satisfies M-25-05 (D-G, I)</td>
  <td markdown="1">

  Using the standardized language from M-25-05,[^79] indicates if the asset is:

  1. An open government data asset.
  2. Exempt from disclosure under FOIA.
  3. Publishable (or currently published) on [data.gov](http://data.gov).
  4. Subject to access requests (and if so, provide method(s) for requesting access).

  Example: “This data asset is an open government data asset. It is not exempt from disclosure under FOIA. It is a public data asset eligible for disclosure in the Federal Data Catalog.”

  </td>
  </tr>
  <tr>
  <td markdown="span">[accessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRestriction)</td>
  <td markdown="span">Partially satisfies M-25-05 (D, E, L, M)</td>
  <td markdown="1">

  Describes who can access this dataset and under what conditions, using the [AccessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) class with the following properties defined:

  - [restrictionStatus](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction--restrictionStatus): State the restrictions based on [NARA Access Restriction Status Authority List](https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status).
  - [specificRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction--specificRestriction): Define using the [NARA Specific Access Restriction Authority List](https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction).
  - [restrictionNote](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction--restrictionNote): Cite any specific statutes that justify the restriction, and provide any supplemental information not captured by the above properties.

  </td>
  </tr>
  <tr>
  <td markdown="span">[useRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#useRestriction)</td>
  <td markdown="span">Partially satisfies M-25-05 (M)</td>
  <td markdown="span">Defines the level of any use restrictions using the [NARA Use Restriction Status Authority List](https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status) (e.g., Restricted - Fully, Restricted - Partly, Restricted - Possibly).</td>
  </tr>
  <tr>
  <td markdown="span">[cuiRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#cuiRestriction)</td>
  <td markdown="span">Partially satisfies M-25-05 (M)</td>
  <td markdown="1">

  Describes applicable controlled unclassified information (CUI) restrictions for the dataset using the [CUIRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction) class, where relevant. The following properties are strongly recommended by NARA:

  - [**cuiBannerMarking**](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction--cuiBannerMarking): Use the NARA-defined category marks [here](https://www.archives.gov/cui/registry/category-marking-list).
  - [**designationIndicator**](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction--designationIndicator): Indicate the agency that made the CUI designation, using a controlled vocabulary such as the [agency list on the Federal Register](https://www.federalregister.gov/agencies).
  - [**requiredIndicatorPerAuthority**](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction--requiredIndicatorPerAuthority): Include a specific law, regulation, or governmentwide policy (LRGWP) that justifies the CUI designation, ideally from the [U.S. Code](https://uscode.house.gov/browse.xhtml), [Code of Federal Regulations](https://www.ecfr.gov/) or ISOO Repository.[^80],[^81] Additionally, agencies should indicate the dates, events, or review interval at which the CUI designation would be removed or reconsidered,[^82] also known as a decontrol trigger.

  </td>
  </tr>
  <tr>
  <td markdown="span">[rightsHolder](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rightsHolder) / [publisher](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#publisher) / [contributor](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#contributor)[^83]</td>
  <td markdown="span">Can be used to satisfy M-25-05 (O-P)</td>
  <td markdown="1">

  rightsHolder: Identifies organizations that hold rights to the dataset.

  publisher: Identifies the publishing agency or organization using the [Organization](https://resources.data.gov/standards/catalog/dcat-us-3/agents/#organization) class.

  contributor: Identifies individuals, organizations, or other entities that contribute to the dataset, using the [Agent](https://resources.data.gov/standards/catalog/dcat-us-3/agents/) class.

  </td>
  </tr>
  <tr>
  <td markdown="span">[@type](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#@type)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the class being used. Example: “Dataset”</td>
  </tr>
  <tr>
  <td markdown="span">[keyword](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#keyword)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Lists keywords or tags describing the dataset. Example: \["climate", "weather", "temperature", "precipitation"\]</td>
  </tr>
  <tr>
  <td markdown="span">[landingPage](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#landingPage)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Provides a web page from the original data provider that gives access to the dataset, its distributions, and related information.</td>
  </tr>
  <tr>
  <td markdown="span">[temporal](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#temporal)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Indicates the time periods covered by the dataset.</td>
  </tr>
  <tr>
  <td markdown="span">[theme](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#theme)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Lists themes or categories for the dataset, using the [Concept](https://resources.data.gov/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) class.</td>
  </tr>
  </tbody>
  </table>

  #### Recommended Implementation Practices {#recommended-implementation-practices-2}

  Agencies should consider the following practices to avoid common implementation issues when populating the Dataset class:

  - **Disclose Appropriate Variable-Level Information:** Align the level of detail in variable definitions with asset sensitivity. For public data assets, agencies should use the [describedBy](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#describedBy) property to reference variable definitions. For restricted and non-public data assets, agencies should carefully assess whether variable definitions can be disclosed. In some cases, the [describedBy](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#describedBy) property may be set to NULL or may reference a distribution that is restricted to authorized audiences. Publishing detailed variable definitions for restricted or non-public assets may expose sensitive information or create unintended disclosure risk.
  - **Standardize Access and Disclosure Narratives in** [**rights**](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights): The rights property may need to communicate several determinations in a single text field. Agencies should ensure that it addresses all relevant M-25-05 requirements.
  - **Distinguish Between accessRights and accessRestriction:** Agencies should maintain a strict distinction between *accessRights* (high-level dataset access policy)[^84] and *accessRestriction* (specific restrictions or limitations on access to the data asset, such as Privacy Act restrictions or FOIA exemptions).[^85] The accessRestriction property can be defined in the Dataset or Distribution class, whereas accessRights can only be defined in the Dataset class.
  - **State Ownership Clearly**: Default to defining the [rightsHolder](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rightsHolder) property to establish clear institutional accountability. Supplement with [publisher](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#publisher) only where functional roles diverge from legal ownership. For example, the publisher may be the agency making the dataset available, while the rights holder may be a specific office, bureau, or partner organization.
  - **Distinguish contactPoint, publisher, and rightsHolder Roles**: Agencies should always populate the [contactPoint](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#contactPoint) property, along with [publisher](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#publisher) if the data asset is public or restricted public. Alternatively, agencies can fulfill the requirement using the [rightsHolder](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rightsHolder) property if they do not own the data asset.
  - **Adapt Spatial Information to the Intended Audience**: Tailor the [spatial](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#spatial) property definition to the target audience. For geospatial data practitioners, a more technical representation, such as a bounding box ([bbox](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location--bbox)), may be appropriate. For broader public audiences, a plain-language label such as “United States”, “District of Columbia,” or “Region 4” may be more useful.[^86]
  - **Standardize Restriction Narratives**: Agencies should provide clear, consistent explanations for access, use, and CUI restrictions, even when no restrictions apply. In those cases, agencies may use values such as “Unrestricted” to document that the dataset has been reviewed and is not subject to access or use limitations.

  #### JSON Examples {#json-examples}

  The following JSON examples illustrate how the Dataset class may be populated for different categories of data assets, including **open government**, **public**, **restricted public**, and **non-public**. Each example includes the minimum recommended properties. Key differences among the examples are highlighted to illustrate how metadata values vary for each category.[^87]

  **Example 2: Dataset Class (Open Government Data Asset)**

  <pre><code>{
    "@type": "Dataset",
    "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-2026",
    "title": "GSA Federal Building Energy Usage Data 2026",
    "description": "Annual energy usage for selected GSA-managed federal buildings during FY26, including aggregate information on electricity, natural gas, steam, and chilled water. The data supports the federal real property portfolio.",
    "contactPoint": {
      "@type": "Kind",
      "fn": "GSA Public Buildings Service Data Support",
      "hasEmail": "mailto:public-inquiries@gsa.gov"
    },
    "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-2026",
    "describedBy": {
          "@type": "Distribution",
          "title": "JSON Data Dictionary",
          "accessURL": "https://www.gsa.gov/datasets/energy/dictionary.json"
    },
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "inventoried": "2026-02-01",
    "modified": "2026-07-15",
    "spatial": {
      "@type": "Location",
      "label": "United States"
    },
    <mark>"accessRights": "Public",</mark>
    <mark>"rights": ["This data asset is an open government data asset. It is not exempt from disclosure under FOIA. It is a public data asset eligible for disclosure in the Federal Data Catalog. It is available at no cost to the public in open, machine-readable formats and under an open license."],</mark>
    <mark>"accessRestriction": {</mark>
      <mark>"@type": "AccessRestriction",</mark>
      <mark>"restrictionStatus": "Unrestricted",</mark>
      <mark>"specificRestriction": null,</mark>
      <mark>"restrictionNote": "Publicly available without access restrictions."</mark>
    <mark>},</mark>
    <mark>"useRestriction": null,</mark>
    <mark>"cuiRestriction": null</mark>,
    "rightsHolder": [
      {
        "@type": "Organization",
        "name": "U.S. General Services Administration"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "U.S. General Services Administration"
    },
    "contributor": [
      {
        "@type": "Agent",
        "name": "GSA Public Buildings Service"
      }
    ],
    "keyword": [
      "GSA",
      "Public Buildings Service",
      "federal buildings",
      "energy usage",
      "electricity",
      "natural gas"
    ],
    "landingPage": {
      "@type": "Document",
      "title": "GSA PBS Energy Data",
      "accessURL": "https://www.gsa.gov/energy-data"
    },
    "temporal": {
      "@type": "PeriodOfTime",
      "startDate": "2025-10-01",
      "endDate": "2026-09-30"
    },
    "theme": [
      {
        "@type": "Concept",
        "prefLabel": "Energy"
      }
    ],
    <mark>"distribution"</mark>: [
      {
        "@type": "Distribution",
        "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-2026/distribution/csv",
        "title": "GSA Federal Building Energy Usage Data 2026 CSV",
        "rights": "This distribution is available in an open, machine-readable format and may be copied, published, distributed, transmitted, cited, and adapted consistent with the stated license.",
        "useRestriction": null,
        "cuiRestriction": null
      }
    ]
  }</code></pre>

  **Example 3: Dataset Class (Public Data Asset)**

  <pre><code>{
    "@type": "Dataset",
    "@id": "https://www.gsa.gov/datasets/public-building-prospectus",
    "title": "GSA Public Building Prospectus Documents",
    "description": "GSA Public Buildings Service prospectus documents describing proposed federal building construction, alteration, lease, repair, and acquisition projects. The documents support federal real property actions and decisions.",
    "contactPoint": {
      "@type": "Kind",
      "fn": "GSA Public Buildings Service Data Support",
      "hasEmail": "mailto:public-inquiries@gsa.gov"
    },
    "identifier": "https://www.gsa.gov/datasets/public-building-prospectus",
    "describedBy": {
          "@type": "Distribution",
          "title": "JSON Data Dictionary",
          "accessURL": "https://www.gsa.gov/datasets/public-bldg/dictionary.json"
    },
    "license": "Publicly accessible for viewing and download.",
    "inventoried": "2026-02-15",
    "modified": "2026-07-15",
    "spatial": {
      "@type": "Location",
      "label": "United States"
    },
    <mark>"accessRights": "Public",</mark>
    <mark>"rights": ["This data asset is a public data asset eligible for disclosure in the Federal Data Catalog. It is not exempt from disclosure under FOIA. It is not categorized as an open government data asset because it is not stored in an open format."],</mark>
    <mark>"accessRestriction": {</mark>
      <mark>"@type": "AccessRestriction",</mark>
      <mark>"restrictionStatus": "Unrestricted",</mark>
      <mark>"specificRestriction": null,</mark>
      <mark>"restrictionNote": "The public document collection is available for general public access."</mark>
    <mark>},</mark>
    <mark>"useRestriction": null,</mark>
    <mark>"cuiRestriction": null,</mark>
    "rightsHolder": [
      {
        "@type": "Organization",
        "name": "U.S. General Services Administration"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "U.S. General Services Administration"
    },
    "contributor": [
      {
        "@type": "Agent",
        "name": "GSA Public Buildings Service"
      }
    ],
    "keyword": [
      "GSA",
      "Public Buildings Service",
      "prospectus",
      "federal buildings",
      "real property",
      "construction",
      "leases",
      "alterations"
    ],
    "landingPage": {
      "@type": "Document",
      "title": "GSA Real Estate Data",
      "accessURL": "https://www.gsa.gov/real-estate/prospectus"
    },
    "temporal": {
      "@type": "PeriodOfTime",
      "startDate": "2020-10-01",
      "endDate": "2026-09-30"
    },
    "theme": [
      {
        "@type": "Concept",
        "prefLabel": "Facilities"
      },
      {
        "@type": "Concept",
        "prefLabel": "Real Property"
      }
    ],
    <mark>"distribution"</mark>: [
      {
        "@type": "Distribution",
        "@id": "https://www.gsa.gov/datasets/public-bldg-prospectus/distribution/pdf",
        "title": "GSA Public Building Prospectus Documents PDF Collection"
      }
    ]
  }</code></pre>

  **Example 4: Dataset Class (Restricted Data Asset)**

  <pre><code>{
    "@type": "Dataset",
    "@id": "https://www.gsa.gov/datasets/federal-building-occupancy-survey",
    "title": "GSA Federal Building Occupancy Survey Restricted Response Data",
    "description": "Restricted response-level survey data collected from occupants of selected GSA-managed federal buildings. The dataset includes information about facility experience, space utilization, workplace service needs, and reported occupancy patterns. The dataset is used for building operations analysis, workplace planning, facility management, and evidence-building activities.",
    "contactPoint": {
      "@type": "Kind",
      "fn": "GSA Public Buildings Service Data Support",
      "hasEmail": "mailto:public-inquiries@gsa.gov"
    },
    "identifier": "https://www.gsa.gov/datasets/federal-building-occupancy-survey",
    "describedBy": {
          "@type": "Distribution",
          "title": "JSON Data Dictionary",
          "accessURL": "https://www.gsa.gov/datasets/federal-buildings/dictionary.json"
    },
    "license": "Not licensed for public reuse; governed by approved access terms and data use agreement.",
    "inventoried": "2026-03-01",
    "modified": "2026-07-15",
    "spatial": {
      "@type": "Location",
      "label": "United States"
    },
    <mark>"accessRights": "Restricted",</mark>
    <mark>"rights": ["This data asset is a restricted data asset. It is not an open government data asset. Public metadata is eligible for disclosure in the Federal Data Catalog, but the underlying dataset is not directly available to the general public. Portions of the data asset may be subject to withholding or redaction under FOIA. Authorized users may request access via the GSA point of contact."],</mark>
    <mark>"accessRestriction": {</mark>
      <mark>"@type": "AccessRestriction",</mark>
      <mark>"restrictionStatus": "Restricted - Partly",</mark>
      <mark>"specificRestriction": "FOIA (b)(6)",</mark>
      <mark>"restrictionNote": "Access to this dataset is limited to authorized users with an approved business, research, oversight, or operational need."</mark>
    <mark>},</mark>
    <mark>"useRestriction": {</mark>
      <mark>"@type": "UseRestriction",</mark>
      <mark>"specificRestriction": "Restricted - Partly"</mark>
    <mark>},</mark>
    <mark>"cuiRestriction": {</mark>
      <mark>"@type": "CUIRestriction",</mark>
      <mark>"cuiBannerMarking": "CUI",</mark>
      <mark>"designationIndicator": {</mark>
        <mark>"@type": "Organization",</mark>
        <mark>"name": "U.S. General Services Administration"</mark>
      <mark>},</mark>
      <mark>"requiredIndicatorPerAuthority": "CUI designation based on 5 U.S.C. 552 because portions of the data may require protection from public disclosure. Decontrol will be reconsidered annually."</mark>
    },
    "rightsHolder": [
      {
        "@type": "Organization",
        "name": "U.S. General Services Administration"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "U.S. General Services Administration"
    },
    "contributor": [
      {
        "@type": "Agent",
        "name": "GSA Public Buildings Service"
      }
    ],
    "keyword": [
      "GSA",
      "federal buildings",
      "occupancy survey",
      "facility experience",
      "space utilization",
      "workplace planning"
    ],
    "landingPage": {
      "@type": "Document",
      "title": "GSA Federal Building Data",
      "accessURL": "https://www.gsa.gov/datasets/federal-building-occupancy-request-access"
    },
    "temporal": {
      "@type": "PeriodOfTime",
      "startDate": "2025-10-01",
      "endDate": "2026-09-30"
    },
    "theme": [
      {
        "@type": "Concept",
        "prefLabel": "Facilities"
      }
    ],
    <mark>"distribution"</mark>: [
      {
        "@type": "Distribution",
        "@id": "https://www.gsa.gov/datasets/federal-building-occupancy-survey/request-access",
        "title": "GSA Federal Building Occupancy Survey Access Request"
        }
    ]
  }</code></pre>

  **Example 5: Dataset Class (Non-Public Data Asset)**

  <pre><code>{
    "@type": "Dataset",
    "@id": "https://www.gsa.gov/datasets/internal-system-access-audit-logs",
    "title": "GSA Internal System Access Audit Logs",
    "description": "Non-public operational data containing system access audit log records for selected internal GSA information systems. The dataset includes technical security event information.",
    "contactPoint": {
      "@type": "Kind",
      "fn": "GSA Data Support",
      "hasEmail": "mailto:public-inquiries@gsa.gov"
    },
    "identifier": "https://www.gsa.gov/datasets/internal-system-access-audit-logs",
    <mark>"describedBy": null,</mark>
    "license": "Not licensed for public reuse.",
    "inventoried": "2026-03-15",
    "modified": "2026-07-15",
    "spatial": {
      "@type": "Location",
      "label": "Washington, DC"
    },
    <mark>"accessRights": "Non-Public",</mark>
    <mark>"rights": ["This data asset is a non-public data asset. It is not an open government data asset. It is not eligible for public release in the Federal Data Catalog beyond permitted metadata. The underlying data is exempt from public disclosure under FOIA."],</mark>
    <mark>"accessRestriction": {</mark>
      <mark>"@type": "AccessRestriction",</mark>
      <mark>"restrictionStatus": "Restricted - Fully",</mark>
      <mark>"specificRestriction": "FOIA (b)(7)(E)",</mark>
      <mark>"restrictionNote": "Access to this dataset is limited to authorized GSA personnel and approved support staff with a documented operational, cybersecurity, audit, or oversight need."</mark>
    <mark>},</mark>
    <mark>"useRestriction": {</mark>
      <mark>"@type": "UseRestriction",</mark>
      <mark>"specificRestriction": "Restricted - Fully"</mark>
    <mark>},</mark>
    <mark>"cuiRestriction": {</mark>
      <mark>"@type": "CUIRestriction",</mark>
      <mark>"cuiBannerMarking": "CUI",</mark>
      <mark>"designationIndicator": {</mark>
        <mark>"@type": "Organization",</mark>
        <mark>"name": "U.S. General Services Administration"</mark>
      <mark>},</mark>
      <mark>"requiredIndicatorPerAuthority": "CUI designation based on applicable federal information security requirements and 5 U.S.C. 552. Decontrol will be reconsidered when the records are no longer operationally sensitive, when applicable retention requirements have been satisfied, or upon authorized agency review."</mark>
    <mark>},</mark>
    "rightsHolder": [
      {
        "@type": "Organization",
        "name": "U.S. General Services Administration"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "U.S. General Services Administration"
    },
    "contributor": [
      {
        "@type": "Agent",
        "name": "GSA Office of the Chief Information Security Officer"
      }
    ],
    "keyword": [
      "GSA",
      "system logs",
      "cybersecurity",
      "information security"
    ],
    "landingPage": null,
    "temporal": {
      "@type": "PeriodOfTime",
      "startDate": "2025-10-01",
      "endDate": "2026-09-30"
    },
    "theme": [
      {
        "@type": "Concept",
        "prefLabel": "Information Security"
      },
      {
        "@type": "Concept",
        "prefLabel": "Cybersecurity"
      }
    ]
  }</code></pre>

  ### Distribution {#distribution}

  The **Distribution** class describes the various ways a dataset is available to users including its access method, file formats, licensing, access restrictions and other distribution-specific details. A single **dataset** may have one or more associated **distributions**, each representing a different method of accessing the same underlying data asset.

  The Distribution class can be used to represent multiple versions of the same data asset, especially when both a public and restricted/non-public version exist. In these instances, agencies can include the dataset once in the Dataset class and define two separate distributions for the versions. The public distribution may reference an openly accessible download URL, while the restricted distribution may identify the applicable access controls or distribution mechanism.[^88] This approach promotes consistent metadata management, reduces duplication, and more accurately reflects the relationship between a data asset and its available distribution options.

  Although DCAT-US v3.0 does not mandate specific properties for this class, several M-25-05 requirements — particularly those concerning access methods, format, and update history — are directly applicable. Access, use, and CUI restriction definitions should be in this class if not already in the Dataset class.

  The following table delineates the minimum recommended properties agencies should define under the Distribution class, and indicates whether each property is required by M-25-05 or recommended as a best practice. The property links point to the [full technical reference documentation](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/) for the Distribution class, which provides detailed instructions for populating each property.

  **Table 5: Minimum Recommended Properties for Distribution Class**

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Property**</th><th scope="col" markdown="span">**Justification**</th><th scope="col" markdown="span">**Purpose**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">[accessURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessURL) / [downloadURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#downloadURL) (use one)</td>
  <td markdown="span">Satisfies M-25-05 (L)</td>
  <td markdown="1">

  Provides the web location where the dataset can be accessed or downloaded. Example:

  “https://commerce.gov/regulations-data”

  </td>
  </tr>
  <tr>
  <td markdown="span">[mediaType](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#mediaType) and [format](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#format)</td>
  <td markdown="span">Satisfies M-25-05 (G)</td>
  <td markdown="span">mediaType: Identifies the media type of file referenced in [downloadURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#downloadURL). Example: “text/csv” format: Provides a human-readable description of the file format. Example: “csv”</td>
  </tr>
  <tr>
  <td markdown="span">[license](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#license)</td>
  <td markdown="span">Satisfies M-25-05 (H)</td>
  <td markdown="span">Identifies the license or public domain dedication that applies to the distribution.</td>
  </tr>
  <tr>
  <td markdown="span">[modified](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#modified)</td>
  <td markdown="span">Partially satisfies M-25-05 (K)</td>
  <td markdown="span">Indicates the date of the most recent update to the distribution. Example: “2026-06-11”</td>
  </tr>
  <tr>
  <td markdown="span">[accessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessRestriction)</td>
  <td markdown="span">Partially satisfies M-25-05 (D, E, L, M)</td>
  <td markdown="1">

  Describes who can access this distribution and under what conditions, using the [AccessRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) class with the following properties defined:

  - [restrictionStatus](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction--restrictionStatus): State the restrictions based on [NARA Access Restriction Status Authority List](https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status).
  - [specificRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction--specificRestriction): Define using the [NARA Specific Access Restriction Authority List](https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction).
  - [restrictionNote](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction--restrictionNote): Provide any additional information about the restriction.

  </td>
  </tr>
  <tr>
  <td markdown="span">[rights](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#rights)</td>
  <td markdown="span">Partially satisfies M-25-05 (D-G)</td>
  <td markdown="1">

  Provides supplemental rights-related information not covered by accessRestriction, such as determinations related to statistical data or access review procedures.[^89]

  Example: “Access requests for this data are reviewed every 30 days.”

  </td>
  </tr>
  <tr>
  <td markdown="span">[useRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#useRestriction)</td>
  <td markdown="span">Partially satisfies M-25-05 (M)</td>
  <td markdown="span">Defines the level of any use restrictions using the [NARA Use Restriction Status Authority List](https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status) (e.g., Restricted - Fully, Restricted - Partly, Restricted - Possibly).</td>
  </tr>
  <tr>
  <td markdown="span">[cuiRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#cuiRestriction)</td>
  <td markdown="span">Partially satisfies M-25-05 (M)</td>
  <td markdown="1">

  Describes applicable CUI restrictions using the [CUIRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction) class, where relevant. The following properties are strongly recommended by NARA:

  - [**cuiBannerMarking**](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction--cuiBannerMarking): Use the NARA-defined category marks [here](https://www.archives.gov/cui/registry/category-marking-list).
  - [**designationIndicator**](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction--designationIndicator): Indicate the agency that made the CUI designation, using a controlled vocabulary such as the [agency list on the Federal Register](https://www.federalregister.gov/agencies).
  - [**requiredIndicatorPerAuthority**](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction--requiredIndicatorPerAuthority): Include a specific law, regulation, or government-wide policy (LRGWP) that justifies the CUI designation, ideally from the [U.S. Code](https://uscode.house.gov/browse.xhtml).[^90] Additionally, agencies should indicate the dates, events, or review interval to remove or reconsider the CUI designation,[^91] also known as a decontrol trigger.

  </td>
  </tr>
  <tr>
  <td markdown="span">[@type](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#@type)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the class being used. Example: “Distribution”</td>
  </tr>
  <tr>
  <td markdown="span">[title](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#title)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="1">

  Provides a human-readable name for the distribution.

  Example: “Federal Employment Data 2024 (CSV)”

  </td>
  </tr>
  <tr>
  <td markdown="span">[description](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#description)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Provides a concise, human-readable description of the distribution, including its contents, purpose, or intended use.</td>
  </tr>
  <tr>
  <td markdown="span">[describedBy](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#describedBy)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Points to a machine-readable feature catalog (e.g., link, file, webpage) for the distribution if available, using the [Distribution](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#root) class.</td>
  </tr>
  <tr>
  <td markdown="span">[issued](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#issued)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Indicates the date the distribution was created. Example: “2018-06-11”</td>
  </tr>
  </tbody>
  </table>

  #### Recommended Implementation Practices {#recommended-implementation-practices-3}

  Agencies should consider the following practices to avoid common implementation issues when populating the Distribution class:

  - **Prioritize Persistent Access Paths**: Agencies should use a live, current URL to identify where the distribution can be accessed or downloaded. The [accessURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#accessURL) property should be used when the distribution is accessed through a landing page, interface, or service. The [downloadURL](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#downloadURL) property should be used when the distribution can be directly downloaded as a file. Alternatively, agencies can populate the [spatial](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#spatial) property with the city and state of their agency headquarters.
  - **Standardize Licensing Metadata Across Distributions:** Agencies should explicitly define the [license](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#license) property for each distribution to which a license applies, even when the same license applies to multiple distributions, to promote consistency and eliminate legal ambiguity across the data catalog.
  - **Formalize Open Format Justifications**: Agencies should utilize the [rights](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#rights) property, as needed, to provide supplemental information about format-related determinations, including why a distribution is not available in an open format or why it has been transitioned to a different format. Agencies should use standardized language wherever possible to improve consistency across the inventory and support public understanding.
  - **Standardize Restriction Narratives**: If defining access, use or CUI restrictions in this class, agencies should provide clear, consistent explanations for the restrictions. These properties should be populated even when no restrictions apply. In those cases, agencies may use values such as “Unrestricted” to document that the distribution has been reviewed and is not subject to access or use limitations.

  #### JSON Examples {#json-examples-2}

  The following are JSON examples that illustrate how the Distribution class may be populated for different types of data assets and access conditions. Each example includes the minimum recommended properties. Key differences among the examples are highlighted.

  **Example 6: Distribution with Access, CUI, and Use Restrictions**

  <pre><code>{
    "@type": "Distribution",
    "@id": "https://www.gsa.gov/datasets/federal-building-occupancy-survey/distribution/csv",
    "title": "GSA Federal Building Occupancy Survey CSV",
    "description": "Restricted CSV distribution containing response-level survey data collected from occupants of selected GSA-managed federal buildings. The file may include respondent-level information, facility-level details, workplace experience responses, and space utilization information.",
    "accessURL": "https://www.gsa.gov/datasets/federal-building-occupancy/request-access",
    "describedBy": {
          "@type": "Distribution",
          "title": "CSV Data Dictionary",
          "accessURL": "https://www.gsa.gov/datasets/federal-building-occupancy/dict-restricted.json"
    },
    "mediaType": "text/csv",
    "format": "CSV",
    "license": "Not licensed for public reuse; access and use are governed by an approved data use agreement.",
    "issued": "2026-03-01",
    "modified": "2026-07-15",
    <mark>"accessRestriction": {</mark>
      <mark>"@type": "AccessRestriction",</mark>
      <mark>"restrictionStatus": "Restricted - Partly",</mark>
      <mark>"specificRestriction": "FOIA (b)(6)",</mark>
      <mark>"restrictionNote": "Access to this distribution is limited to authorized users with an approved business, research, oversight, or operational need. Users must complete GSA access review and may be required to execute a data use agreement before access is granted."</mark>
    <mark>},</mark>
    <mark>"rights": ["This distribution is not directly downloadable by the general public. Approved users may not redistribute the data, attempt re-identification, link the data with other sources to identify individuals or sensitive facilities, or publish results that disclose restricted information."],</mark>
    <mark>"useRestriction": {</mark>
      <mark>"@type": "UseRestriction",</mark>
      <mark>"specificRestriction": "Restricted - Partly"</mark>
    <mark>},</mark>
    <mark>"cuiRestriction": {</mark>
      <mark>"@type": "CUIRestriction",</mark>
      <mark>"cuiBannerMarking": "CUI",</mark>
      <mark>"designationIndicator": {</mark>
        <mark>"@type": "Organization",</mark>
        <mark>"name": "U.S. General Services Administration"</mark>
      <mark>},</mark>
      <mark>"requiredIndicatorPerAuthority": "CUI designation based on 5 U.S.C. 552 because portions of the distribution may require protection from public disclosure. Decontrol will be reconsidered after 5 years."</mark>
    }
  }</code></pre>

  **Example 7: Distribution with No Restrictions**

  <pre><code>{
    "@type": "Distribution",
    "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-26/distribution/csv",
    "title": "GSA Federal Building Energy Usage Data 2026 CSV",
    "description": "CSV distribution containing aggregate annual energy usage data for selected GSA-managed federal buildings during FY26. The distribution includes summary-level information on electricity, natural gas, steam, and chilled water.",
    "downloadURL": "https://www.gsa.gov/datasets/federal-building-energy-usage-2026/download.csv",
    "describedBy": {
          "@type": "Distribution",
          "title": "CSV Data Dictionary",
          "accessURL": "https://www.gsa.gov/data/energy/dictionary"
    },
    "format": "CSV",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "issued": "2026-02-01",
    "modified": "2026-07-15",
    <mark>"accessRestriction": {</mark>
      <mark>"@type": "AccessRestriction",</mark>
      <mark>"restrictionStatus": "Unrestricted",</mark>
      <mark>"specificRestriction": null,</mark>
      <mark>"restrictionNote": "This distribution is publicly available without access restrictions."</mark>
    <mark>},</mark>
    <mark>"rights": ["This distribution is publicly accessible, available at no cost, and provided in an open, machine-readable format. It may be copied, published, distributed, transmitted, cited, and adapted consistent with the stated license."],</mark>
    <mark>"useRestriction": {</mark>
      <mark>"@type": "UseRestriction",</mark>
      <mark>"restrictionStatus": "Unrestricted"</mark>
      <mark>},</mark>
    <mark>"cuiRestriction": null</mark>
  }</code></pre>

  ### DataService {#dataservice}

  The DataService class enables the representation of live data connections and automated processing functions served via APIs or similar services-based mechanisms. These APIs may receive or process data from assets defined in the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class.

  *Note: Agencies should use the DataService class to describe services that provide access to* ***multiple*** *datasets. Services that provide access to a* ***single*** *dataset should instead be represented using the* [*Distribution*](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/) *class.*[^92]

  Although M-25-05 does not explicitly define requirements for data services, Table 6 below identifies the minimum recommended properties agencies should define under the DataService class based on DCAT-US v3.0 requirements or recommended best practices. The property links point to the [full technical reference documentation](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service) for the DataService class, which provides detailed instructions for how each property should be populated.

  **Table 6: Minimum Recommended Properties for DataService Class**

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Property**</th><th scope="col" markdown="span">**Justification**</th><th scope="col" markdown="span">**Purpose**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">[title](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--title)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0</td>
  <td markdown="span">Provides the formal human-readable name of the data service. Example: “Federal Employment Data API”</td>
  </tr>
  <tr>
  <td markdown="span">[contactPoint](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--contactPoint)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0</td>
  <td markdown="span">Identifies the legal entity, office or person that questions about the data service can be directed to.</td>
  </tr>
  <tr>
  <td markdown="span">[publisher](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--publisher)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0</td>
  <td markdown="span">Identifies the publishing agency or organization using the [Organization](https://resources.data.gov/standards/catalog/dcat-us-3/agents/#organization) class.</td>
  </tr>
  <tr>
  <td markdown="span">[endpointURL](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--endpointURL)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0</td>
  <td markdown="span">Provides the web location of the data service endpoint.</td>
  </tr>
  <tr>
  <td markdown="span">[endpointDescription](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--endpointDescription)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Links to machine-readable technical documentation for the data service, such as an API specification, OpenAPI file, or other service documentation.</td>
  </tr>
  <tr>
  <td markdown="span">[servesDataset](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--servesDataset)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the datasets the data service provides access to, using the [Dataset](https://resources.data.gov/resources/dcat-us-3-dataset/) class.</td>
  </tr>
  <tr>
  <td markdown="span">[accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--accessRights)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="1">

  Describes who is authorized to use the data service and any applicable access conditions.

  Example: “This data service is open to any individual with a valid [login.gov](http://login.gov) account.”

  </td>
  </tr>
  <tr>
  <td markdown="span">[rights](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--rights)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Provides supplemental rights-related information not covered by accessRights above.</td>
  </tr>
  <tr>
  <td markdown="span">[modified](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--modified)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Indicates the date of the most recent update to the data service. Example: “2026-06-11”</td>
  </tr>
  <tr>
  <td markdown="span">[rightsHolder](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--rightsHolder)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies all organizations that hold rights to the data service.</td>
  </tr>
  <tr>
  <td markdown="span">[license](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--license)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="1">

  Indicates the license that governs how the data service can be used or reused.

  Example:

  “[https://creativecommons.org/publicdomain/1.0](https://creativecommons.org/publicdomain/zero/1.0/)"

  </td>
  </tr>
  <tr>
  <td markdown="span">[description](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--description)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="1">

  Provides a narrative summary describing the purpose, function, and scope of the service.

  Example: “Live access to federal employment data.”

  </td>
  </tr>
  </tbody>
  </table>

  #### Recommended Implementation Practices {#recommended-implementation-practices-4}

  Agencies should consider the following practices to avoid common implementation issues when populating the DataService class:

  - **Maintain Current** [**endpointDescription**](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--endpointDescription): Agencies should ensure that the description is clear, accurate, and up to date to facilitate seamless access for researchers and the public.
  - **Keep** [**servesDataset**](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--servesDataset) **Relationships Current**: Agencies should update this property whenever the datasets accessible through the data service change. Maintaining current dataset-service relationships helps users understand the scope of the service and reduces confusion when datasets are added, removed, renamed, or deprecated.
  - **Provide Explicit Access Guidance**: Agencies should use plain, clear language for [**accessRights and rights**](https://resources.data.gov/standards/catalog/dcat-us-3/quality-governance/#data-service--accessRights) properties. Agencies should be as specific as possible regarding authorization requirements and the types of data accessible, ensuring users have a clear understanding of usage parameters. Clear access and rights descriptions improve transparency, reduce user confusion, and support consistent governance across the agency’s data inventory.

  ### DatasetSeries {#datasetseries}

  The **DatasetSeries** class enables agencies to represent datasets that are published separately but share a common thematic, structural, or functional relationship. This class is particularly useful for managing collections such as annual reports, recurring observational data, or periodic statistical releases, where each dataset maintains its own identity while contributing to a broader series.

  *Note: For scenarios where multiple datasets are grouped into a data asset, and they are not a dataset series, agencies should use the* [*subject*](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#subject) *or* [*theme*](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#theme) *properties in the* [*Dataset*](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) *class to represent the common grouping.*

  There are no M-25-05 requirements directly applicable to this class. However, agencies should use it to reduce duplication, improve discoverability, and support more consistent inventory management across the agency’s comprehensive data inventory. For datasets that are part of a dataset series, agencies only need to define the datasets within the [seriesMember](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#seriesMember) property (see below); they do **not** need to be defined within the [dataset](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#dataset) property for the catalog.

  Table 7 below outlines the minimum recommended properties for this class, categorizing them by DCAT-US v3.0 requirements and recommended best practices. The property links point to the [full technical reference documentation](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/) for the DatasetSeries class, which provides detailed instructions for how each property should be populated.

  **Table 7: Minimum Recommended Properties for DatasetSeries Class**

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Property**</th><th scope="col" markdown="span">**Justification**</th><th scope="col" markdown="span">**Purpose**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">[title](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#title)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0</td>
  <td markdown="span">Provides a descriptive name indicating the series’ common theme. Example: “Federal Weather Data”</td>
  </tr>
  <tr>
  <td markdown="span">[description](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#description)</td>
  <td markdown="span">Mandatory per DCAT-US v3.0</td>
  <td markdown="span">Provides a narrative summary of the data included in the series. Example: “Weather data for the northeastern United States from 2010-2025.”</td>
  </tr>
  <tr>
  <td markdown="span">[temporal](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#temporal)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Defines the time periods covered by the dataset series using the [PeriodOfTimeClass](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time).</td>
  </tr>
  <tr>
  <td markdown="span">[spatial](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#spatial)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Defines the geographic scope of the series. Example: “United States”</td>
  </tr>
  <tr>
  <td markdown="span">[first](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#first)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the initial dataset in the series, using the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class.</td>
  </tr>
  <tr>
  <td markdown="span">[last](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#last)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the most recent dataset in the series, using the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class.</td>
  </tr>
  <tr>
  <td markdown="span">[seriesMember](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#seriesMember)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Provides a comprehensive array of all datasets included in the series, using the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class.</td>
  </tr>
  <tr>
  <td markdown="span">[modified](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#modified)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Indicates the date of the most recent update to the series. Example: “2026-06-11”</td>
  </tr>
  <tr>
  <td markdown="span">[publisher](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#publisher) / [contactPoint](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#contactPoint) (use one or both)</td>
  <td markdown="span">Best Practice</td>
  <td markdown="span">Identifies the responsible entity using the [Agent](https://resources.data.gov/standards/catalog/dcat-us-3/agents/) or [Kind](https://resources.data.gov/standards/catalog/dcat-us-3/agents/#kind) class.</td>
  </tr>
  </tbody>
  </table>

  #### Recommended Implementation Practices {#recommended-implementation-practices-5}

  Agencies should consider the following practices to avoid common implementation issues when populating the DatasetSeries class.

  - **Maintain Consistent Updates**: Agencies should update the [last](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#last) property whenever a new dataset is added to the series. Maintaining this property helps users accurately understand the time period or sequence covered by the series and the risk of miscitation.
  - **Ensure Data Integrity in** [**seriesMember**](https://resources.data.gov/standards/catalog/dcat-us-3/dataset-series/#seriesMember): Agencies should ensure that this property accurately reflects the full set of datasets included in the series. Keeping the list current helps users discover newly released datasets more quickly and understand how individual datasets relate to the broader series.

  ### Full Inventory JSON Example {#full-inventory-json-example}

  The following example illustrates a JSON record containing the minimum recommended properties for the core classes in DCAT-US v3.0. For simplicity, the example represents a GSA data catalog with the following components:

  - Two datasets containing federal building energy usage information forFY25 and FY26, respectively.
  - A dataset series that groups the two datasets.
  - A data service that provides access to both datasets.

  The primary purpose of this example is to demonstrate how properties should be populated in each class. Because multiple classes reference the same underlying Datasets, the example may seem repetitive. Agencies are encouraged to reference this example in conjunction with the additional JSON examples available in the [**DCAT-US GitHub**](https://github.com/GSA/dcat-us/tree/main/jsonschema/examples) repository[^93] and [Appendix F](#appendix-f-additional-json-examples).

  When submitting a completed JSON to [harvest.data.gov](http://harvest.data.gov), agencies can also reference the information on [this page](https://resources.data.gov/resources/harvester-what-is-harvesting/) to troubleshoot any errors encountered during the submission process.

  **Example 8: All Core Classes**

      {
        "@type": "Catalog",
        "conformsTo": {
          "@type": "Standard",
          "title": "DCAT-US v3.0"
        },
        "title": "GSA Public Buildings Service Data Catalog",
        "homepage": {
          "@type": "Document",
          "title": "GSA PBS Data Catalog Homepage",
          "accessURL": "https://www.gsa.gov/data"
        },
        "issued": "2016-01-15",
        "modified": "2026-07-01",
        "rights": ["Data within this catalog may be subject to individual dataset licensing terms, access restrictions, and applicable federal disclosure requirements."],
        "spatial": {
          "@type": "Location",
          "label": "United States"
        },
        "themeTaxonomy": [
          {
            "@type": "ConceptScheme",
            "title": "Data.gov Theme Taxonomy",
            "identifier": "https://resources.data.gov/categories/"
          },
          {
            "@type": "ConceptScheme",
            "title": "GSA Public Buildings Service Data Themes",
            "identifier": "https://www.gsa.gov/data"
          }
        ],
        "language": "en",
        "publisher": {
          "@type": "Organization",
          "name": "U.S. General Services Administration"
        },
        "dataset": [
          {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-2026",
            "title": "GSA Federal Building Energy Usage Data 2026",
            "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY26. Includes non-sensitive summary information on electricity, natural gas, steam, chilled water, and other energy consumption categories. The data supports the federal real property portfolio.",
            "contactPoint": {
              "@type": "Kind",
              "fn": "GSA Public Buildings Service Data Support",
              "hasEmail": "mailto:public-inquiries@gsa.gov"
            },
            "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26",
            "describedBy": {
              "@type": "Distribution",
              "title": "JSON Data Dictionary",
              "accessURL": "https://www.gsa.gov/datasets/energy/dictionary.json"
            },
            "license": "https://creativecommons.org/publicdomain/zero/1.0/",
            "inventoried": "2026-02-01",
            "modified": "2026-07-15",
            "spatial": {
              "@type": "Location",
              "label": "United States"
            },
            "accessRights": "Public",
            "rights": ["This data asset is an open government data asset. It is not exempt from disclosure under FOIA. It is a public data asset eligible for disclosure in the Federal Data Catalog. It is available at no cost to the public in an open format and under an open license. The data may be copied, published, distributed, transmitted, cited, or adapted consistent with the stated license."],
            "accessRestriction": {
              "@type": "AccessRestriction",
              "restrictionStatus": "Unrestricted",
              "specificRestriction": null,
              "restrictionNote": "This dataset is publicly available without access restrictions."
            },
            "useRestriction": null,
            "cuiRestriction": null,
            "rightsHolder": [
              {
                "@type": "Organization",
                "name": "U.S. General Services Administration"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "U.S. General Services Administration"
            },
            "contributor": [
              {
                "@type": "Agent",
                "name": "GSA Public Buildings Service"
              }
            ],
            "keyword": [
              "GSA",
              "Public Buildings Service",
              "federal buildings",
              "energy usage",
              "sustainability",
              "facilities",
              "real property"
            ],
            "landingPage": {
              "@type": "Document",
              "title": "GSA Building Energy Usage Data",
              "accessURL": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26"
            },
            "temporal": {
              "@type": "PeriodOfTime",
              "startDate": "2025-10-01",
              "endDate": "2026-09-30"
            },
            "theme": [
              {
                "@type": "Concept",
                "prefLabel": "Energy"
              },
              {
                "@type": "Concept",
                "prefLabel": "Facilities"
              }
            ],
            "distribution": [
              {
                "@type": "Distribution",
                "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26/distribution/csv",
                "title": "GSA Federal Building Energy Usage Data 2026 CSV",
                "description": "CSV distribution containing aggregate, non-sensitive annual energy usage data for selected GSA-managed federal buildings during FY26.",
                "downloadURL": "https://www.gsa.gov/datasets/energy-usage/federal-bldg-energy-usage-26.csv",
                "describedBy": {
                  "@type": "Distribution",
                  "title": "JSON Data Dictionary",
                  "accessURL": "https://www.gsa.gov/datasets/energy/dictionary.json"
                },
                "mediaType": "text/csv",
                "format": "CSV",
                "license": "https://creativecommons.org/publicdomain/zero/1.0/",
                "issued": "2026-02-01",
                "modified": "2026-07-15",
                "accessRestriction": {
                  "@type": "AccessRestriction",
                  "restrictionStatus": "Unrestricted",
                  "specificRestriction": null,
                  "restrictionNote": "Publicly available without access restrictions."
                },
                "rights": ["This distribution is publicly accessible, available at no cost, and provided in an open format. It may be copied, published, distributed, transmitted, cited, and adapted consistent with the stated license."],
                "useRestriction": null,
                "cuiRestriction": null
              }
            ]
          },
          {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2025",
            "title": "GSA Federal Building Energy Usage Data 2025",
            "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY25. Includes non-sensitive summary information on electricity, natural gas, steam, chilled water, and other energy consumption categories. The data supports the federal real property portfolio.",
            "contactPoint": {
              "@type": "Kind",
              "fn": "GSA Public Buildings Service Data Support",
              "hasEmail": "mailto:public-inquiries@gsa.gov"
            },
            "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25",
            "describedBy": {
              "@type": "Distribution",
              "title": "JSON Data Dictionary",
              "accessURL": "https://www.gsa.gov/datasets/energy/dictionary.json"
            },
            "license": "https://creativecommons.org/publicdomain/zero/1.0/",
            "inventoried": "2025-10-01",
            "modified": "2026-07-15",
            "spatial": {
              "@type": "Location",
              "label": "United States"
            },
            "accessRights": "Public",
            "rights": ["This data asset is an open government data asset. It is not exempt from disclosure under FOIA. It is a public data asset eligible for disclosure in the Federal Data Catalog. It is available at no cost to the public in an open format and under an open license. The data may be copied, published, distributed, transmitted, cited, or adapted consistent with the stated license."],
            "accessRestriction": {
              "@type": "AccessRestriction",
              "restrictionStatus": "Unrestricted",
              "specificRestriction": null,
              "restrictionNote": "This dataset is publicly available without access restrictions."
            },
            "useRestriction": null,
            "cuiRestriction": null,
            "rightsHolder": [
              {
                "@type": "Organization",
                "name": "U.S. General Services Administration"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "U.S. General Services Administration"
            },
            "contributor": [
              {
                "@type": "Agent",
                "name": "GSA Public Buildings Service"
              }
            ],
            "keyword": [
              "GSA",
              "Public Buildings Service",
              "federal buildings",
              "energy usage",
              "sustainability",
              "real property"
            ],
            "landingPage": {
              "@type": "Document",
              "title": "GSA Building Energy Usage Data",
              "accessURL": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25"
            },
            "temporal": {
              "@type": "PeriodOfTime",
              "startDate": "2024-10-01",
              "endDate": "2025-09-30"
            },
            "theme": [
              {
                "@type": "Concept",
                "prefLabel": "Energy"
              },
              {
                "@type": "Concept",
                "prefLabel": "Facilities"
              }
            ],
            "distribution": [
              {
                "@type": "Distribution",
                "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25/distribution/csv",
                "title": "GSA Federal Building Energy Usage Data 2025 CSV",
                "description": "CSV distribution containing aggregate, non-sensitive annual energy usage data for selected GSA-managed federal buildings during FY25.",
                "downloadURL": "https://www.gsa.gov/datasets/energy-usage/federal-bldg-energy-usage-25.csv",
                "describedBy": {
                  "@type": "Distribution",
                  "title": "JSON Data Dictionary",
                  "accessURL": "https://www.gsa.gov/datasets/energy/dictionary.json"
                },
                "mediaType": "text/csv",
                "format": "CSV",
                "license": "https://creativecommons.org/publicdomain/zero/1.0/",
                "issued": "2025-02-01",
                "modified": "2025-07-15",
                "accessRestriction": {
                  "@type": "AccessRestriction",
                  "restrictionStatus": "Unrestricted",
                  "specificRestriction": null,
                  "restrictionNote": "Publicly available without access restrictions."
                },
                "rights": ["This distribution is publicly accessible, available at no cost, and provided in an open format. It may be copied, published, distributed, transmitted, cited, and adapted consistent with the stated license."],
                "useRestriction": null,
                "cuiRestriction": null
              }
            ]
          }
        ],
        "service": [
          {
            "@type": "DataService",
            "@id": "https://www.gsa.gov/apis/federal-building-energy-usage",
            "title": "GSA Federal Building Energy Usage API",
            "description": "API providing access to public aggregate federal building energy usage data for selected GSA-managed federal buildings, supporting queries by fiscal year, region, building type, energy category, and summary indicator.",
            "contactPoint": {
              "@type": "Kind",
              "fn": "GSA API Support",
              "hasEmail": "mailto:api-support@gsa.gov"
            },
            "publisher": {
              "@type": "Organization",
              "name": "U.S. General Services Administration"
            },
            "endpointURL": ["https://api.gsa.gov/public-buildings/energy-usage/v1"],
            "endpointDescription": ["https://api.gsa.gov/energy-usage/v1/openapi.json"],
            "servesDataset": [
              {
                "@type": "Dataset",
                "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25",
                "title": "GSA Federal Building Energy Usage Data 2025",
                "contactPoint": {
                  "@type": "Kind",
                  "fn": "GSA Public Buildings Service Data Support",
                  "hasEmail": "mailto:public-inquiries@gsa.gov"
                },
                "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY25.",
                "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25"
              },
              {
                "@type": "Dataset",
                "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-26",
                "title": "GSA Federal Building Energy Usage Data 2026",
                "contactPoint": {
                  "@type": "Kind",
                  "fn": "GSA Public Buildings Service Data Support",
                  "hasEmail": "mailto:public-inquiries@gsa.gov"
                },
                "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY26.",
                "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26"
              }
            ],
            "accessRights": "This DataService provides public access to aggregate GSA federal building energy usage data. Users may be subject to standard API rate limits and may need to obtain an API key for usage tracking.",
            "rights": ["Users may copy, cite, transmit, and adapt API outputs consistent with the licenses listed in the datasets' individual distributions."],
            "modified": "2026-07-15",
            "rightsHolder": [
              {
                "@type": "Organization",
                "name": "U.S. General Services Administration"
              }
            ],
            "license": "https://creativecommons.org/publicdomain/zero/1.0/"
          }
        ],
        "datasetSeries": {
          "@type": "DatasetSeries",
          "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-series",
          "title": "GSA Federal Building Energy Usage Data Series",
          "description": "Annual public aggregate datasets describing energy usage for selected GSA-managed federal buildings. The series groups fiscal-year datasets covering electricity, natural gas, steam, and chilled water.",
          "contactPoint": {
            "@type": "Kind",
            "fn": "GSA Public Buildings Service Data Support",
            "hasEmail": "mailto:public-inquiries@gsa.gov"
          },
          "publisher": {
            "@type": "Organization",
            "name": "U.S. General Services Administration"
          },
          "issued": "2024-10-01",
          "modified": "2026-07-15",
          "temporal": [
            {
              "@type": "PeriodOfTime",
              "startDate": "2024-10-01",
              "endDate": "2026-09-30"
            }
          ],
          "spatial": [
            {
              "@type": "Location",
              "label": "United States"
            }
          ],
          "first": {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2025",
            "title": "GSA Federal Building Energy Usage Data 2025",
            "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY25.",
            "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25",
            "publisher": {
              "@type": "Organization",
              "name": "U.S. General Services Administration"
            },
            "contactPoint": {
              "@type": "Kind",
              "fn": "GSA Public Buildings Service Data Support",
              "hasEmail": "mailto:public-inquiries@gsa.gov"
            }
          },
          "last": {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2026",
            "title": "GSA Federal Building Energy Usage Data 2026",
            "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY26.",
            "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26",
            "publisher": {
              "@type": "Organization",
              "name": "U.S. General Services Administration"
            },
            "contactPoint": {
              "@type": "Kind",
              "fn": "GSA Public Buildings Service Data Support",
              "hasEmail": "mailto:public-inquiries@gsa.gov"
            }
          },
          "seriesMember": [
            {
              "@type": "Dataset",
              "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-2025",
              "title": "GSA Federal Building Energy Usage Data 2025",
              "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY25.",
              "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-25",
              "publisher": {
                "@type": "Organization",
                "name": "U.S. General Services Administration"
              },
              "contactPoint": {
                "@type": "Kind",
                "fn": "GSA Public Buildings Service Data Support",
                "hasEmail": "mailto:public-inquiries@gsa.gov"
              }
            },
            {
              "@type": "Dataset",
              "@id": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26",
              "title": "GSA Federal Building Energy Usage Data 2026",
              "description": "Aggregate public data describing annual energy usage for selected GSA-managed federal buildings during FY26.",
              "identifier": "https://www.gsa.gov/datasets/federal-bldg-energy-usage-26",
              "publisher": {
                "@type": "Organization",
                "name": "U.S. General Services Administration"
              },
              "contactPoint": {
                "@type": "Kind",
                "fn": "GSA Public Buildings Service Data Support",
                "hasEmail": "mailto:public-inquiries@gsa.gov"
              }
            }
          ]
        }
      }

  ## Step 5: Update Data Inventory and Catalog {#step-5-update-data-inventory-and-catalog}

  Per M-25-05, agencies are required to update their comprehensive data inventories according to the following protocols:

  1. **Adding new data assets** to the inventory **within 90 days of their creation**.
  2. **Updating the inventory annually** to reflect changes to existing data assets and accommodate updates to **DCAT-US standards** or [**Data.gov**](http://data.gov) **functional requirements.**

  In addition to these required activities, agencies may need to remove data assets from [Data.gov](http://data.gov) or revise their categorization when an asset’s status changes (e.g., shift from public to restricted or non-public status) to mitigate security and privacy risks.

  The following guidance supports agencies in managing the addition, modification, and removal of data assets in [Data.gov](http://data.gov).

  ### Adding New Data Assets {#adding-new-data-assets}

  Agencies can add new data assets by following Step 4 above. Agencies should utilize the following best practices to ensure new assets are inventoried with maximum interoperability and minimal technical debt, fostering a sustainable, future-ready approach.

  #### Avoid Duplication {#avoid-duplication}

  Before adding a new asset, data stewards should determine whether the asset is truly “new.” Agencies often have data assets that are transformed through a pipeline into curated or public-facing versions. In these cases, agencies should only inventory the original asset and use metadata to explain that multiple versions exist.

  The **DCAT-US v3.0 schema** includes properties that allow agencies to identify alternative versions of a data asset .[^94]

  #### Capture Metadata Beyond Required Fields {#capture-metadata-beyond-required-fields}

  Data stewards should avoid limiting metadata to only the fields required by M-25-05 or [Data.gov](http://data.gov). Additional metadata can improve usability, discoverability, and long-term inventory management.

  For example, while the [keyword](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#keyword) property may not be required, agencies widely use it to associate relevant words and terms with a data asset, making it easier for the public to find on [Data.gov](http://data.gov) searches.

  #### Link Related Datasets {#link-related-datasets}

  When adding a new data asset, data stewards should consider how it relates to existing assets in the inventory. For example, if an agency publishes budget data for a new fiscal year, it should link that asset to budget datasets from prior fiscal years where appropriate.

  Establishing these relationships at the time of publication can reduce future rework and improve the public’s ability to understand related datasets as a coherent collection.

  ### Updating Existing Data Assets {#updating-existing-data-assets}

  Updates to inventoried data assets generally fall into three categories:

  - **Metadata Modifications**: Systematically adjusting dataset variables, hosting location(s), available formats, descriptions, or keywords tagging to ensure continued findability.
  - **Usage and Access Rights**: Periodically reviewing licenses, rights holders, ownership details, points of contact, access rights, or access restrictions.
  - **Compliance & Schema Evolution**: Integrating newly released DCAT-US v3.0 properties or the deprecation of obsolete properties to remain aligned with federal standards (e.g., Data.gov).

  Agencies should use a holistic review process when updating inventory records. Metadata elements within a JSON file may be interdependent, particularly across the Catalog, Dataset, and Distribution classes. For example, a change to a data asset’s license or format may affect whether it qualifies as an open government data asset, which may in turn affect access restrictions associated with it. These dependencies may not always be identified through [Data.gov](https://harvest.data.gov/validate/)’s technical validation process. Agencies should therefore review potential downstream impacts before submitting updated metadata.

  Agencies can review and update data assets following the hierarchical structure that the JSON is organized in, as described below:

  1. **Catalog class**: Update the [modified](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/#modified) property within the [Catalog](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/) class to reflect the precise timestamp of the metadata revision. Make any other adjustments as needed.
  2. **Dataset class**: Modify dataset-level properties as appropriate. Upon completion, conduct a cross-class review to assess necessary revisions to the associated distributions.
  3. **Distribution class**: Update distribution-level properties as needed, including access URLs, formats, licences, and restrictions.
  4. **Submission and Validation**: Revise DatasetSeries and DataService classes as needed, along with any supporting classes. Submit the revised metadata to the [Data.gov harvester](https://harvest.data.gov/validate/) and adjudicate issues identified during the validation process.

  ### Data Asset Retirement and Delisting {#data-asset-retirement-and-delisting}

  The retirement or delisting of a data asset from [Data.gov](http://data.gov) is a standard lifecycle management event that may be necessitated by the following reasons:

  - **Reclassification to Non-Public**: Occurs when a formal review by the agency’s SAOP, FOIA officer, Office of General Counsel, or another appropriate authority determines a data asset no longer meets public disclosure criteria.
  - **Obsolescence or Programmatic Shifts**: Occurs when program retirement, shifting mission priorities, or conclusion of a data collection effort renders the asset obsolete or unnecessary for public use.
  - **Technical Incompatibility**: Occurs when hosting infrastructure or file formats become legacy and can no longer be supported. In such cases, agencies should attempt to publish a simplified, static, or otherwise accessible version of the data asset prior to full retirement.

  To maintain public trust and mitigate reputational risk, agencies should exercise particular care when removing data assets from [Data.gov](http://data.gov). Removing data assets without adequate acknowledgement may give the impression that information is being withheld. Agencies can reduce this risk by providing clear, timely, and transparent explanations for removal decisions.

  Where applicable, agencies should detail a data asset’s legally defined retention period in advance so the public understands when an asset may be retired or delisted. This information may be communicated through an agency website notice, public statement, or within the asset’s metadata, such as in the [description](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#description) or [rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights) properties,[^95] using language such as the following (see highlighted portion below):

  **Example 9: Data Asset with Defined Retention Period**

  <pre><code>{
    "title": "GSA AI Training Program Participation",
    "description": "An aggregation of information on anonymized participants in GSA's AI training program.",
    <mark>"rights": ["This data will be retained for 7 years and deleted on September 30, 2033."</mark>],
    "publisher": {
      "name": "General Services Administration"
    },
    <mark>"contactPoint": {</mark>
      <mark>"fn": "Data Support",</mark>
      <mark>"hasEmail": "mailto:public-inquiries@gsa.gov"</mark>
    },
    "identifier": "https://gsa.gov/datasets/example-001"
  }</code></pre>

  Agencies should also ensure that each relevant data asset includes a clearly defined [contactPoint](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#contactPoint) (see example above) so members of the public can submit questions, via email or another method, about the asset’s retention period, removal, or access status. Providing an appropriate contact mechanism promotes transparency and understanding of the agency’s decision.

  ## Guidance for Geospatial Data Providers {#guidance-for-geospatial-data-providers}

  It is important to remember that DCAT-US v3.0 is designed as a high-level, general-purpose discovery catalog. At this time, the schema profile is not built to hold the deep, granular geographic details found inside native geospatial metadata files, such as the multiple versions of ISO 19115 or Federal Geographic Data Committee (FGDC) Content Standard for Digital Geospatial Metadata (CSDGM) formatted metadata.

  To prevent duplication of effort, you do not need to recreate your agency’s dense spatial metadata elements inside the DCAT-US v3.0 record. Instead, you can reference the more robust native metadata file within the DCAT-US v3.0 record for the representative data asset. Use this document along with the two specific crosswalks referenced below in Steps 1 and 2 to act as filters to represent the core content requirements throughout the geospatial data lifecycle.[^96]

  ### Step 1: Filter Structure using FGDC Metadata Standards Technical Crosswalk {#step-1-filter-structure-using-fgdc-metadata-standards-technical-crosswalk}

  The primary intent of the FGDC Metadata Standards Technical Crosswalk[^97] is to map the mandatory and recommended core elements of DCAT-US v3.0, to the ISO 19115-1, National Archives and Records Administration (NARA) Metadata Guidance, and CSDGM elements. It helps ensure inclusion of mandatory and recommended properties applicable for geographic data produced using ISO 19115 or CSDGM when using the high-level structure of the DCAT-US v3.0 schema profile. A visualization and definitions of these core elements are included in the FGDC Standards Working Group (SWG) report entitled Streamlining Federal Metadata Requirements in Preparation for DCAT-US v3.0 Implementation (2026).

  ### Step 2: Include OMB M-25-05 Properties {#step-2-include-omb-m-25-05-properties}

  Use information from the OMB M-25-05 to DCAT-US v3.0 Crosswalk (see Table 2 in [Step 4](#step-4-catalog-data-assets-and-submission-to-datagov)) to capture mandatory federal compliance information. This ensures that metadata properties and details specified by the OMB M-25-05 guidance are placed in the appropriate locations with the DCAT-US v3.0 records for each geographic data asset.

  ### Step 3: Provide Linkage to Geographic Metadata and Feature Catalog Files {#step-3-provide-linkage-to-geographic-metadata-and-feature-catalog-files}

  Instead of replicating detailed attributes inside the DCAT record, provide direct linkages to your agency’s existing files using these two specific properties:

  - **For geographic metadata**: Use the [metadataDistribution](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#metadataDistribution) property to link the detailed geographic metadata file for the data asset.
  - **For feature catalogs**: Use the [describedBy](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#describedBy) property to link feature catalog or data dictionary files to the DCAT record

  ## Appendix A: M-25-05 Key Requirements and Actions[^98] {#appendix-a-m-25-05-key-requirements-and-actions}

  OMB Memorandum M-25-05, *Phase 2 Implementation of the Foundations for Evidence-Based Policymaking Act of 2018: Open Government Data Access and Management Guidance*, focuses on improving federal data access, management, transparency, and usability. The memorandum directs agencies to treat federal data as a strategic asset by strengthening open data practices, improving data inventories, and expanding public access to high-value government data while maintaining appropriate safeguards for privacy, confidentiality, and security.

  **Key requirements include**:

  **Open by Default**: Agencies must maintain data assets in open formats and ensure public data assets are available as open government data assets under an open license, unless otherwise restricted by law or policy.

  **Comprehensive Data Inventory**: Agencies must develop and maintain a comprehensive inventory of all agency data assets and ensure those inventories are represented using updated metadata standards.

  **Federal Data Catalog Alignment**: Agencies must submit public data assets, or links to those assets, to the Federal Data Catalog, which serves as the central public access point for government data.

  **Open Data Plan**: Agencies must update their Information Resource Management Strategic Plans to include an open data plan describing how they will meet open data obligations, collect data in open formats, measure data usage, engage data users, and improve data quality and availability.[^99]

  **Public Engagement**: Agencies must engage external stakeholders, including businesses, researchers, academia, nonprofits, state and local governments, and the public, to better understand how government data is used and how access and usability can be improved.

  ## Appendix B: Illustrative Examples of Data Governance Structure {#appendix-b-illustrative-examples-of-data-governance-structure}

  The following figures represent organizational structures for the data governance bodies within several federal agencies.

  **Figure 5: EPA Data Governance Structure**

  ![Organization chart of EPA data governance, centered on the Chief Data Officer.](../../assets/img/dcat-us-3-implementation/figure-05a.png)

  <details markdown="1">
  <summary>Text description of Figure 5, part 1</summary>

  - EPA Chief Information Officer (CIO). Advisers: CIO Strategic Advisory Council (Comprised of SIOs) (CIO-SAC).
  - Chief Data Officer (CDO) advises the CIO.
  - CDO Advisors work with the CDO: Advise/Assist the CDO. Assist with setting strategic direction, reviewing working groups progress and setting the agenda for the DGAC. Sponsors and working groups.
  - The CDO reports DGAC activities and recommendations to the CIO-SAC and to IMOs & IRMBCs.
  - Data Governance Advisory Council (DGAC), Comprised of the Data Officers, works with the CDO. Participates, Represents Local Program/Regional Office & Leads Activities & Working Groups.
  - Working Groups (Co-Chaired by DGAC Member) connect to the DGAC and, by a dotted line, to the CDO Advisors.
  - Data Governance Community Examples: Data Sponsors/Data Stewards. Advise/Assist, Collaborate on Governance & Standards & DGAC Initiatives.

  </details>

  ![Second part of the EPA data governance chart, showing how Data Officers connect to the council and to other offices.](../../assets/img/dcat-us-3-implementation/figure-05b.png)

  <details markdown="1">
  <summary>Text description of Figure 5, part 2</summary>

  - Data Officers participate in the Data Governance Advisory Council (DGAC), Comprised of the Data Officers. Participates, Represents Local Program/Regional Offices & Leads Activites & Working Groups.
  - Data Officers: Participates, Represents Local Program/Regional Office & Leads Working Groups.
  - Data Officers collaborate & share with the Senior Information Official (SIO), IMOs or IRMBCs, and Colleagues in Program Office or Region.

  </details>

  **Figure 6: Department of Labor (DOL) Data Board**[^100]

  ![Organization chart of the Department of Labor Data Board.](../../assets/img/dcat-us-3-implementation/figure-06.png)

  <details markdown="1">
  <summary>Text description of Figure 6</summary>

  - Secretary of Labor: Adopts DOL Data Strategies.
  - DOL Data Board: Cross-DOL forum for collaboration on data strategy, management, policy, governance, stewardship, architecture, and utilization. Members: Chief Data Officer (CDO), Chair; Chief Information Officer (CIO), Vice-Chair; Agency Data Board Designees, At least GS-12 or equivalent.
  - Deputy Secretary: Implements adopted strategies through memoranda.
  - Solicitor of Labor: Provides legal advice on implementation and administration.
  - Agency Heads: Provides assignments and select designees to the Data Board.
  - 20 DOL Agency and Office Representatives: Bureau of Internal Labor Affairs, Bureaus of Labor Statistics, Employee Benefits Security Administration, Employment & Training Administration, Mine Safety & Health Administration, Occupational Safety & Health Administration, Office of Congressional & Intergovernmental Affairs, Office of Disability Employment Policy,Office of Federal Contract Compliance Programs, Office of Labor-Management Standards, Office of Public Affairs, Office of the Assistant Secretary for Administration & Management, Office of the Assistant Secretary for Policy, Office of the Chief Financial Officer, Office of the Chief Information Officer; Officer of Workers' Compensation Programs, Veterans' Employment & Training Services, and Wage & Hour Division.

  </details>

  ## Appendix C: Examples of Data Asset Types[^101] {#appendix-c-examples-of-data-asset-types}

  **Raw Data:** Observations or measurements collected from instruments, surveys, systems, or other sources with minimal processing beyond that required to preserve context, structure, and usability.

  Raw data typically serves as the initial input for analysis, modeling, or statistical processing.

  **Original Data** Quality-controlled observations or measurements in their most basic usable form that have not been summarized or synthesized.

  Original data often represent time-specific or location-specific measurements and may be disseminated in near real-time or retrospectively.

  **Processed Data (Derived Data)** Data that has been cleaned, transformed, aggregated, or otherwise modified from its original state to support analysis, reporting, or modeling.

  Examples include:

  - Aggregated datasets
  - Calculated indicators
  - Statistical tabulations

  **Operational Data** Data generated or used within systems and applications to support operational processes, workflows, or program administration.

  **Administrative/Business Data** Operational data often populates enterprise systems or internal applications.

  ## Appendix D: Stakeholder-Based Prioritization {#appendix-d-stakeholder-based-prioritization}

  The table below provides an example of stakeholder-based prioritization of data assets for inventorying developed by the Social Security Administration.

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**Priority**</th><th scope="col" markdown="span">**Release Reason**</th><th scope="col" markdown="span">**Description**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">1</td>
  <td markdown="span">Statutory or Policy Mandate</td>
  <td markdown="span">Release required by law or regulation.</td>
  </tr>
  <tr>
  <td markdown="span">2</td>
  <td markdown="span">Congressional Request</td>
  <td markdown="span">Specifically requested by Congress or a congressional committee.</td>
  </tr>
  <tr>
  <td markdown="span">3</td>
  <td markdown="span">White House or OMB Request</td>
  <td markdown="span">Requested by the White House or the Office of Management and Budget (OMB).</td>
  </tr>
  <tr>
  <td markdown="span">4</td>
  <td markdown="span">Oversight or Audit</td>
  <td markdown="span">Supports government oversight, audits, or accountability reviews.</td>
  </tr>
  <tr>
  <td markdown="span">5</td>
  <td markdown="span">Intergovernmental Collaboration</td>
  <td markdown="span">Aids cooperation or decision-making among federal, state, local, territorial, or tribal governments.</td>
  </tr>
  <tr>
  <td markdown="span">6</td>
  <td markdown="span">Influential Information</td>
  <td markdown="span">Used to produce information that shapes important government decisions or public policies.</td>
  </tr>
  <tr>
  <td markdown="span">7</td>
  <td markdown="span">FOIA Request</td>
  <td markdown="span">Often requested through Freedom of Information Act (FOIA) inquiries, indicating strong public or stakeholder interest.</td>
  </tr>
  <tr>
  <td markdown="span">8</td>
  <td markdown="span">Media Inquiry</td>
  <td markdown="span">Requested by news organizations or is relevant to current media coverage.</td>
  </tr>
  <tr>
  <td markdown="span">9</td>
  <td markdown="span">Public Interest</td>
  <td markdown="span">Addresses a topic that is important or relevant to the public.</td>
  </tr>
  <tr>
  <td markdown="span">10</td>
  <td markdown="span">Service Delivery</td>
  <td markdown="span">Directly helps provide a government service or benefit to the public.</td>
  </tr>
  <tr>
  <td markdown="span">11</td>
  <td markdown="span">Research or Analysis</td>
  <td markdown="span">Valuable for academic, scholarly, or policy research and analysis.</td>
  </tr>
  <tr>
  <td markdown="span">12</td>
  <td markdown="span">Historical or Archival Record</td>
  <td markdown="span">Preserves history or supports archival research.</td>
  </tr>
  <tr>
  <td markdown="span">13</td>
  <td markdown="span">AI Development</td>
  <td markdown="span">Used to develop, test, or evaluate AI systems or applications.</td>
  </tr>
  </tbody>
  </table>

  ## Appendix E: Illustrative Example of Data Asset Workflow {#appendix-e-illustrative-example-of-data-asset-workflow}

  Figures 7-10 below demonstrate how EPA carries out several interrelated data management activities, including defining and inventorying data assets, and categorizing them as public and open government data assets.

  **Figure 7: Identifying Data Assets**

  ![EPA flowchart titled Determining if Data is a Data Asset?](../../assets/img/dcat-us-3-implementation/figure-07.png)

  <details markdown="1">
  <summary>Text description of Figure 7</summary>

  1. Potential Data Asset Identified.
  2. Composed of structured or semi-structured data?
     - No: Data asset is unstructured per NIST internal Report 8496: Data Classification Concepts and Considerations for Improving Data Protection definitions as follows: Unstructured Data: Does not follow a detailed data model that is meaningful to a business domain. End Process.
     - Yes: Data assets is Structured or Semi-Structured per NIST Internal Report 8496: Data Classification Concepts and Considerations for Improving Data Protection definitions as follows: Structured Data: Follows a physical data model that describes how the data are represented and how representation should be interpreted. Clearly indicates what type of information each data field contains. Can be validated against the data model to ensure meaningfulness. Semi-Structured Data: Describes their own data model (self-describing). Expressed in formats like Extensible Markup Language (XML), JavaScript Object Notation (JSON) for sharing proprietary data sets, sensitive configurations and parameters, and other information.
  3. Logically grouped by similar characteristics, shared function/purpose or some other logical method?
     - No. Not a Data Asset. End Process.
     - Yes. Data Asset. Determine if a Data Asset Should Be in the Comprehensive Data Inventory.

  The chart also shows a stray label, "Yes. Data Asset", below the starting point.

  </details>

  **Figure 8: Determining Whether Data Asset Belongs in the Comprehensive Data Inventory**

  ![EPA flowchart for determining whether a data asset belongs in the Comprehensive Data Inventory.](../../assets/img/dcat-us-3-implementation/figure-08.png)

  <details markdown="1">
  <summary>Text description of Figure 8</summary>

  1. Is data asset created, collected, under control/direction or maintained by Agency? Yes: go to 2.
  2. Is data asset contained in a national security system? Yes: End Process - Do not include data asset in Comprehensive Data Inventory. No: go to 3.
  3. Is this a public data asset subject to disclosure under FOIA (5. U.S.C. 552)?
     - No. The entire data asset is exempt from disclosure under FOIA. Note: metadata elements in the Comprehensive Data Inventory that are redacted/withheld from disclosure under FOIA and cite the relevant FOIA exemption(s).
     - Yes. Part of the data asset is exempt from disclosure under FOIA. Note: metadata elements in the Comprehensive Data Inventory that are redacted/withheld from disclosure under FOIA and cite the relevant FOIA exemption(s).
     - Yes. Entire data asset is subject to disclosure under FOIA.
  4. All paths: Describe data asset in Comprehensive Data Inventory per OMB-approved metadata schema no later than 90 days after data asset creation/identification.
  5. Refer to is Data Asset Appropriate to Disseminate?

  </details>

  **Figure 9: Public Release Determination Process**

  ![EPA flowchart titled Is Data Asset Eligible & Appropriate for Dissemination?](../../assets/img/dcat-us-3-implementation/figure-09.png)

  <details markdown="1">
  <summary>Text description of Figure 9</summary>

  1. Is this a public data asset subject to disclosure under FOIA (5. U.S.C. 552)? No. Not eligible for dissemination in Federal Data Catalog: go to the note below. Yes: go to 2.
  2. Conduct security/privacy risk assessment in accordance with NIST SP 800-53 Rev 5 and NIST SP 800-37 Guidance and Agency IT/IM Directives.
  3. Does dissemination serve a public interest? No. Not appropriate for dissemination in Federal Data Catalog: go to the note below. Yes: go to 4.
  4. Consider the following: Does dissemination pose a risk to national security? Would dissemination adversely affect information security? Does dissemination pose a privacy or confidentiality risk? Could existing data when combined with data intended for dissemination pose privacy/confidentiality risk? Are there any intellectual property restrictions that affect the data or infringe on copyright or risk legal liability? Is dissemination prohibited by contract or other binding written agreement? Does the data asset involve rights held by other parties in compliance with applicable law, regulation and/or policy?
  5. If yes: Can information or disclosure limiting techniques be employed to allow partial dissemination? Yes: Next Step: Is the Public Data Asset an Open Government Asset? No. Not appropriate for dissemination in the Federal Data Catalog: go to the note below.

  Note: metadata elements in the Comprehensive Data inventory that are redacted/withheld from disclosure under FOIA and cite the relevant FOIA exemption(s). Include instructions for how researchers and other agencies may request access to non-public data asset for evidence-building purposes through the Standard Application Process (SAP) to satisfy requirements of Title II and Title III of the Evidence Act. End Process.

  </details>

  **Figure 10: Categorizing Public and Open Government Data Assets**

  ![EPA flowchart for categorizing public and open government data assets.](../../assets/img/dcat-us-3-implementation/figure-10.png)

  <details markdown="1">
  <summary>Text description of Figure 10</summary>

  1. Confirm Data Asset has the following attributes: Machine-readable; Open Format; Not Encumbered by Restrictions (e.g., registration requirements, access fees, etc.); Open Standards; Open License.
     - Yes, Disseminate Data Asset: go to 3.
     - No, consider converting data asset: go to 2.
  2. Conduct cost/benefit analysis to convert data asset to Open Government format: Consider cost, resource availability and other burden to convert and maintain the data asset in open format. Consider benefits and advantages to the agency from converting and maintaining the data asset. Consider the benefits to the public and other data users such as other agencies or researchers from converting and maintaining the data asset. Benefits Outweigh Costs?
     - Yes: Convert data asset to Open Government format. Disseminate Data Asset. Go to 3.
     - No. Not appropriate for dissemination in Federal Data Catalog. Note metadata elements in the Comprehensive Data inventory that are redacted/withheld from disclosure under FOIA and cite the relevant FOIA exemption(s). Include instructions for how researchers and other agencies may request access to non-public data asset for evidence building purposes. End Process.
  3. Publish URL or persistent identifier where the public may access data asset in Comprehensive Data Inventory. Note: If publishing a modified version of a data asset after applying data limiting techniques, consider listing the data asset as a separate entry from the original non-public or restricted data asset in the comprehensive data inventory.
  4. Update and include data asset comprehensive data inventory.

  </details>

  ## Appendix F: Additional JSON Examples {#appendix-f-additional-json-examples}

  Below are JSON examples for the DataService and DatasetSeries classes, with all minimum recommended properties defined.

  **Example 10: DataService Class**

      {
        "@type": "DataService",
        "@id": "https://www.gsa.gov/apis/federal-building-energy-usage",
        "title": "GSA Federal Building Energy Usage API",
        "description": "API providing access to public aggregate federal building energy usage data for selected GSA-managed federal buildings. The service supports queries by fiscal year, region, building type, energy category, and summary indicator.",
        "contactPoint": {
          "@type": "Kind",
          "fn": "GSA API Support",
          "hasEmail": "mailto:api-support@gsa.gov"
        },
        "publisher": {
          "@type": "Organization",
          "name": "U.S. General Services Administration"
        },
        "endpointURL": ["https://api.gsa.gov/public-buildings/energy/v1"],
        "endpointDescription": ["https://api.gsa.gov/public-buildings/energy/v1/openapi.json"],
        "servesDataset": [
          {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2025",
            "title": "GSA Federal Building Energy Usage Data 2025"
          },
          {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2026",
            "title": "GSA Federal Building Energy Usage Data 2026"
          }
        ],
        "accessRights": "This DataService provides public access to aggregate GSA federal building energy usage data. Users may be subject to standard API rate limits and may need to obtain an API key for usage tracking.",
        "rights": ["Users may copy, cite, transmit, and adapt API outputs consistent with the licenses listed in the datasets' distributions."],
        "modified": "2026-07-15",
        "rightsHolder": [
          {
            "@type": "Organization",
            "name": "U.S. General Services Administration"
          }
        ],
        "license": "https://creativecommons.org/publicdomain/zero/1.0/"
      }

  **Example 11: DatasetSeries Class**

      {
        "@type": "DatasetSeries",
        "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-series",
        "title": "GSA Federal Building Energy Usage Data Series",
        "description": "Annual public aggregate datasets describing energy usage for selected GSA-managed federal buildings. The series groups independently published fiscal-year datasets covering electricity, natural gas, steam, and chilled water. The data series supports the federal real property portfolio.",
        "temporal": {
          "@type": "PeriodOfTime",
          "startDate": "2024-10-01",
          "endDate": "2026-09-30"
        },
        "spatial": {
          "@type": "Location",
          "label": "United States"
        },
        "first": {
          "@type": "Dataset",
          "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2025",
          "title": "GSA Federal Building Energy Usage Data 2025"
        },
        "last": {
          "@type": "Dataset",
          "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2026",
          "title": "GSA Federal Building Energy Usage Data 2026"
        },
        "seriesMember": [
          {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2025",
            "title": "GSA Federal Building Energy Usage Data 2025"
          },
          {
            "@type": "Dataset",
            "@id": "https://www.gsa.gov/datasets/federal-building-energy-usage-2026",
            "title": "GSA Federal Building Energy Usage Data 2026"
          }
        ],
        "modified": "2026-07-15",
        "publisher": {
          "@type": "Organization",
          "name": "U.S. General Services Administration"
        },
        "contactPoint": {
          "@type": "Kind",
          "fn": "GSA Public Buildings Service Data Support",
          "hasEmail": "mailto:public-inquiries@gsa.gov"
        }
      }

  ## Appendix G: NARA CUI Indicators {#appendix-g-nara-cui-indicators}

  The following table contains categories of CUI information that agencies may own, organized into their locations within the Code of Federal Regulations and the U.S. Code.[^102]

  <table class="usa-table">
  <thead>
  <tr><th scope="col" markdown="span">**CFR**</th><th scope="col" markdown="span">**U.S.C.**</th><th scope="col" markdown="span">**Category Name**</th></tr>
  </thead>
  <tbody>
  <tr>
  <td markdown="span">4</td>
  <td></td>
  <td markdown="span">Accounts</td>
  </tr>
  <tr>
  <td markdown="span">14</td>
  <td markdown="span">51</td>
  <td markdown="span">Aeronautics and Space</td>
  </tr>
  <tr>
  <td markdown="span">7</td>
  <td markdown="span">7</td>
  <td markdown="span">Agriculture</td>
  </tr>
  <tr>
  <td markdown="span">27</td>
  <td markdown="span">27</td>
  <td markdown="span">Alcohol, Tobacco Products, Firearms</td>
  </tr>
  <tr>
  <td markdown="span">8</td>
  <td markdown="span">8</td>
  <td markdown="span">Aliens and Nationality</td>
  </tr>
  <tr>
  <td markdown="span">9</td>
  <td></td>
  <td markdown="span">Animal and Animal Products</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">9</td>
  <td markdown="span">Arbitration</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">10</td>
  <td markdown="span">Armed Forces</td>
  </tr>
  <tr>
  <td markdown="span">12</td>
  <td markdown="span">12</td>
  <td markdown="span">Banking and Banks</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">11, 11a</td>
  <td markdown="span">Bankruptcy</td>
  </tr>
  <tr>
  <td markdown="span">13</td>
  <td></td>
  <td markdown="span">Business Credit and Assistance</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">13</td>
  <td markdown="span">Census</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">14</td>
  <td markdown="span">Coast Guard</td>
  </tr>
  <tr>
  <td markdown="span">15</td>
  <td markdown="span">15</td>
  <td markdown="span">Commerce, Trade and Foreign Trade</td>
  </tr>
  <tr>
  <td markdown="span">16</td>
  <td></td>
  <td markdown="span">Commercial Practices</td>
  </tr>
  <tr>
  <td markdown="span">17</td>
  <td></td>
  <td markdown="span">Commodity and Securities Exchanges</td>
  </tr>
  <tr>
  <td markdown="span">18</td>
  <td markdown="span">16</td>
  <td markdown="span">Conservation of Power and Water Resources</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">34</td>
  <td markdown="span">Crime Control and Law Enforcement</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">18, 18a</td>
  <td markdown="span">Crimes and Criminal Procedure</td>
  </tr>
  <tr>
  <td markdown="span">19</td>
  <td markdown="span">19</td>
  <td markdown="span">Customs Duties</td>
  </tr>
  <tr>
  <td markdown="span">6</td>
  <td markdown="span">6</td>
  <td markdown="span">Domestic Security</td>
  </tr>
  <tr>
  <td markdown="span">34</td>
  <td markdown="span">20</td>
  <td markdown="span">Education</td>
  </tr>
  <tr>
  <td markdown="span">44</td>
  <td></td>
  <td markdown="span">Emergency Management and Assistance</td>
  </tr>
  <tr>
  <td markdown="span">20</td>
  <td></td>
  <td markdown="span">Employee's Benefits</td>
  </tr>
  <tr>
  <td markdown="span">10</td>
  <td></td>
  <td markdown="span">Energy</td>
  </tr>
  <tr>
  <td markdown="span">48</td>
  <td></td>
  <td markdown="span">Federal Acquisition Regulation Systems (FAR)</td>
  </tr>
  <tr>
  <td markdown="span">11</td>
  <td markdown="span">52</td>
  <td markdown="span">Federal Elections and Voting</td>
  </tr>
  <tr>
  <td markdown="span">2</td>
  <td></td>
  <td markdown="span">Federal Financial Assistance</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">4</td>
  <td markdown="span">Flag and Seal, Seat of Gov't., and the States</td>
  </tr>
  <tr>
  <td markdown="span">21</td>
  <td markdown="span">21</td>
  <td markdown="span">Food and Drugs</td>
  </tr>
  <tr>
  <td markdown="span">22</td>
  <td markdown="span">22</td>
  <td markdown="span">Foreign Relations and Intercourse</td>
  </tr>
  <tr>
  <td markdown="span">1</td>
  <td markdown="span">1</td>
  <td markdown="span">General Provisions</td>
  </tr>
  <tr>
  <td markdown="span">5</td>
  <td markdown="span">5</td>
  <td markdown="span">Government Organization, Employees and Administration and Privacy</td>
  </tr>
  <tr>
  <td markdown="span">23</td>
  <td markdown="span">23</td>
  <td markdown="span">Highways</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">24</td>
  <td markdown="span">Hospitals and Asylums</td>
  </tr>
  <tr>
  <td markdown="span">24</td>
  <td></td>
  <td markdown="span">Housing and Urban Development</td>
  </tr>
  <tr>
  <td markdown="span">25</td>
  <td markdown="span">25</td>
  <td markdown="span">Indians</td>
  </tr>
  <tr>
  <td markdown="span">26</td>
  <td markdown="span">26</td>
  <td markdown="span">Internal Revenue</td>
  </tr>
  <tr>
  <td markdown="span">28</td>
  <td markdown="span">28, 28a</td>
  <td markdown="span">Judicial Administration</td>
  </tr>
  <tr>
  <td markdown="span">29</td>
  <td markdown="span">29</td>
  <td markdown="span">Labor</td>
  </tr>
  <tr>
  <td markdown="span">30</td>
  <td markdown="span">30</td>
  <td markdown="span">Mineral Lands, Mining and Resources</td>
  </tr>
  <tr>
  <td markdown="span">31</td>
  <td markdown="span">31</td>
  <td markdown="span">Money and Finance</td>
  </tr>
  <tr>
  <td markdown="span">32</td>
  <td markdown="span">32, 50, 50a</td>
  <td markdown="span">National Defense</td>
  </tr>
  <tr>
  <td markdown="span">36</td>
  <td markdown="span">54</td>
  <td markdown="span">National Park Service, Parks, Forests and Public Property</td>
  </tr>
  <tr>
  <td markdown="span">33</td>
  <td markdown="span">33</td>
  <td markdown="span">Navigation and Navigable Waters</td>
  </tr>
  <tr>
  <td markdown="span">37</td>
  <td markdown="span">17, 35</td>
  <td markdown="span">Patents, Trademarks, and Copyrights</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">36</td>
  <td markdown="span">Patriotic and National Observances, Ceremonies and Organizations</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">37</td>
  <td markdown="span">Pay and Allowances of the Uniformed Services</td>
  </tr>
  <tr>
  <td markdown="span">39</td>
  <td markdown="span">39</td>
  <td markdown="span">Postal Service</td>
  </tr>
  <tr>
  <td markdown="span">40</td>
  <td></td>
  <td markdown="span">Protection of Environment</td>
  </tr>
  <tr>
  <td markdown="span">41</td>
  <td markdown="span">40, 41</td>
  <td markdown="span">Public Contracts, Buildings and Property Management</td>
  </tr>
  <tr>
  <td markdown="span">42, 45</td>
  <td markdown="span">42</td>
  <td markdown="span">Public Health and Welfare</td>
  </tr>
  <tr>
  <td markdown="span">43</td>
  <td markdown="span">43</td>
  <td markdown="span">Public Lands</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">44</td>
  <td markdown="span">Public Printing and Documents</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">45</td>
  <td markdown="span">Railroads</td>
  </tr>
  <tr>
  <td markdown="span">35</td>
  <td markdown="span">53</td>
  <td markdown="span">RESERVED</td>
  </tr>
  <tr>
  <td markdown="span">46</td>
  <td markdown="span">46</td>
  <td markdown="span">Shipping</td>
  </tr>
  <tr>
  <td markdown="span">47</td>
  <td markdown="span">47</td>
  <td markdown="span">Telecommunication</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">48</td>
  <td markdown="span">Territories and Insular Possessions</td>
  </tr>
  <tr>
  <td></td>
  <td markdown="span">2</td>
  <td markdown="span">The Congress</td>
  </tr>
  <tr>
  <td markdown="span">3</td>
  <td markdown="span">3</td>
  <td markdown="span">The President</td>
  </tr>
  <tr>
  <td markdown="span">49</td>
  <td markdown="span">49</td>
  <td markdown="span">Transportation</td>
  </tr>
  <tr>
  <td markdown="span">38</td>
  <td markdown="span">38</td>
  <td markdown="span">Veterans' Benefits</td>
  </tr>
  <tr>
  <td markdown="span">50</td>
  <td></td>
  <td markdown="span">Wildlife and Fisheries</td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td markdown="span">Other "Free text to type name of Government-wide policy"</td>
  </tr>
  </tbody>
  </table>



  [^1]: This schema is a tailored application of the W3C DCAT Version 3 specification and provides a standardized framework for describing, discovering, and sharing federal data assets. It is inherently more prescriptive than the original W3C standard because it categorizes properties as mandatory, recommended and optional, and it requires specific formats or values for some properties. [https://www.w3.org/TR/vocab-dcat-3/](https://www.w3.org/TR/vocab-dcat-3/) [https://resources.data.gov/resources/dcat-us3/](https://resources.data.gov/resources/dcat-us3/)

  [^2]: There are additional regulations related to data inventorying, however this guide will focus on these two.

  [^3]: [Data.gov](http://data.gov) is the U.S. government's official open data portal where agencies can make their data assets publicly accessible and freely available to anyone.

  [^4]: Title II of the Evidence Act, named the OPEN Government Data Act, specifically requires agencies to make their data “open by default,” maintain a comprehensive data inventory with useful and descriptive metadata, and submit their metadata to the Federal Data Catalog hosted at [Data.gov](http://data.gov). “Open by default” still allows agencies to exempt data from public release for reasons including, but not limited to, FOIA exemptions or national security concerns.

  [^5]: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://bidenwhitehouse.archives.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^6]: Implementation plans should be structured with clear milestones, and based on verifiable timelines. Agencies may be able to use the five-steps provided in the [Implementation Approach](#implementation-approach) as a starting point to help formulate their agency’s specific implementation plan.

  [^7]: More specifically, M-25-05 states the following: “As part of its responsibilities, GSA updates and maintains the requirements and schema established by OMB and made publicly available through Data.gov or any successor website. Agency comprehensive data inventories must be interoperable with the Federal Data Catalog as described in Section 5(b) of this Memorandum to ensure that agency information is extracted correctly and displayed there appropriately. The comprehensive data inventory must be maintained in an open format consistent with the ISO/IEC 21778:2017, commonly known as the JSON format, or a successor format… Each agency’s comprehensive data inventory must conform to the standard metadata schema approved by OMB and available on resources.data.gov. If that schema changes, agencies must update their inventories appropriately within one year.” [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://bidenwhitehouse.archives.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^8]: The DCAT-US v1.1, also known as the Project Open Metadata Schema, adapted the original DCAT standards to federal data needs.

  [^9]: The Data Catalog (DCAT) vocabulary standards enable publishers of data to describe datasets and data services in a catalog using a standard model and vocabulary that facilitates the consumption and aggregation of metadata from multiple catalogs. [https://www.w3.org/TR/vocab-dcat/#dcat-scope](https://www.w3.org/TR/vocab-dcat/#dcat-scope)

  [^10]: [DCAT-US v3.0](https://resources.data.gov/resources/dcat-us3/) is a specific profile of the [DCAT 3](https://www.w3.org/TR/vocab-dcat-3/) standards that has been adapted to federal agency needs.

  [^11]: Chief Data Officers Council (CDOC) and Federal Committee on Statistical Methodology (FCSM). (2024, August 5). *Building Trust and FAIRness into the Process for Finding and Using Government Data Project (FAIRness Project): Implementing DCAT-US 3.0 Sequencing Plan*.

  [^12]: [https://resources.data.gov/resources/dcat-us3/](https://resources.data.gov/resources/dcat-us3/)

  [^13]: See Section 4.a.ii of M-25-05: Each agency’s comprehensive data inventory must conform to the standard [metadata schema approved by OMB and available on resources.data.gov. If that schema changes, agencies](http://resources.data.gov) must update their inventories appropriately within one year.” [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://bidenwhitehouse.archives.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^14]: “Agencies have been encouraged to “develop public AI strategies that elevate AI adoption and innovation as a priority, while increasing transparency to the American public, civil society, and industry.” [https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21)

  [^15]: [https://onlinelibrary.wiley.com/doi/10.1002/aaai.70060](https://onlinelibrary.wiley.com/doi/10.1002/aaai.70060)

  [^16]: On a related note, agencies should be aware that certain technical constraints previously imposed by DCAT-US v1.1, including character limits for free-text fields, may not apply in DCAT-US v3.0. For example, the description property was limited to 10,000-character limit in v1.1, while DCAT-US v3.0 specifies no character limit for this property. Nevertheless, agencies are recommended to use clear and concise language. When additional detail is necessary, agencies are encouraged to include a link to a more comprehensive description or supporting documentation.

  [^17]: M-25-05 requires an annual update, but agencies may choose a more frequent cadence that meets their needs. [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://bidenwhitehouse.archives.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^18]: [https://www.whitehouse.gov/wp-content/uploads/2019/07/m-19-23.pdf](https://www.whitehouse.gov/wp-content/uploads/2019/07/m-19-23.pdf)

  [^19]: Adapted from an interview with data practitioners from the Department of State.

  [^20]: These uses of data align with the phases of the information life cycle defined in OMB Circular A-130 (see pages 14 and 29): [https://whitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130](https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf)

  [^21]: [https://www.congress.gov/115/plaws/publ435/PLAW-115publ435.pdf](https://www.congress.gov/115/plaws/publ435/PLAW-115publ435.pdf)

  [^22]: A **dataset** is commonly defined as a collection of data points (e.g., records, observations, measurements) that are grouped into a consistent format — such as a table, files or database. [https://www.ibm.com/think/topics/dataset](https://www.ibm.com/think/topics/dataset); [https://www.databricks.com/blog/what-is-dataset](https://www.databricks.com/blog/what-is-dataset)

  [^23]: “Examples of data assets composed of structured data include rectangular or tabular data organized into rows and columns, a database of digital images, and a set of files containing geospatial polygons in the same coordinate system.” [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^24]: “Examples of data assets composed of semi-structured data include data in formats like the Extensible Markup Language (XML) and JavaScript Object Notation (JSON).” [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^25]: See Sections 3 and 4 here: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^26]: Adapted by GSA based on materials received from the Environmental Protection Agency (EPA). See also Figure 7 in [Appendix E](#appendix-e-illustrative-example-of-data-asset-workflow).

  [^27]: [https://resources.data.gov/assets/documents/Zero-Trust-DataSecurityGuide\_RevisedMay2025](https://resources.data.gov/assets/documents/Zero-Trust-DataSecurityGuide_RevisedMay2025_CIO.govVersion.pdf)

  [^28]: The Evidence Act requires agencies to “\[account\] for all data assets created by, collected by, under the control or direction of, or maintained by the agency.” [https://www.congress.gov/115/plaws/publ435/PLAW-115publ435.pdf](https://www.congress.gov/115/plaws/publ435/PLAW-115publ435.pdf)

  [^29]: [https://resources.data.gov/assets/documents/CDOC\_Data\_Inventory\_Report\_Final.pdf](https://resources.data.gov/assets/documents/CDOC_Data_Inventory_Report_Final.pdf)

  [^30]: [https://resources.data.gov/assets/documents/CDOC\_Data\_Inventory\_Report\_Final.pdf](https://resources.data.gov/assets/documents/CDOC_Data_Inventory_Report_Final.pdf)

  [^31]: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^32]: As the schema changes in the future, agencies are expected to keep their inventory conformant to the most up-to-date version of the schema hosted on [Data.gov](http://data.gov).

  [^33]: For example, FOIA is a common restriction.

  [^34]: See Figure 8 in [Appendix E](#appendix-e-illustrative-example-of-data-asset-workflow) for an example of how EPA makes data inventorying decisions.

  [^35]: “High value assets (HVAs) are ‘Federal information systems, information, and data for which an unauthorized access, use, disclosure, disruption, modification, or destruction could cause a significant impact to the United States’ national security interests, foreign relations, economy, or to the public confidence, civil liberties, or public health and safety of the American people.’” [https://www.cisa.gov/sites/default/files/publications/SecuringHVAs-July2018\_508c.pdf](https://www.cisa.gov/sites/default/files/publications/Securing%20High%20Value%20Assets_Version%201.1_July%202018_508c.pdf)

  [^36]: This includes systems with the Federal Information Security Management Act (FISMA) High authorization. [https://security.cms.gov/learn/federal-information-security-modernization-act-fisma](https://security.cms.gov/learn/federal-information-security-modernization-act-fisma)

  [^37]: [https://resources.data.gov/assets/documents/Zero-Trust-DataSecurityGuide\_RevisedMay2025](https://resources.data.gov/assets/documents/Zero-Trust-DataSecurityGuide_RevisedMay2025_CIO.govVersion.pdf)

  [^38]: Per the PRA, agencies must receive clearance from OMB’s Office of Information and Regulatory Affairs (OIRA) before collecting new information from the public, with some exceptions. Since an agency’s current information collection activities would already have this clearance, they could be a good starting point for how the agency prioritizes its data inventorying. [https://www.congress.gov/bill/104th-congress/senate-bill/244/text](https://www.congress.gov/bill/104th-congress/senate-bill/244/text) [https://digital.gov/guides/pra](https://digital.gov/guides/pra)

  [^39]: See the full definitions for these distinctions under the accessLevel property in the DCAT-US v1.1 schema: [https://resources.data.gov/resources/dcat-us/#accessLevel](https://resources.data.gov/resources/dcat-us/#accessLevel)

  [^40]: In Figure 3, agencies should note the terminology change from “Restricted Public” to “Restricted” between the two DCAT-US schema versions.

  [^41]: DCAT-US v1.1 included the [accessLevel](https://resources.data.gov/resources/dcat-us/#accessLevel) property to communicate the categorization (e.g., public, restricted public, non-public) and the [rights](https://resources.data.gov/resources/dcat-us/#rights) property to communicate supplemental information. In DCAT-US v3.0, agencies can follow the same approach swapping out accessLevel with accessRights. They may choose to include supplemental information related to M-25-05 requirements, such as public release determinations and open format status, in [accessRights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accessRights) or [rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights) since both properties allow free-text responses. In most cases, [rights](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#rights) is likely better-suited for the supplemental information.

  [^42]: Additional requirements regarding open data plans and engagement with the public are outlined in M-25-05, but those will not be addressed in this guide.

  [^43]: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^44]: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^45]: [https://creativecommons.org/](https://creativecommons.org/)

  [^46]: [https://opendatacommons.org/licenses/pddl/1-0/](https://opendatacommons.org/licenses/pddl/1-0/)

  [^47]: This option is explicitly recommended in M-25-05.

  [^48]: For example, Amazon Web Services and Microsoft Azure have defined regions that customers can choose to store and host their data in. [https://aws.amazon.com/about-aws/global-infrastructure/regions\_az/](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/) [https://learn.microsoft.com/en-us/azure/reliability/regions-list?tabs=all](https://learn.microsoft.com/en-us/azure/reliability/regions-list?tabs=all)

  [^49]: The Evidence Act codified the SAP as “a process through which agencies, the Congressional Budget Office, State, local, and Tribal governments, researchers, and other individuals, as appropriate, may apply to access the data assets \[held by federal statistical agencies\] for purposes of developing evidence.” OMB M-23-04, [*Establishment of a Standard Application Process Requirements on Recognized Statistical Agencies and Units*](https://whitehouse.gov/wp-content/uploads/2022/12/M-23-04.pdf), describes the application process and review criteria in more detail. [https://www.whitehouse.gov/wp-content/uploads/2022/12/M-23-04.pdf](https://www.whitehouse.gov/wp-content/uploads/2022/12/M-23-04.pdf) [https://www.congress.gov/115/plaws/publ435/PLAW-115publ435.pdf](https://www.congress.gov/115/plaws/publ435/PLAW-115publ435.pdf)

  [^50]: “The term ‘intergovernmental support agreement’ means a legal instrument reflecting a relationship between the Secretary concerned and a State, local, or tribal government that contains such terms and conditions as the Secretary concerned considers appropriate for the purposes of this section and necessary to protect the interests of the United States.” [https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title10-section2679&num=0&edition=prelim](https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title10-section2679&num=0&edition=prelim)

  [^51]: Common disclosure avoidance techniques include, but not limited to: de-identification, aggregation, masking or pseudonymization, noise infusion and differential privacy.

  [^52]: Insights from this paragraph adapted from input received from the Department of State.

  [^53]: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^54]: See the Introduction section on this page: [https://www.justice.gov/oip/oip-guidance/proactive\_disclosure\_of\_non-exempt\_information](https://www.justice.gov/oip/oip-guidance/proactive_disclosure_of_non-exempt_information)

  [^55]: For more information on distinguishing between public and open government data assets, see Figure 11 in [Appendix E](#appendix-e-illustrative-example-of-data-asset-workflow).

  [^56]: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^57]: Transitioning formats may involve complicated multi-step processes.

  [^58]: For example, M-25-05 requires a significant amount of information on access rights and restrictions that an agency may not report absent the requirement, such as determinations about a data asset’s subjectability to disclosure under FOIA.

  [^59]: Custom Avatars can be created, these digital twins are molded after a real individual using an individual's video footage, photos, and voice samples. Stock avatars are pre-designed characters

  [^60]: See the “What’s New in v3.0” section here: [https://resources.data.gov/resources/dcat-us3/#whats-new-in-v30](https://resources.data.gov/resources/dcat-us3/#whats-new-in-v30)

  [^61]: See the Overview section on this page: [https://resources.data.gov/resources/dcat-us3/](https://resources.data.gov/resources/dcat-us3/)

  [^62]: See the following section for more information on how the classes are organized within the schema: [https://resources.data.gov/resources/dcat-us3/#how-the-schema-is-organized](https://resources.data.gov/resources/dcat-us3/#how-the-schema-is-organized)

  [^63]: As appropriate, variable definitions could be defined in the Distribution class, particularly if a distribution has a unique data dictionary associated with it.

  [^64]: In some cases, a data dictionary may be defined in the Distribution class using the [describedBy](https://resources.data.gov/standards/catalog/dcat-us-3/distribution/#describedBy) property.

  [^65]: The accessRestriction property can be defined in the Dataset or Distribution class depending on the circumstances (see sections below for further guidance).

  [^66]: The license property can be defined in the Dataset or Distribution class depending on the circumstances (see sections below for further guidance).

  [^67]: This metadata will not be required until further guidance on the implementation of Title III of the Evidence Act is published by OMB. See footnote 41 on page 9 in OMB M-25-05: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^68]: When this metadata becomes required, this will likely be the best-suited property to report it.

  [^69]: For agencies with data assets that are updated continually, the [accrualPeriodicity](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#accrualPeriodicity) property within the [Dataset](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/) class may be more appropriate to meet this requirement.

  [^70]: This property should be defined in both the Dataset and Distribution classes.

  [^71]: This property can be defined in the Dataset or Distribution class.

  [^72]: These three properties can be defined in the Dataset or Distribution class depending on the circumstances (see sections below for further guidance).

  [^73]: [https://resources.data.gov/standards/catalog/dcat-us-3/catalog/](https://resources.data.gov/standards/catalog/dcat-us-3/catalog/)

  [^74]: This requirement is implied within the mandate to create a “comprehensive data inventory.”

  [^75]: Within the DCAT-US v3.0 schema, many classes contain properties that are defined using other classes, as is the case in this example.

  [^76]: For simplicity, the sub-properties shown under the dataset and datasetSeries properties in this example are intentionally limited and do not represent the full minimum recommended properties for the Dataset and DatasetSeries classes. Agencies should consult the [Dataset](#dataset) and [DatasetSeries](#datasetseries) sections below for the complete requirements and implementation guidance.

  [^77]: [https://resources.data.gov/standards/catalog/dcat-us-3/dataset/](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/)

  [^78]: M-25-05 metadata requirements are defined at the data asset level, and a data asset is typically composed of one or more datasets.

  [^79]: See section 4.a.ii of M-25-05: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^80]: The ISOO Repository is a centralized, CUI EA-approved resource for obtaining Government-wide policy (e.g., OMB Memorandum) to justify CUI designation. The repository may be included in a future version of this guide.

  [^81]: Alternatively, agencies can reference the CUI indicators provided in [Appendix G](#appendix-g-nara-cui-indicators).

  [^82]: Future versions of the schema may add a separate property under the [CUIRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction) class where agencies can include information on the decontrol trigger.

  [^83]: This property can be set to NULL if there are no contributing agencies aside from the owner.

  [^84]: The accessRights property is defined in the Dataset class and provides a narrative explanation of how to access the dataset, how to request access, or why the dataset cannot be public.

  [^85]: Users can define the accessRestriction property in the Dataset or Distribution class and identifies the specific basis for any restrictions, such as FOIA exemptions, CUI, privacy protections, security considerations, or other applicable limitations.

  [^86]: Alternatively, agencies could list the region where the data is hosted, as defined by the cloud service provider, if the data is cloud-hosted.

  [^87]: For simplicity, the sub-properties shown under the distribution property in this example are intentionally limited and do not represent the full minimum recommended properties for the Distribution class. Agencies should consult the [Distribution](#distribution) section below for the complete requirements and implementation guidance.

  [^88]: The distribution mechanism for restricted data assets could be a URL with instructions on requesting access.

  [^89]: See Title III of the Evidence Act: [https://www.congress.gov/bill/115th-congress/house-bill/4174/text](https://www.congress.gov/bill/115th-congress/house-bill/4174/text)

  [^90]: Alternatively, agencies can reference the CUI indicators provided in [Appendix G](#appendix-g-nara-cui-indicators).

  [^91]: Future versions of the schema may be adjusted to include information on the decontrol trigger in a separate property under the [CUIRestriction](https://resources.data.gov/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction) class.

  [^92]: See the “What’s New in v3.0” section here: [https://resources.data.gov/resources/dcat-us3/#whats-new-in-v30](https://resources.data.gov/resources/dcat-us3/#whats-new-in-v30)

  [^93]: The examples in the linked repository are focused solely on complying with DCAT-US v3.0 technical requirements and do not take into account M-25-05 metadata requirements. They may be a good reference for agencies that have less familiarity with DCAT.

  [^94]: See the hasVersion and hasCurrentVersion properties here: [https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#hasVersion](https://resources.data.gov/standards/catalog/dcat-us-3/dataset/#hasVersion)

  [^95]: A plain-language description of the retention period can be provided in either property, in addition to the other necessary information the property captures.

  [^96]: The FGDC may provide additional guidance on this process in the future.

  [^97]: The FGDC Metadata Standards Technical Crosswalk was not yet published at the time of this guide’s release. Agencies should refer to [fgdc.gov](http://fgdc.gov) for updates on its publication.

  [^98]: [https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05](https://www.whitehouse.gov/wp-content/uploads/2025/01/M-25-05-Phase-2-Implementation-of-the-Foundations-for-Evidence-Based-Policymaking-Act-of-2018-Open-Government-Data-Access-and-Management-Guidance.pdf)

  [^99]: “Agencies may choose either to (1) integrate their open data plan into their IRM Strategic Plan or (2) append a separate, stand-alone open data plan to their IRM Strategic Plan.” The IRM Strategic Plan is required under the PRA and Circular No. A-130 and is reviewed annually.

  [^100]: Image derived from Secretary's Order 02-2019-Chief Data Officer and DOL Data Board: [https://www.federalregister.gov/documents/2019/03/26/2019-05720/secretarys-order-02-2019-chief-data-officer-and-dol-data-board](https://www.federalregister.gov/documents/2019/03/26/2019-05720/secretarys-order-02-2019-chief-data-officer-and-dol-data-board)

  [^101]: Information obtained from the Department of Commerce.

  [^102]: Table developed by NARA Information Security Oversight Office (ISOO).

  <section class="version-history" aria-labelledby="version-history-heading">
  <h2 id="version-history-heading">Version History</h2>
  <table class="version-history-table usa-table usa-table--striped">
    <caption class="sr-only">Change log for the DCAT-US 3 Implementation Guide</caption>
    <thead>
      <tr>
        <th scope="col">Version</th>
        <th scope="col">Date</th>
        <th scope="col">Section</th>
        <th scope="col">Description of Change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.1</td>
        <td><time datetime="2026-09-09">September 9, 2026</time></td>
        <td>Step 1: Filter Structure Using FGDC Metadata Standards Technical Crosswalk (page 63)</td>
        <td>Corrected the metadata standard number in the crosswalk description. The guide now cites ISO 19115-1. The previous version cited ISO 19115-2.</td>
      </tr>
      <tr>
        <td>1.1</td>
        <td><time datetime="2026-09-09">September 9, 2026</time></td>
        <td>Guidance for Geospatial Data Providers: Step 3</td>
        <td>Corrected the spelling of the word "catalog."</td>
      </tr>
    </tbody>
  </table>
  </section>
  
  <p>See an error on this page or have other feedback? Email us at <a href="mailto:datagovhelp@gsa.gov">DataGovHelp@gsa.gov</a></p>

 
## DCAT US Pages

### [Index](../dcat-us-3/)

### [Catalog](../dcat-us-3-catalog/)

### [Data Service](../dcat-us-3-data-service/)

### [Dataset Series](../dcat-us-3-dataset-series/)

### [Dataset](../dcat-us-3-dataset/)

### [Distribution](../dcat-us-3-distribution/)

### [Supporting Classes](../dcat-us-3-supporting-classes/)

### [DCAT Priorities](../dcat-us-priorities/)

### [DCAT US General Information](../dcat-us/)

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
