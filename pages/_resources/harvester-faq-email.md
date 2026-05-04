---
resource_name: Harvest Error -- contactPoint.hasEmail

slug: harvester-faq-email

description: How to fix harvest validation errors in the contactPoint.hasEmail field caused by malformed email addresses, extra text, multiple addresses, or invisible characters.

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
  


  ## contactPoint.hasEmail -- email format errors
  
  This error affects about 63 records. It occurs when the contact email address for a dataset is not in the exact format the schema requires.

  
  ---

  
  ### What you see


  ```
  $.contactPoint.hasEmail, 'mailto:nhsn@cdc.gov (subject line: Hospital Respiratory Data)' does not match
  ```

  
  ---

  
  ### What this means
  
  The `contactPoint.hasEmail` field must contain exactly one email address formatted as a `mailto:` URI with nothing else. Several different problems can trigger this error.

  
  ---

  
  ### Common problems and fixes
  
  Subject line appended to the address:


  - Wrong: `mailto:nhsn@cdc.gov (subject line: Hospital Respiratory Data)`

  - Correct: `mailto:nhsn@cdc.gov`


  URL instead of email address (missing the @ sign):


  - Wrong: `mailto:cdcinfo.cdc.gov`

  - Correct: `mailto:cdcinfo@cdc.gov`


  Multiple addresses in one field:


  - Wrong: `mailto:a@agency.gov, mailto:b@agency.gov`

  - Correct: `mailto:a@agency.gov` (one address only)


  Trailing whitespace or invisible characters:


  - Wrong: `mailto:contact@agency.gov ` (trailing space or non-breaking space)

  - Correct: `mailto:contact@agency.gov`


  Uppercase characters in the domain:


  - Wrong: `mailto:Contact@Agency.GOV`

  - Correct: `mailto:contact@agency.gov`

  
  ---

  
  ### What the correct format looks like


  ```
  mailto:name@agency.gov
  ```


  The value must start with `mailto:`, contain exactly one valid email address, and have no extra text, punctuation, or spaces.

  
  ---

  
  ### A note on invisible characters
  
  Some records contain invisible Unicode characters such as non-breaking spaces or zero-width spaces that were introduced when the email address was copied from a web page or document. These are not visible when you look at the field but cause validation to fail. If you have corrected the visible formatting and the error persists, check for invisible characters by retyping the value from scratch rather than copying and pasting.

  
  ---

  
  ### If you can edit your metadata directly
  
  Correct the `contactPoint.hasEmail` field to contain a single `mailto:` URI. Remove subject lines, extra addresses, and any trailing whitespace. If you are not sure whether invisible characters are present, retype the value rather than copying it. If there are multiple contact addresses, keep only the primary one. Additional addresses can be mentioned in the `description` field if needed.

  
  ---

  
  ### If you cannot edit the metadata yourself
  
  Contact whoever manages your agency's metadata publishing system and tell them:


  > "The `contactPoint.hasEmail` field on some of our datasets is not formatted correctly. It must contain exactly one email address as a `mailto:` URI with no extra text, no subject lines, and no extra spaces. For example: `mailto:contact@agency.gov`. Watch for invisible Unicode characters if copying from a web page. This is causing validation failures on harvest.data.gov."


examples: ""
link: ""
layout: resource
toc: true
publish: true
---
