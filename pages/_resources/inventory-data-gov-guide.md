---
resource_name: Inventory.data.gov Guide
slug: inventory-data-gov-guide
description: Details on how to get started with using inventory.data.gov, from
  creating a user account to using its features to mange datasets and export
  data.json.
source: inventory.data.gov
category: Skills development
tags:
  - data inventory
  - data management
  - inventory.data.gov
  - open data
guidance_tags: ""
format: ""
details: >+
  ### Introduction

  {:#introduction}


  [Inventory.data.gov](http://inventory.data.gov/) is a data management tool established in 2013 by the Data.gov Program Management Office (PMO) in what is now the Technology Transformation Services of the U.S. General Services Administration (GSA). Inventory.data.gov supports the implementation of the OPEN Government Data Act, which is Title II of the [Foundations for Evidence Based Policymaking Act](https://www.congress.gov/bill/115th-congress/house-bill/4174/text), by providing all of the relevant metadata fields and export formats required for agencies to have their data harvested by Data.gov and to comply with the OPEN Government Data Act. Inventory.data.gov is not required to be used by all agencies, but rather offered in order to assist agencies that do not have another solution for creating and maintaining data inventories.


  [The Data.gov catalog](http://catalog.data.gov/) is based on [CKAN](http://ckan.org/) (Comprehensive Knowledge Archive Network), an open source technology that powers many government open data sites. [Inventory.data.gov](http://inventory.data.gov/) is a separate instance of CKAN hosted at GSA on the same infrastructure as the Data.gov catalog. To avoid confusion, neither site should simply be referred to as the “CKAN site”, but instead by the full URL.


  Inventory.data.gov as a dataset management system requires a user account and is not publicly accessible (with the exception of a few datasets that are hosted on inventory.data.gov, discussed in more detail below). Inventory.data.gov allows the registered users to manage the datasets for their agency only.


  ### Features

  {:#features}


  Inventory.data.gov provides the following features for dataset management/OPEN Government Data Act compliance purposes:

  * Existing data.json and enterprise data inventory metadata can be imported directly into inventory.data.gov.

  * User group organizations can be created either for an entire agency or for individual bureaus so that users and permissions can be managed and delegated as needed by the agency

  * A platform to manage public/non-public datasets: create new entries, modify existing ones, and delete any datasets as needed

  * Unredacted Inventory / Enterprise Data Inventory (EDI) and Redacted Inventory / Public Data Listing (PDL) functionality exports the successfully validated datasets in the form of a data.json file complying to the DCAT-US 1.1 version. Error records are provided in a log file for review and resolution by agency users.


  ### Using Inventory.data.gov

  {:#using-inventory-data-gov}


  Once an agency has consulted with the Data.gov PMO and has decided to use inventory.data.gov for dataset management, the next steps are:


  1. Setting up an “organization” on inventory.data.gov. First, the agency should decide how they want to present their structure within inventory.data.gov. An agency could make the “organization” the entire agency (for example, make the entire Department of Veterans Affairs one “organization). In that case, everyone with a user account associated with the VA on inventory.data.gov would be able to view, add, edit or delete datasets for all of VA within inventory.data.gov. An agency could create an “organization” for sub-agencies, for instance creating an organization for the Farm Service Agency and all the other units of the Department of Agriculture. In that scenario, a user account for Farm Service Agency could view, add, edit or delete datasets for the Farm Service Agency only. The Data.gov PMO will set up organizations in the manner requested by the agency.


  2. Creating user accounts for the agency representatives who will be using inventory.data.gov to manage the agency datasets. Inventory.data.gov, for dataset management purposes, is not publicly accessible. Users must have accounts on the system. There are three levels of accounts for any “organization” on inventory.data.gov: Administrator, Editor, and Member. For dataset management, agency users will, in most cases, have an Editor account. Administrators can add additional members from that agency (organization), but in most cases adding additional members will be handled by the Data.gov team due to documentation requirements for adding new users. All other functions for managing metadata can be accomplished with an Editor account.


  ### Creating a User Account 

  {:#creating-a-user-account}


  New users to inventory.data.gov should request an account by completing a New User Form. If your agency does not permit access to the google [form](https://docs.google.com/forms/d/e/1FAIpQLSetStmwqrbMWDz_WIlh1trjhP0PFCjKXHzshsJveYmtIvlG2Q/viewform?usp=sf_link), contact[ datagovhelp@gsa.gov](mailto:datagovhelp@gsa.gov) to complete a Word version of the form.  Creating your inventory.data.gov account requires an initial login. Logins to use inventory.data.gov are integrated with [login.gov](https://login.gov). You should log in to login.gov and follow the directions for associating your PIV/CAC card to your login.gov account. 


  ![logingovgraphic](../../assets/media/login.gov-image.png) 


  After you have logged in to inventory.data.gov using login.gov, email us at datagovhelp@gsa.gov to let us know you have completed the initial login. We will then associate requested permissions to your account. On subsequent logins to inventory.data.gov, you should be able to use inventory.data.gov to manage metadata without further assistance.


  ### Using inventory.data.gov to manage datasets

  {:#using-inventory-data-gov-to-manage-datasets}


  Once you have an account as an Editor for your agency (Organization), you can use inventory.data.gov to add or edit datasets for your Organization. Once you log in, you’ll see an activity page showing your recent activity on inventory.data.gov.


  ![inventorylogin](../../assets/media/66858334-0ebd7000-ef57-11e9-9f56-9c5bee4cc4d9.jpg)


  The main tabs you will be using are “Datasets” and “Organizations.”


  Datasets:


  ![datasets](../../assets/media/66859255-f189a100-ef58-11e9-92c2-50aa89e317fb.jpg)


  Organizations:


  ![orgs](../../assets/media/66859352-1b42c800-ef59-11e9-87ec-eac09c65aba2.jpg)


  When you click on the “Organizations” tab, you’ll go to the main Organizations page that lists all the Organizations in inventory.data.gov. To find your Organization, you can search for it in the search bar on the page. When you click on your Organization, all the datasets for the Organization will be displayed. There’s an Admin button on the upper right for Administrators. By clicking on it, you get the main information about the Organization, including a tab for “Members.”

  Clicking on “Members” brings up all the Members of the Organization who can add and edit datasets. Clicking on the Add Members button gives you the option of adding an existing user of inventory.data.gov to your Organization. Before you can add Members to your organization, the new Member has to complete initial log in on inventory.data.gov using login.gov. In addition, agency users with Administrator access are requested to coordinate the addition of new members with the Data.gov PMO, so that the documentation requirements for additional accounts are met.


  ![members](../../assets/media/66859471-65c44480-ef59-11e9-9946-f612cc306800.jpg)


  There are three levels of access. Member is read only access. Editor allows you to add and edit datasets. Admin can perform the same actions as an Editor and also add members to the Organization.


  ### Adding a Dataset

  {:#adding-a-dataset}


  Click on the Dataset tab.

  Then click on Add a Dataset. That takes you to the Create Dataset page.

  The Create Dataset page features the metadata following the [DCAT-US Version 1.1.](../dcat-us/)

  ![metadata](../../assets/media/inventory-image-1.png)


  There are examples displayed in each field, and there is also pop-up help information for each field. Full details are on the [Resources.data.gov](../dcat-us/) page. 

  There is validation for each field, so if you try to skip a required field or enter improper formats for a particular field, you’ll get an error message when you try to add the dataset.


  **Entering Metadata**


  The first screen in the metadata entry form consists of Required Metadata. Enter the **Title** for the dataset, as you would like the Title to be displayed.

  The URL for the dataset will be generated automatically based on the Title.

  Enter the **Description** for the dataset as a summary about the dataset.

  Enter the **Tags** for the dataset. Your dataset will be included when a Data.gov user searches for those Tags.

  For **Publisher**, start typing the name of the component within your agency, and the field will auto-populate. If your agency is not differentiating datasets by sub-agency, start typing your agency name in the Publisher field. If nothing auto-populates, it indicates we have not added the relevant information within inventory.data.gov. Please contact inventory-help@gsa.gov to have the information added to the system. **Contact Name/Email.** Enter the name and email information for the contact for this dataset. Questions about this dataset will be referred to the contact listed.

  **Access Level**:  Choose public, restricted public, or non-public. Please note that in the License field, if applicable, the URL for the license should be provided. Spatial. If the dataset is about a specific location, enter that information in this field. Temporal. If the dataset covers a specific date range, enter that information following the format provided.  Hit “Save and Continue” to get to the next screen. 
  
    ![image2](../../assets/media/inventory-image-2.png)
  
   The second screen has additional metadata fields. 

  **Meets Agency Data Quality**. This field shows if the dataset meets your agency’s data quality standards if any apply.
  
  The next field asks whether the dataset is a geospatial dataset. Selecting “My dataset is a geospatial dataset” will result in the metadata being included in {geoplatform.gov.}(https://www.geoplatform.gov/)

  **Data Dictionary**. If there is a data dictionary or schema for the dataset, provide the URL here.

  **Described by Type**. Choose the data dictionary type from the formats listed.

  **Data Publishing Frequency**. Choose the frequency from the options listed.

  **Landing Page (Homepage URL)**. If there is a landing page/home page associated with the dataset, enter the URL here.

  **Language**. The default language for datasets is English. If the dataset is presented in another language, select it here.

  **Primary IT Investment UII**. If there is an IT Unique Investment Identifier associated with the dataset, enter it here.

  **References (Related Documents)**. URLs for additional related resources can be entered here. 

  **Release Date**. Enter the release date in the date format provided.

  **System of Records**. If there is a Privacy Act System of Records Notice (SORN) associated with the dataset, enter the URL for the published SORN here.

  The last two fields are to indicate if this dataset is part of a collection or if you want to designate this dataset as the “parent” of a collection.

  **Is parent**. Yes or No. If you want to make this dataset the “parent” of a collection, choose yes. Otherwise choose no.

  Note that once you make a dataset a “parent” dataset, it cannot be a “child” dataset, or part of another collection of datasets. After a dataset is selected as parent, this dataset will be available for the subsequent datasets in this organization to choose a parent dataset (for isPartOf)

  If you chose No and made the dataset a non-parent dataset, you would then be able to choose in the next field (**Parent dataset**) – the datasets that you want to make this dataset as part of a collection, note that this field is optional and can be left empty if you would like the dataset to be an independent dataset.

  Once you are finished entering the metadata, hit **Save and Continue.** 

 
  The final screen is “Resource Upload” where you can provide information on how to access the dataset. 
 
  For most inventory.data.gov users, the dataset is actually hosted on the agency.gov site, so you will hit the “Link to a file” radio button and provide the URL. If you would like to provide a link to API, choose the “Link to an API” radio button.  If applicable, choose the “Access URL” button for datasets that are not directly downloadable.

  ![image3](../../assets/media/inventory-image-3.png)
 
   Provide a **description** of the dataset.

  **Media type**. Choose the relevant format.

  **Format**. Type in the format in this field. (API value for “Link to API” option)

  ### Draft Feature

  While creating datasets in [inventory.data.gov](http://inventory.data.gov/), users can use the "Save as Draft" button, which indicates that the dataset is still being worked on or reviewed. Any dataset saved with “Draft” status will not be included in the data.json files.  If you have completed metadata entry for the dataset, hit the “Finish and Publish” button. 
 

  ### Exporting Data.json

  {:#exporting-data-json}


  Once you have finished entering and editing the metadata for your organization, you are ready to export the datasets to generate the data.json files which comply with the DCAT-US 1.1 version. This is done from the main Organization page, by clicking on your agency Organization icon on the left or by clicking on your agency Organization name on the top of the page. There are three choices at the top.


  ![helpguide](../../assets/media/66868022-8943bb00-ef6a-11e9-8f26-20e3ae89b9a9.jpg)


  There is no longer any difference between the “Unredacted” and “Redacted” Inventory buttons. Either one will result in a download of the data.json file that you will post on your agency.gov/data.json site. The Export Drafts button will export all datasets that are currently in “draft” status to a file. The process for each is the same. Depending on your browser, clicking the button will either give you a prompt to open or save the file or it will be downloaded automatically.


  ![a1](../../assets/media/66868717-daa07a00-ef6b-11e9-8574-154e0acc79e0.jpg)


  The file that is delivered is a zip file. It contains both the data.json and (if errors were found) an errorlog.txt and errors.json file.

  It is very important to make sure that all datasets were successfully exported when downloading the data.json file. This can be done by checking to make sure that an errorlog.txt file was not included in the zip file. If there are errors in the errorlog.txt file, those need to be reviewed and resolved before posting the data.json file in the agency.gov/data.json location. This is critical. Ignoring this step can potentially remove datasets from data.gov since they will no longer be present in the data.json file. 
  The errorlog.txt will describe the datasets that did not validate against the DCAT-US Schema as needed to be included in the data.json file. If there were no errors encountered in creating the data.json, then errorlog.txt file will not appear in the zip file.

  ![errorlog](../../assets/media/66868873-323ee580-ef6c-11e9-9142-170ff5c3cba1.jpg)

  ![errorlog2](../../assets/media/66868918-4be02d00-ef6c-11e9-8314-c7b8625c7ede.jpg)


  The error log indicates the type of problem, the dataset ID, and the dataset title, so that you can find the problematic dataset in inventory.data.gov and fix the problem. Search for the dataset, choose Edit, and make the required changes. Once you fix the errors, go back to the Organization page and re-download the inventory, and you should get a zip file with just the data.json and no error log. The agency’s data.json will need to be posted on the agency’s website at agency.gov/data.json in order to be harvested by the Data.gov catalog. If the data.json is being posted on the agency.gov website for the first time, please contact the Data.gov team via email to set the harvest source on catalog.data.gov.



  ### Automating data.json downloads by agencies

  {:#automating-data-json-downloads-by-agencies}

  Rather than downloading data.json files, it is possible to use the API and your API key in order to automate the process of adding the data.json file to the agency website.

  Here’s what the request would look like using the curl-like tool[ httpie](http://www.httpie.org/)


  **Redacted Inventory (PDL)**

  ``` http -v POST https://inventory.data.gov/organization/[organization-id]/redacted.json

  Authorization:xxx-your-api-key-xxx

  Content-Type:application/x-www-form-urlencoded

  Cookie:auth_tkt=foo ```


  **Unredacted Inventory (EDI)**

  ``` http -v POST https://inventory.data.gov/organization/[organization-id]/unredacted.json

  Authorization:xxx-your-api-key-xxx

  Content-Type:application/x-www-form-urlencoded

  Cookie:auth_tkt=foo ```


  You’d need to replace `xxx-your-api-key-xxx` with your actual API key which you can get in the bottom of the left sidebar of your user account, e.g. `https://inventory.data.gov/user/[username]`

  The above process downloads the Redacted.zip file containing the data.json and errorlog.txt. If there are any errors, you should review and correct them. When you reach a point where there is no errorlog.txt file, you can upload the data.json file to the agency.gov/data.json public data listing for data.gov catalog harvesting purposes. It is recommended that you manually review and upload the data.json file a few times, before completely automating the entire process to ensure there are no errors that might be excluding datasets from the data.json file (potentially removing existing datasets from data.gov).


  ![red](../../assets/media/66869292-12f48800-ef6d-11e9-8fa6-9473db1cc830.jpg)


  ### Dataset Hosting

  {:#dataset-hosting}


  The primary use of [inventory.data.gov](https://inventory.data.gov/dataset) is to provide a dataset management system for agencies that need a tool to meet the requirements of the Open Data Policy.Data.gov uses inventory.data.gov for a second purpose. From 2011-2014, Data.gov featured data hosting using the Socrata platform. About a dozen agencies used the platform to host their datasets directly on Data.gov. At the conclusion of the Socrata contract in 2014, several agencies indicated a continuing need for hosting capability for these datasets (approximately 100). To accommodate these agencies, the Data.gov PMO migrated the datasets previously hosted at the platform to a hosting capability using the CKAN [DataStore](http://docs.ckan.org/en/ckan-2.2/datastore.html) extension, on the CKAN instance at inventory.data.gov. As a result, the access URLs for this small number of datasets begin with inventory.data.gov and are publicly accessible without needing a user account.

  For the time being, the Data.gov PMO will continue to provide this hosting capability on inventory.data.gov while it remains small scale and does not require significant additional Data.gov resources.


examples: ""
link: ""
layout: resource
toc: true
publish: false
---
