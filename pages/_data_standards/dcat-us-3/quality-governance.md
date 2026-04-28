---
title: "DCAT-US 3.0: Quality and Governance"
layout: "page"
permalink: "/standards/catalog/dcat-us-3/quality-governance/"
primary_nav_section: "Data Standards"
category_name: "Data standards"
---
# Quality and Governance

Supporting classes for standards, documents, catalog records, data services, and attribution used in governance and quality description.

<a name="standard"></a>

## Class Standard

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

| Property                             | Type                                                                                 | Requirement Level | Title/Description                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [@id](#standard--@id)                         | string                                                                               | Optional          |                                                                                                                                            |
| [@type](#standard--@type)                     | string                                                                               | Optional          |                                                                                                                                            |
| [created](#standard--created)                 | More than one type                                                                   | Optional          | The date on which the Standard has been first created                                                                                      |
| [description](#standard--description)         | null or string                                                                       | Recommended       | Plain-language summary of the standard                                                                                                     |
| [identifier](#standard--identifier)           | More than one type                                                                   | Recommended       | The unique identifier for the Standard, e.g. the URI or other unique identifier in the context of the Catalog                              |
| [otherIdentifier](#standard--otherIdentifier) | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes | Optional          | A list of identifiers for the Standard besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog |
| [issued](#standard--issued)                   | More than one type                                                                   | Recommended       | The date of formal issuance (e.g., publication) of the Standard                                                                            |
| [modified](#standard--modified)               | More than one type                                                                   | Optional          | The most recent date on which the Standard was changed or modified                                                                         |
| [title](#standard--title)                     | null or string                                                                       | Recommended       | Human-readable title of the standard                                                                                                       |
| [category](#standard--category)               | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes       | Optional          | List of categories for the Standard                                                                                                        |
| [inScheme](#standard--inScheme)               | More than one type                                                                   | Recommended       | The reference register to which the Standard belongs                                                                                       |

## <a name="standard--@id"></a>`Standard > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/standards/dcat-us-3"
```

## <a name="standard--@type"></a>`Standard > @type`

**Requirement:** Optional

| **Type**    | `string`     |
| ----------- | ------------ |
| **Default** | `"Standard"` |

## <a name="standard--created"></a>`Standard > created`

**Title:** creation date

**Requirement:** Optional

The date on which the Standard has been first created

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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

| Any of                                              |
| --------------------------------------------------- |
| [Null allowed when not required](#standard--created_anyOf_i0) |
| [Date string](#standard--created_anyOf_i1)                    |

### <a name="standard--created_anyOf_i0"></a>`Standard > created > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--created_anyOf_i1"></a>`Standard > created > anyOf > Date string`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                               |
| ------------------------------------ |
| [item 0](#standard--created_anyOf_i1_anyOf_i0) |
| [item 1](#standard--created_anyOf_i1_anyOf_i1) |
| [item 2](#standard--created_anyOf_i1_anyOf_i2) |
| [item 3](#standard--created_anyOf_i1_anyOf_i3) |

#### <a name="standard--created_anyOf_i1_anyOf_i0"></a>`Standard > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="standard--created_anyOf_i1_anyOf_i1"></a>`Standard > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="standard--created_anyOf_i1_anyOf_i2"></a>`Standard > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="standard--created_anyOf_i1_anyOf_i3"></a>`Standard > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="standard--description"></a>`Standard > description`

**Requirement:** Recommended

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

## <a name="standard--identifier"></a>`Standard > identifier`

**Requirement:** Recommended

The unique identifier for the Standard, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                 |
| ------------------------------------------------------ |
| [Null allowed when not required](#standard--identifier_anyOf_i0) |
| [Identifier](#standard--identifier_anyOf_i1)                     |

### <a name="standard--identifier_anyOf_i0"></a>`Standard > identifier > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--identifier_anyOf_i1"></a>`Standard > identifier > anyOf > Identifier`

inline description of Identifier

| **Type**                  | `combining`                                                 |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Defined in**            | [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) |

## <a name="standard--otherIdentifier"></a>`Standard > otherIdentifier`

**Requirement:** Optional

A list of identifiers for the Standard besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes |
| -------- | ------------------------------------------------------------------------------------ |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="standard--issued"></a>`Standard > issued`

**Requirement:** Recommended

The date of formal issuance (e.g., publication) of the Standard

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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
| [Null allowed when not required](#standard--issued_anyOf_i0) |
| [Date string](#standard--issued_anyOf_i1)                    |

### <a name="standard--issued_anyOf_i0"></a>`Standard > issued > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--issued_anyOf_i1"></a>`Standard > issued > anyOf > Date string`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                              |
| ----------------------------------- |
| [item 0](#standard--issued_anyOf_i1_anyOf_i0) |
| [item 1](#standard--issued_anyOf_i1_anyOf_i1) |
| [item 2](#standard--issued_anyOf_i1_anyOf_i2) |
| [item 3](#standard--issued_anyOf_i1_anyOf_i3) |

#### <a name="standard--issued_anyOf_i1_anyOf_i0"></a>`Standard > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="standard--issued_anyOf_i1_anyOf_i1"></a>`Standard > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="standard--issued_anyOf_i1_anyOf_i2"></a>`Standard > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="standard--issued_anyOf_i1_anyOf_i3"></a>`Standard > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="standard--modified"></a>`Standard > modified`

**Title:** last modified

**Requirement:** Optional

The most recent date on which the Standard was changed or modified

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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
| [Null allowed when not required](#standard--modified_anyOf_i0) |
| [Date string](#standard--modified_anyOf_i1)                    |

### <a name="standard--modified_anyOf_i0"></a>`Standard > modified > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--modified_anyOf_i1"></a>`Standard > modified > anyOf > Date string`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                |
| ------------------------------------- |
| [item 0](#standard--modified_anyOf_i1_anyOf_i0) |
| [item 1](#standard--modified_anyOf_i1_anyOf_i1) |
| [item 2](#standard--modified_anyOf_i1_anyOf_i2) |
| [item 3](#standard--modified_anyOf_i1_anyOf_i3) |

#### <a name="standard--modified_anyOf_i1_anyOf_i0"></a>`Standard > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="standard--modified_anyOf_i1_anyOf_i1"></a>`Standard > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="standard--modified_anyOf_i1_anyOf_i2"></a>`Standard > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="standard--modified_anyOf_i1_anyOf_i3"></a>`Standard > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="standard--title"></a>`Standard > title`

**Requirement:** Recommended

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

## <a name="standard--category"></a>`Standard > category`

**Requirement:** Optional

List of categories for the Standard

| **Type** | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes |
| -------- | ------------------------------------------------------------------------------ |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="standard--inScheme"></a>`Standard > inScheme`

**Requirement:** Recommended

The reference register to which the Standard belongs

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#standard--inScheme_anyOf_i0) |
| [ConceptScheme](#standard--inScheme_anyOf_i1)                  |

### <a name="standard--inScheme_anyOf_i0"></a>`Standard > inScheme > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="standard--inScheme_anyOf_i1"></a>`Standard > inScheme > anyOf > ConceptScheme`

inline description of ConceptScheme

| **Type**                  | `object`                                                           |
| ------------------------- | ------------------------------------------------------------------ |
| **Additional properties** | Any type allowed                                                   |
| **Same definition as**    | [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme) |

---

<a name="document"></a>

## Class Document

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

| Property                                         | Type                                                                                 | Requirement Level | Title/Description                                                                                                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [@id](#document--@id)                                     | string                                                                               | Optional          |                                                                                                                                                                    |
| [@type](#document--@type)                                 | string                                                                               | Optional          |                                                                                                                                                                    |
| [accessURL](#document--accessURL)                         | More than one type                                                                   | Optional          | A URL that gives access to the Document                                                                                                                            |
| [downloadURL](#document--downloadURL)                     | More than one type                                                                   | Optional          | A URL that is a direct link to a downloadable file of the Document in a given format                                                                               |
| [creator](#document--creator)                             | null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes                                    | Optional          | The individual(s) responsible for creating the Document                                                                                                            |
| [mediaType](#document--mediaType)                         | null or string                                                                       | Optional          | The file format of the Document as defined in the official register of media types managed by IANA: https://www.iana.org/assignments/media-types/media-types.xhtml |
| [abstract](#document--abstract)                           | null or string                                                                       | Optional          | Text abstract of the Document                                                                                                                                      |
| [bibliographicCitation](#document--bibliographicCitation) | null or string                                                                       | Recommended       | Bibliographic citation as text                                                                                                                                     |
| [conformsTo](#document--conformsTo)                       | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes                | Optional          | List of standards or specifications the document follows                                                                                                           |
| [corporateCreator](#document--corporateCreator)           | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                    | Optional          | The corporate organization(s) responsible for creating the Document                                                                                                |
| [description](#document--description)                     | null or string                                                                       | Recommended       | Plain-language summary of the document                                                                                                                             |
| [identifier](#document--identifier)                       | More than one type                                                                   | Recommended       | The unique identifier for the Document (e.g. DOI, ISBN)                                                                                                            |
| [otherIdentifier](#document--otherIdentifier)             | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes | Optional          | A list of identifiers for the Document besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog                         |
| [issued](#document--issued)                               | More than one type                                                                   | Recommended       | Publication date of the Document                                                                                                                                   |
| [publisher](#document--publisher)                         | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                    | Recommended       | The organization(s) that published the Document                                                                                                                    |
| [title](#document--title)                                 | string                                                                               | Mandatory         | The title of the Document                                                                                                                                          |
| [category](#document--category)                           | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes       | Optional          | List of categories/genres for the Document                                                                                                                         |

## <a name="document--@id"></a>`Document > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/documents/climate-user-guide-001"
```

## <a name="document--@type"></a>`Document > @type`

**Requirement:** Optional

| **Type**    | `string`     |
| ----------- | ------------ |
| **Default** | `"Document"` |

## <a name="document--accessURL"></a>`Document > accessURL`

**Requirement:** Optional

A URL that gives access to the Document

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
"https://example.gov/docs/climate-user-guide"
```

| Any of                                                |
| ----------------------------------------------------- |
| [Null allowed when not required](#document--accessURL_anyOf_i0) |
| [URL](#document--accessURL_anyOf_i1)                            |

### <a name="document--accessURL_anyOf_i0"></a>`Document > accessURL > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="document--accessURL_anyOf_i1"></a>`Document > accessURL > anyOf > URL`

reference iri of Document

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="document--downloadURL"></a>`Document > downloadURL`

**Requirement:** Optional

A URL that is a direct link to a downloadable file of the Document in a given format

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
"https://example.gov/docs/climate-user-guide.pdf"
```

| Any of                                                  |
| ------------------------------------------------------- |
| [Null allowed when not required](#document--downloadURL_anyOf_i0) |
| [URL](#document--downloadURL_anyOf_i1)                            |

### <a name="document--downloadURL_anyOf_i0"></a>`Document > downloadURL > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="document--downloadURL_anyOf_i1"></a>`Document > downloadURL > anyOf > URL`

reference iri of Document

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="document--creator"></a>`Document > creator`

**Title:** author

**Requirement:** Optional

The individual(s) responsible for creating the Document

| **Type** | null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes |
| -------- | ------------------------------------------------- |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](/standards/catalog/dcat-us-3/agents/#kind)        | Contact information for an individual or entity |

## <a name="document--mediaType"></a>`Document > mediaType`

**Requirement:** Optional

The file format of the Document as defined in the official register of media types managed by IANA: https://www.iana.org/assignments/media-types/media-types.xhtml

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"application/pdf"
```

## <a name="document--abstract"></a>`Document > abstract`

**Requirement:** Optional

Text abstract of the Document

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"This document provides detailed instructions for using climate data products, including API access, file formats, and data interpretation guidelines."
```

## <a name="document--bibliographicCitation"></a>`Document > bibliographicCitation`

**Requirement:** Recommended

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

## <a name="document--conformsTo"></a>`Document > conformsTo`

**Requirement:** Optional

List of standards or specifications the document follows

| **Type** | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes |
| -------- | --------------------------------------------------------------------- |

| Each item of this array must be              | Description                                                   |
| -------------------------------------------- | ------------------------------------------------------------- |
| [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) | A standard or specification that another resource conforms to |

## <a name="document--corporateCreator"></a>`Document > corporateCreator`

**Title:** corporate author

**Requirement:** Optional

The corporate organization(s) responsible for creating the Document

| **Type** | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes |
| -------- | ----------------------------------------------------------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](/standards/catalog/dcat-us-3/agents/#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="document--description"></a>`Document > description`

**Requirement:** Recommended

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

## <a name="document--identifier"></a>`Document > identifier`

**Requirement:** Recommended

The unique identifier for the Document (e.g. DOI, ISBN)

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                 |
| ------------------------------------------------------ |
| [Null allowed when not required](#document--identifier_anyOf_i0) |
| [Identifier](#document--identifier_anyOf_i1)                     |

### <a name="document--identifier_anyOf_i0"></a>`Document > identifier > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="document--identifier_anyOf_i1"></a>`Document > identifier > anyOf > Identifier`

inline description of Identifier

| **Type**                  | `combining`                                                 |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Same definition as**    | [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) |

## <a name="document--otherIdentifier"></a>`Document > otherIdentifier`

**Requirement:** Optional

A list of identifiers for the Document besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes |
| -------- | ------------------------------------------------------------------------------------ |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="document--issued"></a>`Document > issued`

**Title:** publication date

**Requirement:** Recommended

Publication date of the Document

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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
| [Null allowed when not required](#document--issued_anyOf_i0) |
| [item 1](#document--issued_anyOf_i1)                         |

### <a name="document--issued_anyOf_i0"></a>`Document > issued > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="document--issued_anyOf_i1"></a>`Document > issued > anyOf > item 1`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                              |
| ----------------------------------- |
| [item 0](#document--issued_anyOf_i1_anyOf_i0) |
| [item 1](#document--issued_anyOf_i1_anyOf_i1) |
| [item 2](#document--issued_anyOf_i1_anyOf_i2) |
| [item 3](#document--issued_anyOf_i1_anyOf_i3) |

#### <a name="document--issued_anyOf_i1_anyOf_i0"></a>`Document > issued > anyOf > item 1 > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="document--issued_anyOf_i1_anyOf_i1"></a>`Document > issued > anyOf > item 1 > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="document--issued_anyOf_i1_anyOf_i2"></a>`Document > issued > anyOf > item 1 > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="document--issued_anyOf_i1_anyOf_i3"></a>`Document > issued > anyOf > item 1 > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="document--publisher"></a>`Document > publisher`

**Requirement:** Recommended

The organization(s) that published the Document

| **Type** | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes |
| -------- | ----------------------------------------------------------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](/standards/catalog/dcat-us-3/agents/#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="document--title"></a>`Document > title`

**Requirement:** Mandatory

The title of the Document

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"Climate Data User Guide"
```

## <a name="document--category"></a>`Document > category`

**Requirement:** Optional

List of categories/genres for the Document

| **Type** | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes |
| -------- | ------------------------------------------------------------------------------ |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

---

<a name="catalog-record"></a>

## Class CatalogRecord

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

| Property                       | Type                    | Requirement Level | Title/Description                                                                                                                                                                    |
| ------------------------------ | ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [@id](#catalog-record--@id)                   | string                  | Optional          |                                                                                                                                                                                      |
| [@type](#catalog-record--@type)               | string                  | Optional          |                                                                                                                                                                                      |
| [status](#catalog-record--status)             | More than one type      | Recommended       | The status of the catalog record in the context of editorial flow of the dataset and data service descriptions                                                                       |
| [conformsTo](#catalog-record--conformsTo)     | More than one type      | Recommended       | An Application Profile that the Catalog Record's metadata conforms to                                                                                                                |
| [description](#catalog-record--description)   | null or array of string | Optional          | A list of free-text accounts of the catalog record                                                                                                                                   |
| [issued](#catalog-record--issued)             | null or array of object | Optional          | List of dates on which the catalog record was included in the catalog                                                                                                                |
| [language](#catalog-record--language)         | More than one type      | Optional          | Language code used in catalog record metadata text, using ISO 639-1 values such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html                    |
| [modified](#catalog-record--modified)         | More than one type      | Mandatory         | The most recent date on which the catalog record was changed or modified                                                                                                             |
| [source](#catalog-record--source)             | null or string          | Optional          | The original metadata that was used in creating metadata for the items in the catalog record, either a URL referencing the source metadata or a string of the source metadata itself |
| [title](#catalog-record--title)               | null or string          | Optional          | A name given to the Catalog Record                                                                                                                                                   |
| [primaryTopic](#catalog-record--primaryTopic) | string                  | Mandatory         | A link to the Dataset, Data service or Catalog described in the Catalog Record                                                                                                       |

## <a name="catalog-record--@id"></a>`CatalogRecord > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/catalog-records/climate-dataset-record-001"
```

## <a name="catalog-record--@type"></a>`CatalogRecord > @type`

**Requirement:** Optional

| **Type**    | `string`          |
| ----------- | ----------------- |
| **Default** | `"CatalogRecord"` |

## <a name="catalog-record--status"></a>`CatalogRecord > status`

**Title:** change type

**Requirement:** Recommended

The status of the catalog record in the context of editorial flow of the dataset and data service descriptions

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                             |
| -------------------------------------------------- |
| [Null allowed when not required](#catalog-record--status_anyOf_i0) |
| [Concept](#catalog-record--status_anyOf_i1)                        |

### <a name="catalog-record--status_anyOf_i0"></a>`CatalogRecord > status > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="catalog-record--status_anyOf_i1"></a>`CatalogRecord > status > anyOf > Concept`

inline description of status

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Defined in**            | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

## <a name="catalog-record--conformsTo"></a>`CatalogRecord > conformsTo`

**Title:** application profile

**Requirement:** Recommended

An Application Profile that the Catalog Record's metadata conforms to

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                                 |
| ------------------------------------------------------ |
| [Null allowed when not required](#catalog-record--conformsTo_anyOf_i0) |
| [Standard](#catalog-record--conformsTo_anyOf_i1)                       |

### <a name="catalog-record--conformsTo_anyOf_i0"></a>`CatalogRecord > conformsTo > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="catalog-record--conformsTo_anyOf_i1"></a>`CatalogRecord > conformsTo > anyOf > Standard`

inline description of application profile

| **Type**                  | `object`                                     |
| ------------------------- | -------------------------------------------- |
| **Additional properties** | Any type allowed                             |
| **Defined in**            | [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) |

## <a name="catalog-record--description"></a>`CatalogRecord > description`

**Title:** Descriptions

**Requirement:** Optional

A list of free-text accounts of the catalog record

| **Type** | null or array of string |
| -------- | ----------------------- |

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

### <a name="catalog-record--description_items"></a>Description string

| **Type** | `string` |
| -------- | -------- |

## <a name="catalog-record--issued"></a>`CatalogRecord > issued`

**Title:** listing date

**Requirement:** Optional

List of dates on which the catalog record was included in the catalog

| **Type** | null or array of object |
| -------- | ----------------------- |

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

### <a name="catalog-record--issued_items"></a>Date string

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                           |
| -------------------------------- |
| [item 0](#catalog-record--issued_items_anyOf_i0) |
| [item 1](#catalog-record--issued_items_anyOf_i1) |
| [item 2](#catalog-record--issued_items_anyOf_i2) |
| [item 3](#catalog-record--issued_items_anyOf_i3) |

#### <a name="catalog-record--issued_items_anyOf_i0"></a>`CatalogRecord > issued > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="catalog-record--issued_items_anyOf_i1"></a>`CatalogRecord > issued > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="catalog-record--issued_items_anyOf_i2"></a>`CatalogRecord > issued > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="catalog-record--issued_items_anyOf_i3"></a>`CatalogRecord > issued > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="catalog-record--language"></a>`CatalogRecord > language`

**Requirement:** Optional

Language code used in catalog record metadata text, using ISO 639-1 values such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

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
| [Null allowed when not required](#catalog-record--language_anyOf_i0) |
| [Language code](#catalog-record--language_anyOf_i1)                  |
| [Array of language codes](#catalog-record--language_anyOf_i2)        |

### <a name="catalog-record--language_anyOf_i0"></a>`CatalogRecord > language > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="catalog-record--language_anyOf_i1"></a>`CatalogRecord > language > anyOf > Language code`

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="catalog-record--language_anyOf_i2"></a>`CatalogRecord > language > anyOf > Array of language codes`

| **Type** | array of string |
| -------- | --------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#catalog-record--language_anyOf_i2_items) | -           |

#### <a name="catalog-record--language_anyOf_i2_items"></a>Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="catalog-record--modified"></a>`CatalogRecord > modified`

**Title:** update/modification date

**Requirement:** Mandatory

The most recent date on which the catalog record was changed or modified

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Required**              | Yes              |
| **Additional properties** | Any type allowed |

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

| Any of                       |
| ---------------------------- |
| [item 0](#catalog-record--modified_anyOf_i0) |
| [item 1](#catalog-record--modified_anyOf_i1) |
| [item 2](#catalog-record--modified_anyOf_i2) |
| [item 3](#catalog-record--modified_anyOf_i3) |

### <a name="catalog-record--modified_anyOf_i0"></a>`CatalogRecord > modified > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

### <a name="catalog-record--modified_anyOf_i1"></a>`CatalogRecord > modified > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

### <a name="catalog-record--modified_anyOf_i2"></a>`CatalogRecord > modified > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

### <a name="catalog-record--modified_anyOf_i3"></a>`CatalogRecord > modified > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="catalog-record--source"></a>`CatalogRecord > source`

**Title:** source metadata

**Requirement:** Optional

The original metadata that was used in creating metadata for the items in the catalog record, either a URL referencing the source metadata or a string of the source metadata itself

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Original metadata harvested from NOAA data portal"
```

## <a name="catalog-record--title"></a>`CatalogRecord > title`

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

## <a name="catalog-record--primaryTopic"></a>`CatalogRecord > primaryTopic`

**Requirement:** Mandatory

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

## Class DataService

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

| Property                                                 | Type                                                                                             | Requirement Level | Title/Description                                                                                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#data-service--@id)                                             | string                                                                                           | Optional          |                                                                                                                                                      |
| [@type](#data-service--@type)                                         | string                                                                                           | Optional          |                                                                                                                                                      |
| [contactPoint](#data-service--contactPoint)                           | array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes                                                        | Mandatory         | Contact information for questions about the Data Service. Include an email address that is continuously monitored                                    |
| [endpointDescription](#data-service--endpointDescription)             | null or array of string                                                                          | Recommended       | List of endpoint descriptions with operations and parameters (for example, OpenAPI or similar service documentation)                                 |
| [endpointURL](#data-service--endpointURL)                             | array of string                                                                                  | Mandatory         | A list of root locations or primary endpoints of the service (a Web-resolvable IRI)                                                                  |
| [keyword](#data-service--keyword)                                     | null or array of string                                                                          | Optional          | List of keywords or tags describing the data service                                                                                                 |
| [servesDataset](#data-service--servesDataset)                         | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                            | Recommended       | List of datasets this service provides access to                                                                                                     |
| [spatialResolutionInMeters](#data-service--spatialResolutionInMeters) | null or string                                                                                   | Optional          | The minimum spatial separation resolvable in a Data Service, measured in meters                                                                      |
| [temporalResolution](#data-service--temporalResolution)               | null or string                                                                                   | Optional          | The minimum time period resolvable by the Data Service                                                                                               |
| [theme](#data-service--theme)                                         | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes                   | Optional          | List of themes or categories for the data service                                                                                                    |
| [accessRights](#data-service--accessRights)                           | More than one type                                                                               | Optional          | Information about whether the data service is publicly accessible, restricted, or not public                                                         |
| [conformsTo](#data-service--conformsTo)                               | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes                            | Optional          | List of general standards or specifications that the Data Service endpoints implement                                                                |
| [created](#data-service--created)                                     | More than one type                                                                               | Optional          | The date on which the Data Service was first created                                                                                                 |
| [creator](#data-service--creator)                                     | null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes                                              | Optional          | List of agents primarily responsible for producing the Data Service                                                                                  |
| [description](#data-service--description)                             | null or string                                                                                   | Optional          | Plain-language summary of the data service                                                                                                           |
| [identifier](#data-service--identifier)                               | More than one type                                                                               | Optional          | The unique identifier for the Data Service, e.g. the URI or other unique identifier in the context of the Catalog                                    |
| [otherIdentifier](#data-service--otherIdentifier)                     | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes             | Optional          | A list of identifiers for the Data Service besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog       |
| [language](#data-service--language)                                   | More than one type                                                                               | Optional          | ISO 639-1 language code values supported by the data service, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html |
| [license](#data-service--license)                                     | More than one type                                                                               | Recommended       | License that governs how the data service can be used or reused                                                                                      |
| [modified](#data-service--modified)                                   | More than one type                                                                               | Optional          | The most recent date on which the Data Service was changed or modified                                                                               |
| [publisher](#data-service--publisher)                                 | object                                                                                           | Mandatory         | Person or organization responsible for publishing and making the data service available                                                              |
| [rights](#data-service--rights)                                       | null or array of string                                                                          | Optional          | Rights statements not already covered by license or accessRights, such as copyright or policy restrictions                                           |
| [rightsHolder](#data-service--rightsHolder)                           | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                                | Optional          | A list of Agents (organizations) holding rights on the Data Service                                                                                  |
| [spatial](#data-service--spatial)                                     | null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes                      | Optional          | A geographic region that is covered by the Data Service                                                                                              |
| [temporal](#data-service--temporal)                                   | null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes            | Optional          | Time periods covered by the data service                                                                                                             |
| [title](#data-service--title)                                         | string                                                                                           | Mandatory         | Human-readable title of the data service                                                                                                             |
| [category](#data-service--category)                                   | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes                   | Optional          | List of high-level categories for the data service                                                                                                   |
| [hasQualityMeasurement](#data-service--hasQualityMeasurement)         | null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes | Optional          | Quality measurements for the data service (for example, availability, response time, or reliability)                                                 |
| [qualifiedAttribution](#data-service--qualifiedAttribution)           | null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes                      | Optional          | List of agents with specific responsibilities for the data service                                                                                   |
| [wasUsedBy](#data-service--wasUsedBy)                                 | null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes                      | Optional          | List of activities that used or tested the data service                                                                                              |

## <a name="data-service--@id"></a>`DataService > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/data-services/climate-api-001"
```

## <a name="data-service--@type"></a>`DataService > @type`

**Requirement:** Optional

| **Type**    | `string`        |
| ----------- | --------------- |
| **Default** | `"DataService"` |

## <a name="data-service--contactPoint"></a>`DataService > contactPoint`

**Requirement:** Mandatory

Contact information for questions about the Data Service. Include an email address that is continuously monitored

| **Type**     | array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes |
| ------------ | ----------------------------------------- |
| **Required** | Yes                                       |

| Each item of this array must be | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| [Kind](/standards/catalog/dcat-us-3/agents/#kind)        | Contact information for an individual or entity |

## <a name="data-service--endpointDescription"></a>`DataService > endpointDescription`

**Requirement:** Recommended

List of endpoint descriptions with operations and parameters (for example, OpenAPI or similar service documentation)

| **Type** | null or array of string |
| -------- | ----------------------- |

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

### <a name="data-service--endpointDescription_items"></a>Array Item

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--endpointURL"></a>`DataService > endpointURL`

**Requirement:** Mandatory

A list of root locations or primary endpoints of the service (a Web-resolvable IRI)

| **Type**     | array of string |
| ------------ | --------------- |
| **Required** | Yes             |

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

### <a name="data-service--endpointURL_items"></a>URLs

The root location or primary endpoint of the service (a Web-resolvable IRI)

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="data-service--keyword"></a>`DataService > keyword`

**Title:** keyword/tag

**Requirement:** Optional

List of keywords or tags describing the data service

| **Type** | null or array of string |
| -------- | ----------------------- |

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

### <a name="data-service--keyword_items"></a>Non-empty strings

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Min length** | 1 |

## <a name="data-service--servesDataset"></a>`DataService > servesDataset`

**Requirement:** Recommended

List of datasets this service provides access to

| **Type** | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes |
| -------- | ----------------------------------------------------- |

| Each item of this array must be | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| [Dataset](/standards/catalog/dcat-us-3/dataset/#root)    | A collection of data published or curated by one provider |

## <a name="data-service--spatialResolutionInMeters"></a>`DataService > spatialResolutionInMeters`

**Requirement:** Optional

The minimum spatial separation resolvable in a Data Service, measured in meters

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"1000"
```

## <a name="data-service--temporalResolution"></a>`DataService > temporalResolution`

**Requirement:** Optional

The minimum time period resolvable by the Data Service

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"P1D"
```

## <a name="data-service--theme"></a>`DataService > theme`

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the data service

| **Type** | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes |
| -------- | ------------------------------------------------------------------------------ |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="data-service--accessRights"></a>`DataService > accessRights`

**Requirement:** Optional

Information about whether the data service is publicly accessible, restricted, or not public

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
"Public access with no restrictions"
```

| Any of                           |
| -------------------------------- |
| [item 0](#data-service--accessRights_anyOf_i0) |
| [item 1](#data-service--accessRights_anyOf_i1) |

### <a name="data-service--accessRights_anyOf_i0"></a>`DataService > accessRights > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--accessRights_anyOf_i1"></a>`DataService > accessRights > anyOf > item 1`

Text description of the access rights

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--conformsTo"></a>`DataService > conformsTo`

**Requirement:** Optional

List of general standards or specifications that the Data Service endpoints implement

| **Type** | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes |
| -------- | --------------------------------------------------------------------- |

| Each item of this array must be              | Description                                                   |
| -------------------------------------------- | ------------------------------------------------------------- |
| [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) | A standard or specification that another resource conforms to |

## <a name="data-service--created"></a>`DataService > created`

**Title:** creation date

**Requirement:** Optional

The date on which the Data Service was first created

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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

| Any of                           |
| -------------------------------- |
| [item 0](#data-service--created_anyOf_i0)      |
| [Date string](#data-service--created_anyOf_i1) |

### <a name="data-service--created_anyOf_i0"></a>`DataService > created > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--created_anyOf_i1"></a>`DataService > created > anyOf > Date string`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                               |
| ------------------------------------ |
| [item 0](#data-service--created_anyOf_i1_anyOf_i0) |
| [item 1](#data-service--created_anyOf_i1_anyOf_i1) |
| [item 2](#data-service--created_anyOf_i1_anyOf_i2) |
| [item 3](#data-service--created_anyOf_i1_anyOf_i3) |

#### <a name="data-service--created_anyOf_i1_anyOf_i0"></a>`DataService > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="data-service--created_anyOf_i1_anyOf_i1"></a>`DataService > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="data-service--created_anyOf_i1_anyOf_i2"></a>`DataService > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="data-service--created_anyOf_i1_anyOf_i3"></a>`DataService > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="data-service--creator"></a>`DataService > creator`

**Requirement:** Optional

List of agents primarily responsible for producing the Data Service

| **Type** | null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes |
| -------- | --------------------------------------------------- |

| Each item of this array must be | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| [Agent](/standards/catalog/dcat-us-3/agents/#agent)      | A person, organization, software agent, or other entity involved with a resource |

## <a name="data-service--description"></a>`DataService > description`

**Requirement:** Optional

Plain-language summary of the data service

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"A RESTful API providing access to historical and real-time climate data including temperature, precipitation, and atmospheric conditions."
```

## <a name="data-service--identifier"></a>`DataService > identifier`

**Requirement:** Optional

The unique identifier for the Data Service, e.g. the URI or other unique identifier in the context of the Catalog

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                             |
| ---------------------------------- |
| [item 0](#data-service--identifier_anyOf_i0)     |
| [Identifier](#data-service--identifier_anyOf_i1) |

### <a name="data-service--identifier_anyOf_i0"></a>`DataService > identifier > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--identifier_anyOf_i1"></a>`DataService > identifier > anyOf > Identifier`

inline description of Identifier

| **Type**                  | `combining`                                                 |
| ------------------------- | ----------------------------------------------------------- |
| **Additional properties** | Any type allowed                                            |
| **Same definition as**    | [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) |

## <a name="data-service--otherIdentifier"></a>`DataService > otherIdentifier`

**Requirement:** Optional

A list of identifiers for the Data Service besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

| **Type** | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes |
| -------- | ------------------------------------------------------------------------------------ |

| Each item of this array must be                             | Description                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) | A unique identifier and optionally it's scheme and other relevant information |

## <a name="data-service--language"></a>`DataService > language`

**Requirement:** Optional

ISO 639-1 language code values supported by the data service, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

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
| [Null allowed when not required](#data-service--language_anyOf_i0) |
| [Language code](#data-service--language_anyOf_i1)                  |
| [List of lanuages](#data-service--language_anyOf_i2)               |

### <a name="data-service--language_anyOf_i0"></a>`DataService > language > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--language_anyOf_i1"></a>`DataService > language > anyOf > Language code`

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

### <a name="data-service--language_anyOf_i2"></a>`DataService > language > anyOf > List of lanuages`

| **Type** | array of string |
| -------- | --------------- |

| Each item of this array must be           | Description |
| ----------------------------------------- | ----------- |
| [Language code](#data-service--language_anyOf_i2_items) | -           |

#### <a name="data-service--language_anyOf_i2_items"></a>Language code

| **Type** | `string` |
| -------- | -------- |

| Restrictions   |   |
| -------------- | - |
| **Max length** | 2 |

## <a name="data-service--license"></a>`DataService > license`

**Requirement:** Recommended

License that governs how the data service can be used or reused

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

| Any of                                              |
| --------------------------------------------------- |
| [Null allowed when not required](#data-service--license_anyOf_i0) |
| [item 1](#data-service--license_anyOf_i1)                         |

### <a name="data-service--license_anyOf_i0"></a>`DataService > license > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--license_anyOf_i1"></a>`DataService > license > anyOf > item 1`

Full text of the license

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--modified"></a>`DataService > modified`

**Title:** update/modification date

**Requirement:** Optional

The most recent date on which the Data Service was changed or modified

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

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

| Any of                                               |
| ---------------------------------------------------- |
| [Null allowed when not required](#data-service--modified_anyOf_i0) |
| [Date string](#data-service--modified_anyOf_i1)                    |

### <a name="data-service--modified_anyOf_i0"></a>`DataService > modified > anyOf > Null allowed when not required`

| **Type** | `null` |
| -------- | ------ |

### <a name="data-service--modified_anyOf_i1"></a>`DataService > modified > anyOf > Date string`

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Any of                                |
| ------------------------------------- |
| [item 0](#data-service--modified_anyOf_i1_anyOf_i0) |
| [item 1](#data-service--modified_anyOf_i1_anyOf_i1) |
| [item 2](#data-service--modified_anyOf_i1_anyOf_i2) |
| [item 3](#data-service--modified_anyOf_i1_anyOf_i3) |

#### <a name="data-service--modified_anyOf_i1_anyOf_i0"></a>`DataService > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="data-service--modified_anyOf_i1_anyOf_i1"></a>`DataService > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="data-service--modified_anyOf_i1_anyOf_i2"></a>`DataService > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="data-service--modified_anyOf_i1_anyOf_i3"></a>`DataService > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="data-service--publisher"></a>`DataService > publisher`

**Requirement:** Mandatory

Person or organization responsible for publishing and making the data service available

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Required**              | Yes                        |
| **Additional properties** | Any type allowed           |
| **Defined in**            | [Agent](/standards/catalog/dcat-us-3/agents/#agent) |

## <a name="data-service--rights"></a>`DataService > rights`

**Requirement:** Optional

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

| **Type** | null or array of string |
| -------- | ----------------------- |

**Example:**

```json
[
    "Data provided by the National Climate Data Center is in the public domain."
]
```

| Each item of this array must be | Description |
| ------------------------------- | ----------- |
| [rights items](#data-service--rights_items)   | -           |

### <a name="data-service--rights_items"></a>Array Item

| **Type** | `string` |
| -------- | -------- |

## <a name="data-service--rightsHolder"></a>`DataService > rightsHolder`

**Requirement:** Optional

A list of Agents (organizations) holding rights on the Data Service

| **Type** | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes |
| -------- | ----------------------------------------------------------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](/standards/catalog/dcat-us-3/agents/#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="data-service--spatial"></a>`DataService > spatial`

**Title:** spatial/geographic coverage

**Requirement:** Optional

A geographic region that is covered by the Data Service

| **Type** | null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes |
| -------- | --------------------------------------------------------------------------- |

| Each item of this array must be                    | Description                      |
| -------------------------------------------------- | -------------------------------- |
| [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) | A named place or geographic area |

## <a name="data-service--temporal"></a>`DataService > temporal`

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the data service

| **Type** | null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes |
| -------- | ------------------------------------------------------------------------------------- |

| Each item of this array must be                              | Description                                                            |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) | Information about a specific time period with a start- and/or end-time |

## <a name="data-service--title"></a>`DataService > title`

**Requirement:** Mandatory

Human-readable title of the data service

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"Climate Data REST API"
```

## <a name="data-service--category"></a>`DataService > category`

**Requirement:** Optional

List of high-level categories for the data service

| **Type** | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes |
| -------- | ------------------------------------------------------------------------------ |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="data-service--hasQualityMeasurement"></a>`DataService > hasQualityMeasurement`

**Title:** quality measurement

**Requirement:** Optional

Quality measurements for the data service (for example, availability, response time, or reliability)

| **Type** | null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes |
| -------- | ------------------------------------------------------------------------------------------------ |

| Each item of this array must be                                         | Description                                                   |
| ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) | A measurement of a resource against a specific quality metric |

## <a name="data-service--qualifiedAttribution"></a>`DataService > qualifiedAttribution`

**Requirement:** Optional

List of agents with specific responsibilities for the data service

| **Type** | null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes |
| -------- | --------------------------------------------------------------------------- |

| Each item of this array must be                    | Description                                       |
| -------------------------------------------------- | ------------------------------------------------- |
| [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) | A responsibility that an agent has for a resource |

## <a name="data-service--wasUsedBy"></a>`DataService > wasUsedBy`

**Requirement:** Optional

List of activities that used or tested the data service

| **Type** | null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes |
| -------- | --------------------------------------------------------------------------- |

| Each item of this array must be                    | Description                                                    |
| -------------------------------------------------- | -------------------------------------------------------------- |
| [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) | An activity related to creating, changing, or using a resource |

---

<a name="attribution"></a>

## Class Attribution

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

| Property             | Type   | Requirement Level | Title/Description                                                             |
| -------------------- | ------ | ----------------- | ----------------------------------------------------------------------------- |
| [@id](#attribution--@id)         | string | Optional          |                                                                               |
| [@type](#attribution--@type)     | string | Optional          |                                                                               |
| [hadRole](#attribution--hadRole) | string | Mandatory         | The function of an entity or agent with respect to another entity or resource |
| [agent](#attribution--agent)     | object | Mandatory         | The agent that plays a role in the resource                                   |

## <a name="attribution--@id"></a>`Attribution > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/attributions/dataset-steward-001"
```

## <a name="attribution--@type"></a>`Attribution > @type`

**Requirement:** Optional

| **Type**    | `string`        |
| ----------- | --------------- |
| **Default** | `"Attribution"` |

## <a name="attribution--hadRole"></a>`Attribution > hadRole`

**Title:** role

**Requirement:** Mandatory

The function of an entity or agent with respect to another entity or resource

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"Data Steward"
```

## <a name="attribution--agent"></a>`Attribution > agent`

**Requirement:** Mandatory

The agent that plays a role in the resource

| **Type**                  | `object`                   |
| ------------------------- | -------------------------- |
| **Required**              | Yes                        |
| **Additional properties** | Any type allowed           |
| **Defined in**            | [Agent](/standards/catalog/dcat-us-3/agents/#agent) |
