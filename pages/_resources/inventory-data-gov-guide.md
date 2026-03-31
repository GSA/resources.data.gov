---
resource_name: Inventory.data.gov Guide
slug: inventory-data-gov-guide
description: Details on how to get started with using inventory.data.gov, from
  creating a user account to using its features to manage datasets and export
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
  
  # Welcome to the Inventory.data.gov User Guide!

    {:#introduction}
   
  This guide is your friendly companion for everything you need to know about using Inventory.data.gov. We've organized it into two main parts:
  
  
  **Part 1: About Inventory.data.gov** will help you understand what the platform is, its purpose, and its key features.
  

  **Part 2: How to Use Inventory.data.gov** provides step-by-step instructions for getting started, managing datasets, and exporting your `data.json` files.
  
  
  Let's get started on making your agency's data more accessible and discoverable!

  # Part 1: About Inventory.data.gov
  
  ### What is Inventory.data.gov?
  
  Inventory.data.gov is a specialized tool designed to help federal agencies create and manage the **legally required metadata** for their datasets when they do not have a different means of doing so. Its primary purpose is to generate **properly formatted JSON files** that comply with current metadata standards, fulfilling requirements under the **OPEN Government Data Act**.  Most large agencies use a different metadata creation tool instead of inventory.data.gov, however this one is available if needed.
  

  
  **Important to understand:**

  *   **Inventory.data.gov focuses solely on metadata.** It does not allow you to edit your actual dataset content.


  *   **It is not a data storage platform.** Your datasets remain hosted by your agency.


  *   Once the compliant JSON file is created, you will **download it** and **post it on your agency’s own public-facing webpage**.

   
  **Why is this important?**

  
  The OPEN Government Data Act requires agencies to make their data publicly available and easily discoverable. Inventory.data.gov simplifies this process by:
  
  *   **Providing all the necessary fields** to describe your datasets.


  *   **Ensuring your metadata is formatted correctly** so it can be easily found and "harvested" by Data.gov – the nation's main catalog for federal open data.


  
  **Is it mandatory?**
  
  No, Inventory.data.gov isn't required! It's a helpful resource offered by GSA for agencies that need a straightforward way to create and maintain their data inventories, especially if they don't have their own internal solutions.

   
  **Important Note on Access:**   
  Inventory.data.gov is a secure, internal system. You'll need a user account to access and manage your agency's datasets. It's not publicly accessible, ensuring that only authorized individuals can make changes.


  **What are "Organizations" in Inventory.data.gov?** 

  
  In Inventory.data.gov, an "organization" is how your agency's datasets are grouped and managed. Think of it as your agency's dedicated workspace within the platform.
  
  *   **How Organizations Work:**

      *   **Grouping Datasets:** All the datasets managed by a specific agency or sub-agency are linked to its organization.

      *   **User Access:** Your user account will be associated with an organization, giving you permission to view, add, edit, or delete datasets belonging to that specific group.

      *   **Flexibility:** Organizations can represent an entire agency (e.g., Department of Labor) or a specific bureau/sub-agency (e.g., Farm Service Agency). They can also be structured to allow sub-agency data to "roll up" to a main agency.

  # Part 2: How to Use Inventory.data.gov
 

  {:#using-inventory-data-gov}
  
  ### Getting Started: Creating Your User Account

  {:#creating-a-user-account}

  **For New Users: Complete the New User / Validation Form.**

  *   **Access the Form:** Fill out the online form directly here: **https://touchpoints.app.cloud.gov/touchpoints/9145dd7e**

  *   **Information You'll Need to Provide:** Name, Government Email, Phone Number, For which government department and/or agency do you need access to in inventory.data.gov?, Agreement to GSA IT Rules of Behavior: You'll need to agree to the GSA IT Rules of Behavior (linked on the form: `https://www.gsa.gov/directives-library/gsa-information-technology-it-general-rules-of-behavior-4`). 


  ## Navigating Inventory.data.gov and Finding Your Organization

    {:#using-inventory-data-gov-to-manage-datasets}

  Once you've successfully logged in and have your Editor permissions, you'll be able to access your agency's datasets.
  
  1.  **Look for the Main Navigation Tabs:**

      After logging in, you'll typically see two important tabs at the top of the page:

      *   **"Datasets"**: This tab will show you all datasets you have access to.

      *   **"Organizations"**: This tab is where you'll find your agency's specific workspace.

  
  3.  **Go to the "Organizations" Tab:**  Click on the **"Organizations"** tab. This will take you to a page listing all the organizations within Inventory.data.gov.

  
  4.  **Find Your Agency's Organization:**  You can use the **search bar** on the "Organizations" page to quickly find your agency. Type in your agency's name (e.g., "Department of Labor," "Farm Service Agency").  Once you see your organization listed, **click on its name or icon**.

  
  5.  **View Your Datasets:**  After clicking on your organization, you'll be taken to its dedicated page. Here, you'll see a list of all the datasets currently associated with your agency. This is your starting point for adding new datasets or editing existing ones!


  
  ### Adding a Dataset

  {:#adding-a-dataset}

  Now that you've found your organization's page, you're ready to add a new dataset! Inventory.data.gov guides you through entering all the necessary metadata to make your data discoverable and compliant with **DCAT-US standards**.
  
  **Start the "Add Dataset" Process:**
  
    *   First, click on the **"Datasets"** tab then, look for and click the **blue "Add Dataset" button**.

    *   This will take you to the **"Create Dataset"** page, where you'll see three steps: **Required Metadata**, **Additional Metadata**, and **Resource Upload**. You can also click **"Back to dashboard"** at any time.
  
  **General Tips for Entering Metadata:**

    *   **DCAT-US Standard:** The fields you see are designed to capture information according to the **DCAT-US metadata standard**, ensuring your data is properly described for Data.gov. For more detailed information on specific fields, you can consult the DCAT-US Schema.

    *   **Examples & Pop-up Help:** Many fields have helpful examples displayed directly in the input box, and you can often find additional information by hovering over or clicking on help icons.

    *   **Validation is Your Friend:** The system will validate your entries as you go. If you miss a required field or enter information in an incorrect format, you'll see an error message when you try to save. This helps ensure your metadata is accurate and complete.
  
  **Entering Required Metadata (Step 1 of 3):**  This first screen focuses on essential information your dataset needs.
  

    *   **Title:** Give your dataset a clear and descriptive title using everyday language. This makes it easy for users to find and understand. The system will automatically generate a web-friendly URL (e.g., `https://inventory.data.gov/dataset/your-dataset-title`) which you can **Edit** if needed.


    *   **Description:** Write a brief, clear description that helps a user quickly decide if the dataset is of interest. You can use **Markdown Formatting** here. Max of 10,000 characters.


    *   **Tags:** Add relevant keywords (tags) using both technical and non-technical terms. These help users find your data when they search Data.gov. **Press Tab or Enter to add each new tag.**


    *   **Organization:** From the dropdown list, select your top-level government department or agency (e.g., "Department of Agriculture").


    *   **Select Publisher:** Start typing the name of the specific component or sub-agency within your selected Organization that is publishing this dataset (e.g., "Farm Service Agency"). The field should auto-populate with matching options.  *If your Publisher isn't listed:* Please contact **`datagovhelp@gsa.gov`** for assistance in having it added to the system.


    *   **Contact Name:** Enter the name of the person who can answer questions about this specific dataset.


    *   **Contact Email:** Enter the email address for the dataset contact.


    *   **Unique ID:** Every dataset must have an ID number that is unique within your agency.


    *   **Public Access level:** Choose the general access level for this dataset from the dropdown:
    
        *   `Public`: This dataset can be made publicly available to all without restrictions.

        *   `Restricted Public`: This dataset is available to the public under certain use restrictions.

        *   `Non-Public`: This dataset is not available to members of the public.


    *   **License:** Select the applicable license from the dropdown (e.g., MIT, CC0).
    
        *   *If you select "Other":* Please specify the name of your License in URL format, including "https://" at the beginning.


    *   **Rights:** This section further clarifies access. Choose:

        *   `My dataset is public`

        *   `My dataset is not public`

        *   *If "My dataset is not public" is selected:* Add an explanation of rights, any restrictions, or instructions on how to access a restricted file (maximum 255 characters).


    *   **Relevant Location (Spatial):** Indicate if your dataset has a geographic component.
    
        *   `My dataset does not have a spatial component`

        *   `My dataset does have a spatial component`

        *   *If "My dataset does have a spatial component" is selected:* Provide location information such as place names or latitude/longitude pairs.


    *   **Temporal:** Indicate if your dataset covers a specific time period.

        *   `My dataset does not have a start and end date for the applicability of data`

        *   `My dataset has a start and end date for the applicability of data`

        *   *If "My dataset has a start and end date..." is selected:* Provide the start date and end date for the applicability of data using the MM/DD/YYYY format.


    Once you've filled out all the required fields on this screen, you have two options:

    *   Click **"Save draft"** to save your progress without publishing.

    *   Click **"Save and Continue"** to save your progress and move to the next screen (Additional Metadata).


  **Entering Additional Metadata (Step 2 of 3):**
  
      After completing the required fields, you'll land on the "Additional Metadata" screen. You'll see a confirmation: "Dataset saved successfully".  Please note that the additional metadata you upload will help public users better find and use this dataset. Not all of these criteria will apply to every dataset, so feel free to only answer what applies. For more detailed information on these form fields, consult the DCAT-US Schema.


    Here are the fields on this screen:


    *   **Meets Agency Data Quality:** Select "Yes" or "No" from the dropdown to indicate whether this dataset meets your agency’s internal data quality standards (if your agency has defined them).


    *   **Geospatial:** This section clarifies if your dataset contains geographic information.
    
        *   Choose "My dataset is a geospatial dataset" or "My dataset is not a geospatial dataset."

        *   *Note:* Geospatial datasets are typically included in `geoplatform.gov`. If your **DCAT-US geospatial dataset** needs to be featured there, you'll need to follow additional specific directions. You can find full details on the Resources.data.gov page.


    *   **Data Dictionary URL:** If your dataset has an accompanying data dictionary (which explains what each piece of data means) or a schema (which describes its structure), provide the **URL** to it here. Please include "https://" at the beginning of your URL.


    *   **Data Dictionary Type:** If you provided a Data Dictionary URL, choose the format or type of that dictionary from the extensive dropdown list (e.g., "CSV," "JSON," "XML").
    
        *   *If your type isn't listed:* Select "Other" and specify your Data Dictionary Type in the field that appears.


    *   **Data Publishing Frequency:** Select how often this dataset is updated from the dropdown (e.g., "Irregular/As needed," "Daily," "Monthly," "Annually").

        *   *If your frequency isn't listed:* Select "Other" and specify a valid ISO 8601 timestamp in the field that appears.


    *   **Dataset Landing Page URL:** If your dataset has a specific landing page or a dedicated homepage on your agency's website, enter its **URL** here. Please include "https://" at the beginning of your URL.


    *   **Language - Language Subtag:** Select the primary language of your dataset from the dropdown list (e.g., "English," "Spanish," "Chinese").


    *   **Language - Regional Subtag:** If applicable, select a regional subtag for the language (e.g., "United States," "Canada," "United Kingdom").


    *   **Dataset's IT Unique Investment Identifier:** If this dataset is part of a larger IT investment, enter its Unique Investment Identifier here.


    *   **Related Documents:** You can enter **URLs** for any additional related resources or documents that provide further context or information about your dataset.


    *   **Release Date:** Enter the official release date of the dataset. **Date Format: MM/DD/YYYY**.


    *   **System of Records Notice URL:** If a Privacy Act System of Records Notice (SORN) applies to this dataset, enter the **URL** for the published SORN here.


    *   **Collection Designation (Parent/Child Datasets):** These fields are for linking datasets together if they are part of a larger series or collection.  
    
        *   **Is parent:** Select "Yes" or "No" from the dropdown to indicate if *this specific dataset* is intended to be the "parent" (the main, overarching dataset) of a collection. Choose "No" otherwise.  *Important:* A dataset designated as a "parent" cannot also be a "child" (meaning it cannot be part of another collection). If you choose "Yes" for "Is parent," this dataset will then become an option for other datasets in your organization to select as their parent.  If you chose "No" for "Is parent," you will then be able to use the **"Select Parent Dataset"** field. Here, you can select an existing "parent" dataset from your organization to make this dataset a "child" within that collection. Start typing the title of the parent dataset to see matching options. This field is optional; if left empty, your dataset will be independent.

    Once you've completed all the relevant fields on this screen, you can click **"Save draft"** to save your progress without publishing, or click **"Back to previous page"** to return to the "Required Metadata" screen, or click **"Save and Continue"** to save and proceed to the final step.
  
  **Uploading Resources (Step 3 of 3):**

    After completing the "Additional Metadata" screen, you'll land on the "Resource Upload" screen, with a "Dataset saved successfully" confirmation. This final step is where you provide information on *how to access* the actual dataset, or related files like a data dictionary.  You can add the URL of the dataset where it is available on your agency's website. If you are *uploading* the dataset itself, please notify the Data.gov team at **`datagovhelp@gsa.gov`**. You can also add a URL or file of information related to the dataset, such as a data dictionary.


    **To add a resource, first choose one of the following options:**


    *   **Link to a file:** Choose this if your dataset is directly downloadable (e.g., a CSV, Excel, or PDF file) from a **URL**. Provide a direct download link to the file.

    *   **Upload a file:** Choose this if you want to upload a file directly from your computer. **Important:** If you use this option to upload the dataset itself, please notify the Data.gov team at **`datagovhelp@gsa.gov`**.

    *   **Link to an API:** Choose this if you're providing access to your dataset via an Application Programming Interface. Provide a link to access the dataset via API.


    *   **Access URL:** Choose this if the dataset isn't directly downloadable or an API, but has an access point (e.g., an HTML website with more information, or a web application where users can interact with the data). Provide the URL.



    **Once you've chosen a resource option, fill in the following details:**


    *   **Name:** Give this specific resource a clear, descriptive name (e.g., "Annual Report 2023 CSV," "Real-time API Endpoint," "Interactive Map Application").


    *   **Description:** Provide a brief description of this resource. You can use **Markdown Formatting** here.


    *   **Media Type:** Select the relevant standard media type (MIME type) for your resource from the extensive dropdown list (e.g., `text/csv`, `application/json`, `application/xml`, `image/jpeg`).


    *   **Conforms To:** If this resource conforms to a specific standard or schema, provide a resolvable **URL** to that standard here.


    *   **Format:** Type in the specific format of the resource (e.g., `CSV`, `JSON`, `API`, `PDF`). This field will often be guessed automatically, so you can leave it blank if you wish.


    **After adding your resource(s):**

    *   **"Save and add another resource"**: Click this if your dataset has multiple files, APIs, or access points, and you want to add more.
    
        *   **Heads Up: Patience is Key for Uploads!** After clicking this button, especially for files larger than a few kilobytes, the page might appear frozen or unresponsive with a message like "Your submission is in progress, this may take a few minutes for large dataset files."

        *   **What's Happening:** The system is actively processing your submission in the background. It's not frozen, just busy! Even files up to 75KB can take a minute or more to process.

        *   **What to Do:** Please **do not navigate away from the page, refresh your browser, or click the button again.** Doing so could interrupt the upload and lead to data loss or errors. Wait for the page to update and confirm the resource has been added.

        *   **Best Practice for Large Files:** For very large files (e.g., hundreds of megabytes or gigabytes), it is generally more efficient and reliable to **host the file on your agency's website** and use the **"Link to a file"** option instead of direct upload.


    *   **"Save draft"**: Click this to save your progress without publishing.


    *   **"Back to previous page"**: Click this to return to the "Additional Metadata" screen.


    *   **"Finish and publish"**: Click this to save your dataset and make it available for inclusion in your agency's `data.json` file.

    *Note:* The system will automatically display a "Draft saved" message with a timestamp (e.g., `[13:32, 03-30-26]`) when you save.


    **Troubleshooting Tip: If You Get Logged Out During Resource Upload**  If you are logged out of the system due to a `login.gov` timeout while a resource submission is in progress, **your metadata should have been saved as a draft**, but the **resource file itself may not have completed its upload.** **To recover:**  Log back into Inventory.data.gov. Navigate to the **"My Datasets"** tab on your user dashboard.  Click on the title of the dataset you were working on to reopen it for editing.  Return to the "Resource Upload" section and re-attempt the upload of the resource file.

  
  ### Understanding Dataset Status: Draft vs. Published

  When you're managing datasets, it's important to understand the difference between a "Draft" and a "Published" status, as this affects whether your dataset's metadata is included in your agency's `data.json` file.
  
  *   **Draft Datasets:**

      *   **Purpose:** Datasets saved as "Draft" are still a work in progress. This status is used when you're still entering metadata, it's undergoing internal review, or it's simply not yet ready for public release.

      *   **Impact on `data.json`:** **Important:** Datasets in "Draft" status will **not** be included when you export your agency's `data.json` file. This means they will not be harvested by Data.gov.

      *   **Accessibility:** Your draft datasets are saved and remain accessible for you to continue editing from your "My Datasets" dashboard. Even if you're logged out due to a timeout, your metadata work should be preserved as a draft (though you may need to re-upload any resource files).
  


  *   **Published Datasets:**

      *   **Purpose:** A dataset becomes "Published" once you've completed all metadata entry, and it's approved and ready for public listing. You achieve this by clicking **"Finish and Publish"** on the final "Resource Upload" screen.

      *   **Impact on `data.json`:** Only "Published" datasets will be included when you export your agency's `data.json` file, making them eligible for harvesting and display on Data.gov.
  

  This distinction gives you full control over when your dataset's metadata officially becomes part of your agency's open data inventory.

 

  ###  Exporting Your Agency's Data.json File


  {:#exporting-data-json}


  Once you've finished entering and editing the metadata for your organization's datasets, you're ready to export them into a `data.json` file that complies with the **DCAT-US standard**.
  

  1.  **Navigate to Your Organization's Page:**
  
      *   From anywhere in Inventory.data.gov, click on your agency's **Organization name** (usually at the top of the page) or its **icon** (often found on the left sidebar). This will take you to your main Organization page, which lists all your datasets.
  

  
  **Choose Your Export Option:**
  
    On your Organization page, look for the buttons at the top of the page. You'll typically see:


    *   **"Add Dataset"**: (This button is for creating new datasets, as we discussed in Section 3.)

    *   **"Export data.json"**: Click this button to generate and download your agency's official `data.json` file. This file will contain all your **"Published"** datasets, formatted for Data.gov.    te:* Clicking "Export data.json" will prompt you to download a file typically named `unredacted.zip`.

    *   **"Export Drafts"**:  Clicking this button will export all datasets that are currently in **"Draft"** status to a separate file. This is useful for review purposes. When you click it, your browser will prompt you to download a file typically named `draft.zip`. These datasets will **not** be included in your official `data.json` for Data.gov.
  

  **Download the Export File:**

    *   Clicking **"Export data.json"** or **"Export Drafts"** will initiate a download. Your browser will prompt you to "Save As" a file (e.g., `unredacted.zip` or `draft.zip`). Depending on your browser settings, it might download automatically.
  

  **Understand the Downloaded Zip File:**

    The file you receive will be a **`.zip` archive**. Inside, you'll find:

    *   **`data.json`**: This is the primary file containing your agency's metadata, formatted for Data.gov. (Note: The `draft.zip` will contain a `data.json` file with draft datasets, not for official submission).

    *   **`errorlog.txt` and `errors.json` (if errors were found)**: These files will only be present if some of your datasets failed validation against the DCAT-US Schema.

  
  
  **CRITICAL: Check for Errors in `errorlog.txt`!**


    *   It is **extremely important** to verify that all your datasets were successfully exported. The best way to do this is to check if an `errorlog.txt` file was included in the `.zip` archive.

    *   **If `errorlog.txt` is present:** This means some of your datasets did not validate correctly and **will not be included** in the `data.json` file. You **must** review and resolve these errors before posting your `data.json` file.

    *   **Consequence of Ignoring Errors:** Posting a `data.json` file with unaddressed errors could lead to datasets *disappearing* from Data.gov, as they won't be present in the new, incomplete file.

    *   **If `errorlog.txt` is NOT present:** Congratulations! No errors were encountered, and your `data.json` file is ready.

  
  
  **Resolve Any Errors (If Needed):**
 
    *   If you found an `errorlog.txt` file, open it. It will describe the type of problem, the dataset ID, and the dataset title for each problematic entry.

    *   Go back to Inventory.data.gov, search for the identified dataset, click **"Edit"**, and make the necessary changes.

    *   Once you've fixed the errors, return to your Organization page and **re-download the inventory**. Continue this process until you get a `.zip` file that contains *only* the `data.json` and no `errorlog.txt` or `errors.json` files.

  
  
  **Post Your Data.json File:**  Once you have a clean `data.json` file (without errors), you must **post it on your agency’s public website at `agency.gov/data.json`**. This is the location where the Data.gov catalog will "harvest" your metadata.
  
  
  **First-Time Harvest Setup (If Applicable):**  If this is the very first time your agency is posting a `data.json` file at `agency.gov/data.json`, please contact the Product Manager at **`datagovhelp@gsa.gov`**. You'll need to coordinate with them to ensure Data.gov is set up to harvest your new source correctly.


  
  ### Automating data.json downloads by agencies

  {:#automating-data-json-downloads-by-agencies}

  Rather than downloading data.json files, it is possible to use the API and your API key in order to automate the process of adding the data.json file to the agency website.

  Here’s what the request would look like using the curl-like tool [httpie](https://httpie.io/)

 

examples: ""
link: ""
layout: resource
toc: true
publish: false
---
