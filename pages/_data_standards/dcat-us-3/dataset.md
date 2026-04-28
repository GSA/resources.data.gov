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

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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

| Property                                                 | Type                    | Requirement Level | Title/Description                                                                                                                                                                                                                                          |
| -------------------------------------------------------- | ----------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#@id)                                             | string                  | Optional          |                                                                                                                                                                                                                                                            |
| [@type](#@type)                                         | string                  | Optional          |                                                                                                                                                                                                                                                            |
| [otherIdentifier](#otherIdentifier)                     | null or array           | Optional          | Additional identifiers for the dataset besides the main identifier, such as a DOI or other persistent ID                                                                                                                                                   |
| [sample](#sample)                                       | null or array           | Optional          | List of sample distributions for the dataset                                                                                                                                                                                                               |
| [status](#status)                                       | More than one type      | Optional          | Lifecycle status of the dataset, such as completed, deprecated, under development, or withdrawn                                                                                                                                                            |
| [supportedSchema](#supportedSchema)                     | More than one type      | Optional          | supported schema for this dataset                                                                                                                                                                                                                          |
| [versionNotes](#versionNotes)                           | null or string          | Optional          | Notes describing how this version differs from earlier versions of the dataset                                                                                                                                                                             |
| [contactPoint](#contactPoint)                           | More than one type      | Mandatory         | A contact point for questions about the Dataset (single contact or list). Include an email address that is continuously monitored                                                                                                                          |
| [distribution](#distribution)                           | null or array           | Recommended       | List of available distributions for the dataset. This can be omitted when no distribution is available yet.                                                                                                                                                |
| [first](#first)                                         | More than one type      | Optional          | the first item of the sequence the dataset belongs to                                                                                                                                                                                                      |
| [hasCurrentVersion](#hasCurrentVersion)                 | More than one type      | Optional          | reference to the current (latest) version of a dataset                                                                                                                                                                                                     |
| [hasVersion](#hasVersion)                               | null or array           | Optional          | List of related Datasets that are a version, edition, or adaptation of the described Dataset                                                                                                                                                               |
| [inSeries](#inSeries)                                   | null or array           | Optional          | Dataset series this dataset belongs to                                                                                                                                                                                                                     |
| [keyword](#keyword)                                     | null or array of string | Recommended       | List of keywords or tags describing the dataset                                                                                                                                                                                                            |
| [landingPage](#landingPage)                             | More than one type      | Recommended       | A web page from the original data provider that gives access to the Dataset, its Distributions, and related information                                                                                                                                    |
| [previousVersion](#previousVersion)                     | More than one type      | Optional          | reference to the previous dataset version                                                                                                                                                                                                                  |
| [qualifiedRelation](#qualifiedRelation)                 | null or array           | Optional          | Detailed relationship between the dataset and another resource, including the role of that relationship                                                                                                                                                    |
| [spatialResolutionInMeters](#spatialResolutionInMeters) | null or string          | Optional          | Smallest spatial distance between data points, in meters, represented as a single value                                                                                                                                                                    |
| [temporalResolution](#temporalResolution)               | null or string          | Optional          | Smallest time interval between data points, using xsd:duration format (for example, P1D)                                                                                                                                                                   |
| [theme](#theme)                                         | null or array           | Recommended       | List of themes or categories for the dataset                                                                                                                                                                                                               |
| [version](#version)                                     | null or string          | Optional          | The version indicator (name or identifier) of a resource                                                                                                                                                                                                   |
| [describedBy](#describedBy)                             | More than one type      | Recommended       | A distribution describing the Data Dictionary for this dataset                                                                                                                                                                                             |
| [liabilityStatement](#liabilityStatement)               | More than one type      | Optional          | A liability statement about the dataset that may clarify limitations of responsibility, qualifications on the accuracy, reliability, and completeness of the data, or absence of endorsement by the data publisher or provider, among other considerations |
| [metadataDistribution](#metadataDistribution)           | null or array           | Optional          | Distribution of the original metadata document this dataset was derived from                                                                                                                                                                               |
| [purpose](#purpose)                                     | null or string          | Optional          | The purpose of the dataset                                                                                                                                                                                                                                 |
| [accessRights](#accessRights)                           | More than one type      | Optional          | Information about whether the dataset is publicly accessible, restricted, or not public                                                                                                                                                                    |
| [accrualPeriodicity](#accrualPeriodicity)               | More than one type      | Optional          | The frequency at which the Dataset is updated                                                                                                                                                                                                              |
| [conformsTo](#conformsTo)                               | null or array           | Optional          | List of standards, schemas, or profiles the dataset follows                                                                                                                                                                                                |
| [contributor](#contributor)                             | null or array           | Optional          | List of agents contributing to the Dataset                                                                                                                                                                                                                 |
| [created](#created)                                     | More than one type      | Optional          | The date on which the Dataset was first created                                                                                                                                                                                                            |
| [creator](#creator)                                     | More than one type      | Optional          | Person or organization responsible for creating the dataset                                                                                                                                                                                                |
| [description](#description)                             | string                  | Mandatory         | Plain-language summary of the dataset                                                                                                                                                                                                                      |
| [hasPart](#hasPart)                                     | null or array           | Optional          | List of related datasets that are part of the described dataset                                                                                                                                                                                            |
| [identifier](#identifier)                               | More than one type      | Mandatory         | The unique identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalog                                                                                                                                               |
| [isReferencedBy](#isReferencedBy)                       | null or array of string | Optional          | List of links to related resources, such as publications, that reference, cite, or otherwise point to the Dataset                                                                                                                                          |
| [issued](#issued)                                       | More than one type      | Optional          | Date when the dataset was first published. If the exact publication date is unknown, use the date it was first referenced in the catalog.                                                                                                                  |
| [language](#language)                                   | More than one type      | Optional          | ISO 639-1 language code values used in the dataset text or metadata, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html                                                                                                |
| [modified](#modified)                                   | More than one type      | Recommended       | Most recent date when the dataset's actual data changed, not just metadata                                                                                                                                                                                 |
| [provenance](#provenance)                               | null or array of string | Optional          | List of statements about the lineage of a Dataset, including any changes in its ownership or custody since its creation that may be significant for its authenticity, integrity, or interpretation                                                         |
| [publisher](#publisher)                                 | object                  | Mandatory         | Organization responsible for publishing and making the dataset available                                                                                                                                                                                   |
| [relation](#relation)                                   | null or array of string | Optional          | List of links to related resources when the relationship is not otherwise specified                                                                                                                                                                        |
| [replaces](#replaces)                                   | null or array           | Optional          | List of Datasets replaced by this Dataset                                                                                                                                                                                                                  |
| [rights](#rights)                                       | null or array of string | Recommended       | Rights statements not already covered by license or accessRights, such as copyright or policy restrictions                                                                                                                                                 |
| [rightsHolder](#rightsHolder)                           | null or array           | Optional          | List of agents (organizations) holding rights on the Dataset                                                                                                                                                                                               |
| [source](#source)                                       | null or array           | Optional          | List of related Datasets from which the described Dataset is derived                                                                                                                                                                                       |
| [spatial](#spatial)                                     | More than one type      | Recommended       | A geographic region or regions that are covered by the Dataset                                                                                                                                                                                             |
| [subject](#subject)                                     | null or array           | Optional          | List of primary subjects for the dataset, usually narrower than broad theme categories                                                                                                                                                                     |
| [temporal](#temporal)                                   | null or array           | Recommended       | Time periods covered by the dataset                                                                                                                                                                                                                        |
| [title](#title)                                         | string                  | Mandatory         | Human-readable title of the dataset                                                                                                                                                                                                                        |
| [category](#category)                                   | null or array           | Optional          | List of high-level categories for the dataset                                                                                                                                                                                                              |
| [hasQualityMeasurement](#hasQualityMeasurement)         | null or array           | Optional          | List of quality measurements for the dataset (for example, completeness, accuracy, or timeliness) beyond spatial or temporal resolution                                                                                                                    |
| [page](#page)                                           | null or array           | Optional          | List of pages or documents about this dataset                                                                                                                                                                                                              |
| [qualifiedAttribution](#qualifiedAttribution)           | null or array           | Optional          | List of agents with specific responsibilities for the dataset                                                                                                                                                                                              |
| [wasAttributedTo](#wasAttributedTo)                     | null or array           | Optional          | List of agents attributed to this dataset                                                                                                                                                                                                                  |
| [wasGeneratedBy](#wasGeneratedBy)                       | null or array           | Optional          | List of activities that generated, or provide the business context for the creation of the dataset                                                                                                                                                         |
| [wasUsedBy](#wasUsedBy)                                 | null or array           | Optional          | List of activities that used the Dataset                                                                                                                                                                                                                   |
| [image](#image)                                         | More than one type      | Optional          | Thumbnail image illustrating the dataset, especially useful for visual data such as maps, photos, or video                                                                                                                                                 |
| [scopeNote](#scopeNote)                                 | null or string          | Optional          | usage note for the dataset                                                                                                                                                                                                                                 |

## <a name="@id"></a>`Dataset > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/datasets/national-climate-observations-2024"
```

## <a name="@type"></a>`Dataset > @type`

**Requirement:** Optional

| **Type**    | `string`    |
| ----------- | ----------- |
| **Default** | `"Dataset"` |

## <a name="otherIdentifier"></a>`Dataset > otherIdentifier`

**Requirement:** Optional

Additional identifiers for the dataset besides the main identifier, such as a DOI or other persistent ID

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="sample"></a>`Dataset > sample`

**Requirement:** Optional

List of sample distributions for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be        | Description                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| [Distribution](/standards/catalog/dcat-us-3/distribution/#root) | A specific representation of a dataset, such as a file, feed, or API response |

## <a name="status"></a>`Dataset > status`

**Title:** lifecycle status

**Requirement:** Optional

Lifecycle status of the dataset, such as completed, deprecated, under development, or withdrawn

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                             |
| -------------------------------------------------- |
| [Null allowed when not required](#status_anyOf_i0) |
| [Concept](#status_anyOf_i1)                        |

### <a name="status_anyOf_i0"></a>`Dataset > status > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="status_anyOf_i1"></a>`Dataset > status > anyOf > Concept`

inline description of Concept

| **Type**                  | More than one type                                    |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Same definition as**    | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

## <a name="supportedSchema"></a>`Dataset > supportedSchema`

**Requirement:** Optional

supported schema for this dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                      |
| ----------------------------------------------------------- |
| [Null allowed when not required](#supportedSchema_anyOf_i0) |
| [Dataset](#supportedSchema_anyOf_i1)                        |

### <a name="supportedSchema_anyOf_i0"></a>`Dataset > supportedSchema > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="supportedSchema_anyOf_i1"></a>`Dataset > supportedSchema > anyOf > Dataset`

inline description of the supported schema

| **Type**                  | `object`                     |
| ------------------------- | ---------------------------- |
| **Additional properties** | Any type allowed             |
| **Same definition as**    | [Dataset](/standards/catalog/dcat-us-3/dataset/#root) |

---
**See Also:** (related supporting classes)

## <a name="versionNotes"></a>`Dataset > versionNotes`

**Requirement:** Optional

Notes describing how this version differs from earlier versions of the dataset

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Initial release of 2024 climate observations data."
```

## <a name="contactPoint"></a>`Dataset > contactPoint`

**Requirement:** Mandatory

A contact point for questions about the Dataset (single contact or list). Include an email address that is continuously monitored

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Required**              | Yes                |
| **Additional properties** | Any type allowed   |

| Any of                                     |
| ------------------------------------------ |
| [Kind](#contactPoint_anyOf_i0)             |
| [List of contacts](#contactPoint_anyOf_i1) |

### <a name="contactPoint_anyOf_i0"></a>`Dataset > contactPoint > anyOf > Kind`

inline description of Kind

| **Type**                  | `object`                 |
| ------------------------- | ------------------------ |
| **Additional properties** | Any type allowed         |
| **Same definition as**    | [Kind](/standards/catalog/dcat-us-3/agents/#kind) |

### <a name="contactPoint_anyOf_i1"></a>`Dataset > contactPoint > anyOf > List of contacts`

| **Type** | `array` |
| -------- | ------- |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](/standards/catalog/dcat-us-3/agents/#kind)        | Contact information for an individual or entity |

## <a name="distribution"></a>`Dataset > distribution`

**Title:** dataset distribution

**Requirement:** Recommended

List of available distributions for the dataset. This can be omitted when no distribution is available yet.

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be        | Description                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| [Distribution](/standards/catalog/dcat-us-3/distribution/#root) | A specific representation of a dataset, such as a file, feed, or API response |

## <a name="first"></a>`Dataset > first`

**Requirement:** Optional

the first item of the sequence the dataset belongs to

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                            |
| ------------------------------------------------- |
| [Null allowed when not required](#first_anyOf_i0) |
| [Dataset](#first_anyOf_i1)                        |

### <a name="first_anyOf_i0"></a>`Dataset > first > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="first_anyOf_i1"></a>`Dataset > first > anyOf > Dataset`

inline description of Dataset

| **Type**                  | `object`                     |
| ------------------------- | ---------------------------- |
| **Additional properties** | Any type allowed             |
| **Same definition as**    | [Dataset](/standards/catalog/dcat-us-3/dataset/#root) |

---
**See Also:** (related supporting classes)

## <a name="hasCurrentVersion"></a>`Dataset > hasCurrentVersion`

**Title:** current version

**Requirement:** Optional

reference to the current (latest) version of a dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                        |
| ------------------------------------------------------------- |
| [Null allowed when not required](#hasCurrentVersion_anyOf_i0) |
| [Dataset](#hasCurrentVersion_anyOf_i1)                        |

### <a name="hasCurrentVersion_anyOf_i0"></a>`Dataset > hasCurrentVersion > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="hasCurrentVersion_anyOf_i1"></a>`Dataset > hasCurrentVersion > anyOf > Dataset`

inline description of Dataset

| **Type**                  | `object`                     |
| ------------------------- | ---------------------------- |
| **Additional properties** | Any type allowed             |
| **Same definition as**    | [Dataset](/standards/catalog/dcat-us-3/dataset/#root) |

---
**See Also:** (related supporting classes)

## <a name="hasVersion"></a>`Dataset > hasVersion`

**Requirement:** Optional

List of related Datasets that are a version, edition, or adaptation of the described Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](/standards/catalog/dcat-us-3/dataset/#root)    | A collection of data published or curated by one provider |

## <a name="inSeries"></a>`Dataset > inSeries`

**Requirement:** Optional

Dataset series this dataset belongs to

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be           | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| [DatasetSeries](/standards/catalog/dcat-us-3/dataset-series/#root) | A group of related datasets that are published separately |

## <a name="keyword"></a>`Dataset > keyword`

**Title:** keyword/tag

**Requirement:** Recommended

List of keywords or tags describing the dataset

| **Type** | `null or array of string` |
| -------- | ------------------------- |

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

| Each item of this array must be    | Description |
| ---------------------------------- | ----------- |
| [Non-empty string](#keyword_items) | -           |

### <a name="keyword_items"></a>Non-empty string

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="landingPage"></a>`Dataset > landingPage`

**Requirement:** Recommended

A web page from the original data provider that gives access to the Dataset, its Distributions, and related information

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                  |
| ------------------------------------------------------- |
| [Null allowed when not required](#landingPage_anyOf_i0) |
| [Document](#landingPage_anyOf_i1)                       |

### <a name="landingPage_anyOf_i0"></a>`Dataset > landingPage > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="landingPage_anyOf_i1"></a>`Dataset > landingPage > anyOf > Document`

inline description of Document

| **Type**                  | `object`                                     |
| ------------------------- | -------------------------------------------- |
| **Additional properties** | Any type allowed                             |
| **Same definition as**    | [Document](/standards/catalog/dcat-us-3/quality-governance/#document) |

## <a name="previousVersion"></a>`Dataset > previousVersion`

**Requirement:** Optional

reference to the previous dataset version

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                      |
| ----------------------------------------------------------- |
| [Null allowed when not required](#previousVersion_anyOf_i0) |
| [Dataset](#previousVersion_anyOf_i1)                        |

### <a name="previousVersion_anyOf_i0"></a>`Dataset > previousVersion > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="previousVersion_anyOf_i1"></a>`Dataset > previousVersion > anyOf > Dataset`

inline description of Dataset

| **Type**                  | `object`                     |
| ------------------------- | ---------------------------- |
| **Additional properties** | Any type allowed             |
| **Same definition as**    | [Dataset](/standards/catalog/dcat-us-3/dataset/#root) |

---
**See Also:** (related supporting classes)

## <a name="qualifiedRelation"></a>`Dataset > qualifiedRelation`

**Requirement:** Optional

Detailed relationship between the dataset and another resource, including the role of that relationship

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                                 | Description                                                         |
| --------------------------------------------------------------- | ------------------------------------------------------------------- |
| [Relationship](/standards/catalog/dcat-us-3/identifiers-and-relationships/#relationship) | Additional information about how one resource is related to another |

## <a name="spatialResolutionInMeters"></a>`Dataset > spatialResolutionInMeters`

**Title:** Spatial resolution (meters)

**Requirement:** Optional

Smallest spatial distance between data points, in meters, represented as a single value

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"1000"
```

## <a name="temporalResolution"></a>`Dataset > temporalResolution`

**Requirement:** Optional

Smallest time interval between data points, using xsd:duration format (for example, P1D)

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"P1D"
```

## <a name="theme"></a>`Dataset > theme`

**Title:** theme/category

**Requirement:** Recommended

List of themes or categories for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="version"></a>`Dataset > version`

**Requirement:** Optional

The version indicator (name or identifier) of a resource

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"2024.1"
```

## <a name="describedBy"></a>`Dataset > describedBy`

**Title:** data dictionary

**Requirement:** Recommended

A distribution describing the Data Dictionary for this dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                                  |
| ------------------------------------------------------- |
| [Null allowed when not required](#describedBy_anyOf_i0) |
| [Distribution](#describedBy_anyOf_i1)                   |

### <a name="describedBy_anyOf_i0"></a>`Dataset > describedBy > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="describedBy_anyOf_i1"></a>`Dataset > describedBy > anyOf > Distribution`

inline description of Distribution

| **Type**                  | `object`                               |
| ------------------------- | -------------------------------------- |
| **Additional properties** | Any type allowed                       |
| **Same definition as**    | [Distribution](/standards/catalog/dcat-us-3/distribution/#root) |

---
**See Also:** (related supporting classes)

## <a name="liabilityStatement"></a>`Dataset > liabilityStatement`

**Requirement:** Optional

A liability statement about the dataset that may clarify limitations of responsibility, qualifications on the accuracy, reliability, and completeness of the data, or absence of endorsement by the data publisher or provider, among other considerations

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"This dataset is provided as-is without warranty of any kind. Users are responsible for determining fitness for their intended use."
```

| Any of                                                         |
| -------------------------------------------------------------- |
| [Null allowed when not required](#liabilityStatement_anyOf_i0) |
| [item 1](#liabilityStatement_anyOf_i1)                         |

### <a name="liabilityStatement_anyOf_i0"></a>`Dataset > liabilityStatement > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="liabilityStatement_anyOf_i1"></a>`Dataset > liabilityStatement > anyOf > item 1`

Full text of the liability statement

| **Type** | `string` |
| -------- | -------- |

## <a name="metadataDistribution"></a>`Dataset > metadataDistribution`

**Requirement:** Optional

Distribution of the original metadata document this dataset was derived from

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be        | Description                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| [Distribution](/standards/catalog/dcat-us-3/distribution/#root) | A specific representation of a dataset, such as a file, feed, or API response |

## <a name="purpose"></a>`Dataset > purpose`

**Requirement:** Optional

The purpose of the dataset

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"To provide comprehensive, high-quality climate observations for research, planning, and decision-making related to weather and climate."
```

## <a name="accessRights"></a>`Dataset > accessRights`

**Requirement:** Optional

Information about whether the dataset is publicly accessible, restricted, or not public

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"public"
```

```json
"Public access with no restrictions. Data is freely available for download and use."
```

| Any of                                                   |
| -------------------------------------------------------- |
| [Null allowed when not required](#accessRights_anyOf_i0) |
| [item 1](#accessRights_anyOf_i1)                         |

### <a name="accessRights_anyOf_i0"></a>`Dataset > accessRights > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="accessRights_anyOf_i1"></a>`Dataset > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="accrualPeriodicity"></a>`Dataset > accrualPeriodicity`

**Title:** frequency

**Requirement:** Optional

The frequency at which the Dataset is updated

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"daily"
```

| Any of                                                         |
| -------------------------------------------------------------- |
| [Null allowed when not required](#accrualPeriodicity_anyOf_i0) |
| [item 1](#accrualPeriodicity_anyOf_i1)                         |
| [item 2](#accrualPeriodicity_anyOf_i2)                         |
| [item 3](#accrualPeriodicity_anyOf_i3)                         |

### <a name="accrualPeriodicity_anyOf_i0"></a>`Dataset > accrualPeriodicity > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="accrualPeriodicity_anyOf_i1"></a>`Dataset > accrualPeriodicity > anyOf > item 1`

ISO 19115 Maintenance Frequency code

| **Type** | `enum (of string)` |
| -------- | ------------------ |

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

### <a name="accrualPeriodicity_anyOf_i2"></a>`Dataset > accrualPeriodicity > anyOf > item 2`

ISO-8601 Maintenance Frequency code for recurring values, see https://www.iso.org/standard/70907.html

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                   |
| --------------------------------- | ----------------------------------------------------------------- |
| **Must match regular expression** | ```^R/P.+$``` [Test](https://regex101.com/?regex=%5ER%2FP.%2B%24) |

### <a name="accrualPeriodicity_anyOf_i3"></a>`Dataset > accrualPeriodicity > anyOf > item 3`

Dublin Core Collection Frequency Vocabulary, see https://www.dublincore.org/specifications/dublin-core/collection-description/frequency/#vocabulary-terms

| **Type** | `enum (of string)` |
| -------- | ------------------ |

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

## <a name="conformsTo"></a>`Dataset > conformsTo`

**Requirement:** Optional

List of standards, schemas, or profiles the dataset follows

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be              | Description                                                   |
| -------------------------------------------- | ------------------------------------------------------------- |
| [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) | A standard or specification that another resource conforms to |

## <a name="contributor"></a>`Dataset > contributor`

**Requirement:** Optional

List of agents contributing to the Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](/standards/catalog/dcat-us-3/agents/#agent)      | A person, organization, software agent, or other entity involved with a resource |

## <a name="created"></a>`Dataset > created`

**Title:** creation date

**Requirement:** Optional

The date on which the Dataset was first created

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of                                              |
| --------------------------------------------------- |
| [Null allowed when not required](#created_anyOf_i0) |
| [Date string](#created_anyOf_i1)                    |

### <a name="created_anyOf_i0"></a>`Dataset > created > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="created_anyOf_i1"></a>`Dataset > created > anyOf > Date string`

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                               |
| ------------------------------------ |
| [item 0](#created_anyOf_i1_anyOf_i0) |
| [item 1](#created_anyOf_i1_anyOf_i1) |
| [item 2](#created_anyOf_i1_anyOf_i2) |
| [item 3](#created_anyOf_i1_anyOf_i3) |

#### <a name="created_anyOf_i1_anyOf_i0"></a>`Dataset > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="created_anyOf_i1_anyOf_i1"></a>`Dataset > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="created_anyOf_i1_anyOf_i2"></a>`Dataset > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="created_anyOf_i1_anyOf_i3"></a>`Dataset > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="creator"></a>`Dataset > creator`

**Requirement:** Optional

Person or organization responsible for creating the dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                              |
| --------------------------------------------------- |
| [Null allowed when not required](#creator_anyOf_i0) |
| [Agent](#creator_anyOf_i1)                          |

### <a name="creator_anyOf_i0"></a>`Dataset > creator > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="creator_anyOf_i1"></a>`Dataset > creator > anyOf > Agent`

inline description of Agent

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Additional properties** | Any type allowed           |
| **Same definition as**    | [Agent](/standards/catalog/dcat-us-3/agents/#agent) |

## <a name="description"></a>`Dataset > description`

**Requirement:** Mandatory

Plain-language summary of the dataset

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"Daily temperature, precipitation, and wind measurements from monitoring stations across the United States."
```

```json
"Comprehensive daily climate observations collected from monitoring stations across the United States, including temperature, precipitation, humidity, and wind measurements."
```

## <a name="hasPart"></a>`Dataset > hasPart`

**Requirement:** Optional

List of related datasets that are part of the described dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](/standards/catalog/dcat-us-3/dataset/#root)    | A collection of data published or curated by one provider |

## <a name="identifier"></a>`Dataset > identifier`

**Requirement:** Mandatory

The unique identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Required**              | Yes                |
| **Additional properties** | Any type allowed   |

| Any of                                                 |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>`Dataset > identifier > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>`Dataset > identifier > anyOf > Identifier`

inline description of Identifier

| **Type**                  | More than one type                                          |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Same definition as**    | [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) |

## <a name="isReferencedBy"></a>`Dataset > isReferencedBy`

**Requirement:** Optional

List of links to related resources, such as publications, that reference, cite, or otherwise point to the Dataset

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "https://example.gov/publications/climate-trends-2024"
]
```

| Each item of this array must be | Description               |
| ------------------------------- | ------------------------- |
| [Link](#isReferencedBy_items)   | reference iri of Resource |

### <a name="isReferencedBy_items"></a>Link

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="issued"></a>`Dataset > issued`

**Title:** release date

**Requirement:** Optional

Date when the dataset was first published. If the exact publication date is unknown, use the date it was first referenced in the catalog.

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of                                             |
| -------------------------------------------------- |
| [Null allowed when not required](#issued_anyOf_i0) |
| [Date string](#issued_anyOf_i1)                    |

### <a name="issued_anyOf_i0"></a>`Dataset > issued > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>`Dataset > issued > anyOf > Date string`

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                              |
| ----------------------------------- |
| [item 0](#issued_anyOf_i1_anyOf_i0) |
| [item 1](#issued_anyOf_i1_anyOf_i1) |
| [item 2](#issued_anyOf_i1_anyOf_i2) |
| [item 3](#issued_anyOf_i1_anyOf_i3) |

#### <a name="issued_anyOf_i1_anyOf_i0"></a>`Dataset > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>`Dataset > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>`Dataset > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>`Dataset > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="language"></a>`Dataset > language`

**Requirement:** Optional

ISO 639-1 language code values used in the dataset text or metadata, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
[
    "en"
]
```

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#language_anyOf_i0) |
| [Language code](#language_anyOf_i1)                  |
| [List of languages](#language_anyOf_i2)              |

### <a name="language_anyOf_i0"></a>`Dataset > language > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>`Dataset > language > anyOf > Language code`

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>`Dataset > language > anyOf > List of languages`

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

## <a name="modified"></a>`Dataset > modified`

**Title:** last modified

**Requirement:** Recommended

Most recent date when the dataset's actual data changed, not just metadata

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#modified_anyOf_i0) |
| [Date string](#modified_anyOf_i1)                    |

### <a name="modified_anyOf_i0"></a>`Dataset > modified > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>`Dataset > modified > anyOf > Date string`

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                |
| ------------------------------------- |
| [item 0](#modified_anyOf_i1_anyOf_i0) |
| [item 1](#modified_anyOf_i1_anyOf_i1) |
| [item 2](#modified_anyOf_i1_anyOf_i2) |
| [item 3](#modified_anyOf_i1_anyOf_i3) |

#### <a name="modified_anyOf_i1_anyOf_i0"></a>`Dataset > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>`Dataset > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>`Dataset > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>`Dataset > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="provenance"></a>`Dataset > provenance`

**Requirement:** Optional

List of statements about the lineage of a Dataset, including any changes in its ownership or custody since its creation that may be significant for its authenticity, integrity, or interpretation

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "Data collected from automated weather stations deployed at 2,500 locations across the continental United States.",
    "Quality control procedures applied according to WMO guidelines."
]
```

| Each item of this array must be       | Description                           |
| ------------------------------------- | ------------------------------------- |
| [provenance items](#provenance_items) | Full text of the provenance statement |

### <a name="provenance_items"></a>Array Item

Full text of the provenance statement

| **Type** | `string` |
| -------- | -------- |

## <a name="publisher"></a>`Dataset > publisher`

**Requirement:** Mandatory

Organization responsible for publishing and making the dataset available

| **Type**                  | `object`                                 |
| ------------------------- | ---------------------------------------- |
| **Required**              | Yes                                      |
| **Additional properties** | Any type allowed                         |
| **Defined in**            | [Organization](/standards/catalog/dcat-us-3/agents/#organization) |

## <a name="relation"></a>`Dataset > relation`

**Title:** related resource

**Requirement:** Optional

List of links to related resources when the relationship is not otherwise specified

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "https://example.gov/datasets/historical-climate-averages"
]
```

| Each item of this array must be | Description               |
| ------------------------------- | ------------------------- |
| [Link](#relation_items)         | reference iri of Resource |

### <a name="relation_items"></a>Link

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="replaces"></a>`Dataset > replaces`

**Requirement:** Optional

List of Datasets replaced by this Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](/standards/catalog/dcat-us-3/dataset/#root)    | A collection of data published or curated by one provider |

## <a name="rights"></a>`Dataset > rights`

**Requirement:** Recommended

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

| **Type** | `null or array of string` |
| -------- | ------------------------- |

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

| Each item of this array must be | Description                        |
| ------------------------------- | ---------------------------------- |
| [rights items](#rights_items)   | Full text of a statement of rights |

### <a name="rights_items"></a>Array Item

Full text of a statement of rights

| **Type** | `string` |
| -------- | -------- |

## <a name="rightsHolder"></a>`Dataset > rightsHolder`

**Requirement:** Optional

List of agents (organizations) holding rights on the Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](/standards/catalog/dcat-us-3/agents/#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="source"></a>`Dataset > source`

**Title:** data source

**Requirement:** Optional

List of related Datasets from which the described Dataset is derived

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](/standards/catalog/dcat-us-3/dataset/#root)    | A collection of data published or curated by one provider |

## <a name="spatial"></a>`Dataset > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Recommended

A geographic region or regions that are covered by the Dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                              |
| --------------------------------------------------- |
| [Null allowed when not required](#spatial_anyOf_i0) |
| [Location](#spatial_anyOf_i1)                       |
| [List of geographic regions](#spatial_anyOf_i2)     |

### <a name="spatial_anyOf_i0"></a>`Dataset > spatial > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="spatial_anyOf_i1"></a>`Dataset > spatial > anyOf > Location`

inline description of Location

| **Type**                  | `object`                                           |
| ------------------------- | -------------------------------------------------- |
| **Additional properties** | Any type allowed                                   |
| **Same definition as**    | [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) |

### <a name="spatial_anyOf_i2"></a>`Dataset > spatial > anyOf > List of geographic regions`

| **Type** | `array` |
| -------- | ------- |

| Each item of this array must be                    | Description                      |
| -------------------------------------------------- | -------------------------------- |
| [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) | A named place or geographic area |

## <a name="subject"></a>`Dataset > subject`

**Requirement:** Optional

List of primary subjects for the dataset, usually narrower than broad theme categories

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="temporal"></a>`Dataset > temporal`

**Title:** temporal coverage

**Requirement:** Recommended

Time periods covered by the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                              | Description                                                            |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) | Information about a specific time period with a start- and/or end-time |

## <a name="title"></a>`Dataset > title`

**Requirement:** Mandatory

Human-readable title of the dataset

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"Daily Climate Observations 2024"
```

```json
"National Climate Observations 2024"
```

## <a name="category"></a>`Dataset > category`

**Requirement:** Optional

List of high-level categories for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="hasQualityMeasurement"></a>`Dataset > hasQualityMeasurement`

**Title:** quality measurement

**Requirement:** Optional

List of quality measurements for the dataset (for example, completeness, accuracy, or timeliness) beyond spatial or temporal resolution

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                                         | Description                                                   |
| ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) | A measurement of a resource against a specific quality metric |

## <a name="page"></a>`Dataset > page`

**Title:** documentation

**Requirement:** Optional

List of pages or documents about this dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be              | Description                                           |
| -------------------------------------------- | ----------------------------------------------------- |
| [Document](/standards/catalog/dcat-us-3/quality-governance/#document) | A publication or other document related to a resource |

## <a name="qualifiedAttribution"></a>`Dataset > qualifiedAttribution`

**Requirement:** Optional

List of agents with specific responsibilities for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                       |
| -------------------------------------------------- | ------------------------------------------------- |
| [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) | A responsibility that an agent has for a resource |

## <a name="wasAttributedTo"></a>`Dataset > wasAttributedTo`

**Title:** attribution

**Requirement:** Optional

List of agents attributed to this dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](/standards/catalog/dcat-us-3/agents/#agent)      | A person, organization, software agent, or other entity involved with a resource |

## <a name="wasGeneratedBy"></a>`Dataset > wasGeneratedBy`

**Requirement:** Optional

List of activities that generated, or provide the business context for the creation of the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                                    |
| -------------------------------------------------- | -------------------------------------------------------------- |
| [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) | An activity related to creating, changing, or using a resource |

## <a name="wasUsedBy"></a>`Dataset > wasUsedBy`

**Title:** used by

**Requirement:** Optional

List of activities that used the Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                                    |
| -------------------------------------------------- | -------------------------------------------------------------- |
| [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) | An activity related to creating, changing, or using a resource |

## <a name="image"></a>`Dataset > image`

**Requirement:** Optional

Thumbnail image illustrating the dataset, especially useful for visual data such as maps, photos, or video

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of                                            |
| ------------------------------------------------- |
| [Null allowed when not required](#image_anyOf_i0) |
| [Link](#image_anyOf_i1)                           |

### <a name="image_anyOf_i0"></a>`Dataset > image > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="image_anyOf_i1"></a>`Dataset > image > anyOf > Link`

The link to the image

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="scopeNote"></a>`Dataset > scopeNote`

**Title:** usage note

**Requirement:** Optional

usage note for the dataset

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"This dataset contains raw observational data. For derived products such as monthly averages or climate normals, see related datasets."
```

---
**See Also:** (related supporting classes)
