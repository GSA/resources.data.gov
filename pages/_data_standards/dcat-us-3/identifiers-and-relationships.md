---
title: DCAT-US 3.0: Identifiers and Relationships
layout: page
permalink: /standards/catalog/dcat-us-3/identifiers-and-relationships/
primary_nav_section: Data Standards
category_name: Data standards
---

This page combines supporting DCAT-US 3.0 classes used with the main schema classes.

## Identifier

**Title:** Identifier

A unique identifier and optionally it's scheme and other relevant information

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                              |
| ------------------------------------------- |
| [Simple string identifier](#anyOf_i0)       |
| [Identifier as a complex object](#anyOf_i1) |

## <a name="anyOf_i0"></a>Property `Identifier > anyOf > Simple string identifier`

**Title:** Simple string identifier

| **Type** | `string` |
| -------- | -------- |

## <a name="anyOf_i1"></a>Property `Identifier > anyOf > Identifier as a complex object`

**Title:** Identifier as a complex object

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Property                                  | Type               | Title/Description |
| ----------------------------------------- | ------------------ | ----------------- |
| - [@id](#anyOf_i1_@id )                   | string             | -                 |
| - [@type](#anyOf_i1_@type )               | string             | -                 |
| - [schemaAgency](#anyOf_i1_schemaAgency ) | null or string     | schema agency     |
| - [creator](#anyOf_i1_creator )           | More than one type | creator           |
| - [issued](#anyOf_i1_issued )             | More than one type | issued            |
| - [version](#anyOf_i1_version )           | null or string     | version           |
| - [notation](#anyOf_i1_notation )         | null or string     | notation          |

### <a name="anyOf_i1_@id"></a>Property `Identifier > anyOf > Identifier as a complex object > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

### <a name="anyOf_i1_@type"></a>Property `Identifier > anyOf > Identifier as a complex object > @type`

**Requirement:** Optional

| **Type**    | `string`       |
| ----------- | -------------- |
| **Default** | `"Identifier"` |

### <a name="anyOf_i1_schemaAgency"></a>Property `Identifier > anyOf > Identifier as a complex object > schemaAgency`

**Title:** schema agency

**Requirement:** Optional

The name of the agency that issued the identifier

| **Type** | `null or string` |
| -------- | ---------------- |

### <a name="anyOf_i1_creator"></a>Property `Identifier > anyOf > Identifier as a complex object > creator`

**Title:** creator

**Requirement:** Optional

the agency that manages the identifier scheme

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                               |
| ------------------------------------------------------------ |
| [Null allowed when not required](#anyOf_i1_creator_anyOf_i0) |
| [Organization](#anyOf_i1_creator_anyOf_i1)                   |

#### <a name="anyOf_i1_creator_anyOf_i0"></a>Property `Identifier > anyOf > Identifier as a complex object > creator > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

#### <a name="anyOf_i1_creator_anyOf_i1"></a>Property `Identifier > anyOf > Identifier as a complex object > creator > anyOf > Organization`

**Title:** Organization

inline description of the creator

| **Type**                  | `object`                          |
| ------------------------- | --------------------------------- |
| **Additional properties** | Any type allowed                  |
| **Defined in**            | [Organization](./Organization.md) |

### <a name="anyOf_i1_issued"></a>Property `Identifier > anyOf > Identifier as a complex object > issued`

**Title:** issued

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the Identifier

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                                              |
| ----------------------------------------------------------- |
| [Null allowed when not required](#anyOf_i1_issued_anyOf_i0) |
| [Date string](#anyOf_i1_issued_anyOf_i1)                    |

#### <a name="anyOf_i1_issued_anyOf_i0"></a>Property `Identifier > anyOf > Identifier as a complex object > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

#### <a name="anyOf_i1_issued_anyOf_i1"></a>Property `Identifier > anyOf > Identifier as a complex object > issued > anyOf > Date string`

**Title:** Date string

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                               |
| -------------------------------------------- |
| [item 0](#anyOf_i1_issued_anyOf_i1_anyOf_i0) |
| [item 1](#anyOf_i1_issued_anyOf_i1_anyOf_i1) |
| [item 2](#anyOf_i1_issued_anyOf_i1_anyOf_i2) |
| [item 3](#anyOf_i1_issued_anyOf_i1_anyOf_i3) |

##### <a name="anyOf_i1_issued_anyOf_i1_anyOf_i0"></a>Property `Identifier > anyOf > Identifier as a complex object > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

##### <a name="anyOf_i1_issued_anyOf_i1_anyOf_i1"></a>Property `Identifier > anyOf > Identifier as a complex object > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

##### <a name="anyOf_i1_issued_anyOf_i1_anyOf_i2"></a>Property `Identifier > anyOf > Identifier as a complex object > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

##### <a name="anyOf_i1_issued_anyOf_i1_anyOf_i3"></a>Property `Identifier > anyOf > Identifier as a complex object > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

### <a name="anyOf_i1_version"></a>Property `Identifier > anyOf > Identifier as a complex object > version`

**Title:** version

**Requirement:** Optional

version of the identifier scheme

| **Type** | `null or string` |
| -------- | ---------------- |

### <a name="anyOf_i1_notation"></a>Property `Identifier > anyOf > Identifier as a complex object > notation`

**Title:** notation

**Requirement:** Optional

abbreviation or code from code lists for an identifier

| **Type** | `null or string` |
| -------- | ---------------- |

---

## Relationship

**Title:** Relationship

Additional information about how one resource is related to another

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "Relationship",
    "hadRole": "isInputTo",
    "relation": "https://example.gov/models/climate-prediction"
}
```

| Property                 | Type   | Title/Description |
| ------------------------ | ------ | ----------------- |
| - [@id](#@id )           | string | -                 |
| - [@type](#@type )       | string | -                 |
| + [hadRole](#hadRole )   | string | role              |
| + [relation](#relation ) | string | relation          |

## <a name="@id"></a>[Optional] Property `Relationship > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/relationships/dataset-001-data-provider"
```

## <a name="@type"></a>[Optional] Property `Relationship > @type`

**Requirement:** Optional

| **Type**    | `string`         |
| ----------- | ---------------- |
| **Default** | `"Relationship"` |

## <a name="hadRole"></a>[Optional] Property `Relationship > hadRole`

**Title:** role

**Requirement:** Optional

The function of an entity or agent with respect to a dataset

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"isInputTo"
```

```json
"dataProvider"
```

## <a name="relation"></a>[Optional] Property `Relationship > relation`

**Title:** relation

**Requirement:** Optional

The entity related to the dataset. This string should unambiguously identify the related resource using an appropriate identifier.

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"https://example.gov/models/climate-prediction"
```

```json
"https://example.gov/organizations/national-weather-service"
```

---

## Checksum

**Title:** Checksum

A mechanism that can be used to verify that the contents of a distribution have not changed

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "Checksum",
    "algorithm": "SHA-256",
    "checksumValue": "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
}
```

| Property                           | Type   | Title/Description |
| ---------------------------------- | ------ | ----------------- |
| - [@id](#@id )                     | string | -                 |
| - [@type](#@type )                 | string | -                 |
| + [algorithm](#algorithm )         | string | algorithm         |
| + [checksumValue](#checksumValue ) | string | checksum value    |

## <a name="@id"></a>[Optional] Property `Checksum > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/checksums/dataset-001-sha256"
```

## <a name="@type"></a>[Optional] Property `Checksum > @type`

**Requirement:** Optional

| **Type**    | `string`     |
| ----------- | ------------ |
| **Default** | `"Checksum"` |

## <a name="algorithm"></a>[Optional] Property `Checksum > algorithm`

**Title:** algorithm

**Requirement:** Optional

The algorithm used to produce the checksum

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Example:**

```json
"SHA-256"
```

## <a name="checksumValue"></a>[Optional] Property `Checksum > checksumValue`

**Title:** checksum value

**Requirement:** Optional

A lower case hexadecimal encoded digest value produced using a specific algorithm

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
```

```json
"a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"
```

---

## Concept

**Title:** Concept

A controlled term or label, optionally drawn from a concept scheme

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)       |
| -------------------- |
| [Concept](#anyOf_i0) |
| [item 1](#anyOf_i1)  |

## <a name="anyOf_i0"></a>Property `Concept > anyOf > Concept`

**Title:** Concept

The value of the concept, expressed as a string. This is only used when the concept is not further described by the properties of the Concept object and is not linked to a concept scheme.

| **Type** | `string` |
| -------- | -------- |

## <a name="anyOf_i1"></a>Property `Concept > anyOf > item 1`

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

| Property                              | Type               | Title/Description |
| ------------------------------------- | ------------------ | ----------------- |
| - [@id](#anyOf_i1_@id )               | string             | -                 |
| - [@type](#anyOf_i1_@type )           | string             | -                 |
| - [altLabel](#anyOf_i1_altLabel )     | null or string     | alternate label   |
| - [definition](#anyOf_i1_definition ) | null or string     | definition        |
| - [inScheme](#anyOf_i1_inScheme )     | object             | in scheme         |
| - [notation](#anyOf_i1_notation )     | More than one type | notation          |
| + [prefLabel](#anyOf_i1_prefLabel )   | string             | preferred label   |

### <a name="anyOf_i1_@id"></a>Property `Concept > anyOf > item 1 > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

### <a name="anyOf_i1_@type"></a>Property `Concept > anyOf > item 1 > @type`

**Requirement:** Optional

| **Type**    | `string`    |
| ----------- | ----------- |
| **Default** | `"Concept"` |

### <a name="anyOf_i1_altLabel"></a>Property `Concept > anyOf > item 1 > altLabel`

**Title:** alternate label

**Requirement:** Optional

Alternative label for a concept

| **Type** | `null or string` |
| -------- | ---------------- |

### <a name="anyOf_i1_definition"></a>Property `Concept > anyOf > item 1 > definition`

**Title:** definition

**Requirement:** Optional

Definition of the controlled vocabulary term

| **Type** | `null or string` |
| -------- | ---------------- |

### <a name="anyOf_i1_inScheme"></a>Property `Concept > anyOf > item 1 > inScheme`

**Title:** in scheme

**Requirement:** Optional

Concept scheme defining this concept

| **Type**                  | `object`                            |
| ------------------------- | ----------------------------------- |
| **Additional properties** | Any type allowed                    |
| **Defined in**            | [Conceptscheme](./Conceptscheme.md) |

### <a name="anyOf_i1_notation"></a>Property `Concept > anyOf > item 1 > notation`

**Title:** notation

**Requirement:** Optional

List of abbreviations or codes from code lists for the Concept

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

| Any of(Option)                        |
| ------------------------------------- |
| [item 0](#anyOf_i1_notation_anyOf_i0) |
| [item 1](#anyOf_i1_notation_anyOf_i1) |

#### <a name="anyOf_i1_notation_anyOf_i0"></a>Property `Concept > anyOf > item 1 > notation > anyOf > item 0`

| **Type** | `null` |
| -------- | ------ |

#### <a name="anyOf_i1_notation_anyOf_i1"></a>Property `Concept > anyOf > item 1 > notation > anyOf > item 1`

| **Type** | `array of string` |
| -------- | ----------------- |

| Each item of this array must be                   | Description |
| ------------------------------------------------- | ----------- |
| [item 1 items](#anyOf_i1_notation_anyOf_i1_items) | -           |

##### <a name="anyOf_i1_notation_anyOf_i1_items"></a>Concept > anyOf > item 1 > notation > anyOf > item 1 > item 1 items

| **Type** | `string` |
| -------- | -------- |

### <a name="anyOf_i1_prefLabel"></a>Property `Concept > anyOf > item 1 > prefLabel`

**Title:** preferred label

**Requirement:** Optional

Preferred label for the term

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

---

## ConceptScheme

**Title:** ConceptScheme

A controlled vocabulary or other list of approved terms for a concept

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "ConceptScheme",
    "title": "Science Domains",
    "description": "A classification scheme for scientific research domains.",
    "issued": "2020-01-01"
}
```

| Property                       | Type               | Title/Description        |
| ------------------------------ | ------------------ | ------------------------ |
| - [@id](#@id )                 | string             | -                        |
| - [@type](#@type )             | string             | -                        |
| - [version](#version )         | null or string     | version info             |
| - [created](#created )         | More than one type | creation date            |
| - [description](#description ) | null or string     | description              |
| - [issued](#issued )           | More than one type | publication date         |
| - [modified](#modified )       | More than one type | update/modification date |
| + [title](#title )             | string             | title                    |

## <a name="@id"></a>[Optional] Property `ConceptScheme > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/concept-schemes/data-classification"
```

## <a name="@type"></a>[Optional] Property `ConceptScheme > @type`

**Requirement:** Optional

| **Type**    | `string`          |
| ----------- | ----------------- |
| **Default** | `"ConceptScheme"` |

## <a name="version"></a>[Optional] Property `ConceptScheme > version`

**Title:** version info

**Requirement:** Optional

A version number or other version designation of the concept scheme

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"2.0.1"
```

## <a name="created"></a>[Optional] Property `ConceptScheme > created`

**Title:** creation date

**Requirement:** Optional

The date on which the Concept Scheme was first created

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of(Option)                                      |
| --------------------------------------------------- |
| [Null allowed when not required](#created_anyOf_i0) |
| [Date string](#created_anyOf_i1)                    |

### <a name="created_anyOf_i0"></a>Property `ConceptScheme > created > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="created_anyOf_i1"></a>Property `ConceptScheme > created > anyOf > Date string`

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

#### <a name="created_anyOf_i1_anyOf_i0"></a>Property `ConceptScheme > created > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="created_anyOf_i1_anyOf_i1"></a>Property `ConceptScheme > created > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="created_anyOf_i1_anyOf_i2"></a>Property `ConceptScheme > created > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="created_anyOf_i1_anyOf_i3"></a>Property `ConceptScheme > created > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="description"></a>[Optional] Property `ConceptScheme > description`

**Title:** description

**Requirement:** Optional

A description of the concept scheme

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"A classification scheme for scientific research domains."
```

```json
"A controlled vocabulary for classifying federal government data assets by sensitivity and access requirements."
```

## <a name="issued"></a>[Optional] Property `ConceptScheme > issued`

**Title:** publication date

**Requirement:** Optional

The date of formal issuance (e.g., publication) of the concept scheme

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of(Option)                                     |
| -------------------------------------------------- |
| [Null allowed when not required](#issued_anyOf_i0) |
| [Date string](#issued_anyOf_i1)                    |

### <a name="issued_anyOf_i0"></a>Property `ConceptScheme > issued > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="issued_anyOf_i1"></a>Property `ConceptScheme > issued > anyOf > Date string`

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

#### <a name="issued_anyOf_i1_anyOf_i0"></a>Property `ConceptScheme > issued > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="issued_anyOf_i1_anyOf_i1"></a>Property `ConceptScheme > issued > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="issued_anyOf_i1_anyOf_i2"></a>Property `ConceptScheme > issued > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="issued_anyOf_i1_anyOf_i3"></a>Property `ConceptScheme > issued > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="modified"></a>[Optional] Property `ConceptScheme > modified`

**Title:** update/modification date

**Requirement:** Optional

The most recent date at which the concept scheme was changed or modified

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

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

| Any of(Option)                                       |
| ---------------------------------------------------- |
| [Null allowed when not required](#modified_anyOf_i0) |
| [Date string](#modified_anyOf_i1)                    |

### <a name="modified_anyOf_i0"></a>Property `ConceptScheme > modified > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="modified_anyOf_i1"></a>Property `ConceptScheme > modified > anyOf > Date string`

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

#### <a name="modified_anyOf_i1_anyOf_i0"></a>Property `ConceptScheme > modified > anyOf > Date string > anyOf > item 0`

| **Type**   | `string`    |
| ---------- | ----------- |
| **Format** | `date-time` |

#### <a name="modified_anyOf_i1_anyOf_i1"></a>Property `ConceptScheme > modified > anyOf > Date string > anyOf > item 1`

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `date`   |

#### <a name="modified_anyOf_i1_anyOf_i2"></a>Property `ConceptScheme > modified > anyOf > Date string > anyOf > item 2`

A year in YYYY format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D%24) |

#### <a name="modified_anyOf_i1_anyOf_i3"></a>Property `ConceptScheme > modified > anyOf > Date string > anyOf > item 3`

A year and month in YYYY-MM format

| **Type** | `string` |
| -------- | -------- |

| Restrictions                      |                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^[0-9]{4}-[0-9]{2}$``` [Test](https://regex101.com/?regex=%5E%5B0-9%5D%7B4%7D-%5B0-9%5D%7B2%7D%24) |

## <a name="title"></a>[Optional] Property `ConceptScheme > title`

**Title:** title

**Requirement:** Optional

The title of the concept scheme

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"Science Domains"
```

```json
"Federal Data Classification Scheme"
```
