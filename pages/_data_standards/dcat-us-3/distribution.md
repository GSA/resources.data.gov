---
title: "DCAT-US 3.0: Distribution"
layout: "page"
permalink: "/standards/catalog/dcat-us-3/distribution/"
primary_nav_section: "Data Standards"
category_name: "Data standards"
---
<a name="root"></a>

Information about a distribution, including access methods, formats, licenses, restrictions, and quality details.

A specific representation of a dataset, such as a file, feed, or API response

- **Type**: `object`
- **Additional properties**: Any type allowed

**Example:**

```json
{
    "@type": "Distribution",
    "title": "Climate Data CSV",
    "description": "Daily climate observations in CSV format.",
    "accessURL": "https://example.gov/data/climate",
    "downloadURL": "https://example.gov/downloads/climate-2024.csv",
    "mediaType": "text/csv",
    "format": "CSV",
    "byteSize": "52428800",
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "modified": "2024-06-01",
    "rights": [
        "No rights reserved. This data is in the public domain."
    ],
    "describedBy": {
        "@type": "Distribution",
        "title": "CSV Data Dictionary",
        "accessURL": "https://example.gov/data/climate/dictionary"
    },
    "accessRestriction": null,
    "cuiRestriction": null,
    "useRestriction": null
}
```

| Property                                                 | Type                                                                                               | Requirement Level | Title/Description                                                                                                                                                             |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [accessRestriction](#accessRestriction)                 | null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes | Recommended       | List of access restrictions related to the distribution                                                                                                                       |
| [accessURL](#accessURL)                                 | null or string                                                                                     | Recommended       | URL for indirect access to the Distribution (for example, a landing page, API docs, or request form), not a direct file download                                              |
| [cuiRestriction](#cuiRestriction)                       | null or [CUIRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction)                        | Recommended       | Controlled Unclassified Information restriction related to the distribution                                                                                                   |
| [describedBy](#describedBy)                             | null or [Distribution](/standards/catalog/dcat-us-3/distribution/#root)                                                     | Recommended       | A distribution containing the Data Dictionary for this distribution                                                                                                           |
| [description](#description)                             | null or string                                                                                     | Recommended       | Plain-language summary of the distribution                                                                                                                                    |
| [format](#format)                                       | null or string                                                                                     | Recommended       | A human-readable description of the file format of the Distribution that provides useful information that might not be apparent from mediaType                                |
| [license](#license)                                     | null or string                                                                                     | Recommended       | License that governs how the distribution can be used or reused                                                                                                               |
| [modified](#modified)                                   | null or object                                                                                     | Recommended       | The most recent date on which the Distribution was changed or modified                                                                                                        |
| [rights](#rights)                                       | null or array of string                                                                            | Recommended       | Rights statements not already covered by license or accessRights, such as copyright or policy restrictions                                                                    |
| [title](#title)                                         | null or string                                                                                     | Recommended       | Human-readable title of the distribution                                                                                                                                      |
| [useRestriction](#useRestriction)                       | null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes       | Recommended       | List of use restrictions related to the distribution                                                                                                                          |
| [@id](#@id)                                             | string                                                                                             | Optional          |                                                                                                                                                                               |
| [@type](#@type)                                         | string                                                                                             | Optional          |                                                                                                                                                                               |
| [accessRights](#accessRights)                           | null or string                                                                                     | Optional          | Information about whether the distribution is publicly accessible, restricted, or not public                                                                                  |
| [accessService](#accessService)                         | null or array of [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) classes                       | Optional          | A data service that gives access to the distribution of the dataset                                                                                                           |
| [availability](#availability)                           | null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)                                      | Optional          | An indication how long it is planned to keep the Distribution of the Dataset available                                                                                        |
| [byteSize](#byteSize)                                   | null or string                                                                                     | Optional          | The size of a Distribution in bytes                                                                                                                                           |
| [characterEncoding](#characterEncoding)                 | null or array of string                                                                            | Optional          | List of character encodings used in the Distribution, using IANA character set names (for example, UTF-8)                                                                     |
| [checksum](#checksum)                                   | null or [Checksum](/standards/catalog/dcat-us-3/identifiers-and-relationships/#checksum)                                    | Optional          | Checksum used to verify that the downloadable file content has not changed                                                                                                    |
| [compressFormat](#compressFormat)                       | null or string                                                                                     | Optional          | The format of the file in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file                                                  |
| [conformsTo](#conformsTo)                               | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes                              | Optional          | List of standards, schemas, or reference systems the Distribution follows (prefer stable URIs when available)                                                                 |
| [downloadURL](#downloadURL)                             | null or string                                                                                     | Optional          | Direct URL to a downloadable file for the Distribution; use accessURL for indirect access                                                                                     |
| [hasQualityMeasurement](#hasQualityMeasurement)         | null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes   | Optional          | Quality measurements for the distribution (for example, completeness, accuracy, or timeliness)                                                                                |
| [identifier](#identifier)                               | null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)                                | Optional          | The unique identifier for the Distribution (e.g. DOI, ISBN)                                                                                                                   |
| [image](#image)                                         | null or string                                                                                     | Optional          | A link to a thumbnail picture illustrating the content of the distribution                                                                                                    |
| [inventoried](#inventoried)                             | null or object                                                                                     | Optional          | Date on which the distribution was added to the catalog. This may differ from the publication/release date.                                                                   |
| [issued](#issued)                                       | null or object                                                                                     | Optional          | The date of formal issuance (e.g., publication) of the Distribution                                                                                                           |
| [language](#language)                                   | More than one type                                                                                 | Optional          | ISO 639-1 language code values used in the distribution metadata text, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html                 |
| [mediaType](#mediaType)                                 | null or string                                                                                     | Optional          | MIME type of the Distribution (for example, text/csv or application/json), from the IANA media types registry: https://www.iana.org/assignments/media-types/media-types.xhtml |
| [otherIdentifier](#otherIdentifier)                     | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes               | Optional          | A list of identifiers for the Distribution besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog                                |
| [packageFormat](#packageFormat)                         | null or string                                                                                     | Optional          | The format of the file in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together                                  |
| [page](#page)                                           | null or array of [Document](/standards/catalog/dcat-us-3/quality-governance/#document) classes                              | Optional          | A page or document about this Distribution                                                                                                                                    |
| [representationTechnique](#representationTechnique)     | null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)                                      | Optional          | Method or schema used to structure the distribution content (for example, CSV convention, XML schema, or spatial representation type)                                         |
| [spatialResolutionInMeters](#spatialResolutionInMeters) | null or string                                                                                     | Optional          | The minimum spatial separation resolvable in a dataset distribution, measured in meters                                                                                       |
| [status](#status)                                       | null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)                                      | Optional          | The status of the distribution in the context of maturity lifecycle                                                                                                           |
| [temporalResolution](#temporalResolution)               | null or string                                                                                     | Optional          | The minimum time period resolvable in the dataset distribution                                                                                                                |

## <a name="accessRestriction"></a>`Distribution > accessRestriction` [#](#accessRestriction)

**Requirement:** Recommended

List of access restrictions related to the distribution

- **Type**: null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes

**Each item of this array must be:**
- [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction): Rules or indicators that describe who can access a resource

## <a name="accessURL"></a>`Distribution > accessURL` [#](#accessURL)

**Requirement:** Recommended

URL for indirect access to the Distribution (for example, a landing page, API docs, or request form), not a direct file download

- **Type**: null or string

**Examples:**

```json
"https://example.gov/data/climate"
```

```json
"https://example.gov/data/climate/access"
```

## <a name="cuiRestriction"></a>`Distribution > cuiRestriction` [#](#cuiRestriction)

**Requirement:** Recommended

Controlled Unclassified Information restriction related to the distribution

- **Type**: null or [CUIRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction)

## <a name="describedBy"></a>`Distribution > describedBy` [#](#describedBy)

**Title:** data dictionary

**Requirement:** Recommended

A distribution containing the Data Dictionary for this distribution

- **Type**: null or [Distribution](/standards/catalog/dcat-us-3/distribution/#root)

## <a name="description"></a>`Distribution > description` [#](#description)

**Requirement:** Recommended

Plain-language summary of the distribution

- **Type**: `null or string`

**Examples:**

```json
"Daily climate observations in CSV format."
```

```json
"A CSV file containing historical climate data including daily temperature and precipitation readings."
```

## <a name="format"></a>`Distribution > format` [#](#format)

**Requirement:** Recommended

A human-readable description of the file format of the Distribution that provides useful information that might not be apparent from mediaType

- **Type**: `null or string`

**Example:**

```json
"CSV"
```

## <a name="license"></a>`Distribution > license` [#](#license)

**Requirement:** Recommended

License that governs how the distribution can be used or reused

- **Type**: null or string

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

## <a name="modified"></a>`Distribution > modified` [#](#modified)

**Title:** last modified

**Requirement:** Recommended

The most recent date on which the Distribution was changed or modified

- **Type**: null or object

**Examples:**

```json
"2024-06-01"
```

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

## <a name="rights"></a>`Distribution > rights` [#](#rights)

**Requirement:** Recommended

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

- **Type**: null or array of string

**Examples:**

```json
[
    "No rights reserved. This data is in the public domain."
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

## <a name="title"></a>`Distribution > title` [#](#title)

**Requirement:** Recommended

Human-readable title of the distribution

- **Type**: `null or string`

**Example:**

```json
"Climate Data CSV"
```

## <a name="useRestriction"></a>`Distribution > useRestriction` [#](#useRestriction)

**Requirement:** Recommended

List of use restrictions related to the distribution

- **Type**: null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes

**Each item of this array must be:**
- [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction): Rules or legal limits on how a resource may be used

## <a name="@id"></a>`Distribution > @id` [#](#@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/distributions/climate-data-csv-001"
```

## <a name="@type"></a>`Distribution > @type` [#](#@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Distribution"`

## <a name="accessRights"></a>`Distribution > accessRights` [#](#accessRights)

**Requirement:** Optional

Information about whether the distribution is publicly accessible, restricted, or not public

- **Type**: null or string

**Example:**

```json
"Public access without restrictions"
```

## <a name="accessService"></a>`Distribution > accessService` [#](#accessService)

**Requirement:** Optional

A data service that gives access to the distribution of the dataset

- **Type**: null or array of [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) classes

**Each item of this array must be:**
- [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service): A service that provides access to data or data processing functions

## <a name="availability"></a>`Distribution > availability` [#](#availability)

**Requirement:** Optional

An indication how long it is planned to keep the Distribution of the Dataset available

- **Type**: null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)

## <a name="byteSize"></a>`Distribution > byteSize` [#](#byteSize)

**Requirement:** Optional

The size of a Distribution in bytes

- **Type**: `null or string`

**Example:**

```json
"52428800"
```

## <a name="characterEncoding"></a>`Distribution > characterEncoding` [#](#characterEncoding)

**Requirement:** Optional

List of character encodings used in the Distribution, using IANA character set names (for example, UTF-8)

- **Type**: null or array of string

**Example:**

```json
[
    "UTF-8"
]
```

## <a name="checksum"></a>`Distribution > checksum` [#](#checksum)

**Requirement:** Optional

Checksum used to verify that the downloadable file content has not changed

- **Type**: null or [Checksum](/standards/catalog/dcat-us-3/identifiers-and-relationships/#checksum)

## <a name="compressFormat"></a>`Distribution > compressFormat` [#](#compressFormat)

**Title:** compression format

**Requirement:** Optional

The format of the file in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file

- **Type**: `null or string`

**Example:**

```json
"application/gzip"
```

## <a name="conformsTo"></a>`Distribution > conformsTo` [#](#conformsTo)

**Title:** linked schemas

**Requirement:** Optional

List of standards, schemas, or reference systems the Distribution follows (prefer stable URIs when available)

- **Type**: null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes

**Each item of this array must be:**
- [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard): A standard or specification that another resource conforms to

## <a name="downloadURL"></a>`Distribution > downloadURL` [#](#downloadURL)

**Requirement:** Optional

Direct URL to a downloadable file for the Distribution; use accessURL for indirect access

- **Type**: null or string

**Example:**

```json
"https://example.gov/data/climate/climate-data-2023.csv"
```

## <a name="hasQualityMeasurement"></a>`Distribution > hasQualityMeasurement` [#](#hasQualityMeasurement)

**Title:** quality measurement

**Requirement:** Optional

Quality measurements for the distribution (for example, completeness, accuracy, or timeliness)

- **Type**: null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes

**Each item of this array must be:**
- [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement): A measurement of a resource against a specific quality metric

## <a name="identifier"></a>`Distribution > identifier` [#](#identifier)

**Requirement:** Optional

The unique identifier for the Distribution (e.g. DOI, ISBN)

- **Type**: null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)

## <a name="image"></a>`Distribution > image` [#](#image)

**Requirement:** Optional

A link to a thumbnail picture illustrating the content of the distribution

- **Type**: null or string

## <a name="inventoried"></a>`Distribution > inventoried` [#](#inventoried)

**Title:** inventoried date

**Requirement:** Optional

Date on which the distribution was added to the catalog. This may differ from the publication/release date.

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

## <a name="issued"></a>`Distribution > issued` [#](#issued)

**Title:** release date

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the Distribution

- **Type**: null or object

**Examples:**

```json
"2023-06-01"
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

## <a name="language"></a>`Distribution > language` [#](#language)

**Requirement:** Optional

ISO 639-1 language code values used in the distribution metadata text, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Examples:**

```json
"en"
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
- [List of languages](#language_anyOf_i2)

### <a name="language_anyOf_i0"></a>`Distribution > language > anyOf > Null allowed when not required` [#](#language_anyOf_i0)

- **Type**: `null`

### <a name="language_anyOf_i1"></a>`Distribution > language > anyOf > Language code` [#](#language_anyOf_i1)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

### <a name="language_anyOf_i2"></a>`Distribution > language > anyOf > List of languages` [#](#language_anyOf_i2)

- **Type**: array of string

**Each item of this array must be:**
- [Language code](#language_anyOf_i2_items): -

#### <a name="language_anyOf_i2_items"></a>Language code [#](#language_anyOf_i2_items)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

## <a name="mediaType"></a>`Distribution > mediaType` [#](#mediaType)

**Requirement:** Optional

MIME type of the Distribution (for example, text/csv or application/json), from the IANA media types registry: https://www.iana.org/assignments/media-types/media-types.xhtml

- **Type**: `null or string`

**Example:**

```json
"text/csv"
```

## <a name="otherIdentifier"></a>`Distribution > otherIdentifier` [#](#otherIdentifier)

**Requirement:** Optional

A list of identifiers for the Distribution besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

- **Type**: null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes

**Each item of this array must be:**
- [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier): A unique identifier and optionally it's scheme and other relevant information

## <a name="packageFormat"></a>`Distribution > packageFormat` [#](#packageFormat)

**Title:** packaging format

**Requirement:** Optional

The format of the file in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together

- **Type**: `null or string`

**Example:**

```json
"application/zip"
```

## <a name="page"></a>`Distribution > page` [#](#page)

**Title:** documentation

**Requirement:** Optional

A page or document about this Distribution

- **Type**: null or array of [Document](/standards/catalog/dcat-us-3/quality-governance/#document) classes

**Each item of this array must be:**
- [Document](/standards/catalog/dcat-us-3/quality-governance/#document): A publication or other document related to a resource

## <a name="representationTechnique"></a>`Distribution > representationTechnique` [#](#representationTechnique)

**Requirement:** Optional

Method or schema used to structure the distribution content (for example, CSV convention, XML schema, or spatial representation type)

- **Type**: null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)

## <a name="spatialResolutionInMeters"></a>`Distribution > spatialResolutionInMeters` [#](#spatialResolutionInMeters)

**Title:** Spatial resolution (meters)

**Requirement:** Optional

The minimum spatial separation resolvable in a dataset distribution, measured in meters

- **Type**: `null or string`

**Example:**

```json
"1000"
```

## <a name="status"></a>`Distribution > status` [#](#status)

**Title:** lifecycle status

**Requirement:** Optional

The status of the distribution in the context of maturity lifecycle

- **Type**: null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)

## <a name="temporalResolution"></a>`Distribution > temporalResolution` [#](#temporalResolution)

**Title:** termporal resolution

**Requirement:** Optional

The minimum time period resolvable in the dataset distribution

- **Type**: `null or string`

**Example:**

```json
"P1D"
```

---
**See Also:** (related supporting classes)
