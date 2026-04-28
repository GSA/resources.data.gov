---
title: "DCAT-US 3.0: Catalog"
layout: "page"
permalink: "/standards/catalog/dcat-us-3/catalog/"
primary_nav_section: "Data Standards"
category_name: "Data standards"
---
<a name="root"></a>

The catalog of datasets, services, and other information describing data assets.

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

| Property                                       | Type                    | Requirement Level | Title/Description                                                                                                                     |
| ---------------------------------------------- | ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#@id)                                   | string                  | Optional          |                                                                                                                                       |
| [@type](#@type)                               | string                  | Optional          |                                                                                                                                       |
| [catalog](#catalog)                           | null or array           | Optional          | List of related catalogs that are useful in the context of this catalog                                                               |
| [contactPoint](#contactPoint)                 | null or array           | Optional          | Contact information people can use to ask questions or send feedback about the catalog                                                |
| [dataset](#dataset)                           | array                   | Mandatory         | List of datasets included in the catalog. Use this together with service so the catalog is not empty.                                 |
| [keyword](#keyword)                           | null or array of string | Optional          | List of keywords or tags describing the catalog                                                                                       |
| [record](#record)                             | null or array           | Optional          | A catalog record describing how a single resource (such as a dataset or data service) is registered in the catalog                    |
| [service](#service)                           | null or array           | Optional          | List of data services included in the catalog. Use this together with dataset so the catalog is not empty.                            |
| [theme](#theme)                               | null or array           | Optional          | List of themes or categories for the catalog. A catalog can have more than one theme.                                                 |
| [themeTaxonomy](#themeTaxonomy)               | null or array           | Recommended       | Controlled vocabulary or taxonomy used to classify catalog resources, such as datasets and services                                   |
| [accessRights](#accessRights)                 | More than one type      | Optional          | Information about whether the catalog is publicly accessible, restricted, or not public                                               |
| [conformsTo](#conformsTo)                     | More than one type      | Recommended       | Standard, schema, profile, or model that this catalog follows                                                                         |
| [creator](#creator)                           | null or array           | Optional          | Person or organization responsible for creating the catalog metadata                                                                  |
| [description](#description)                   | null or string          | Optional          | Plain-language summary of the catalog                                                                                                 |
| [hasPart](#hasPart)                           | null or array           | Optional          | List of catalogs that are contained within this catalog                                                                               |
| [identifier](#identifier)                     | More than one type      | Optional          | Main unique identifier for the catalog, such as a URI or another persistent identifier                                                |
| [otherIdentifier](#otherIdentifier)           | null or array           | Optional          | A list of identifiers for the Catalog besides the main identifier, e.g. the URI or other unique identifiers                           |
| [issued](#issued)                             | More than one type      | Recommended       | Date when the catalog was formally issued, such as its initial publication date                                                       |
| [language](#language)                         | More than one type      | Recommended       | Language codes used for catalog metadata text (such as titles and descriptions), using ISO 639-1 codes like en or es                  |
| [license](#license)                           | More than one type      | Optional          | License that governs how the catalog can be used or reused                                                                            |
| [modified](#modified)                         | More than one type      | Recommended       | Most recent date when the catalog content changed, not just catalog-record metadata                                                   |
| [publisher](#publisher)                       | More than one type      | Optional          | Person or organization responsible for publishing and making the catalog available                                                    |
| [rights](#rights)                             | null or array of string | Recommended       | Rights statements about the catalog that are not already covered by license or accessRights, such as copyright or policy restrictions |
| [rightsHolder](#rightsHolder)                 | null or array           | Optional          | Organizations that hold rights in the catalog                                                                                         |
| [spatial](#spatial)                           | null or array           | Recommended       | Geographic area covered by the catalog                                                                                                |
| [subject](#subject)                           | null or array           | Optional          | List of subjects of the catalog                                                                                                       |
| [temporal](#temporal)                         | null or array           | Optional          | Time periods covered by the catalog                                                                                                   |
| [title](#title)                               | null or string          | Optional          | Human-readable title of the catalog                                                                                                   |
| [category](#category)                         | null or array           | Optional          | List of high-level categories for the catalog                                                                                         |
| [homepage](#homepage)                         | More than one type      | Recommended       | Main public web page for the catalog, usually an HTML page                                                                            |
| [qualifiedAttribution](#qualifiedAttribution) | null or array           | Optional          | List of agents with specific responsibilities for the catalog                                                                         |

## <a name="@id"></a>`DCAT-US 3 Catalog > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/catalogs/federal-data-catalog"
```

## <a name="@type"></a>`DCAT-US 3 Catalog > @type`

**Requirement:** Optional

| **Type**    | `string`    |
| ----------- | ----------- |
| **Default** | `"Catalog"` |

## <a name="catalog"></a>`DCAT-US 3 Catalog > catalog`

**Title:** Related catalogs

**Requirement:** Optional

List of related catalogs that are useful in the context of this catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| [DCAT-US 3 Catalog](#catalog_items) | A curated collection of metadata about datasets, data services, or other resources |

## <a name="contactPoint"></a>`DCAT-US 3 Catalog > contactPoint`

**Title:** Contact points

**Requirement:** Optional

Contact information people can use to ask questions or send feedback about the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](/standards/catalog/dcat-us-3/agents/#kind)        | Contact information for an individual or entity |

## <a name="dataset"></a>`DCAT-US 3 Catalog > dataset`

**Requirement:** Mandatory

List of datasets included in the catalog. Use this together with service so the catalog is not empty.

| **Type**     | `array` |
| ------------ | ------- |
| **Required** | Yes     |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](/standards/catalog/dcat-us-3/dataset/#root)    | A collection of data published or curated by one provider |

## <a name="keyword"></a>`DCAT-US 3 Catalog > keyword`

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

### <a name="keyword_items"></a>Array Item

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="record"></a>`DCAT-US 3 Catalog > record`

**Title:** catalog record

**Requirement:** Optional

A catalog record describing how a single resource (such as a dataset or data service) is registered in the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                         | Description                                                             |
| ------------------------------------------------------- | ----------------------------------------------------------------------- |
| [CatalogRecord](/standards/catalog/dcat-us-3/quality-governance/#catalog-record) | A record in a catalog, describing the registration of a single resource |

## <a name="service"></a>`DCAT-US 3 Catalog > service`

**Requirement:** Optional

List of data services included in the catalog. Use this together with dataset so the catalog is not empty.

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                     | Description                                                         |
| --------------------------------------------------- | ------------------------------------------------------------------- |
| [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) | A service that provides access to data or data processing functions |

## <a name="theme"></a>`DCAT-US 3 Catalog > theme`

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the catalog. A catalog can have more than one theme.

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="themeTaxonomy"></a>`DCAT-US 3 Catalog > themeTaxonomy`

**Title:** themes

**Requirement:** Recommended

Controlled vocabulary or taxonomy used to classify catalog resources, such as datasets and services

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                                    | Description                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme) | A controlled vocabulary or other list of approved terms for a concept |

## <a name="accessRights"></a>`DCAT-US 3 Catalog > accessRights`

**Requirement:** Optional

Information about whether the catalog is publicly accessible, restricted, or not public

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"Public access with no restrictions"
```

| Any of                                                   |
| -------------------------------------------------------- |
| [Null allowed when not required](#accessRights_anyOf_i0) |
| [item 1](#accessRights_anyOf_i1)                         |

### <a name="accessRights_anyOf_i0"></a>`DCAT-US 3 Catalog > accessRights > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="accessRights_anyOf_i1"></a>`DCAT-US 3 Catalog > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="conformsTo"></a>`DCAT-US 3 Catalog > conformsTo`

**Title:** schema version

**Requirement:** Recommended

Standard, schema, profile, or model that this catalog follows

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                 |
| ------------------------------------------------------ |
| [Null allowed when not required](#conformsTo_anyOf_i0) |
| [Standard](#conformsTo_anyOf_i1)                       |

### <a name="conformsTo_anyOf_i0"></a>`DCAT-US 3 Catalog > conformsTo > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="conformsTo_anyOf_i1"></a>`DCAT-US 3 Catalog > conformsTo > anyOf > Standard`

A standard or specification that another resource conforms to

| **Type**                  | `object`                                     |
| ------------------------- | -------------------------------------------- |
| **Additional properties** | Any type allowed                             |
| **Same definition as**    | [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) |

## <a name="creator"></a>`DCAT-US 3 Catalog > creator`

**Requirement:** Optional

Person or organization responsible for creating the catalog metadata

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](/standards/catalog/dcat-us-3/agents/#agent)      | A person, organization, software agent, or other entity involved with a resource |

## <a name="description"></a>`DCAT-US 3 Catalog > description`

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

## <a name="hasPart"></a>`DCAT-US 3 Catalog > hasPart`

**Requirement:** Optional

List of catalogs that are contained within this catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| [DCAT-US 3 Catalog](#hasPart_items) | A curated collection of metadata about datasets, data services, or other resources |

## <a name="identifier"></a>`DCAT-US 3 Catalog > identifier`

**Requirement:** Optional

Main unique identifier for the catalog, such as a URI or another persistent identifier

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                 |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>`DCAT-US 3 Catalog > identifier > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>`DCAT-US 3 Catalog > identifier > anyOf > Identifier`

inline description of Identifier

| **Type**                  | More than one type                                          |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Same definition as**    | [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) |

## <a name="otherIdentifier"></a>`DCAT-US 3 Catalog > otherIdentifier`

**Requirement:** Optional

A list of identifiers for the Catalog besides the main identifier, e.g. the URI or other unique identifiers

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="issued"></a>`DCAT-US 3 Catalog > issued`

**Title:** release date

**Requirement:** Recommended

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

| Any of                                             |
| -------------------------------------------------- |
| [Null allowed when not required](#issued_anyOf_i0) |
| [Date string](#issued_anyOf_i1)                    |

### <a name="issued_anyOf_i0"></a>`DCAT-US 3 Catalog > issued > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>`DCAT-US 3 Catalog > issued > anyOf > Date string`

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                              |
| ----------------------------------- |
| [item 0](#issued_anyOf_i1_anyOf_i0) |
| [item 1](#issued_anyOf_i1_anyOf_i1) |
| [item 2](#issued_anyOf_i1_anyOf_i2) |
| [item 3](#issued_anyOf_i1_anyOf_i3) |

#### <a name="issued_anyOf_i1_anyOf_i0"></a>`DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>`DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>`DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>`DCAT-US 3 Catalog > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="language"></a>`DCAT-US 3 Catalog > language`

**Requirement:** Recommended

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

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#language_anyOf_i0) |
| [Language code](#language_anyOf_i1)                  |
| [List of language codes](#language_anyOf_i2)         |

### <a name="language_anyOf_i0"></a>`DCAT-US 3 Catalog > language > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>`DCAT-US 3 Catalog > language > anyOf > Language code`

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>`DCAT-US 3 Catalog > language > anyOf > List of language codes`

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#language_anyOf_i2_items) | -           |

#### <a name="language_anyOf_i2_items"></a>Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="license"></a>`DCAT-US 3 Catalog > license`

**Requirement:** Optional

License that governs how the catalog can be used or reused

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

| Any of                                              |
| --------------------------------------------------- |
| [Null allowed when not required](#license_anyOf_i0) |
| [item 1](#license_anyOf_i1)                         |

### <a name="license_anyOf_i0"></a>`DCAT-US 3 Catalog > license > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="license_anyOf_i1"></a>`DCAT-US 3 Catalog > license > anyOf > item 1`

Full text of the license

| **Type** | `string` |
| -------- | -------- |

## <a name="modified"></a>`DCAT-US 3 Catalog > modified`

**Title:** update/modification date

**Requirement:** Recommended

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

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#modified_anyOf_i0) |
| [Date string](#modified_anyOf_i1)                    |

### <a name="modified_anyOf_i0"></a>`DCAT-US 3 Catalog > modified > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>`DCAT-US 3 Catalog > modified > anyOf > Date string`

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                |
| ------------------------------------- |
| [item 0](#modified_anyOf_i1_anyOf_i0) |
| [item 1](#modified_anyOf_i1_anyOf_i1) |
| [item 2](#modified_anyOf_i1_anyOf_i2) |
| [item 3](#modified_anyOf_i1_anyOf_i3) |

#### <a name="modified_anyOf_i1_anyOf_i0"></a>`DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>`DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>`DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>`DCAT-US 3 Catalog > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="publisher"></a>`DCAT-US 3 Catalog > publisher`

**Requirement:** Optional

Person or organization responsible for publishing and making the catalog available

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                |
| ----------------------------------------------------- |
| [Null allowed when not required](#publisher_anyOf_i0) |
| [Agent](#publisher_anyOf_i1)                          |

### <a name="publisher_anyOf_i0"></a>`DCAT-US 3 Catalog > publisher > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="publisher_anyOf_i1"></a>`DCAT-US 3 Catalog > publisher > anyOf > Agent`

inline description of the publisher

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Additional properties** | Any type allowed           |
| **Same definition as**    | [Agent](/standards/catalog/dcat-us-3/agents/#agent) |

## <a name="rights"></a>`DCAT-US 3 Catalog > rights`

**Requirement:** Recommended

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

### <a name="rights_items"></a>Array Item

Full text of a statement of rights

| **Type** | `string` |
| -------- | -------- |

## <a name="rightsHolder"></a>`DCAT-US 3 Catalog > rightsHolder`

**Requirement:** Optional

Organizations that hold rights in the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](/standards/catalog/dcat-us-3/agents/#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="spatial"></a>`DCAT-US 3 Catalog > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Recommended

Geographic area covered by the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                      |
| -------------------------------------------------- | -------------------------------- |
| [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) | A named place or geographic area |

## <a name="subject"></a>`DCAT-US 3 Catalog > subject`

**Requirement:** Optional

List of subjects of the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="temporal"></a>`DCAT-US 3 Catalog > temporal`

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                              | Description                                                            |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) | Information about a specific time period with a start- and/or end-time |

## <a name="title"></a>`DCAT-US 3 Catalog > title`

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

## <a name="category"></a>`DCAT-US 3 Catalog > category`

**Requirement:** Optional

List of high-level categories for the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="homepage"></a>`DCAT-US 3 Catalog > homepage`

**Requirement:** Recommended

Main public web page for the catalog, usually an HTML page

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#homepage_anyOf_i0) |
| [Document](#homepage_anyOf_i1)                       |

### <a name="homepage_anyOf_i0"></a>`DCAT-US 3 Catalog > homepage > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="homepage_anyOf_i1"></a>`DCAT-US 3 Catalog > homepage > anyOf > Document`

inline description of the home page

| **Type**                  | `object`                                     |
| ------------------------- | -------------------------------------------- |
| **Additional properties** | Any type allowed                             |
| **Same definition as**    | [Document](/standards/catalog/dcat-us-3/quality-governance/#document) |

## <a name="qualifiedAttribution"></a>`DCAT-US 3 Catalog > qualifiedAttribution`

**Requirement:** Optional

List of agents with specific responsibilities for the catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                       |
| -------------------------------------------------- | ------------------------------------------------- |
| [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) | A responsibility that an agent has for a resource |
