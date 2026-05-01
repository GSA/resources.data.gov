---
resource_name: Harvest Error -- Keyword Format

slug: harvester-faq-keyword-format

description: How to fix harvest validation errors where the keyword field is present but contains a string instead of the required array of strings.

source: data.gov

category: Skills development

tags:
  - open data
  - data sharing
  - data inventory
  - harvest

guidance_tags: ""

format: ""

details: |

  ### keyword -- wrong format errors

  This error affects about 26 records. It occurs when the `keyword` field exists in the record but its value is a plain string instead of an array of strings.

  This is different from a missing `keyword` field. The field is there -- it just has the wrong data type.

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

  ```
  "keyword": ["public health", "surveillance", "CDC"]
  ```

  Even a single keyword must be in an array:

  ```
  "keyword": ["environment"]
  ```

  ---

  ### If you can edit your metadata directly

  Wrap the keyword value in square brackets to make it an array. If the field contains null or non-string values, replace them with descriptive text keywords.

  ---

  ### If you cannot edit the metadata yourself

  Contact whoever manages your agency's metadata publishing system and tell them:

  > "The `keyword` field on some of our datasets is formatted as a plain string instead of an array. It must always be an array of strings, even for a single keyword. For example, `\"environment\"` should be `[\"environment\"]`. This is causing validation failures on harvest.data.gov."

  ---

  ### Related pages

  - [Missing required fields](/resources/harvester-faq-missing-fields/) -- if `keyword` is absent entirely rather than malformed

  - [Quick reference](/resources/harvester-faq-quick-reference/) -- at-a-glance fix table

  - [FAQ overview](/resources/harvester-faq-overview/) -- all error types

examples: ""

link: ""

layout: resource

toc: true

publish: true
---
