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
  
  {: .margin-top-0}

  The requirements outlined here are meant to be used in conjunction with the documentation for the full [DCAT-US Schema v1.1](../dcat-us/) (Project Open Data Metadata Schema) 


  {: .margin-top-6}

  ### COVID-19 Response Related Data Assets 

  Consistent with [M-20-16 Federal Agency Operational Alignment to Slow the Spread of Coronavirus COVID-19](https://www.whitehouse.gov/wp-content/uploads/2020/03/M-20-16.pdf), in places where the [Federal Data Strategy 2020 Action Plan](https://strategy.data.gov/action-plan/) calls for agencies to prioritize data assets and projects, agencies are required to include COVID-19 response data as their highest priority.


  {: .table .table-schema}

  **Field** | [keyword](../dcat-us/#keyword)  

  ----- | -----

  **Required** | Agencies must include the keywords `COVID-19` and `coronavirus`. 

  **Recommended** | Agencies are encouraged to further include keywords that would improve discoverability.  

  **Example** | `{"keyword":["COVID-19","coronavirus”,“viral-testing”,“CARES-Act”,“CORD-19”,"SARS-CoV-2"]}`

 

  {: .margin-top-6}
  
  ### Data Assets to Fuel AI R&D 

  Consistent with [Executive Order on Maintaining American Leadership in Artificial Intelligence (EO 13859)](https://www.whitehouse.gov/presidential-actions/executive-order-maintaining-american-leadership-artificial-intelligence/), agencies are directed to improve data “inventory documentation to enable discovery and usability [in order to] prioritize improvements to access and quality of data … based on the AI research community’s user feedback.” 


  {: .table .table-schema}

  **Field** | [keyword](../dcat-us/#keyword)  

  ----- | -----

  **Required** | Agencies must include the keyword `usg-artificial-intelligence`. 

  **Recommended** | Agencies are encouraged to further include keywords that would improve discoverability. Datasets that specifically serve as training data for machine learning applications should additionally include a keyword of `usg-ai-training-data`

  **Example** | `{"keyword":["usg-artificial-intelligence","AI","artificial-intelligence","AI-R&D",”natural-language-processing”,“machine-learning”,“research”,“COVID-19]}`


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

  **Example** | `{"dataQuality":true}`


  {: .table .table-schema}

  **Field** | [references  ](../dcat-us/#references  )  

  ----- | -----

  **Required** | While references is generally optional for comprehensive data inventory documentation it is required if references, including model documentation that exist for data assets identified for the purposes of AI R&D. 

  **Example** | `{"references":[" https://github.com/GSA/AI-Assistant-Pilot"]}`

examples: ""
layout: resource
toc: true
link to resource: ""
publish: false
link: |-
  * [DCAT-US](../dcat-us/)
---
