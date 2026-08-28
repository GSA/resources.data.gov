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

## Class Standard [#](#standard)

A standard or specification that another resource conforms to

- **Type**: `object`
- **Additional properties**: Any type allowed

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
| [description](#standard--description)         | null or string                                                                       | Recommended       | Plain-language summary of the standard                                                                                                     |
| [identifier](#standard--identifier)           | null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)                  | Recommended       | The unique identifier for the Standard, e.g. the URI or other unique identifier in the context of the Catalog                              |
| [inScheme](#standard--inScheme)               | null or [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme)           | Recommended       | The reference register to which the Standard belongs                                                                                       |
| [issued](#standard--issued)                   | null or object                                                                       | Recommended       | The date of formal issuance (e.g., publication) of the Standard                                                                            |
| [title](#standard--title)                     | null or string                                                                       | Recommended       | Human-readable title of the standard                                                                                                       |
| [@id](#standard--@id)                         | string                                                                               | Optional          |                                                                                                                                            |
| [@type](#standard--@type)                     | string                                                                               | Optional          |                                                                                                                                            |
| [category](#standard--category)               | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes       | Optional          | List of categories for the Standard                                                                                                        |
| [created](#standard--created)                 | null or object                                                                       | Optional          | The date on which the Standard has been first created                                                                                      |
| [modified](#standard--modified)               | null or object                                                                       | Optional          | The most recent date on which the Standard was changed or modified                                                                         |
| [otherIdentifier](#standard--otherIdentifier) | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes | Optional          | A list of identifiers for the Standard besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog |

## <a name="standard--description"></a>`Standard > description` [#](#standard--description)

**Requirement:** Recommended

Plain-language summary of the standard

- **Type**: `null or string`

**Examples:**

```json
"Data Catalog Vocabulary - United States Profile version 3.0"
```

```json
"The DCAT-US 3.0 schema defines a standard metadata format for data catalogs in the United States government, based on W3C DCAT."
```

## <a name="standard--identifier"></a>`Standard > identifier` [#](#standard--identifier)

**Requirement:** Recommended

The unique identifier for the Standard, e.g. the URI or other unique identifier in the context of the Catalog

- **Type**: null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)

## <a name="standard--inScheme"></a>`Standard > inScheme` [#](#standard--inScheme)

**Requirement:** Recommended

The reference register to which the Standard belongs

- **Type**: null or [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme)

## <a name="standard--issued"></a>`Standard > issued` [#](#standard--issued)

**Requirement:** Recommended

The date of formal issuance (e.g., publication) of the Standard

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

## <a name="standard--title"></a>`Standard > title` [#](#standard--title)

**Requirement:** Recommended

Human-readable title of the standard

- **Type**: `null or string`

**Examples:**

```json
"DCAT-US 3.0"
```

```json
"DCAT-US 3.0 - Data Catalog Vocabulary United States Profile"
```

## <a name="standard--@id"></a>`Standard > @id` [#](#standard--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/standards/dcat-us-3"
```

## <a name="standard--@type"></a>`Standard > @type` [#](#standard--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Standard"`

## <a name="standard--category"></a>`Standard > category` [#](#standard--category)

**Requirement:** Optional

List of categories for the Standard

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="standard--created"></a>`Standard > created` [#](#standard--created)

**Title:** creation date

**Requirement:** Optional

The date on which the Standard has been first created

- **Type**: null or object

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

## <a name="standard--modified"></a>`Standard > modified` [#](#standard--modified)

**Title:** last modified

**Requirement:** Optional

The most recent date on which the Standard was changed or modified

- **Type**: null or object

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

## <a name="standard--otherIdentifier"></a>`Standard > otherIdentifier` [#](#standard--otherIdentifier)

**Requirement:** Optional

A list of identifiers for the Standard besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

- **Type**: null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes

**Each item of this array must be:**
- [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier): A unique identifier and optionally it's scheme and other relevant information

---

<a name="document"></a>

## Class Document [#](#document)

A publication or other document related to a resource

- **Type**: `object`
- **Additional properties**: Any type allowed

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
| [title](#document--title)                                 | string                                                                               | Mandatory         | The title of the Document                                                                                                                                          |
| [bibliographicCitation](#document--bibliographicCitation) | null or string                                                                       | Recommended       | Bibliographic citation as text                                                                                                                                     |
| [description](#document--description)                     | null or string                                                                       | Recommended       | Plain-language summary of the document                                                                                                                             |
| [identifier](#document--identifier)                       | null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)                  | Recommended       | The unique identifier for the Document (e.g. DOI, ISBN)                                                                                                            |
| [issued](#document--issued)                               | null or object                                                                       | Recommended       | Publication date of the Document                                                                                                                                   |
| [publisher](#document--publisher)                         | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                    | Recommended       | The organization(s) that published the Document                                                                                                                    |
| [@id](#document--@id)                                     | string                                                                               | Optional          |                                                                                                                                                                    |
| [@type](#document--@type)                                 | string                                                                               | Optional          |                                                                                                                                                                    |
| [abstract](#document--abstract)                           | null or string                                                                       | Optional          | Text abstract of the Document                                                                                                                                      |
| [accessURL](#document--accessURL)                         | null or string                                                                       | Optional          | A URL that gives access to the Document                                                                                                                            |
| [category](#document--category)                           | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes       | Optional          | List of categories/genres for the Document                                                                                                                         |
| [conformsTo](#document--conformsTo)                       | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes                | Optional          | List of standards or specifications the document follows                                                                                                           |
| [corporateCreator](#document--corporateCreator)           | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                    | Optional          | The corporate organization(s) responsible for creating the Document                                                                                                |
| [creator](#document--creator)                             | null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes                                    | Optional          | The individual(s) responsible for creating the Document                                                                                                            |
| [downloadURL](#document--downloadURL)                     | null or string                                                                       | Optional          | A URL that is a direct link to a downloadable file of the Document in a given format                                                                               |
| [mediaType](#document--mediaType)                         | null or string                                                                       | Optional          | The file format of the Document as defined in the official register of media types managed by IANA: https://www.iana.org/assignments/media-types/media-types.xhtml |
| [otherIdentifier](#document--otherIdentifier)             | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes | Optional          | A list of identifiers for the Document besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog                         |

## <a name="document--title"></a>`Document > title` [#](#document--title)

**Requirement:** Mandatory

The title of the Document

- **Type**: `string`
- **Required**: Yes

**Example:**

```json
"Climate Data User Guide"
```

## <a name="document--bibliographicCitation"></a>`Document > bibliographicCitation` [#](#document--bibliographicCitation)

**Requirement:** Recommended

Bibliographic citation as text

- **Type**: `null or string`

**Examples:**

```json
"National Climate Data Center. (2024). Climate Data User Guide. Retrieved from https://example.gov/docs/climate-user-guide"
```

```json
"National Climate Data Center. (2024). Climate Data User Guide. U.S. Department of Commerce."
```

## <a name="document--description"></a>`Document > description` [#](#document--description)

**Requirement:** Recommended

Plain-language summary of the document

- **Type**: `null or string`

**Examples:**

```json
"A guide for accessing and using the National Climate Data Center's data products."
```

```json
"A comprehensive guide for accessing and using the National Climate Data Center's data products and services."
```

## <a name="document--identifier"></a>`Document > identifier` [#](#document--identifier)

**Requirement:** Recommended

The unique identifier for the Document (e.g. DOI, ISBN)

- **Type**: null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)

## <a name="document--issued"></a>`Document > issued` [#](#document--issued)

**Title:** publication date

**Requirement:** Recommended

Publication date of the Document

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

## <a name="document--publisher"></a>`Document > publisher` [#](#document--publisher)

**Requirement:** Recommended

The organization(s) that published the Document

- **Type**: null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes

**Each item of this array must be:**
- [Organization](/standards/catalog/dcat-us-3/agents/#organization): An organization involved with a resource, including parent or child organizations

## <a name="document--@id"></a>`Document > @id` [#](#document--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/documents/climate-user-guide-001"
```

## <a name="document--@type"></a>`Document > @type` [#](#document--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Document"`

## <a name="document--abstract"></a>`Document > abstract` [#](#document--abstract)

**Requirement:** Optional

Text abstract of the Document

- **Type**: `null or string`

**Example:**

```json
"This document provides detailed instructions for using climate data products, including API access, file formats, and data interpretation guidelines."
```

## <a name="document--accessURL"></a>`Document > accessURL` [#](#document--accessURL)

**Requirement:** Optional

A URL that gives access to the Document

- **Type**: null or string

**Example:**

```json
"https://example.gov/docs/climate-user-guide"
```

## <a name="document--category"></a>`Document > category` [#](#document--category)

**Requirement:** Optional

List of categories/genres for the Document

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="document--conformsTo"></a>`Document > conformsTo` [#](#document--conformsTo)

**Requirement:** Optional

List of standards or specifications the document follows

- **Type**: null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes

**Each item of this array must be:**
- [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard): A standard or specification that another resource conforms to

## <a name="document--corporateCreator"></a>`Document > corporateCreator` [#](#document--corporateCreator)

**Title:** corporate author

**Requirement:** Optional

The corporate organization(s) responsible for creating the Document

- **Type**: null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes

**Each item of this array must be:**
- [Organization](/standards/catalog/dcat-us-3/agents/#organization): An organization involved with a resource, including parent or child organizations

## <a name="document--creator"></a>`Document > creator` [#](#document--creator)

**Title:** author

**Requirement:** Optional

The individual(s) responsible for creating the Document

- **Type**: null or array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes

**Each item of this array must be:**
- [Kind](/standards/catalog/dcat-us-3/agents/#kind): Contact information for an individual or entity

## <a name="document--downloadURL"></a>`Document > downloadURL` [#](#document--downloadURL)

**Requirement:** Optional

A URL that is a direct link to a downloadable file of the Document in a given format

- **Type**: null or string

**Example:**

```json
"https://example.gov/docs/climate-user-guide.pdf"
```

## <a name="document--mediaType"></a>`Document > mediaType` [#](#document--mediaType)

**Requirement:** Optional

The file format of the Document as defined in the official register of media types managed by IANA: https://www.iana.org/assignments/media-types/media-types.xhtml

- **Type**: `null or string`

**Example:**

```json
"application/pdf"
```

## <a name="document--otherIdentifier"></a>`Document > otherIdentifier` [#](#document--otherIdentifier)

**Requirement:** Optional

A list of identifiers for the Document besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

- **Type**: null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes

**Each item of this array must be:**
- [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier): A unique identifier and optionally it's scheme and other relevant information

---

<a name="catalog-record"></a>

## Class CatalogRecord [#](#catalog-record)

A record in a catalog, describing the registration of a single resource

- **Type**: `object`
- **Additional properties**: Any type allowed

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

| Property                       | Type                                                          | Requirement Level | Title/Description                                                                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [modified](#catalog-record--modified)         | More than one type                                            | Mandatory         | The most recent date on which the catalog record was changed or modified                                                                                                             |
| [primaryTopic](#catalog-record--primaryTopic) | string                                                        | Mandatory         | A link to the Dataset, Data service or Catalog described in the Catalog Record                                                                                                       |
| [conformsTo](#catalog-record--conformsTo)     | null or [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard)          | Recommended       | An Application Profile that the Catalog Record's metadata conforms to                                                                                                                |
| [status](#catalog-record--status)             | null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) | Recommended       | The status of the catalog record in the context of editorial flow of the dataset and data service descriptions                                                                       |
| [@id](#catalog-record--@id)                   | string                                                        | Optional          |                                                                                                                                                                                      |
| [@type](#catalog-record--@type)               | string                                                        | Optional          |                                                                                                                                                                                      |
| [description](#catalog-record--description)   | null or array of string                                       | Optional          | A list of free-text accounts of the catalog record                                                                                                                                   |
| [issued](#catalog-record--issued)             | null or array of object                                       | Optional          | List of dates on which the catalog record was included in the catalog                                                                                                                |
| [language](#catalog-record--language)         | More than one type                                            | Optional          | Language code used in catalog record metadata text, using ISO 639-1 values such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html                    |
| [source](#catalog-record--source)             | null or string                                                | Optional          | The original metadata that was used in creating metadata for the items in the catalog record, either a URL referencing the source metadata or a string of the source metadata itself |
| [title](#catalog-record--title)               | null or string                                                | Optional          | A name given to the Catalog Record                                                                                                                                                   |

## <a name="catalog-record--modified"></a>`CatalogRecord > modified` [#](#catalog-record--modified)

**Title:** update/modification date

**Requirement:** Mandatory

The most recent date on which the catalog record was changed or modified

- **Type**: `combining`
- **Required**: Yes
- **Additional properties**: Any type allowed

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

**Any of:**
- [item 0](#catalog-record--modified_anyOf_i0)
- [item 1](#catalog-record--modified_anyOf_i1)
- [item 2](#catalog-record--modified_anyOf_i2)
- [item 3](#catalog-record--modified_anyOf_i3)

### <a name="catalog-record--modified_anyOf_i0"></a>`CatalogRecord > modified > anyOf > item 0` [#](#catalog-record--modified_anyOf_i0)

- **Type**: `string`
- **Format**: `date-time`

### <a name="catalog-record--modified_anyOf_i1"></a>`CatalogRecord > modified > anyOf > item 1` [#](#catalog-record--modified_anyOf_i1)

- **Type**: `string`
- **Format**: `date`

### <a name="catalog-record--modified_anyOf_i2"></a>`CatalogRecord > modified > anyOf > item 2` [#](#catalog-record--modified_anyOf_i2)

A year in YYYY format

- **Type**: `string`

**Restrictions:**
- **Must match regular expression**: ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24)

### <a name="catalog-record--modified_anyOf_i3"></a>`CatalogRecord > modified > anyOf > item 3` [#](#catalog-record--modified_anyOf_i3)

A year and month in YYYY-MM format

- **Type**: `string`

**Restrictions:**
- **Must match regular expression**: ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24)

## <a name="catalog-record--primaryTopic"></a>`CatalogRecord > primaryTopic` [#](#catalog-record--primaryTopic)

**Requirement:** Mandatory

A link to the Dataset, Data service or Catalog described in the Catalog Record

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"https://example.gov/datasets/climate-data-2024"
```

```json
"https://example.gov/datasets/climate-data-2023"
```

## <a name="catalog-record--conformsTo"></a>`CatalogRecord > conformsTo` [#](#catalog-record--conformsTo)

**Title:** application profile

**Requirement:** Recommended

An Application Profile that the Catalog Record's metadata conforms to

- **Type**: null or [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard)

## <a name="catalog-record--status"></a>`CatalogRecord > status` [#](#catalog-record--status)

**Title:** change type

**Requirement:** Recommended

The status of the catalog record in the context of editorial flow of the dataset and data service descriptions

- **Type**: null or [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept)

## <a name="catalog-record--@id"></a>`CatalogRecord > @id` [#](#catalog-record--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/catalog-records/climate-dataset-record-001"
```

## <a name="catalog-record--@type"></a>`CatalogRecord > @type` [#](#catalog-record--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"CatalogRecord"`

## <a name="catalog-record--description"></a>`CatalogRecord > description` [#](#catalog-record--description)

**Title:** Descriptions

**Requirement:** Optional

A list of free-text accounts of the catalog record

- **Type**: null or array of string

**Example:**

```json
[
    "This catalog record describes the registration of the Climate Data 2023 dataset.",
    "Contains metadata about when the dataset was added and last updated."
]
```

**Each item of this array must be:**
- [Description string](#catalog-record--description_items): -

### <a name="catalog-record--description_items"></a>Description string [#](#catalog-record--description_items)

- **Type**: `string`

## <a name="catalog-record--issued"></a>`CatalogRecord > issued` [#](#catalog-record--issued)

**Title:** listing date

**Requirement:** Optional

List of dates on which the catalog record was included in the catalog

- **Type**: null or array of object

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

**Each item of this array must be:**
- [Date string](#catalog-record--issued_items): -

### <a name="catalog-record--issued_items"></a>Date string [#](#catalog-record--issued_items)

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Any of:**
- [item 0](#catalog-record--issued_items_anyOf_i0)
- [item 1](#catalog-record--issued_items_anyOf_i1)
- [item 2](#catalog-record--issued_items_anyOf_i2)
- [item 3](#catalog-record--issued_items_anyOf_i3)

#### <a name="catalog-record--issued_items_anyOf_i0"></a>`CatalogRecord > issued > Date string > anyOf > item 0` [#](#catalog-record--issued_items_anyOf_i0)

- **Type**: `string`
- **Format**: `date-time`

#### <a name="catalog-record--issued_items_anyOf_i1"></a>`CatalogRecord > issued > Date string > anyOf > item 1` [#](#catalog-record--issued_items_anyOf_i1)

- **Type**: `string`
- **Format**: `date`

#### <a name="catalog-record--issued_items_anyOf_i2"></a>`CatalogRecord > issued > Date string > anyOf > item 2` [#](#catalog-record--issued_items_anyOf_i2)

A year in YYYY format

- **Type**: `string`

**Restrictions:**
- **Must match regular expression**: ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24)

#### <a name="catalog-record--issued_items_anyOf_i3"></a>`CatalogRecord > issued > Date string > anyOf > item 3` [#](#catalog-record--issued_items_anyOf_i3)

A year and month in YYYY-MM format

- **Type**: `string`

**Restrictions:**
- **Must match regular expression**: ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24)

## <a name="catalog-record--language"></a>`CatalogRecord > language` [#](#catalog-record--language)

**Requirement:** Optional

Language code used in catalog record metadata text, using ISO 639-1 values such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

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
- [Null allowed when not required](#catalog-record--language_anyOf_i0)
- [Language code](#catalog-record--language_anyOf_i1)
- [Array of language codes](#catalog-record--language_anyOf_i2)

### <a name="catalog-record--language_anyOf_i0"></a>`CatalogRecord > language > anyOf > Null allowed when not required` [#](#catalog-record--language_anyOf_i0)

- **Type**: `null`

### <a name="catalog-record--language_anyOf_i1"></a>`CatalogRecord > language > anyOf > Language code` [#](#catalog-record--language_anyOf_i1)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

### <a name="catalog-record--language_anyOf_i2"></a>`CatalogRecord > language > anyOf > Array of language codes` [#](#catalog-record--language_anyOf_i2)

- **Type**: array of string

**Each item of this array must be:**
- [Language code](#catalog-record--language_anyOf_i2_items): -

#### <a name="catalog-record--language_anyOf_i2_items"></a>Language code [#](#catalog-record--language_anyOf_i2_items)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

## <a name="catalog-record--source"></a>`CatalogRecord > source` [#](#catalog-record--source)

**Title:** source metadata

**Requirement:** Optional

The original metadata that was used in creating metadata for the items in the catalog record, either a URL referencing the source metadata or a string of the source metadata itself

- **Type**: `null or string`

**Example:**

```json
"Original metadata harvested from NOAA data portal"
```

## <a name="catalog-record--title"></a>`CatalogRecord > title` [#](#catalog-record--title)

**Requirement:** Optional

A name given to the Catalog Record

- **Type**: `null or string`

**Examples:**

```json
"Climate Data 2024 Catalog Entry"
```

```json
"Climate Data 2023 Catalog Record"
```

---

<a name="data-service"></a>

## Class DataService [#](#data-service)

A service that provides access to data or data processing functions

- **Type**: `object`
- **Additional properties**: Any type allowed

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

| Property                                                 | Type                                                                                               | Requirement Level | Title/Description                                                                                                                                    |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contactPoint](#data-service--contactPoint)                           | array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes                                                          | Mandatory         | Contact information for questions about the Data Service. Include an email address that is continuously monitored                                    |
| [endpointURL](#data-service--endpointURL)                             | array of string                                                                                    | Mandatory         | A list of root locations or primary endpoints of the service (a Web-resolvable IRI)                                                                  |
| [publisher](#data-service--publisher)                                 | object                                                                                             | Mandatory         | Person or organization responsible for publishing and making the data service available                                                              |
| [title](#data-service--title)                                         | string                                                                                             | Mandatory         | Human-readable title of the data service                                                                                                             |
| [endpointDescription](#data-service--endpointDescription)             | null or array of string                                                                            | Recommended       | List of endpoint descriptions with operations and parameters (for example, OpenAPI or similar service documentation)                                 |
| [license](#data-service--license)                                     | null or string                                                                                     | Recommended       | License that governs how the data service can be used or reused                                                                                      |
| [servesDataset](#data-service--servesDataset)                         | null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes                                              | Recommended       | List of datasets this service provides access to                                                                                                     |
| [@id](#data-service--@id)                                             | string                                                                                             | Optional          |                                                                                                                                                      |
| [@type](#data-service--@type)                                         | string                                                                                             | Optional          |                                                                                                                                                      |
| [accessRestriction](#data-service--accessRestriction)                 | null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes | Optional          | List of access restrictions related to the data service                                                                                              |
| [accessRights](#data-service--accessRights)                           | null or string                                                                                     | Optional          | Information about whether the data service is publicly accessible, restricted, or not public                                                         |
| [category](#data-service--category)                                   | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes                     | Optional          | List of high-level categories for the data service                                                                                                   |
| [conformsTo](#data-service--conformsTo)                               | null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes                              | Optional          | List of general standards or specifications that the Data Service endpoints implement                                                                |
| [created](#data-service--created)                                     | null or object                                                                                     | Optional          | The date on which the Data Service was first created                                                                                                 |
| [creator](#data-service--creator)                                     | null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes                                                | Optional          | List of agents primarily responsible for producing the Data Service                                                                                  |
| [cuiRestriction](#data-service--cuiRestriction)                       | null or [CUIRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction)                        | Optional          | Controlled Unclassified Information restriction related to the data service                                                                          |
| [description](#data-service--description)                             | null or string                                                                                     | Optional          | Plain-language summary of the data service                                                                                                           |
| [hasQualityMeasurement](#data-service--hasQualityMeasurement)         | null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes   | Optional          | Quality measurements for the data service (for example, availability, response time, or reliability)                                                 |
| [identifier](#data-service--identifier)                               | null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)                                | Optional          | The unique identifier for the Data Service, e.g. the URI or other unique identifier in the context of the Catalog                                    |
| [inventoried](#data-service--inventoried)                             | null or object                                                                                     | Optional          | Date on which the data service was added to the catalog. This may differ from the publication/release date.                                          |
| [keyword](#data-service--keyword)                                     | null or array of string                                                                            | Optional          | List of keywords or tags describing the data service                                                                                                 |
| [language](#data-service--language)                                   | More than one type                                                                                 | Optional          | ISO 639-1 language code values supported by the data service, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html |
| [modified](#data-service--modified)                                   | null or object                                                                                     | Optional          | The most recent date on which the Data Service was changed or modified                                                                               |
| [otherIdentifier](#data-service--otherIdentifier)                     | null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes               | Optional          | A list of identifiers for the Data Service besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog       |
| [qualifiedAttribution](#data-service--qualifiedAttribution)           | null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes                        | Optional          | List of agents with specific responsibilities for the data service                                                                                   |
| [rights](#data-service--rights)                                       | null or array of string                                                                            | Optional          | Rights statements not already covered by license or accessRights, such as copyright or policy restrictions                                           |
| [rightsHolder](#data-service--rightsHolder)                           | null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes                                  | Optional          | A list of Agents (organizations) holding rights on the Data Service                                                                                  |
| [spatial](#data-service--spatial)                                     | null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes                        | Optional          | A geographic region that is covered by the Data Service                                                                                              |
| [spatialResolutionInMeters](#data-service--spatialResolutionInMeters) | null or string                                                                                     | Optional          | The minimum spatial separation resolvable in a Data Service, measured in meters                                                                      |
| [temporal](#data-service--temporal)                                   | null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes              | Optional          | Time periods covered by the data service                                                                                                             |
| [temporalResolution](#data-service--temporalResolution)               | null or string                                                                                     | Optional          | The minimum time period resolvable by the Data Service                                                                                               |
| [theme](#data-service--theme)                                         | null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes                     | Optional          | List of themes or categories for the data service                                                                                                    |
| [useRestriction](#data-service--useRestriction)                       | null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes       | Optional          | List of use restrictions related to the data service                                                                                                 |
| [wasUsedBy](#data-service--wasUsedBy)                                 | null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes                        | Optional          | List of activities that used or tested the data service                                                                                              |

## <a name="data-service--contactPoint"></a>`DataService > contactPoint` [#](#data-service--contactPoint)

**Requirement:** Mandatory

Contact information for questions about the Data Service. Include an email address that is continuously monitored

- **Type**: array of [Kind](/standards/catalog/dcat-us-3/agents/#kind) classes
- **Required**: Yes

**Each item of this array must be:**
- [Kind](/standards/catalog/dcat-us-3/agents/#kind): Contact information for an individual or entity

## <a name="data-service--endpointURL"></a>`DataService > endpointURL` [#](#data-service--endpointURL)

**Requirement:** Mandatory

A list of root locations or primary endpoints of the service (a Web-resolvable IRI)

- **Type**: array of string
- **Required**: Yes

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

**Each item of this array must be:**
- [URLs](#data-service--endpointURL_items): The root location or primary endpoint of the service (a Web-resolvable IRI)

### <a name="data-service--endpointURL_items"></a>URLs [#](#data-service--endpointURL_items)

The root location or primary endpoint of the service (a Web-resolvable IRI)

- **Type**: `string`
- **Format**: `iri`

## <a name="data-service--publisher"></a>`DataService > publisher` [#](#data-service--publisher)

**Requirement:** Mandatory

Person or organization responsible for publishing and making the data service available

- **Type**: `object`
- **Required**: Yes
- **Additional properties**: Any type allowed
- **Defined in**: [Agent](/standards/catalog/dcat-us-3/agents/#agent)

## <a name="data-service--title"></a>`DataService > title` [#](#data-service--title)

**Requirement:** Mandatory

Human-readable title of the data service

- **Type**: `string`
- **Required**: Yes

**Example:**

```json
"Climate Data REST API"
```

## <a name="data-service--endpointDescription"></a>`DataService > endpointDescription` [#](#data-service--endpointDescription)

**Requirement:** Recommended

List of endpoint descriptions with operations and parameters (for example, OpenAPI or similar service documentation)

- **Type**: null or array of string

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

**Each item of this array must be:**
- [endpointDescription items](#data-service--endpointDescription_items): -

### <a name="data-service--endpointDescription_items"></a>Array Item [#](#data-service--endpointDescription_items)

- **Type**: `string`

## <a name="data-service--license"></a>`DataService > license` [#](#data-service--license)

**Requirement:** Recommended

License that governs how the data service can be used or reused

- **Type**: null or string

**Example:**

```json
"https://creativecommons.org/publicdomain/zero/1.0/"
```

## <a name="data-service--servesDataset"></a>`DataService > servesDataset` [#](#data-service--servesDataset)

**Requirement:** Recommended

List of datasets this service provides access to

- **Type**: null or array of [Dataset](/standards/catalog/dcat-us-3/dataset/#root) classes

**Each item of this array must be:**
- [Dataset](/standards/catalog/dcat-us-3/dataset/#root): A collection of data published or curated by one provider

## <a name="data-service--@id"></a>`DataService > @id` [#](#data-service--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/data-services/climate-api-001"
```

## <a name="data-service--@type"></a>`DataService > @type` [#](#data-service--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"DataService"`

## <a name="data-service--accessRestriction"></a>`DataService > accessRestriction` [#](#data-service--accessRestriction)

**Requirement:** Optional

List of access restrictions related to the data service

- **Type**: null or array of [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction) classes

**Each item of this array must be:**
- [AccessRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#access-restriction): Rules or indicators that describe who can access a resource

## <a name="data-service--accessRights"></a>`DataService > accessRights` [#](#data-service--accessRights)

**Requirement:** Optional

Information about whether the data service is publicly accessible, restricted, or not public

- **Type**: null or string

**Example:**

```json
"Public access with no restrictions"
```

## <a name="data-service--category"></a>`DataService > category` [#](#data-service--category)

**Requirement:** Optional

List of high-level categories for the data service

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="data-service--conformsTo"></a>`DataService > conformsTo` [#](#data-service--conformsTo)

**Requirement:** Optional

List of general standards or specifications that the Data Service endpoints implement

- **Type**: null or array of [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard) classes

**Each item of this array must be:**
- [Standard](/standards/catalog/dcat-us-3/quality-governance/#standard): A standard or specification that another resource conforms to

## <a name="data-service--created"></a>`DataService > created` [#](#data-service--created)

**Title:** creation date

**Requirement:** Optional

The date on which the Data Service was first created

- **Type**: null or object

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

## <a name="data-service--creator"></a>`DataService > creator` [#](#data-service--creator)

**Requirement:** Optional

List of agents primarily responsible for producing the Data Service

- **Type**: null or array of [Agent](/standards/catalog/dcat-us-3/agents/#agent) classes

**Each item of this array must be:**
- [Agent](/standards/catalog/dcat-us-3/agents/#agent): A person, organization, software agent, or other entity involved with a resource

## <a name="data-service--cuiRestriction"></a>`DataService > cuiRestriction` [#](#data-service--cuiRestriction)

**Requirement:** Optional

Controlled Unclassified Information restriction related to the data service

- **Type**: null or [CUIRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#cui-restriction)

## <a name="data-service--description"></a>`DataService > description` [#](#data-service--description)

**Requirement:** Optional

Plain-language summary of the data service

- **Type**: `null or string`

**Example:**

```json
"A RESTful API providing access to historical and real-time climate data including temperature, precipitation, and atmospheric conditions."
```

## <a name="data-service--hasQualityMeasurement"></a>`DataService > hasQualityMeasurement` [#](#data-service--hasQualityMeasurement)

**Title:** quality measurement

**Requirement:** Optional

Quality measurements for the data service (for example, availability, response time, or reliability)

- **Type**: null or array of [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement) classes

**Each item of this array must be:**
- [QualityMeasurement](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#quality-measurement): A measurement of a resource against a specific quality metric

## <a name="data-service--identifier"></a>`DataService > identifier` [#](#data-service--identifier)

**Requirement:** Optional

The unique identifier for the Data Service, e.g. the URI or other unique identifier in the context of the Catalog

- **Type**: null or [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier)

## <a name="data-service--inventoried"></a>`DataService > inventoried` [#](#data-service--inventoried)

**Title:** inventoried date

**Requirement:** Optional

Date on which the data service was added to the catalog. This may differ from the publication/release date.

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

## <a name="data-service--keyword"></a>`DataService > keyword` [#](#data-service--keyword)

**Title:** keyword/tag

**Requirement:** Optional

List of keywords or tags describing the data service

- **Type**: null or array of string

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

**Each item of this array must be:**
- [Non-empty strings](#data-service--keyword_items): -

### <a name="data-service--keyword_items"></a>Non-empty strings [#](#data-service--keyword_items)

- **Type**: `string`

**Restrictions:**
- **Min length**: 1

## <a name="data-service--language"></a>`DataService > language` [#](#data-service--language)

**Requirement:** Optional

ISO 639-1 language code values supported by the data service, such as en or es, full list can be seen at https://id.loc.gov/vocabulary/iso639-1.html

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
- [Null allowed when not required](#data-service--language_anyOf_i0)
- [Language code](#data-service--language_anyOf_i1)
- [List of lanuages](#data-service--language_anyOf_i2)

### <a name="data-service--language_anyOf_i0"></a>`DataService > language > anyOf > Null allowed when not required` [#](#data-service--language_anyOf_i0)

- **Type**: `null`

### <a name="data-service--language_anyOf_i1"></a>`DataService > language > anyOf > Language code` [#](#data-service--language_anyOf_i1)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

### <a name="data-service--language_anyOf_i2"></a>`DataService > language > anyOf > List of lanuages` [#](#data-service--language_anyOf_i2)

- **Type**: array of string

**Each item of this array must be:**
- [Language code](#data-service--language_anyOf_i2_items): -

#### <a name="data-service--language_anyOf_i2_items"></a>Language code [#](#data-service--language_anyOf_i2_items)

- **Type**: `string`

**Restrictions:**
- **Max length**: 2

## <a name="data-service--modified"></a>`DataService > modified` [#](#data-service--modified)

**Title:** update/modification date

**Requirement:** Optional

The most recent date on which the Data Service was changed or modified

- **Type**: null or object

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

## <a name="data-service--otherIdentifier"></a>`DataService > otherIdentifier` [#](#data-service--otherIdentifier)

**Requirement:** Optional

A list of identifiers for the Data Service besides the main identifier, e.g. the URI or other unique identifiers in the context of the Catalog

- **Type**: null or array of [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier) classes

**Each item of this array must be:**
- [Identifier](/standards/catalog/dcat-us-3/identifiers-and-relationships/#identifier): A unique identifier and optionally it's scheme and other relevant information

## <a name="data-service--qualifiedAttribution"></a>`DataService > qualifiedAttribution` [#](#data-service--qualifiedAttribution)

**Requirement:** Optional

List of agents with specific responsibilities for the data service

- **Type**: null or array of [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution) classes

**Each item of this array must be:**
- [Attribution](/standards/catalog/dcat-us-3/quality-governance/#attribution): A responsibility that an agent has for a resource

## <a name="data-service--rights"></a>`DataService > rights` [#](#data-service--rights)

**Requirement:** Optional

Rights statements not already covered by license or accessRights, such as copyright or policy restrictions

- **Type**: null or array of string

**Example:**

```json
[
    "Data provided by the National Climate Data Center is in the public domain."
]
```

**Each item of this array must be:**
- [rights items](#data-service--rights_items): -

### <a name="data-service--rights_items"></a>Array Item [#](#data-service--rights_items)

- **Type**: `string`

## <a name="data-service--rightsHolder"></a>`DataService > rightsHolder` [#](#data-service--rightsHolder)

**Requirement:** Optional

A list of Agents (organizations) holding rights on the Data Service

- **Type**: null or array of [Organization](/standards/catalog/dcat-us-3/agents/#organization) classes

**Each item of this array must be:**
- [Organization](/standards/catalog/dcat-us-3/agents/#organization): An organization involved with a resource, including parent or child organizations

## <a name="data-service--spatial"></a>`DataService > spatial` [#](#data-service--spatial)

**Title:** spatial/geographic coverage

**Requirement:** Optional

A geographic region that is covered by the Data Service

- **Type**: null or array of [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location) classes

**Each item of this array must be:**
- [Location](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#location): A named place or geographic area

## <a name="data-service--spatialResolutionInMeters"></a>`DataService > spatialResolutionInMeters` [#](#data-service--spatialResolutionInMeters)

**Requirement:** Optional

The minimum spatial separation resolvable in a Data Service, measured in meters

- **Type**: `null or string`

**Example:**

```json
"1000"
```

## <a name="data-service--temporal"></a>`DataService > temporal` [#](#data-service--temporal)

**Title:** temporal coverage

**Requirement:** Optional

Time periods covered by the data service

- **Type**: null or array of [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time) classes

**Each item of this array must be:**
- [PeriodOfTime](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#period-of-time): Information about a specific time period with a start- and/or end-time

## <a name="data-service--temporalResolution"></a>`DataService > temporalResolution` [#](#data-service--temporalResolution)

**Requirement:** Optional

The minimum time period resolvable by the Data Service

- **Type**: `null or string`

**Example:**

```json
"P1D"
```

## <a name="data-service--theme"></a>`DataService > theme` [#](#data-service--theme)

**Title:** theme/category

**Requirement:** Optional

List of themes or categories for the data service

- **Type**: null or array of [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) classes

**Each item of this array must be:**
- [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept): A controlled term or label, optionally drawn from a concept scheme

## <a name="data-service--useRestriction"></a>`DataService > useRestriction` [#](#data-service--useRestriction)

**Requirement:** Optional

List of use restrictions related to the data service

- **Type**: null or array of [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction) classes

**Each item of this array must be:**
- [UseRestriction](/standards/catalog/dcat-us-3/constraints-and-restrictions/#use-restriction): Rules or legal limits on how a resource may be used

## <a name="data-service--wasUsedBy"></a>`DataService > wasUsedBy` [#](#data-service--wasUsedBy)

**Requirement:** Optional

List of activities that used or tested the data service

- **Type**: null or array of [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity) classes

**Each item of this array must be:**
- [Activity](/standards/catalog/dcat-us-3/temporal-spatial-metrics/#activity): An activity related to creating, changing, or using a resource

---

<a name="attribution"></a>

## Class Attribution [#](#attribution)

A responsibility that an agent has for a resource

- **Type**: `object`
- **Additional properties**: Any type allowed

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
| [agent](#attribution--agent)     | object | Mandatory         | The agent that plays a role in the resource                                   |
| [hadRole](#attribution--hadRole) | string | Mandatory         | The function of an entity or agent with respect to another entity or resource |
| [@id](#attribution--@id)         | string | Optional          |                                                                               |
| [@type](#attribution--@type)     | string | Optional          |                                                                               |

## <a name="attribution--agent"></a>`Attribution > agent` [#](#attribution--agent)

**Requirement:** Mandatory

The agent that plays a role in the resource

- **Type**: `object`
- **Required**: Yes
- **Additional properties**: Any type allowed
- **Defined in**: [Agent](/standards/catalog/dcat-us-3/agents/#agent)

## <a name="attribution--hadRole"></a>`Attribution > hadRole` [#](#attribution--hadRole)

**Title:** role

**Requirement:** Mandatory

The function of an entity or agent with respect to another entity or resource

- **Type**: `string`
- **Required**: Yes

**Example:**

```json
"Data Steward"
```

## <a name="attribution--@id"></a>`Attribution > @id` [#](#attribution--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/attributions/dataset-steward-001"
```

## <a name="attribution--@type"></a>`Attribution > @type` [#](#attribution--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Attribution"`
