---
resource_name: Harvester Help
slug: harvester-help
description:  A step-by-step guide to understanding harvest errors, reading the harvest job page, and fixing the most common metadata problems.
source: data.gov
category: Skills development
tags:
  - open data
  - workforce development
  - data sharing
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
  


  ## Understanding and fixing harvest errors
  
  When harvest.data.gov cannot process one or more of your agency's dataset records, it generates an error. This guide walks you through how to identify the problem, understand what the error means, and take the right steps to fix it.
  
  **New to harvesting?** Read [What is Harvesting?](/resources/harvester-what-is-harvesting/) first to understand how the system works.

  **Know your field name already?** Jump to the [Quick Reference](/resources/harvester-faq-quick-reference/) for fast lookup.

  
  ---

  
  ## **1. What is a harvest error?**
  
  harvest.data.gov is the system that automatically pulls your agency's dataset listings into the public catalog at data.gov. It runs on a schedule and checks each dataset's metadata against a standard format called DCAT-US.
  
  A harvest error means one or more of your datasets had metadata that the system could not read or could not accept. The dataset may still appear on data.gov if it was previously published, but the latest version of its information could not be loaded.
  
  **An error does not mean your data is gone.** It means the metadata description of your dataset had a problem. Your actual data files are not affected.

  
  ---
  
  
  ## **2. How you'll know about errors**
  
  You may learn about harvest errors in several ways:
  
  - **Error notification email**: If you're registered to receive notifications, you'll get an email when a harvest job encounters errors. The email includes the harvest source name, number of errors, and a link to the harvest job page.
  
  - **Routine monitoring**: During regular checks of your harvest source page on harvest.data.gov, you'll see error counts in recent harvest jobs.
  
  - **Data.gov point of contact**: Your agency's data.gov liaison may notify you about persistent or high-priority errors.
  
  **To see error details, visit your harvest source page on harvest.data.gov.** If you received an email notification, click the link in the email to go directly to the specific harvest job.

  
  ---

  
  ## **3. Understanding the harvest job page**

  **First time viewing a harvest job page?** The page may look complex, but you only need to focus on a few key elements described below.
  
  The harvest job page shows a summary of what happened during a harvest run.
  

  ### **What the numbers mean**
  
  At the top of the page, you'll see several counts:
  
  - **Records total**: How many dataset records were found in your source catalog

  - **Records added**: New datasets that were published successfully to data.gov

  - **Records updated**: Existing datasets that were refreshed successfully

  - **Records errored**: Datasets that could not be processed — **this is the number to focus on**

  - **Records ignored**: Datasets skipped because nothing changed since last time

  
  ### **Finding the error details**
  
  Look for one of these options on the page:
 
  - A button or link to **download the errors CSV**

  - A section showing the **error list** directly on the page

  - A tab or expandable section labeled **"Errors"** or **"Error Log"**
  

  The error details show you:

  - Which dataset has the problem (by identifier or title)

  - What field or aspect of the metadata is wrong

  - The specific error message
  

  ### **What the job history shows**
  
  Below the current job summary, you may see a list of previous harvest jobs. This history is useful for:

  - Seeing if errors are new or recurring

  - Checking whether error counts are increasing or decreasing over time

  - Verifying that fixes from previous errors worked (errors should disappear from newer jobs)

  
  ---

  
  ## **4. Reading an error message**
  
  Error messages look intimidating but follow a simple pattern. Here's a real example:

  > $.accrualPeriodicity, 'Weekly' does not match any of the acceptable formats

  
  **Break it into three parts:**

  
  1. **The field name**: Appears right after `$.` at the start. In the example above it's `accrualPeriodicity`. That's the metadata field that has the problem.
  
  2. **The value that was rejected**: Appears in single quotes after the field name. In this example: `'Weekly'`. That's what your metadata currently says.
  
  3. **What was expected**: Everything after "does not match" describes the required format. You don't need to understand the technical pattern — the sections below translate the most common ones into plain English.
  
 
  **Find the field name in the sections below to see what to do.**
  

  > **Note:** If the message starts with **"record failed to transform"** rather than a field name, skip to [Transformation Errors](#transformation-errors). Those are a different kind of problem.
  
  
  ---

  
  ## **5. Common validation errors and fixes**

  
  These are errors where the harvester can read your record but a specific field value is wrong or missing.
  
  ### **Date format errors: modified or issued**
  
  **What you see:**

  > $.modified, '201603-01-01T00:00:00.000+00:00' does not match any of the acceptable formats
  
  **What this means:**  
  
  The date recorded for when this dataset was last modified or published has a typo. The year and month are run together without the required hyphen between them. For example, `201603` should be `2016-03`.
  
  **How to fix:**
  
  - Find the `modified` or `issued` field in your metadata record and correct the date format
 
  - Dates must follow this pattern: `YYYY-MM-DD` (example: `2016-03-01`)
 
  - The most common mistake is writing `201603-01-01` instead of `2016-03-01`
  
  **If you cannot edit the metadata yourself, send this to your IT team:**

  > "The **modified** date on some of our datasets is formatted incorrectly. The year and month need a hyphen between them. For example, **201603-01-01** should be **2016-03-01**. This is causing harvest failures on data.gov."
  
  **Full details:** [Date format errors](/resources/harvester-faq-date-errors/)

  ---
  
  ### **Update frequency: accrualPeriodicity**
  
  **What you see:**

  > $.accrualPeriodicity, 'Weekly' does not match any of the acceptable formats

  
  **What this means:**  
  
  The field that describes how often this dataset is updated contains a plain English word like "Weekly" or "Monthly." The system requires a specific code format instead.
  
  **How to fix:**
  
  Replace the plain English description with the correct code:
  
  <table>
    <thead>
      <tr>
        <th>If your metadata says:</th>
        <th>Change it to:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Weekly</td>
        <td>R/P1W</td>
      </tr>
      <tr>
        <td>Monthly</td>
        <td>R/P1M</td>
      </tr>
      <tr>
        <td>Annual or Annually</td>
        <td>R/P1Y</td>
      </tr>
      <tr>
        <td>Daily</td>
        <td>R/P1D</td>
      </tr>
      <tr>
        <td>Quarterly</td>
        <td>R/P3M</td>
      </tr>
      <tr>
        <td>No longer updated, Archived, Never</td>
        <td>irregular</td>
      </tr>
    </tbody>
  </table>
  **If you cannot edit the metadata yourself, send this to your IT team:**
  
  > "The **accrualPeriodicity** field on our datasets needs to use machine-readable codes instead of plain English. For example, **Weekly** should be **R/P1W**, **Monthly** should be **R/P1M**, and **Annual** should be **R/P1Y**. Datasets that are no longer updated should say **irregular**. This is causing harvest failures on data.gov."
  
  **Full details:** [accrualPeriodicity errors](/resources/harvester-faq-accrual/)
  
  ---
  
  
  ### **License field: must be a URL, not text**
  
  **What you see:**

  > $.license, 'Other (Public Domain)' does not match any of the acceptable formats


  **What this means:**  
    
  The license field contains a text description instead of a web address (URL) pointing to the license. The system only accepts a URL here.
  
  **How to fix:**  
  
  Replace the text with a URL. For most US government datasets: https://creativecommons.org/publicdomain/zero/1.0/

  
  If the data has a specific license, use that license's official URL. If there is no license, remove the field or set it to blank.
  
  **If you cannot edit the metadata yourself, send this to your IT team:**
  
  > "The **license** field on our datasets needs to contain a URL, not a text description. For most of our datasets the correct value is **https://creativecommons.org/publicdomain/zero/1.0/**. This is causing harvest failures on data.gov."
  
  **Full details:** [License errors](/resources/harvester-faq-license/)
  
  ---
  
  ### **Contact email: contactPoint.hasEmail**
  
  **What you see:**

  > $.contactPoint.hasEmail, 'mailto:nhsn@cdc.gov (subject line: Hospital Data)' does not match

    
  **What this means:**  
  
  The contact email address for this dataset is not in the right format. Common problems: extra text after the email address, multiple email addresses in one field, a web address instead of an email address, or extra spaces.
  
  **How to fix:**
  
  - The field must contain exactly one email address in this format: `mailto:name@agency.gov`

  - Remove any text after the email address (subject lines, descriptions, etc.)

  - If there are two email addresses, keep only one

  - Make sure the address contains an `@` sign

  - Remove any spaces before or after the address
  
  **If you cannot edit the metadata yourself, send this to your IT team:**

  > "The **contactPoint.hasEmail** field on some of our datasets is not formatted correctly. It must contain exactly one email address in the format **mailto:name@agency.gov** with no extra text, no subject lines, and no extra spaces. This is causing harvest failures on data.gov."
  
  **Full details:** [Email format errors](/resources/harvester-faq-email/)
  
  ---
  
  ### **Missing required fields**
  
  **What you see:**

  > 'modified' is a required property

  or

  > 'keyword' is a required property


  **What this means:**  
  
  The dataset record is missing a field that DCAT-US requires. Every dataset must include a `modified` date and at least one `keyword`. This record does not have one at all.
  
  **How to fix:**
  
  **For missing modified:**
  
  - Add a `modified` field to the dataset record

  - Use the date the data was last updated, formatted as: `YYYY-MM-DD` (example: `2024-01-15`)
  
  **For missing keyword:**
  
  - Add at least one keyword (tag) to the dataset record

  - Keywords should describe what the data is about, for example: public health, environment, budget

  - Two to five keywords is typical
  
  **If you cannot edit the metadata yourself, send this to your IT team:**

  > "Some of our datasets are missing the required **modified** date field and/or **keyword** field. Every dataset needs a **modified** date formatted as YYYY-MM-DD, and at least one keyword describing what the data is about. This is causing harvest failures on data.gov."
  
  **Full details:** [Missing required fields](/resources/harvester-faq-missing-fields/)
  
  ---
  
  ### **Keyword format: wrong data type**
  
  **What you see:**

  > $.keyword does not match any of the acceptable formats


  **What this means:**  
  The keyword field exists but contains a plain string instead of an array (list). Even a single keyword must be wrapped in brackets.
  
  **How to fix:**
  - Wrong: `"keyword": "environment"`
  - Correct: `"keyword": ["environment"]`
  
  **If you cannot edit the metadata yourself, send this to your IT team:**
  > "The **keyword** field on some of our datasets is formatted as a plain string instead of an array. It must always be an array of strings, even for a single keyword. For example, `\"environment\"` should be `[\"environment\"]`. This is causing harvest failures on data.gov."
  
  **Full details:** [Keyword format errors](/resources/harvester-faq-keyword-format/)
  
  ---
  
  ## **6. Transformation errors**
  
  These errors start with **"record failed to transform"**. They mean the system could not read the source file at all, before it even checked the individual fields. These almost always need to be fixed by your IT team or the system that generates your metadata files.
  
  ### **ISO 19115 missing required element**
  
  **What you see:**

  > record failed to transform: validation messages: WARNING: ISO19115-2 reader: element 'linkage' is missing



  **What this means:**  
  
  Your agency is publishing metadata in a geospatial format called ISO 19115. One of the required pieces of information, in this case the URL for the resource, is missing from the record. Without it the system cannot convert the record into the format data.gov uses.
  
  **What to tell your IT team:**
  
  > "Our ISO 19115 metadata records are missing required elements. The harvest error says 'element linkage is missing' (or similar). This means some records don't include the URL for the resource. The fix needs to happen in the system that generates our geospatial metadata. These records are failing to appear on data.gov."
  
  **Full details:** [Transformation errors](/resources/harvester-faq-transformation/)
  
  ---
  
  ### **Malformed XML**
  
  **What you see:**

  > record failed to transform: structure messages: ERROR: XML file is not well formed

    
  **What this means:**  

  The metadata file for this dataset is corrupted or has a structural error that makes it unreadable. The system cannot process the file at all.
  
  **What to tell your IT team:**

  > "One or more of our metadata files contains invalid XML that the harvest system cannot read. The error says 'XML file is not well formed.' The fix needs to happen in the system that generates or exports the metadata files. These records are failing to appear on data.gov."
  
  **Full details:** [Transformation errors](/resources/harvester-faq-transformation/)
  
  ---
  
  ### **Duplicate identifier**
  
  **What you see:**

  > Duplicate identifier 'ANDA203942' found for source: healthdata-gov


  **What this means:**  

  This dataset is being published to data.gov by two different sources at the same time using the same identifier. The system only accepts one version; the second one it encounters is rejected.
  
  **What to do:**  
 
  This requires a coordination decision, not a technical fix. Forward the error to your data.gov point of contact and include the identifier shown in the error message (e.g., `ANDA203942`). They can help identify which source should be removed.
  
  **Full details:** [Other errors](/resources/harvester-faq-other-errors/)
  
  ---
  
  ## **7. After you fix an error**
  
  Once you've corrected a metadata error, the fix will be validated the next time your harvest source runs (typically within 24 hours to 1 week, depending on your source's schedule).


  **To verify your fix worked:**

  1. Confirm the corrected metadata appears in your source catalog URL

  2. Wait for the next scheduled harvest to run

  3. Return to your harvest source page on harvest.data.gov

  4. Check the most recent job — the **Records Errored** count should be lower

  5. Download or view the error log — the specific error you fixed should no longer appear

  
  **If the error persists after 2-3 harvest cycles:**

  - Double-check that your changes were saved and published in your source system

  - Verify the changes appear in your source catalog URL (the URL the harvester reads from)

  - Compare your fix against the examples in the detailed error pages to ensure the format exactly matches requirements

  - Contact your data.gov point of contact if the error continues

  
  ---

  
  ## **8. When to escalate**

  Most errors fall into one of two categories:

  - **Metadata content problems** (wrong date format, missing field, wrong value) — these can often be fixed by whoever manages your agency's data inventory or catalog system

  - **System or file problems** (malformed XML, ISO structure errors) — these need your IT team or whoever built and maintains your metadata publishing pipeline

  
  **If after reading this guide you are still not sure what to do:**

  Forward the error details from the harvest job page to your data.gov point of contact. Include the name of your harvest source and the date of the failed job.

  ---

  ### Related pages

  - [What is harvesting?](/resources/harvester-what-is-harvesting/) -- understand how the harvest system works

  - [Harvest error FAQ overview](/resources/harvester-faq-overview/) -- all error types with links to detailed guides

  - [Quick reference](/resources/harvester-faq-quick-reference/) -- at-a-glance summary of common fixes
  
  ---
  
  
  For the full technical reference, see the harvest error FAQ.
  
  
examples: ""
link: ""
layout: resource
toc: true
publish: true
---
