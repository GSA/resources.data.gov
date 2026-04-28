---
title: DCAT-US 3.0: Quality and Governance
layout: page
permalink: /standards/catalog/dcat-us-3/quality-governance/
primary_nav_section: Data Standards
category_name: Data standards
---
# Quality and Governance

Supporting classes for standards, documents, catalog records, data services, and attribution used in governance and quality description.

<a name="standard"></a>

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
| - [@id](#standard--@id)                         | string             | -                 |
| - [@type](#standard--@type)                     | string             | -                 |
| - [created](#standard--created)                 | More than one type | creation date     |
| - [description](#standard--description)         | null or string     | description       |
| - [identifier](#standard--identifier)           | More than one type | identifier        |
| - [otherIdentifier](#standard--otherIdentifier) | null or array      | other identifier  |
| - [issued](#standard--issued)                   | More than one type | issued            |
| - [modified](#standard--modified)               | More than one type | last modified     |
| - [title](#standard--title)                     | null or string     | title             |
| - [category](#standard--category)               | null or array      | category          |
| - [inScheme](#standard--inScheme)               | More than one type | in scheme         |

## <a name="standard--@id"></a>[Optional] Property `Standard > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/standards/dcat-us-3"
```

## <a name="standard--@type"></a>[Optional] Property `Standard > @type`

**Requirement:** Optional

| **Type**    | `string`     |
| ----------- | ------------ |
| **Default** | `"Standard"` |

## <a name="standard--created"></a>[Optional] Property `Standard > created`

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
| [Null allowed when not required](#standard--created_anyOf_i0) |
| [Date string](#standard--created_anyOf_i1)                    |

### <a name="standard--created_anyOf_i0"></a>Property `Standard > created > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--created_anyOf_i1"></a>Property `Standard > created > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                       |
| ------------------------------------ |
| [item 0](#standard--created_anyOf_i1_anyOf_i0) |
| [item 1](#standard--created_anyOf_i1_anyOf_i1) |
| [item 2](#standard--created_anyOf_i1_anyOf_i2) |
| [item 3](#standard--created_anyOf_i1_anyOf_i3) |

#### <a name="standard--created_anyOf_i1_anyOf_i0"></a>Property `Standard > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="standard--created_anyOf_i1_anyOf_i1"></a>Property `Standard > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="standard--created_anyOf_i1_anyOf_i2"></a>Property `Standard > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="standard--created_anyOf_i1_anyOf_i3"></a>Property `Standard > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="standard--description"></a>[Optional] Property `Standard > description`

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

## <a name="standard--identifier"></a>[Optional] Property `Standard > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Standard, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#standard--identifier_anyOf_i0) |
| [Identifier](#standard--identifier_anyOf_i1)                     |

### <a name="standard--identifier_anyOf_i0"></a>Property `Standard > identifier > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--identifier_anyOf_i1"></a>Property `Standard > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                                          |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Defined in**            | [Identifier](./identifiers-and-relationships.md#identifier) |

## <a name="standard--otherIdentifier"></a>[Optional] Property `Standard > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Standard besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](./identifiers-and-relationships.md#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="standard--issued"></a>[Optional] Property `Standard > issued`

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
| [Null allowed when not required](#standard--issued_anyOf_i0) |
| [Date string](#standard--issued_anyOf_i1)                    |

### <a name="standard--issued_anyOf_i0"></a>Property `Standard > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--issued_anyOf_i1"></a>Property `Standard > issued > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                      |
| ----------------------------------- |
| [item 0](#standard--issued_anyOf_i1_anyOf_i0) |
| [item 1](#standard--issued_anyOf_i1_anyOf_i1) |
| [item 2](#standard--issued_anyOf_i1_anyOf_i2) |
| [item 3](#standard--issued_anyOf_i1_anyOf_i3) |

#### <a name="standard--issued_anyOf_i1_anyOf_i0"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="standard--issued_anyOf_i1_anyOf_i1"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="standard--issued_anyOf_i1_anyOf_i2"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="standard--issued_anyOf_i1_anyOf_i3"></a>Property `Standard > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="standard--modified"></a>[Optional] Property `Standard > modified`

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
| [Null allowed when not required](#standard--modified_anyOf_i0) |
| [Date string](#standard--modified_anyOf_i1)                    |

### <a name="standard--modified_anyOf_i0"></a>Property `Standard > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--modified_anyOf_i1"></a>Property `Standard > modified > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                        |
| ------------------------------------- |
| [item 0](#standard--modified_anyOf_i1_anyOf_i0) |
| [item 1](#standard--modified_anyOf_i1_anyOf_i1) |
| [item 2](#standard--modified_anyOf_i1_anyOf_i2) |
| [item 3](#standard--modified_anyOf_i1_anyOf_i3) |

#### <a name="standard--modified_anyOf_i1_anyOf_i0"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="standard--modified_anyOf_i1_anyOf_i1"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="standard--modified_anyOf_i1_anyOf_i2"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="standard--modified_anyOf_i1_anyOf_i3"></a>Property `Standard > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="standard--title"></a>[Optional] Property `Standard > title`

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

## <a name="standard--category"></a>[Optional] Property `Standard > category`

**Title:** category

**Requirement:** Optional

List of categories for the Standard

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](./identifiers-and-relationships.md#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="standard--inScheme"></a>[Optional] Property `Standard > inScheme`

**Title:** in scheme

**Requirement:** Optional

The reference register to which the Standard belongs

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#standard--inScheme_anyOf_i0) |
| [ConceptScheme](#standard--inScheme_anyOf_i1)                  |

### <a name="standard--inScheme_anyOf_i0"></a>Property `Standard > inScheme > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--inScheme_anyOf_i1"></a>Property `Standard > inScheme > anyOf > ConceptScheme`

**Title:** ConceptScheme

inline description of ConceptScheme

| **Type**                  | `object`                                                           |
| ------------------------- | ------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                   |
| **Same definition as**    | [ConceptScheme](./identifiers-and-relationships.md#concept-scheme) |

---

<a name="document"></a>

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
| - [@id](#document--@id)                                     | string             | -                      |
| - [@type](#document--@type)                                 | string             | -                      |
| - [accessURL](#document--accessURL)                         | More than one type | access URL             |
| - [downloadURL](#document--downloadURL)                     | More than one type | download URL           |
| - [creator](#document--creator)                             | null or array      | author                 |
| - [mediaType](#document--mediaType)                         | null or string     | media type             |
| - [abstract](#document--abstract)                           | null or string     | abstract               |
| - [bibliographicCitation](#document--bibliographicCitation) | null or string     | bibliographic citation |
| - [conformsTo](#document--conformsTo)                       | null or array      | conforms to            |
| - [corporateCreator](#document--corporateCreator)           | null or array      | corporate author       |
| - [description](#document--description)                     | null or string     | description            |
| - [identifier](#document--identifier)                       | More than one type | identifier             |
| - [otherIdentifier](#document--otherIdentifier)             | null or array      | other identifier       |
| - [issued](#document--issued)                               | More than one type | publication date       |
| - [publisher](#document--publisher)                         | null or array      | publisher              |
| + [title](#document--title)                                 | string             | title                  |
| - [category](#document--category)                           | null or array      | category               |

## <a name="document--@id"></a>[Optional] Property `Document > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/documents/climate-user-guide-001"
```

## <a name="document--@type"></a>[Optional] Property `Document > @type`

**Requirement:** Optional

| **Type**    | `string`     |
| ----------- | ------------ |
| **Default** | `"Document"` |

## <a name="document--accessURL"></a>[Optional] Property `Document > accessURL`

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
| [Null allowed when not required](#document--accessURL_anyOf_i0) |
| [URL](#document--accessURL_anyOf_i1)                            |

### <a name="document--accessURL_anyOf_i0"></a>Property `Document > accessURL > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="document--accessURL_anyOf_i1"></a>Property `Document > accessURL > anyOf > URL`

**Title:** URL

reference iri of Document

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="document--downloadURL"></a>[Optional] Property `Document > downloadURL`

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
| [Null allowed when not required](#document--downloadURL_anyOf_i0) |
| [URL](#document--downloadURL_anyOf_i1)                            |

### <a name="document--downloadURL_anyOf_i0"></a>Property `Document > downloadURL > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="document--downloadURL_anyOf_i1"></a>Property `Document > downloadURL > anyOf > URL`

**Title:** URL

reference iri of Document

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="document--creator"></a>[Optional] Property `Document > creator`

**Title:** author

**Requirement:** Optional

The individual(s) responsible for creating the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](./agents.md#kind)        | Contact information for an individual or entity |

## <a name="document--mediaType"></a>[Optional] Property `Document > mediaType`

**Title:** media type

**Requirement:** Optional

The file format of the Document as defined in the official register of media types managed by IANA: https://www.iana.org/assignments/media-types/media-types.xhtml

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"application/pdf"
```

## <a name="document--abstract"></a>[Optional] Property `Document > abstract`

**Title:** abstract

**Requirement:** Optional

Text abstract of the Document

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"This document provides detailed instructions for using climate data products, including API access, file formats, and data interpretation guidelines."
```

## <a name="document--bibliographicCitation"></a>[Optional] Property `Document > bibliographicCitation`

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

## <a name="document--conformsTo"></a>[Optional] Property `Document > conformsTo`

**Title:** conforms to

**Requirement:** Optional

List of standards or specifications the document follows

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be              | Description                                                   |
| -------------------------------------------- | ------------------------------------------------------------- |
| [Standard](./quality-governance.md#standard) | A standard or specification that another resource conforms to |

## <a name="document--corporateCreator"></a>[Optional] Property `Document > corporateCreator`

**Title:** corporate author

**Requirement:** Optional

The corporate organization(s) responsible for creating the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](./agents.md#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="document--description"></a>[Optional] Property `Document > description`

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

## <a name="document--identifier"></a>[Optional] Property `Document > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Document (e.g. DOI, ISBN)

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#document--identifier_anyOf_i0) |
| [Identifier](#document--identifier_anyOf_i1)                     |

### <a name="document--identifier_anyOf_i0"></a>Property `Document > identifier > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="document--identifier_anyOf_i1"></a>Property `Document > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                                          |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Same definition as**    | [Identifier](./identifiers-and-relationships.md#identifier) |

## <a name="document--otherIdentifier"></a>[Optional] Property `Document > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Document besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](./identifiers-and-relationships.md#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="document--issued"></a>[Optional] Property `Document > issued`

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
| [Null allowed when not required](#document--issued_anyOf_i0) |
| [item 1](#document--issued_anyOf_i1)                         |

### <a name="document--issued_anyOf_i0"></a>Property `Document > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="document--issued_anyOf_i1"></a>Property `Document > issued > anyOf > item 1`

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                      |
| ----------------------------------- |
| [item 0](#document--issued_anyOf_i1_anyOf_i0) |
| [item 1](#document--issued_anyOf_i1_anyOf_i1) |
| [item 2](#document--issued_anyOf_i1_anyOf_i2) |
| [item 3](#document--issued_anyOf_i1_anyOf_i3) |

#### <a name="document--issued_anyOf_i1_anyOf_i0"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="document--issued_anyOf_i1_anyOf_i1"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="document--issued_anyOf_i1_anyOf_i2"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="document--issued_anyOf_i1_anyOf_i3"></a>Property `Document > issued > anyOf > item 1 > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="document--publisher"></a>[Optional] Property `Document > publisher`

**Title:** publisher

**Requirement:** Optional

The organization(s) that published the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](./agents.md#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="document--title"></a>[Optional] Property `Document > title`

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

## <a name="document--category"></a>[Optional] Property `Document > category`

**Title:** category

**Requirement:** Optional

List of categories/genres for the Document

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](./identifiers-and-relationships.md#concept) | A controlled term or label, optionally drawn from a concept scheme |

---

<a name="catalog-record"></a>

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
| - [@id](#catalog-record--@id)                   | string                  | -                        |
| - [@type](#catalog-record--@type)               | string                  | -                        |
| - [status](#catalog-record--status)             | More than one type      | change type              |
| - [conformsTo](#catalog-record--conformsTo)     | More than one type      | application profile      |
| - [description](#catalog-record--description)   | null or array of string | Descriptions             |
| - [issued](#catalog-record--issued)             | null or array           | listing date             |
| - [language](#catalog-record--language)         | More than one type      | language                 |
| + [modified](#catalog-record--modified)         | More than one type      | update/modification date |
| - [source](#catalog-record--source)             | null or string          | source metadata          |
| - [title](#catalog-record--title)               | null or string          | title                    |
| + [primaryTopic](#catalog-record--primaryTopic) | string                  | primary topic            |

## <a name="catalog-record--@id"></a>[Optional] Property `CatalogRecord > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/catalog-records/climate-dataset-record-001"
```

## <a name="catalog-record--@type"></a>[Optional] Property `CatalogRecord > @type`

**Requirement:** Optional

| **Type**    | `string`          |
| ----------- | ----------------- |
| **Default** | `"CatalogRecord"` |

## <a name="catalog-record--status"></a>[Optional] Property `CatalogRecord > status`

**Title:** change type

**Requirement:** Optional

The status of the catalog record in the context of editorial flow of the dataset and data service descriptions

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#catalog-record--status_anyOf_i0) |
| [Concept](#catalog-record--status_anyOf_i1)                        |

### <a name="catalog-record--status_anyOf_i0"></a>Property `CatalogRecord > status > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="catalog-record--status_anyOf_i1"></a>Property `CatalogRecord > status > anyOf > Concept`

**Title:** Concept

inline description of status

| **Type**                  | More than one type                                    |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Defined in**            | [Concept](./identifiers-and-relationships.md#concept) |

## <a name="catalog-record--conformsTo"></a>[Optional] Property `CatalogRecord > conformsTo`

**Title:** application profile

**Requirement:** Optional

An Application Profile that the Catalog Record's metadata conforms to

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                         |
| ------------------------------------------------------ |
| [Null allowed when not required](#catalog-record--conformsTo_anyOf_i0) |
| [Standard](#catalog-record--conformsTo_anyOf_i1)                       |

### <a name="catalog-record--conformsTo_anyOf_i0"></a>Property `CatalogRecord > conformsTo > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="catalog-record--conformsTo_anyOf_i1"></a>Property `CatalogRecord > conformsTo > anyOf > Standard`

**Title:** Standard

inline description of application profile

| **Type**                  | `object`                                     |
| ------------------------- | -------------------------------------------- |
| **Additional properties** | Any type allowed                             |
| **Defined in**            | [Standard](./quality-governance.md#standard) |

## <a name="catalog-record--description"></a>[Optional] Property `CatalogRecord > description`

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
| [Description string](#catalog-record--description_items) | -           |

### <a name="catalog-record--description_items"></a>CatalogRecord > description > Description string

**Title:** Description string

| **Type** | `string` |
| -------- | -------- |

## <a name="catalog-record--issued"></a>[Optional] Property `CatalogRecord > issued`

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
| [Date string](#catalog-record--issued_items)    | -           |

### <a name="catalog-record--issued_items"></a>CatalogRecord > issued > Date string

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                   |
| -------------------------------- |
| [item 0](#catalog-record--issued_items_anyOf_i0) |
| [item 1](#catalog-record--issued_items_anyOf_i1) |
| [item 2](#catalog-record--issued_items_anyOf_i2) |
| [item 3](#catalog-record--issued_items_anyOf_i3) |

#### <a name="catalog-record--issued_items_anyOf_i0"></a>Property `CatalogRecord > issued > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="catalog-record--issued_items_anyOf_i1"></a>Property `CatalogRecord > issued > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="catalog-record--issued_items_anyOf_i2"></a>Property `CatalogRecord > issued > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="catalog-record--issued_items_anyOf_i3"></a>Property `CatalogRecord > issued > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="catalog-record--language"></a>[Optional] Property `CatalogRecord > language`

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
| [Null allowed when not required](#catalog-record--language_anyOf_i0) |
| [Language code](#catalog-record--language_anyOf_i1)                  |
| [Array of language codes](#catalog-record--language_anyOf_i2)        |

### <a name="catalog-record--language_anyOf_i0"></a>Property `CatalogRecord > language > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="catalog-record--language_anyOf_i1"></a>Property `CatalogRecord > language > anyOf > Language code`

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="catalog-record--language_anyOf_i2"></a>Property `CatalogRecord > language > anyOf > Array of language codes`

**Title:** Array of language codes

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#catalog-record--language_anyOf_i2_items) | -           |

#### <a name="catalog-record--language_anyOf_i2_items"></a>CatalogRecord > language > anyOf > Array of language codes > Language code

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="catalog-record--modified"></a>[Optional] Property `CatalogRecord > modified`

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
| [item 0](#catalog-record--modified_anyOf_i0) |
| [item 1](#catalog-record--modified_anyOf_i1) |
| [item 2](#catalog-record--modified_anyOf_i2) |
| [item 3](#catalog-record--modified_anyOf_i3) |

### <a name="catalog-record--modified_anyOf_i0"></a>Property `CatalogRecord > modified > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

### <a name="catalog-record--modified_anyOf_i1"></a>Property `CatalogRecord > modified > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

### <a name="catalog-record--modified_anyOf_i2"></a>Property `CatalogRecord > modified > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

### <a name="catalog-record--modified_anyOf_i3"></a>Property `CatalogRecord > modified > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="catalog-record--source"></a>[Optional] Property `CatalogRecord > source`

**Title:** source metadata

**Requirement:** Optional

The original metadata that was used in creating metadata for the items in the catalog record, either a URL referencing the source metadata or a string of the source metadata itself

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Original metadata harvested from NOAA data portal"
```

## <a name="catalog-record--title"></a>[Optional] Property `CatalogRecord > title`

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

## <a name="catalog-record--primaryTopic"></a>[Optional] Property `CatalogRecord > primaryTopic`

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

<a name="data-service"></a>

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
| - [@id](#data-service--@id)                                             | string                  | -                            |
| - [@type](#data-service--@type)                                         | string                  | -                            |
| + [contactPoint](#data-service--contactPoint)                           | array                   | contact point                |
| - [endpointDescription](#data-service--endpointDescription)             | null or array of string | endpoint description         |
| + [endpointURL](#data-service--endpointURL)                             | array of string         | endpoint URL                 |
| - [keyword](#data-service--keyword)                                     | null or array of string | keyword/tag                  |
| - [servesDataset](#data-service--servesDataset)                         | null or array           | serves dataset               |
| - [spatialResolutionInMeters](#data-service--spatialResolutionInMeters) | null or string          | spatial resolution in meters |
| - [temporalResolution](#data-service--temporalResolution)               | null or string          | temporal resolution          |
| - [theme](#data-service--theme)                                         | null or array           | theme/category               |
| - [accessRights](#data-service--accessRights)                           | More than one type      | access rights                |
| - [conformsTo](#data-service--conformsTo)                               | null or array           | conforms to                  |
| - [created](#data-service--created)                                     | More than one type      | creation date                |
| - [creator](#data-service--creator)                                     | null or array           | creator                      |
| - [description](#data-service--description)                             | null or string          | description                  |
| - [identifier](#data-service--identifier)                               | More than one type      | identifier                   |
| - [otherIdentifier](#data-service--otherIdentifier)                     | null or array           | other identifier             |
| - [language](#data-service--language)                                   | More than one type      | language                     |
| - [license](#data-service--license)                                     | More than one type      | license                      |
| - [modified](#data-service--modified)                                   | More than one type      | update/modification date     |
| + [publisher](#data-service--publisher)                                 | object                  | publisher                    |
| - [rights](#data-service--rights)                                       | null or array of string | rights                       |
| - [rightsHolder](#data-service--rightsHolder)                           | null or array           | rights holder                |
| - [spatial](#data-service--spatial)                                     | null or array           | spatial/geographic coverage  |
| - [temporal](#data-service--temporal)                                   | null or array           | temporal coverage            |
| + [title](#data-service--title)                                         | string                  | title                        |
| - [category](#data-service--category)                                   | null or array           | category                     |
| - [hasQualityMeasurement](#data-service--hasQualityMeasurement)         | null or array           | quality measurement          |
| - [qualifiedAttribution](#data-service--qualifiedAttribution)           | null or array           | qualified attribution        |
| - [wasUsedBy](#data-service--wasUsedBy)                                 | null or array           | was used by                  |

## <a name="data-service--@id"></a>[Optional] Property `DataService > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/data-services/climate-api-001"
```

## <a name="data-service--@type"></a>[Optional] Property `DataService > @type`

**Requirement:** Optional

| **Type**    | `string`        |
| ----------- | --------------- |
| **Default** | `"DataService"` |

## <a name="data-service--contactPoint"></a>[Optional] Property `DataService > contactPoint`

**Title:** contact point

**Requirement:** Optional

Contact information for questions about the Data Service. Include an email address that is continuously monitored

| **Type**     | `array` |
| ------------ | ------- |
| **Required** | Yes     |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](./agents.md#kind)        | Contact information for an individual or entity |

## <a name="data-service--endpointDescription"></a>[Optional] Property `DataService > endpointDescription`

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
| [endpointDescription items](#data-service--endpointDescription_items) | -           |

### <a name="data-service--endpointDescription_items"></a>DataService > endpointDescription > endpointDescription items

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--endpointURL"></a>[Optional] Property `DataService > endpointURL`

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
| [URLs](#data-service--endpointURL_items)      | The root location or primary endpoint of the service (a Web-resolvable IRI) |

### <a name="data-service--endpointURL_items"></a>DataService > endpointURL > URLs

**Title:** URLs

The root location or primary endpoint of the service (a Web-resolvable IRI)

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="data-service--keyword"></a>[Optional] Property `DataService > keyword`

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
| [Non-empty strings](#data-service--keyword_items) | -           |

### <a name="data-service--keyword_items"></a>DataService > keyword > Non-empty strings

**Title:** Non-empty strings

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="data-service--servesDataset"></a>[Optional] Property `DataService > servesDataset`

**Title:** serves dataset

**Requirement:** Optional

List of datasets this service provides access to

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](./dataset.md#root)    | A collection of data published or curated by one provider |

## <a name="data-service--spatialResolutionInMeters"></a>[Optional] Property `DataService > spatialResolutionInMeters`

**Title:** spatial resolution in meters

**Requirement:** Optional

The minimum spatial separation resolvable in a Data Service, measured in meters

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"1000"
```

## <a name="data-service--temporalResolution"></a>[Optional] Property `DataService > temporalResolution`

**Title:** temporal resolution

**Requirement:** Optional

The minimum time period resolvable by the Data Service

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"P1D"
```

## <a name="data-service--theme"></a>[Optional] Property `DataService > theme`

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](./identifiers-and-relationships.md#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="data-service--accessRights"></a>[Optional] Property `DataService > accessRights`

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
| [item 0](#data-service--accessRights_anyOf_i0) |
| [item 1](#data-service--accessRights_anyOf_i1) |

### <a name="data-service--accessRights_anyOf_i0"></a>Property `DataService > accessRights > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--accessRights_anyOf_i1"></a>Property `DataService > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--conformsTo"></a>[Optional] Property `DataService > conformsTo`

**Title:** conforms to

**Requirement:** Optional

List of general standards or specifications that the Data Service endpoints implement

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be              | Description                                                   |
| -------------------------------------------- | ------------------------------------------------------------- |
| [Standard](./quality-governance.md#standard) | A standard or specification that another resource conforms to |

## <a name="data-service--created"></a>[Optional] Property `DataService > created`

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
| [item 0](#data-service--created_anyOf_i0)      |
| [Date string](#data-service--created_anyOf_i1) |

### <a name="data-service--created_anyOf_i0"></a>Property `DataService > created > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--created_anyOf_i1"></a>Property `DataService > created > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                       |
| ------------------------------------ |
| [item 0](#data-service--created_anyOf_i1_anyOf_i0) |
| [item 1](#data-service--created_anyOf_i1_anyOf_i1) |
| [item 2](#data-service--created_anyOf_i1_anyOf_i2) |
| [item 3](#data-service--created_anyOf_i1_anyOf_i3) |

#### <a name="data-service--created_anyOf_i1_anyOf_i0"></a>Property `DataService > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="data-service--created_anyOf_i1_anyOf_i1"></a>Property `DataService > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="data-service--created_anyOf_i1_anyOf_i2"></a>Property `DataService > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="data-service--created_anyOf_i1_anyOf_i3"></a>Property `DataService > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="data-service--creator"></a>[Optional] Property `DataService > creator`

**Title:** creator

**Requirement:** Optional

List of agents primarily responsible for producing the Data Service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](./agents.md#agent)      | A person, organization, software agent, or other entity involved with a resource |

## <a name="data-service--description"></a>[Optional] Property `DataService > description`

**Title:** description

**Requirement:** Optional

Plain-language summary of the data service

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"A RESTful API providing access to historical and real-time climate data including temperature, precipitation, and atmospheric conditions."
```

## <a name="data-service--identifier"></a>[Optional] Property `DataService > identifier`

**Title:** identifier

**Requirement:** Optional

The unique identifier for the Data Service, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                     |
| ---------------------------------- |
| [item 0](#data-service--identifier_anyOf_i0)     |
| [Identifier](#data-service--identifier_anyOf_i1) |

### <a name="data-service--identifier_anyOf_i0"></a>Property `DataService > identifier > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--identifier_anyOf_i1"></a>Property `DataService > identifier > anyOf > Identifier`

**Title:** Identifier

inline description of Identifier

| **Type**                  | More than one type                                          |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Same definition as**    | [Identifier](./identifiers-and-relationships.md#identifier) |

## <a name="data-service--otherIdentifier"></a>[Optional] Property `DataService > otherIdentifier`

**Title:** other identifier

**Requirement:** Optional

A list of identifiers for the Data Service besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](./identifiers-and-relationships.md#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="data-service--language"></a>[Optional] Property `DataService > language`

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
| [Null allowed when not required](#data-service--language_anyOf_i0) |
| [Language code](#data-service--language_anyOf_i1)                  |
| [List of lanuages](#data-service--language_anyOf_i2)               |

### <a name="data-service--language_anyOf_i0"></a>Property `DataService > language > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--language_anyOf_i1"></a>Property `DataService > language > anyOf > Language code`

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="data-service--language_anyOf_i2"></a>Property `DataService > language > anyOf > List of lanuages`

**Title:** List of lanuages

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#data-service--language_anyOf_i2_items) | -           |

#### <a name="data-service--language_anyOf_i2_items"></a>DataService > language > anyOf > List of lanuages > Language code

**Title:** Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="data-service--license"></a>[Optional] Property `DataService > license`

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
| [Null allowed when not required](#data-service--license_anyOf_i0) |
| [item 1](#data-service--license_anyOf_i1)                         |

### <a name="data-service--license_anyOf_i0"></a>Property `DataService > license > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--license_anyOf_i1"></a>Property `DataService > license > anyOf > item 1`

Full text of the license

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--modified"></a>[Optional] Property `DataService > modified`

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
| [Null allowed when not required](#data-service--modified_anyOf_i0) |
| [Date string](#data-service--modified_anyOf_i1)                    |

### <a name="data-service--modified_anyOf_i0"></a>Property `DataService > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--modified_anyOf_i1"></a>Property `DataService > modified > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                        |
| ------------------------------------- |
| [item 0](#data-service--modified_anyOf_i1_anyOf_i0) |
| [item 1](#data-service--modified_anyOf_i1_anyOf_i1) |
| [item 2](#data-service--modified_anyOf_i1_anyOf_i2) |
| [item 3](#data-service--modified_anyOf_i1_anyOf_i3) |

#### <a name="data-service--modified_anyOf_i1_anyOf_i0"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="data-service--modified_anyOf_i1_anyOf_i1"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="data-service--modified_anyOf_i1_anyOf_i2"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="data-service--modified_anyOf_i1_anyOf_i3"></a>Property `DataService > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="data-service--publisher"></a>[Optional] Property `DataService > publisher`

**Title:** publisher

**Requirement:** Optional

Person or organization responsible for publishing and making the data service available

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Required**              | Yes                        |
| **Additional properties** | Any type allowed           |
| **Defined in**            | [Agent](./agents.md#agent) |

## <a name="data-service--rights"></a>[Optional] Property `DataService > rights`

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
| [rights items](#data-service--rights_items)   | -           |

### <a name="data-service--rights_items"></a>DataService > rights > rights items

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--rightsHolder"></a>[Optional] Property `DataService > rightsHolder`

**Title:** rights holder

**Requirement:** Optional

A list of Agents (organizations) holding rights on the Data Service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](./agents.md#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="data-service--spatial"></a>[Optional] Property `DataService > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Optional

A geographic region that is covered by the Data Service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                      |
| -------------------------------------------------- | -------------------------------- |
| [Location](./temporal-spatial-metrics.md#location) | A named place or geographic area |

## <a name="data-service--temporal"></a>[Optional] Property `DataService > temporal`

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                              | Description                                                            |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [PeriodOfTime](./temporal-spatial-metrics.md#period-of-time) | Information about a specific time period with a start- and/or end-time |

## <a name="data-service--title"></a>[Optional] Property `DataService > title`

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

## <a name="data-service--category"></a>[Optional] Property `DataService > category`

**Title:** category

**Requirement:** Optional

List of high-level categories for the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](./identifiers-and-relationships.md#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="data-service--hasQualityMeasurement"></a>[Optional] Property `DataService > hasQualityMeasurement`

**Title:** quality measurement

**Requirement:** Optional

Quality measurements for the data service (for example, availability, response time, or reliability)

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                                         | Description                                                   |
| ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| [QualityMeasurement](./temporal-spatial-metrics.md#quality-measurement) | A measurement of a resource against a specific quality metric |

## <a name="data-service--qualifiedAttribution"></a>[Optional] Property `DataService > qualifiedAttribution`

**Title:** qualified attribution

**Requirement:** Optional

List of agents with specific responsibilities for the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                       |
| -------------------------------------------------- | ------------------------------------------------- |
| [Attribution](./quality-governance.md#attribution) | A responsibility that an agent has for a resource |

## <a name="data-service--wasUsedBy"></a>[Optional] Property `DataService > wasUsedBy`

**Title:** was used by

**Requirement:** Optional

List of activities that used or tested the data service

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                    | Description                                                    |
| -------------------------------------------------- | -------------------------------------------------------------- |
| [Activity](./temporal-spatial-metrics.md#activity) | An activity related to creating, changing, or using a resource |

---

<a name="attribution"></a>

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
| - [@id](#attribution--@id)         | string | -                 |
| - [@type](#attribution--@type)     | string | -                 |
| + [hadRole](#attribution--hadRole) | string | role              |
| + [agent](#attribution--agent)     | object | agent             |

## <a name="attribution--@id"></a>[Optional] Property `Attribution > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/attributions/dataset-steward-001"
```

## <a name="attribution--@type"></a>[Optional] Property `Attribution > @type`

**Requirement:** Optional

| **Type**    | `string`        |
| ----------- | --------------- |
| **Default** | `"Attribution"` |

## <a name="attribution--hadRole"></a>[Optional] Property `Attribution > hadRole`

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

## <a name="attribution--agent"></a>[Optional] Property `Attribution > agent`

**Title:** agent

**Requirement:** Optional

The agent that plays a role in the resource

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Required**              | Yes                        |
| **Additional properties** | Any type allowed           |
| **Defined in**            | [Agent](./agents.md#agent) |
