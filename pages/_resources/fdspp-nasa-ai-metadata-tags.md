---
name: "Improving Data Access and Data Management: Artificial
  Intelligence-Generated Metadata Tags at NASA"
slug: fdspp-nasa-ai-metadata-tags
description: NASA’s data scientists and research content managers recently built
  an automated tagging system using machine learning and natural language
  processing. This system serves as an example of how other agencies can use
  their own unstructured data to improve information accessibility and promote
  data reuse.
source: Federal Data Strategy
category: Case studies & examples
tags:
  - metadata
  - data management
  - data sharing
  - process redesign
  - internal-todo
policy_tags:
  - FDS Principle 03 Promote Transparency
  - FDS Principle 04 Ensure Relevance
  - FDS Principle 05 Harness Existing Data
  - FDS Practice 02 Assess and Balance the Needs of Stakeholders
  - FDS Practice 04 Use Data to Guide Decision-Making
  - FDS Practice 10 Provide Resources Explicitly to Leverage Data Assets
format: FDS Proof Point
details: >-
  *Originally published May 28, 2019*


  ### Introduction


  NASA’s data scientists and research content managers recently built an automated tagging system using machine learning and natural language processing. This software was originally developed to assist NASA’s content managers in applying keywords to their database of articles. The system has since been used in alternative contexts within NASA, and its usage continues to expand into more novel applications. This system serves as an example of how other agencies can use their own unstructured data to improve information accessibility and promote data reuse.


  ### Tagging is vital


  NASA, like many federal agencies, has information sources spread across multiple systems. As a result, some users struggle to find the information they are looking for, either because they have to sift through various systems, or because they are looking in the wrong places. Moreover, users may not know specifically what they are looking for; they may be browsing without precise terms in mind, yielding irrelevant results.


  To alleviate some of these problems, NASA’s Scientific and Technical Information (STI) program has applied keyword tags to research papers and articles for many years. Keyword tagging exposes core concepts within text data, making these concepts readily available to search. This concept exposure improves search, and, thereby, improves data access, use, and management.


  ### Manual tagging is difficult


  STI’s tagging is done manually. While manual tagging is effective, it is also (1) labor intensive, (2) difficult to scale, and (3) difficult to standardize.


  To illustrate these points, the STI-managed NASA Technical Reports Server (NTRS) is constantly ingesting new documents, requiring constant tagging by dedicated content managers. Scaling this tagging effort across multiple systems would require hiring many more dedicated content managers. Such experts are difficult to find, and the funding for hiring more experts may not be available.


  Additionally, the sheer number of possible keywords presents difficulties for standardization. STI has organized its corpus by manually tagging each document with about ten keywords each from its evolving collection of over[20,000 standardized keywords](https://www.sti.nasa.gov/nasa-thesaurus/)(roughly half the size of the average adult’s vocabulary). Uniformly applying this many keywords is difficult for STI specialist content managers, and almost impossible for other NASA workers for whom tagging is a small part of their overall responsibilities.


  ### Machine learning and automation can help


  NASA’s STI team worked with the NASA OCIO Data Analytics Team (DAT) to find a solution that could (1) alleviate the labor-intensity of tagging, (2) scale effectively, and (3) enable the uniform application of many tags. The teams realized that a machine-learning-based, automated tagging solution could satisfy these requirements. Machine learning, however, is not magic. An effective machine learning solution requires the right dataset from which to learn.


  In this case, there was an ideal dataset: STI’s corpus of about 3.5 million manually tagged documents. The overall tagging system is comprised of a model and an interface. Over the course of a year, STI and DAT used these data to train the model which, when provided text, answers the question, “Which keywords are most likely to apply to this text?” The model can then respond with terms from a set of about 7,000 keywords which span NASA’s domains.


  Teams can use this response in myriad ways. For instance, the STI team requires rigorous organization and validation. They use the tagger to suggest possible keywords while the content managers validate the final selections. These suggestions help the content managers fill in potential blind spots.


  ![A screenshot of the NASA OCIO STI Concept Tagging Service](https://strategy.data.gov/assets/img/posts/2019-05-28-image001.png "A screenshot of the NASA OCIO STI Concept Tagging Service")*In this example, two sentences of text are input into the tagger, which identifies multiple keywords that are likely to be relevant to the text; volcanology (84%), mars surface (77%), volcano (76%), and structural properties – geology (59%).*


  This system does not replace the STI content managers; it gives them more time to focus on other work, like curating new keywords. In order to stay relevant, the model must evolve as NASA’s lexicon evolves. To do so, the model must learn new keywords by being retrained on data tagged with these keywords. Without the work of the content managers, new data would not be tagged with new keywords, and the model would lose relevance. This alliance of humans and AI creates the perfect solution for NASA’s big data labelling problems by packaging the content managers’ knowledge while they identify new terms and trends.


  ### Build a solution with flexibility in mind


  The model can be applied elsewhere. NASA’s text data storage systems that lack dedicated content managers would greatly benefit from robust automated keyword tagging. In some cases, managers of these systems have implemented local tagging solutions, but these solutions often use sparsely populated tags that vary from system to system, preventing effective cross-system use. Ideally, these systems would apply a common set of keywords across their platforms.


  The DAT team saw that the tagger model could be reused in other systems to alleviate these problems, facilitating more consistent tagging and data exploration. To enable this reuse and improve ease of access to the tagging models, they created a web service with a friendly user-interface and Application Programming Interface (API). The interface allows for quick and easy testing of the tagger while the API enables programmatic use of the tagger.


  > ![A diagram depicts the process for creating the approximately 7,000 keyword tagging models](https://strategy.data.gov/assets/img/posts/2019-05-28-image002.png "A diagram depicts the process for creating the approximately 7,000 keyword tagging models")*This diagram depicts the process for creating the approximately 7,000 keyword tagging models. The models are used to create a service which gives the end user (seen here as a laptop) access to the models’ predictions.*


  The tagger API was quickly applied to different text systems. For example, the NASA Open Innovation (OI) Program developed a WordPress plugin that uses the tagger API to automatically tag blog posts. The tagger expands the number of tags on blog posts over the typical number of human-generated tags, making posts easier to find and encouraging exploration of the site. After some refinements are made, OI plans to release this plugin to all NASA WordPress site administrators.


  OI has also utilized the tagger API to increase the number tags on NASA’s Open Source Software website,[https://code.nasa.gov](https://code.nasa.gov/). Because the website’s search function relies on text string matching, it only works if the user’s search terms match words in the project description. Keywords represent higher-order concepts; using keywords, a user can more quickly skim, search, and iteratively explore the site. The faster a user can reach interesting information, the more likely they are to stay on the page and explore further. The increased tag coverage from the tagger API has made it is easier for NASA colleagues and the public to find and explore NASA code.


  ![A search result on code.nasa.gov based on tags created by both humans and the AI tagger](https://strategy.data.gov/assets/img/posts/2019-05-28-image003.png "A search result on code.nasa.gov based on tags created by both humans and the AI tagger")*A search on [https://code.nasa.gov](https://code.nasa.gov/) yields code projects, like this one, based on tags created by both humans and the AI tagger.*


  DAT and OI spent a nontrivial amount of time developing these two integrations (WordPress and [https://code.nasa.gov](https://code.nasa.gov/)) because they believe that building these extensions for common platforms (like WordPress) will ease integration of the tagger API into other IT systems. One may cleverly solve a problem using machine learning. They may even make an API to access their models. However, lacking any premade system integrations, the system may remain underused. The extra work of creating these integrations is well worth the effort; it gives a better return on investment for the more extensive work of creating the machine learning solution in the first place.


  ### The benefits of effective data reuse


  NASA STI’s keywords were not originally created with the intention of developing a machine-learning powered tagger API. That did not stop NASA, however, from using these valuable inputs to create a flexible solution that improves the accessibility and utility of various types of NASA information, ranging from scientific articles to software code repositories. Moreover, they have made programmatic replication of their work possible.


  Other agencies, using their own labeled datasets, may be able to replicate DAT’s processes, creating their own machine-learning models to tackle data management and access issues. Of course, each domain comes with its own challenges, but, assuming there is appropriate training data, progress towards greater automated tagging can be made.


  ### Postscript


  Anthony Buonomo, Justin Gosses, Andrew Adrian, and Brian Thomas work on the Data Analytics Team within the Transformation Data Division of NASA’s Office of the Chief Information Officer. Substantial software contributions were made by Anthony Buonomo, Brian Thomas, Yulan Lin and Justin Gosses.


  If you’d like to learn more about this project, please contact [anthony.r.buonomo@nasa.gov](mailto:anthony.r.buonomo@nasa.gov)or[brian.a.thomas@nasa.gov](mailto:brian.a.thomas@nasa.gov). Visit [https://www.sti.nasa.gov](https://www.sti.nasa.gov/)to see a sample of the sort of data the tagger was trained on. At present, the code related to the project it not publicly available.


  #### The Federal Data Strategy Incubator Project


  The Incubator Project helps federal data practitioners think through how to improve government services, enabling the public to get the most out of federal data. This Proof Point and others will highlight the many successes and challenges data innovators face every day, revealing valuable lessons learned to share with data practitioners throughout government.
examples: ""
link: ""
layout: resource
toc: true
publish: false
---
