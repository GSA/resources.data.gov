---
details: >-
  *This guide is primarily for the Open Data Points of Contact (POC) at each
  agency. If you would like to add data to Data.gov and you are not the POC for
  your agency, please contact your POC. If you do not know your agency POC,
  please continue reading and [contact Data.gov](https://www.data.gov/contact)
  for assistance.* 


  ### Introduction


  Data.gov is primarily a federal open government data site. However, state, local, and tribal governments can also publish metadata describing their open data resources on Data.gov for greater discoverability. Data.gov does not host data directly (with a few exceptions), but rather aggregates metadata about open data resources in one centralized location. Once an open data source meets the necessary format and metadata requirements, the Data.gov team can harvest the metadata directly, synchronizing that source’s metadata on Data.gov as often as every 24 hours.


  #### Background


  From 2009-2013, agency updates to the Data.gov catalog were not automated. Federal agencies submitted metadata for individual datasets to Data.gov through a central Dataset Management System (DMS). At present, all metadata is added to Data.gov through the federated “harvest” model.


  #### Dataset Updates


  Additions, updates, and deletions occur through a Harvest Source rather than within Data.gov directly. Data.gov synchronizes those changes through a daily *Harvest Job*.


  #### Federated Metadata Harvest Architecture


  ![opendatagraphic](https://user-images.githubusercontent.com/49877323/66601676-78640580-eb76-11e9-9388-69ec9ee9952b.png)


  ### Step 1: Organize your open data for the Data.gov Pipeline


  Getting your data source ready for harvesting by the Data.gov catalog depends on your data source type:


  1. **Federal Data with Project Open Data (non-geospatial):**  The most common source is the Public Data Listing as required by the [Federal Open Data Policy](https://policy.cio.gov/open-data/) and the [OPEN Government Data Act (Title II of the Foundations for Evidence Based Policymaking Act)](https://www.congress.gov/bill/115th-congress/house-bill/4174/text).

  2. **Federal Geospatial Data:** Federal maps, images, GIS products, and other location-based data resources.

  3. **Non-federal Data:**  Non-federal government sources are not covered by the Federal Open Data Policy, or OPEN Government Data Act, but can be included included in the Data.gov catalog voluntarily.


  The steps for all three types of data sources are described in detail below.


  #### Federal Data with Project Open Data


  Under the OPEN Government Data Act and the Open Data Policy, federal agencies are required to publish an enterprise data inventory, provided as a data.json file,using the standard [Project Open Data metadata schema](https://resources.data.gov/schemas/dcat-us/v1.1/).  The machine readable listing, as a standalone JSON file on the agency’s website at `agency.gov/data.json.` This `data.json` file is what gets harvested to the Data.gov catalog.


  Federal agencies that do not have a platform to inventory their metadata can make use of a free service hosted by Data.gov called inventory.data.gov (see the separate guide). Contact the Data.gov team via email if you’re interested in using this service.


  You can find more information and tools on [resources.data.gov](https://resources.data.gov/).


  When an agency is ready for Data.gov to harvest its data.json for the first time, the agency should notify Data.gov via email and the Data.gov team will create a new Data.gov harvest source for the data.json. The Data.gov team is available to assist agencies in generating the data.json file and provide tools that may help agencies prepare their data listings.


  ##### **Federal data only** 


  There should be one single harvest source per agency. If a federal agency aggregates data from non-federal sources, it ensure the agency’s data.json includes data produced by the agency only. Data.gov harvests all metadata directly from publishers, including many non-federal sources and works to prevent dataset duplication through intermediaries. It is also important to remember that OMB assesses an agency’s data.json file under the assumption it is comprised of data exclusively from that agency.


  ##### **Replacing datasets** 


  When replacing any dataset in your data.json file it is important to maintain the same title and identifier associated with the dataset to ensure consistent discoverability of that dataset going forward. When replacing datasets in your data.json harvest source, using the same identifier will ensure that the URL for the dataset on Data.gov stays the same keeping cited links working and reinforcing the open data principle of [permanence](https://opengovdata.io/2014/permanence-trust-provenance/). It should be noted, however, that when replacing datasets on Data.gov with a brand new harvest source, using the same identifier or title may not retain the same URL.


  ##### **Error log reports**  


  Every time the data.json is harvested, an error log is generated that identifies any issues that occurred during the harvest process. If requested, an agency point of contact can receive a daily harvest report with this error log via email.


  #### Federal Geospatial Data


  ##### **Background** 


  Several federal agencies maintain and manage geospatial data and geographic information systems (GIS). The documentation of geospatial data is subject to authorities pre-dating the Open Data Policy. Agencies are required to develop metadata as outlined in [the Geospatial Data Act](https://www.fgdc.gov/gda), [Executive Order 12906](http://www.archives.gov/federal-register/executive-orders/pdf/12906.pdf), and [ OMB Circular A-16, revised (2002)](https://www.whitehouse.gov/wp-content/uploads/2017/11/Circular-016.pdf) to support the National Spatial Data Infrastructure (NSDI). The Federal Geographic Data Committee (FGDC) is the interagency group responsible for facilitating these federal activities and collaboration with non-federal organizations on geospatial data efforts. The FGDC has endorsed several geospatial metadata standards, as directed by [OMB Circular A-119](https://www.whitehouse.gov/wp-content/uploads/2017/11/Circular-119-1.pdf), including the Content Standard for Digital Geospatial Metadata [(CSDGM)](http://www.fgdc.gov/metadata/csdgm),  [ISO 19115:2003 Geographic Information – Metadata](http://www.fgdc.gov/metadata/geospatial-metadata-standards)  and several related ISO geospatial standards. Since ISO 19115 and the associated standards are voluntary consensus standards (vs. federally-authored) and endorsed by the FGDC, federal agencies are encouraged to transition to ISO metadata as their agencies are able to do so. While the selection of appropriate standards is dependent on the nature of your metadata collection and publication process, ISO metadata should be considered an option now. For more information, [see the FGDC website](https://www.fgdc.gov/metadata). Metadata for geospatial datasets in [catalog.data.gov](http://catalog.data.gov/dataset) is also made available in GeoPlatform.gov. GeoPlatform.gov provides access and management of geospatial resources through common geospatial data, services, and applications contributed and administered by trusted sources and hosted on shared infrastructure for use by federal agencies, agency partners, and the public. Geospatial metadata is made available to GeoPlatform.gov from the metadata harvested by catalog.data.gov and is displayed on GeoPlatform.gov via an application programming interface (API) on catalog.data.gov. In other words, the datasets discoverable on [GeoPlatform.gov](http://www.geoplatform.gov/) are from the geospatial metadata collected by the catalog using the following API call:


  ```

  http://catalog.data.gov/api/3/action/package_search?q=metadata_type:geospatial

  ```


  The majority of open government datasets have some relationship to spatial data (e.g. jurisdiction, address). For the purposes of this document and learning how data gets published in Data.gov, “geospatial data” here specifically refers to spatial data that has historically been included as part of the Federal Geographic Data Committee and GeoPlatform.gov and utilizes robust geospatial metadata standards such as the the suite of ISO standards or the FGDC’s Content Standard for Digital Geospatial Metadata [(CSDGM)](http://www.fgdc.gov/metadata/csdgm). These geospatial metadata standards are needed to properly display data and utilize the spatial functionality on GeoPlatform.gov.


  ##### **Getting geospatial metadata into Data.gov** 


  Federal agencies that manage geospatial data should make their geospatial metadata holdings available to Data.gov using a consolidated geospatial harvest source, preferably one single CSW endpoint for the entire agency. For example, all offices and bureaus within the Department of Interior would make their metadata available through one consolidated CSW covering all of the Department of the Interior. (Non-geospatial metadata should be provided separately. See section 3 below.)

  While a CSW endpoint and traditional geospatial metadata standards are needed for GeoPlatform.gov and Data.gov to consume the data, the Project Open Data (M-13-13) policy still requires metadata for the agency’s geospatial datasets to be provided within the Enterprise Data Inventory data.json file submitted to OMB with the Project Open Data metadata.

  In order to facilitate these requirements, the FGDC and Data.gov have developed a [mapping of elements](https://resources.data.gov/schemas/dcat-us/v1.1/metadata-resources/) between the Project Open Data metadata schema v1.1 and the geospatial metadata standards including FGDC CSDGM, ISO 19115:2003, and ISO 19115-1:2014. This crosswalk enables federal agencies with geospatial data to more efficiently meet both metadata requirements.


  For agencies that provide geospatial data to GeoPlatform.gov and Data.gov, the following harvest sources must be provided:


  1. **Open Data Policy Requirements** All CFO-Act agencies must provide an Enterprise Data Inventory in accordance with the Project Open Data metadata schema (see Federal Data with Project Open Data above). This includes geospatial **and** non-spatial data. **Required: Enterprise Data Inventory provided to OMB MAX**

  2. **Geospatial Harvest Source — Public Data Listing Requirements** (for GeoPlatform.gov and Data.gov) To be successfully harvested by GeoPlatform.gov and Data.gov, all geospatial data should be provided via one [Catalog Service for the Web (CSW)](https://www.geoplatform.gov/csw-resources) endpoint. Required: A CSW endpoint, e.g.: `https://data.doi.gov/csw?service=CSW&version=2.0.2&request=GetCapabilities`

  3. **Data without a Geospatial Harvest Source — Public Data Listing Requirements** (for GeoPlatform.gov and Data.gov) Lastly, to prevent duplication on Data.gov, all agencies that provide a CSW geospatial harvest source to GeoPlatform.gov and Data.gov should create an additional JSON file (called `/sdata-nonspatial-harvest.json`) to include all datasets that are **not** available via the consolidated Geospatial Harvest Source. **Required:** Datasets without a Geospatial Harvest Source for the Public Data Listing at:`https://________.gov/data-nonspatial-harvest.json`


  ##### **Datasets Displayed on GeoPlatform.gov** 


  All datasets included in the CSW will be displayed on GeoPlatform.gov. Datasets included in data-nonspatial-harvest.json will only be displayed on Data.gov, but not GeoPlatform.gov unless the datasets are specially tagged for inclusion there.

  If an agency has a geospatial dataset in the data-nonspatial-harvest.json that should be part of GeoPlatform.gov, but is not included in the CSW harvest source, or if an agency has geospatial holdings and is only able to provide a data.json file and not the CSW, it should denote the geospatial dataset using “geospatial” as a value within the “theme” field. For example: `"theme": ["geospatial"]`.


  #### **Non-Federal Data**


  Data.gov incorporates data sources from state, local, and tribal governments. Non-federal sources are not covered by the Federal Open Data Policy or the OPEN Government Data Act, but can be included in the Data.gov catalog voluntarily. Depending on your local government open data platform, you may already have a harvest source that is Data.gov-ready, or it could take a little more work. Either way, the Data.gov team is available to answer questions about these requirements. For non-federal data to be connected to Data.gov, the following items are required:


  1. **A Data Harvest Source:** Some open data catalog platforms already have a Data.gov harvest source built in (see these examples from [Socrata](https://nycopendata.socrata.com/data.json) and [ArcGIS Open Data](http://opendata.dc.gov/data.json)), but it is possible to set up a harvest source with any data management system (see [this CKAN example](https://www.opendataphilly.org/data.json)). The metadata required from non-federal sources does not include the [USG noted fields](https://resources.data.gov/schemas/dcat-us/v1.1/#federal-government-fields) and additional fields can be left out on a case-by-case basis. To learn more about metadata best practices and validators, check out the Resources and Tools below. **Required:** A Harvest Source at: `https://_______.gov/data.json`, e.g. `https://data.brla.gov/data.json`

  2. **A Terms of Use URL:** A publicly accessible Terms of Use (or Data Policy) URL or similar information in order to make it clear to Data.gov users when they are viewing datasets that are not covered by federal statutory and regulatory requirements. **Required:** A Terms of Use URL, e.g. https://data.brla.gov/terms-of-service


  Once you have coordinated with Data.gov on these two items, automated updates to Data.gov can be set up very quickly. Non-federal organizations can provide the necessary information through [the form](http://www.data.gov/local/add).


  ### Step 2: Coordinate with Data.gov


  #### **Contact the Data.gov team**


  Contact the Data.gov team via email to let them know you’d like to get started. Please include a link to your metadata in the data.json format (see Step 1: Organize your open data for the Data.gov Pipeline) or let us know if you have questions about how to create a data.json file from your current database along with any relevant links.


  #### **Connecting the pipes** 


  The Data.gov team will create a new [Harvest Source](https://www.data.gov/developers/harvesting) that will automatically collect information about your datasets and update Data.gov whenever changes are made on your data catalog. Depending on your platform, creating this harvester might just be the push of a button or it could take a little more work, but the team will walk you through it either way.


  #### **Creating harvest sources** 


  For federal agencies with only a data.json and for non-federal entities without geospatial harvest sources, contacting the Data.gov team to create the new harvest source is recommended.

  If you are geospatial data publisher and there is a need for you to directly create a harvest source instead of a consolidated CSW endpoint as indicated above, please contact the Data.gov team.


  #### **Testing** 


  The Data.gov team will test to ensure the harvester works properly. If anything seems wrong, the team will help you configure your data catalog so that Data.gov can collect your datasets without any errors.


  #### **Live within 24 hours!** 


  Once the harvester has been tested successfully, Data.gov will start automatically consuming information about your datasets and all the basic details of your datasets will be available on Data.gov with links to the source and your open data policy.
policy_tags: ""
name: How to get your Open Data on Data.gov
slug: data-gov-open-data-howto
description: Data.gov is the central clearinghouse for open data from the United
  States federal government and also provides access to many local government
  and non-federal open data resources. Find out below how federal, federal
  geospatial, and non-federal data is funneled to Data.gov and how you can get
  your data federated on Data.gov for greater discoverability and impact.
source: data.gov
category: Skills development
tags:
  - open data
  - internal-todo
format: ""
examples: ""
layout: resource
toc: true
publish: false
link: https://resources.data.gov/tools/how-to-get-your-open-data-on-datagov/
---
