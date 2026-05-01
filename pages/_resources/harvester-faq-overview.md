---
resource_name: Harvest Error FAQ -- Overview

slug: harvester-faq-overview

description: An overview of the most common harvest errors on harvest.data.gov, based on analysis of errors across 81 harvest sources. Use this page to identify your error type and find the right fix.

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

  ### About this FAQ

  This FAQ documents the most frequently encountered errors in harvest.data.gov jobs. It is based on analysis of 1,470 errors across 81 active harvest sources.

  Each error type has its own page with a plain-language explanation of the cause and step-by-step fix instructions. Use the summary below to identify your error type and go to the right page.

  If you are not sure what your error means or where to start, see [Understanding your harvest error notification](/resources/harvester-help/) first. That page walks through how to read an error message from the beginning.

  ---

  ### Error types at a glance

  Harvest errors fall into two main categories.

  **Validation errors** occur when a metadata field value does not conform to the DCAT-US schema. The record can be read, but a specific field value is wrong or missing. These make up about 66% of all errors.

  **Transformation errors** occur before validation. The record cannot be read or converted at all. These make up about 32% of all errors.

  The remaining errors are less common types covered on the [other errors](/resources/harvester-faq-other-errors/) page.

  ---

  ### Validation errors -- find your field

  If your error message contains `$.fieldname` near the start, it is a validation error. Find the field name below.

  - `modified` or `issued` -- date value is malformed: [date format errors](/resources/harvester-faq-date-errors/)

  - `accrualPeriodicity` -- plain English instead of a code: [accrualPeriodicity errors](/resources/harvester-faq-accrual/)

  - `license` -- free text instead of a URL: [license errors](/resources/harvester-faq-license/)

  - `contactPoint.hasEmail` -- email address is malformed: [email format errors](/resources/harvester-faq-email/)

  - `keyword` -- field is present but wrong format: [keyword format errors](/resources/harvester-faq-keyword-format/)

  If your error message says `'fieldname' is a required property`, the field is missing entirely:

  - Missing `modified` or `keyword`: [missing required fields](/resources/harvester-faq-missing-fields/)

  ---

  ### Transformation errors

  If your error message starts with `record failed to transform`, it is a transformation error. See [transformation errors](/resources/harvester-faq-transformation/).

  Common subtypes:

  - `element 'linkage' is missing` -- ISO 19115-2 record is missing a required element

  - `ISO 19115-2 file did not contain a gmi:MI_Metadata element` -- wrong schema type configured

  - `XML file is not well formed` -- the metadata file is corrupted or invalid XML

  ---

  ### Other errors

  - `Duplicate identifier` -- same dataset identifier exists in two sources

  - `ExternalRecordToClass` -- record structure is unrecognized

  - `SynchronizeException` -- transient sync failure, usually resolved by re-running the job

  See [other errors](/resources/harvester-faq-other-errors/) for details on all three.

  ---

  ### Quick reference

  Need a one-page summary of the most common fixes? See the [quick reference](/resources/harvester-faq-quick-reference/).

  ---

  ### All pages in this FAQ

  - [What is harvesting?](/resources/harvester-what-is-harvesting/)

  - [Understanding your harvest error notification](/resources/harvester-help/)

  - [Harvest error FAQ -- overview](/resources/harvester-faq-overview/) -- this page

  - [Date format errors](/resources/harvester-faq-date-errors/)

  - [accrualPeriodicity errors](/resources/harvester-faq-accrual/)

  - [License errors](/resources/harvester-faq-license/)

  - [Missing required fields](/resources/harvester-faq-missing-fields/)

  - [Email format errors](/resources/harvester-faq-email/)

  - [Keyword format errors](/resources/harvester-faq-keyword-format/)

  - [Transformation errors](/resources/harvester-faq-transformation/)

  - [Other errors](/resources/harvester-faq-other-errors/)

  - [Quick reference](/resources/harvester-faq-quick-reference/)

examples: ""

link: ""

layout: resource

toc: true

publish: true
---
