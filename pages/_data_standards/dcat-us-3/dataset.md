---
title: "DCAT-US 3.0: Dataset"
layout: "page"
permalink: "/standards/catalog/dcat-us-3/dataset/"
primary_nav_section: "Data Standards"
category_name: "Data standards"
---
<a name="root"></a>

Information about a dataset, including identifiers, contacts, coverage, distributions, and related resources.

A collection of data published or curated by one provider

- **Type**: `object`
- **Additional properties**: Any type allowed

**Example:**

```json
{
    "@type": "Dataset",
    "title": "Daily Climate Observations 2024",
    "description": "Daily temperature, precipitation, and wind measurements from monitoring stations across the United States.",
    "identifier": "https://example.gov/datasets/climate-observations-2024",
    "contactPoint": {
        "fn": "Climate Data Support",
        "hasEmail": "mailto:climate@example.gov"
    },
    "publisher": {
        "name": "National Climate Data Center"
    },
    "keyword": [
        "climate",
        "weather",
        "temperature",
        "precipitation"
    ],
    "issued": "2024-01-15",
    "modified": "2024-06-01",
    "accrualPeriodicity": "daily",
    "accessRights": "public",
    "landingPage": {
        "@id": "https://example.gov/climate-data",
        "@type": "Document",
        "title": "Climate Data Landing Page"
    },
    "describedBy": {
        "@id": "https://example.gov/climate-data/data-dictionary",
        "@type": "Distribution",
        "title": "Data Dictionary",
        "mediaType": "application/pdf"
    },
    "spatial": {
        "@type": "Location",
        "bbox": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        -125.0,
                        24.0
                    ],
                    [
                        -66.0,
                        24.0
                    ],
                    [
                        -66.0,
                        50.0
                    ],
                    [
                        -125.0,
                        50.0
                    ],
                    [
                        -125.0,
                        24.0
                    ]
                ]
            ]
        }
    },
    "theme": [
        "Climate Science"
    ],
    "distribution": [
        {
            "title": "Climate Data CSV",
            "downloadURL": "https://example.gov/downloads/climate-2024.csv",
            "mediaType": "text/csv"
        }
    ],
    "rights": [
        "Data is provided as-is without warranty. Please cite the National Climate Data Center when using this data."
    ],
    "temporal": [
        {
            "@type": "PeriodOfTime",
            "startDate": "2024-01-01",
            "endDate": "2024-12-31"
        }
    ]
}
```

| Property                                                 | Type                                                                                               | Requirement Level | Title/Description                                                                                                                                                                                                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contactPoint](#contactPoint)                           | More than one type                                                                                 | Mandatory         | A contact point for questions about the Dataset (single contact or list). Include an email address that is continuously monitored                                                                                                                          |
| [description](#description)                             | string                                                                                             | Mandatory         | Plain-language summary of the dataset                                                                                                                                                                                                                      |
| [identifier](#identifier)                               | null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)                                | Mandatory         | The unique identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalog                                                                                                                                               |
| [title](#title)                                         | string                                                                                             | Mandatory         | Human-readable title of the dataset                                                                                                                                                                                                                        |
| [accessRestriction](#accessRestriction)                 | null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes | Recommended       | List of access restrictions related to the dataset                                                                                                                                                                                                         |
| [cuiRestriction](#cuiRestriction)                       | null or [CUIRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction)                        | Recommended       | Controlled Unclassified Information restriction related to the dataset                                                                                                                                                                                     |
| [describedBy](#describedBy)                             | null or [Distribution](/standards/catalog/dcat-us-3/distribution/#root)                                                     | Recommended       | A distribution describing the Data Dictionary for this dataset                                                                                                                                                                                             |
| [distribution](#distribution)                           | null or array of [Distribution](/standards/catalog/dcat-us-3/distribution/#root) classes                                    | Recommended       | List of available distributions for the dataset. This can be omitted when no distribution is available yet.                                                                                                                                                |
| [inventoried](#inventoried)                             | null or object                                                                                     | Recommended       | Date on which the dataset was added to the catalog. This may differ from the publication/release date.                                                                                                                                                     |
| [keyword](#keyword)                                     | null or array of string                                                                            | Recommended       | List of keywords or tags describing the dataset                                                                                                                                                                                                            |
| [landingPage](#landingPage)                             | null or [Document](/standards/catalog/dcat-us-3/quality-governance/#document)                                               | Recommended       | A web page from the original data provider that gives access to the Dataset, its Distributions, and related information                                                                                                                                    |
| [license](#license)                                     | null or string                                                                                     | Recommended       | License that governs how the dataset can be used or reused                                                                                                                                                                                                 |
| [modified](#modified)                                   | null or object                                                                                     | Recommended       | Most recent date when the dataset's actual data changed, not just metadata                                                                                                                                                                                 |
| [publisher](#publisher)                                 | null or [Organization](/standards/catalog/dcat-us-3/agents/#organization)                                                   | Recommended       | Organization responsible for publishing and making the dataset available                                                                                                                                                                                   |
| [rights](#rights)                                       | null or array of string                                                                            | Recommended       | Rights statements not already covered by license or accessRights, such as copyright or policy restrictions                                                                                                                                                 |
| [spatial](#spatial)                                     | More than one type                                                                                 | Recommended       | A geographic region or regions that are covered by the Dataset                                                                                                                                                                                             |
| [temporal](#temporal)                                   | null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes              | Recommended       | Time periods covered by the dataset                                                                                                                                                                                                                        |
| [theme](#theme)                                         | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes                     | Recommended       | List of themes or categories for the dataset                                                                                                                                                                                                               |
| [useRestriction](#useRestriction)                       | null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes       | Recommended       | List of use restrictions related to the dataset                                                                                                                                                                                                            |
| [@id](#@id)                                             | string                                                                                             | Optional          |                                                                                                                                                                                                                                                            |
| [@type](#@type)                                         | string                                                                                             | Optional          |                                                                                                                                                                                                                                                            |
| [accessRights](#accessRights)                           | null or string                                                                                     | Optional          | Information about whether the dataset is publicly accessible, restricted, or not public                                                                                                                                                                    |
| [accrualPeriodicity](#accrualPeriodicity)               | More than one type                                                                                 | Optional          | The frequency at which the Dataset is updated                                                                                                                                                                                                              |
| [category](#category)                                   | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes                     | Optional          | List of high-level categories for the dataset                                                                                                                                                                                                              |
| [conformsTo](#conformsTo)                               | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes                              | Optional          | List of standards, schemas, or profiles the dataset follows                                                                                                                                                                                                |
| [contributor](#contributor)                             | null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes                                                | Optional          | List of agents contributing to the Dataset                                                                                                                                                                                                                 |
| [created](#created)                                     | null or object                                                                                     | Optional          | The date on which the Dataset was first created                                                                                                                                                                                                            |
| [creator](#creator)                                     | null or [Agent](/standards/catalog/dcat-us-3/agents/#agent)                                                                 | Optional          | Person or organization responsible for creating the dataset                                                                                                                                                                                                |
| [first](#first)                                         | null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)                                                               | Optional          | the first item of the sequence the dataset belongs to                                                                                                                                                                                                      |
| [hasCurrentVersion](#hasCurrentVersion)                 | null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)                                                               | Optional          | reference to the current (latest) version of a dataset                                                                                                                                                                                                     |
| [hasPart](#hasPart)                                     | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                              | Optional          | List of related datasets that are part of the described dataset                                                                                                                                                                                            |
| [hasQualityMeasurement](#hasQualityMeasurement)         | null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes   | Optional          | List of quality measurements for the dataset (for example, completeness, accuracy, or timeliness) beyond spatial or temporal resolution                                                                                                                    |
| [hasVersion](#hasVersion)                               | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                              | Optional          | List of related Datasets that are a version, edition, or adaptation of the described Dataset                                                                                                                                                               |
| [image](#image)                                         | null or string                                                                                     | Optional          | Thumbnail image illustrating the dataset, especially useful for visual data such as maps, photos, or video                                                                                                                                                 |
| [isReferencedBy](#isReferencedBy)                       | null or array of string                                                                            | Optional          | List of links to related resources, such as publications, that reference, cite, or otherwise point to the Dataset                                                                                                                                          |
| [issued](#issued)                                       | null or object                                                                                     | Optional          | Date when the dataset was first published. If the exact publication date is unknown, use the date it was first referenced in the catalog.                                                                                                                  |
| [language](#language)                                   | More than one type                                                                                 | Optional          | ISO 639-1 language code values used in the dataset text or metadata, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html                                                                                                |
| [liabilityStatement](#liabilityStatement)               | null or string                                                                                     | Optional          | A liability statement about the dataset that may clarify limitations of responsibility, qualifications on the accuracy, reliability, and completeness of the data, or absence of endorsement by the data publisher or provider, among other considerations |
| [metadataDistribution](#metadataDistribution)           | null or array of [Distribution](/standards/catalog/dcat-us-3/distribution/#root) classes                                    | Optional          | Distribution of the original metadata document this dataset was derived from                                                                                                                                                                               |
| [otherIdentifier](#otherIdentifier)                     | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes               | Optional          | Additional identifiers for the dataset besides the main identifier, such as a DOI or other persistent ID                                                                                                                                                   |
| [page](#page)                                           | null or array of [Document](/standards/catalog/dcat-us-3/quality-governance/#document) classes                              | Optional          | List of pages or documents about this dataset                                                                                                                                                                                                              |
| [previousVersion](#previousVersion)                     | null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)                                                               | Optional          | reference to the previous dataset version                                                                                                                                                                                                                  |
| [provenance](#provenance)                               | null or array of string                                                                            | Optional          | List of statements about the lineage of a Dataset, including any changes in its ownership or custody since its creation that may be significant for its authenticity, integrity, or interpretation                                                         |
| [purpose](#purpose)                                     | null or string                                                                                     | Optional          | The purpose of the dataset                                                                                                                                                                                                                                 |
| [qualifiedAttribution](#qualifiedAttribution)           | null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes                        | Optional          | List of agents with specific responsibilities for the dataset                                                                                                                                                                                              |
| [qualifiedRelation](#qualifiedRelation)                 | null or array of [Relationship](/standards/catalog/dcat-us-3/identifiers-and-relationships/#relationship) classes           | Optional          | Detailed relationship between the dataset and another resource, including the role of that relationship                                                                                                                                                    |
| [relation](#relation)                                   | null or array of string                                                                            | Optional          | List of links to related resources when the relationship is not otherwise specified                                                                                                                                                                        |
| [replaces](#replaces)                                   | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                              | Optional          | List of Datasets replaced by this Dataset                                                                                                                                                                                                                  |
| [rightsHolder](#rightsHolder)                           | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                                  | Optional          | List of agents (organizations) holding rights on the Dataset                                                                                                                                                                                               |
| [sample](#sample)                                       | null or array of [Distribution](/standards/catalog/dcat-us-3/distribution/#root) classes                                    | Optional          | List of sample distributions for the dataset                                                                                                                                                                                                               |
| [scopeNote](#scopeNote)                                 | null or string                                                                                     | Optional          | usage note for the dataset                                                                                                                                                                                                                                 |
| [source](#source)                                       | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                              | Optional          | List of related Datasets from which the described Dataset is derived                                                                                                                                                                                       |
| [spatialResolutionInMeters](#spatialResolutionInMeters) | null or string                                                                                     | Optional          | Smallest spatial distance between data points, in meters, represented as a single value                                                                                                                                                                    |
| [status](#status)                                       | null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)                                      | Optional          | Lifecycle status of the dataset, such as completed, deprecated, under development, or withdrawn                                                                                                                                                            |
| [subject](#subject)                                     | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes                     | Optional          | List of primary subjects for the dataset, usually narrower than broad theme categories                                                                                                                                                                     |
| [supportedSchema](#supportedSchema)                     | null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)                                                               | Optional          | supported schema for this dataset                                                                                                                                                                                                                          |
| [temporalResolution](#temporalResolution)               | null or string                                                                                     | Optional          | Smallest time interval between data points, using xsd:duration format (for example, P1D)                                                                                                                                                                   |
| [version](#version)                                     | null or string                                                                                     | Optional          | The version indicator (name or identifier) of a resource                                                                                                                                                                                                   |
| [versionNotes](#versionNotes)                           | null or string                                                                                     | Optional          | Notes describing how this version differs from earlier versions of the dataset                                                                                                                                                                             |
| [wasAttributedTo](#wasAttributedTo)                     | null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes                                                | Optional          | List of agents attributed to this dataset                                                                                                                                                                                                                  |
| [wasGeneratedBy](#wasGeneratedBy)                       | null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes                        | Optional          | List of activities that generated, or provide the business context for the creation of the dataset                                                                                                                                                         |
| [wasUsedBy](#wasUsedBy)                                 | null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes                        | Optional          | List of activities that used the Dataset                                                                                                                                                                                                                   |

## <a name="contactPoint"></a>`Dataset > contactPoint` [#](#contactPoint)

**Requirement:** Mandatory

A contact point for questions about the Dataset (single contact or list). Include an email address that is continuously monitored

- **Type**: `combining`
- **Required**: Yes
- **Additional properties**: Any type allowed

**Any of:**
- [Kind](#contactPoint_anyOf_i0)
- [List of contacts](#contactPoint_anyOf_i1)

### <a name="contactPoint_anyOf_i0"></a>`Dataset > contactPoint > anyOf > Kind` [#](#contactPoint_anyOf_i0)

inline description of Kind

- **Type**: `object`
- **Additional properties**: Any type allowed
- **Same definition as**: [Kind](/standards/catalog/dcat-us-3/agents/#kind)

### <a name="contactPoint_anyOf_i1"></a>`Dataset > contactPoint > anyOf > List of contacts` [#](#contactPoint_anyOf_i1)

- **Type**: array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes

**Each item of this array must be:**
- [Kind](/standards/catalog/dcat-us-3/agents/#kind): Contact information for an individual or entity

## <a name="description"></a>`Dataset > description` [#](#description)

**Requirement:** Mandatory

Plain-language summary of the dataset

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"Daily temperature, precipitation, and wind measurements from monitoring stations across the United States."
```

```json
"Comprehensive daily climate observations collected from monitoring stations across the United States, including temperature, precipitation, humidity, and wind measurements."
```

## <a name="identifier"></a>`Dataset > identifier` [#](#identifier)

**Requirement:** Mandatory

The unique identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalog

- **Type**: null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)
- **Required**: Yes

## <a name="title"></a>`Dataset > title` [#](#title)

**Requirement:** Mandatory

Human-readable title of the dataset

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"Daily Climate Observations 2024"
```

```json
"National Climate Observations 2024"
```

## <a name="accessRestriction"></a>`Dataset > accessRestriction` [#](#accessRestriction)

**Requirement:** Recommended

List of access restrictions related to the dataset

- **Type**: null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes

**Each item of this array must be:**
- [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction): Rules or indicators that describe who can access a resource

## <a name="cuiRestriction"></a>`Dataset > cuiRestriction` [#](#cuiRestriction)

**Requirement:** Recommended

Controlled Unclassified Information restriction related to the dataset

- **Type**: null or [CUIRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction)

## <a name="describedBy"></a>`Dataset > describedBy` [#](#describedBy)

**Title:** data dictionary

**Requirement:** Recommended

A distribution describing the Data Dictionary for this dataset

- **Type**: null or [Distribution](/standards/catalog/dcat-us-3/distribution/#root)

## <a name="distribution"></a>`Dataset > distribution` [#](#distribution)

**Title:** dataset distribution

**Requirement:** Recommended

List of available distributions for the dataset. This can be omitted when no distribution is available yet.

- **Type**: null or array of [Distribution](/standards/catalog/dcat-us-3/distribution/#root) classes

**Each item of this array must be:**
- [Distribution](/standards/catalog/dcat-us-3/distribution/#root): A specific representation of a dataset, such as a file, feed, or API response

## <a name="inventoried"></a>`Dataset > inventoried` [#](#inventoried)

**Title:** inventoried date

**Requirement:** Recommended

Date on which the dataset was added to the catalog. This may differ from the publication/release date.

- **Type**: null or object

**Examples:**

```json
"2024-01-15"
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

## <a name="keyword"></a>`Dataset > keyword` [#](#keyword)

**Title:** keyword/tag

**Requirement:** Recommended

List of keywords or tags describing the dataset

- **Type**: null or array of string

**Examples:**

```json
[
    "climate",
    "weather",
    "temperature",
    "precipitation"
]
```

```json
[
    "climate",
    "weather",
    "temperature",
    "precipitation",
    "humidity",
    "wind",
    "meteorology"
]
```

**Each item of this array must be:**
- [Non-empty string](#keyword_items): -

### <a name="keyword_items"></a>Non-empty string [#](#keyword_items)

- **Type**: `string`

**Restrictions:**
- **Min length**: 1

## <a name="landingPage"></a>`Dataset > landingPage` [#](#landingPage)

**Requirement:** Recommended

A web page from the original data provider that gives access to the Dataset, its Distributions, and related information

- **Type**: null or [Document](/standards/catalog/dcat-us-3/quality-governance/#document)

## <a name="license"></a>`Dataset > license` [#](#license)

**Requirement:** Recommended

License that governs how the dataset can be used or reused

- **Type**: null or string

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

## <a name="modified"></a>`Dataset > modified` [#](#modified)

**Title:** last modified

**Requirement:** Recommended

Most recent date when the dataset's actual data changed, not just metadata

- **Type**: null or object

**Examples:**

```json
"2024-06-01"
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

## <a name="publisher"></a>`Dataset > publisher` [#](#publisher)

**Requirement:** Recommended

Organization responsible for publishing and making the dataset available

- **Type**: null or [Organization](/standards/catalog/dcat-us-3/agents/#organization)

## <a name="rights"></a>`Dataset > rights` [#](#rights)

**Requirement:** Recommended

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

- **Type**: null or array of string

**Examples:**

```json
[
    "Data is provided as-is without warranty. Please cite the National Climate Data Center when using this data."
]
```

```json
[
    "This data is in the public domain and may be used without restriction."
]
```

**Each item of this array must be:**
- [rights items](#rights_items): Full text of a statement of rights

### <a name="rights_items"></a>Array Item [#](#rights_items)

Full text of a statement of rights

- **Type**: `string`

## <a name="spatial"></a>`Dataset > spatial` [#](#spatial)

**Title:** spatial/geographic coverage

**Requirement:** Recommended

A geographic region or regions that are covered by the Dataset

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Any of:**
- [Null allowed when not required](#spatial_anyOf_i0)
- [Location](#spatial_anyOf_i1)
- [List of geographic regions](#spatial_anyOf_i2)

### <a name="spatial_anyOf_i0"></a>`Dataset > spatial > anyOf > Null allowed when not required` [#](#spatial_anyOf_i0)

- **Type**: `null`

### <a name="spatial_anyOf_i1"></a>`Dataset > spatial > anyOf > Location` [#](#spatial_anyOf_i1)

inline description of Location

- **Type**: `object`
- **Additional properties**: Any type allowed
- **Same definition as**: [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location)

### <a name="spatial_anyOf_i2"></a>`Dataset > spatial > anyOf > List of geographic regions` [#](#spatial_anyOf_i2)

- **Type**: array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes

**Each item of this array must be:**
- [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location): A named place or geographic area

## <a name="temporal"></a>`Dataset > temporal` [#](#temporal)

**Title:** temporal coverage

**Requirement:** Recommended

Time periods covered by the dataset

- **Type**: null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes

**Each item of this array must be:**
- [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time): Information about a specific time period with a start- and/or end-time

## <a name="theme"></a>`Dataset > theme` [#](#theme)

**Title:** theme/category

**Requirement:** Recommended

List of themes or categories for the dataset

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="useRestriction"></a>`Dataset > useRestriction` [#](#useRestriction)

**Requirement:** Recommended

List of use restrictions related to the dataset

- **Type**: null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes

**Each item of this array must be:**
- [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction): Rules or legal limits on how a resource may be used

## <a name="@id"></a>`Dataset > @id` [#](#@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/datasets/national-climate-observations-2024"
```

## <a name="@type"></a>`Dataset > @type` [#](#@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Dataset"`

## <a name="accessRights"></a>`Dataset > accessRights` [#](#accessRights)

**Requirement:** Optional

Information about whether the dataset is publicly accessible, restricted, or not public

- **Type**: null or string

**Examples:**

```json
"public"
```

```json
"Public access with no restrictions. Data is freely available for download and use."
```

## <a name="accrualPeriodicity"></a>`Dataset > accrualPeriodicity` [#](#accrualPeriodicity)

**Title:** frequency

**Requirement:** Optional

The frequency at which the Dataset is updated

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Example:**

```json
"daily"
```

**Any of:**
- [Null allowed when not required](#accrualPeriodicity_anyOf_i0)
- [item 1](#accrualPeriodicity_anyOf_i1)
- [item 2](#accrualPeriodicity_anyOf_i2)
- [item 3](#accrualPeriodicity_anyOf_i3)

### <a name="accrualPeriodicity_anyOf_i0"></a>`Dataset > accrualPeriodicity > anyOf > Null allowed when not required` [#](#accrualPeriodicity_anyOf_i0)

- **Type**: `null`

### <a name="accrualPeriodicity_anyOf_i1"></a>`Dataset > accrualPeriodicity > anyOf > item 1` [#](#accrualPeriodicity_anyOf_i1)

ISO 19115 Maintenance Frequency code

- **Type**: `enum (of string)`

Must be one of:
* "continual"
* "daily"
* "weekly"
* "fortnightly"
* "monthly"
* "quarterly"
* "biannually"
* "annually"
* "asNeeded"
* "irregular"
* "notPlanned"
* "unknown"

### <a name="accrualPeriodicity_anyOf_i2"></a>`Dataset > accrualPeriodicity > anyOf > item 2` [#](#accrualPeriodicity_anyOf_i2)

ISO-8601 Maintenance Frequency code for recurring values, see https://www.iso.org/standard/70907.html

- **Type**: `string`

**Restrictions:**
- **Must match regular expression**: ```^R/P.+$``` [Test](https://regex101.com/?regex=%5ER%2FP.%2B%24)

### <a name="accrualPeriodicity_anyOf_i3"></a>`Dataset > accrualPeriodicity > anyOf > item 3` [#](#accrualPeriodicity_anyOf_i3)

Dublin Core Collection Frequency Vocabulary, see https://www.dublincore.org/specifications/dublin-core/collection-description/frequency/#vocabulary-terms

- **Type**: `enum (of string)`

Must be one of:
* "continuous"
* "daily"
* "weekly"
* "biweekly"
* "monthly"
* "quarterly"
* "semiannual"
* "annual"
* "irregular"
* "triennial"
* "biennial"
* "threeTimesAYear"
* "bimonthly"
* "semimonthly"
* "threeTimesAMonth"
* "semiweekly"
* "threeTimesAWeek"

## <a name="category"></a>`Dataset > category` [#](#category)

**Requirement:** Optional

List of high-level categories for the dataset

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="conformsTo"></a>`Dataset > conformsTo` [#](#conformsTo)

**Requirement:** Optional

List of standards, schemas, or profiles the dataset follows

- **Type**: null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes

**Each item of this array must be:**
- [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard): A standard or specification that another resource conforms to

## <a name="contributor"></a>`Dataset > contributor` [#](#contributor)

**Requirement:** Optional

List of agents contributing to the Dataset

- **Type**: null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes

**Each item of this array must be:**
- [Agent](/standards/catalog/dcat-us-3/agents/#agent): A person, organization, software agent, or other entity involved with a resource

## <a name="created"></a>`Dataset > created` [#](#created)

**Title:** creation date

**Requirement:** Optional

The date on which the Dataset was first created

- **Type**: null or object

**Examples:**

```json
"2024-01-01"
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

## <a name="creator"></a>`Dataset > creator` [#](#creator)

**Requirement:** Optional

Person or organization responsible for creating the dataset

- **Type**: null or [Agent](/standards/catalog/dcat-us-3/agents/#agent)

## <a name="first"></a>`Dataset > first` [#](#first)

**Requirement:** Optional

the first item of the sequence the dataset belongs to

- **Type**: null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)

## <a name="hasCurrentVersion"></a>`Dataset > hasCurrentVersion` [#](#hasCurrentVersion)

**Title:** current version

**Requirement:** Optional

reference to the current (latest) version of a dataset

- **Type**: null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)

## <a name="hasPart"></a>`Dataset > hasPart` [#](#hasPart)

**Requirement:** Optional

List of related datasets that are part of the described dataset

- **Type**: null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes

**Each item of this array must be:**
- [Dataset](/standards/catalog/dcat-us-3/dataset/#root): A collection of data published or curated by one provider

## <a name="hasQualityMeasurement"></a>`Dataset > hasQualityMeasurement` [#](#hasQualityMeasurement)

**Title:** quality measurement

**Requirement:** Optional

List of quality measurements for the dataset (for example, completeness, accuracy, or timeliness) beyond spatial or temporal resolution

- **Type**: null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes

**Each item of this array must be:**
- [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement): A measurement of a resource against a specific quality metric

## <a name="hasVersion"></a>`Dataset > hasVersion` [#](#hasVersion)

**Requirement:** Optional

List of related Datasets that are a version, edition, or adaptation of the described Dataset

- **Type**: null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes

**Each item of this array must be:**
- [Dataset](/standards/catalog/dcat-us-3/dataset/#root): A collection of data published or curated by one provider

## <a name="image"></a>`Dataset > image` [#](#image)

**Requirement:** Optional

Thumbnail image illustrating the dataset, especially useful for visual data such as maps, photos, or video

- **Type**: null or string

## <a name="isReferencedBy"></a>`Dataset > isReferencedBy` [#](#isReferencedBy)

**Requirement:** Optional

List of links to related resources, such as publications, that reference, cite, or otherwise point to the Dataset

- **Type**: null or array of string

**Example:**

```json
[
    "https://example.gov/publications/climate-trends-2024"
]
```

**Each item of this array must be:**
- [Link](#isReferencedBy_items): reference iri of Resource

### <a name="isReferencedBy_items"></a>Link [#](#isReferencedBy_items)

reference iri of Resource

- **Type**: `string`
- **Format**: `iri`

## <a name="issued"></a>`Dataset > issued` [#](#issued)

**Title:** release date

**Requirement:** Optional

Date when the dataset was first published. If the exact publication date is unknown, use the date it was first referenced in the catalog.

- **Type**: null or object

**Examples:**

```json
"2024-01-15"
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

## <a name="language"></a>`Dataset > language` [#](#language)

**Requirement:** Optional

ISO 639-1 language code values used in the dataset text or metadata, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Example:**

```json
[
    "en"
]
```

**Any of:**
- [Null allowed when not required](#language_anyOf_i0)
- [Language code](#language_anyOf_i1)
- [List of languages](#language_anyOf_i2)

### <a name="language_anyOf_i0"></a>`Dataset > language > anyOf > Null allowed when not required` [#](#language_anyOf_i0)

- **Type**: `null`

### <a name="language_anyOf_i1"></a>`Dataset > language > anyOf > Language code` [#](#language_anyOf_i1)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

### <a name="language_anyOf_i2"></a>`Dataset > language > anyOf > List of languages` [#](#language_anyOf_i2)

- **Type**: array of string

**Each item of this array must be:**
- [Language code](#language_anyOf_i2_items): -

#### <a name="language_anyOf_i2_items"></a>Language code [#](#language_anyOf_i2_items)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

## <a name="liabilityStatement"></a>`Dataset > liabilityStatement` [#](#liabilityStatement)

**Requirement:** Optional

A liability statement about the dataset that may clarify limitations of responsibility, qualifications on the accuracy, reliability, and completeness of the data, or absence of endorsement by the data publisher or provider, among other considerations

- **Type**: null or string

**Example:**

```json
"This dataset is provided as-is without warranty of any kind. Users are responsible for determining fitness for their intended use."
```

## <a name="metadataDistribution"></a>`Dataset > metadataDistribution` [#](#metadataDistribution)

**Requirement:** Optional

Distribution of the original metadata document this dataset was derived from

- **Type**: null or array of [Distribution](/standards/catalog/dcat-us-3/distribution/#root) classes

**Each item of this array must be:**
- [Distribution](/standards/catalog/dcat-us-3/distribution/#root): A specific representation of a dataset, such as a file, feed, or API response

## <a name="otherIdentifier"></a>`Dataset > otherIdentifier` [#](#otherIdentifier)

**Requirement:** Optional

Additional identifiers for the dataset besides the main identifier, such as a DOI or other persistent ID

- **Type**: null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes

**Each item of this array must be:**
- [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier): A unique identifier and optionally it's scheme and other relevant information

## <a name="page"></a>`Dataset > page` [#](#page)

**Title:** documentation

**Requirement:** Optional

List of pages or documents about this dataset

- **Type**: null or array of [Document](/standards/catalog/dcat-us-3/quality-governance/#document) classes

**Each item of this array must be:**
- [Document](/standards/catalog/dcat-us-3/quality-governance/#document): A publication or other document related to a resource

## <a name="previousVersion"></a>`Dataset > previousVersion` [#](#previousVersion)

**Requirement:** Optional

reference to the previous dataset version

- **Type**: null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)

## <a name="provenance"></a>`Dataset > provenance` [#](#provenance)

**Requirement:** Optional

List of statements about the lineage of a Dataset, including any changes in its ownership or custody since its creation that may be significant for its authenticity, integrity, or interpretation

- **Type**: null or array of string

**Example:**

```json
[
    "Data collected from automated weather stations deployed at 2,500 locations across the continental United States.",
    "Quality control procedures applied according to WMO guidelines."
]
```

**Each item of this array must be:**
- [provenance items](#provenance_items): Full text of the provenance statement

### <a name="provenance_items"></a>Array Item [#](#provenance_items)

Full text of the provenance statement

- **Type**: `string`

## <a name="purpose"></a>`Dataset > purpose` [#](#purpose)

**Requirement:** Optional

The purpose of the dataset

- **Type**: `null or string`

**Example:**

```json
"To provide comprehensive, high-quality climate observations for research, planning, and decision-making related to weather and climate."
```

## <a name="qualifiedAttribution"></a>`Dataset > qualifiedAttribution` [#](#qualifiedAttribution)

**Requirement:** Optional

List of agents with specific responsibilities for the dataset

- **Type**: null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes

**Each item of this array must be:**
- [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution): A responsibility that an agent has for a resource

## <a name="qualifiedRelation"></a>`Dataset > qualifiedRelation` [#](#qualifiedRelation)

**Requirement:** Optional

Detailed relationship between the dataset and another resource, including the role of that relationship

- **Type**: null or array of [Relationship](/standards/catalog/dcat-us-3/identifiers-and-relationships/#relationship) classes

**Each item of this array must be:**
- [Relationship](/standards/catalog/dcat-us-3/identifiers-and-relationships/#relationship): Additional information about how one resource is related to another

## <a name="relation"></a>`Dataset > relation` [#](#relation)

**Title:** related resource

**Requirement:** Optional

List of links to related resources when the relationship is not otherwise specified

- **Type**: null or array of string

**Example:**

```json
[
    "https://example.gov/datasets/historical-climate-averages"
]
```

**Each item of this array must be:**
- [Link](#relation_items): reference iri of Resource

### <a name="relation_items"></a>Link [#](#relation_items)

reference iri of Resource

- **Type**: `string`
- **Format**: `iri`

## <a name="replaces"></a>`Dataset > replaces` [#](#replaces)

**Requirement:** Optional

List of Datasets replaced by this Dataset

- **Type**: null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes

**Each item of this array must be:**
- [Dataset](/standards/catalog/dcat-us-3/dataset/#root): A collection of data published or curated by one provider

## <a name="rightsHolder"></a>`Dataset > rightsHolder` [#](#rightsHolder)

**Requirement:** Optional

List of agents (organizations) holding rights on the Dataset

- **Type**: null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes

**Each item of this array must be:**
- [Organization](/standards/catalog/dcat-us-3/agents/#organization): An organization involved with a resource, including parent or child organizations

## <a name="sample"></a>`Dataset > sample` [#](#sample)

**Requirement:** Optional

List of sample distributions for the dataset

- **Type**: null or array of [Distribution](/standards/catalog/dcat-us-3/distribution/#root) classes

**Each item of this array must be:**
- [Distribution](/standards/catalog/dcat-us-3/distribution/#root): A specific representation of a dataset, such as a file, feed, or API response

## <a name="scopeNote"></a>`Dataset > scopeNote` [#](#scopeNote)

**Title:** usage note

**Requirement:** Optional

usage note for the dataset

- **Type**: `null or string`

**Example:**

```json
"This dataset contains raw observational data. For derived products such as monthly averages or climate normals, see related datasets."
```

## <a name="source"></a>`Dataset > source` [#](#source)

**Title:** data source

**Requirement:** Optional

List of related Datasets from which the described Dataset is derived

- **Type**: null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes

**Each item of this array must be:**
- [Dataset](/standards/catalog/dcat-us-3/dataset/#root): A collection of data published or curated by one provider

## <a name="spatialResolutionInMeters"></a>`Dataset > spatialResolutionInMeters` [#](#spatialResolutionInMeters)

**Title:** Spatial resolution (meters)

**Requirement:** Optional

Smallest spatial distance between data points, in meters, represented as a single value

- **Type**: `null or string`

**Example:**

```json
"1000"
```

## <a name="status"></a>`Dataset > status` [#](#status)

**Title:** lifecycle status

**Requirement:** Optional

Lifecycle status of the dataset, such as completed, deprecated, under development, or withdrawn

- **Type**: null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)

## <a name="subject"></a>`Dataset > subject` [#](#subject)

**Requirement:** Optional

List of primary subjects for the dataset, usually narrower than broad theme categories

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="supportedSchema"></a>`Dataset > supportedSchema` [#](#supportedSchema)

**Requirement:** Optional

supported schema for this dataset

- **Type**: null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)

## <a name="temporalResolution"></a>`Dataset > temporalResolution` [#](#temporalResolution)

**Requirement:** Optional

Smallest time interval between data points, using xsd:duration format (for example, P1D)

- **Type**: `null or string`

**Example:**

```json
"P1D"
```

## <a name="version"></a>`Dataset > version` [#](#version)

**Requirement:** Optional

The version indicator (name or identifier) of a resource

- **Type**: `null or string`

**Example:**

```json
"2024.1"
```

## <a name="versionNotes"></a>`Dataset > versionNotes` [#](#versionNotes)

**Requirement:** Optional

Notes describing how this version differs from earlier versions of the dataset

- **Type**: `null or string`

**Example:**

```json
"Initial release of 2024 climate observations data."
```

## <a name="wasAttributedTo"></a>`Dataset > wasAttributedTo` [#](#wasAttributedTo)

**Title:** attribution

**Requirement:** Optional

List of agents attributed to this dataset

- **Type**: null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes

**Each item of this array must be:**
- [Agent](/standards/catalog/dcat-us-3/agents/#agent): A person, organization, software agent, or other entity involved with a resource

## <a name="wasGeneratedBy"></a>`Dataset > wasGeneratedBy` [#](#wasGeneratedBy)

**Requirement:** Optional

List of activities that generated, or provide the business context for the creation of the dataset

- **Type**: null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes

**Each item of this array must be:**
- [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity): An activity related to creating, changing, or using a resource

## <a name="wasUsedBy"></a>`Dataset > wasUsedBy` [#](#wasUsedBy)

**Title:** used by

**Requirement:** Optional

List of activities that used the Dataset

- **Type**: null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes

**Each item of this array must be:**
- [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity): An activity related to creating, changing, or using a resource

---
**See Also:** (related supporting classes)
