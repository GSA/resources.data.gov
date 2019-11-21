# Field Mappings

### Catalog Fields
Label | POD V1.1 | POD v1.0 | CKan API | DCAT | Schema.org |
--- | --- | --- | --- | --- | --- 
Metadata Context | *@context* | *n/a* | *n/a* | *n/a* | *n/a*
Metadata Catalog ID | *@id* | *n/a* | *n/a* | *n/a* | *n/a*
Metadata Type | *@type* | *n/a* | *n/a* | *n/a* | *itemtype attribute
Schema Version | *conformsTo* | *n/a* | *n/a* | *n/a* | *n/a*
Schema URL | *describedBy* | *n/a* | *n/a* | *n/a* | *n/a*
Dataset | *dataset* | *n/a* | *results* | [dct:dataset](http://www.w3.org/TR/vocab-dcat/#Property:catalog_dataset "dct:dataset") | [dataset](http://schema.org/dataset "dataset")

### Dataset Fields 
Note the mapping for `license` and `rights` from Project Open Data to DCAT applies the fields from the Dataset object in Project Open Data to each of the Distribution objects in DCAT.

Label | POD V1.1 | POD v1.0 | CKan API | DCAT | Schema.org |
--- | --- | --- | --- | --- | --- 
Metadata Type | *@type* | *n/a* | *n/a* | *n/a*| *itemtype attribute*
Title | *title* | *title* | *title* |  [dct:title](http://www.w3.org/TR/vocab-dcat/#Property:dataset_title "dct:title") | [name](http://schema.org/name "name") | 
Description | *description* | *description* | *notes* | [dct:description](http://www.w3.org/TR/vocab-dcat/#Property:dataset_description "dct:description") | [description](http://www.w3.org/TR/vocab-dcat/#Property:dataset_description "description")
Tags | *keyword* | *keyword* | *tags* | [dcat:keyword](http://www.w3.org/TR/vocab-dcat/#Property:dataset_keyword) | [keywords](http://schema.org/keywords) 
Latest Update | *modified* | *modified* | *n/a* | [dct:modified](http://www.w3.org/TR/vocab-dcat/#Property:dataset_update_date) | [dateModified](http://schema.org/dateModified)
Publisher | *publisher ---> name* | *publisher* | *organization ---> title* | [dct:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher ) ---> [foaf:name](http://xmlns.com/foaf/spec/#term_name) | [publisher](http://schema.org/publisher) ---> [Organization](http://schema.org/Organization): [Name](http://schema.org/name) |
Publisher Parent Organization | *publisher ---> name* | *publisher* | *organization ---> title* | [dct:publisher](http://www.w3.org/TR/vocab-dcat/#Property:dataset_publisher) ---> [org:SuborganizationOf](http://www.w3.org/TR/vocab-org/#org:subOrganizationOf) | [publisher](http://schema.org/publisher) --->[Organization](http://schema.org/Organization):[memberOf](http://schema.org/memberOf)
Contact Name | *contactPoint ---> fn* | *contactPoint* | *maintainer* | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/#Property:dataset_contactPoint) ---> [vcard:fn](http://www.w3.org/TR/vcard-rdf/#d4e199) | [provider](http://schema.org/publisher) ---> [Person](http://schema.org/Person):[name](http://schema.org/name)
Contact Email | *contactPoint ---> hasEmail* | *mbox* | *maintainer_email* | [dcat:contactPoint](http://www.w3.org/TR/vocab-dcat/#Property:dataset_contactPoint):[vcard:hasEmail](http://www.w3.org/TR/vcard-rdf/#d4e183) | [provider](http://schema.org/publisher)--->[person](http://schema.org/Person):[email](http://schema.org/email)
Unique Identifier | *identifier* | *identifier* | *id* | [dct:identifier](http://www.w3.org/TR/vocab-dcat/#Property:dataset_identifier) | *n/a*
Public Access Level | *accessLevel* | *accessLevel* | *n/a* | *n/a* | *n/a* 
Bureau Code | *bureauCode* | *bureauCode* | *n/a* | *n/a* | *n/a*
Program Code | *programCode* | *programCode* | *n/a* | *n/a* | *n/a* 
Distribution | *distribution* | *distribution* | *resources * | [dcat:distribution](http://www.w3.org/TR/vocab-dcat/#Property:dataset_distribution) | [distribution](http://schema.org/distribution)
License | *license* | *license* | *licence_title | [dct:license](http://www.w3.org/TR/vocab-dcat/#Property:distribution_license) | [license](http://schema.org/license)
Rights | *rights* | *accessLevelComment* | *n/a* | [dct:rights](http://www.w3.org/TR/vocab-dcat/#Property:distribution_rights) | *n/a*
Endpoint | **Removed** | *webService* | *resources ---> URL* | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) | *n/a* 
Spatial | *spatial* | *spatial* | *n/a* | [dct:spatial](http://www.w3.org/TR/vocab-dcat/#Property:dataset_spatial) | [spatial](http://schema.org/spatial)
Temporal | *temporal* | *temporal* | *n/a* | [dct:temporal](http://www.w3.org/TR/vocab-dcat/#Property:dataset_temporal) | [temporal](http://schema.org/temporal)
Release Date | *issued* | *issued* | *n/a* | [dct:issued](http://www.w3.org/TR/vocab-dcat/#Property:dataset_release_date) | [datePublished](http://schema.org/datePublished)
Frequency | *accrualPeriodicity* | *accuralPeriodicity* | *n/a* | [accrualPeriodicity](http://www.w3.org/TR/vocab-dcat/#Property:dataset_frequency) | *n/a* 
Language | *language* | *language* | *n/a* | [dct:language](http://www.w3.org/TR/vocab-dcat/#Property:dataset_language) | [inLanguage](http://schema.org/inLanguage)
Data Quality | *dataQuality* | *dataQuality* | *n/a* | *n/a* | *n/a* 
Category | *theme* | *theme* | *groups* | [dcat:theme](http://www.w3.org/TR/vocab-dcat/#Property:dataset_theme) | [about](http://schema.org/about)
Related Documents | *references* | *references* | *n/a* | [dct:references](http://dublincore.org/documents/dcmi-terms/#terms-references) | *n/a* 
Homepage URL | *landingPage* | *landingPage* | *n/a* | [dcat:landingPage](http://www.w3.org/ns/dcat#Property:dataset_landingpage) | [url](http://schema.org/url)
Collection | *isPartOf* | *n/a* | *n/a* | *n/a* | [isPartOf](http://schema.org/isPartOf)
System of Records | *systemOfRecords* | *systemOfRecords* | *n/a* | *n/a* | *n/a* 
Primary IT Investment |*primaryITInvestmentUII* | *primaryITInvestmentUII* | *n/a* | *n/a* | *n/a* 
Data Dictionary | *describedBy* | *dataDictionary* | *n/a* | *n/a* | *n/a* 
Data Dictionary Type | *describedByType* | *n/a* | *n/a* | *n/a* | *n/a* 
Data Standard | *conformsTo* | *n/a* | *n/a* | *n/a* | *n/a* 

### Data Distribution Fields 
Label | PODv1.1 | PODv1.0 | CKan API | DCat | Schema.org 
--- | --- | --- | --- | --- | --- | 
Metadata Type | *@type* | *n/a* | *n/a* | *n/a* | itemtype attribute
Download URL | *downloadURL* | *accessURL* | *resources ---> URL* | [dcat:downloadURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_downloadurl) | [contentURL](http://schema.org/contentUrl)
Access URL | *accessURL* | *n/a* | *resources ---> URL* | [dcat:accessURL](http://www.w3.org/TR/vocab-dcat/#Property:distribution_accessurl) |  [contentURL](http://schema.org/contentUrl)
Media Type| *mediaType* | *format* | *resources ---> mimetype* | [dcat:mediatype](http://www.w3.org/TR/vocab-dcat/#Property:distribution_media_type) | *n/a* 
Format | *format* | *n/a* | *resources ---> format* | [dct:format](http://www.w3.org/TR/vocab-dcat/#Property:distribution_format) | [endcodingFormat](http://schema.org/encodingFormat)
Title | *title* | *n/a* | *rescources ---> name* | [dct:title](http://www.w3.org/TR/vocab-dcat/#Property:distribution_title) | [name](http://schema.org/name)
Description | *description* | *n/a* | *resources ---> description* | [dct:description](http://www.w3.org/TR/vocab-dcat/#Property:distribution_description) | [description](http://schema.org/description)
Data Dictionary | *describedBy* | *n/a* | | *n/a*| *n/a* 
Data Dictionary Type | *describedByType* | *n/a* | | *n/a*| *n/a* 
Data Standard | *conformsTo* | *n/a* | | *n/a* | *n/a* 
