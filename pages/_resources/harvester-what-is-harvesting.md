---
resource_name: What is Harvesting?
slug: harvester-what-is-harvesting
description: A plain-language introduction to how harvest.data.gov works, what it does, and why it matters for federal data publishers.
source: data.gov
category: Skills development
tags:
  - open data
  - data sharing
  - data inventory
guidance_tags: ""
format: ""
details: >-



  ### What is harvesting?
  

  Harvesting is the automated process that keeps [data.gov](https://data.gov) up to date. Instead of agencies manually submitting their datasets one by one, harvest.data.gov regularly checks each agency's data catalog and pulls in the latest dataset information automatically.

  Think of it as a scheduled import. Your agency maintains its own catalog of datasets. The harvester visits that catalog on a set schedule, reads the metadata for each dataset, and loads it into data.gov so the public can find it.


  ---


  ### What is harvest.data.gov?
  

  [harvest.data.gov](https://harvest.data.gov) is the system that manages the harvesting process for federal agencies. It is where harvest sources are configured, where harvest jobs are run, and where errors are logged when something goes wrong.

  Each agency or data publisher has one or more harvest sources -- a configured connection between harvest.data.gov and the agency's data catalog. The harvester uses that connection to find and read the agency's dataset metadata.


  ---


  ### How the process works
  

  When a harvest runs, it goes through a few steps:

  - It retrieves the agency's metadata catalog from the configured source URL

  - It reads each dataset record and checks whether it is new, updated, or unchanged since the last harvest

  - It validates each record against the federal metadata standard, DCAT-US

  - Records that pass validation are published or updated on data.gov

  - Records that fail validation are logged as errors and skipped

  The harvester runs on a schedule -- typically daily or weekly depending on how the source is configured. Agencies can also request a manual run.


  ---


  ### What is a harvest source versus a harvest job?
  

  A harvest source is the configured connection between harvest.data.gov and your agency's data catalog. It tells the harvester where to find your metadata, what format it is in, and how often to check for updates.

  Each harvest source has its own page on harvest.data.gov showing its configuration, its recent job history, and any errors from the most recent run.

  Every time the harvester runs for a source, it creates a harvest job. A job is a single run of the harvest process for one source. It records how many records were checked, how many were added or updated, and how many had errors.

  If you receive a harvest error notification email, it will include a link to the specific harvest job that found the problem.


  ---

  
  ### Understanding harvest schedules
  
  
  Most harvest sources run automatically on a set schedule—typically daily or weekly, depending on how the source was configured. You do not need to manually trigger harvests under normal circumstances.
  
  The harvester will check your agency's catalog URL at the scheduled time, validate any new or changed records, and update data.gov accordingly. Some sources may be configured for manual-only harvesting, which means a data.gov administrator must trigger each run.
  
  To find your specific harvest schedule, log into harvest.data.gov and navigate to your agency's harvest source page, or check the timestamps on recent harvest jobs to identify the pattern.
  
  ---
  
  
  ### What happens after you fix an error
  
  
  When you correct a metadata error—whether by editing records directly or by updating the system that generates your metadata—the correction will be validated the next time your harvest source runs.
  
  
  **Timeline for fixes to appear:**
  
  - **In your source catalog**: Immediate to a few hours, depending on your agency's publishing system
  
  - **In harvest.data.gov validation**: Next scheduled harvest run (typically within 24 hours to 1 week)
  
  - **On data.gov**: Within minutes to a few hours after successful harvest validation
  
  The harvester reads from your source catalog URL. Even if you have corrected a record in your internal system, the fix will not be validated until the corrected metadata is published to the catalog URL and the next harvest job processes that record.
  
  
  **To verify a fix worked:**
  
  1. Confirm the corrected metadata appears in your source catalog URL
  
  2. Wait for the next scheduled harvest to run
  
  3. Check the harvest job results on harvest.data.gov—the Records Errored count should decrease and the specific error should no longer appear in the error log
  
  4. If the error persists after 2-3 harvest cycles, verify your fix matches the requirements in the [error-specific guide pages](/resources/harvester-faq-overview/) or contact your data.gov point of contact
  
  
  ---
  
  
  ### Monitoring your harvest source
  
  
  Regular monitoring helps catch problems early and maintain data quality on data.gov. Even when you are not receiving error notifications, it is good practice to periodically check your harvest source health.
  
  
  **What to check during routine reviews:**
  
  - **Records Errored count**: Is it zero or low? Has it increased since last time?
  
  - **Error patterns**: Are the same errors or dataset identifiers appearing repeatedly?
  
  - **Records Total count**: Does the total number of datasets match what you expect?
  
  - **Recent job dates**: Is your harvest source running on its expected schedule?

  
  **Best practices:**
  
  - Review harvest job results weekly or bi-weekly, even without error notifications
  
  - Check harvest results after any updates to your catalog software or publishing processes
  
  - Share results with your team members who author or manage dataset metadata
  
  - Keep an internal reference of common errors and fixes specific to your agency's data
  
  
  If you need to verify fixes urgently before the next scheduled harvest, contact DataGovHelp@gsa.gov to request a manual harvest run.
  

  ---


  ### Why does this matter?
  

  If your agency's datasets are not harvesting correctly, they may not appear on data.gov, or they may show outdated information. Harvest errors do not delete datasets that were previously published, but they do prevent updates from going through.

  Keeping your harvest source healthy means the public always has access to your agency's current dataset information.


  ---


  ### Who manages this?
  

  Harvest sources are typically set up and managed by an agency's data team or IT staff. Day-to-day monitoring -- including responding to error notifications -- is usually the responsibility of whoever manages the agency's data inventory or open data program.

  If you are not sure who manages your agency's harvest source, your agency's Chief Data Officer or open data point of contact is a good starting point.


  ---


  ### Where to go next
  

  - [Understanding your harvest error notification](/resources/harvester-help/) -- what to do when you get an error email

  - [Harvest error FAQ overview](/resources/harvester-faq-overview/) -- a summary of the most common harvest errors and where to find fixes

  - [harvest.data.gov](https://harvest.data.gov) -- the harvesting system itself

  - [Quick reference](/resources/harvester-faq-quick-reference/) -- at-a-glance error fixes and field corrections

  - [harvest.data.gov](https://harvest.data.gov) -- the harvesting system itself

  - [Glossary](/glossary/) -- definitions of harvesting terms, metadata fields, and technical concepts


examples: ""

link: ""

layout: resource

toc: true

publish: true
---
