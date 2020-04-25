---
name: ReVal (Reusable Validation Library)
slug: reval
description: ReVAL (Reusable Validation & Aggregation Library) is a Django App
  for validating and aggregating data via API and web interface.
source: General Services Administration
category: Data tools
tags:
  - API
  - data validation
policy_tags: ""
format: ""
details: >-
  ReVal (Reusable Validation Library) is an open source Django App for
  validating data via an API and web interface.


  In the web interface, ReVal can manage data submitted as file uploads to a central gathering point, including data validation, basic change tracking and duplicate file handling. Each file generally contains multiple data rows, and each user may submit multiple files.


  Using the API, ReVal can validate data and generally do anything that is possible via the web interface.


  ### Features


  * Flexible input format

  * Validation with:

    * [goodtables](https://github.com/frictionlessdata/goodtables-py)
    * [JSON Logic](https://github.com/QubitProducts/json-logic-py)
    * [SQL](https://sqlite.org/lang_keywords.html)
    * [JSON Schema](https://github.com/Julian/jsonschema)
    * a custom validation class
  * Row-by-row feedback on validation results

  * Manage and track status of data submissions

  * Re-submit previous submissions

  * Flexible ultimate destination for data

  * [API](https://github.com/18F/ReVAL/blob/master/docs/api.md) for validation


  ### Requirements


  * Python (3.5, 3.6)

  * Django (2.2+)

  * Goodtables

  * pyyaml

  * djangorestframework

  * psycopg2

  * json_logic_qubit

  * dj-database-url

  * requests
examples: >-
  ### Use case: USDA Food & Nutrition Service


  USDA FNS uses ReVal to implement their Data Validation Service tool for validating data from FNS-742 form submissions.  Each year state agencies report these data for each School Food Authority (SFA) with schools operating the National School Lunch Programs (NSLP) and/or the School Breakfast Program (SBP). States piloting this tool in 2019 [reported time savings, reduced stress, and greater efficiency for the pilot states.](https://18f.gsa.gov/2020/04/23/saving-time-and-improving-data-quality-for-the-national-school-lunch-breakfast-program/)


  ### Use case: Census Commodity Flow


  The Census Bureau uses ReVal to explore an implementation to check Commodity Flow Survey (CFS) Data.  These CFS data are used by policy makers and transportation planners in various federal, state, and local agencies for assessing the demand for transportation facilities and services, energy use, and safety risk and environmental concerns.


  ### Use case: Work Zone Data Exchange


  The Department of Transportation uses ReVal to validate Work Zone Data by validating it against the Work Zone Data Exchange (WZDx) Specification.  The Work Zone Data Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs) to make harmonized work zone data available for third party use. The intent is to make travel on public roads safer and more efficient through ubiquitous access to data on work zone activity. Specifically, the project aims to get data on work zones into vehicles to help automated driving systems (ADS) and human drivers navigate more safely.
link: "[Source code on GitHub](https://github.com/18F/ReVAL)"
layout: resource
toc: true
link to resource: "[Source code on GitHub](https://github.com/18F/ReVAL)"
publish: true
---
