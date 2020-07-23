---
resource_name: Improving Discoverability, Usability and Governance of Priority Agency Data
slug: dcat-us-priorities
description: To improve the discoverability, usability, and governance of these 
  priority agency data assets agencies shall apply the documenting techniques 
  illustrated below. 
source: data.gov
category: Data standards
tags:
  - data schema
  - open data
  - DCAT
  - Project Open Data Metadata Schema
  - data standards
guidance_tags: ""
format: ""
details: >-
  {: .vertical-headings}

  Currently all Federal Agencies are required to provide Comprehensive Data Inventories with standard metadata, consistent with Data Catalog Vocabulary (DCAT) and   schema.org standards for harvesting by and display on Data.gov .  These Comprehensive Data Inventories also enable commercial search engines and tools to index Federal   data sets for discovery. The DCAT and schema.org standards already require much of the information necessary for discovery and an initial assessment of usability by   private sector or researchers. To improve the discoverability, usability, and governance of these priority agency data assets agencies shall apply the documenting   techniques illustrated below. 

  ### COVID-19 Response Data Assets

  Consistent with [M-20-16 Federal Agency Operational Alignment to Slow the Spread of Coronavirus COVID-19](https://www.whitehouse.gov/wp-content/uploads/2020/03/M-20-16.pdf), in places where the [Federal Data Strategy 2020 Action Plan](https://strategy.data.gov/action-plan/) calls for agencies to prioritize data assets and projects, agencies are required to include COVID-19 response data as their highest priority. Agency Chief Data Officers’ shall: 

  1. Identify priority data assets related to COVID-19 response, based on: 
      - Input from public feedback;
      - Datasets that support the individual agency goals for COVID-19 response including:
        - Healthcare
        - Financial services
        - Agency re-opening 
  2.  Improve the standard metadata for priority data assets for COVID-19 response, based on: 


  {: .table .table-schema}

  **Field** | [keyword](../dcat-us/#keyword)  

  ----- | -----

  **Required** | Agencies must include the keywords `COVID-19` and `coronavirus`. 

  **Recommended** | Agencies are encouraged to further include keywords that would improve discoverability.  

  **Example** | `{"keyword":["COVID-19","coronavirus”,“viral-testing”,“CARES-Act”,“CORD-19”]}`

 


  ### AI R&D Data 

  Executive Order 13859 Maintaining American Leadership in Artificial Intelligence requires agencies improve their Comprehensive Data Inventory documentation to enable discovery and usability of data for AI R&D. This requirement is also outlined in Action 9 of the Federal Data Strategy 2020 Action Plan. Agency Chief Data Officers’ shall: 

  1. Identify priority data assets for AI R&D, based on: 
      - Input from the non-Federal AI R&D community from both the Federal Registry Notice and subsequent feedback;
      - Datasets that support the individual agency goals for AI R&D as well as those itemized on AI.gov:
        1. Transportation
        1. Healthcare
        1. Manufacturing
        1. Financial services
        1. Agriculture
        1. Weather forecasting
        1. National security & defense
      - Datasets and source code that address Fundamental R&D challenges in AI as discussed in The National Artificial Intelligence Strategic Plan: 2019 Update
  2. Improve the standard metadata for priority data assets for AI R&D, based on: 


  {: .table .table-schema}

  **Field** | [keyword](../dcat-us/#keyword)  

  ----- | -----

  **Required** | Agencies must include the keywords `AI`, `artificial-intelligence`, and `AI-R&D`. 

  **Recommended** | Agencies are encouraged to further include keywords that would improve discoverability.  

  **Example** | `{"keyword":["AI","artificial-intelligence","AI-R&D",”natural-language-processing”,“machine-learning”,“research”,“COVID-19]}`


  {: .table .table-schema}

  **Field** | [contactPoint](../dcat-us/#contactPoint)  

  ----- | -----

  **Required** | Agencies must include a contact person’s name and email that can discuss restrictions or controls on the dataset with interested AI researchers.

  **Recommended** | Agencies are encouraged to identify a domain expert and their contact information who can discuss the dataset with interested AI researchers. 

  **Example** | See [contactPoint](../dcat-us/#contactPoint) 


  {: .table .table-schema}

  **Field** | [dataQuality ](../dcat-us/#dataQuality )  

  ----- | -----

  **Required** | While dataQuality is generally optional for comprehensive data inventory documentation it is required for all datasets identified for the purposes of AI R&D. 

  **Recommended** | 

  **Example** | `{"dataQuality":true}`


  {: .table .table-schema}

  **Field** | [references  ](../dcat-us/#references  )  

  ----- | -----

  **Required** | While references is generally optional for comprehensive data inventory documentation it is required if references, including model documentation that exist for data assets identified for the purposes of AI R&D. 

  **Recommended** | 

  **Example** | `{"references":[" https://github.com/GSA/AI-Assistant-Pilot"]}`

examples: ""
layout: resource
toc: true
link to resource: ""
publish: false
link: |-
  * [DCAT-US](../dcat-us/)
---
