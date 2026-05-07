---
resource_name: Harvest Error -- Quick Reference

slug: harvester-faq-quick-reference

description: A one-page summary of the most common harvest validation error fixes, including field corrections and ISO 8601 duration codes for accrualPeriodicity.

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
  


  ## Quick reference -- common harvest error fixes
  
  Use this page to look up a fix when you already know the field name from your error message. For full explanations of each error, follow the links to the detail pages.

  
  ---

  
  ## Field-level fixes


  **modified / issued -- malformed date**


  - Wrong: `201603-01-01T00:00:00.000+00:00`

  - Correct: `2016-03-01T00:00:00.000+00:00`

  - Detail: [date format errors](/resources/harvester-faq-date-errors/)

  
  ---


  **modified -- missing entirely**


  - Add the field with a valid ISO 8601 date, for example: `2024-01-15`

  - Detail: [missing required fields](/resources/harvester-faq-missing-fields/)

  
  ---


  **accrualPeriodicity -- plain English value**


  - `Weekly` -- use `R/P1W`

  - `Monthly` -- use `R/P1M`

  - `Annual` -- use `R/P1Y`

  - `Daily` -- use `R/P1D`

  - `Quarterly` -- use `R/P3M`

  - `Semiannual` -- use `R/P6M`

  - `No longer updated`, `Archived`, `Never` -- use `irregular`

  - Detail: [accrualPeriodicity errors](/resources/harvester-faq-accrual/)

  
  ---


  **license -- free text instead of a URI**


  - Wrong: `Other (Public Domain)` or `None`

  - Correct: `https://creativecommons.org/publicdomain/zero/1.0/`

  - Detail: [license errors](/resources/harvester-faq-license/)

  
  ---


  **contactPoint.hasEmail -- malformed email**


  - Remove subject lines: `mailto:contact@agency.gov` not `mailto:contact@agency.gov (subject: ...)`

  - Use email not URL: `mailto:contact@agency.gov` not `mailto:contact.agency.gov`

  - One address only: `mailto:a@agency.gov` not `mailto:a@agency.gov, mailto:b@agency.gov`

  - No trailing spaces or invisible characters

  - Detail: [email format errors](/resources/harvester-faq-email/)

  
  ---


  **keyword -- string instead of array**


  - Wrong: `"keyword": "environment"`

  - Correct: `"keyword": ["environment"]`

  - Detail: [keyword format errors](/resources/harvester-faq-keyword-format/)

  
  ---


  **keyword -- missing entirely**


  - Add at least one keyword as an array: `"keyword": ["public health"]`

  - Detail: [missing required fields](/resources/harvester-faq-missing-fields/)

  
  ---

  
  ## ISO 8601 duration codes for accrualPeriodicity
  

  - Continuous / real-time: `R/PT1S`

  - Hourly: `R/PT1H`

  - Daily: `R/P1D`

  - Weekly: `R/P1W`

  - Biweekly: `R/P2W`

  - Monthly: `R/P1M`

  - Quarterly: `R/P3M`

  - Semiannual: `R/P6M`

  - Annual: `R/P1Y`

  - Biennial: `R/P2Y`

  - Irregular or no longer updated: `irregular`

  
  ---

  
  ## Error type triage
  

  **Error starts with `$.fieldname`** -- validation error, find the field name above


  **Error says `'fieldname' is a required property`** -- field is missing: [missing required fields](/resources/harvester-faq-missing-fields/)


  **Error starts with `record failed to transform`** -- transformation error: [transformation errors](/resources/harvester-faq-transformation/)


  **Error says `Duplicate identifier`** -- two sources publishing same dataset: [other errors](/resources/harvester-faq-other-errors/)


  **Error says `SynchronizeException`** -- re-run the job: [other errors](/resources/harvester-faq-other-errors/)


examples: ""
link: ""
layout: resource
toc: true
publish: true
---
