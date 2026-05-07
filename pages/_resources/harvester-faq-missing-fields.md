---
resource_name: Harvest Error -- Missing Required Fields

slug: harvester-faq-missing-fields

description: How to fix harvest validation errors caused by required metadata fields that are absent entirely from a dataset record.

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
  


  ## Missing required fields
  
  These errors occur when a metadata field that DCAT-US requires is absent from the dataset record entirely. This is different from a field that is present but has a malformed value -- the field is simply not there at all.

  
  ---

  
  ### Missing modified


  #### What you see


  ```
  'modified' is a required property
  ```


  #### What this means
  
  Every dataset record must include a `modified` field containing the date the dataset or its metadata was last updated. This record does not have one.


  #### What the correct format looks like
  
  The value must be an ISO 8601 date:


  ```
  2024-01-15
  ```


  A full timestamp is also acceptable:


  ```
  2024-01-15T00:00:00Z
  ```


  #### If you can edit your metadata directly
  
  Add a `modified` field to the record. Use the date the data was last updated. If you are not sure, use the date the metadata record was created or the date of the most recent harvest run.


  #### If you cannot edit the metadata yourself
  
  Contact whoever manages your agency's metadata publishing system and tell them:


  > "Some of our dataset records are missing the required `modified` field. Every record needs a `modified` date in ISO 8601 format, for example `2024-01-15`. This is causing validation failures on harvest.data.gov."

  
  ---

  
  ### Missing keyword


  #### What you see


  ```
  'keyword' is a required property
  ```


  #### What this means
  
  Every dataset record must include at least one keyword (tag) to help people find the dataset in search results. This record has no `keyword` field at all.


  #### What the correct format looks like
  
  Keywords must be an array of strings, even if there is only one:


  ```
  "keyword": ["public health", "surveillance", "CDC"]
  ```


  #### If you can edit your metadata directly
  
  Add a `keyword` field with at least one descriptive tag. Two to five keywords is typical. Choose terms that describe the subject matter of the dataset.


  #### If you cannot edit the metadata yourself
  
  Contact whoever manages your agency's metadata publishing system and tell them:


  > "Some of our dataset records are missing the required `keyword` field. Every record needs at least one keyword as an array of strings, for example `[\"public health\"]`. This is causing validation failures on harvest.data.gov."

  
  ---

  
  ### Missing or empty description


  #### What you see


  ```
  $.description does not match any of the acceptable formats
  ```


  #### What this means
  
  The `description` field is present but its value is null, empty, or contains markup that fails validation. A plain text description is required.


  #### If you can edit your metadata directly
  
  Add or correct the `description` field with a plain text summary of what the dataset contains. Remove any HTML tags. The field cannot be empty.


  #### If you cannot edit the metadata yourself
  
  Contact whoever manages your agency's metadata publishing system and tell them:


  > "Some of our dataset records have a missing or invalid `description` field. Every record needs a plain text description of what the dataset contains. HTML or empty values are not accepted. This is causing validation failures on harvest.data.gov."


examples: ""
link: ""
layout: resource
toc: true
publish: true
---
