---
title: DCAT-US 3.0: Catalog
layout: page
permalink: /standards/catalog/dcat-us-3/catalog/
primary_nav_section: Data Standards
category_name: Data standards
---
**Title:** DCAT-US 3 Catalog

A curated collection of metadata about datasets, data services, or other resources

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "Catalog",
    "title": "National Climate Data Catalog",
    "description": "A comprehensive catalog of climate and weather datasets from federal monitoring stations across the United States.",
    "publisher": {
        "@type": "Agent",
        "name": "National Climate Data Center"
    },
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "dataset": [
        {
            "@type": "Dataset",
            "title": "Daily Climate Observations 2024",
            "description": "Daily temperature, precipitation, and wind measurements.",
            "contactPoint": {
                "fn": "Climate Data Support",
                "hasEmail": "mailto:climate@example.gov"
            },
            "publisher": {
                "name": "National Climate Data Center"
            },
            "identifier": "https://example.gov/datasets/climate-observations-1"
        }
    ],
    "homepage": {
        "@type": "Document",
        "title": "National Climate Data Catalog Homepage",
        "accessURL": "https://example.gov/climate-data"
    },
    "language": [
        "en"
    ],
    "issued": "2020-01-15",
    "modified": "2024-06-01",
    "rights": [
        "This catalog is maintained by the National Climate Data Center."
    ],
    "spatial": [
        {
            "@type": "Location",
            "prefLabel": "United States"
        }
    ],
    "themeTaxonomy": [
        {
            "@type": "ConceptScheme",
            "title": "Climate Science Topics"
        }
    ],
    "conformsTo": {
        "@type": "Standard",
        "title": "DCAT-US 3.0"
    }
}
```

| Property                                         | Type                    | Title/Description           |
| ------------------------------------------------ | ----------------------- | --------------------------- |
| - [@id](#@id )                                   | string                  | -                           |
| - [@type](#@type )                               | string                  | -                           |
| - [catalog](#catalog )                           | null or array           | Related catalogs            |
| - [contactPoint](#contactPoint )                 | null or array           | Contact points              |
| + [dataset](#dataset )                           | array                   | dataset                     |
| - [keyword](#keyword )                           | null or array of string | keyword/tag                 |
| - [record](#record )                             | null or array           | catalog record              |
| - [service](#service )                           | null or array           | service                     |
| - [theme](#theme )                               | null or array           | theme/category              |
| - [themeTaxonomy](#themeTaxonomy )               | null or array           | themes                      |
| - [accessRights](#accessRights )                 | More than one type      | access rights               |
| - [conformsTo](#conformsTo )                     | More than one type      | schema version              |
| - [creator](#creator )                           | null or array           | creator                     |
| - [description](#description )                   | null or string          | description                 |
| - [hasPart](#hasPart )                           | null or array           | has part                    |
| - [identifier](#identifier )                     | More than one type      | identifier                  |
| - [otherIdentifier](#otherIdentifier )           | null or array           | other identifier            |
| - [issued](#issued )                             | More than one type      | release date                |
| - [language](#language )                         | More than one type      | language                    |
| - [license](#license )                           | More than one type      | license                     |
| - [modified](#modified )                         | More than one type      | update/modification date    |
| - [publisher](#publisher )                       | More than one type      | publisher                   |
| - [rights](#rights )                             | null or array of string | rights                      |
| - [rightsHolder](#rightsHolder )                 | null or array           | rights holder               |
| - [spatial](#spatial )                           | null or array           | spatial/geographic coverage |
| - [subject](#subject )                           | null or array           | subject                     |
| - [temporal](#temporal )                         | null or array           | temporal coverage           |
| - [title](#title )                               | null or string          | title                       |
| - [category](#category )                         | null or array           | category                    |
| - [homepage](#homepage )                         | More than one type      | homepage                    |
| - [qualifiedAttribution](#qualifiedAttribution ) | null or array           | qualified attribution       |

## <a name="@id"></a>[Optional] Property `DCAT-US 3 Catalog > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/catalogs/federal-data-catalog"
```

## <a name="@type"></a>[Optional] Property `DCAT-US 3 Catalog > @type`

**Requirement:** Optional

| **Type**    | `string`    |
| ----------- | ----------- |
| **Default** | `"Catalog"` |

## <a name="catalog"></a>[Optional] Property `DCAT-US 3 Catalog > catalog`

**Title:** Related catalogs

**Requirement:** Optional

List of related catalogs that are useful in the context of this catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| [DCAT-US 3 Catalog](#catalog_items) | A curated collection of metadata about datasets, data services, or other resources |

### <a name="catalog_items"></a>DCAT-US 3 Catalog > catalog > DCAT-US 3 Catalog

**Title:** DCAT-US 3 Catalog

A curated collection of metadata about datasets, data services, or other resources

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Additional properties** | Any type allowed           |
| **Same definition as**    | [DCAT-US 3 Catalog](#root) |

## <a name="contactPoint"></a>[Optional] Property `DCAT-US 3 Catalog > contactPoint`

**Title:** Contact points

**Requirement:** Optional

Contact information people can use to ask questions or send feedback about the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](#contactPoint_items)     | Contact information for an individual or entity |

### <a name="contactPoint_items"></a>DCAT-US 3 Catalog > contactPoint > Kind

**Title:** Kind

Contact information for an individual or entity

| **Type**                  | `object`          |
| ------------------------- | ----------------- |
| **Additional properties** | Any type allowed  |
| **Defined in**            | [Kind](./Kind.md) |

## <a name="dataset"></a>[Optional] Property `DCAT-US 3 Catalog > dataset`

**Title:** dataset

**Requirement:** Optional

List of datasets included in the catalog. Use this together with service so the catalog is not empty.

| **Type**     | `array` |
| ------------ | ------- |
| **Required** | Yes     |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](#dataset_items)       | A collection of data published or curated by one provider |

### <a name="dataset_items"></a>DCAT-US 3 Catalog > dataset > Dataset

**Title:** Dataset

A collection of data published or curated by one provider

| **Type**                  | `object`                |
| ------------------------- | ----------------------- |
| **Additional properties** | Any type allowed        |
| **Defined in**            | [Dataset](./Dataset.md) |

## <a name="keyword"></a>[Optional] Property `DCAT-US 3 Catalog > keyword`

**Title:** keyword/tag

**Requirement:** Optional

List of keywords or tags describing the catalog

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "federal data",
    "government",
    "open data",
    "public records"
]
```

| Each item of this array must be | Description |
| ------------------------------- | ----------- |
| [keyword items](#keyword_items) | -           |

### <a name="keyword_items"></a>DCAT-US 3 Catalog > keyword > keyword items

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="record"></a>[Optional] Property `DCAT-US 3 Catalog > record`

**Title:** catalog record

**Requirement:** Optional

A catalog record describing how a single resource (such as a dataset or data service) is registered in the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                             |
| ------------------------------- | ----------------------------------------------------------------------- |
| [CatalogRecord](#record_items)  | A record in a catalog, describing the registration of a single resource |

### <a name="record_items"></a>DCAT-US 3 Catalog > record > CatalogRecord

**Title:** CatalogRecord

A record in a catalog, describing the registration of a single resource

| **Type**                  | `object`                            |
| ------------------------- | ----------------------------------- |
| **Additional properties** | Any type allowed                    |
| **Defined in**            | [Catalogrecord](./Catalogrecord.md) |

## <a name="service"></a>[Optional] Property `DCAT-US 3 Catalog > service`

**Title:** service

**Requirement:** Optional

List of data services included in the catalog. Use this together with dataset so the catalog is not empty.

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                         |
| ------------------------------- | ------------------------------------------------------------------- |
| [DataService](#service_items)   | A service that provides access to data or data processing functions |

### <a name="service_items"></a>DCAT-US 3 Catalog > service > DataService

**Title:** DataService

A service that provides access to data or data processing functions

| **Type**                  | `object`                                                       |
| ------------------------- | -------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                               |
| **Same definition as**    | [DataService](#dataset_items_sample_items_accessService_items) |

## <a name="theme"></a>[Optional] Property `DCAT-US 3 Catalog > theme`

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the catalog. A catalog can have more than one theme.

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#theme_items)         | A controlled term or label, optionally drawn from a concept scheme |

### <a name="theme_items"></a>DCAT-US 3 Catalog > theme > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                                      |
| ------------------------- | ----------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                        |
| **Same definition as**    | [Concept](#dataset_items_sample_items_representationTechnique_anyOf_i1) |

## <a name="themeTaxonomy"></a>[Optional] Property `DCAT-US 3 Catalog > themeTaxonomy`

**Title:** themes

**Requirement:** Optional

Controlled vocabulary or taxonomy used to classify catalog resources, such as datasets and services

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be       | Description                                                           |
| ------------------------------------- | --------------------------------------------------------------------- |
| [ConceptScheme](#themeTaxonomy_items) | A controlled vocabulary or other list of approved terms for a concept |

### <a name="themeTaxonomy_items"></a>DCAT-US 3 Catalog > themeTaxonomy > ConceptScheme

**Title:** ConceptScheme

A controlled vocabulary or other list of approved terms for a concept

| **Type**                  | `object`                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                                           |
| **Same definition as**    | [inScheme](#dataset_items_sample_items_representationTechnique_anyOf_i1_anyOf_i1_inScheme) |

## <a name="accessRights"></a>[Optional] Property `DCAT-US 3 Catalog > accessRights`

**Title:** access rights

**Requirement:** Optional

Information about whether the catalog is publicly accessible, restricted, or not public

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"Public access with no restrictions"
```

| Any of(Option)                                           |
| -------------------------------------------------------- |
| [Null allowed when not required](#accessRights_anyOf_i0) |
| [item 1](#accessRights_anyOf_i1)                         |

### <a name="accessRights_anyOf_i0"></a>Property `DCAT-US 3 Catalog > accessRights > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="accessRights_anyOf_i1"></a>Property `DCAT-US 3 Catalog > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="conformsTo"></a>[Optional] Property `DCAT-US 3 Catalog > conformsTo`

**Title:** schema version

**Requirement:** Optional

Standard, schema, profile, or model that this catalog follows

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#conformsTo_anyOf_i0) |
| [Standard](#conformsTo_anyOf_i1)                       |

### <a name="conformsTo_anyOf_i0"></a>Property `DCAT-US 3 Catalog > conformsTo > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="conformsTo_anyOf_i1"></a>Property `DCAT-US 3 Catalog > conformsTo > anyOf > Standard`

**Title:** Standard

A standard or specification that another resource conforms to

| **Type**                  | `object`                                                                     |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                             |
| **Same definition as**    | [Standard](#dataset_items_sample_items_accessService_items_conformsTo_items) |

## <a name="creator"></a>[Optional] Property `DCAT-US 3 Catalog > creator`

**Title:** creator

**Requirement:** Optional

Person or organization responsible for creating the catalog metadata

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](#creator_items)         | A person, organization, software agent, or other entity involved with a resource |

### <a name="creator_items"></a>DCAT-US 3 Catalog > creator > Agent

**Title:** Agent

A person, organization, software agent, or other entity involved with a resource

| **Type**                  | `object`                                                               |
| ------------------------- | ---------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                       |
| **Same definition as**    | [Agent](#dataset_items_sample_items_accessService_items_creator_items) |

## <a name="description"></a>[Optional] Property `DCAT-US 3 Catalog > description`

**Title:** description

**Requirement:** Optional

Plain-language summary of the catalog

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"A comprehensive catalog of climate and weather datasets from federal monitoring stations across the United States."
```

```json
"A comprehensive catalog of federal government data assets spanning multiple agencies and data domains."
```

## <a name="hasPart"></a>[Optional] Property `DCAT-US 3 Catalog > hasPart`

**Title:** has part

**Requirement:** Optional

List of catalogs that are contained within this catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| [DCAT-US 3 Catalog](#hasPart_items) | A curated collection of metadata about datasets, data services, or other resources |

### <a name="hasPart_items"></a>DCAT-US 3 Catalog > hasPart > DCAT-US 3 Catalog

**Title:** DCAT-US 3 Catalog

A curated collection of metadata about datasets, data services, or other resources

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Additional properties** | Any type allowed           |
| **Same definition as**    | [DCAT-US 3 Catalog](#root) |

## <a name="identifier"></a>[Optional] Property `DCAT-US 3 Catalog > identifier`

**Title:** identifier

**Requirement:** Optional

Main unique identifier for the catalog, such as a URI or another persistent identifier

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>Property `DCAT-US 3 Catalog > identifier > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>Property `DCAT-US 3 Catalog > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                                 |
| ------------------------- | -------------------------------------------------- |
| **Additional properties** | Any type allowed                                   |
| **Same definition as**    | [Identifier](#dataset_items_otherIdentifier_items) |

## <a name="otherIdentifier"></a>[Optional] Property `DCAT-US 3 Catalog > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Catalog besides the main identifier, e.g. the URI or other unique identifiers

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be      | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [Identifier](#otherIdentifier_items) | A unique identifier and optionally it's scheme and other relevant information |

### <a name="otherIdentifier_items"></a>DCAT-US 3 Catalog > otherIdentifier > Identifier

**Title:** Identifier

A unique identifier and optionally it's scheme and other relevant information

| **Type**                  | More than one type                                 |
| ------------------------- | -------------------------------------------------- |
| **Additional properties** | Any type allowed                                   |
| **Same definition as**    | [Identifier](#dataset_items_otherIdentifier_items) |

## <a name="issued"></a>[Optional] Property `DCAT-US 3 Catalog > issued`

**Title:** release date

**Requirement:** Optional

Date when the catalog was formally issued, such as its initial publication date

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"2020-01-15"
```

```json
"2024-01-15T10:30:00Z"
```

```json
"2024"
```

```json
"2024-01"
```

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#issued_anyOf_i0) |
| [Date string](#issued_anyOf_i1)                    |

### <a name="issued_anyOf_i0"></a>Property `DCAT-US 3 Catalog > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>Property `DCAT-US 3 Catalog > issued > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                      |
| ----------------------------------- |
| [item 0](#issued_anyOf_i1_anyOf_i0) |
| [item 1](#issued_anyOf_i1_anyOf_i1) |
| [item 2](#issued_anyOf_i1_anyOf_i2) |
| [item 3](#issued_anyOf_i1_anyOf_i3) |

#### <a name="issued_anyOf_i1_anyOf_i0"></a>Property `DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>Property `DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>Property `DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>Property `DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="language"></a>[Optional] Property `DCAT-US 3 Catalog > language`

**Title:** language

**Requirement:** Optional

Language codes used for catalog metadata text (such as titles and descriptions), using ISO 639-1 codes like en or es

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
[
    "en"
]
```

```json
[
    "en",
    "es"
]
```

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#language_anyOf_i0) |
| [Language code](#language_anyOf_i1)                  |
| [List of language codes](#language_anyOf_i2)         |

### <a name="language_anyOf_i0"></a>Property `DCAT-US 3 Catalog > language > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>Property `DCAT-US 3 Catalog > language > anyOf > Language code`

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>Property `DCAT-US 3 Catalog > language > anyOf > List of language codes`

**Title:** List of language codes

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#language_anyOf_i2_items) | -           |

#### <a name="language_anyOf_i2_items"></a>DCAT-US 3 Catalog > language > anyOf > List of language codes > Language code

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="license"></a>[Optional] Property `DCAT-US 3 Catalog > license`

**Title:** license

**Requirement:** Optional

License that governs how the catalog can be used or reused

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

| Any of(Option)                                      |
| --------------------------------------------------- |
| [Null allowed when not required](#license_anyOf_i0) |
| [item 1](#license_anyOf_i1)                         |

### <a name="license_anyOf_i0"></a>Property `DCAT-US 3 Catalog > license > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="license_anyOf_i1"></a>Property `DCAT-US 3 Catalog > license > anyOf > item 1`

Full text of the license

| **Type** | `string` |
| -------- | -------- |

## <a name="modified"></a>[Optional] Property `DCAT-US 3 Catalog > modified`

**Title:** update/modification date

**Requirement:** Optional

Most recent date when the catalog content changed, not just catalog-record metadata

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"2024-06-01"
```

```json
"2024-06-01T14:30:00Z"
```

```json
"2024"
```

```json
"2024-01"
```

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#modified_anyOf_i0) |
| [Date string](#modified_anyOf_i1)                    |

### <a name="modified_anyOf_i0"></a>Property `DCAT-US 3 Catalog > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>Property `DCAT-US 3 Catalog > modified > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                        |
| ------------------------------------- |
| [item 0](#modified_anyOf_i1_anyOf_i0) |
| [item 1](#modified_anyOf_i1_anyOf_i1) |
| [item 2](#modified_anyOf_i1_anyOf_i2) |
| [item 3](#modified_anyOf_i1_anyOf_i3) |

#### <a name="modified_anyOf_i1_anyOf_i0"></a>Property `DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>Property `DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>Property `DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>Property `DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="publisher"></a>[Optional] Property `DCAT-US 3 Catalog > publisher`

**Title:** publisher

**Requirement:** Optional

Person or organization responsible for publishing and making the catalog available

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                        |
| ----------------------------------------------------- |
| [Null allowed when not required](#publisher_anyOf_i0) |
| [Agent](#publisher_anyOf_i1)                          |

### <a name="publisher_anyOf_i0"></a>Property `DCAT-US 3 Catalog > publisher > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="publisher_anyOf_i1"></a>Property `DCAT-US 3 Catalog > publisher > anyOf > Agent`

**Title:** Agent

inline description of the publisher

| **Type**                  | `object`                                                               |
| ------------------------- | ---------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                       |
| **Same definition as**    | [Agent](#dataset_items_sample_items_accessService_items_creator_items) |

## <a name="rights"></a>[Optional] Property `DCAT-US 3 Catalog > rights`

**Title:** rights

**Requirement:** Optional

Rights statements about the catalog that are not already covered by license or accessRights, such as copyright or policy restrictions

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Examples:**

```json
[
    "This catalog is maintained by the National Climate Data Center."
]
```

```json
[
    "This catalog is maintained by the Federal Data Management Office.",
    "Data within this catalog may be subject to individual dataset licensing terms."
]
```

| Each item of this array must be | Description                        |
| ------------------------------- | ---------------------------------- |
| [rights items](#rights_items)   | Full text of a statement of rights |

### <a name="rights_items"></a>DCAT-US 3 Catalog > rights > rights items

Full text of a statement of rights

| **Type** | `string` |
| -------- | -------- |

## <a name="rightsHolder"></a>[Optional] Property `DCAT-US 3 Catalog > rightsHolder`

**Title:** rights holder

**Requirement:** Optional

Organizations that hold rights in the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](#rightsHolder_items) | An organization involved with a resource, including parent or child organizations |

### <a name="rightsHolder_items"></a>DCAT-US 3 Catalog > rightsHolder > Organization

**Title:** Organization

An organization involved with a resource, including parent or child organizations

| **Type**                  | `object`                                                                       |
| ------------------------- | ------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                               |
| **Same definition as**    | [Organization](#dataset_items_otherIdentifier_items_anyOf_i1_creator_anyOf_i1) |

## <a name="spatial"></a>[Optional] Property `DCAT-US 3 Catalog > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Optional

Geographic area covered by the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                      |
| ------------------------------- | -------------------------------- |
| [Location](#spatial_items)      | A named place or geographic area |

### <a name="spatial_items"></a>DCAT-US 3 Catalog > spatial > Location

**Title:** Location

A named place or geographic area

| **Type**                  | `object`                                                                  |
| ------------------------- | ------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                          |
| **Same definition as**    | [Location](#dataset_items_sample_items_accessService_items_spatial_items) |

## <a name="subject"></a>[Optional] Property `DCAT-US 3 Catalog > subject`

**Title:** subject

**Requirement:** Optional

List of subjects of the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#subject_items)       | A controlled term or label, optionally drawn from a concept scheme |

### <a name="subject_items"></a>DCAT-US 3 Catalog > subject > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                                      |
| ------------------------- | ----------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                        |
| **Same definition as**    | [Concept](#dataset_items_sample_items_representationTechnique_anyOf_i1) |

## <a name="temporal"></a>[Optional] Property `DCAT-US 3 Catalog > temporal`

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| [PeriodOfTime](#temporal_items) | Information about a specific time period with a start- and/or end-time |

### <a name="temporal_items"></a>DCAT-US 3 Catalog > temporal > PeriodOfTime

**Title:** PeriodOfTime

Information about a specific time period with a start- and/or end-time

| **Type**                  | More than one type                                                             |
| ------------------------- | ------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                               |
| **Same definition as**    | [PeriodOfTime](#dataset_items_sample_items_accessService_items_temporal_items) |

## <a name="title"></a>[Optional] Property `DCAT-US 3 Catalog > title`

**Title:** title

**Requirement:** Optional

Human-readable title of the catalog

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"National Climate Data Catalog"
```

```json
"Federal Data Catalog"
```

## <a name="category"></a>[Optional] Property `DCAT-US 3 Catalog > category`

**Title:** category

**Requirement:** Optional

List of high-level categories for the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#category_items)      | A controlled term or label, optionally drawn from a concept scheme |

### <a name="category_items"></a>DCAT-US 3 Catalog > category > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                                      |
| ------------------------- | ----------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                        |
| **Same definition as**    | [Concept](#dataset_items_sample_items_representationTechnique_anyOf_i1) |

## <a name="homepage"></a>[Optional] Property `DCAT-US 3 Catalog > homepage`

**Title:** homepage

**Requirement:** Optional

Main public web page for the catalog, usually an HTML page

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#homepage_anyOf_i0) |
| [Document](#homepage_anyOf_i1)                       |

### <a name="homepage_anyOf_i0"></a>Property `DCAT-US 3 Catalog > homepage > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="homepage_anyOf_i1"></a>Property `DCAT-US 3 Catalog > homepage > anyOf > Document`

**Title:** Document

inline description of the home page

| **Type**                  | `object`                                           |
| ------------------------- | -------------------------------------------------- |
| **Additional properties** | Any type allowed                                   |
| **Same definition as**    | [Document](#dataset_items_sample_items_page_items) |

## <a name="qualifiedAttribution"></a>[Optional] Property `DCAT-US 3 Catalog > qualifiedAttribution`

**Title:** qualified attribution

**Requirement:** Optional

List of agents with specific responsibilities for the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be            | Description                                       |
| ------------------------------------------ | ------------------------------------------------- |
| [Attribution](#qualifiedAttribution_items) | A responsibility that an agent has for a resource |

### <a name="qualifiedAttribution_items"></a>DCAT-US 3 Catalog > qualifiedAttribution > Attribution

**Title:** Attribution

A responsibility that an agent has for a resource

| **Type**                  | `object`                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                          |
| **Same definition as**    | [Attribution](#dataset_items_sample_items_accessService_items_qualifiedAttribution_items) |
