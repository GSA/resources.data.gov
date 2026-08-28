---
title: "DCAT-US 3.0: Identifiers and Relationships"
layout: "page"
permalink: "/standards/catalog/dcat-us-3/identifiers-and-relationships/"
primary_nav_section: "Data Standards"
category_name: "Data standards"
---
# Identifiers and Relationships

Supporting classes for identifiers, relationships, checksums, and controlled concepts used to describe and connect resources.

<a name="identifier"></a>

## Class Identifier [#](#identifier)

A unique identifier and optionally it's scheme and other relevant information

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Any of:**
- [Simple string identifier](#identifier--anyOf_i0)
- [Identifier as a complex object](#identifier--anyOf_i1)

## <a name="identifier--anyOf_i0"></a>`Identifier > anyOf > Simple string identifier` [#](#identifier--anyOf_i0)

- **Type**: `string`

## <a name="identifier--anyOf_i1"></a>`Identifier > anyOf > Identifier as a complex object` [#](#identifier--anyOf_i1)

- **Type**: `object`
- **Additional properties**: Any type allowed

| Property                                | Type                                             | Requirement Level | Title/Description                                                 |
| --------------------------------------- | ------------------------------------------------ | ----------------- | ----------------------------------------------------------------- |
| [@id](#identifier--anyOf_i1_@id)                   | string                                           | Optional          |                                                                   |
| [@type](#identifier--anyOf_i1_@type)               | string                                           | Optional          |                                                                   |
| [creator](#identifier--anyOf_i1_creator)           | null or [Organization](/standards/catalog/dcat-us-3/agents/#organization) | Optional          | the agency that manages the identifier scheme                     |
| [issued](#identifier--anyOf_i1_issued)             | null or object                                   | Optional          | The date of formal issuance (e.g., publication) of the Identifier |
| [notation](#identifier--anyOf_i1_notation)         | null or string                                   | Optional          | abbreviation or code from code lists for an identifier            |
| [schemaAgency](#identifier--anyOf_i1_schemaAgency) | null or string                                   | Optional          | The name of the agency that issued the identifier                 |
| [version](#identifier--anyOf_i1_version)           | null or string                                   | Optional          | version of the identifier scheme                                  |

### <a name="identifier--anyOf_i1_@id"></a>`Identifier > anyOf > Identifier as a complex object > @id` [#](#identifier--anyOf_i1_@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

### <a name="identifier--anyOf_i1_@type"></a>`Identifier > anyOf > Identifier as a complex object > @type` [#](#identifier--anyOf_i1_@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Identifier"`

### <a name="identifier--anyOf_i1_creator"></a>`Identifier > anyOf > Identifier as a complex object > creator` [#](#identifier--anyOf_i1_creator)

**Requirement:** Optional

the agency that manages the identifier scheme

- **Type**: null or [Organization](/standards/catalog/dcat-us-3/agents/#organization)

### <a name="identifier--anyOf_i1_issued"></a>`Identifier > anyOf > Identifier as a complex object > issued` [#](#identifier--anyOf_i1_issued)

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the Identifier

- **Type**: null or object

### <a name="identifier--anyOf_i1_notation"></a>`Identifier > anyOf > Identifier as a complex object > notation` [#](#identifier--anyOf_i1_notation)

**Requirement:** Optional

abbreviation or code from code lists for an identifier

- **Type**: `null or string`

### <a name="identifier--anyOf_i1_schemaAgency"></a>`Identifier > anyOf > Identifier as a complex object > schemaAgency` [#](#identifier--anyOf_i1_schemaAgency)

**Requirement:** Optional

The name of the agency that issued the identifier

- **Type**: `null or string`

### <a name="identifier--anyOf_i1_version"></a>`Identifier > anyOf > Identifier as a complex object > version` [#](#identifier--anyOf_i1_version)

**Requirement:** Optional

version of the identifier scheme

- **Type**: `null or string`

---

<a name="relationship"></a>

## Class Relationship [#](#relationship)

Additional information about how one resource is related to another

- **Type**: `object`
- **Additional properties**: Any type allowed

**Example:**

```json
{
    "@type": "Relationship",
    "hadRole": "isInputTo",
    "relation": "https://example.gov/models/climate-prediction"
}
```

| Property               | Type   | Requirement Level | Title/Description                                                                                                                  |
| ---------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [hadRole](#relationship--hadRole)   | string | Mandatory         | The function of an entity or agent with respect to a dataset                                                                       |
| [relation](#relationship--relation) | string | Mandatory         | The entity related to the dataset. This string should unambiguously identify the related resource using an appropriate identifier. |
| [@id](#relationship--@id)           | string | Optional          |                                                                                                                                    |
| [@type](#relationship--@type)       | string | Optional          |                                                                                                                                    |

## <a name="relationship--hadRole"></a>`Relationship > hadRole` [#](#relationship--hadRole)

**Title:** role

**Requirement:** Mandatory

The function of an entity or agent with respect to a dataset

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"isInputTo"
```

```json
"dataProvider"
```

## <a name="relationship--relation"></a>`Relationship > relation` [#](#relationship--relation)

**Requirement:** Mandatory

The entity related to the dataset. This string should unambiguously identify the related resource using an appropriate identifier.

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"https://example.gov/models/climate-prediction"
```

```json
"https://example.gov/organizations/national-weather-service"
```

## <a name="relationship--@id"></a>`Relationship > @id` [#](#relationship--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/relationships/dataset-001-data-provider"
```

## <a name="relationship--@type"></a>`Relationship > @type` [#](#relationship--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Relationship"`

---

<a name="checksum"></a>

## Class Checksum [#](#checksum)

A mechanism that can be used to verify that the contents of a distribution have not changed

- **Type**: `object`
- **Additional properties**: Any type allowed

**Example:**

```json
{
    "@type": "Checksum",
    "algorithm": "SHA-256",
    "checksumValue": "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
}
```

| Property                         | Type   | Requirement Level | Title/Description                                                                 |
| -------------------------------- | ------ | ----------------- | --------------------------------------------------------------------------------- |
| [algorithm](#checksum--algorithm)         | string | Mandatory         | The algorithm used to produce the checksum                                        |
| [checksumValue](#checksum--checksumValue) | string | Mandatory         | A lower case hexadecimal encoded digest value produced using a specific algorithm |
| [@id](#checksum--@id)                     | string | Optional          |                                                                                   |
| [@type](#checksum--@type)                 | string | Optional          |                                                                                   |

## <a name="checksum--algorithm"></a>`Checksum > algorithm` [#](#checksum--algorithm)

**Requirement:** Mandatory

The algorithm used to produce the checksum

- **Type**: `string`
- **Required**: Yes

**Example:**

```json
"SHA-256"
```

## <a name="checksum--checksumValue"></a>`Checksum > checksumValue` [#](#checksum--checksumValue)

**Requirement:** Mandatory

A lower case hexadecimal encoded digest value produced using a specific algorithm

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
```

```json
"a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"
```

## <a name="checksum--@id"></a>`Checksum > @id` [#](#checksum--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/checksums/dataset-001-sha256"
```

## <a name="checksum--@type"></a>`Checksum > @type` [#](#checksum--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Checksum"`

---

<a name="concept"></a>

## Class Concept [#](#concept)

A controlled term or label, optionally drawn from a concept scheme

- **Type**: `combining`
- **Additional properties**: Any type allowed

**Examples:**

```json
"Environment"
```

```json
"Climate Science"
```

```json
{
    "@type": "Concept",
    "prefLabel": "Environment"
}
```

```json
{
    "@type": "Concept",
    "prefLabel": "Climate Science",
    "definition": "The scientific study of climate patterns and change.",
    "inScheme": {
        "@id": "https://example.gov/concept-schemes/science-domains",
        "@type": "ConceptScheme",
        "title": "Science Domains"
    }
}
```

```json
{
    "@id": "https://example.gov/concepts/environment",
    "@type": "Concept",
    "prefLabel": "Environment",
    "altLabel": "Ecology",
    "definition": "The natural world, including air, water, land, plants, and animals, especially as affected by human activity.",
    "notation": [
        "ENV",
        "E01",
        "ENVI"
    ],
    "inScheme": {
        "@id": "https://example.gov/concept-schemes/data-themes",
        "@type": "ConceptScheme",
        "version": "2.0",
        "description": "DCAT-US approved themes for categorizing datasets",
        "title": "Data Themes"
    }
}
```

**Any of:**
- [Concept](#concept--anyOf_i0)
- [item 1](#concept--anyOf_i1)

## <a name="concept--anyOf_i0"></a>`Concept > anyOf > Concept` [#](#concept--anyOf_i0)

The value of the concept, expressed as a string. This is only used when the concept is not further described by the properties of the Concept object and is not linked to a concept scheme.

- **Type**: `string`

**Examples:**

```json
"Environment"
```

```json
"Climate Science"
```

## <a name="concept--anyOf_i1"></a>`Concept > anyOf > item 1` [#](#concept--anyOf_i1)

- **Type**: `object`
- **Additional properties**: Any type allowed

**Examples:**

```json
{
    "@type": "Concept",
    "prefLabel": "Environment"
}
```

```json
{
    "@type": "Concept",
    "prefLabel": "Climate Science",
    "definition": "The scientific study of climate patterns and change.",
    "inScheme": {
        "@id": "https://example.gov/concept-schemes/science-domains",
        "@type": "ConceptScheme",
        "title": "Science Domains"
    }
}
```

| Property                            | Type                    | Requirement Level | Title/Description                                              |
| ----------------------------------- | ----------------------- | ----------------- | -------------------------------------------------------------- |
| [@id](#concept--anyOf_i1_@id)               | string                  | Optional          |                                                                |
| [@type](#concept--anyOf_i1_@type)           | string                  | Optional          |                                                                |
| [altLabel](#concept--anyOf_i1_altLabel)     | null or string          | Optional          | Alternative label for a concept                                |
| [definition](#concept--anyOf_i1_definition) | null or string          | Optional          | Definition of the controlled vocabulary term                   |
| [inScheme](#concept--anyOf_i1_inScheme)     | object                  | Optional          | Concept scheme defining this concept                           |
| [notation](#concept--anyOf_i1_notation)     | null or array of string | Optional          | List of abbreviations or codes from code lists for the Concept |
| [prefLabel](#concept--anyOf_i1_prefLabel)   | string                  | Optional          | Preferred label for the term                                   |

### <a name="concept--anyOf_i1_@id"></a>`Concept > anyOf > item 1 > @id` [#](#concept--anyOf_i1_@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/concepts/environment"
```

### <a name="concept--anyOf_i1_@type"></a>`Concept > anyOf > item 1 > @type` [#](#concept--anyOf_i1_@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"Concept"`

### <a name="concept--anyOf_i1_altLabel"></a>`Concept > anyOf > item 1 > altLabel` [#](#concept--anyOf_i1_altLabel)

**Title:** alternate label

**Requirement:** Optional

Alternative label for a concept

- **Type**: `null or string`

**Example:**

```json
"Ecology"
```

### <a name="concept--anyOf_i1_definition"></a>`Concept > anyOf > item 1 > definition` [#](#concept--anyOf_i1_definition)

**Requirement:** Optional

Definition of the controlled vocabulary term

- **Type**: `null or string`

**Examples:**

```json
"The scientific study of climate patterns and change."
```

```json
"The natural world, including air, water, land, plants, and animals, especially as affected by human activity."
```

### <a name="concept--anyOf_i1_inScheme"></a>`Concept > anyOf > item 1 > inScheme` [#](#concept--anyOf_i1_inScheme)

**Requirement:** Optional

Concept scheme defining this concept

- **Type**: `object`
- **Additional properties**: Any type allowed
- **Defined in**: [ConceptScheme](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept-scheme)

**Examples:**

```json
{
    "@id": "https://example.gov/concept-schemes/science-domains",
    "@type": "ConceptScheme",
    "title": "Science Domains"
}
```

```json
{
    "@id": "https://example.gov/concept-schemes/data-themes",
    "@type": "ConceptScheme",
    "version": "2.0",
    "description": "DCAT-US approved themes for categorizing datasets",
    "title": "Data Themes"
}
```

### <a name="concept--anyOf_i1_notation"></a>`Concept > anyOf > item 1 > notation` [#](#concept--anyOf_i1_notation)

**Requirement:** Optional

List of abbreviations or codes from code lists for the Concept

- **Type**: null or array of string

**Example:**

```json
[
    "ENV",
    "E01",
    "ENVI"
]
```

### <a name="concept--anyOf_i1_prefLabel"></a>`Concept > anyOf > item 1 > prefLabel` [#](#concept--anyOf_i1_prefLabel)

**Title:** preferred label

**Requirement:** Optional

Preferred label for the term

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"Environment"
```

```json
"Climate Science"
```

---

<a name="concept-scheme"></a>

## Class ConceptScheme [#](#concept-scheme)

A controlled vocabulary or other list of approved terms for a concept

- **Type**: `object`
- **Additional properties**: Any type allowed

**Example:**

```json
{
    "@type": "ConceptScheme",
    "title": "Science Domains",
    "description": "A classification scheme for scientific research domains.",
    "issued": "2020-01-01"
}
```

| Property                     | Type           | Requirement Level | Title/Description                                                        |
| ---------------------------- | -------------- | ----------------- | ------------------------------------------------------------------------ |
| [title](#concept-scheme--title)             | string         | Mandatory         | The title of the concept scheme                                          |
| [description](#concept-scheme--description) | null or string | Recommended       | A description of the concept scheme                                      |
| [@id](#concept-scheme--@id)                 | string         | Optional          |                                                                          |
| [@type](#concept-scheme--@type)             | string         | Optional          |                                                                          |
| [created](#concept-scheme--created)         | null or object | Optional          | The date on which the Concept Scheme was first created                   |
| [issued](#concept-scheme--issued)           | null or object | Optional          | The date of formal issuance (e.g., publication) of the concept scheme    |
| [modified](#concept-scheme--modified)       | null or object | Optional          | The most recent date at which the concept scheme was changed or modified |
| [version](#concept-scheme--version)         | null or string | Optional          | A version number or other version designation of the concept scheme      |

## <a name="concept-scheme--title"></a>`ConceptScheme > title` [#](#concept-scheme--title)

**Requirement:** Mandatory

The title of the concept scheme

- **Type**: `string`
- **Required**: Yes

**Examples:**

```json
"Science Domains"
```

```json
"Federal Data Classification Scheme"
```

## <a name="concept-scheme--description"></a>`ConceptScheme > description` [#](#concept-scheme--description)

**Requirement:** Recommended

A description of the concept scheme

- **Type**: `null or string`

**Examples:**

```json
"A classification scheme for scientific research domains."
```

```json
"A controlled vocabulary for classifying federal government data assets by sensitivity and access requirements."
```

## <a name="concept-scheme--@id"></a>`ConceptScheme > @id` [#](#concept-scheme--@id)

**Requirement:** Optional

- **Type**: `string`
- **Format**: `iri`

**Example:**

```json
"https://example.gov/concept-schemes/data-classification"
```

## <a name="concept-scheme--@type"></a>`ConceptScheme > @type` [#](#concept-scheme--@type)

**Requirement:** Optional

- **Type**: `string`
- **Default**: `"ConceptScheme"`

## <a name="concept-scheme--created"></a>`ConceptScheme > created` [#](#concept-scheme--created)

**Title:** creation date

**Requirement:** Optional

The date on which the Concept Scheme was first created

- **Type**: null or object

**Examples:**

```json
"2020"
```

```json
"2024-01-15T10:30:00Z"
```

```json
"2024-01-15"
```

```json
"2024-01"
```

## <a name="concept-scheme--issued"></a>`ConceptScheme > issued` [#](#concept-scheme--issued)

**Title:** publication date

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the concept scheme

- **Type**: null or object

**Examples:**

```json
"2020-01-01"
```

```json
"2020"
```

```json
"2024-01-15T10:30:00Z"
```

```json
"2024-01"
```

## <a name="concept-scheme--modified"></a>`ConceptScheme > modified` [#](#concept-scheme--modified)

**Title:** update/modification date

**Requirement:** Optional

The most recent date at which the concept scheme was changed or modified

- **Type**: null or object

**Examples:**

```json
"2024"
```

```json
"2024-01-15T10:30:00Z"
```

```json
"2024-01-15"
```

```json
"2024-01"
```

## <a name="concept-scheme--version"></a>`ConceptScheme > version` [#](#concept-scheme--version)

**Title:** version info

**Requirement:** Optional

A version number or other version designation of the concept scheme

- **Type**: `null or string`

**Example:**

```json
"2.0.1"
```
