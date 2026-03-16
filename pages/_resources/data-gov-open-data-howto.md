---
redirect_from: /tools/how-to-get-your-open-data-on-datagov/
resource_name: How to get your Open Data on Data.gov
slug: data-gov-open-data-howto
description: Data.gov is the central clearinghouse for open data from the United
  States federal government and also provides access to many state and local
  (non-federal) open data resources. Find out below how federal, federal geospatial,
  and non-federal data is funneled to Data.gov and how you can get your data
  federated on Data.gov for greater discoverability and impact.
source: data.gov
category: Skills development
tags:
  - open data
  - workforce development
  - data sharing
guidance_tags: ""
format: ""
details: >-
  *This guide is primarily for the Open Data Points of Contact (POC) at each
  agency. If you would like to add data to Data.gov and you are not the POC for
  your agency, please contact your POC. If you do not know your agency POC,
  please continue reading and [contact Data.gov](https://www.data.gov/contact)
  for assistance.* 

  ## Introduction

  Data.gov is primarily a federal open government data site. However, state, local, and tribal governments can also publish metadata describing their open data resources on Data.gov for greater discoverability. Data.gov does not host data directly (with a few exceptions), but rather aggregates metadata about open data assets in one centralized location. Once an agency creates an open data source with the necessary format and metadata requirements, the Data.gov team can harvest the metadata directly, synchronizing that source’s metadata on Data.gov as often as every 24 hours.

  ### Overview Diagram

  ![opendatagraphic](../../assets/img/data-harvest-diagram.png)

  ## Step 1: Metadata Gathering and Publishing

  In order for Data.gov to harvest your metadata, it needs to be created/generated with a specific metadata schema, gathered into a central location, and made public.

  ### 1a: Choose your metadata standard


  There are two accepted metadata standards currently handled by Data.gov. Data.gov was originally created with DCAT-US as the standard, and agencies were expected to provide metadata in this format according to the [M-13-13 policy](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2013/m-13-13.pdf) issued in 2013 (note that Project Open Data was the previous name for the DCAT-US standard). The other one is ISO, rooted in the geospatial data community.


  Please note that we defer to the Federal Geographic Data Committee ([FGDC](https://www.fgdc.gov/metadata)) on geospatial data, as it has the authority to do so under the [Geospatial Data Act](https://www.fgdc.gov/gda) and [Executive Order 12906](http://www.archives.gov/federal-register/executive-orders/pdf/12906.pdf). Please see their website above for the latest information, and note that we have dropped support for CSDGM since [it is no longer recommended](https://www.fgdc.gov/metadata/geospatial-metadata-standards).

  #### DCAT-US (JSON)

  Previously known as the Project Open Data standard, the [DCAT-US standard](https://resources.data.gov/resources/dcat-us/) is based on the commonly used [DCAT](https://www.w3.org/TR/vocab-dcat-1/) standard from the [W3C](https://www.w3.org/). This format is expected to be implemented in a JSON file type. Please note that Data.gov only harvests “catalogs” of information, a single JSON file that has a list of all datasets. For common examples, see our [github tests](https://github.com/GSA/ckanext-datajson/tree/main/ckanext/datajson/tests/datajson-samples).

  #### ISO 19115 (XML)

  The FGDC recommends using the ISO 19115 metadata standard for geospatial metadata. See [ISO 19115:2003 Geographic Information – Metadata](http://www.fgdc.gov/metadata/geospatial-metadata-standards).


  ### 1b: Create and gather metadata across your organization

  The choice on how to gather metadata across the organization is up to each agency. There are a variety of tools from open source to commercially available to custom-created that are in use to gather, maintain, and publish the metadata files.


  If you don’t know where to start, and plan to provide metadata using the [DCAT-US standard](https://resources.data.gov/resources/dcat-us/), you can start by making use of the [inventory tool](https://resources.data.gov/resources/inventory-data-gov-guide/) provided by the Data.gov team. Contact the Data.gov team for more information about using inventory.data.gov.

  ### 1c: Make your catalog public

  The metadata that you have chosen to publish must be publicly available. The best practice is to generate the catalog at a certain time offline and then publicly release the file(s), such that a static copy is available to Data.gov (and the general public). Please note that there is no support for an API or live querying of a database, all solutions need to be provided statically.

  #### DCAT-US Catalog

  If you are providing a DCAT-US catalog, Data.gov requires the metadata as a JSON file at a public URL in order to harvest. For example, GSA’s metadata can be found at [open.gsa.gov/data.json](https://open.gsa.gov/data.json).

  #### Web Accessible Folder

  Currently Data.gov supports scanning a WAF (web accessible folder) and harvesting all XML files of ISO standard in the WAF. It can scan a nested folder structure and assumes any XML files are metadata files to be harvested. A good example can be seen [here](https://data.noaa.gov/waf/NOAA/nos/onms/iso/xml/).
  
  
  It should be noted that Data.gov expects the file timestamp to be included on the page with the file link, and to only be updated if and when file content changes; this helps Data.gov target only the files that were changed since the last harvest. The absence or inaccurate update of file timestamps can lead to a number of inefficiencies. Data.gov may need to harvest this source less frequently, among other mitigations.

  ## Step 2: Data.gov Harvest

  ### Contact Data.gov

  Contact the Data.gov team via email at [datagov@gsa.gov](mailto:datagov@gsa.gov) to let them know you’d like to get started. Please include a link to your publicly available metadata (see step 1c above). Please also include information about how often the information is updated (and when, if applicable) so that Data.gov can set up the right cadence for refreshing the catalog from your source.

  ### Harvest Setup and Report

  The Data.gov team will create a new harvest source on [harvest.data.gov](https://harvest.data.gov) that will automatically collect information about your datasets and update Data.gov on a regular schedule. Depending on the number of datasets and/or the complexity of the organization, Data.gov may elect to test harvest on a dev/test system in order to verify things will work properly before “going live” with the production system.


  The harvest source configuration and harvesting job history, including metrics, are publicly available on the site. Each harvest job includes a detailed report showing the number of datasets added, updated, or deleted, along with any errors that prevented certain datasets from being added to the Data.gov catalog. Agencies can also provide email addresses to receive these harvest reports automatically.

  ## Term Definitions

  - **Dataset:** For Data.gov, this is in reference to metadata describing a data asset. This may contain references to multiple API’s, files, and other ways to access the data. It is not a database, a data file, or an API, it’s the metadata describing these things. Agencies are required to create and maintain a “comprehensive data inventory” of the metadata for harvesting into Data.gov, the federal data catalog required under the [OPEN Government Data Act](https://www.congress.gov/115/plaws/publ435/PLAW-115publ435.pdf).

  - **Harvest Job:** When Data.gov processes the harvest source to capture the current state of the harvest source, and make additions, updates, and deletions accordingly on the Data.gov catalog.

  - **Harvest Source:** A public URL where Data.gov can gather metadata for a department, bureau, organization, or other entity. See step 1c.

  - **Metadata:** the information describing the data that is available. Following one of the two supported metadata standards: DCAT-US and ISO. Elements such as title, description, keywords, location, source links, etc.
examples: ""
link: ""
layout: resource
toc: true
publish: false
---
