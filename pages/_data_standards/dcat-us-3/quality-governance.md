---
title: DCAT-US 3.0: Quality and Governance
layout: page
permalink: /standards/catalog/dcat-us-3/quality-governance/
primary_nav_section: Data Standards
category_name: Data standards
---

This page combines supporting DCAT-US 3.0 classes used with the main schema classes.

## Standard

**Title:** Standard

A standard or specification that another resource conforms to

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "Standard",
    "title": "DCAT-US 3.0",
    "description": "Data Catalog Vocabulary - United States Profile version 3.0",
    "issued": "2024-01-15",
    "identifier": {
        "@type": "Identifier",
        "notation": "DCAT-US-3.0",
        "schemaAgency": "U.S. General Services Administration"
    },
    "inScheme": {
        "@type": "ConceptScheme",
        "title": "Federal Data Standards",
        "description": "A collection of data standards used by federal agencies"
    }
}
```

| Property                               | Type               | Title/Description |
| -------------------------------------- | ------------------ | ----------------- |
| - [@id](#@id )                         | string             | -                 |
| - [@type](#@type )                     | string             | -                 |
| - [created](#created )                 | More than one type | creation date     |
| - [description](#description )         | null or string     | description       |
| - [identifier](#identifier )           | More than one type | identifier        |
| - [otherIdentifier](#otherIdentifier ) | null or array      | other identifier  |
| - [issued](#issued )                   | More than one type | issued            |
| - [modified](#modified )               | More than one type | last modified     |
| - [title](#title )                     | null or string     | title             |
| - [category](#category )               | null or array      | category          |
| - [inScheme](#inScheme )               | More than one type | in scheme         |

## <a name="@id"></a>[Optional] Property `Standard > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/standards/dcat-us-3"
```

## <a name="@type"></a>[Optional] Property `Standard > @type`

**Requirement:** Optional

| **Type**    | `string`     |
| ----------- | ------------ |
| **Default** | `"Standard"` |

## <a name="created"></a>[Optional] Property `Standard > created`

**Title:** creation date

**Requirement:** Optional

The date on which the Standard has been first created

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"2023-01-01"
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

### <a name="created_anyOf_i0"></a>Property `Standard > created > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="created_anyOf_i1"></a>Property `Standard > created > anyOf > Date string`

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

#### <a name="created_anyOf_i1_anyOf_i0"></a>Property `Standard > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="created_anyOf_i1_anyOf_i1"></a>Property `Standard > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="created_anyOf_i1_anyOf_i2"></a>Property `Standard > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="created_anyOf_i1_anyOf_i3"></a>Property `Standard > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="description"></a>[Optional] Property `Standard > description`

**Title:** description

**Requirement:** Optional

Plain-language summary of the standard

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"Data Catalog Vocabulary - United States Profile version 3.0"
```

```json
"The DCAT-US 3.0 schema defines a standard metadata format for data catalogs in the United States government, based on W3C DCAT."
```

## <a name="identifier"></a>[Optional] Property `Standard > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Standard, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>Property `Standard > identifier > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>Property `Standard > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type            |
| ------------------------- | ----------------------------- |
| **Additional properties** | Any type allowed              |
| **Defined in**            | [Identifier](./Identifier.md) |

## <a name="otherIdentifier"></a>[Optional] Property `Standard > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Standard besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be      | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [Identifier](#otherIdentifier_items) | A unique identifier and optionally it's scheme and other relevant information |

### <a name="otherIdentifier_items"></a>Standard > otherIdentifier > Identifier

**Title:** Identifier

A unique identifier and optionally it's scheme and other relevant information

| **Type**                  | More than one type                 |
| ------------------------- | ---------------------------------- |
| **Additional properties** | Any type allowed                   |
| **Same definition as**    | [Identifier](#identifier_anyOf_i1) |

## <a name="issued"></a>[Optional] Property `Standard > issued`

**Title:** issued

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the Standard

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

### <a name="issued_anyOf_i0"></a>Property `Standard > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>Property `Standard > issued > anyOf > Date string`

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

#### <a name="issued_anyOf_i1_anyOf_i0"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="modified"></a>[Optional] Property `Standard > modified`

**Title:** last modified

**Requirement:** Optional

The most recent date on which the Standard was changed or modified

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

### <a name="modified_anyOf_i0"></a>Property `Standard > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>Property `Standard > modified > anyOf > Date string`

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

#### <a name="modified_anyOf_i1_anyOf_i0"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="title"></a>[Optional] Property `Standard > title`

**Title:** title

**Requirement:** Optional

Human-readable title of the standard

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"DCAT-US 3.0"
```

```json
"DCAT-US 3.0 - Data Catalog Vocabulary United States Profile"
```

## <a name="category"></a>[Optional] Property `Standard > category`

**Title:** category

**Requirement:** Optional

List of categories for the Standard

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#category_items)      | A controlled term or label, optionally drawn from a concept scheme |

### <a name="category_items"></a>Standard > category > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type      |
| ------------------------- | ----------------------- |
| **Additional properties** | Any type allowed        |
| **Defined in**            | [Concept](./Concept.md) |

## <a name="inScheme"></a>[Optional] Property `Standard > inScheme`

**Title:** in scheme

**Requirement:** Optional

The reference register to which the Standard belongs

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#inScheme_anyOf_i0) |
| [ConceptScheme](#inScheme_anyOf_i1)                  |

### <a name="inScheme_anyOf_i0"></a>Property `Standard > inScheme > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="inScheme_anyOf_i1"></a>Property `Standard > inScheme > anyOf > ConceptScheme`

**Title:** ConceptScheme

inline description of ConceptScheme

| **Type**                  | `object`                                      |
| ------------------------- | --------------------------------------------- |
| **Additional properties** | Any type allowed                              |
| **Same definition as**    | [inScheme](#category_items_anyOf_i1_inScheme) |

---

## Document

**Title:** Document

A publication or other document related to a resource

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "Document",
    "title": "Climate Data User Guide",
    "description": "A guide for accessing and using the National Climate Data Center's data products.",
    "accessURL": "https://example.gov/docs/climate-user-guide",
    "mediaType": "application/pdf",
    "identifier": "NCDC-UG-2024-001",
    "issued": "2024-03-15",
    "publisher": [
        {
            "@type": "Organization",
            "name": "National Climate Data Center"
        }
    ],
    "bibliographicCitation": "National Climate Data Center. (2024). Climate Data User Guide. Retrieved from https://example.gov/docs/climate-user-guide"
}
```

| Property                                           | Type               | Title/Description      |
| -------------------------------------------------- | ------------------ | ---------------------- |
| - [@id](#@id )                                     | string             | -                      |
| - [@type](#@type )                                 | string             | -                      |
| - [accessURL](#accessURL )                         | More than one type | access URL             |
| - [downloadURL](#downloadURL )                     | More than one type | download URL           |
| - [creator](#creator )                             | null or array      | author                 |
| - [mediaType](#mediaType )                         | null or string     | media type             |
| - [abstract](#abstract )                           | null or string     | abstract               |
| - [bibliographicCitation](#bibliographicCitation ) | null or string     | bibliographic citation |
| - [conformsTo](#conformsTo )                       | null or array      | conforms to            |
| - [corporateCreator](#corporateCreator )           | null or array      | corporate author       |
| - [description](#description )                     | null or string     | description            |
| - [identifier](#identifier )                       | More than one type | identifier             |
| - [otherIdentifier](#otherIdentifier )             | null or array      | other identifier       |
| - [issued](#issued )                               | More than one type | publication date       |
| - [publisher](#publisher )                         | null or array      | publisher              |
| + [title](#title )                                 | string             | title                  |
| - [category](#category )                           | null or array      | category               |

## <a name="@id"></a>[Optional] Property `Document > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/documents/climate-user-guide-001"
```

## <a name="@type"></a>[Optional] Property `Document > @type`

**Requirement:** Optional

| **Type**    | `string`     |
| ----------- | ------------ |
| **Default** | `"Document"` |

## <a name="accessURL"></a>[Optional] Property `Document > accessURL`

**Title:** access URL

**Requirement:** Optional

A URL that gives access to the Document

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"https://example.gov/docs/climate-user-guide"
```

| Any of(Option)                                        |
| ----------------------------------------------------- |
| [Null allowed when not required](#accessURL_anyOf_i0) |
| [URL](#accessURL_anyOf_i1)                            |

### <a name="accessURL_anyOf_i0"></a>Property `Document > accessURL > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="accessURL_anyOf_i1"></a>Property `Document > accessURL > anyOf > URL`

**Title:** URL

reference iri of Document

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="downloadURL"></a>[Optional] Property `Document > downloadURL`

**Title:** download URL

**Requirement:** Optional

A URL that is a direct link to a downloadable file of the Document in a given format

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"https://example.gov/docs/climate-user-guide.pdf"
```

| Any of(Option)                                          |
| ------------------------------------------------------- |
| [Null allowed when not required](#downloadURL_anyOf_i0) |
| [URL](#downloadURL_anyOf_i1)                            |

### <a name="downloadURL_anyOf_i0"></a>Property `Document > downloadURL > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="downloadURL_anyOf_i1"></a>Property `Document > downloadURL > anyOf > URL`

**Title:** URL

reference iri of Document

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="creator"></a>[Optional] Property `Document > creator`

**Title:** author

**Requirement:** Optional

The individual(s) responsible for creating the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](#creator_items)          | Contact information for an individual or entity |

### <a name="creator_items"></a>Document > creator > Kind

**Title:** Kind

Contact information for an individual or entity

| **Type**                  | `object`          |
| ------------------------- | ----------------- |
| **Additional properties** | Any type allowed  |
| **Defined in**            | [Kind](./Kind.md) |

## <a name="mediaType"></a>[Optional] Property `Document > mediaType`

**Title:** media type

**Requirement:** Optional

The file format of the Document as defined in the official register of media types managed by IANA: https://www.iana.org/assignments/media-types/media-types.xhtml

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"application/pdf"
```

## <a name="abstract"></a>[Optional] Property `Document > abstract`

**Title:** abstract

**Requirement:** Optional

Text abstract of the Document

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"This document provides detailed instructions for using climate data products, including API access, file formats, and data interpretation guidelines."
```

## <a name="bibliographicCitation"></a>[Optional] Property `Document > bibliographicCitation`

**Title:** bibliographic citation

**Requirement:** Optional

Bibliographic citation as text

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"National Climate Data Center. (2024). Climate Data User Guide. Retrieved from https://example.gov/docs/climate-user-guide"
```

```json
"National Climate Data Center. (2024). Climate Data User Guide. U.S. Department of Commerce."
```

## <a name="conformsTo"></a>[Optional] Property `Document > conformsTo`

**Title:** conforms to

**Requirement:** Optional

List of standards or specifications the document follows

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| [Standard](#conformsTo_items)   | A standard or specification that another resource conforms to |

### <a name="conformsTo_items"></a>Document > conformsTo > Standard

**Title:** Standard

A standard or specification that another resource conforms to

| **Type**                  | `object`                  |
| ------------------------- | ------------------------- |
| **Additional properties** | Any type allowed          |
| **Defined in**            | [Standard](./Standard.md) |

## <a name="corporateCreator"></a>[Optional] Property `Document > corporateCreator`

**Title:** corporate author

**Requirement:** Optional

The corporate organization(s) responsible for creating the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be         | Description                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](#corporateCreator_items) | An organization involved with a resource, including parent or child organizations |

### <a name="corporateCreator_items"></a>Document > corporateCreator > Organization

**Title:** Organization

An organization involved with a resource, including parent or child organizations

| **Type**                  | `object`                                                                        |
| ------------------------- | ------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                |
| **Same definition as**    | [Organization](#conformsTo_items_identifier_anyOf_i1_anyOf_i1_creator_anyOf_i1) |

## <a name="description"></a>[Optional] Property `Document > description`

**Title:** description

**Requirement:** Optional

Plain-language summary of the document

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"A guide for accessing and using the National Climate Data Center's data products."
```

```json
"A comprehensive guide for accessing and using the National Climate Data Center's data products and services."
```

## <a name="identifier"></a>[Optional] Property `Document > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Document (e.g. DOI, ISBN)

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#identifier_anyOf_i0) |
| [Identifier](#identifier_anyOf_i1)                     |

### <a name="identifier_anyOf_i0"></a>Property `Document > identifier > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>Property `Document > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                                  |
| ------------------------- | --------------------------------------------------- |
| **Additional properties** | Any type allowed                                    |
| **Same definition as**    | [Identifier](#conformsTo_items_identifier_anyOf_i1) |

## <a name="otherIdentifier"></a>[Optional] Property `Document > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Document besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be      | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [Identifier](#otherIdentifier_items) | A unique identifier and optionally it's scheme and other relevant information |

### <a name="otherIdentifier_items"></a>Document > otherIdentifier > Identifier

**Title:** Identifier

A unique identifier and optionally it's scheme and other relevant information

| **Type**                  | More than one type                                  |
| ------------------------- | --------------------------------------------------- |
| **Additional properties** | Any type allowed                                    |
| **Same definition as**    | [Identifier](#conformsTo_items_identifier_anyOf_i1) |

## <a name="issued"></a>[Optional] Property `Document > issued`

**Title:** publication date

**Requirement:** Optional

Publication date of the Document

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
| [item 1](#issued_anyOf_i1)                         |

### <a name="issued_anyOf_i0"></a>Property `Document > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>Property `Document > issued > anyOf > item 1`

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                      |
| ----------------------------------- |
| [item 0](#issued_anyOf_i1_anyOf_i0) |
| [item 1](#issued_anyOf_i1_anyOf_i1) |
| [item 2](#issued_anyOf_i1_anyOf_i2) |
| [item 3](#issued_anyOf_i1_anyOf_i3) |

#### <a name="issued_anyOf_i1_anyOf_i0"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="publisher"></a>[Optional] Property `Document > publisher`

**Title:** publisher

**Requirement:** Optional

The organization(s) that published the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be  | Description                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](#publisher_items) | An organization involved with a resource, including parent or child organizations |

### <a name="publisher_items"></a>Document > publisher > Organization

**Title:** Organization

An organization involved with a resource, including parent or child organizations

| **Type**                  | `object`                                                                        |
| ------------------------- | ------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                |
| **Same definition as**    | [Organization](#conformsTo_items_identifier_anyOf_i1_anyOf_i1_creator_anyOf_i1) |

## <a name="title"></a>[Optional] Property `Document > title`

**Title:** title

**Requirement:** Optional

The title of the Document

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"Climate Data User Guide"
```

## <a name="category"></a>[Optional] Property `Document > category`

**Title:** category

**Requirement:** Optional

List of categories/genres for the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#category_items)      | A controlled term or label, optionally drawn from a concept scheme |

### <a name="category_items"></a>Document > category > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                          |
| ------------------------- | ------------------------------------------- |
| **Additional properties** | Any type allowed                            |
| **Same definition as**    | [Concept](#conformsTo_items_category_items) |

---

## CatalogRecord

**Title:** CatalogRecord

A record in a catalog, describing the registration of a single resource

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "CatalogRecord",
    "modified": "2024-06-15",
    "primaryTopic": "https://example.gov/datasets/climate-data-2024",
    "title": "Climate Data 2024 Catalog Entry",
    "issued": [
        "2024-01-15"
    ],
    "status": "published",
    "conformsTo": {
        "@type": "Standard",
        "title": "DCAT-US 3.0"
    }
}
```

| Property                         | Type                    | Title/Description        |
| -------------------------------- | ----------------------- | ------------------------ |
| - [@id](#@id )                   | string                  | -                        |
| - [@type](#@type )               | string                  | -                        |
| - [status](#status )             | More than one type      | change type              |
| - [conformsTo](#conformsTo )     | More than one type      | application profile      |
| - [description](#description )   | null or array of string | Descriptions             |
| - [issued](#issued )             | null or array           | listing date             |
| - [language](#language )         | More than one type      | language                 |
| + [modified](#modified )         | More than one type      | update/modification date |
| - [source](#source )             | null or string          | source metadata          |
| - [title](#title )               | null or string          | title                    |
| + [primaryTopic](#primaryTopic ) | string                  | primary topic            |

## <a name="@id"></a>[Optional] Property `CatalogRecord > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/catalog-records/climate-dataset-record-001"
```

## <a name="@type"></a>[Optional] Property `CatalogRecord > @type`

**Requirement:** Optional

| **Type**    | `string`          |
| ----------- | ----------------- |
| **Default** | `"CatalogRecord"` |

## <a name="status"></a>[Optional] Property `CatalogRecord > status`

**Title:** change type

**Requirement:** Optional

The status of the catalog record in the context of editorial flow of the dataset and data service descriptions

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#status_anyOf_i0) |
| [Concept](#status_anyOf_i1)                        |

### <a name="status_anyOf_i0"></a>Property `CatalogRecord > status > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="status_anyOf_i1"></a>Property `CatalogRecord > status > anyOf > Concept`

**Title:** Concept

inline description of status

| **Type**                  | More than one type      |
| ------------------------- | ----------------------- |
| **Additional properties** | Any type allowed        |
| **Defined in**            | [Concept](./Concept.md) |

## <a name="conformsTo"></a>[Optional] Property `CatalogRecord > conformsTo`

**Title:** application profile

**Requirement:** Optional

An Application Profile that the Catalog Record's metadata conforms to

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#conformsTo_anyOf_i0) |
| [Standard](#conformsTo_anyOf_i1)                       |

### <a name="conformsTo_anyOf_i0"></a>Property `CatalogRecord > conformsTo > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="conformsTo_anyOf_i1"></a>Property `CatalogRecord > conformsTo > anyOf > Standard`

**Title:** Standard

inline description of application profile

| **Type**                  | `object`                  |
| ------------------------- | ------------------------- |
| **Additional properties** | Any type allowed          |
| **Defined in**            | [Standard](./Standard.md) |

## <a name="description"></a>[Optional] Property `CatalogRecord > description`

**Title:** Descriptions

**Requirement:** Optional

A list of free-text accounts of the catalog record

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "This catalog record describes the registration of the Climate Data 2023 dataset.",
    "Contains metadata about when the dataset was added and last updated."
]
```

| Each item of this array must be          | Description |
| ---------------------------------------- | ----------- |
| [Description string](#description_items) | -           |

### <a name="description_items"></a>CatalogRecord > description > Description string

**Title:** Description string

| **Type** | `string` |
| -------- | -------- |

## <a name="issued"></a>[Optional] Property `CatalogRecord > issued`

**Title:** listing date

**Requirement:** Optional

List of dates on which the catalog record was included in the catalog

| **Type** | `null or array` |
| -------- | --------------- |

**Examples:**

```json
[
    "2024-01-15T10:30:00Z"
]
```

```json
[
    "2024-01-15"
]
```

```json
[
    "2024"
]
```

```json
[
    "2024-01"
]
```

| Each item of this array must be | Description |
| ------------------------------- | ----------- |
| [Date string](#issued_items)    | -           |

### <a name="issued_items"></a>CatalogRecord > issued > Date string

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                   |
| -------------------------------- |
| [item 0](#issued_items_anyOf_i0) |
| [item 1](#issued_items_anyOf_i1) |
| [item 2](#issued_items_anyOf_i2) |
| [item 3](#issued_items_anyOf_i3) |

#### <a name="issued_items_anyOf_i0"></a>Property `CatalogRecord > issued > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_items_anyOf_i1"></a>Property `CatalogRecord > issued > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_items_anyOf_i2"></a>Property `CatalogRecord > issued > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_items_anyOf_i3"></a>Property `CatalogRecord > issued > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="language"></a>[Optional] Property `CatalogRecord > language`

**Title:** language

**Requirement:** Optional

Language code used in catalog record metadata text, using ISO 639-1 values such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

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
| [Array of language codes](#language_anyOf_i2)        |

### <a name="language_anyOf_i0"></a>Property `CatalogRecord > language > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>Property `CatalogRecord > language > anyOf > Language code`

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>Property `CatalogRecord > language > anyOf > Array of language codes`

**Title:** Array of language codes

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#language_anyOf_i2_items) | -           |

#### <a name="language_anyOf_i2_items"></a>CatalogRecord > language > anyOf > Array of language codes > Language code

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="modified"></a>[Optional] Property `CatalogRecord > modified`

**Title:** update/modification date

**Requirement:** Optional

The most recent date on which the catalog record was changed or modified

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Required**              | Yes                |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"2024-06-15"
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

| Any of(Option)               |
| ---------------------------- |
| [item 0](#modified_anyOf_i0) |
| [item 1](#modified_anyOf_i1) |
| [item 2](#modified_anyOf_i2) |
| [item 3](#modified_anyOf_i3) |

### <a name="modified_anyOf_i0"></a>Property `CatalogRecord > modified > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

### <a name="modified_anyOf_i1"></a>Property `CatalogRecord > modified > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

### <a name="modified_anyOf_i2"></a>Property `CatalogRecord > modified > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

### <a name="modified_anyOf_i3"></a>Property `CatalogRecord > modified > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="source"></a>[Optional] Property `CatalogRecord > source`

**Title:** source metadata

**Requirement:** Optional

The original metadata that was used in creating metadata for the items in the catalog record, either a URL referencing the source metadata or a string of the source metadata itself

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Original metadata harvested from NOAA data portal"
```

## <a name="title"></a>[Optional] Property `CatalogRecord > title`

**Title:** title

**Requirement:** Optional

A name given to the Catalog Record

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"Climate Data 2024 Catalog Entry"
```

```json
"Climate Data 2023 Catalog Record"
```

## <a name="primaryTopic"></a>[Optional] Property `CatalogRecord > primaryTopic`

**Title:** primary topic

**Requirement:** Optional

A link to the Dataset, Data service or Catalog described in the Catalog Record

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"https://example.gov/datasets/climate-data-2024"
```

```json
"https://example.gov/datasets/climate-data-2023"
```

---

## DataService

**Title:** DataService

A service that provides access to data or data processing functions

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "DataService",
    "title": "Climate Data API",
    "description": "RESTful API providing access to historical climate observations.",
    "endpointURL": [
        "https://api.example.gov/climate/v1"
    ],
    "endpointDescription": [
        "https://api.example.gov/climate/v1/openapi.json"
    ],
    "contactPoint": [
        {
            "fn": "API Support Team",
            "hasEmail": "mailto:api-support@example.gov"
        }
    ],
    "publisher": {
        "name": "National Climate Data Center"
    },
    "keyword": [
        "climate",
        "weather",
        "API"
    ],
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "servesDataset": [
        {
            "@id": "https://example.gov/datasets/climate-observations-2024",
            "@type": "Dataset",
            "title": "Climate Observations 2024",
            "description": "Annual climate observation data.",
            "contactPoint": {
                "fn": "Climate Support",
                "hasEmail": "mailto:climate@example.gov"
            },
            "publisher": {
                "name": "National Climate Data Center"
            },
            "identifier": "https://example.gov/datasets/climate-observations-2024"
        }
    ],
    "identifier": "https://example.gov/services/climate-api"
}
```

| Property                                                   | Type                    | Title/Description            |
| ---------------------------------------------------------- | ----------------------- | ---------------------------- |
| - [@id](#@id )                                             | string                  | -                            |
| - [@type](#@type )                                         | string                  | -                            |
| + [contactPoint](#contactPoint )                           | array                   | contact point                |
| - [endpointDescription](#endpointDescription )             | null or array of string | endpoint description         |
| + [endpointURL](#endpointURL )                             | array of string         | endpoint URL                 |
| - [keyword](#keyword )                                     | null or array of string | keyword/tag                  |
| - [servesDataset](#servesDataset )                         | null or array           | serves dataset               |
| - [spatialResolutionInMeters](#spatialResolutionInMeters ) | null or string          | spatial resolution in meters |
| - [temporalResolution](#temporalResolution )               | null or string          | temporal resolution          |
| - [theme](#theme )                                         | null or array           | theme/category               |
| - [accessRights](#accessRights )                           | More than one type      | access rights                |
| - [conformsTo](#conformsTo )                               | null or array           | conforms to                  |
| - [created](#created )                                     | More than one type      | creation date                |
| - [creator](#creator )                                     | null or array           | creator                      |
| - [description](#description )                             | null or string          | description                  |
| - [identifier](#identifier )                               | More than one type      | identifier                   |
| - [otherIdentifier](#otherIdentifier )                     | null or array           | other identifier             |
| - [language](#language )                                   | More than one type      | language                     |
| - [license](#license )                                     | More than one type      | license                      |
| - [modified](#modified )                                   | More than one type      | update/modification date     |
| + [publisher](#publisher )                                 | object                  | publisher                    |
| - [rights](#rights )                                       | null or array of string | rights                       |
| - [rightsHolder](#rightsHolder )                           | null or array           | rights holder                |
| - [spatial](#spatial )                                     | null or array           | spatial/geographic coverage  |
| - [temporal](#temporal )                                   | null or array           | temporal coverage            |
| + [title](#title )                                         | string                  | title                        |
| - [category](#category )                                   | null or array           | category                     |
| - [hasQualityMeasurement](#hasQualityMeasurement )         | null or array           | quality measurement          |
| - [qualifiedAttribution](#qualifiedAttribution )           | null or array           | qualified attribution        |
| - [wasUsedBy](#wasUsedBy )                                 | null or array           | was used by                  |

## <a name="@id"></a>[Optional] Property `DataService > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/data-services/climate-api-001"
```

## <a name="@type"></a>[Optional] Property `DataService > @type`

**Requirement:** Optional

| **Type**    | `string`        |
| ----------- | --------------- |
| **Default** | `"DataService"` |

## <a name="contactPoint"></a>[Optional] Property `DataService > contactPoint`

**Title:** contact point

**Requirement:** Optional

Contact information for questions about the Data Service. Include an email address that is continuously monitored

| **Type**     | `array` |
| ------------ | ------- |
| **Required** | Yes     |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](#contactPoint_items)     | Contact information for an individual or entity |

### <a name="contactPoint_items"></a>DataService > contactPoint > Kind

**Title:** Kind

Contact information for an individual or entity

| **Type**                  | `object`          |
| ------------------------- | ----------------- |
| **Additional properties** | Any type allowed  |
| **Defined in**            | [Kind](./Kind.md) |

## <a name="endpointDescription"></a>[Optional] Property `DataService > endpointDescription`

**Title:** endpoint description

**Requirement:** Optional

List of endpoint descriptions with operations and parameters (for example, OpenAPI or similar service documentation)

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Examples:**

```json
[
    "https://api.example.gov/climate/v1/openapi.json"
]
```

```json
[
    "https://api.example.gov/climate/docs/openapi.json"
]
```

| Each item of this array must be                         | Description |
| ------------------------------------------------------- | ----------- |
| [endpointDescription items](#endpointDescription_items) | -           |

### <a name="endpointDescription_items"></a>DataService > endpointDescription > endpointDescription items

| **Type** | `string` |
| -------- | -------- |

## <a name="endpointURL"></a>[Optional] Property `DataService > endpointURL`

**Title:** endpoint URL

**Requirement:** Optional

A list of root locations or primary endpoints of the service (a Web-resolvable IRI)

| **Type**     | `array of string` |
| ------------ | ----------------- |
| **Required** | Yes               |

**Examples:**

```json
[
    "https://api.example.gov/climate/v1"
]
```

```json
[
    "https://api.example.gov/climate/v1",
    "https://api.example.gov/climate/v2"
]
```

| Each item of this array must be | Description                                                                 |
| ------------------------------- | --------------------------------------------------------------------------- |
| [URLs](#endpointURL_items)      | The root location or primary endpoint of the service (a Web-resolvable IRI) |

### <a name="endpointURL_items"></a>DataService > endpointURL > URLs

**Title:** URLs

The root location or primary endpoint of the service (a Web-resolvable IRI)

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="keyword"></a>[Optional] Property `DataService > keyword`

**Title:** keyword/tag

**Requirement:** Optional

List of keywords or tags describing the data service

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Examples:**

```json
[
    "climate",
    "weather",
    "API"
]
```

```json
[
    "climate",
    "weather",
    "temperature",
    "API",
    "REST"
]
```

| Each item of this array must be     | Description |
| ----------------------------------- | ----------- |
| [Non-empty strings](#keyword_items) | -           |

### <a name="keyword_items"></a>DataService > keyword > Non-empty strings

**Title:** Non-empty strings

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="servesDataset"></a>[Optional] Property `DataService > servesDataset`

**Title:** serves dataset

**Requirement:** Optional

List of datasets this service provides access to

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](#servesDataset_items) | A collection of data published or curated by one provider |

### <a name="servesDataset_items"></a>DataService > servesDataset > Dataset

**Title:** Dataset

A collection of data published or curated by one provider

| **Type**                  | `object`                |
| ------------------------- | ----------------------- |
| **Additional properties** | Any type allowed        |
| **Defined in**            | [Dataset](./Dataset.md) |

## <a name="spatialResolutionInMeters"></a>[Optional] Property `DataService > spatialResolutionInMeters`

**Title:** spatial resolution in meters

**Requirement:** Optional

The minimum spatial separation resolvable in a Data Service, measured in meters

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"1000"
```

## <a name="temporalResolution"></a>[Optional] Property `DataService > temporalResolution`

**Title:** temporal resolution

**Requirement:** Optional

The minimum time period resolvable by the Data Service

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"P1D"
```

## <a name="theme"></a>[Optional] Property `DataService > theme`

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#theme_items)         | A controlled term or label, optionally drawn from a concept scheme |

### <a name="theme_items"></a>DataService > theme > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                                            |
| ------------------------- | ----------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                              |
| **Same definition as**    | [Concept](#servesDataset_items_sample_items_representationTechnique_anyOf_i1) |

## <a name="accessRights"></a>[Optional] Property `DataService > accessRights`

**Title:** access rights

**Requirement:** Optional

Information about whether the data service is publicly accessible, restricted, or not public

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Example:**

```json
"Public access with no restrictions"
```

| Any of(Option)                   |
| -------------------------------- |
| [item 0](#accessRights_anyOf_i0) |
| [item 1](#accessRights_anyOf_i1) |

### <a name="accessRights_anyOf_i0"></a>Property `DataService > accessRights > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="accessRights_anyOf_i1"></a>Property `DataService > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="conformsTo"></a>[Optional] Property `DataService > conformsTo`

**Title:** conforms to

**Requirement:** Optional

List of general standards or specifications that the Data Service endpoints implement

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| [Standard](#conformsTo_items)   | A standard or specification that another resource conforms to |

### <a name="conformsTo_items"></a>DataService > conformsTo > Standard

**Title:** Standard

A standard or specification that another resource conforms to

| **Type**                  | `object`                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                   |
| **Same definition as**    | [Standard](#servesDataset_items_sample_items_accessService_items_conformsTo_items) |

## <a name="created"></a>[Optional] Property `DataService > created`

**Title:** creation date

**Requirement:** Optional

The date on which the Data Service was first created

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

| Any of(Option)                   |
| -------------------------------- |
| [item 0](#created_anyOf_i0)      |
| [Date string](#created_anyOf_i1) |

### <a name="created_anyOf_i0"></a>Property `DataService > created > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="created_anyOf_i1"></a>Property `DataService > created > anyOf > Date string`

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

#### <a name="created_anyOf_i1_anyOf_i0"></a>Property `DataService > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="created_anyOf_i1_anyOf_i1"></a>Property `DataService > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="created_anyOf_i1_anyOf_i2"></a>Property `DataService > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="created_anyOf_i1_anyOf_i3"></a>Property `DataService > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="creator"></a>[Optional] Property `DataService > creator`

**Title:** creator

**Requirement:** Optional

List of agents primarily responsible for producing the Data Service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](#creator_items)         | A person, organization, software agent, or other entity involved with a resource |

### <a name="creator_items"></a>DataService > creator > Agent

**Title:** Agent

A person, organization, software agent, or other entity involved with a resource

| **Type**                  | `object`                                                                     |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                             |
| **Same definition as**    | [Agent](#servesDataset_items_sample_items_accessService_items_creator_items) |

## <a name="description"></a>[Optional] Property `DataService > description`

**Title:** description

**Requirement:** Optional

Plain-language summary of the data service

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"A RESTful API providing access to historical and real-time climate data including temperature, precipitation, and atmospheric conditions."
```

## <a name="identifier"></a>[Optional] Property `DataService > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Data Service, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                     |
| ---------------------------------- |
| [item 0](#identifier_anyOf_i0)     |
| [Identifier](#identifier_anyOf_i1) |

### <a name="identifier_anyOf_i0"></a>Property `DataService > identifier > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="identifier_anyOf_i1"></a>Property `DataService > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                                       |
| ------------------------- | -------------------------------------------------------- |
| **Additional properties** | Any type allowed                                         |
| **Same definition as**    | [Identifier](#servesDataset_items_otherIdentifier_items) |

## <a name="otherIdentifier"></a>[Optional] Property `DataService > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Data Service besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be      | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [Identifier](#otherIdentifier_items) | A unique identifier and optionally it's scheme and other relevant information |

### <a name="otherIdentifier_items"></a>DataService > otherIdentifier > Identifier

**Title:** Identifier

A unique identifier and optionally it's scheme and other relevant information

| **Type**                  | More than one type                                       |
| ------------------------- | -------------------------------------------------------- |
| **Additional properties** | Any type allowed                                         |
| **Same definition as**    | [Identifier](#servesDataset_items_otherIdentifier_items) |

## <a name="language"></a>[Optional] Property `DataService > language`

**Title:** language

**Requirement:** Optional

ISO 639-1 language code values supported by the data service, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

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
| [List of lanuages](#language_anyOf_i2)               |

### <a name="language_anyOf_i0"></a>Property `DataService > language > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="language_anyOf_i1"></a>Property `DataService > language > anyOf > Language code`

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="language_anyOf_i2"></a>Property `DataService > language > anyOf > List of lanuages`

**Title:** List of lanuages

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#language_anyOf_i2_items) | -           |

#### <a name="language_anyOf_i2_items"></a>DataService > language > anyOf > List of lanuages > Language code

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="license"></a>[Optional] Property `DataService > license`

**Title:** license

**Requirement:** Optional

License that governs how the data service can be used or reused

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

### <a name="license_anyOf_i0"></a>Property `DataService > license > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="license_anyOf_i1"></a>Property `DataService > license > anyOf > item 1`

Full text of the license

| **Type** | `string` |
| -------- | -------- |

## <a name="modified"></a>[Optional] Property `DataService > modified`

**Title:** update/modification date

**Requirement:** Optional

The most recent date on which the Data Service was changed or modified

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"2024-03-20"
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

### <a name="modified_anyOf_i0"></a>Property `DataService > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>Property `DataService > modified > anyOf > Date string`

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

#### <a name="modified_anyOf_i1_anyOf_i0"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="publisher"></a>[Optional] Property `DataService > publisher`

**Title:** publisher

**Requirement:** Optional

Person or organization responsible for publishing and making the data service available

| **Type**                  | `object`            |
| ------------------------- | ------------------- |
| **Required**              | Yes                 |
| **Additional properties** | Any type allowed    |
| **Defined in**            | [Agent](./Agent.md) |

## <a name="rights"></a>[Optional] Property `DataService > rights`

**Title:** rights

**Requirement:** Optional

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "Data provided by the National Climate Data Center is in the public domain."
]
```

| Each item of this array must be | Description |
| ------------------------------- | ----------- |
| [rights items](#rights_items)   | -           |

### <a name="rights_items"></a>DataService > rights > rights items

| **Type** | `string` |
| -------- | -------- |

## <a name="rightsHolder"></a>[Optional] Property `DataService > rightsHolder`

**Title:** rights holder

**Requirement:** Optional

A list of Agents (organizations) holding rights on the Data Service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be     | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](#rightsHolder_items) | An organization involved with a resource, including parent or child organizations |

### <a name="rightsHolder_items"></a>DataService > rightsHolder > Organization

**Title:** Organization

An organization involved with a resource, including parent or child organizations

| **Type**                  | `object`                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                                     |
| **Same definition as**    | [Organization](#servesDataset_items_otherIdentifier_items_anyOf_i1_creator_anyOf_i1) |

## <a name="spatial"></a>[Optional] Property `DataService > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Optional

A geographic region that is covered by the Data Service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                      |
| ------------------------------- | -------------------------------- |
| [Location](#spatial_items)      | A named place or geographic area |

### <a name="spatial_items"></a>DataService > spatial > Location

**Title:** Location

A named place or geographic area

| **Type**                  | `object`                                                                        |
| ------------------------- | ------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                |
| **Same definition as**    | [Location](#servesDataset_items_sample_items_accessService_items_spatial_items) |

## <a name="temporal"></a>[Optional] Property `DataService > temporal`

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| [PeriodOfTime](#temporal_items) | Information about a specific time period with a start- and/or end-time |

### <a name="temporal_items"></a>DataService > temporal > PeriodOfTime

**Title:** PeriodOfTime

Information about a specific time period with a start- and/or end-time

| **Type**                  | More than one type                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                                     |
| **Same definition as**    | [PeriodOfTime](#servesDataset_items_sample_items_accessService_items_temporal_items) |

## <a name="title"></a>[Optional] Property `DataService > title`

**Title:** title

**Requirement:** Optional

Human-readable title of the data service

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"Climate Data REST API"
```

## <a name="category"></a>[Optional] Property `DataService > category`

**Title:** category

**Requirement:** Optional

List of high-level categories for the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| [Concept](#category_items)      | A controlled term or label, optionally drawn from a concept scheme |

### <a name="category_items"></a>DataService > category > Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type                                                            |
| ------------------------- | ----------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                              |
| **Same definition as**    | [Concept](#servesDataset_items_sample_items_representationTechnique_anyOf_i1) |

## <a name="hasQualityMeasurement"></a>[Optional] Property `DataService > hasQualityMeasurement`

**Title:** quality measurement

**Requirement:** Optional

Quality measurements for the data service (for example, availability, response time, or reliability)

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                                   |
| -------------------------------------------------- | ------------------------------------------------------------- |
| [QualityMeasurement](#hasQualityMeasurement_items) | A measurement of a resource against a specific quality metric |

### <a name="hasQualityMeasurement_items"></a>DataService > hasQualityMeasurement > QualityMeasurement

**Title:** QualityMeasurement

A measurement of a resource against a specific quality metric

| **Type**                  | `object`                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                        |
| **Same definition as**    | [QualityMeasurement](#servesDataset_items_sample_items_accessService_items_hasQualityMeasurement_items) |

## <a name="qualifiedAttribution"></a>[Optional] Property `DataService > qualifiedAttribution`

**Title:** qualified attribution

**Requirement:** Optional

List of agents with specific responsibilities for the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be            | Description                                       |
| ------------------------------------------ | ------------------------------------------------- |
| [Attribution](#qualifiedAttribution_items) | A responsibility that an agent has for a resource |

### <a name="qualifiedAttribution_items"></a>DataService > qualifiedAttribution > Attribution

**Title:** Attribution

A responsibility that an agent has for a resource

| **Type**                  | `object`                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                                |
| **Same definition as**    | [Attribution](#servesDataset_items_sample_items_accessService_items_qualifiedAttribution_items) |

## <a name="wasUsedBy"></a>[Optional] Property `DataService > wasUsedBy`

**Title:** was used by

**Requirement:** Optional

List of activities that used or tested the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| [Activity](#wasUsedBy_items)    | An activity related to creating, changing, or using a resource |

### <a name="wasUsedBy_items"></a>DataService > wasUsedBy > Activity

**Title:** Activity

An activity related to creating, changing, or using a resource

| **Type**                  | `object`                                                                          |
| ------------------------- | --------------------------------------------------------------------------------- |
| **Additional properties** | Any type allowed                                                                  |
| **Same definition as**    | [Activity](#servesDataset_items_sample_items_accessService_items_wasUsedBy_items) |

---

## Attribution

**Title:** Attribution

A responsibility that an agent has for a resource

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "Attribution",
    "hadRole": "Data Steward",
    "agent": {
        "name": "Environmental Data Management Office"
    }
}
```

| Property               | Type   | Title/Description |
| ---------------------- | ------ | ----------------- |
| - [@id](#@id )         | string | -                 |
| - [@type](#@type )     | string | -                 |
| + [hadRole](#hadRole ) | string | role              |
| + [agent](#agent )     | object | agent             |

## <a name="@id"></a>[Optional] Property `Attribution > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/attributions/dataset-steward-001"
```

## <a name="@type"></a>[Optional] Property `Attribution > @type`

**Requirement:** Optional

| **Type**    | `string`        |
| ----------- | --------------- |
| **Default** | `"Attribution"` |

## <a name="hadRole"></a>[Optional] Property `Attribution > hadRole`

**Title:** role

**Requirement:** Optional

The function of an entity or agent with respect to another entity or resource

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"Data Steward"
```

## <a name="agent"></a>[Optional] Property `Attribution > agent`

**Title:** agent

**Requirement:** Optional

The agent that plays a role in the resource

| **Type**                  | `object`            |
| ------------------------- | ------------------- |
| **Required**              | Yes                 |
| **Additional properties** | Any type allowed    |
| **Defined in**            | [Agent](./Agent.md) |
