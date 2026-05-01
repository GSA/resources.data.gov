---
resource_name: Harvester Help
slug: harvester-help
description:   This guide walks you through what a harvester email error means, how to read the error page, and what steps to take for the most common problems.
source: data.gov
category: Skills development
tags:
  - open data
  - workforce development
  - data sharing
guidance_tags: ""
format: ""
details: >-


  ## You got a harvest error email. Here's what to do.
  
  This guide walks you through what the email means, how to read the error page, and what steps to take for the most common problems.


  ---

  
  ## 1. What is a harvest error?
  
  harvest.data.gov is the system that automatically pulls your agency's dataset listings into the public catalog at data.gov. It runs on a schedule and checks each dataset's metadata against a standard format called DCAT-US.
  
  A harvest error means one or more of your datasets had metadata that the system could not read or could not accept. The dataset may still appear on data.gov if it was previously published, but the latest version of its information could not be loaded.
  
  **An error does not mean your data is gone.** It means the metadata description of your dataset had a problem. Your actual data files are not affected.

  ---
  
  ## 2. What the email is telling you

  
  The notification email tells you that a recent harvest job for your source found errors. It includes a link to the harvest job page where you can see the details.
  
  What to look for in the email:
  
  - Harvest source name: the name of your agency's data feed
  
  - Number of errors: how many dataset records had problems
  
  - A link: click it to see the full error details
  
  Click the link in the email. It will take you to a harvest job page on harvest.data.gov.

  
  ---
  
  ## 3. How to read the harvest job page


  The page you land on shows a summary of what happened during the most recent harvest run. Here is the term and what the numbers mean:
  
  - Records total:	How many dataset records were checked
  
  - Records added:	New datasets that were published successfully
  
  - Records updated:	Existing datasets that were refreshed successfully
  
  - Records errored:	Datasets that could not be processed: this is the number to focus on
  
  - Records ignored:	Datasets skipped because nothing changed since last time
  
  Look for a button or link to download the errors CSV or view the error list. That is where the specific problems are listed.

  
  ---
  
  ## 4. How to read an error message
  
  Error messages look intimidating but follow a simple pattern. Here is a real example:
 
  ```
  $.accrualPeriodicity, 'Weekly' does not match any of the acceptable formats
  ```
 
  Break it into three parts:
  
  - The field name: appears right after `$.` at the start. In the example above it is `accrualPeriodicity`. That is the metadata field that has the problem.

  - The value that was rejected: appears in single quotes after the field name. In this example: `'Weekly'`. That is what your metadata currently says.
  
  - What was expected: everything after "does not match" describes the required format. You do not need to understand the technical pattern: the entries below translate the most common ones into plain English.
  
  Find the field name in the list below to see what to do.
  
  > If the message starts with **"record failed to transform"** rather than a field name, skip to [transformation errors](#transformation-errors----the-file-itself-has-a-problem). Those are a different kind of problem.

  
  ---
  
  
  ## 5. Common errors and what to do
  
  
  ### Validation errors: metadata field problems
  
  Field: `modified` or `issued` -- date format problem
  
  
  What you see:
  
  ```
  $.modified, '201603-01-01T00:00:00.000+00:00' does not match any of the acceptable formats
  ```

  
  What this means:
  
  
  The date recorded for when this dataset was last modified or published has a typo. The year and month are run together without the required hyphen between them. For example, `201603` should be `2016-03`.

  
  If you can edit your metadata directly:

  
  - Find the `modified` or `issued` field in your metadata record and correct the date format. Dates must follow this pattern:

  
  ```
  YYYY-MM-DD   (example: 2016-03-01)
  ```

  
  The most common mistake is writing `201603-01-01` instead of `2016-03-01`.

  
  If you cannot edit the metadata yourself, copy and send this to your IT team:

  
  > "The **modified** date on some of our datasets is formatted incorrectly. The year and month need a hyphen between them. For example, **201603-01-01** should be **2016-03-01**. This is causing harvest failures on data.gov."


  
  ---

  
  ### Field: `accrualPeriodicity` -- update frequency format

  
  What you see:
  
  ```
  $.accrualPeriodicity, 'Weekly' does not match any of the acceptable formats
  ```

  
  What this means:

  
  The field that describes how often this dataset is updated contains a plain English word like "Weekly" or "Monthly." The system requires a specific code format instead.

  
  If you can edit your metadata directly:

  
  - Replace the plain English description with the correct code:

  
  If your metadata says:

  
  - `Weekly` Change it to	`R/P1W`


  - `Monthly`	Change it to`R/P1M`


  - `Annual` or `Annually` Change it to	`R/P1Y`


  - `Daily` Change it to	`R/P1D`


  - `Quarterly`	Change it to `R/P3M`


  - `No longer updated`, `Archived`, `Never` Change it to	`irregular`


  
  If you cannot edit the metadata yourself, copy and send this to your IT team:
  
  > "The **accrualPeriodicity** field on our datasets needs to use machine-readable codes instead of plain English. For example, **Weekly** should be **R/P1W**, **Monthly** should be **R/P1M**, and **Annual** should be **R/P1Y**. Datasets that are no longer updated should say **irregular**. This is causing harvest failures on data.gov."



  ---

  
  ### Field: `license` -- must be a link, not text

  
  What you see:
  
  ```
  $.license, 'Other (Public Domain)' does not match any of the acceptable formats
  ```

  
  What this means:

  
  The license field contains a text description instead of a web address (URL) pointing to the license. The system only accepts a URL here.

  
  If you can edit your metadata directly:

  
  Replace the text with a URL. For most US government datasets:

  
  ```
  https://creativecommons.org/publicdomain/zero/1.0/
  ```

  
  If the data has a specific license, use that license's official URL. If there is no license, remove the field or set it to blank.

  
  If you cannot edit the metadata yourself, copy and send this to your IT team:
  
  > "The **license** field on our datasets needs to contain a URL, not a text description. For most of our datasets the correct value is **https://creativecommons.org/publicdomain/zero/1.0/**. This is causing harvest failures on data.gov."


  
  ---

  
  ### Error: `'modified' is a required property`

  
  What you see:
  
  ```
  'modified' is a required property
  ```

  
  What this means:

  
  The dataset record is missing a required field. Every dataset must include a `modified` date, the date the dataset or its metadata was last updated. This record does not have one at all.

  
  If you can edit your metadata directly:

  
  Add a `modified` field to the dataset record. Use the date the data was last updated, formatted as:

  
  ```
  YYYY-MM-DD   (example: 2024-01-15)
  ```

  
  If you cannot edit the metadata yourself, copy and send this to your IT team:
  
  > "Some of our datasets are missing the required **modified** date field. Every dataset needs a **modified** field with the date it was last updated, formatted as YYYY-MM-DD. This is causing harvest failures on data.gov."

  
  ---

  
  ### Field: `contactPoint.hasEmail` -- contact email format

  
  What you see:
  
  ```
  $.contactPoint.hasEmail, 'mailto:nhsn@cdc.gov (subject line: Hospital Data)' does not match
  ```

  
  What this means:

  
  The contact email address for this dataset is not in the right format. Common problems: extra text after the email address, multiple email addresses in one field, a web address instead of an email address, or extra spaces.

  
  If you can edit your metadata directly:

  
  - The field must contain exactly one email address in this format: `mailto:name@agency.gov`

  
  - Remove any text after the email address (subject lines, descriptions, etc.)

  
  - If there are two email addresses, keep only one

  
  - Make sure the address contains an `@` sign

  
  - Remove any spaces before or after the address

  
  If you cannot edit the metadata yourself, copy and send this to your IT team:
  
  > "The **contactPoint.hasEmail** field on some of our datasets is not formatted correctly. It must contain exactly one email address in the format **mailto:name@agency.gov** with no extra text, no subject lines, and no extra spaces. This is causing harvest failures on data.gov."

  
  ---

  
  ### Error: `'keyword' is a required property`

  
  What you see:
  
  ```
  'keyword' is a required property
  ```

  
  What this means:

  
  This dataset has no tags or keywords. Every dataset is required to have at least one keyword to help people find it in search results.

  
  If you can edit your metadata directly:

  
  - Add at least one keyword (tag) to the dataset record. Keywords should describe what the data is about, for example: public health, environment, budget. Two to five keywords is typical.

  
  If you cannot edit the metadata yourself, copy and send this to your IT team:
  
  > "Some of our datasets are missing the required **keyword** (tags) field. Each dataset needs at least one keyword describing what the data is about. This is causing harvest failures on data.gov."

  
  ---

  
  ### Transformation errors: the file itself has a problem

  
  These errors start with "record failed to transform". They mean the system could not read the source file at all, before it even checked the individual fields. These almost always need to be fixed by your IT team or the system that generates your metadata files.

  
  ---
  
  
  ### Error: `element 'linkage' is missing` (or similar)

  
  What you see:
  
  ```
  record failed to transform: validation messages: WARNING: ISO19115-2 reader: element 'linkage' is missing
  ```
  
  What this means:
  
  Your agency is publishing metadata in a geospatial format called ISO 19115. One of the required pieces of information, in this case the URL for the resource, is missing from the record. Without it the system cannot convert the record into the format data.gov uses.

  
  What to tell your IT team, copy and send this:
  
  > "Our ISO 19115 metadata records are missing required elements. The harvest error says 'element linkage is missing' (or similar). This means some records don't include the URL for the resource. The fix needs to happen in the system that generates our geospatial metadata. These records are failing to appear on data.gov."

  
  ---
  
  ### Error: `XML file is not well formed`

  
  What you see:
  
  ```
  record failed to transform: structure messages: ERROR: XML file is not well formed
  ```
  
  What this means:

  
  The metadata file for this dataset is corrupted or has a structural error that makes it unreadable. The system cannot process the file at all.

  
  What to tell your IT team, copy and send this:

  
  > "One or more of our metadata files contains invalid XML that the harvest system cannot read. The error says 'XML file is not well formed.' The fix needs to happen in the system that generates or exports the metadata files. These records are failing to appear on data.gov."

  
  ---
  
  
  ### Error: `Duplicate identifier`

  
  What you see:
  
  ```
  Duplicate identifier 'ANDA203942' found for source: healthdata-gov
  ```

  
  What this means:

  
  This dataset is being published to data.gov by two different sources at the same time using the same identifier. The system only accepts one version, the second one it encounters is rejected.

  
  What to do:


  
  This requires a coordination decision, not a technical fix. Forward the error to your data.gov point of contact and include the identifier shown in the error message (e.g. `ANDA203942`). They can help identify which source should be removed.


  
  ---

  
  ## 6. When to escalate

  
  Most errors fall into one of two buckets:

  
  - Metadata content problems (wrong date format, missing field, wrong value), these can often be fixed by whoever manages your agency's data inventory or catalog system.

  
  - System or file problems (malformed XML, ISO structure errors), these need your IT team or whoever built and maintains your metadata publishing pipeline.



  
  ## If after reading this guide you are still not sure what to do:



  
  Forward the error CSV from the harvest job page to your data.gov point of contact. Include the name of your harvest source and the date of the failed job.


  
  
  ---
  
  
  For the full technical reference, see the harvest error FAQ.
  
  
examples: ""
link: ""
layout: resource
toc: true
publish: true
---
