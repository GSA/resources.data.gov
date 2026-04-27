---
title: DCAT-US 3.0: Dataset
layout: page
permalink: /standards/catalog/dcat-us-3/dataset/
primary_nav_section: Data Standards
category_name: Data standards
---
**Title:** Dataset

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

| Property                                                   | Type                    | Title/Description           |
| ---------------------------------------------------------- | ----------------------- | --------------------------- |
| - [@id](#@id )                                             | string                  | -                           |
| - [@type](#@type )                                         | string                  | -                           |
| - [otherIdentifier](#otherIdentifier )                     | null or array           | other identifier            |
| - [sample](#sample )                                       | null or array           | sample                      |
| - [status](#status )                                       | More than one type      | lifecycle status            |
| - [supportedSchema](#supportedSchema )                     | More than one type      | supported schema            |
| - [versionNotes](#versionNotes )                           | null or string          | version notes               |
| + [contactPoint](#contactPoint )                           | More than one type      | contact point               |
| - [distribution](#distribution )                           | null or array           | dataset distribution        |
| - [first](#first )                                         | More than one type      | first                       |
| - [hasCurrentVersion](#hasCurrentVersion )                 | More than one type      | current version             |
| - [hasVersion](#hasVersion )                               | null or array           | has version                 |
| - [inSeries](#inSeries )                                   | null or array           | in series                   |
| - [keyword](#keyword )                                     | null or array of string | keyword/tag                 |
| - [landingPage](#landingPage )                             | More than one type      | landing page                |
| - [previousVersion](#previousVersion )                     | More than one type      | previous version            |
| - [qualifiedRelation](#qualifiedRelation )                 | null or array           | qualified relation          |
| - [spatialResolutionInMeters](#spatialResolutionInMeters ) | null or string          | Spatial resolution (meters) |
| - [temporalResolution](#temporalResolution )               | null or string          | temporal resolution         |
| - [theme](#theme )                                         | null or array           | theme/category              |
| - [version](#version )                                     | null or string          | version                     |
| - [describedBy](#describedBy )                             | More than one type      | data dictionary             |
| - [liabilityStatement](#liabilityStatement )               | More than one type      | liability statement         |
| - [metadataDistribution](#metadataDistribution )           | null or array           | metadata distribution       |
| - [purpose](#purpose )                                     | null or string          | purpose                     |
| - [accessRights](#accessRights )                           | More than one type      | access rights               |
| - [accrualPeriodicity](#accrualPeriodicity )               | More than one type      | frequency                   |
| - [conformsTo](#conformsTo )                               | null or array           | conforms to                 |
| - [contributor](#contributor )                             | null or array           | contributor                 |
| - [created](#created )                                     | More than one type      | creation date               |
| - [creator](#creator )                                     | More than one type      | creator                     |
| + [description](#description )                             | string                  | description                 |
| - [hasPart](#hasPart )                                     | null or array           | has part                    |
| + [identifier](#identifier )                               | More than one type      | identifier                  |
| - [isReferencedBy](#isReferencedBy )                       | null or array of string | is referenced by            |
| - [issued](#issued )                                       | More than one type      | release date                |
| - [language](#language )                                   | More than one type      | language                    |
| - [modified](#modified )                                   | More than one type      | last modified               |
| - [provenance](#provenance )                               | null or array of string | provenance                  |
| + [publisher](#publisher )                                 | object                  | publisher                   |
| - [relation](#relation )                                   | null or array of string | related resource            |
| - [replaces](#replaces )                                   | null or array           | replaces                    |
| - [rights](#rights )                                       | null or array of string | rights                      |
| - [rightsHolder](#rightsHolder )                           | null or array           | rights holder               |
| - [source](#source )                                       | null or array           | data source                 |
| - [spatial](#spatial )                                     | More than one type      | spatial/geographic coverage |
| - [subject](#subject )                                     | null or array           | subject                     |
| - [temporal](#temporal )                                   | null or array           | temporal coverage           |
| + [title](#title )                                         | string                  | title                       |
| - [category](#category )                                   | null or array           | category                    |
| - [hasQualityMeasurement](#hasQualityMeasurement )         | null or array           | quality measurement         |
| - [page](#page )                                           | null or array           | documentation               |
| - [qualifiedAttribution](#qualifiedAttribution )           | null or array           | qualified attribution       |
| - [wasAttributedTo](#wasAttributedTo )                     | null or array           | attribution                 |
| - [wasGeneratedBy](#wasGeneratedBy )                       | null or array           | was generated by            |
| - [wasUsedBy](#wasUsedBy )                                 | null or array           | used by                     |
| - [image](#image )                                         | More than one type      | image                       |
| - [scopeNote](#scopeNote )                                 | null or string          | usage note                  |

## <a name="@id"></a>[Optional] Property `Dataset > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/datasets/national-climate-observations-2024"
```

## <a name="@type"></a>[Optional] Property `Dataset > @type`

**Requirement:** Optional

| **Type**    | `string`    |
| ----------- | ----------- |
| **Default** | `"Dataset"` |

## <a name="otherIdentifier"></a>[Optional] Property `Dataset > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

Additional identifiers for the dataset besides the main identifier, such as a DOI or other persistent ID

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be      | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [Identifier](#otherIdentifier_items) | A unique identifier and optionally it's scheme and other relevant information |

### <a name="otherIdentifier_items"></a>Dataset > otherIdentifier > Identifier

**Title:** Identifier

A unique identifier and optionally it's scheme and other relevant information

| **Type**                  | More than one type            |
| ------------------------- | ----------------------------- |
| **Additional properties** | Any type allowed              |
| **Defined in**            | [Identifier](./Identifier.md) |

## <a name="sample"></a>[Optional] Property `Dataset > sample`

**Title:** sample

**Requirement:** Optional

List of sample distributions for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------- |
| [Distribution](#sample_items)   | A specific representation of a dataset, such as a file, feed, or API response |

### <a name="sample_items"></a>Dataset > sample > Distribution

**Title:** Distribution

A specific representation of a dataset, such as a file, feed, or API response

| **Type**                  | `object`                          |
| ------------------------- | --------------------------------- |
| **Additional properties** | Any type allowed                  |
| **Defined in**            | [Distribution](./Distribution.md) |

## <a name="status"></a>[Optional] Property `Dataset > status`

**Title:** lifecycle status

**Requirement:** Optional

Lifecycle status of the dataset, such as completed, deprecated, under development, or withdrawn

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#status_anyOf_i0) |
| [Concept](#status_anyOf_i1)                        |

### <a name="status_anyOf_i0"></a>Property `Dataset > status > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="status_anyOf_i1"></a>Property `Dataset > status > anyOf > Concept`

**Title:** Concept

inline description of Concept

| **Type**                  | More than one type                                        |
| ------------------------- | --------------------------------------------------------- |
| **Additional properties** | Any type allowed                                          |
| **Same definition as**    | [Concept](#sample_items_representationTechnique_anyOf_i1) |

## <a name="supportedSchema"></a>[Optional] Property `Dataset > supportedSchema`

**Title:** supported schema

**Requirement:** Optional

supported schema for this dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                              |
| ----------------------------------------------------------- |
| [Null allowed when not required](#supportedSchema_anyOf_i0) |
| [Dataset](#supportedSchema_anyOf_i1)                        |

### <a name="supportedSchema_anyOf_i0"></a>Property `Dataset > supportedSchema > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="supportedSchema_anyOf_i1"></a>Property `Dataset > supportedSchema > anyOf > Dataset`

**Title:** Dataset

inline description of the supported schema

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="versionNotes"></a>[Optional] Property `Dataset > versionNotes`

**Title:** version notes

**Requirement:** Optional

Notes describing how this version differs from earlier versions of the dataset

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Initial release of 2024 climate observations data."
```

## <a name="contactPoint"></a>[Optional] Property `Dataset > contactPoint`

**Title:** contact point

**Requirement:** Optional

A contact point for questions about the Dataset (single contact or list). Include an email address that is continuously monitored

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Required**              | Yes                |
| **Additional properties** | Any type allowed   |

| Any of(Option)                             |
| ------------------------------------------ |
| [Kind](#contactPoint_anyOf_i0)             |
| [List of contacts](#contactPoint_anyOf_i1) |

### <a name="contactPoint_anyOf_i0"></a>Property `Dataset > contactPoint > anyOf > Kind`

**Title:** Kind

inline description of Kind

| **Type**                  | `object`                                                     |
| ------------------------- | ------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                             |
| **Same definition as**    | [Kind](#sample_items_accessService_items_contactPoint_items) |

### <a name="contactPoint_anyOf_i1"></a>Property `Dataset > contactPoint > anyOf > List of contacts`

**Title:** List of contacts

| **Type** | `array` |
| -------- | ------- |

| Each item of this array must be      | Description                                     |
| ------------------------------------ | ----------------------------------------------- |
| [Kind](#contactPoint_anyOf_i1_items) | Contact information for an individual or entity |

#### <a name="contactPoint_anyOf_i1_items"></a>Dataset > contactPoint > anyOf > List of contacts > Kind

**Title:** Kind

Contact information for an individual or entity

| **Type**                  | `object`                                                     |
| ------------------------- | ------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                             |
| **Same definition as**    | [Kind](#sample_items_accessService_items_contactPoint_items) |

## <a name="distribution"></a>[Optional] Property `Dataset > distribution`

**Title:** dataset distribution

**Requirement:** Optional

List of available distributions for the dataset. This can be omitted when no distribution is available yet.

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| [Distribution](#distribution_items) | A specific representation of a dataset, such as a file, feed, or API response |

### <a name="distribution_items"></a>Dataset > distribution > Distribution

**Title:** Distribution

A specific representation of a dataset, such as a file, feed, or API response

| **Type**                  | `object`                      |
| ------------------------- | ----------------------------- |
| **Additional properties** | Any type allowed              |
| **Same definition as**    | [Distribution](#sample_items) |

## <a name="first"></a>[Optional] Property `Dataset > first`

**Title:** first

**Requirement:** Optional

the first item of the sequence the dataset belongs to

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                    |
| ------------------------------------------------- |
| [Null allowed when not required](#first_anyOf_i0) |
| [Dataset](#first_anyOf_i1)                        |

### <a name="first_anyOf_i0"></a>Property `Dataset > first > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="first_anyOf_i1"></a>Property `Dataset > first > anyOf > Dataset`

**Title:** Dataset

inline description of Dataset

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="hasCurrentVersion"></a>[Optional] Property `Dataset > hasCurrentVersion`

**Title:** current version

**Requirement:** Optional

reference to the current (latest) version of a dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                                |
| ------------------------------------------------------------- |
| [Null allowed when not required](#hasCurrentVersion_anyOf_i0) |
| [Dataset](#hasCurrentVersion_anyOf_i1)                        |

### <a name="hasCurrentVersion_anyOf_i0"></a>Property `Dataset > hasCurrentVersion > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="hasCurrentVersion_anyOf_i1"></a>Property `Dataset > hasCurrentVersion > anyOf > Dataset`

**Title:** Dataset

inline description of Dataset

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="hasVersion"></a>[Optional] Property `Dataset > hasVersion`

**Title:** has version

**Requirement:** Optional

List of related Datasets that are a version, edition, or adaptation of the described Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](#hasVersion_items)    | A collection of data published or curated by one provider |

### <a name="hasVersion_items"></a>Dataset > hasVersion > Dataset

**Title:** Dataset

A collection of data published or curated by one provider

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="inSeries"></a>[Optional] Property `Dataset > inSeries`

**Title:** in series

**Requirement:** Optional

Dataset series this dataset belongs to

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be  | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| [DatasetSeries](#inSeries_items) | A group of related datasets that are published separately |

### <a name="inSeries_items"></a>Dataset > inSeries > DatasetSeries

**Title:** DatasetSeries

A group of related datasets that are published separately

| **Type**                  | `object`                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                      |
| **Same definition as**    | [DatasetSeries](#sample_items_accessService_items_servesDataset_items_inSeries_items) |

## <a name="keyword"></a>[Optional] Property `Dataset > keyword`

**Title:** keyword/tag

**Requirement:** Optional

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

### <a name="keyword_items"></a>Dataset > keyword > Non-empty string

**Title:** Non-empty string

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="landingPage"></a>[Optional] Property `Dataset > landingPage`

**Title:** landing page

**Requirement:** Optional

A web page from the original data provider that gives access to the Dataset, its Distributions, and related information

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                          |
| ------------------------------------------------------- |
| [Null allowed when not required](#landingPage_anyOf_i0) |
| [Document](#landingPage_anyOf_i1)                       |

### <a name="landingPage_anyOf_i0"></a>Property `Dataset > landingPage > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="landingPage_anyOf_i1"></a>Property `Dataset > landingPage > anyOf > Document`

**Title:** Document

inline description of Document

| **Type**                  | `object`                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                       |
| **Same definition as**    | [Document](#sample_items_accessService_items_servesDataset_items_landingPage_anyOf_i1) |

## <a name="previousVersion"></a>[Optional] Property `Dataset > previousVersion`

**Title:** previous version

**Requirement:** Optional

reference to the previous dataset version

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                              |
| ----------------------------------------------------------- |
| [Null allowed when not required](#previousVersion_anyOf_i0) |
| [Dataset](#previousVersion_anyOf_i1)                        |

### <a name="previousVersion_anyOf_i0"></a>Property `Dataset > previousVersion > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="previousVersion_anyOf_i1"></a>Property `Dataset > previousVersion > anyOf > Dataset`

**Title:** Dataset

inline description of Dataset

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="qualifiedRelation"></a>[Optional] Property `Dataset > qualifiedRelation`

**Title:** qualified relation

**Requirement:** Optional

Detailed relationship between the dataset and another resource, including the role of that relationship

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be          | Description                                                         |
| ---------------------------------------- | ------------------------------------------------------------------- |
| [Relationship](#qualifiedRelation_items) | Additional information about how one resource is related to another |

### <a name="qualifiedRelation_items"></a>Dataset > qualifiedRelation > Relationship

**Title:** Relationship

Additional information about how one resource is related to another

| **Type**                  | `object`                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                              |
| **Same definition as**    | [Relationship](#sample_items_accessService_items_servesDataset_items_qualifiedRelation_items) |

## <a name="spatialResolutionInMeters"></a>[Optional] Property `Dataset > spatialResolutionInMeters`

**Title:** Spatial resolution (meters)

**Requirement:** Optional

Smallest spatial distance between data points, in meters, represented as a single value

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"1000"
```

## <a name="temporalResolution"></a>[Optional] Property `Dataset > temporalResolution`

**Title:** temporal resolution

**Requirement:** Optional

Smallest time interval between data points, using xsd:duration format (for example, P1D)

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"P1D"
```

## <a name="theme"></a>[Optional] Property `Dataset > theme`

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#theme_items)         | A controlled term or label, optionally drawn from a concept scheme |

### <a name="theme_items"></a>Dataset > theme > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                        |
| ------------------------- | --------------------------------------------------------- |
| **Additional properties** | Any type allowed                                          |
| **Same definition as**    | [Concept](#sample_items_representationTechnique_anyOf_i1) |

## <a name="version"></a>[Optional] Property `Dataset > version`

**Title:** version

**Requirement:** Optional

The version indicator (name or identifier) of a resource

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"2024.1"
```

## <a name="describedBy"></a>[Optional] Property `Dataset > describedBy`

**Title:** data dictionary

**Requirement:** Optional

A distribution describing the Data Dictionary for this dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                          |
| ------------------------------------------------------- |
| [Null allowed when not required](#describedBy_anyOf_i0) |
| [Distribution](#describedBy_anyOf_i1)                   |

### <a name="describedBy_anyOf_i0"></a>Property `Dataset > describedBy > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="describedBy_anyOf_i1"></a>Property `Dataset > describedBy > anyOf > Distribution`

**Title:** Distribution

inline description of Distribution

| **Type**                  | `object`                      |
| ------------------------- | ----------------------------- |
| **Additional properties** | Any type allowed              |
| **Same definition as**    | [Distribution](#sample_items) |

## <a name="liabilityStatement"></a>[Optional] Property `Dataset > liabilityStatement`

**Title:** liability statement

**Requirement:** Optional

A liability statement about the dataset that may clarify limitations of responsibility, qualifications on the accuracy, reliability, and completeness of the data, or absence of endorsement by the data publisher or provider, among other considerations

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"This dataset is provided as-is without warranty of any kind. Users are responsible for determining fitness for their intended use."
```

| Any of(Option)                                                 |
| -------------------------------------------------------------- |
| [Null allowed when not required](#liabilityStatement_anyOf_i0) |
| [item 1](#liabilityStatement_anyOf_i1)                         |

### <a name="liabilityStatement_anyOf_i0"></a>Property `Dataset > liabilityStatement > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="liabilityStatement_anyOf_i1"></a>Property `Dataset > liabilityStatement > anyOf > item 1`

Full text of the liability statement

| **Type** | `string` |
| -------- | -------- |

## <a name="metadataDistribution"></a>[Optional] Property `Dataset > metadataDistribution`

**Title:** metadata distribution

**Requirement:** Optional

Distribution of the original metadata document this dataset was derived from

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be             | Description                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| [Distribution](#metadataDistribution_items) | A specific representation of a dataset, such as a file, feed, or API response |

### <a name="metadataDistribution_items"></a>Dataset > metadataDistribution > Distribution

**Title:** Distribution

A specific representation of a dataset, such as a file, feed, or API response

| **Type**                  | `object`                      |
| ------------------------- | ----------------------------- |
| **Additional properties** | Any type allowed              |
| **Same definition as**    | [Distribution](#sample_items) |

## <a name="purpose"></a>[Optional] Property `Dataset > purpose`

**Title:** purpose

**Requirement:** Optional

The purpose of the dataset

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"To provide comprehensive, high-quality climate observations for research, planning, and decision-making related to weather and climate."
```

## <a name="accessRights"></a>[Optional] Property `Dataset > accessRights`

**Title:** access rights

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

| Any of(Option)                                           |
| -------------------------------------------------------- |
| [Null allowed when not required](#accessRights_anyOf_i0) |
| [item 1](#accessRights_anyOf_i1)                         |

### <a name="accessRights_anyOf_i0"></a>Property `Dataset > accessRights > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="accessRights_anyOf_i1"></a>Property `Dataset > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="accrualPeriodicity"></a>[Optional] Property `Dataset > accrualPeriodicity`

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

| Any of(Option)                                                 |
| -------------------------------------------------------------- |
| [Null allowed when not required](#accrualPeriodicity_anyOf_i0) |
| [item 1](#accrualPeriodicity_anyOf_i1)                         |
| [item 2](#accrualPeriodicity_anyOf_i2)                         |
| [item 3](#accrualPeriodicity_anyOf_i3)                         |

### <a name="accrualPeriodicity_anyOf_i0"></a>Property `Dataset > accrualPeriodicity > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="accrualPeriodicity_anyOf_i1"></a>Property `Dataset > accrualPeriodicity > anyOf > item 1`

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

### <a name="accrualPeriodicity_anyOf_i2"></a>Property `Dataset > accrualPeriodicity > anyOf > item 2`

ISO-8601 Maintenance Frequency code for recurring values, see https://www.iso.org/standard/70907.html

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                   |
| --------------------------------- | ----------------------------------------------------------------- |
| **Must match regular expression** | ```^R/P.+$``` [Test](https://regex101.com/?regex=%5ER%2FP.%2B%24) |

### <a name="accrualPeriodicity_anyOf_i3"></a>Property `Dataset > accrualPeriodicity > anyOf > item 3`

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

## <a name="conformsTo"></a>[Optional] Property `Dataset > conformsTo`

**Title:** conforms to

**Requirement:** Optional

List of standards, schemas, or profiles the dataset follows

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| [Standard](#conformsTo_items)   | A standard or specification that another resource conforms to |

### <a name="conformsTo_items"></a>Dataset > conformsTo > Standard

**Title:** Standard

A standard or specification that another resource conforms to

| **Type**                  | `object`                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                        |
| **Same definition as**    | [Standard](#sample_items_accessService_items_servesDataset_items_landingPage_anyOf_i1_conformsTo_items) |

## <a name="contributor"></a>[Optional] Property `Dataset > contributor`

**Title:** contributor

**Requirement:** Optional

List of agents contributing to the Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](#contributor_items)     | A person, organization, software agent, or other entity involved with a resource |

### <a name="contributor_items"></a>Dataset > contributor > Agent

**Title:** Agent

A person, organization, software agent, or other entity involved with a resource

| **Type**                  | `object`                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                                                 |
| **Same definition as**    | [Agent](#sample_items_accessService_items_servesDataset_items_inSeries_items_publisher_anyOf_i1) |

## <a name="created"></a>[Optional] Property `Dataset > created`

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

| Any of(Option)                                      |
| --------------------------------------------------- |
| [Null allowed when not required](#created_anyOf_i0) |
| [Date string](#created_anyOf_i1)                    |

### <a name="created_anyOf_i0"></a>Property `Dataset > created > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="created_anyOf_i1"></a>Property `Dataset > created > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                       |
| ------------------------------------ |
| [item 0](#created_anyOf_i1_anyOf_i0) |
| [item 1](#created_anyOf_i1_anyOf_i1) |
| [item 2](#created_anyOf_i1_anyOf_i2) |
| [item 3](#created_anyOf_i1_anyOf_i3) |

#### <a name="created_anyOf_i1_anyOf_i0"></a>Property `Dataset > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="created_anyOf_i1_anyOf_i1"></a>Property `Dataset > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="created_anyOf_i1_anyOf_i2"></a>Property `Dataset > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="created_anyOf_i1_anyOf_i3"></a>Property `Dataset > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="creator"></a>[Optional] Property `Dataset > creator`

**Title:** creator

**Requirement:** Optional

Person or organization responsible for creating the dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                      |
| --------------------------------------------------- |
| [Null allowed when not required](#creator_anyOf_i0) |
| [Agent](#creator_anyOf_i1)                          |

### <a name="creator_anyOf_i0"></a>Property `Dataset > creator > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="creator_anyOf_i1"></a>Property `Dataset > creator > anyOf > Agent`

**Title:** Agent

inline description of Agent

| **Type**                  | `object`                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                                                 |
| **Same definition as**    | [Agent](#sample_items_accessService_items_servesDataset_items_inSeries_items_publisher_anyOf_i1) |

## <a name="description"></a>[Optional] Property `Dataset > description`

**Title:** description

**Requirement:** Optional

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

## <a name="hasPart"></a>[Optional] Property `Dataset > hasPart`

**Title:** has part

**Requirement:** Optional

List of related datasets that are part of the described dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](#hasPart_items)       | A collection of data published or curated by one provider |

### <a name="hasPart_items"></a>Dataset > hasPart > Dataset

**Title:** Dataset

A collection of data published or curated by one provider

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="identifier"></a>[Optional] Property `Dataset > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Required**              | Yes                |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>Property `Dataset > identifier > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>Property `Dataset > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                   |
| ------------------------- | ------------------------------------ |
| **Additional properties** | Any type allowed                     |
| **Same definition as**    | [Identifier](#otherIdentifier_items) |

## <a name="isReferencedBy"></a>[Optional] Property `Dataset > isReferencedBy`

**Title:** is referenced by

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

### <a name="isReferencedBy_items"></a>Dataset > isReferencedBy > Link

**Title:** Link

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="issued"></a>[Optional] Property `Dataset > issued`

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

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#issued_anyOf_i0) |
| [Date string](#issued_anyOf_i1)                    |

### <a name="issued_anyOf_i0"></a>Property `Dataset > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>Property `Dataset > issued > anyOf > Date string`

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

#### <a name="issued_anyOf_i1_anyOf_i0"></a>Property `Dataset > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>Property `Dataset > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>Property `Dataset > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>Property `Dataset > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="language"></a>[Optional] Property `Dataset > language`

**Title:** language

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

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#language_anyOf_i0) |
| [Language code](#language_anyOf_i1)                  |
| [List of languages](#language_anyOf_i2)              |

### <a name="language_anyOf_i0"></a>Property `Dataset > language > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>Property `Dataset > language > anyOf > Language code`

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>Property `Dataset > language > anyOf > List of languages`

**Title:** List of languages

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#language_anyOf_i2_items) | -           |

#### <a name="language_anyOf_i2_items"></a>Dataset > language > anyOf > List of languages > Language code

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="modified"></a>[Optional] Property `Dataset > modified`

**Title:** last modified

**Requirement:** Optional

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

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#modified_anyOf_i0) |
| [Date string](#modified_anyOf_i1)                    |

### <a name="modified_anyOf_i0"></a>Property `Dataset > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>Property `Dataset > modified > anyOf > Date string`

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

#### <a name="modified_anyOf_i1_anyOf_i0"></a>Property `Dataset > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>Property `Dataset > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>Property `Dataset > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>Property `Dataset > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="provenance"></a>[Optional] Property `Dataset > provenance`

**Title:** provenance

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

### <a name="provenance_items"></a>Dataset > provenance > provenance items

Full text of the provenance statement

| **Type** | `string` |
| -------- | -------- |

## <a name="publisher"></a>[Optional] Property `Dataset > publisher`

**Title:** publisher

**Requirement:** Optional

Organization responsible for publishing and making the dataset available

| **Type**                  | `object`                          |
| ------------------------- | --------------------------------- |
| **Required**              | Yes                               |
| **Additional properties** | Any type allowed                  |
| **Defined in**            | [Organization](./Organization.md) |

## <a name="relation"></a>[Optional] Property `Dataset > relation`

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

### <a name="relation_items"></a>Dataset > relation > Link

**Title:** Link

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="replaces"></a>[Optional] Property `Dataset > replaces`

**Title:** replaces

**Requirement:** Optional

List of Datasets replaced by this Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](#replaces_items)      | A collection of data published or curated by one provider |

### <a name="replaces_items"></a>Dataset > replaces > Dataset

**Title:** Dataset

A collection of data published or curated by one provider

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="rights"></a>[Optional] Property `Dataset > rights`

**Title:** rights

**Requirement:** Optional

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

### <a name="rights_items"></a>Dataset > rights > rights items

Full text of a statement of rights

| **Type** | `string` |
| -------- | -------- |

## <a name="rightsHolder"></a>[Optional] Property `Dataset > rightsHolder`

**Title:** rights holder

**Requirement:** Optional

List of agents (organizations) holding rights on the Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](#rightsHolder_items) | An organization involved with a resource, including parent or child organizations |

### <a name="rightsHolder_items"></a>Dataset > rightsHolder > Organization

**Title:** Organization

An organization involved with a resource, including parent or child organizations

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Organization](#otherIdentifier_items_anyOf_i1_creator_anyOf_i1) |

## <a name="source"></a>[Optional] Property `Dataset > source`

**Title:** data source

**Requirement:** Optional

List of related Datasets from which the described Dataset is derived

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](#source_items)        | A collection of data published or curated by one provider |

### <a name="source_items"></a>Dataset > source > Dataset

**Title:** Dataset

A collection of data published or curated by one provider

| **Type**                  | `object`                                                         |
| ------------------------- | ---------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                 |
| **Same definition as**    | [Dataset](#sample_items_accessService_items_servesDataset_items) |

## <a name="spatial"></a>[Optional] Property `Dataset > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Optional

A geographic region or regions that are covered by the Dataset

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                      |
| --------------------------------------------------- |
| [Null allowed when not required](#spatial_anyOf_i0) |
| [Location](#spatial_anyOf_i1)                       |
| [List of geographic regions](#spatial_anyOf_i2)     |

### <a name="spatial_anyOf_i0"></a>Property `Dataset > spatial > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="spatial_anyOf_i1"></a>Property `Dataset > spatial > anyOf > Location`

**Title:** Location

inline description of Location

| **Type**                  | `object`                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                               |
| **Same definition as**    | [Location](#sample_items_accessService_items_servesDataset_items_inSeries_items_spatial_items) |

### <a name="spatial_anyOf_i2"></a>Property `Dataset > spatial > anyOf > List of geographic regions`

**Title:** List of geographic regions

| **Type** | `array` |
| -------- | ------- |

| Each item of this array must be     | Description                      |
| ----------------------------------- | -------------------------------- |
| [Location](#spatial_anyOf_i2_items) | A named place or geographic area |

#### <a name="spatial_anyOf_i2_items"></a>Dataset > spatial > anyOf > List of geographic regions > Location

**Title:** Location

A named place or geographic area

| **Type**                  | `object`                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                               |
| **Same definition as**    | [Location](#sample_items_accessService_items_servesDataset_items_inSeries_items_spatial_items) |

## <a name="subject"></a>[Optional] Property `Dataset > subject`

**Title:** subject

**Requirement:** Optional

List of primary subjects for the dataset, usually narrower than broad theme categories

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#subject_items)       | A controlled term or label, optionally drawn from a concept scheme |

### <a name="subject_items"></a>Dataset > subject > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                        |
| ------------------------- | --------------------------------------------------------- |
| **Additional properties** | Any type allowed                                          |
| **Same definition as**    | [Concept](#sample_items_representationTechnique_anyOf_i1) |

## <a name="temporal"></a>[Optional] Property `Dataset > temporal`

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| [PeriodOfTime](#temporal_items) | Information about a specific time period with a start- and/or end-time |

### <a name="temporal_items"></a>Dataset > temporal > PeriodOfTime

**Title:** PeriodOfTime

Information about a specific time period with a start- and/or end-time

| **Type**                  | More than one type                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                    |
| **Same definition as**    | [PeriodOfTime](#sample_items_accessService_items_servesDataset_items_inSeries_items_temporal_items) |

## <a name="title"></a>[Optional] Property `Dataset > title`

**Title:** title

**Requirement:** Optional

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

## <a name="category"></a>[Optional] Property `Dataset > category`

**Title:** category

**Requirement:** Optional

List of high-level categories for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#category_items)      | A controlled term or label, optionally drawn from a concept scheme |

### <a name="category_items"></a>Dataset > category > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                        |
| ------------------------- | --------------------------------------------------------- |
| **Additional properties** | Any type allowed                                          |
| **Same definition as**    | [Concept](#sample_items_representationTechnique_anyOf_i1) |

## <a name="hasQualityMeasurement"></a>[Optional] Property `Dataset > hasQualityMeasurement`

**Title:** quality measurement

**Requirement:** Optional

List of quality measurements for the dataset (for example, completeness, accuracy, or timeliness) beyond spatial or temporal resolution

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                                   |
| -------------------------------------------------- | ------------------------------------------------------------- |
| [QualityMeasurement](#hasQualityMeasurement_items) | A measurement of a resource against a specific quality metric |

### <a name="hasQualityMeasurement_items"></a>Dataset > hasQualityMeasurement > QualityMeasurement

**Title:** QualityMeasurement

A measurement of a resource against a specific quality metric

| **Type**                  | `object`                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                        |
| **Same definition as**    | [QualityMeasurement](#sample_items_accessService_items_servesDataset_items_hasQualityMeasurement_items) |

## <a name="page"></a>[Optional] Property `Dataset > page`

**Title:** documentation

**Requirement:** Optional

List of pages or documents about this dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| [Document](#page_items)         | A publication or other document related to a resource |

### <a name="page_items"></a>Dataset > page > Document

**Title:** Document

A publication or other document related to a resource

| **Type**                  | `object`                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                       |
| **Same definition as**    | [Document](#sample_items_accessService_items_servesDataset_items_landingPage_anyOf_i1) |

## <a name="qualifiedAttribution"></a>[Optional] Property `Dataset > qualifiedAttribution`

**Title:** qualified attribution

**Requirement:** Optional

List of agents with specific responsibilities for the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be            | Description                                       |
| ------------------------------------------ | ------------------------------------------------- |
| [Attribution](#qualifiedAttribution_items) | A responsibility that an agent has for a resource |

### <a name="qualifiedAttribution_items"></a>Dataset > qualifiedAttribution > Attribution

**Title:** Attribution

A responsibility that an agent has for a resource

| **Type**                  | `object`                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                |
| **Same definition as**    | [Attribution](#sample_items_accessService_items_servesDataset_items_qualifiedAttribution_items) |

## <a name="wasAttributedTo"></a>[Optional] Property `Dataset > wasAttributedTo`

**Title:** attribution

**Requirement:** Optional

List of agents attributed to this dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](#wasAttributedTo_items) | A person, organization, software agent, or other entity involved with a resource |

### <a name="wasAttributedTo_items"></a>Dataset > wasAttributedTo > Agent

**Title:** Agent

A person, organization, software agent, or other entity involved with a resource

| **Type**                  | `object`                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                                                 |
| **Same definition as**    | [Agent](#sample_items_accessService_items_servesDataset_items_inSeries_items_publisher_anyOf_i1) |

## <a name="wasGeneratedBy"></a>[Optional] Property `Dataset > wasGeneratedBy`

**Title:** was generated by

**Requirement:** Optional

List of activities that generated, or provide the business context for the creation of the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be   | Description                                                    |
| --------------------------------- | -------------------------------------------------------------- |
| [Activity](#wasGeneratedBy_items) | An activity related to creating, changing, or using a resource |

### <a name="wasGeneratedBy_items"></a>Dataset > wasGeneratedBy > Activity

**Title:** Activity

An activity related to creating, changing, or using a resource

| **Type**                  | `object`                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                       |
| **Same definition as**    | [Activity](#sample_items_accessService_items_servesDataset_items_wasGeneratedBy_items) |

## <a name="wasUsedBy"></a>[Optional] Property `Dataset > wasUsedBy`

**Title:** used by

**Requirement:** Optional

List of activities that used the Dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| [Activity](#wasUsedBy_items)    | An activity related to creating, changing, or using a resource |

### <a name="wasUsedBy_items"></a>Dataset > wasUsedBy > Activity

**Title:** Activity

An activity related to creating, changing, or using a resource

| **Type**                  | `object`                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                       |
| **Same definition as**    | [Activity](#sample_items_accessService_items_servesDataset_items_wasGeneratedBy_items) |

## <a name="image"></a>[Optional] Property `Dataset > image`

**Title:** image

**Requirement:** Optional

Thumbnail image illustrating the dataset, especially useful for visual data such as maps, photos, or video

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                    |
| ------------------------------------------------- |
| [Null allowed when not required](#image_anyOf_i0) |
| [Link](#image_anyOf_i1)                           |

### <a name="image_anyOf_i0"></a>Property `Dataset > image > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="image_anyOf_i1"></a>Property `Dataset > image > anyOf > Link`

**Title:** Link

The link to the image

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="scopeNote"></a>[Optional] Property `Dataset > scopeNote`

**Title:** usage note

**Requirement:** Optional

usage note for the dataset

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"This dataset contains raw observational data. For derived products such as monthly averages or climate normals, see related datasets."
```
