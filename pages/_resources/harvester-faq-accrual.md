---
resource_name: Harvest Error -- accrualPeriodicity

slug: harvester-faq-accrual

description: How to fix accrualPeriodicity validation errors caused by plain English update frequency descriptions instead of the required ISO 8601 duration codes.

source: data.gov

category: Skills development

tags:
  - open data

guidance_tags: ""

format: ""

details: >-



  ### accrualPeriodicity -- update frequency format errors


  This error affects about 195 records across multiple sources. It occurs when the `accrualPeriodicity` field contains a plain English description of update frequency instead of the required code format.


  ---


  ### What you see
  

  ```
  $.accrualPeriodicity, 'Weekly' does not match any of the acceptable formats: constant value 'irregular' was expected, '^R\/P...'
  ```


  ---
  

  ### What this means


  The `accrualPeriodicity` field describes how often a dataset is updated. The DCAT-US schema requires this field to use either the literal value `irregular` or an ISO 8601 duration code in repeating interval format (e.g. `R/P1W` for weekly).

  Plain English values like `Weekly`, `Monthly`, or `No longer updated` are not accepted even though they are descriptively correct.


  ---


  ### Common rejected values and their correct replacements


  - `Weekly` -- use `R/P1W`

  - `Monthly` -- use `R/P1M`

  - `Annual` or `Annually` -- use `R/P1Y`

  - `Annual (R/P1Y)` -- use `R/P1Y` (the label alone, no parenthetical)

  - `Daily` -- use `R/P1D`

  - `Quarterly` -- use `R/P3M`

  - `Semiannual` -- use `R/P6M`

  - `No longer updated` -- use `irregular`

  - `Archived` -- use `irregular`

  - `Never` -- use `irregular`

  - `Not updated` -- use `irregular`

  For a full list of ISO 8601 duration codes, see the [quick reference](/resources/harvester-faq-quick-reference/).


  ---


  ### If you can edit your metadata directly


  Replace the plain English value with the appropriate code from the list above. If the dataset is no longer being updated for any reason, use `irregular`.


  ---

  ### If you cannot edit the metadata yourself


  Contact whoever manages your agency's metadata publishing system and tell them:

  > "The `accrualPeriodicity` field on our datasets needs to use ISO 8601 duration codes instead of plain English descriptions. For example, `Weekly` should be `R/P1W`, `Monthly` should be `R/P1M`, and `Annual` should be `R/P1Y`. Datasets that are no longer updated should use the value `irregular`. This is causing validation failures on harvest.data.gov."


  ---


  ### Related pages


  - [Quick reference](/resources/harvester-faq-quick-reference/) -- full ISO 8601 duration code table

  - [FAQ overview](/resources/harvester-faq-overview/) -- all error types



examples: ""

link: ""

layout: resource

toc: true

publish: true
---
