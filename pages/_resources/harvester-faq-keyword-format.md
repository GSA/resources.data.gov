---
resource_name: Harvest Error -- Keyword Format

slug: harvester-faq-keyword-format

description: How to fix harvest validation errors where the keyword field is present but contains a string instead of the required array of strings.

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
  


  ## keyword -- wrong format errors
  
  This error affects about 26 records. It occurs when the `keyword` field exists in the record but its value is a plain string instead of an array of strings. This is different from a missing `keyword` field. The field is there -- it just has the wrong data type.

  
  ---

  
  ### What you see


  ```
  $.keyword does not match any of the acceptable formats
  ```

  
  ---

  
  ### What this means
  
  The DCAT-US schema requires `keyword` to be an array -- a list -- even if there is only one keyword. A plain string is not accepted.

  
  ---

  
  ### Common problems and fixes
  
  Single string instead of an array:


  - Wrong: `"keyword": "environment"`

  - Correct: `"keyword": ["environment"]`


  Null value:


  - Wrong: `"keyword": null`

  - Correct: `"keyword": ["unspecified"]` or add meaningful keywords


  Non-string elements in the array:


  - Wrong: `"keyword": [1, 2, "health"]`

  - Correct: `"keyword": ["health"]`

  
  ---

  
  ### What the correct format looks like
  
  Keywords must always be an array of strings, wrapped in square brackets:


  
      "keyword": ["public health", "surveillance", "CDC"]
  


  Even a single keyword must be in an array:


  
      "keyword": ["environment"]
  

  
  ---

  
  ### If you can edit your metadata directly
  
  Wrap the keyword value in square brackets to make it an array. If the field contains null or non-string values, replace them with descriptive text keywords.

  
  ---

  
  ### If you cannot edit the metadata yourself
  
  Contact whoever manages your agency's metadata publishing system and tell them:


  > "The `keyword` field on some of our datasets is formatted as a plain string instead of an array. It must always be an array of strings, even for a single keyword. For example, `\"environment\"` should be `[\"environment\"]`. This is causing validation failures on harvest.data.gov."


examples: ""
link: ""
layout: resource
toc: true
publish: true
---
