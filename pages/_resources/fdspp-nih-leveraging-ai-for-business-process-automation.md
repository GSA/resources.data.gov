---
name: Leveraging AI for Business Process Automation at NIH
slug: fdspp-nih-leveraging-ai-for-business-process-automation
description: The National Institute of General Medical Sciences (NIGMS), one of
  the twenty-seven institutes and centers at the NIH, recently deployed Natural
  Language Processing (NLP) and Machine Learning (ML) to automate the process by
  which it receives and internally refers grant applications. This new approach
  ensures efficient and consistent grant application referral, and liberates
  Program Managers from the labor-intensive and monotonous referral process.
source: Federal Data Strategy
category: Case studies & examples
tags:
  - standards
  - data cleaning
  - process redesign
  - AI
  - internal-todo
policy_tags:
  - FDS Principle 05 Harness Existing Data
  - FDS Principle 07 Demonstrate Responsiveness
  - FDS Practice 02 Assess and Balance the Needs of Stakeholders
  - FDS Practice 18 Manage with a Long View
  - FDS Practice 20 Leverage Data Standards
  - FDS Practice 28 Align Quality with Intended Use
  - FDS Practice 30 Communicate Planned and Potential Uses of Data
  - FDS Practice 39 Support Federal Stakeholders
format: FDS Proof Point
details: >-
  ### Leveraging AI for Business Process Automation at NIH


  June 14, 2019


  The National Institute of General Medical Sciences (NIGMS), one of the twenty-seven institutes and centers at the NIH, recently deployed Natural Language Processing (NLP) and Machine Learning (ML) to automate the process by which it receives and internally refers grant applications. This new approach ensures efficient and consistent grant application referral, and liberates Program Managers from the labor-intensive and monotonous referral process. This allows them to focus more on high-value work.


  #### The Challenges in Referral


  Each year NIGMS receives thousands of grant applications for research programs that seek to advance an understanding of various biological processes and the role that such processes play in disease prevention, diagnosis, and treatment. Following receipt, each application is internally assigned to a Program Manager (PM), who is a subject matter expert (SME) in the area of research being proposed.


  Prior to the introduction of Machine Learning and Natural Language Processing, each of the NIGMS funding opportunity announcements (FOA) had various scientific points of contact (POCs) who were responsible for receiving and referring (i.e., assigning) the applications made to that FOA to the relevant organizational PMs. This referral of research grant applications is a laborious manual process that takes each POC an average of two to three weeks to complete due to competing, and at times overlapping, responsibilities. Moreover, it is critical that each POC doing the assignment has both institutional and scientific knowledge to determine the appropriate PM to manage the application. Gaining such knowledge entails a significant amount of training time to prepare each POC and PM. Even veteran POCs may occasionally need to spend additional time and effort in considering how to refer a given application.


  #### Data + Machine Learning Cut Referral Time and Workload


  To address some of the process’s pain points, the NIGMS first piloted a machine learning approach to the receipt and referral process in October of 2017. Dr. Nathan Moore, a mathematical statistician in the NIGMS Office of Program Planning, Analysis, and Evaluation, paired his expertise in data science with institutional knowledge from a working group of NIGMS staff to create an NLP ML algorithm capable of receiving and assigning an incoming grant application to the appropriate PMs within the NIGMS.


  The NIGMS AI team created a four-tiered algorithm corresponding to the NIGMS’ organizational structure, with each descending level (tier) more granular than the previous one. Tier 1 is the NIH Institute and Center level and determines if an application is relevant to the mission of NIGMS or not. Assuming an application is indeed relevant to the NIGMS mission, it is then referred to one of NIGMS’ three Scientific Divisions. Underlying these Divisions are eight Scientific Branches. Therefore, at the most granular level, each application is assigned to one of NIGMS’ Scientific Branches and specifically to a PM located therein.


  ![Tier 2 maps applications to one of NIGMS’ three Scientific Divisions](https://strategy.data.gov/assets/img/posts/2019-06-14-image001.jpg "Tier 2 maps applications to one of NIGMS’ three Scientific Divisions")Tier 2 maps applications to one of NIGMS’ three Scientific Divisions


  ![Tier 3 maps applications to one NIGMS’ eight Scientific Branches](https://strategy.data.gov/assets/img/posts/2019-06-14-image002.jpg "Tier 3 maps applications to one of NIGMS’ eight Scientific Branches")Tier 3 maps applications to one of NIGMS’ eight Scientific Branches


  ![Tier 4 maps applications to one of NIGMS’ forty Program Managers](https://strategy.data.gov/assets/img/posts/2019-06-14-image003.jpg "Tier 4 maps applications to one of NIGMS’ forty Program Managers")Tier 4 maps applications to one of NIGMS’ forty Program Managers


  Using thousands of historical records of grant applications, the NIGMS AI team trained the NLP ML algorithm. Written in R, an open source programming language frequently used in data science, the algorithm processed the text of each application and determined associations between the application text and referral choices. Over the course of a year, the algorithm was then tested and refined using a series of pilots for applications made to three different funding opportunities: K99 (Pathway to Independence Awards), R35 (Maximizing Investigators’ Research Awards), and R01 (Research Projects) which is NIH’s most popular grant mechanism.


  #### Evaluating the Algorithmic Referral Process


  The NIGMS AI team identified an accuracy measure to allow them to compare the manual or “human-executed” referral process to the accuracy of the algorithm’s output. Each time a referral is made, the receiving PM must either accept the application, indicating that its topic is indeed part of his/her scientific area, or forward the application to a PM having a more-relevant scientific area to the application in question. The record of these actions serves as an outcome variable or benchmark for judging whether a given classification or routing, at each tier, is correct or incorrect.


  Initial results from the pilot were very encouraging. As of the end of April 2019, the categorization algorithm has been used to automatically assign more than 2000 proposals through all 4 Tiers of the process. For the K99 FOA, the Tier 2 algorithm routed 92% of applications to the correct Scientific Division (i.e. only 8 percent of applications were manually forwarded to a different Division). For the R35 FOA, the Tier 3 algorithm routed 80 percent of the applications to the correct Scientific Branch. Finally, and following a good deal of refinement, the Tier 4 algorithm was capable of routing 84 percent of R01 applications to the correct PM, matching the accuracy rate that manual referrals routinely achieve.


  Given these successes, the NLP ML algorithm is now functionally integrated with existing NIGMS grant application web-based systems and is run nightly to process new applications. Thanks to this integration, the average referral time for an application has been cut from 2-3 weeks to less than one day. Automating the initial application referral process also provides more standardized results, ensuring that institutional knowledge of grant referrals is maintained regardless of staffing changes while simultaneously allowing human experts to focus more of their time on high value work.


  > The work Nate and his colleagues are doing using natural language processing and machine learning is amazing. It’s a great example of how taking the initiative to adapt cutting-edge technologies for our business processes can make government operations significantly more efficient and effective.\

  > – Dr. Jon Lorsch, NIGMS Director


  #### Next Steps and Lesson Learned


  Recognizing the administrative gains and high level of accuracy achieved from NLP ML algorithms, the NIGMS’ senior management team has decided to expand usage of this novel system to five major FOAs that cover about 80 percent of all NIGMS research applications requiring referral.


  In addition, the NIGMS AI team is continuously looking for ways to improve the algorithm’s assignment prediction accuracy. The team is planning, for instance, to allow the algorithm to determine the three most relevant PMs for each application submitted to the NIGMS rather than just a single PM. Doing so will help PMs more easily re-assign applications that are not appropriate for their scientific areas, if needed.


  The NIGMS AI experience has yielded lessons learned that can benefit other grant making agencies when adopting similar innovations:


  * Change management is necessary to obtain targeted user buy-in.

  * Recruitment and training of data scientists are essential for federal agencies to build capacity in using data as a strategic asset to increase the effectiveness and impact of work.

  * Clear and constant communication are critical to the overall success of any process improvement effort.

  * Process automation can be met with resistance, but an emphasis on the ability of staff to focus their time on higher-level, higher-priority work can often mollify or alleviate these concerns.


  #### Postscript


  To learn more about NIGMS’s machine learning process, you may contact Dr. Anna Calcagno, Deputy Director of OPAE/NIGMS/NIH, at [Anna.Calcagno@nih.gov](mailto:Anna.Calcagno@nih.gov).


  To receive updates on activities related to the Federal Data Strategy, please [sign up for the newsletter](https://public.govdelivery.com/accounts/USGSA/subscribers/new?topic_id=USGSA_756).


  ![Federal Data Strategy Incubator Project Logo](https://strategy.data.gov/assets/img/federal-data-strategy-incubator-project-logo.png)


  #### The Federal Data Strategy Incubator Project


  The Incubator Project helps federal data practitioners think through how to improve government services, enabling the public to get the most out of federal data. This Proof Point and others will highlight the many successes and challenges data innovators face every day, revealing valuable lessons learned to share with data practitioners throughout government.
examples: ""
link: https://strategy.data.gov/proof-points/2019/06/14/leveraging-ai-for-business-process-automation-nih/
layout: resource
toc: true
publish: false
---
