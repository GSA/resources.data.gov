---
category: Data tools
description: ReVAL (Reusable Validation & Aggregation Library) is a Django App for
  validating and aggregating data via API and web interface.
details: "ReVal (Reusable Validation Library) is an open source Django App for validating\
  \ data via an API and web interface.\n\nIn the web interface, ReVal can manage data\
  \ submitted as file uploads to a central gathering point, including data validation,\
  \ basic change tracking and duplicate file handling. Each file generally contains\
  \ multiple data rows, and each user may submit multiple files.\n\nUsing the API,\
  \ ReVal can validate data and generally do anything that is possible via the web\
  \ interface.\n\n### Features\n\n* Flexible input format\n* Validation with:\n  *\
  \ [goodtables](https://github.com/frictionlessdata/goodtables-py)\n  * [JSON Logic](https://github.com/QubitProducts/json-logic-py)\n\
  \  * [SQL](https://sqlite.org/lang_keywords.html)\n  * [JSON Schema](https://github.com/Julian/jsonschema)\n\
  \  * a custom validation class\n* Row-by-row feedback on validation results\n* Manage\
  \ and track status of data submissions\n* Re-submit previous submissions\n* Flexible\
  \ ultimate destination for data\n* [API](https://github.com/18F/ReVAL/blob/master/docs/api.md)\
  \ for validation\n\n### [](https://github.com/18F/ReVAL#requirements)Requirements\n\
  \n* Python (3.5, 3.6)\n* Django (2.2+)\n* Goodtables\n* pyyaml\n* djangorestframework\n\
  * psycopg2\n* json_logic_qubit\n* dj-database-url\n* requests"
examples: '### Use case: USDA Food & Nutrition Service


  USDA FNS uses ReVal to implement their Data Validation Service tool for validating
  data from FNS-742 form submissions.  Each year state agencies report these data
  for each School Food Authority (SFA) with schools operating the National School
  Lunch Programs (NSLP) and/or the School Breakfast Program (SBP).


  ### Use case: Census Commodity Flow


  The Census Bureau uses ReVal to explore an implementation to check Commodity Flow
  Survey (CFS) Data.  These CFS data are used by policy makers and transportation
  planners in various federal, state, and local agencies for assessing the demand
  for transportation facilities and services, energy use, and safety risk and environmental
  concerns.


  ### Use case: Work Zone Data Exchange


  The Department of Transportation uses ReVal to validate Work Zone Data by validating
  it against the Work Zone Data Exchange (WZDx) Specification.  The Work Zone Data
  Exchange (WZDx) Specification enables infrastructure owners and operators (IOOs)
  to make harmonized work zone data available for third party use. The intent is to
  make travel on public roads safer and more efficient through ubiquitous access to
  data on work zone activity. Specifically, the project aims to get data on work zones
  into vehicles to help automated driving systems (ADS) and human drivers navigate
  more safely.'
format: ''
layout: resource
link: '[GitHub repository](https://github.com/18F/ReVAL)'
name: ReVal (Reusable Validation Library)
policy_tags: ''
publish: true
slug: reval
source: General Services Administration
tags:
- API
- data validation
toc: true
---