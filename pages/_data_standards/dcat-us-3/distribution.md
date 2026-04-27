---
title: DCAT-US 3.0: Distribution
layout: page
permalink: /standards/catalog/dcat-us-3/distribution/
primary_nav_section: Data Standards
category_name: Data standards
---
**Title:** Distribution

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

| Property                                                   | Type                    | Title/Description           |
| ---------------------------------------------------------- | ----------------------- | --------------------------- |
| - [@id](#@id )                                             | string                  | -                           |
| - [@type](#@type )                                         | string                  | -                           |
| - [representationTechnique](#representationTechnique )     | More than one type      | representation technique    |
| - [status](#status )                                       | More than one type      | lifecycle status            |
| - [characterEncoding](#characterEncoding )                 | More than one type      | character encoding          |
| - [accessService](#accessService )                         | null or array           | access service              |
| - [accessURL](#accessURL )                                 | More than one type      | access URL                  |
| - [byteSize](#byteSize )                                   | null or string          | byte size                   |
| - [compressFormat](#compressFormat )                       | null or string          | compression format          |
| - [downloadURL](#downloadURL )                             | More than one type      | download URL                |
| - [mediaType](#mediaType )                                 | null or string          | media type                  |
| - [packageFormat](#packageFormat )                         | null or string          | packaging format            |
| - [spatialResolutionInMeters](#spatialResolutionInMeters ) | null or string          | Spatial resolution (meters) |
| - [temporalResolution](#temporalResolution )               | null or string          | termporal resolution        |
| - [availability](#availability )                           | More than one type      | availability                |
| - [accessRestriction](#accessRestriction )                 | null or array           | access restriction          |
| - [cuiRestriction](#cuiRestriction )                       | More than one type      | CUI restriction             |
| - [describedBy](#describedBy )                             | More than one type      | data dictionary             |
| - [useRestriction](#useRestriction )                       | null or array           | use restriction             |
| - [accessRights](#accessRights )                           | More than one type      | access rights               |
| - [conformsTo](#conformsTo )                               | null or array           | linked schemas              |
| - [description](#description )                             | null or string          | description                 |
| - [format](#format )                                       | null or string          | format                      |
| - [identifier](#identifier )                               | More than one type      | identifier                  |
| - [otherIdentifier](#otherIdentifier )                     | null or array           | other identifier            |
| - [issued](#issued )                                       | More than one type      | release date                |
| - [language](#language )                                   | More than one type      | language                    |
| - [license](#license )                                     | More than one type      | license                     |
| - [modified](#modified )                                   | More than one type      | last modified               |
| - [rights](#rights )                                       | null or array of string | rights                      |
| - [title](#title )                                         | null or string          | title                       |
| - [hasQualityMeasurement](#hasQualityMeasurement )         | null or array           | quality measurement         |
| - [page](#page )                                           | null or array           | documentation               |
| - [image](#image )                                         | More than one type      | image                       |
| - [checksum](#checksum )                                   | More than one type      | checksum                    |

## <a name="@id"></a>[Optional] Property `Distribution > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/distributions/climate-data-csv-001"
```

## <a name="@type"></a>[Optional] Property `Distribution > @type`

**Requirement:** Optional

| **Type**    | `string`         |
| ----------- | ---------------- |
| **Default** | `"Distribution"` |

## <a name="representationTechnique"></a>[Optional] Property `Distribution > representationTechnique`

**Title:** representation technique

**Requirement:** Optional

Method or schema used to structure the distribution content (for example, CSV convention, XML schema, or spatial representation type)

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                                      |
| ------------------------------------------------------------------- |
| [Null allowed when not required](#representationTechnique_anyOf_i0) |
| [Concept](#representationTechnique_anyOf_i1)                        |

### <a name="representationTechnique_anyOf_i0"></a>Property `Distribution > representationTechnique > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="representationTechnique_anyOf_i1"></a>Property `Distribution > representationTechnique > anyOf > Concept`

**Title:** Concept

inline description of Concept

| **Type**                  | More than one type      |
| ------------------------- | ----------------------- |
| **Additional properties** | Any type allowed        |
| **Defined in**            | [Concept](./Concept.md) |

## <a name="status"></a>[Optional] Property `Distribution > status`

**Title:** lifecycle status

**Requirement:** Optional

The status of the distribution in the context of maturity lifecycle

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#status_anyOf_i0) |
| [Concept](#status_anyOf_i1)                        |

### <a name="status_anyOf_i0"></a>Property `Distribution > status > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="status_anyOf_i1"></a>Property `Distribution > status > anyOf > Concept`

**Title:** Concept

inline description of Concept

| **Type**                  | More than one type                           |
| ------------------------- | -------------------------------------------- |
| **Additional properties** | Any type allowed                             |
| **Same definition as**    | [Concept](#representationTechnique_anyOf_i1) |

## <a name="characterEncoding"></a>[Optional] Property `Distribution > characterEncoding`

**Title:** character encoding

**Requirement:** Optional

List of character encodings used in the Distribution, using IANA character set names (for example, UTF-8)

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
[
    "UTF-8"
]
```

| Any of(Option)                                                |
| ------------------------------------------------------------- |
| [Null allowed when not required](#characterEncoding_anyOf_i0) |
| [List of encodings](#characterEncoding_anyOf_i1)              |

### <a name="characterEncoding_anyOf_i0"></a>Property `Distribution > characterEncoding > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="characterEncoding_anyOf_i1"></a>Property `Distribution > characterEncoding > anyOf > List of encodings`

**Title:** List of encodings

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be                         | Description |
| ------------------------------------------------------- | ----------- |
| [Character encoding](#characterEncoding_anyOf_i1_items) | -           |

#### <a name="characterEncoding_anyOf_i1_items"></a>Distribution > characterEncoding > anyOf > List of encodings > Character encoding

**Title:** Character encoding

| **Type** | `string` |
| -------- | -------- |

## <a name="accessService"></a>[Optional] Property `Distribution > accessService`

**Title:** access service

**Requirement:** Optional

A data service that gives access to the distribution of the dataset

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                         |
| ----------------------------------- | ------------------------------------------------------------------- |
| [DataService](#accessService_items) | A service that provides access to data or data processing functions |

### <a name="accessService_items"></a>Distribution > accessService > DataService

**Title:** DataService

A service that provides access to data or data processing functions

| **Type**                  | `object`                        |
| ------------------------- | ------------------------------- |
| **Additional properties** | Any type allowed                |
| **Defined in**            | [Dataservice](./Dataservice.md) |

## <a name="accessURL"></a>[Optional] Property `Distribution > accessURL`

**Title:** access URL

**Requirement:** Optional

URL for indirect access to the Distribution (for example, a landing page, API docs, or request form), not a direct file download

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"https://example.gov/data/climate"
```

```json
"https://example.gov/data/climate/access"
```

| Any of(Option)                                        |
| ----------------------------------------------------- |
| [Null allowed when not required](#accessURL_anyOf_i0) |
| [URL](#accessURL_anyOf_i1)                            |

### <a name="accessURL_anyOf_i0"></a>Property `Distribution > accessURL > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="accessURL_anyOf_i1"></a>Property `Distribution > accessURL > anyOf > URL`

**Title:** URL

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="byteSize"></a>[Optional] Property `Distribution > byteSize`

**Title:** byte size

**Requirement:** Optional

The size of a Distribution in bytes

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"52428800"
```

## <a name="compressFormat"></a>[Optional] Property `Distribution > compressFormat`

**Title:** compression format

**Requirement:** Optional

The format of the file in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"application/gzip"
```

## <a name="downloadURL"></a>[Optional] Property `Distribution > downloadURL`

**Title:** download URL

**Requirement:** Optional

Direct URL to a downloadable file for the Distribution; use accessURL for indirect access

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"https://example.gov/data/climate/climate-data-2023.csv"
```

| Any of(Option)                                          |
| ------------------------------------------------------- |
| [Null allowed when not required](#downloadURL_anyOf_i0) |
| [URL](#downloadURL_anyOf_i1)                            |

### <a name="downloadURL_anyOf_i0"></a>Property `Distribution > downloadURL > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="downloadURL_anyOf_i1"></a>Property `Distribution > downloadURL > anyOf > URL`

**Title:** URL

reference iri of Resource

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="mediaType"></a>[Optional] Property `Distribution > mediaType`

**Title:** media type

**Requirement:** Optional

MIME type of the Distribution (for example, text/csv or application/json), from the IANA media types registry: https://www.iana.org/assignments/media-types/media-types.xhtml

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"text/csv"
```

## <a name="packageFormat"></a>[Optional] Property `Distribution > packageFormat`

**Title:** packaging format

**Requirement:** Optional

The format of the file in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"application/zip"
```

## <a name="spatialResolutionInMeters"></a>[Optional] Property `Distribution > spatialResolutionInMeters`

**Title:** Spatial resolution (meters)

**Requirement:** Optional

The minimum spatial separation resolvable in a dataset distribution, measured in meters

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"1000"
```

## <a name="temporalResolution"></a>[Optional] Property `Distribution > temporalResolution`

**Title:** termporal resolution

**Requirement:** Optional

The minimum time period resolvable in the dataset distribution

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"P1D"
```

## <a name="availability"></a>[Optional] Property `Distribution > availability`

**Title:** availability

**Requirement:** Optional

An indication how long it is planned to keep the Distribution of the Dataset available

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                           |
| -------------------------------------------------------- |
| [Null allowed when not required](#availability_anyOf_i0) |
| [Concept](#availability_anyOf_i1)                        |

### <a name="availability_anyOf_i0"></a>Property `Distribution > availability > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="availability_anyOf_i1"></a>Property `Distribution > availability > anyOf > Concept`

**Title:** Concept

inline description of Concept

| **Type**                  | More than one type                           |
| ------------------------- | -------------------------------------------- |
| **Additional properties** | Any type allowed                             |
| **Same definition as**    | [Concept](#representationTechnique_anyOf_i1) |

## <a name="accessRestriction"></a>[Optional] Property `Distribution > accessRestriction`

**Title:** access restriction

**Requirement:** Optional

List of access restrictions related to the distribution

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be               | Description                                                 |
| --------------------------------------------- | ----------------------------------------------------------- |
| [AccessRestriction](#accessRestriction_items) | Rules or indicators that describe who can access a resource |

### <a name="accessRestriction_items"></a>Distribution > accessRestriction > AccessRestriction

**Title:** AccessRestriction

Rules or indicators that describe who can access a resource

| **Type**                  | `object`                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                   |
| **Same definition as**    | [AccessRestriction](#accessService_items_servesDataset_items_sample_items_accessRestriction_items) |

## <a name="cuiRestriction"></a>[Optional] Property `Distribution > cuiRestriction`

**Title:** CUI restriction

**Requirement:** Optional

Controlled Unclassified Information restriction related to the distribution

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                             |
| ---------------------------------------------------------- |
| [Null allowed when not required](#cuiRestriction_anyOf_i0) |
| [CUIRestriction](#cuiRestriction_anyOf_i1)                 |

### <a name="cuiRestriction_anyOf_i0"></a>Property `Distribution > cuiRestriction > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="cuiRestriction_anyOf_i1"></a>Property `Distribution > cuiRestriction > anyOf > CUIRestriction`

**Title:** CUIRestriction

inline description of CUIRestriction

| **Type**                  | `object`                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                |
| **Same definition as**    | [CUIRestriction](#accessService_items_servesDataset_items_sample_items_cuiRestriction_anyOf_i1) |

## <a name="describedBy"></a>[Optional] Property `Distribution > describedBy`

**Title:** data dictionary

**Requirement:** Optional

A distribution containing the Data Dictionary for this distribution

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                          |
| ------------------------------------------------------- |
| [Null allowed when not required](#describedBy_anyOf_i0) |
| [Distribution](#describedBy_anyOf_i1)                   |

### <a name="describedBy_anyOf_i0"></a>Property `Distribution > describedBy > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="describedBy_anyOf_i1"></a>Property `Distribution > describedBy > anyOf > Distribution`

**Title:** Distribution

inline description of the data dictionary

| **Type**                  | `object`                                                              |
| ------------------------- | --------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                      |
| **Same definition as**    | [Distribution](#accessService_items_servesDataset_items_sample_items) |

## <a name="useRestriction"></a>[Optional] Property `Distribution > useRestriction`

**Title:** use restriction

**Requirement:** Optional

Use restriction related to the distribution

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be         | Description                                         |
| --------------------------------------- | --------------------------------------------------- |
| [UseRestriction](#useRestriction_items) | Rules or legal limits on how a resource may be used |

### <a name="useRestriction_items"></a>Distribution > useRestriction > UseRestriction

**Title:** UseRestriction

Rules or legal limits on how a resource may be used

| **Type**                  | `object`                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                             |
| **Same definition as**    | [UseRestriction](#accessService_items_servesDataset_items_sample_items_useRestriction_items) |

## <a name="accessRights"></a>[Optional] Property `Distribution > accessRights`

**Title:** access rights

**Requirement:** Optional

Information about whether the distribution is publicly accessible, restricted, or not public

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"Public access without restrictions"
```

| Any of(Option)                                           |
| -------------------------------------------------------- |
| [Null allowed when not required](#accessRights_anyOf_i0) |
| [item 1](#accessRights_anyOf_i1)                         |

### <a name="accessRights_anyOf_i0"></a>Property `Distribution > accessRights > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="accessRights_anyOf_i1"></a>Property `Distribution > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="conformsTo"></a>[Optional] Property `Distribution > conformsTo`

**Title:** linked schemas

**Requirement:** Optional

List of standards, schemas, or reference systems the Distribution follows (prefer stable URIs when available)

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| [Standard](#conformsTo_items)   | A standard or specification that another resource conforms to |

### <a name="conformsTo_items"></a>Distribution > conformsTo > Standard

**Title:** Standard

A standard or specification that another resource conforms to

| **Type**                  | `object`                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                   |
| **Same definition as**    | [Standard](#accessService_items_servesDataset_items_sample_items_conformsTo_items) |

## <a name="description"></a>[Optional] Property `Distribution > description`

**Title:** description

**Requirement:** Optional

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

## <a name="format"></a>[Optional] Property `Distribution > format`

**Title:** format

**Requirement:** Optional

A human-readable description of the file format of the Distribution that provides useful information that might not be apparent from mediaType

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"CSV"
```

## <a name="identifier"></a>[Optional] Property `Distribution > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Distribution (e.g. DOI, ISBN)

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>Property `Distribution > identifier > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>Property `Distribution > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                                                           |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                             |
| **Same definition as**    | [Identifier](#accessService_items_servesDataset_items_otherIdentifier_items) |

## <a name="otherIdentifier"></a>[Optional] Property `Distribution > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Distribution besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be      | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [Identifier](#otherIdentifier_items) | A unique identifier and optionally it's scheme and other relevant information |

### <a name="otherIdentifier_items"></a>Distribution > otherIdentifier > Identifier

**Title:** Identifier

A unique identifier and optionally it's scheme and other relevant information

| **Type**                  | More than one type                                                           |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                             |
| **Same definition as**    | [Identifier](#accessService_items_servesDataset_items_otherIdentifier_items) |

## <a name="issued"></a>[Optional] Property `Distribution > issued`

**Title:** release date

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the Distribution

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#issued_anyOf_i0) |
| [Date string](#issued_anyOf_i1)                    |

### <a name="issued_anyOf_i0"></a>Property `Distribution > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>Property `Distribution > issued > anyOf > Date string`

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

#### <a name="issued_anyOf_i1_anyOf_i0"></a>Property `Distribution > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>Property `Distribution > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>Property `Distribution > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>Property `Distribution > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="language"></a>[Optional] Property `Distribution > language`

**Title:** language

**Requirement:** Optional

ISO 639-1 language code values used in the distribution metadata text, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#language_anyOf_i0) |
| [Language code](#language_anyOf_i1)                  |
| [List of languages](#language_anyOf_i2)              |

### <a name="language_anyOf_i0"></a>Property `Distribution > language > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>Property `Distribution > language > anyOf > Language code`

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>Property `Distribution > language > anyOf > List of languages`

**Title:** List of languages

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#language_anyOf_i2_items) | -           |

#### <a name="language_anyOf_i2_items"></a>Distribution > language > anyOf > List of languages > Language code

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="license"></a>[Optional] Property `Distribution > license`

**Title:** license

**Requirement:** Optional

License that governs how the distribution can be used or reused

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

### <a name="license_anyOf_i0"></a>Property `Distribution > license > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="license_anyOf_i1"></a>Property `Distribution > license > anyOf > item 1`

Full text of the license

| **Type** | `string` |
| -------- | -------- |

## <a name="modified"></a>[Optional] Property `Distribution > modified`

**Title:** last modified

**Requirement:** Optional

The most recent date on which the Distribution was changed or modified

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#modified_anyOf_i0) |
| [Date string](#modified_anyOf_i1)                    |

### <a name="modified_anyOf_i0"></a>Property `Distribution > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>Property `Distribution > modified > anyOf > Date string`

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

#### <a name="modified_anyOf_i1_anyOf_i0"></a>Property `Distribution > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>Property `Distribution > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>Property `Distribution > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>Property `Distribution > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="rights"></a>[Optional] Property `Distribution > rights`

**Title:** rights

**Requirement:** Optional

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

| **Type** | `null or array of string` |
| -------- | ------------------------- |

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

### <a name="rights_items"></a>Distribution > rights > rights items

Full text of a statement of rights

| **Type** | `string` |
| -------- | -------- |

## <a name="title"></a>[Optional] Property `Distribution > title`

**Title:** title

**Requirement:** Optional

Human-readable title of the distribution

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Climate Data CSV"
```

## <a name="hasQualityMeasurement"></a>[Optional] Property `Distribution > hasQualityMeasurement`

**Title:** quality measurement

**Requirement:** Optional

Quality measurements for the distribution (for example, completeness, accuracy, or timeliness)

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                                   |
| -------------------------------------------------- | ------------------------------------------------------------- |
| [QualityMeasurement](#hasQualityMeasurement_items) | A measurement of a resource against a specific quality metric |

### <a name="hasQualityMeasurement_items"></a>Distribution > hasQualityMeasurement > QualityMeasurement

**Title:** QualityMeasurement

A measurement of a resource against a specific quality metric

| **Type**                  | `object`                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                        |
| **Same definition as**    | [QualityMeasurement](#accessService_items_servesDataset_items_sample_items_hasQualityMeasurement_items) |

## <a name="page"></a>[Optional] Property `Distribution > page`

**Title:** documentation

**Requirement:** Optional

A page or document about this Distribution

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| [Document](#page_items)         | A publication or other document related to a resource |

### <a name="page_items"></a>Distribution > page > Document

**Title:** Document

A publication or other document related to a resource

| **Type**                  | `object`                                                                     |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                             |
| **Same definition as**    | [Document](#accessService_items_servesDataset_items_sample_items_page_items) |

## <a name="image"></a>[Optional] Property `Distribution > image`

**Title:** image

**Requirement:** Optional

A link to a thumbnail picture illustrating the content of the distribution

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                    |
| ------------------------------------------------- |
| [Null allowed when not required](#image_anyOf_i0) |
| [Link](#image_anyOf_i1)                           |

### <a name="image_anyOf_i0"></a>Property `Distribution > image > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="image_anyOf_i1"></a>Property `Distribution > image > anyOf > Link`

**Title:** Link

The link to the image

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="checksum"></a>[Optional] Property `Distribution > checksum`

**Title:** checksum

**Requirement:** Optional

Checksum used to verify that the downloadable file content has not changed

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#checksum_anyOf_i0) |
| [Checksum](#checksum_anyOf_i1)                       |

### <a name="checksum_anyOf_i0"></a>Property `Distribution > checksum > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="checksum_anyOf_i1"></a>Property `Distribution > checksum > anyOf > Checksum`

**Title:** Checksum

inline description of Checksum

| **Type**                  | `object`                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                    |
| **Same definition as**    | [Checksum](#accessService_items_servesDataset_items_sample_items_checksum_anyOf_i1) |
