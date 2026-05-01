---
resource_name: Harvest Error -- Date Format Errors

slug: harvester-faq-date-errors

description: How to identify and fix malformed date values in the modified and issued fields, the most common cause of harvest validation errors.

source: data.gov

category: Skills development

tags:
  - open data

guidance_tags: ""

format: ""

details: >-



  ### Date format errors -- modified and issued


  Date format errors in the `modified` and `issued` fields are the single most common cause of harvest validation failures, making up about 40% of all errors.


  ---


  ### What you see


  ```
  $.modified, '201603-01-01T00:00:00.000+00:00' does not match any of the acceptable formats
  ```


  or


  ```
  $.issued, '201505-01-01T00:00:00.000+00:00' does not match any of the acceptable formats
  ```


  ---


  ### What this means


  The date value has a typo. The year and month are run together without the required hyphen separator, producing an invalid date string that the schema cannot accept.

  For example, `201603-01-01` is invalid because the year `2016` and month `03` are merged into `201603`. The correct value is `2016-03-01`.

  This error is usually not introduced by hand. It is typically produced by a metadata pipeline or export tool that has a bug in how it formats dates.


  ---


  ### Most common offending values


  - `201603-01-01T00:00:00.000+00:00` -- should be `2016-03-01T00:00:00.000+00:00`

  - `201505-01-01T00:00:00.000+00:00` -- should be `2015-05-01T00:00:00.000+00:00`

  - `201404-01-01T00:00:00.000+00:00` -- should be `2014-04-01T00:00:00.000+00:00`

  These values are concentrated in KML and Census boundary file sources from 2014 to 2016.


  ---


  ### What the correct format looks like


  Dates must follow ISO 8601 format. The separator between year, month, and day must always be a hyphen.

  - Date only: `2016-03-01`

  - Date and time: `2016-03-01T00:00:00.000+00:00`

  - Date and time in UTC: `2016-03-01T00:00:00Z`

  Any of these are valid. The key requirement is that the year, month, and day are each separated by a hyphen.


  ---


  ### If you can edit your metadata directly


  Find the `modified` and `issued` fields in your metadata records and correct the date format. Check that the year, month, and day each have a hyphen between them.

  If many records are affected, the fix is best applied in the system that generates your metadata rather than record by record.


  ---


  ### If you cannot edit the metadata yourself


  Contact whoever manages your agency's metadata publishing system or data catalog and tell them:

  > "The `modified` and `issued` date fields on some of our datasets are formatted incorrectly. The year and month are being merged without a hyphen separator. For example, `201603-01-01` should be `2016-03-01`. This is causing validation failures on harvest.data.gov."


  ---


  ### Related pages

  - [Missing required fields](/resources/harvester-faq-missing-fields/) -- if `modified` is absent entirely rather than malformed

  - [Quick reference](/resources/harvester-faq-quick-reference/) -- at-a-glance fix table

  - [FAQ overview](/resources/harvester-faq-overview/) -- all error types



examples: ""

link: ""

layout: resource

toc: true

publish: true
---
