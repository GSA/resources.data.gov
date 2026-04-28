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

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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
        "@type": "Standard",
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
| [@id](#@id)                                             | string                                                                                             | Optional          |                                                                                                                                                                               |
| [@type](#@type)                                         | string                                                                                             | Optional          |                                                                                                                                                                               |
| [representationTechnique](#representationTechnique)     | More than one type                                                                                 | Optional          | Method or schema used to structure the distribution content (for example, CSV convention, XML schema, or spatial representation type)                                         |
| [status](#status)                                       | More than one type                                                                                 | Optional          | The status of the distribution in the context of maturity lifecycle                                                                                                           |
| [characterEncoding](#characterEncoding)                 | More than one type                                                                                 | Optional          | List of character encodings used in the Distribution, using IANA character set names (for example, UTF-8)                                                                     |
| [accessService](#accessService)                         | null or array of [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) classes                       | Optional          | A data service that gives access to the distribution of the dataset                                                                                                           |
| [accessURL](#accessURL)                                 | More than one type                                                                                 | Recommended       | URL for indirect access to the Distribution (for example, a landing page, API docs, or request form), not a direct file download                                              |
| [byteSize](#byteSize)                                   | null or string                                                                                     | Optional          | The size of a Distribution in bytes                                                                                                                                           |
| [compressFormat](#compressFormat)                       | null or string                                                                                     | Optional          | The format of the file in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file                                                  |
| [downloadURL](#downloadURL)                             | More than one type                                                                                 | Optional          | Direct URL to a downloadable file for the Distribution; use accessURL for indirect access                                                                                     |
| [mediaType](#mediaType)                                 | null or string                                                                                     | Optional          | MIME type of the Distribution (for example, text/csv or application/json), from the IANA media types registry: https://www.iana.org/assignments/media-types/media-types.xhtml |
| [packageFormat](#packageFormat)                         | null or string                                                                                     | Optional          | The format of the file in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together                                  |
| [spatialResolutionInMeters](#spatialResolutionInMeters) | null or string                                                                                     | Optional          | The minimum spatial separation resolvable in a dataset distribution, measured in meters                                                                                       |
| [temporalResolution](#temporalResolution)               | null or string                                                                                     | Optional          | The minimum time period resolvable in the dataset distribution                                                                                                                |
| [availability](#availability)                           | More than one type                                                                                 | Optional          | An indication how long it is planned to keep the Distribution of the Dataset available                                                                                        |
| [accessRestriction](#accessRestriction)                 | null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes | Recommended       | List of access restrictions related to the distribution                                                                                                                       |
| [cuiRestriction](#cuiRestriction)                       | More than one type                                                                                 | Recommended       | Controlled Unclassified Information restriction related to the distribution                                                                                                   |
| [describedBy](#describedBy)                             | More than one type                                                                                 | Recommended       | A distribution containing the Data Dictionary for this distribution                                                                                                           |
| [useRestriction](#useRestriction)                       | null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes       | Recommended       | Use restriction related to the distribution                                                                                                                                   |
| [accessRights](#accessRights)                           | More than one type                                                                                 | Optional          | Information about whether the distribution is publicly accessible, restricted, or not public                                                                                  |
| [conformsTo](#conformsTo)                               | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes                              | Optional          | List of standards, schemas, or reference systems the Distribution follows (prefer stable URIs when available)                                                                 |
| [description](#description)                             | null or string                                                                                     | Recommended       | Plain-language summary of the distribution                                                                                                                                    |
| [format](#format)                                       | null or string                                                                                     | Recommended       | A human-readable description of the file format of the Distribution that provides useful information that might not be apparent from mediaType                                |
| [identifier](#identifier)                               | More than one type                                                                                 | Optional          | The unique identifier for the Distribution (e.g. DOI, ISBN)                                                                                                                   |
| [otherIdentifier](#otherIdentifier)                     | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes               | Optional          | A list of identifiers for the Distribution besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog                                |
| [issued](#issued)                                       | More than one type                                                                                 | Optional          | The date of formal issuance (e.g., publication) of the Distribution                                                                                                           |
| [language](#language)                                   | More than one type                                                                                 | Optional          | ISO 639-1 language code values used in the distribution metadata text, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html                 |
| [license](#license)                                     | More than one type                                                                                 | Recommended       | License that governs how the distribution can be used or reused                                                                                                               |
| [modified](#modified)                                   | More than one type                                                                                 | Recommended       | The most recent date on which the Distribution was changed or modified                                                                                                        |
| [rights](#rights)                                       | null or array of string                                                                            | Recommended       | Rights statements not already covered by license or accessRights, such as copyright or policy restrictions                                                                    |
| [title](#title)                                         | null or string                                                                                     | Recommended       | Human-readable title of the distribution                                                                                                                                      |
| [hasQualityMeasurement](#hasQualityMeasurement)         | null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes   | Optional          | Quality measurements for the distribution (for example, completeness, accuracy, or timeliness)                                                                                |
| [page](#page)                                           | null or array of [Document](/standards/catalog/dcat-us-3/quality-governance/#document) classes                              | Optional          | A page or document about this Distribution                                                                                                                                    |
| [image](#image)                                         | More than one type                                                                                 | Optional          | A link to a thumbnail picture illustrating the content of the distribution                                                                                                    |
| [checksum](#checksum)                                   | More than one type                                                                                 | Optional          | Checksum used to verify that the downloadable file content has not changed                                                                                                    |

## <a name="@id"></a>`Distribution > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/distributions/climate-data-csv-001"
```

## <a name="@type"></a>`Distribution > @type`

**Requirement:** Optional

| **Type**    | `string`         |
| ----------- | ---------------- |
| **Default** | `"Distribution"` |

## <a name="representationTechnique"></a>`Distribution > representationTechnique`

**Requirement:** Optional

Method or schema used to structure the distribution content (for example, CSV convention, XML schema, or spatial representation type)

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                              |
| ------------------------------------------------------------------- |
| [Null allowed when not required](#representationTechnique_anyOf_i0) |
| [Concept](#representationTechnique_anyOf_i1)                        |

### <a name="representationTechnique_anyOf_i0"></a>`Distribution > representationTechnique > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="representationTechnique_anyOf_i1"></a>`Distribution > representationTechnique > anyOf > Concept`

inline description of Concept

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Defined in**            | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

## <a name="status"></a>`Distribution > status`

**Title:** lifecycle status

**Requirement:** Optional

The status of the distribution in the context of maturity lifecycle

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                             |
| -------------------------------------------------- |
| [Null allowed when not required](#status_anyOf_i0) |
| [Concept](#status_anyOf_i1)                        |

### <a name="status_anyOf_i0"></a>`Distribution > status > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="status_anyOf_i1"></a>`Distribution > status > anyOf > Concept`

inline description of Concept

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Same definition as**    | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

## <a name="characterEncoding"></a>`Distribution > characterEncoding`

**Requirement:** Optional

List of character encodings used in the Distribution, using IANA character set names (for example, UTF-8)

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
[
    "UTF-8"
]
```

| Any of                                                        |
| ------------------------------------------------------------- |
| [Null allowed when not required](#characterEncoding_anyOf_i0) |
| [List of encodings](#characterEncoding_anyOf_i1)              |

### <a name="characterEncoding_anyOf_i0"></a>`Distribution > characterEncoding > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="characterEncoding_anyOf_i1"></a>`Distribution > characterEncoding > anyOf > List of encodings`

| **Type** | array of string |
| -------- | --------------- |

| Each item of this array must be                         | Description |
| ------------------------------------------------------- | ----------- |
| [Character encoding](#characterEncoding_anyOf_i1_items) | -           |

#### <a name="characterEncoding_anyOf_i1_items"></a>Character encoding

| **Type** | `string` |
| -------- | -------- |

## <a name="accessService"></a>`Distribution > accessService`

**Requirement:** Optional

A data service that gives access to the distribution of the dataset

| **Type** | null or array of [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) classes |
| -------- | ---------------------------------------------------------------------------- |

| Each item of this array must be                     | Description                                                         |
| --------------------------------------------------- | ------------------------------------------------------------------- |
| [DataService](/standards/catalog/dcat-us-3/quality-governance/#data-service) | A service that provides access to data or data processing functions |

## <a name="accessURL"></a>`Distribution > accessURL`

**Requirement:** Recommended

URL for indirect access to the Distribution (for example, a landing page, API docs, or request form), not a direct file download

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Examples:**

```json
"https://example.gov/data/climate"
```

```json
"https://example.gov/data/climate/access"
```

| Any of                                                |
| ----------------------------------------------------- |
| [Null allowed when not required](#accessURL_anyOf_i0) |
| [URL](#accessURL_anyOf_i1)                            |

### <a name="accessURL_anyOf_i0"></a>`Distribution > accessURL > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="accessURL_anyOf_i1"></a>`Distribution > accessURL > anyOf > URL`

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="byteSize"></a>`Distribution > byteSize`

**Requirement:** Optional

The size of a Distribution in bytes

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"52428800"
```

## <a name="compressFormat"></a>`Distribution > compressFormat`

**Title:** compression format

**Requirement:** Optional

The format of the file in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"application/gzip"
```

## <a name="downloadURL"></a>`Distribution > downloadURL`

**Requirement:** Optional

Direct URL to a downloadable file for the Distribution; use accessURL for indirect access

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
"https://example.gov/data/climate/climate-data-2023.csv"
```

| Any of                                                  |
| ------------------------------------------------------- |
| [Null allowed when not required](#downloadURL_anyOf_i0) |
| [URL](#downloadURL_anyOf_i1)                            |

### <a name="downloadURL_anyOf_i0"></a>`Distribution > downloadURL > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="downloadURL_anyOf_i1"></a>`Distribution > downloadURL > anyOf > URL`

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="mediaType"></a>`Distribution > mediaType`

**Requirement:** Optional

MIME type of the Distribution (for example, text/csv or application/json), from the IANA media types registry: https://www.iana.org/assignments/media-types/media-types.xhtml

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"text/csv"
```

## <a name="packageFormat"></a>`Distribution > packageFormat`

**Title:** packaging format

**Requirement:** Optional

The format of the file in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"application/zip"
```

## <a name="spatialResolutionInMeters"></a>`Distribution > spatialResolutionInMeters`

**Title:** Spatial resolution (meters)

**Requirement:** Optional

The minimum spatial separation resolvable in a dataset distribution, measured in meters

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"1000"
```

## <a name="temporalResolution"></a>`Distribution > temporalResolution`

**Title:** termporal resolution

**Requirement:** Optional

The minimum time period resolvable in the dataset distribution

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"P1D"
```

## <a name="availability"></a>`Distribution > availability`

**Requirement:** Optional

An indication how long it is planned to keep the Distribution of the Dataset available

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                   |
| -------------------------------------------------------- |
| [Null allowed when not required](#availability_anyOf_i0) |
| [Concept](#availability_anyOf_i1)                        |

### <a name="availability_anyOf_i0"></a>`Distribution > availability > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="availability_anyOf_i1"></a>`Distribution > availability > anyOf > Concept`

inline description of Concept

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Same definition as**    | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

## <a name="accessRestriction"></a>`Distribution > accessRestriction`

**Requirement:** Recommended

List of access restrictions related to the distribution

| **Type** | null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes |
| -------- | -------------------------------------------------------------------------------------------------- |

| Each item of this array must be                                           | Description                                                 |
| ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) | Rules or indicators that describe who can access a resource |

## <a name="cuiRestriction"></a>`Distribution > cuiRestriction`

**Requirement:** Recommended

Controlled Unclassified Information restriction related to the distribution

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                     |
| ---------------------------------------------------------- |
| [Null allowed when not required](#cuiRestriction_anyOf_i0) |
| [CUIRestriction](#cuiRestriction_anyOf_i1)                 |

### <a name="cuiRestriction_anyOf_i0"></a>`Distribution > cuiRestriction > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="cuiRestriction_anyOf_i1"></a>`Distribution > cuiRestriction > anyOf > CUIRestriction`

inline description of CUIRestriction

| **Type**                  | `object`                                                            |
| ------------------------- | ------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                    |
| **Same definition as**    | [CUIRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction) |

## <a name="describedBy"></a>`Distribution > describedBy`

**Title:** data dictionary

**Requirement:** Recommended

A distribution containing the Data Dictionary for this distribution

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                  |
| ------------------------------------------------------- |
| [Null allowed when not required](#describedBy_anyOf_i0) |
| [Distribution](#describedBy_anyOf_i1)                   |

### <a name="describedBy_anyOf_i0"></a>`Distribution > describedBy > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="describedBy_anyOf_i1"></a>`Distribution > describedBy > anyOf > Distribution`

inline description of the data dictionary

| **Type**                  | `object`                               |
| ------------------------- | -------------------------------------- |
| **Additional properties** | Any type allowed                       |
| **Same definition as**    | [Distribution](/standards/catalog/dcat-us-3/distribution/#root) |

---
**See Also:** (related supporting classes)

## <a name="useRestriction"></a>`Distribution > useRestriction`

**Requirement:** Recommended

Use restriction related to the distribution

| **Type** | null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes |
| -------- | -------------------------------------------------------------------------------------------- |

| Each item of this array must be                                     | Description                                         |
| ------------------------------------------------------------------- | --------------------------------------------------- |
| [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) | Rules or legal limits on how a resource may be used |

## <a name="accessRights"></a>`Distribution > accessRights`

**Requirement:** Optional

Information about whether the distribution is publicly accessible, restricted, or not public

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
"Public access without restrictions"
```

| Any of                                                   |
| -------------------------------------------------------- |
| [Null allowed when not required](#accessRights_anyOf_i0) |
| [item 1](#accessRights_anyOf_i1)                         |

### <a name="accessRights_anyOf_i0"></a>`Distribution > accessRights > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="accessRights_anyOf_i1"></a>`Distribution > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="conformsTo"></a>`Distribution > conformsTo`

**Title:** linked schemas

**Requirement:** Optional

List of standards, schemas, or reference systems the Distribution follows (prefer stable URIs when available)

| **Type** | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes |
| -------- | --------------------------------------------------------------------- |

| Each item of this array must be              | Description                                                   |
| -------------------------------------------- | ------------------------------------------------------------- |
| [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) | A standard or specification that another resource conforms to |

## <a name="description"></a>`Distribution > description`

**Requirement:** Recommended

Plain-language summary of the distribution

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"Daily climate observations in CSV format."
```

```json
"A CSV file containing historical climate data including daily temperature and precipitation readings."
```

## <a name="format"></a>`Distribution > format`

**Requirement:** Recommended

A human-readable description of the file format of the Distribution that provides useful information that might not be apparent from mediaType

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"CSV"
```

## <a name="identifier"></a>`Distribution > identifier`

**Requirement:** Optional

The unique identifier for the Distribution (e.g. DOI, ISBN)

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                 |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>`Distribution > identifier > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>`Distribution > identifier > anyOf > Identifier`

inline description of Identifier

| **Type**                  | `combining`                                                 |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Same definition as**    | [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) |

## <a name="otherIdentifier"></a>`Distribution > otherIdentifier`

**Requirement:** Optional

A list of identifiers for the Distribution besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes |
| -------- | ------------------------------------------------------------------------------------ |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="issued"></a>`Distribution > issued`

**Title:** release date

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the Distribution

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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

| Any of                                             |
| -------------------------------------------------- |
| [Null allowed when not required](#issued_anyOf_i0) |
| [Date string](#issued_anyOf_i1)                    |

### <a name="issued_anyOf_i0"></a>`Distribution > issued > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>`Distribution > issued > anyOf > Date string`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                              |
| ----------------------------------- |
| [item 0](#issued_anyOf_i1_anyOf_i0) |
| [item 1](#issued_anyOf_i1_anyOf_i1) |
| [item 2](#issued_anyOf_i1_anyOf_i2) |
| [item 3](#issued_anyOf_i1_anyOf_i3) |

#### <a name="issued_anyOf_i1_anyOf_i0"></a>`Distribution > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>`Distribution > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>`Distribution > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>`Distribution > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="language"></a>`Distribution > language`

**Requirement:** Optional

ISO 639-1 language code values used in the distribution metadata text, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#language_anyOf_i0) |
| [Language code](#language_anyOf_i1)                  |
| [List of languages](#language_anyOf_i2)              |

### <a name="language_anyOf_i0"></a>`Distribution > language > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>`Distribution > language > anyOf > Language code`

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>`Distribution > language > anyOf > List of languages`

| **Type** | array of string |
| -------- | --------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#language_anyOf_i2_items) | -           |

#### <a name="language_anyOf_i2_items"></a>Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="license"></a>`Distribution > license`

**Requirement:** Recommended

License that governs how the distribution can be used or reused

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

| Any of                                              |
| --------------------------------------------------- |
| [Null allowed when not required](#license_anyOf_i0) |
| [item 1](#license_anyOf_i1)                         |

### <a name="license_anyOf_i0"></a>`Distribution > license > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="license_anyOf_i1"></a>`Distribution > license > anyOf > item 1`

Full text of the license

| **Type** | `string` |
| -------- | -------- |

## <a name="modified"></a>`Distribution > modified`

**Title:** last modified

**Requirement:** Recommended

The most recent date on which the Distribution was changed or modified

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#modified_anyOf_i0) |
| [Date string](#modified_anyOf_i1)                    |

### <a name="modified_anyOf_i0"></a>`Distribution > modified > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>`Distribution > modified > anyOf > Date string`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                |
| ------------------------------------- |
| [item 0](#modified_anyOf_i1_anyOf_i0) |
| [item 1](#modified_anyOf_i1_anyOf_i1) |
| [item 2](#modified_anyOf_i1_anyOf_i2) |
| [item 3](#modified_anyOf_i1_anyOf_i3) |

#### <a name="modified_anyOf_i1_anyOf_i0"></a>`Distribution > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>`Distribution > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>`Distribution > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>`Distribution > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="rights"></a>`Distribution > rights`

**Requirement:** Recommended

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

| **Type** | null or array of string |
| -------- | ----------------------- |

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

| Each item of this array must be | Description                        |
| ------------------------------- | ---------------------------------- |
| [rights items](#rights_items)   | Full text of a statement of rights |

### <a name="rights_items"></a>Array Item

Full text of a statement of rights

| **Type** | `string` |
| -------- | -------- |

## <a name="title"></a>`Distribution > title`

**Requirement:** Recommended

Human-readable title of the distribution

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Climate Data CSV"
```

## <a name="hasQualityMeasurement"></a>`Distribution > hasQualityMeasurement`

**Title:** quality measurement

**Requirement:** Optional

Quality measurements for the distribution (for example, completeness, accuracy, or timeliness)

| **Type** | null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes |
| -------- | ------------------------------------------------------------------------------------------------ |

| Each item of this array must be                                         | Description                                                   |
| ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) | A measurement of a resource against a specific quality metric |

## <a name="page"></a>`Distribution > page`

**Title:** documentation

**Requirement:** Optional

A page or document about this Distribution

| **Type** | null or array of [Document](/standards/catalog/dcat-us-3/quality-governance/#document) classes |
| -------- | --------------------------------------------------------------------- |

| Each item of this array must be              | Description                                           |
| -------------------------------------------- | ----------------------------------------------------- |
| [Document](/standards/catalog/dcat-us-3/quality-governance/#document) | A publication or other document related to a resource |

## <a name="image"></a>`Distribution > image`

**Requirement:** Optional

A link to a thumbnail picture illustrating the content of the distribution

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                            |
| ------------------------------------------------- |
| [Null allowed when not required](#image_anyOf_i0) |
| [Link](#image_anyOf_i1)                           |

### <a name="image_anyOf_i0"></a>`Distribution > image > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="image_anyOf_i1"></a>`Distribution > image > anyOf > Link`

The link to the image

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="checksum"></a>`Distribution > checksum`

**Requirement:** Optional

Checksum used to verify that the downloadable file content has not changed

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#checksum_anyOf_i0) |
| [Checksum](#checksum_anyOf_i1)                       |

### <a name="checksum_anyOf_i0"></a>`Distribution > checksum > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="checksum_anyOf_i1"></a>`Distribution > checksum > anyOf > Checksum`

inline description of Checksum

| **Type**                  | `object`                                                |
| ------------------------- | ------------------------------------------------------- |
| **Additional properties** | Any type allowed                                        |
| **Same definition as**    | [Checksum](/standards/catalog/dcat-us-3/identifiers-and-relationships/#checksum) |

---
**See Also:** (related supporting classes)
