---
title: DCAT-US 3.0: Dataset Series
layout: page
permalink: /standards/catalog/dcat-us-3/dataset-series/
primary_nav_section: Data Standards
category_name: Data standards
---
**Title:** DatasetSeries

A group of related datasets that are published separately

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "DatasetSeries",
    "title": "Annual Climate Observations",
    "description": "A series of annual climate observation datasets from monitoring stations.",
    "contactPoint": [
        {
            "fn": "Climate Data Support",
            "hasEmail": "mailto:climate@example.gov"
        }
    ],
    "publisher": {
        "name": "National Climate Data Center"
    },
    "accrualPeriodicity": "annually",
    "issued": "2000-01-15",
    "modified": "2024-12-01",
    "first": {
        "@id": "https://example.gov/datasets/climate-observations-2000",
        "@type": "Dataset",
        "title": "Climate Observations 2000",
        "description": "First year of climate observations.",
        "contactPoint": {
            "fn": "Climate Support",
            "hasEmail": "mailto:climate@example.gov"
        },
        "publisher": {
            "name": "National Climate Data Center"
        },
        "identifier": "https://example.gov/datasets/series-first"
    },
    "last": {
        "@id": "https://example.gov/datasets/climate-observations-2024",
        "@type": "Dataset",
        "title": "Climate Observations 2024",
        "description": "Latest year of climate observations.",
        "contactPoint": {
            "fn": "Climate Support",
            "hasEmail": "mailto:climate@example.gov"
        },
        "publisher": {
            "name": "National Climate Data Center"
        },
        "identifier": "https://example.gov/datasets/series-last"
    },
    "seriesMember": [
        {
            "@id": "https://example.gov/datasets/climate-observations-2022",
            "@type": "Dataset",
            "title": "Climate Observations 2022",
            "description": "Climate observations for 2022.",
            "contactPoint": {
                "fn": "Climate Support",
                "hasEmail": "mailto:climate@example.gov"
            },
            "publisher": {
                "name": "National Climate Data Center"
            },
            "identifier": "https://example.gov/datasets/series-member-001"
        },
        {
            "@id": "https://example.gov/datasets/climate-observations-2023",
            "@type": "Dataset",
            "title": "Climate Observations 2023",
            "description": "Climate observations for 2023.",
            "contactPoint": {
                "fn": "Climate Support",
                "hasEmail": "mailto:climate@example.gov"
            },
            "publisher": {
                "name": "National Climate Data Center"
            },
            "identifier": "https://example.gov/datasets/series-member-002"
        },
        {
            "@id": "https://example.gov/datasets/climate-observations-2024",
            "@type": "Dataset",
            "title": "Climate Observations 2024",
            "description": "Climate observations for 2024.",
            "contactPoint": {
                "fn": "Climate Support",
                "hasEmail": "mailto:climate@example.gov"
            },
            "publisher": {
                "name": "National Climate Data Center"
            },
            "identifier": "https://example.gov/datasets/series-member-003"
        }
    ],
    "spatial": [
        {
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
        }
    ],
    "temporal": [
        {
            "@type": "PeriodOfTime",
            "startDate": "2000-01-01",
            "endDate": "2024-12-31"
        }
    ]
}
```

| Property                                     | Type               | Title/Description           |
| -------------------------------------------- | ------------------ | --------------------------- |
| - [@id](#@id )                               | string             | -                           |
| - [@type](#@type )                           | string             | -                           |
| - [contactPoint](#contactPoint )             | null or array      | contact point               |
| - [first](#first )                           | More than one type | first                       |
| - [last](#last )                             | More than one type | last                        |
| - [seriesMember](#seriesMember )             | null or array      | series member               |
| - [accrualPeriodicity](#accrualPeriodicity ) | More than one type | frequency                   |
| + [description](#description )               | string             | description                 |
| - [issued](#issued )                         | More than one type | release date                |
| - [modified](#modified )                     | More than one type | update/modification date    |
| - [publisher](#publisher )                   | More than one type | publisher                   |
| - [spatial](#spatial )                       | null or array      | spatial/geographic coverage |
| - [temporal](#temporal )                     | null or array      | temporal coverage           |
| + [title](#title )                           | string             | title                       |

## <a name="@id"></a>[Optional] Property `DatasetSeries > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/series/annual-climate-observations"
```

## <a name="@type"></a>[Optional] Property `DatasetSeries > @type`

**Requirement:** Optional

| **Type**    | `string`          |
| ----------- | ----------------- |
| **Default** | `"DatasetSeries"` |

## <a name="contactPoint"></a>[Optional] Property `DatasetSeries > contactPoint`

**Title:** contact point

**Requirement:** Optional

List of contacts people can use to ask questions or send feedback about the dataset series

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](#contactPoint_items)     | Contact information for an individual or entity |

### <a name="contactPoint_items"></a>DatasetSeries > contactPoint > Kind

**Title:** Kind

Contact information for an individual or entity

| **Type**                  | `object`          |
| ------------------------- | ----------------- |
| **Additional properties** | Any type allowed  |
| **Defined in**            | [Kind](./Kind.md) |

## <a name="first"></a>[Optional] Property `DatasetSeries > first`

**Title:** first

**Requirement:** Optional

The first dataset in an ordered dataset series

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                    |
| ------------------------------------------------- |
| [Null allowed when not required](#first_anyOf_i0) |
| [Dataset](#first_anyOf_i1)                        |

### <a name="first_anyOf_i0"></a>Property `DatasetSeries > first > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="first_anyOf_i1"></a>Property `DatasetSeries > first > anyOf > Dataset`

**Title:** Dataset

inline description of the first dataset

| **Type**                  | `object`                |
| ------------------------- | ----------------------- |
| **Additional properties** | Any type allowed        |
| **Defined in**            | [Dataset](./Dataset.md) |

## <a name="last"></a>[Optional] Property `DatasetSeries > last`

**Title:** last

**Requirement:** Optional

The last dataset in an ordered dataset series

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                   |
| ------------------------------------------------ |
| [Null allowed when not required](#last_anyOf_i0) |
| [Dataset](#last_anyOf_i1)                        |

### <a name="last_anyOf_i0"></a>Property `DatasetSeries > last > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="last_anyOf_i1"></a>Property `DatasetSeries > last > anyOf > Dataset`

**Title:** Dataset

inline description of the last dataset

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Additional properties** | Any type allowed           |
| **Same definition as**    | [Dataset](#first_anyOf_i1) |

## <a name="seriesMember"></a>[Optional] Property `DatasetSeries > seriesMember`

**Title:** series member

**Requirement:** Optional

List of members of the Dataset Series

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](#seriesMember_items)  | A collection of data published or curated by one provider |

### <a name="seriesMember_items"></a>DatasetSeries > seriesMember > Dataset

**Title:** Dataset

A collection of data published or curated by one provider

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Additional properties** | Any type allowed           |
| **Same definition as**    | [Dataset](#first_anyOf_i1) |

## <a name="accrualPeriodicity"></a>[Optional] Property `DatasetSeries > accrualPeriodicity`

**Title:** frequency

**Requirement:** Optional

The frequency at which the Dataset Series is updated. This is the series update frequency, not necessarily each dataset's frequency

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"annually"
```

| Any of(Option)                                                 |
| -------------------------------------------------------------- |
| [Null allowed when not required](#accrualPeriodicity_anyOf_i0) |
| [item 1](#accrualPeriodicity_anyOf_i1)                         |
| [item 2](#accrualPeriodicity_anyOf_i2)                         |
| [item 3](#accrualPeriodicity_anyOf_i3)                         |

### <a name="accrualPeriodicity_anyOf_i0"></a>Property `DatasetSeries > accrualPeriodicity > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="accrualPeriodicity_anyOf_i1"></a>Property `DatasetSeries > accrualPeriodicity > anyOf > item 1`

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

### <a name="accrualPeriodicity_anyOf_i2"></a>Property `DatasetSeries > accrualPeriodicity > anyOf > item 2`

ISO-8601 Maintenance Frequency code for recurring values, see https://www.iso.org/standard/70907.html

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                   |
| --------------------------------- | ----------------------------------------------------------------- |
| **Must match regular expression** | ```^R/P.+$``` [Test](https://regex101.com/?regex=%5ER%2FP.%2B%24) |

### <a name="accrualPeriodicity_anyOf_i3"></a>Property `DatasetSeries > accrualPeriodicity > anyOf > item 3`

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

## <a name="description"></a>[Optional] Property `DatasetSeries > description`

**Title:** description

**Requirement:** Optional

Plain-language summary of the dataset series

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"An annual series of comprehensive climate observation datasets collected from monitoring stations across the United States. Each dataset in the series covers one calendar year of daily observations."
```

## <a name="issued"></a>[Optional] Property `DatasetSeries > issued`

**Title:** release date

**Requirement:** Optional

Date when the Dataset Series was formally established or published, not the release date of the oldest dataset in the series

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"2000-01-15"
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

### <a name="issued_anyOf_i0"></a>Property `DatasetSeries > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>Property `DatasetSeries > issued > anyOf > Date string`

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

#### <a name="issued_anyOf_i1_anyOf_i0"></a>Property `DatasetSeries > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>Property `DatasetSeries > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>Property `DatasetSeries > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>Property `DatasetSeries > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="modified"></a>[Optional] Property `DatasetSeries > modified`

**Title:** update/modification date

**Requirement:** Optional

Most recent date when the Dataset Series changed, not the modified date of the newest dataset in the series

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"2024-12-01"
```

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

### <a name="modified_anyOf_i0"></a>Property `DatasetSeries > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>Property `DatasetSeries > modified > anyOf > Date string`

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

#### <a name="modified_anyOf_i1_anyOf_i0"></a>Property `DatasetSeries > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>Property `DatasetSeries > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>Property `DatasetSeries > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>Property `DatasetSeries > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="publisher"></a>[Optional] Property `DatasetSeries > publisher`

**Title:** publisher

**Requirement:** Optional

Organization responsible for maintaining the Dataset Series as a coherent series; this may differ from publishers of individual datasets

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                        |
| ----------------------------------------------------- |
| [Null allowed when not required](#publisher_anyOf_i0) |
| [Agent](#publisher_anyOf_i1)                          |

### <a name="publisher_anyOf_i0"></a>Property `DatasetSeries > publisher > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="publisher_anyOf_i1"></a>Property `DatasetSeries > publisher > anyOf > Agent`

**Title:** Agent

inline description of publisher

| **Type**                  | `object`                                                                |
| ------------------------- | ----------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                        |
| **Same definition as**    | [Agent](#first_anyOf_i1_sample_items_accessService_items_creator_items) |

## <a name="spatial"></a>[Optional] Property `DatasetSeries > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Optional

A geographic region that is covered by the Dataset Series

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                      |
| ------------------------------- | -------------------------------- |
| [Location](#spatial_items)      | A named place or geographic area |

### <a name="spatial_items"></a>DatasetSeries > spatial > Location

**Title:** Location

A named place or geographic area

| **Type**                  | `object`                                                                   |
| ------------------------- | -------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                           |
| **Same definition as**    | [Location](#first_anyOf_i1_sample_items_accessService_items_spatial_items) |

## <a name="temporal"></a>[Optional] Property `DatasetSeries > temporal`

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the dataset series

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| [PeriodOfTime](#temporal_items) | Information about a specific time period with a start- and/or end-time |

### <a name="temporal_items"></a>DatasetSeries > temporal > PeriodOfTime

**Title:** PeriodOfTime

Information about a specific time period with a start- and/or end-time

| **Type**                  | More than one type                                                              |
| ------------------------- | ------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                |
| **Same definition as**    | [PeriodOfTime](#first_anyOf_i1_sample_items_accessService_items_temporal_items) |

## <a name="title"></a>[Optional] Property `DatasetSeries > title`

**Title:** title

**Requirement:** Optional

Human-readable title of the dataset series

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"Annual Climate Observations"
```

```json
"Annual National Climate Observations Series"
```
