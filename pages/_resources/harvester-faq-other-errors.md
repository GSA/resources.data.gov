---
resource_name: Harvest Error -- Other Error Types

slug: harvester-faq-other-errors

description: How to identify and respond to less common harvest errors including duplicate identifiers, unrecognized record structures, and synchronization failures.

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
  


  ## Other error types
  
  These error types are less common than validation and transformation errors but do recur across sources. They often require a coordination decision or infrastructure investigation rather than a simple metadata fix.

  
  ---

  
  ### DuplicateIdentifierException


  #### What you see


  ```
  Duplicate identifier 'ANDA203942' found for source: healthdata-gov
  ```


  #### What this means
  
  The same dataset identifier exists in more than one harvest source. When two sources both publish a record with the same identifier, the system accepts the first one it encounters and rejects the second as a duplicate. This is common when the same dataset is published by two agencies or through two separate data portals that both feed into data.gov.


  #### What to do
  
  This is a curation decision, not a metadata formatting fix. Someone needs to determine which source is the canonical publisher for the affected dataset and remove the duplicate from the secondary source. Forward the error to your data.gov point of contact and include the identifier shown in the error message, for example `ANDA203942`. They can help identify which sources are in conflict and which one should be updated.

  
  ---

  
  ### ExternalRecordToClass


  #### What you see


  ```
  ExternalRecordToClass error
  ```


  #### What this means
  
  The harvester cannot map the record's structure to its internal data model. This typically means the record has an unexpected or unsupported structure that the system does not recognize.


  #### What to do
  
  Inspect the specific records flagged in the error log. Check whether the source format has changed recently or whether the records contain unusual field combinations. This may require coordination with your data.gov point of contact or the harvest.data.gov team to investigate the source record structure.

  
  ---

  
  ### SynchronizeException


  #### What you see


  ```
  SynchronizeException
  ```


  #### What this means
  
  An error occurred while the harvester was trying to write the record to the destination catalog after it had already passed validation. This is usually a transient issue rather than a problem with the metadata itself.


  #### What to do
  
  Re-run the harvest job. SynchronizeExceptions that occur in isolation are usually resolved by a subsequent run. If the same records fail repeatedly across multiple jobs, forward the error details to your data.gov point of contact for investigation.


examples: ""
link: ""
layout: resource
toc: true
publish: true
---
