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

- **Type**: `object`
- **Additional properties**: Any type allowed

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
    "datasetSeries": [
        {
            "@id": "https://example.gov/series/annual-climate-observations",
            "@type": "DatasetSeries",
            "title": "Annual Climate Observations",
            "description": "A series of annual climate observation datasets from monitoring stations.",
            "publisher": {
                "name": "National Climate Data Center"
            },
            "seriesMember": [
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
            ]
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

| Property                                       | Type                                                                                        | Requirement Level | Title/Description                                                                                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [dataset](#dataset)                           | array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                               | Mandatory         | List of datasets included in the catalog. Use this together with service so the catalog is not empty.                                 |
| [conformsTo](#conformsTo)                     | null or [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard)                                        | Recommended       | Standard, schema, profile, or model that this catalog follows                                                                         |
| [homepage](#homepage)                         | null or [Document](/standards/catalog/dcat-us-3/quality-governance/#document)                                        | Recommended       | Main public web page for the catalog, usually an HTML page                                                                            |
| [issued](#issued)                             | null or object                                                                              | Recommended       | Date when the catalog was formally issued, such as its initial publication date                                                       |
| [language](#language)                         | More than one type                                                                          | Recommended       | Language codes used for catalog metadata text (such as titles and descriptions), using ISO 639-1 codes like en or es                  |
| [modified](#modified)                         | null or object                                                                              | Recommended       | Most recent date when the catalog content changed, not just catalog-record metadata                                                   |
| [rights](#rights)                             | null or array of string                                                                     | Recommended       | Rights statements about the catalog that are not already covered by license or accessRights, such as copyright or policy restrictions |
| [spatial](#spatial)                           | null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes                 | Recommended       | Geographic area covered by the catalog                                                                                                |
| [themeTaxonomy](#themeTaxonomy)               | null or array of [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme) classes | Recommended       | Controlled vocabulary or taxonomy used to classify catalog resources, such as datasets and services                                   |
| [@id](#@id)                                   | string                                                                                      | Optional          |                                                                                                                                       |
| [@type](#@type)                               | string                                                                                      | Optional          |                                                                                                                                       |
| [accessRights](#accessRights)                 | null or string                                                                              | Optional          | Information about whether the catalog is publicly accessible, restricted, or not public                                               |
| [catalog](#catalog)                           | null or array of object                                                                     | Optional          | List of related catalogs that are useful in the context of this catalog                                                               |
| [category](#category)                         | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes              | Optional          | List of high-level categories for the catalog                                                                                         |
| [contactPoint](#contactPoint)                 | null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes                                           | Optional          | Contact information people can use to ask questions or send feedback about the catalog                                                |
| [creator](#creator)                           | null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes                                         | Optional          | Person or organization responsible for creating the catalog metadata                                                                  |
| [datasetSeries](#datasetSeries)               | null or array of [DatasetSeries](/standards/catalog/dcat-us-3/dataset-series/#root) classes                          | Optional          | List of dataset series included in the catalog.                                                                                       |
| [description](#description)                   | null or string                                                                              | Optional          | Plain-language summary of the catalog                                                                                                 |
| [hasPart](#hasPart)                           | null or array of object                                                                     | Optional          | List of catalogs that are contained within this catalog                                                                               |
| [identifier](#identifier)                     | null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)                         | Optional          | Main unique identifier for the catalog, such as a URI or another persistent identifier                                                |
| [keyword](#keyword)                           | null or array of string                                                                     | Optional          | List of keywords or tags describing the catalog                                                                                       |
| [license](#license)                           | null or string                                                                              | Optional          | License that governs how the catalog can be used or reused                                                                            |
| [otherIdentifier](#otherIdentifier)           | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes        | Optional          | A list of identifiers for the Catalog besides the main identifier, e.g. the URI or other unique identifiers                           |
| [publisher](#publisher)                       | null or [Agent](/standards/catalog/dcat-us-3/agents/#agent)                                                          | Optional          | Person or organization responsible for publishing and making the catalog available                                                    |
| [qualifiedAttribution](#qualifiedAttribution) | null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes                 | Optional          | List of agents with specific responsibilities for the catalog                                                                         |
| [record](#record)                             | null or array of [CatalogRecord](/standards/catalog/dcat-us-3/quality-governance/#catalog-record) classes            | Optional          | A catalog record describing how a single resource (such as a dataset or data service) is registered in the catalog                    |
| [rightsHolder](#rightsHolder)                 | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                           | Optional          | Organizations that hold rights in the catalog                                                                                         |
| [service](#service)                           | null or array of [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) classes                | Optional          | List of data services included in the catalog. Use this together with dataset so the catalog is not empty.                            |
| [subject](#subject)                           | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes              | Optional          | List of subjects of the catalog                                                                                                       |
| [temporal](#temporal)                         | null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes       | Optional          | Time periods covered by the catalog                                                                                                   |
| [theme](#theme)                               | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes              | Optional          | List of themes or categories for the catalog. A catalog can have more than one theme.                                                 |
| [title](#title)                               | null or string                                                                              | Optional          | Human-readable title of the catalog                                                                                                   |

## <a name="dataset"></a>`DCAT-US 3 Catalog > dataset` [#](#dataset)

**Requirement:** Mandatory

List of datasets included in the catalog. Use this together with service so the catalog is not empty.

- **Type**: array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes
- **Required**: Yes

**Each item of this array must be:**
- [Dataset](/standards/catalog/dcat-us-3/dataset/#root): A collection of data published or curated by one provider

## <a name="conformsTo"></a>`DCAT-US 3 Catalog > conformsTo` [#](#conformsTo)

**Title:** schema version

**Requirement:** Recommended

Standard, schema, profile, or model that this catalog follows

- **Type**: null or [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard)

## <a name="homepage"></a>`DCAT-US 3 Catalog > homepage` [#](#homepage)

**Requirement:** Recommended

Main public web page for the catalog, usually an HTML page

- **Type**: null or [Document](/standards/catalog/dcat-us-3/quality-governance/#document)

## <a name="issued"></a>`DCAT-US 3 Catalog > issued` [#](#issued)

**Title:** release date

**Requirement:** Recommended

Date when the catalog was formally issued, such as its initial publication date

- **Type**: null or object

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

## <a name="language"></a>`DCAT-US 3 Catalog > language` [#](#language)

**Requirement:** Recommended

Language codes used for catalog metadata text (such as titles and descriptions), using ISO 639-1 codes like en or es

- **Type**: `combining`
- **Additional properties**: Any type allowed

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

**Any of:**
- [Null allowed when not required](#language_anyOf_i0)
- [Language code](#language_anyOf_i1)
- [List of language codes](#language_anyOf_i2)

### <a name="language_anyOf_i0"></a>`DCAT-US 3 Catalog > language > anyOf > Null allowed when not required` [#](#language_anyOf_i0)

- **Type**: `null`

### <a name="language_anyOf_i1"></a>`DCAT-US 3 Catalog > language > anyOf > Language code` [#](#language_anyOf_i1)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

### <a name="language_anyOf_i2"></a>`DCAT-US 3 Catalog > language > anyOf > List of language codes` [#](#language_anyOf_i2)

- **Type**: array of string

**Each item of this array must be:**
- [Language code](#language_anyOf_i2_items): -

#### <a name="language_anyOf_i2_items"></a>Language code [#](#language_anyOf_i2_items)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

## <a name="modified"></a>`DCAT-US 3 Catalog > modified` [#](#modified)

**Title:** update/modification date

**Requirement:** Recommended

Most recent date when the catalog content changed, not just catalog-record metadata

- **Type**: null or object

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

## <a name="rights"></a>`DCAT-US 3 Catalog > rights` [#](#rights)

**Requirement:** Recommended

Rights statements about the catalog that are not already covered by license or accessRights, such as copyright or policy restrictions

- **Type**: null or array of string

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

**Each item of this array must be:**
- [rights items](#rights_items): Full text of a statement of rights

### <a name="rights_items"></a>Array Item [#](#rights_items)

Full text of a statement of rights

- **Type**: `string`

## <a name="spatial"></a>`DCAT-US 3 Catalog > spatial` [#](#spatial)

**Title:** spatial/geographic coverage

**Requirement:** Recommended

Geographic area covered by the catalog

- **Type**: null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes

**Each item of this array must be:**
- [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location): A named place or geographic area

## <a name="themeTaxonomy"></a>`DCAT-US 3 Catalog > themeTaxonomy` [#](#themeTaxonomy)

**Title:** themes

**Requirement:** Recommended

Controlled vocabulary or taxonomy used to classify catalog resources, such as datasets and services

- **Type**: null or array of [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme) classes

**Each item of this array must be:**
- [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme): A controlled vocabulary or other list of approved terms for a concept

## <a name="@id"></a>`DCAT-US 3 Catalog > @id` [#](#@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/catalogs/federal-data-catalog"
```

## <a name="@type"></a>`DCAT-US 3 Catalog > @type` [#](#@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Catalog"`

## <a name="accessRights"></a>`DCAT-US 3 Catalog > accessRights` [#](#accessRights)

**Requirement:** Optional

Information about whether the catalog is publicly accessible, restricted, or not public

- **Type**: null or string

**Example:**

```json
"Public access with no restrictions"
```

## <a name="catalog"></a>`DCAT-US 3 Catalog > catalog` [#](#catalog)

**Title:** Related catalogs

**Requirement:** Optional

List of related catalogs that are useful in the context of this catalog

- **Type**: null or array of object

**Each item of this array must be:**
- [DCAT-US 3 Catalog](#root): A curated collection of metadata about datasets, data services, or other resources

## <a name="category"></a>`DCAT-US 3 Catalog > category` [#](#category)

**Requirement:** Optional

List of high-level categories for the catalog

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="contactPoint"></a>`DCAT-US 3 Catalog > contactPoint` [#](#contactPoint)

**Title:** Contact points

**Requirement:** Optional

Contact information people can use to ask questions or send feedback about the catalog

- **Type**: null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes

**Each item of this array must be:**
- [Kind](/standards/catalog/dcat-us-3/agents/#kind): Contact information for an individual or entity

## <a name="creator"></a>`DCAT-US 3 Catalog > creator` [#](#creator)

**Requirement:** Optional

Person or organization responsible for creating the catalog metadata

- **Type**: null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes

**Each item of this array must be:**
- [Agent](/standards/catalog/dcat-us-3/agents/#agent): A person, organization, software agent, or other entity involved with a resource

## <a name="datasetSeries"></a>`DCAT-US 3 Catalog > datasetSeries` [#](#datasetSeries)

**Requirement:** Optional

List of dataset series included in the catalog.

- **Type**: null or array of [DatasetSeries](/standards/catalog/dcat-us-3/dataset-series/#root) classes

**Each item of this array must be:**
- [DatasetSeries](/standards/catalog/dcat-us-3/dataset-series/#root): A group of related datasets that are published separately

## <a name="description"></a>`DCAT-US 3 Catalog > description` [#](#description)

**Requirement:** Optional

Plain-language summary of the catalog

- **Type**: `null or string`

**Examples:**

```json
"A comprehensive catalog of climate and weather datasets from federal monitoring stations across the United States."
```

```json
"A comprehensive catalog of federal government data assets spanning multiple agencies and data domains."
```

## <a name="hasPart"></a>`DCAT-US 3 Catalog > hasPart` [#](#hasPart)

**Requirement:** Optional

List of catalogs that are contained within this catalog

- **Type**: null or array of object

**Each item of this array must be:**
- [DCAT-US 3 Catalog](#root): A curated collection of metadata about datasets, data services, or other resources

## <a name="identifier"></a>`DCAT-US 3 Catalog > identifier` [#](#identifier)

**Requirement:** Optional

Main unique identifier for the catalog, such as a URI or another persistent identifier

- **Type**: null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)

## <a name="keyword"></a>`DCAT-US 3 Catalog > keyword` [#](#keyword)

**Title:** keyword/tag

**Requirement:** Optional

List of keywords or tags describing the catalog

- **Type**: null or array of string

**Example:**

```json
[
    "federal data",
    "government",
    "open data",
    "public records"
]
```

**Each item of this array must be:**
- [keyword items](#keyword_items): -

### <a name="keyword_items"></a>Array Item [#](#keyword_items)

- **Type**: `string`

**Restrictions:**
- **Min length**: 1

## <a name="license"></a>`DCAT-US 3 Catalog > license` [#](#license)

**Requirement:** Optional

License that governs how the catalog can be used or reused

- **Type**: null or string

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

## <a name="otherIdentifier"></a>`DCAT-US 3 Catalog > otherIdentifier` [#](#otherIdentifier)

**Requirement:** Optional

A list of identifiers for the Catalog besides the main identifier, e.g. the URI or other unique identifiers

- **Type**: null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes

**Each item of this array must be:**
- [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier): A unique identifier and optionally it's scheme and other relevant information

## <a name="publisher"></a>`DCAT-US 3 Catalog > publisher` [#](#publisher)

**Requirement:** Optional

Person or organization responsible for publishing and making the catalog available

- **Type**: null or [Agent](/standards/catalog/dcat-us-3/agents/#agent)

## <a name="qualifiedAttribution"></a>`DCAT-US 3 Catalog > qualifiedAttribution` [#](#qualifiedAttribution)

**Requirement:** Optional

List of agents with specific responsibilities for the catalog

- **Type**: null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes

**Each item of this array must be:**
- [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution): A responsibility that an agent has for a resource

## <a name="record"></a>`DCAT-US 3 Catalog > record` [#](#record)

**Title:** catalog record

**Requirement:** Optional

A catalog record describing how a single resource (such as a dataset or data service) is registered in the catalog

- **Type**: null or array of [CatalogRecord](/standards/catalog/dcat-us-3/quality-governance/#catalog-record) classes

**Each item of this array must be:**
- [CatalogRecord](/standards/catalog/dcat-us-3/quality-governance/#catalog-record): A record in a catalog, describing the registration of a single resource

## <a name="rightsHolder"></a>`DCAT-US 3 Catalog > rightsHolder` [#](#rightsHolder)

**Requirement:** Optional

Organizations that hold rights in the catalog

- **Type**: null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes

**Each item of this array must be:**
- [Organization](/standards/catalog/dcat-us-3/agents/#organization): An organization involved with a resource, including parent or child organizations

## <a name="service"></a>`DCAT-US 3 Catalog > service` [#](#service)

**Requirement:** Optional

List of data services included in the catalog. Use this together with dataset so the catalog is not empty.

- **Type**: null or array of [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) classes

**Each item of this array must be:**
- [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service): A service that provides access to data or data processing functions

## <a name="subject"></a>`DCAT-US 3 Catalog > subject` [#](#subject)

**Requirement:** Optional

List of subjects of the catalog

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="temporal"></a>`DCAT-US 3 Catalog > temporal` [#](#temporal)

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the catalog

- **Type**: null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes

**Each item of this array must be:**
- [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time): Information about a specific time period with a start- and/or end-time

## <a name="theme"></a>`DCAT-US 3 Catalog > theme` [#](#theme)

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the catalog. A catalog can have more than one theme.

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="title"></a>`DCAT-US 3 Catalog > title` [#](#title)

**Requirement:** Optional

Human-readable title of the catalog

- **Type**: `null or string`

**Examples:**

```json
"National Climate Data Catalog"
```

```json
"Federal Data Catalog"
```
