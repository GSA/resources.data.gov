---
resource_name: Improving Discoverability, Usability and Governance of Priority Agency Data
slug: dcat-us-priorities
description: >-
  To improve the discoverability, usability, and governance of these priority
  agency data assets agencies shall apply the documenting techniques illustrated
  below.
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - Project Open Data Metadata Schema
  - DCAT
  - DCAT-US
  - metadata standard
  - data inventory
guidance_tags: ""
format: ""
details: >+
  <!-- SOURCE: https://github.com/GSA/dcat-us/blob/main/jsonschema/definitions/ -->

  ---
  
  
  This page documents metadata priorities for federal agency data assets. It describes specific keyword and field requirements tied to federal policy directives, and shows how those requirements map to DCAT-US v3.0 fields.


  
  **Note on DCAT-US version:** The original version of this page was written for DCAT-US v1.1. Field guidance has been updated to reflect DCAT-US v3.0. Where fields have changed between versions, both the original v1.1 field and the v3.0 equivalent are noted.

  
  ---
  
  
  
  ### COVID-19 Response Related Data Assets


  
  #### Policy background


  
  In April 2020, OMB Memorandum [M-20-16](https://www.whitehouse.gov/wp-content/uploads/2020/04/M-20-16.pdf) directed agencies to prioritize COVID-19 response data as their highest priority data asset during the public health emergency.

  
  
  **Current status:** The federal public health emergency for COVID-19 ended in May 2023. M-20-16 is no longer actively enforced as a current data prioritization requirement. Agencies that documented COVID-19 datasets under M-20-16 do not need to remove existing keywords -- they remain useful for discoverability -- but there is no active policy mandate requiring new COVID-19 prioritization.

  
  #### What to do with your metadata

  
  The `keyword` field is the only field specifically required under M-20-16. Include `COVID-19` and `coronavirus` as keywords on any dataset related to COVID-19 response. Additional descriptive keywords are encouraged -- for example `viral-testing`, `CARES-Act`, or `SARS-CoV-2`.

  
  The `keyword` field works the same way in DCAT-US v3.0 as it did in v1.1. No changes are needed to your existing COVID-19 keyword values.

  
  ---
  
  
  ### Data Assets to Fuel AI Research and Development

  
  
  #### Policy background
  
  
  In February 2019, [Executive Order 13859](https://www.federalregister.gov/documents/2019/02/14/2019-02544/maintaining-american-leadership-in-artificial-intelligence) directed agencies to improve data inventory documentation to enable discovery and usability of federal data assets for AI research, and to tag datasets suitable for AI research with standardized keywords.

  
  
  **Current status:** EO 13859 remains on the books. The AI policy landscape has evolved significantly since 2019 -- [EO 14179](https://www.federalregister.gov/documents/2025/01/31/2025-02172/removing-barriers-to-american-leadership-in-artificial-intelligence) is the current governing AI executive order, issued January 2025. The `usg-artificial-intelligence` keyword convention established under EO 13859 remains a useful and recognized practice. Agencies should continue applying it and consult current OMB guidance for any updated requirements under EO 14179.

  
  #### What to do with your metadata
  
  
  **Keywords** are the primary requirement under EO 13859. Include `usg-artificial-intelligence` on any dataset suitable for AI research. If the dataset is intended as training data, also include `usg-ai-training-data`. Additional descriptive keywords are encouraged -- for example `machine-learning`, `natural-language-processing`, or `AI`. The `keyword` field works the same way in v3.0 as it did in v1.1.

  
  
  **Contact information** is also required for AI datasets. Include a contact who can discuss restrictions or controls on the dataset with AI researchers. In v1.1 this was expressed using a vCard-style format. In v3.0 `contactPoint` uses a Kind object -- provide at minimum a `fn` (full name or team name) and a `hasEmail` value formatted with a `mailto:` prefix. You can optionally add a position title and organization name. See the [Dataset fields page](../dcat-us-3-dataset/) for the full contactPoint format.

  
  
  **Data quality** was required under EO 13859 to indicate whether a dataset meets the agency's Information Quality Guidelines. In v1.1 this was expressed using the `dataQuality` boolean field (set to `true` or `false`). That field is not in the v3.0 schema. In v3.0 use `hasQualityMeasurement` instead -- this is a structured object that captures the quality metric, the measured value, and the unit of measure. See the [QualityMeasurement class](https://resources.data.gov/standards/catalog/dcat-us-3/temporal-spatial-metrics/#class-qualitymeasurement-) technical reference for field details.
  
  
  
  **References and documentation** were required under EO 13859 if publications, model documentation, or other references exist for the dataset. In v1.1 this was expressed using the `references` field (an array of URLs). That field is not in the v3.0 schema. In v3.0 use one of two replacements depending on the type of link. Use `isReferencedBy` for publications or papers that cite or use the dataset -- this is a simple array of URL strings. Use `page` for documentation, model cards, or technical references about the dataset -- this is an array of Document objects, each with a `title` and an `accessURL` or `downloadURL`. See the [Dataset fields page](../dcat-us-3-dataset/) for details on both fields.
  
  
  ---
  
  
  ### Summary of field changes for priority datasets
  
  
  The following v1.1 fields used in priority dataset documentation have changed in v3.0.
  
  
  **`keyword`** -- No change. Same field, same format in both versions.
  
  
  **`contactPoint`** -- Same field name. Format updated in v3.0 -- use a Kind object with `fn` and `hasEmail`. Can now be an array for multiple contacts.
  
  
  **`dataQuality`** -- Replaced in v3.0 by `hasQualityMeasurement`. Use a structured QualityMeasurement object instead of a boolean value.
  
  
  **`references`** -- Replaced in v3.0 by two more specific fields. Use `isReferencedBy` for things that cite the dataset, and `page` for documentation about the dataset.


 
  
  ## DCAT US Pages
  
  
  ### [Index](https://resources.data.gov/resources/dcat-us3/)
  
  ### [Catalog](../dcat-us-3-catalog/)

  ### [Data Service](../dcat-us-3-data-service/)
  
  ### [Dataset Series](../dcat-us-3-dataset-series/)
  
  ### [Dataset](../dcat-us-3-dataset/)
  
  ### [Distribution](../dcat-us-3-distribution/)
  
  ### [Supporting Classes](../dcat-us-3-supporting-classes/)
  
  ### [DCAT Priorities](../dcat-us-priorities/)
  
  ### [DCAT US General Information](../dcat-us/)

examples: ""
link: ""
layout: resource
toc: true
publish: true
---
