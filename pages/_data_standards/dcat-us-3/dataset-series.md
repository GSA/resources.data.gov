---
title: "DCAT-US 3.0: Dataset Series"
layout: "page"
permalink: "/standards/catalog/dcat-us-3/dataset-series/"
primary_nav_section: "Data Standards"
category_name: "Data standards"
---
<a name="root"></a>

Information about a dataset series, including its members, ordering, coverage, and publishing details.

A group of related datasets that are published separately

- **Type**: `object`
- **Additional properties**: Any type allowed

**Example:**

```json
{
    "@id": "https://example.gov/series/annual-climate-observations",
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

| Property                                   | Type                                                                                  | Requirement Level | Title/Description                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [description](#description)               | string                                                                                | Mandatory         | Plain-language summary of the dataset series                                                                                             |
| [title](#title)                           | string                                                                                | Mandatory         | Human-readable title of the dataset series                                                                                               |
| [@id](#@id)                               | string                                                                                | Recommended       |                                                                                                                                          |
| [contactPoint](#contactPoint)             | null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes                                     | Recommended       | List of contacts people can use to ask questions or send feedback about the dataset series                                               |
| [first](#first)                           | null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)                                                  | Recommended       | The first dataset in an ordered dataset series                                                                                           |
| [last](#last)                             | null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)                                                  | Recommended       | The last dataset in an ordered dataset series                                                                                            |
| [modified](#modified)                     | null or object                                                                        | Recommended       | Most recent date when the Dataset Series changed, not the modified date of the newest dataset in the series                              |
| [publisher](#publisher)                   | null or [Agent](/standards/catalog/dcat-us-3/agents/#agent)                                                    | Recommended       | Organization responsible for maintaining the Dataset Series as a coherent series; this may differ from publishers of individual datasets |
| [seriesMember](#seriesMember)             | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                 | Recommended       | List of members of the Dataset Series                                                                                                    |
| [spatial](#spatial)                       | null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes           | Recommended       | A geographic region that is covered by the Dataset Series                                                                                |
| [temporal](#temporal)                     | null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes | Recommended       | Time periods covered by the dataset series                                                                                               |
| [@type](#@type)                           | string                                                                                | Optional          |                                                                                                                                          |
| [accrualPeriodicity](#accrualPeriodicity) | More than one type                                                                    | Optional          | The frequency at which the Dataset Series is updated. This is the series update frequency, not necessarily each dataset's frequency      |
| [issued](#issued)                         | null or object                                                                        | Optional          | Date when the Dataset Series was formally established or published, not the release date of the oldest dataset in the series             |

## <a name="description"></a>`DatasetSeries > description` [#](#description)

**Requirement:** Mandatory

Plain-language summary of the dataset series

- **Type**: `string`
- **Required**: Yes

**Example:**

```json
"An annual series of comprehensive climate observation datasets collected from monitoring stations across the United States. Each dataset in the series covers one calendar year of daily observations."
```

## <a name="title"></a>`DatasetSeries > title` [#](#title)

**Requirement:** Mandatory

Human-readable title of the dataset series

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"Annual Climate Observations"
```

```json
"Annual National Climate Observations Series"
```

## <a name="@id"></a>`DatasetSeries > @id` [#](#@id)

**Requirement:** Recommended

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/series/annual-climate-observations"
```

## <a name="contactPoint"></a>`DatasetSeries > contactPoint` [#](#contactPoint)

**Requirement:** Recommended

List of contacts people can use to ask questions or send feedback about the dataset series

- **Type**: null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes

**Each item of this array must be:**
- [Kind](/standards/catalog/dcat-us-3/agents/#kind): Contact information for an individual or entity

## <a name="first"></a>`DatasetSeries > first` [#](#first)

**Requirement:** Recommended

The first dataset in an ordered dataset series

- **Type**: null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)

## <a name="last"></a>`DatasetSeries > last` [#](#last)

**Requirement:** Recommended

The last dataset in an ordered dataset series

- **Type**: null or [Dataset](/standards/catalog/dcat-us-3/dataset/#root)

## <a name="modified"></a>`DatasetSeries > modified` [#](#modified)

**Title:** update/modification date

**Requirement:** Recommended

Most recent date when the Dataset Series changed, not the modified date of the newest dataset in the series

- **Type**: null or object

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

## <a name="publisher"></a>`DatasetSeries > publisher` [#](#publisher)

**Requirement:** Recommended

Organization responsible for maintaining the Dataset Series as a coherent series; this may differ from publishers of individual datasets

- **Type**: null or [Agent](/standards/catalog/dcat-us-3/agents/#agent)

## <a name="seriesMember"></a>`DatasetSeries > seriesMember` [#](#seriesMember)

**Requirement:** Recommended

List of members of the Dataset Series

- **Type**: null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes

**Each item of this array must be:**
- [Dataset](/standards/catalog/dcat-us-3/dataset/#root): A collection of data published or curated by one provider

## <a name="spatial"></a>`DatasetSeries > spatial` [#](#spatial)

**Title:** spatial/geographic coverage

**Requirement:** Recommended

A geographic region that is covered by the Dataset Series

- **Type**: null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes

**Each item of this array must be:**
- [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location): A named place or geographic area

## <a name="temporal"></a>`DatasetSeries > temporal` [#](#temporal)

**Title:** temporal coverage

**Requirement:** Recommended

Time periods covered by the dataset series

- **Type**: null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes

**Each item of this array must be:**
- [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time): Information about a specific time period with a start- and/or end-time

## <a name="@type"></a>`DatasetSeries > @type` [#](#@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"DatasetSeries"`

## <a name="accrualPeriodicity"></a>`DatasetSeries > accrualPeriodicity` [#](#accrualPeriodicity)

**Title:** frequency

**Requirement:** Optional

The frequency at which the Dataset Series is updated. This is the series update frequency, not necessarily each dataset's frequency

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Example:**

```json
"annually"
```

**Any of:**
- [Null allowed when not required](#accrualPeriodicity_anyOf_i0)
- [item 1](#accrualPeriodicity_anyOf_i1)
- [item 2](#accrualPeriodicity_anyOf_i2)
- [item 3](#accrualPeriodicity_anyOf_i3)

### <a name="accrualPeriodicity_anyOf_i0"></a>`DatasetSeries > accrualPeriodicity > anyOf > Null allowed when not required` [#](#accrualPeriodicity_anyOf_i0)

- **Type**: `null`

### <a name="accrualPeriodicity_anyOf_i1"></a>`DatasetSeries > accrualPeriodicity > anyOf > item 1` [#](#accrualPeriodicity_anyOf_i1)

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

### <a name="accrualPeriodicity_anyOf_i2"></a>`DatasetSeries > accrualPeriodicity > anyOf > item 2` [#](#accrualPeriodicity_anyOf_i2)

ISO-8601 Maintenance Frequency code for recurring values, see https://www.iso.org/standard/70907.html

- **Type**: `string`

**Restrictions:**
- **Must match regular expression**: ```^R/P.+$``` [Test](https://regex101.com/?regex=%5ER%2FP.%2B%24)

### <a name="accrualPeriodicity_anyOf_i3"></a>`DatasetSeries > accrualPeriodicity > anyOf > item 3` [#](#accrualPeriodicity_anyOf_i3)

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

## <a name="issued"></a>`DatasetSeries > issued` [#](#issued)

**Title:** release date

**Requirement:** Optional

Date when the Dataset Series was formally established or published, not the release date of the oldest dataset in the series

- **Type**: null or object

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
