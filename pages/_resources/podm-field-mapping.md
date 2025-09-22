---
resource_name: Metadata Resources and Field Mappings under the Project Open Data
  Metadata Schema (DCAT-US Schema v1.1)
slug: podm-field-mapping
description: Provides further background and resources to assist agencies in
  implementing the Project Open Data Metadata Schema v1.1. Maps fields from the
  current version of DCAT-US v1.1 to the previous version of the schema (v1.0),
  as well as other schemas (CKAN API, DCAT, and Schema.org).
source: data.gov
category: Data standards
tags:
  - open data
  - data standards
  - data schema
  - DCAT
  - Project Open Data Metadata Schema
  - open data
  - data inventory
guidance_tags: ""
format: ""
details: >-
  This section provides further background and resources to assist agencies in
  implementing the [Project Open Data Metadata Schema v1.1](../dcat-us/).


  In addition to template and sample files we also produce Project Open Data Metadata schema in JSON schema format. [JSON schema](http://json-schema.org/) describes a JSON data format. It can be used to automatically validate Data.json files and to generate forms for creating JSON.


  ### Terms and Abbreviations 

  * **POD** - [Project Open Data](../dcat-us/)

  * **JSON** - [JavaScript Object Notation](http://json.org/)

  * **DCAT** - [Data Catalog Vocabulary](http://www.w3.org/TR/vocab-dcat/)

  * **CKAN** - [CKAN software](http://ckan.org/)

  * **Schema.org** - [schema.org](http://schema.org/)

  * **JSON Schema** - [JSON Schema docs](http://json-schema.org/) and [specification](http://json-schema.org/latest/json-schema-core.html)

  * **JSON-LD** - [JSON-LD docs](http://json-ld.org/) and [specification](http://www.w3.org/TR/json-ld/)


  ### JSON Schema Files 


  * [1.1 Schema](../../schemas/dcat-us/v1.1/schema/catalog.json) (Draft). The [Catalog](../../schemas/dcat-us/v1.1/schema/catalog.json) schema includes by reference the [Dataset](../../schemas/dcat-us/v1.1/schema/dataset.json), [Distribution](../../schemas/dcat-us/v1.1/schema/distribution.json), [Organization](../../schemas/dcat-us/v1.1/schema/organization.json), and [vCard](../../schemas/dcat-us/v1.1/schema/vcard.json) schemas. 


  ### JSON-LD Context 


  * [1.1 Schema](../../schemas/dcat-us/v1.1/schema/catalog.jsonld) (Draft)



  ### Sample Data Files


  - [JSON - Minimum Requirements](../../schemas/dcat-us/v1.1/examples/catalog-sample.json)

  - [JSON - With Extended Fields](../../schemas/dcat-us/v1.1/examples/catalog-sample-extended.json)

  - [CSV - Minimum Requirements](../../schemas/dcat-us/v1.1/examples/catalog-sample.csv) *(limited to one distribution per dataset)*

  - [CSV - With Extended Fields](../../schemas/dcat-us/v1.1/examples/catalog-sample-extended.csv) *(limited to one distribution per dataset)*



  ### Use Cases  
    
  #### Starting from a spreadsheet

  Some agencies may initially build or maintain data catalogs through large spreadsheets.  In order to then generate a data.json file from this, simply import the spreadsheet (in the form of a CSV file) into the [CSV Converter](https://catalog.data.gov/report/metrics-dashboard), translate the metadata as needed, and then generate an appropriately formatted JSON file.


  #### Utilizing CKAN

  [CKAN](http://www.CKAN.org) is a popular, open-source data catalog that can be installed independently or run as a service.  Even if an agency hasn't begun a data catalog, adopting CKAN can provide a robust and feature-rich solution with which to begin maintaining an internal or external catalog.  In addition to providing an effective means of organizing the agency's data catalog, CKAN provides several opportunities for generating the needed data.json file. See the [ckanext-datajson](https://github.com/GSA/ckanext-datajson) and [USMetadata](https://github.com/GSA/USMetadata/) extensions.


  #### Using Socrata

  [Socrata](http://www.socrata.com/open-data-portal/) is a popular, open data catalog that is run as a service.  Agencies that have not adapted a data catalog yet, can use Socrata without having to install or setup any servers or software.  In addition to providing rich visualizations and data management features, Socrata **natively supports data.json** so any datasets managed through Socrata will be automatically exposed correctly.  Socrata also supports all the extended metadata fields through it's extensible metadata features.


  #### Manual translating a data file from another system

  Agencies may also manage their data catalogs through various database solutions such as Access, an asset management system, document management system, geoportal, or assorted proprietary systems.  Regardless of which system an agency employs, it should include a fundamental export option which allows the catalog to be exported as a CSV file, which can then be imported into the [CSV Converter](https://catalog.data.gov/report/metrics-dashboard) for conversation to an appropriately formatted JSON file.  Depending on the solutions' varied further functionality, some of them may also provide APIs which can then be configured to maintain the data.json file.  If not, they may instead support XML and JSON exports, which can then be converted to the proper format.


  #### Convert from CSV to JSON

  In order to generate appropriately formatted JSON, simply import an appropriately formatted CSV into the [CSV Converter](https://catalog.data.gov/report/metrics-dashboard), ensure that the metadata fields line up, and re-export the file.


  ### Schema Object Model Diagram

  -----------------------------

  ![Schema Diagram](../../schemas/dcat-us/v1.1/schema-diagram.svg)



  ### Field Mappings 


  #### Catalog Fields

  -----------------------------


  {: .table .table-striped}

  Label               | *POD v1.1*                    | *POD v1.0*   | *CKAN API*  | *DCAT*         | *Schema.org*

  -------             | -------                       | -------      | -------     | -------        | -------

  Metadata Context    | *@context*                    | *n/a*        | *n/a*       | *n/a*          |  *n/a* 

  Metadata Catalog ID | *@id*                         | *n/a*        | *n/a*       | *n/a*          |  *n/a*

  Metadata Type       | *@type*                       | *n/a*        | *n/a*       | *n/a*          |  *itemtype attribute*  

  Schema Version      | *conformsTo*                  | *n/a*        | *n/a*       | *n/a*          |  *n/a*

  Schema URL          | *describedBy*                 | *n/a*        | *n/a*       | *n/a*          |  *n/a*

  Dataset             | *dataset*                     | *n/a*        | *results*       | [dct:dataset](http://www.w3.org/TR/vocab-dcat/#Property:catalog_dataset) | [dataset](http://schema.org/dataset)



  #### Dataset Fields

  -----------------------------

  Note the mapping for `license` and `rights` from Project Open Data to DCAT applies the fields from the Dataset object in Project Open Data to each of the Distribution objects in DCAT. 


  {: .table .table-striped}

  Label                          | *POD v1.1*                             | *POD v1.0*   | *CKAN API* | *DCAT*  | *Schema.org*

  -------                        | -------                                | -------      | -------| ------- | -------

  Metadata Type                  | *@type*                                | *n/a*        | *n/a*       | *n/a*          |  *itemtype attribute* 

  Title                          | *title*                                | *title*                 | *title*           | [dct:title](http://www.w3.org/TR/vocab-dcat/#Property:dataset_title)                  | [name](http://schema.org/name)

  Description                    | *description*                          | *description*           | *notes*                | [dct:description](http://www.w3.org/TR/vocab-dcat/#Property:dataset_description) | [description](http://schema.org/description)

  Tags                           | *keyword*                              | *keyword*              | *tags*                | [dcat:keyword](http://www.w3.org/TR/vocab-dcat/#Property:dataset_keyword)    | [keywords](http://schema.org/keywords)

  Last Update                    | *modified*                             | *modified*          | *n/a*                 | [dct:modified](http://www.w3.org/TR/vocab-dcat/#Property:dataset_update_date) | [dateModified](http://schema.org/dateModified)

  Publisher                      | *publisher &rarr; name*                | *publisher*           | *organization* &rarr; *title*              | [dct:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher)  &rarr; [foaf:name](http://xmlns.com/foaf/spec/#term_name)| [publisher](http://schema.org/publisher) &rarr; [Organization](http://schema.org/Organization):[name](http://schema.org/name)

  Publisher Parent Organization  | *publisher &rarr; subOrganizationOf*   | *n/a*           | *n/a*              | [dct:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher) &rarr; [org:subOrganizationOf](http://www.w3.org/TR/vocab-org/#org:subOrganizationOf) | [publisher](http://schema.org/publisher) &rarr; [Organization](http://schema.org/Organization):[memberOf](http://schema.org/memberOf)

  Contact Name                   | *contactPoint &rarr; fn*               | *contactPoint*          | *maintainer*                | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/#Property:dataset_contactPoint)  &rarr; [vcard:fn](http://www.w3.org/TR/vcard-rdf/#d4e199) | [provider](http://schema.org/publisher) &rarr; [Person](http://schema.org/Person):[name](http://schema.org/name)

  Contact Email                  | *contactPoint &rarr; hasEmail*         | *mbox* | *maintainer_email*                | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/#Property:dataset_contactPoint) &rarr; [vcard:hasEmail](http://www.w3.org/TR/vcard-rdf/#d4e183) | [provider](http://schema.org/publisher) &rarr; [Person](http://schema.org/Person):[email](http://schema.org/email)

  Unique Identifier              | *identifier*                           | *identifier*     | *id*                | [dct:identifier](http://www.w3.org/TR/vocab-dcat/#Property:dataset_identifier) | *n/a*

  Public Access Level            | *accessLevel*                          | *accessLevel*                   | *n/a*             | *n/a* | *n/a*

  Bureau Code                    | *bureauCode*                           | *bureauCode*                   | *n/a*             | *n/a* | *n/a*

  Program Code                   | *programCode*                          | *programCode*                   | *n/a*             | *n/a* | *n/a*

  Distribution                   | *distribution*                         | *distribution*  | *resources*              | [dcat:distribution](http://www.w3.org/TR/vocab-dcat/#Property:dataset_distribution)| [distribution](http://schema.org/distribution)

  License                        | *license*                              | *license* | *license_title*        | [dct:license](http://www.w3.org/TR/vocab-dcat/#Property:distribution_license) | [license](http://schema.org/license)

  Rights                         | *rights*                               | *accessLevelComment*                   | *n/a*             | [dct:rights](http://www.w3.org/TR/vocab-dcat/#Property:distribution_rights)| *n/a*

  Endpoint                       | **Removed**                            | *webService*          | *resources*  &rarr; *url*             | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) | *n/a*

  Spatial                        | *spatial*                              | *spatial*      | *n/a*                | [dct:spatial](http://www.w3.org/TR/vocab-dcat/#Property:dataset_spatial) | [spatial](http://schema.org/spatial)

  Temporal                       | *temporal*                             | *temporal*    | *n/a*                | [dct:temporal](http://www.w3.org/TR/vocab-dcat/#Property:dataset_temporal) | [temporal](http://schema.org/temporal)

  Release Date                   | *issued*                               | *issued*         | *n/a*                | [dct:issued](http://www.w3.org/TR/vocab-dcat/#Property:dataset_release_date) | [datePublished](http://schema.org/datePublished)

  Frequency                      | *accrualPeriodicity*                   | *accrualPeriodicity*             | *n/a*                | [dct:accrualPeriodicity](http://www.w3.org/TR/vocab-dcat/#Property:dataset_frequency)    | *n/a*

  Language                       | *language*                             | *language*                   | *n/a*                | [dct:language](http://www.w3.org/TR/vocab-dcat/#Property:dataset_language)     | [inLanguage](http://schema.org/inLanguage)

  Data Quality                   | *dataQuality*                          | *dataQuality*          | *n/a*                | *n/a*  | *n/a*

  Category                       | *theme*                                | *theme*          | *groups*                | [dcat:theme](http://www.w3.org/TR/vocab-dcat/#Property:dataset_theme)   | [about](http://schema.org/about)

  Related Documents              | *references*                           | *references* | *n/a*                | [dct:references](http://dublincore.org/documents/dcmi-terms/#terms-references) | *n/a*

  Homepage URL                   | *landingPage*                          | *landingPage*                  | *n/a*                | [dcat:landingPage](http://www.w3.org/ns/dcat#Property:dataset_landingpage)  | [url](http://schema.org/url)

  Collection                     | *isPartOf*                             | *n/a*             |                                   | *n/a*   | [isPartOf](http://schema.org/isPartOf)

  System of Records              | *systemOfRecords*                      | *systemOfRecords*                  | *n/a*                | *n/a*  | *n/a*

  Primary IT Investment          | *primaryITInvestmentUII*               | *primaryITInvestmentUII*             |                                   | *n/a*   | *n/a*  

  Data Dictionary                | *describedBy*                          | *dataDictionary*       | *n/a*                | *n/a* | *n/a*

  Data Dictionary Type           | *describedByType*                      | *n/a*             |                                   | *n/a*   | *n/a*     

  Data Standard                  | *conformsTo*                           | *n/a*             |                                   | *n/a*   | *n/a*  



  #### Dataset Distribution Fields

  -------------------------------------------


  {: .table .table-striped}

  Label                   | *POD v1.1*        | *POD v1.0*        | *CKAN API*                        | *DCAT*  | *Schema.org*

  -------                 | -------           | -------           | -------                           | ------- | -------

  Metadata Type           | *@type*           | *n/a*             | *n/a*                             | *n/a*   |  *itemtype attribute* 

  Download URL            | *downloadURL*     | *accessURL*       | *resources*  &rarr; *url*         | [dcat:downloadURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_downloadurl) | [contentUrl](http://schema.org/contentUrl)

  Access URL              | *accessURL*       | *n/a*             | *resources*  &rarr; *url*         | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) | [contentUrl](http://schema.org/contentUrl)

  Media Type              | *mediaType*       | *format*          | *resources*  &rarr; *mimetype*    | [dcat:mediaType](http://www.w3.org/TR/vocab-dcat/#Property:distribution_media_type)       | *n/a*

  Format                  | *format*          | *n/a*             | *resources*  &rarr; *format*      | [dct:format](http://www.w3.org/TR/vocab-dcat/#Property:distribution_format)       | [encodingFormat](http://schema.org/encodingFormat)

  Title                   | *title*           | *n/a*             | *resources*  &rarr; *name*        | [dct:title](http://www.w3.org/TR/vocab-dcat/#Property:distribution_title)         | [name](http://schema.org/name)

  Description             | *description*     | *n/a*             | *resources*  &rarr; *description* | [dct:description](http://www.w3.org/TR/vocab-dcat/#Property:distribution_description)   | [description](http://schema.org/description)

  Data Dictionary         | *describedBy*     | *n/a*             |                                   | *n/a*   | *n/a*  

  Data Dictionary Type    | *describedByType* | *n/a*             |                                   | *n/a*   | *n/a*     

  Data Standard           | *conformsTo*      | *n/a*             |                                   | *n/a*   | *n/a*           


  ### Crosswalks for Geospatial Metadata

  -----------------------------

  [FGDC](http://www.fgdc.gov/) member agencies developed these crosswalks as a standardized resource for use by agencies in creating their Project Open Data metadata schema v1.1 (data.json) records. The crosswalks are intended as a reference model for the development of strategies and applications that support the conversion of existing geospatial metadata to the Project Open Data metadata schema v1.1.


  The crosswalks will be periodically updated to address user comments and revisions to the source metadata standards. Users are asked to add their own information about strategies, applications, and other products generated using these crosswalks. Problems or suggestions can be submitted by [creating a new issue](https://github.com/project-open-data/project-open-data.github.io/issues/new) or improvements can be proposed directly following the [guidelines for contributing](https://github.com/project-open-data/project-open-data.github.io/blob/master/CONTRIBUTING.md).


  Since the Project Open Data Metadata Schema v1.1 is also a JSON and JSON-LD serialization of [DCAT](http://www.w3.org/TR/vocab-dcat/). Others working with transforms between ISO 19115 and DCAT may also be interested in this crosswalk. 


  #### [CSDGM](http://www.fgdc.gov/metadata/csdgm/) to Project Open Data Metadata Schema v1.1 (POD v1.1) Crosswalk

  -------------------------------------------


  {: .table .table-striped .table-breakall}

  POD v1.1 | Label | Condition | Repeats | CSDGM Field | CSDGM xpath | Guidance

  ------- | ------- | ------- | ------- | ------- | ------- | -------

  **Catalog Fields** |  |  |  |  |  | 

  ------- | ------- | ------- | ------- | ------- | ------- | -------

  conformsTo | Schema Version | required | No | -- | -- | Populated by Agency Enterprise Inventory Application

  dataset | Dataset | required | Yes | -- | -- | Populated by Agency Enterprise Inventory Application

  **Dataset Fields** |  |  |  |  |  | 

  ------- | ------- | ------- | ------- | ------- | ------- | -------

  title | Title | required | No | title | `metadata>idinfo>citation>citeinfo>title` | 

  description | Description | required | No | abstract | `metadata>idinfo>descript>abstract` | 

  keyword | Tags | required | Yes | keywords (theme, place, stratum, temporal) add to:Keyword (any type) = `geospatial` | `metadata>idinfo>keywords>theme>themekey` & `metadata>idinfo>keywords>place>placekeymetadata>idinfo>keywords>stratum>stratkeymetadata>idinfo>keywords>temporal>tempkey` | Compile values from Theme, Place, Stratum, and Temporal Keywords, e.g. vegetation, Gulf Coast, Hurricane Katrina

  modified | Last Update | required | No | publication date | `metadata>idinfo>citation>citeinfo>pubdate` if non-date value, e.g. 'unknown' 'unpublished' then `metadata>metainfo>metd` | If date lacks day (DD) values, eg. YYYYMM (201501), add a dash between the year and month (2015-01)

  publisher>name | Publisher Name | required | No | `publisher` <br> if null `distributor name` <br> if null `originator` | `metadata>idinfo>citation>citeinfo>pubinfo>publish` if null then `metadata>distinfo>distrib>cntinfo>cntorgp>cntorg` & `metadata>distinfo>distrib>cntinfo>cntorgp>cntper` if null then `metadata>distinfo>distrib>cntinfo>cntperp>cntorg` & `metadata>distinfo>distrib>cntinfo>cntperp>cntper` if null then `metadata>idinfo>citation>citeinfo>origin` | If Distributor Contact used compile Organization Name and Person Name if both in CSDGM record, e.g. USGS, Mark Markson

  contactPoint>fn | Contact Name | required | No | point of contact person name & organization name. if null, metadata contact person name and organization name | `metadata>idinfo>ptcontac>cntinfo>cntorgp>cntorg` & `metadata>idinfo>ptcontac>cntinfo>cntorgp>cntper` if null then `metadata>idinfo>ptcontac>cntinfo>cntperp>cntorg` & `metadata>idinfo>ptcontac>cntinfo>cntperp>cntper` if null then `metadata>metainfo>metc>cntinfo>cntorgp>cntorg` & `metadata>metainfo>metc>cntinfo>cntorgp>cntper` if null then `metadata>metainfo>metc>cntinfo>cntperp>cntorgr` & `metadata>metainfo>metc>cntinfo>cntperp>cntpper` | Compile Organization Name and Person Name if both in CSDGM record, e.g. USGS, Mark Markson

  contactPoint>hasEmail | Contact Email | required | No | point of contact person & organization if  null, metadata contact email | `metadata>idinfo>ptcontac>cntinfo>cntemail` if `metadata>idinfo>ptcontac>cntinfo>cntorgp>cntorg` and `metadata>idinfo>ptcontac>cntinfo>cntorgp>cntper` null then `metadata>metainfo>metc>cntinfo>cntemail` | Use the contact email associated with the POC designated above

  identifier | Unique Identifier | required | No | title | `metadata>idinfo>citation>citeinfo>title` | 

  accessLevel | Public Access Level | required | No | insert POD default `public` | -- | If data is not `public`, manually change value to `restricted public` or `non-public`. If most data is not `public` change your default value to `restricted public` or `non-public`

  bureauCode | Bureau Code | required | Yes | hardcode into POD record | -- | Insert value (hardcode) in bureau's Enterprise Data Inventory

  programCode | Program Code | required | Yes | hardcode into POD record, if not feasible, add to: Theme Keyword = `<program code>`, Theme Keyword Thesaurus = `Federal Program Inventory` | `metadata>idinfo>keywords>theme>themekey` & `metadata>idinfo>keywords>theme>themekt` | Insert value (hardcode) into POD record. If not feasible, add to Theme Keyword: 1) Locate program code in the [Federal Program Inventory doc](https://obamaadministration.archives.performance.gov/s3fs-public/files/FederalProgramInventory_FY13_MachineReadable_091613.xls) 2) Add Program Code, e.g. "015:001" as a Theme Keyword 3) List  'Federal Program Inventory' as associated Theme Keyword Thesaurus, include URL if wanted

  spatial | Spatial | if applicable | No | bounding coordinates | `metadata>idinfo>spdom>bounding>westbc`, `southbc`, `eastbc`, `northbc` | Compile West, South, East, North values into single string, e.g. west coordinate, east coordinate, north coordinate, south coordinate

  temporal | Temporal | if applicable | No | time period of content | `metadata>idinfo>timeperd>timeinfo>title>rngdates>begdates/enddate` if null then `metadata>idinfo>timeperd>timeinfo>title>mdattim` (lowest as start date/ highest as end date) if null then `metadata>idinfo>timeperd>timeinfo>title>sngdate>caldate` (repeat as start/end date) | Concatonate values, e.g. `20150101/20150202`

  theme | Theme | optional | Yes | insert POD default `geospatial` | -- | Insert default value `geospatial` directly into POD record (POD requests this value to identify geospatial resources)

  **Distribution Fields** |  |  |  |  |  | 

  distribution>downloadURL | Download URL | if applicable | No |  | `metadata>distinfo>storder>digform>digtoption>onlinopt>networka>networkr` if null then `metadata>idinfo>citation>citeinfo>onlink` | Include if CSDGM value occurs, first instance

  distribution>mediaType | Media Type | required for download URL | No | insert POD default `application/http` |  | Insert default value `application/http` directly into POD record 


  ### ISO 19115 to Project Open Data Metadata Schema v1.1 (POD v1.1) Crosswalk

  -------------------------------------------


  {: .table .table-striped}

  POD v1.1 | Label | Condition | Repeats | Guidance | ISO Description | ISO XPath

  ------- | ------- | ------- | ------- | ------- | ------- | -------

  **Catalog Fields** |  |  |  |  |  | 

  ------- | ------- | ------- | ------- | ------- | ------- | -------

  conformsTo | Schema Version | required |  | populated by Agency Enterprise Inventory Application | -- | --

  dataset | Dataset | required |  | populated by Agency Enterprise Inventory Application | -- | --

  **Dataset Fields** |  |  |  |  |  | 

  ------- | ------- | ------- | ------- | ------- | ------- | -------

  title | Title | required | no |  | title | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString`

  description | Description | required | no |  | abstract | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract/gco:CharacterString`

  keyword | Tags | required | yes | POD JSON validator expects unique keywords. | keywords (theme, place, temporal) | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword` (gco:CharacterString or gmx:Anchor)

  modified | Last Update | required | no |  | data citation revision date | 1. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:date/gmd:CI_Date/gmd:dateType/gmd:CI_DateTypeCode == "revision" + gmi:MI_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:date/gmd:CI_Date/gmd:date/gco:Date` 2. `//gmd:dateStamp//gco:Date`

  publisher > name | Publisher | required | no |  | data citedResponsibleParty with publisher roleCode | 1. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:citedResponsibleParty/gmd:CI_ResponsibleParty/gmd:organisationName/gmd:organisationName[../../gmd:role/gmd:CI_RoleCode/@codeListValue=’publisher’]` 2. `//gmd:contact/gmd:CI_ResponsibleParty/[gmd:individualName|gmd:organisationName]/gco:CharacterString`

  publisher > subOrganizationOf |  | optional | no |  | --  | --

  contactPoint > fn | Contact Name | required | no | if person's name is null, then use organization or position name | 1. point of contact <br> 1a. person name <br> 1b. organization <br> 1c. position | 1a. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:individualName` (gco:CharacterString or gmx:Anchor) <br> 1b. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:organisationName`  (gco:CharacterString or gmx:Anchor) <br>  1c. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:positionName` (gco:CharacterString or gmx:Anchor) <br> 1a, 1b, and 1c can also be found in the `gmd:CI_ResponsibleParty` element in `//gmd:contact`

  contactPoint > hasEmail | Contact Email | required | no |  | point of contact email | for point of contact above:  `//gmd:pointOfContact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString` <br> also found in the `gmd:CI_ResponsibleParty` element in `//gmd:contact`  

  identifier | Unique Identifier | required | no |  | 1. metadata identifier <br> 2. title  | 1. `//gmd:fileIdentifier` <br> 2. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title`

  accessLevel | Public Access Level | required | no | default value is "public" | 1. resource constraints with codes of restricted, confidential, secret, or topSecret <br>  2. resource constraints with codes of copyright, patent, patentPending, trademark, license, or intellectualPropertyRights <br> 3. ISO codes do not specify 'public' as a constraint code | 1. "non-public" when <br> a. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:accessConstraints/gmd:MD_RestrictionCode == restricted` <br> b. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_SecurityConstraints/gmd:classification/gmd:MD_ClassificationCode == restricted, confidential, secret, or topSecret` <br>  2. "restricted public" when `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:accessConstraints/gmd:MD_RestrictionCode == copyright, patent, patentPending, trademark, license, or intellectualPropertyRights` <br> 3. set value of POD json field to public if these values do not exist in metadata

  bureauCode | Bureau Code | required | yes | insert value when uploaded to Agency Enterprise Inventory | -- | --

  programCode | Program Code | required | yes | Recommend hardcoding program information into the POD, if not feasible then add to keywords - locate program code in the [Federal Program Inventory doc](../../schemas/dcat-us/v1.1/FederalProgramInventory_FY13_MachineReadable_091613.csv) - add Program Code, e.g. `"015:001"` as a Theme Keyword - list  'Federal Program Inventory' as associated Theme Keyword Thesaurus  | Keyword = `<program code>` + Thesaurus = `Federal Program Inventory` | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:keyword` (gco:CharacterString or gmx:Anchor) + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords/gmd:thesaurusName/gmd:CI_Citation/gmd:title = 'Federal Program Inventory'`

  license | License | if applicable | no | default value for government data is 'Public Domain'  | -- | --

  rights | Rights | if applicable | no |  | 1. legal access restriction code <br> 2. security constraints classification code | 1. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints/gmd:accessConstraints/gmd:MD_RestrictionCode` <br> 2. `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_SecurityConstraints/gmd:classification/gmd:MD_ClassificationCode`

  spatial | Spatial | if applicable | no | minimum longitude, minimum latitude, maximum longitude, maximum latitude | Geographic Bounding Coordinates | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:westBoundLongitude` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:southBoundLatitude` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:eastBoundLongitude` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude`

  temporal | Temporal | if applicable |  | concatonate values, e.g. `2015-01-01/2015-02-02` | time period begin and end dates | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition`

  accrualPeriodicity | Frequency | optional | no |  |  resource maintenance and update frequency | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode` Convert values of this field based on the following mapping:  <br> continual - `R/PT1S`  <br> daily - `R/P1D`  <br> weekly - `R/P1W`  <br> fortnightly - `R/P0.5M`  <br> monthly - `R/P1M`  <br> quarterly - `R/P3M`  <br> biannually - `R/P0.5Y`  <br> asNeeded - `irregular`  <br> irregular - `irregular`  <br> notPlanned - `irregular`  <br> unknown - `irregular`

  conformsTo  | Data Standard | optional | no |  | -- | --

  dataQuality | Data Quality | optional | no |  | -- | --

  describedBy  | Data Dictionary | optional | no |  | feature catalog url | `//gmd:contentInfo/gmd:MD_FeatureCatalogueDescription/featureCatalogueCitation/CI_Citation/citedResponsibleParty/CI_ResponsibleParty/contactInfo/CI_Contact/onlineResource/CI_OnlineResource/linkage/URL`

  describedByType  | Data Dictionary Type | optional | no | infer mime type from suffix of the url for describedBy tag | -- | --

  isPartOf  | Collection | optional | no |  | larger work title | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:aggregationInfo/gmd:MD_AggregateInformation/gmd:aggregateDataSetName/gmd:CI_Citation/gmd:title` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:aggregationInfo/gmd:MD_AggregateInformation/gmd:associationType/gmd:DS_AssociationTypeCode == largerWorkCitation`

  issued  | Release Date | optional | no | should be ISO 8601 extended date format | data citation publication date | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:date/gmd:CI_Date/gmd:dateType/gmd:CI_DateTypeCode == publication` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:date/gmd:CI_Date/gmd:date` (gco:Date or gco:DateTime)

  language  | Language | optional | yes |  | language of data | `(gmi:MI_Metadata | gmd:MD_Metadata)/gmd:locale/gmd:PT_Locale/gmd:languageCode/gmd:LanguageCode` the value of this field based on the following mapping:  <br> `eng; USA` - `en-US` <br> `spa; USA` - `es-US`  <br> `eng; CAN` - `en-CA`  <br> `fre; CAN` - `fr-CA`  <br> `spa; MEX` - `es-MX`

  landingPage  | Homepage URL | optional | no |  | data citation url with  'information' function code | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:citedResponsibleParty/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode == information` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:citedResponsibleParty/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL`

  primaryITInvestmentUII  | Primary IT Investment UII  | optional | no | -- | -- | --

  references  | Related Documents | optional | yes |  | crossreference url | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:aggregationInfo/gmd:MD_AggregateInformation/gmd:associationType/gmd:DS_AssociationTypeCode == crossreference` + `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:aggregationInfo/gmd:MD_AggregateInformation/gmd:aggregateDataSetName/gmd:CI_Citation/gmd:citedResponsibleParty/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource/gmd:CI_OnlineResource/gmd:linkage/gmd:URL`

  systemOfRecords | System of Records | optional | no | -- | -- | --

  theme | Theme | optional |  | POD requested value to identify geospatial resources | ISO topic category | `//gmd:identificationInfo/gmd:MD_DataIdentification/gmd:topicCategory/gmd:MD_TopicCategoryCode`

  **Dataset Distribution Fields** | Distribution | optional | yes |  |  | 

  ------- | ------- | ------- | ------- | ------- | ------- | -------

  accessURL | Access URL | if applicable | no |  | 1. distribution url with function code of information, search, order or offlineAccess  <br> 2. distributor url with function code of information, search, order or offlineAccess | 1. `//gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode == information, search, order or offlineAccess` + `//gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/linkage/URL`  <br> 2. `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode == information, search, order or Offline Access` + `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL`  

  conformsTo  | Data Standard | optional | no | provide URL to specification of format | 1. distribution format specification  <br> 2. distributor format specification | 1. `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat/gmd:MD_Format/gmd:specification` IF content of gmd:specification begins with "http"  <br> 2. `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorFormat/gmd:MD_Format/gmd:specification` IF content of gmd:specification begins with "http"

  describedBy  | Data Dictionary  | optional | no |  | feature catalog url | `//gmd:contentInfo/gmd:MD_FeatureCatalogueDescription/featureCatalogueCitation/CI_Citation/citedResponsibleParty/CI_ResponsibleParty/contactInfo/CI_Contact/onlineResource/CI_OnlineResource/linkage/URL`

  describedByType  | Data Dictionary Type | optional | no | infer mime type from 'describedBy' url | -- | --

  description  | Description | optional | no |  | distributor url description with 'download' function | `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:functiongmd:CI_OnLineFunctionCode == download` + `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:description`

  downloadURL  | Download URL | if applicable | no |  | distributor url with 'download' function | `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode == download` + `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL`

  format  | Format | optional | no | mediaType is used over format | -- | --

  mediaType  | Media Type | if applicable | no | infer mime type from 'downloadURL' url | -- | --

  title  | Title | optional | no |  | distributor url name with 'download' function | `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode == download` + `//gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor/gmd:MD_Distributor/gmd:distributorTransferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:name/gco:CharacterString`
examples: ""
link: ""
layout: resource
toc: true
publish: false
---
