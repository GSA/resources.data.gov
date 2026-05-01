---
resource_name: Harvest Error -- Transformation Errors

slug: harvester-faq-transformation

description: How to identify and fix transformation errors, which occur when harvest.data.gov cannot read or convert a metadata record before validation even begins.

source: data.gov

category: Skills development

tags:
  - open data
  - data sharing
  - data inventory
  - harvest

guidance_tags: ""

format: ""

details: |

  ### Transformation errors

  Transformation errors make up about 32% of all harvest errors. They occur before validation -- the system cannot read or convert the source record at all. These are structural problems with the metadata file itself, not field-level formatting issues.

  All transformation errors begin with:

  ```
  record failed to transform
  ```

  These errors almost always require a fix in the system that generates or publishes the metadata files. They cannot typically be resolved by editing individual field values.

  ---

  ### ISO 19115-2 -- missing required element

  #### What you see

  ```
  record failed to transform: validation messages: WARNING: ISO19115-2 reader: element 'linkage' is missing
  ```

  or

  ```
  record failed to transform: validation messages: WARNING: ISO19115-2 reader: element 'identificati' is missing
  ```

  #### What this means

  The source record is in ISO 19115-2 format, which is used for geospatial metadata. The record is missing an element that the system needs to convert it into DCAT-US format. Common missing elements include `linkage` (the URL for the resource) and `identificationInfo` (the dataset identification block).

  #### What to tell your IT team

  > "Our ISO 19115-2 metadata records are missing required elements. The harvest error says an element such as `linkage` or `identificationInfo` is missing. Without these elements the system cannot convert the records to the format data.gov requires. The fix needs to happen in the system that authors or exports our geospatial metadata."

  ---

  ### ISO 19115-2 -- wrong root element

  #### What you see

  ```
  record failed to transform: validation messages: ERROR: ISO 19115-2 file did not contain a gmi:MI_Metadata element
  ```

  #### What this means

  The metadata file does not contain the root element that ISO 19115-2 requires. This usually means one of two things: the file is actually ISO 19115-1 but the harvest source is configured for ISO 19115-2, or the XML has a structural problem at the root level.

  #### What to tell your IT team

  > "Some of our harvest records are failing with an error saying the file did not contain a `gmi:MI_Metadata` element. This usually means the harvest source schema type is set incorrectly, or the metadata files are ISO 19115-1 rather than ISO 19115-2. Please check the harvest source configuration and the format of the source files."

  ---

  ### Malformed XML -- file is not well formed

  #### What you see

  ```
  record failed to transform: structure messages: ERROR: XML file is not well formed
  ```

  #### What this means

  The metadata file cannot be parsed at all. It is not valid XML. Common causes include unclosed tags, illegal characters, encoding mismatches, or truncated files. This is similar to a document that is corrupted and will not open.

  #### What to tell your IT team

  > "One or more of our metadata files contains invalid XML that the harvest system cannot read. The error says the file is not well formed. The fix needs to happen in the system that generates or exports the metadata files. Common causes are unclosed tags, encoding issues, or file truncation."

  ---

  ### mdtranslator service unreachable

  #### What you see

  ```
  record failed to transform with error: HTTPSConnectionPool(host='mdtranslator-prod.apps.internal'): Max retries exceeded
  ```

  #### What this means

  The internal service that converts ISO 19115 records into DCAT-US format was temporarily unreachable during the harvest job. This is a transient infrastructure issue, not a problem with the source data.

  #### What to do

  Re-run the harvest job. No changes to source metadata are needed. If the error affects many records across multiple job runs, report it to your data.gov point of contact as a potential infrastructure issue.

  ---

  ### Related pages

  - [FAQ overview](/resources/harvester-faq-overview/) -- all error types

  - [Other errors](/resources/harvester-faq-other-errors/) -- duplicates, sync failures, and unrecognized record structures

  - [Quick reference](/resources/harvester-faq-quick-reference/) -- at-a-glance summary

examples: ""

link: ""

layout: resource

toc: true

publish: true
---
