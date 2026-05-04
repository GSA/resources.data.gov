---
resource_name: Harvest Error FAQ -- Overview

slug: harvester-faq-overview

description: An overview of the most common harvest errors on harvest.data.gov, based on analysis of errors across 81 harvest sources. Use this page to identify your error type and find the right fix.

source: data.gov

category: Skills development

tags:
  - open data


guidance_tags: ""

format: ""

details: >-

  
  ## Harvester Guide Pages
  
  <table>
  <thead>
    <tr>
      <th>Error Type</th>
      <th>Page</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Getting Started</strong></td>
      <td>
        <a href="/resources/harvester-what-is-harvesting/">What is Harvesting?</a> | 
        <a href="/resources/harvester-help/">Understanding Harvest Errors</a>
      </td>
    </tr>
    <tr>
      <td><strong>Quick Lookup</strong></td>
      <td>
        <a href="/resources/harvester-faq-overview/">FAQ Overview</a> | 
        <a href="/resources/harvester-faq-quick-reference/">Quick Reference</a>
      </td>
    </tr>
    <tr>
      <td><strong>Date & Time</strong></td>
      <td><a href="/resources/harvester-faq-date-errors/">Date Format Errors (modified, issued)</a></td>
    </tr>
    <tr>
      <td><strong>Update Frequency</strong></td>
      <td><a href="/resources/harvester-faq-accrual/">accrualPeriodicity Errors</a></td>
    </tr>
    <tr>
      <td><strong>License</strong></td>
      <td><a href="/resources/harvester-faq-license/">License Field Errors</a></td>
    </tr>
    <tr>
      <td><strong>Contact Info</strong></td>
      <td><a href="/resources/harvester-faq-email/">Email Format Errors (contactPoint.hasEmail)</a></td>
    </tr>
    <tr>
      <td><strong>Keywords/Tags</strong></td>
      <td>
        <a href="/resources/harvester-faq-missing-fields/">Missing Keywords</a> | 
        <a href="/resources/harvester-faq-keyword-format/">Keyword Format</a>
      </td>
    </tr>
    <tr>
      <td><strong>Missing Fields</strong></td>
      <td><a href="/resources/harvester-faq-missing-fields/">Missing Required Fields (modified, keyword, description)</a></td>
    </tr>
    <tr>
      <td><strong>File Structure</strong></td>
      <td><a href="/resources/harvester-faq-transformation/">Transformation Errors (ISO 19115, XML, file problems)</a></td>
    </tr>
    <tr>
      <td><strong>Other Issues</strong></td>
      <td><a href="/resources/harvester-faq-other-errors/">Duplicates, Sync Failures, Unrecognized Records</a></td>
    </tr>
  </tbody>
  </table>
  


  ## About this FAQ
  
  This FAQ documents the most frequently encountered errors in harvest.data.gov jobs. It is based on analysis of 1,470 errors across 81 active harvest sources. Each error type has its own page with a plain-language explanation of the cause and step-by-step fix instructions. Use the summary below to identify your error type and go to the right page.


  If you are not sure what your error means or where to start, see [Understanding your harvest error notification](/resources/harvester-help/) first. That page walks through how to read an error message from the beginning.

  
  ---

  
  ## Error types at a glance
  
  Harvest errors fall into two main categories.


  **Validation errors** occur when a metadata field value does not conform to the DCAT-US schema. The record can be read, but a specific field value is wrong or missing. These make up about 66% of all errors.


  **Transformation errors** occur before validation. The record cannot be read or converted at all. These make up about 32% of all errors.


  The remaining errors are less common types covered on the [other errors](/resources/harvester-faq-other-errors/) page.

  
  ---

  
  ## Validation errors -- find your field
  
  If your error message contains `$.fieldname` near the start, it is a validation error. Find the field name below.


  - `modified` or `issued` -- date value is malformed: [date format errors](/resources/harvester-faq-date-errors/)


  - `accrualPeriodicity` -- plain English instead of a code: [accrualPeriodicity errors](/resources/harvester-faq-accrual/)


  - `license` -- free text instead of a URL: [license errors](/resources/harvester-faq-license/)


  - `contactPoint.hasEmail` -- email address is malformed: [email format errors](/resources/harvester-faq-email/)


  - `keyword` -- field is present but wrong format: [keyword format errors](/resources/harvester-faq-keyword-format/)


  If your error message says `'fieldname' is a required property`, the field is missing entirely:


  - Missing `modified` or `keyword`: [missing required fields](/resources/harvester-faq-missing-fields/)

  
  ---

  
  ## Transformation errors
  
  If your error message starts with `record failed to transform`, it is a transformation error. See [transformation errors](/resources/harvester-faq-transformation/).


  Common subtypes:


  - `element 'linkage' is missing` -- ISO 19115-2 record is missing a required element


  - `ISO 19115-2 file did not contain a gmi:MI_Metadata element` -- wrong schema type configured


  - `XML file is not well formed` -- the metadata file is corrupted or invalid XML

  
  ---

  
  ## Other errors
  
  - `Duplicate identifier` -- same dataset identifier exists in two sources


  - `ExternalRecordToClass` -- record structure is unrecognized


  - `SynchronizeException` -- transient sync failure, usually resolved by re-running the job


  See [other errors](/resources/harvester-faq-other-errors/) for details on all three.


examples: ""
link: ""
layout: resource
toc: true
publish: true
---
