---
title: DCAT-US 3.0: Agents
layout: page
permalink: /standards/catalog/dcat-us-3/agents/
primary_nav_section: Data Standards
category_name: Data standards
---
# Agents

Data information classes including Agent, Organization, and Kind, which describe organizations, people, and contact information.

<a name="agent"></a>

## Agent

**Title:** Agent

A person, organization, software agent, or other entity involved with a resource

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "Agent",
    "name": "National Climate Data Center",
    "category": [
        "https://example.gov/concepts/federal-agency"
    ]
}
```

| Property                 | Type          | Title/Description |
| ------------------------ | ------------- | ----------------- |
| - [@id](#agent--@id)           | string        | -                 |
| - [@type](#agent--@type)       | string        | -                 |
| - [category](#agent--category) | null or array | category          |
| + [name](#agent--name)         | string        | name              |

## <a name="agent--@id"></a>[Optional] Property `Agent > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/agents/data-steward-001"
```

## <a name="agent--@type"></a>[Optional] Property `Agent > @type`

**Requirement:** Optional

| **Type**    | `string`  |
| ----------- | --------- |
| **Default** | `"Agent"` |

## <a name="agent--category"></a>[Optional] Property `Agent > category`

**Title:** category

**Requirement:** Optional

The type of the agent that makes the item available

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                       | Description                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Concept](./identifiers-and-relationships.md#concept) | A controlled term or label, optionally drawn from a concept scheme |

## <a name="agent--name"></a>[Optional] Property `Agent > name`

**Title:** name

**Requirement:** Optional

The name of the agent

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"National Climate Data Center"
```

```json
"U.S. Department of Commerce Data Stewardship Office"
```

---

<a name="organization"></a>

## Organization

**Title:** Organization

An organization involved with a resource, including parent or child organizations

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Examples:**

```json
{
    "@type": "Organization",
    "name": "National Climate Data Center",
    "altLabel": "NCDC"
}
```

```json
{
    "@id": "https://example.gov/organizations/census-bureau",
    "@type": "Organization",
    "name": "U.S. Census Bureau",
    "prefLabel": "United States Census Bureau",
    "altLabel": "Census Bureau",
    "notation": [
        "USCB",
        "CB"
    ],
    "subOrganizationOf": [
        {
            "@id": "https://example.gov/organizations/doc",
            "@type": "Organization",
            "name": "U.S. Department of Commerce"
        }
    ]
}
```

| Property                                   | Type                    | Title/Description  |
| ------------------------------------------ | ----------------------- | ------------------ |
| - [@id](#organization--@id)                             | string                  | -                  |
| - [@type](#organization--@type)                         | string                  | -                  |
| + [name](#organization--name)                           | string                  | name               |
| - [subOrganizationOf](#organization--subOrganizationOf) | null or array           | suborganization of |
| - [altLabel](#organization--altLabel)                   | null or string          | alternative label  |
| - [notation](#organization--notation)                   | null or array of string | notation           |
| - [prefLabel](#organization--prefLabel)                 | null or string          | preferred label    |

## <a name="organization--@id"></a>[Optional] Property `Organization > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/organizations/census-bureau"
```

## <a name="organization--@type"></a>[Optional] Property `Organization > @type`

**Requirement:** Optional

| **Type**    | `string`         |
| ----------- | ---------------- |
| **Default** | `"Organization"` |

## <a name="organization--name"></a>[Optional] Property `Organization > name`

**Title:** name

**Requirement:** Optional

The full name of the Organization

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"National Climate Data Center"
```

```json
"U.S. Census Bureau"
```

## <a name="organization--subOrganizationOf"></a>[Optional] Property `Organization > subOrganizationOf`

**Title:** suborganization of

**Requirement:** Optional

Represents hierarchical containment of Organizations or OrganizationalUnits; indicates an Organization which contains this Organization

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be          | Description                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| [Organization](./agents.md#organization) | An organization involved with a resource, including parent or child organizations |

## <a name="organization--altLabel"></a>[Optional] Property `Organization > altLabel`

**Title:** alternative label

**Requirement:** Optional

alternative name (trading name, colloquial name) for an organization

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"NCDC"
```

```json
"Census Bureau"
```

## <a name="organization--notation"></a>[Optional] Property `Organization > notation`

**Title:** notation

**Requirement:** Optional

List of abbreviations or codes from code lists for an organization (e.g. DOI, DOD)

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "USCB",
    "CB"
]
```

| Each item of this array must be | Description |
| ------------------------------- | ----------- |
| [Abbreviation](#organization--notation_items) | -           |

### <a name="organization--notation_items"></a>Organization > notation > Abbreviation

**Title:** Abbreviation

| **Type** | `string` |
| -------- | -------- |

## <a name="organization--prefLabel"></a>[Optional] Property `Organization > prefLabel`

**Title:** preferred label

**Requirement:** Optional

Preferred or legal name of the organization

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"United States Census Bureau"
```

---

<a name="kind"></a>

## Kind

**Title:** Kind

Contact information for an individual or entity

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Examples:**

```json
{
    "@type": "Kind",
    "fn": "Climate Data Support Team",
    "hasEmail": "mailto:climate-support@example.gov",
    "organization-name": "National Climate Data Center",
    "tel": "+1-555-123-4567"
}
```

```json
{
    "@type": "Kind",
    "fn": "Dr. Jane Smith",
    "hasEmail": "mailto:jane.smith@example.gov"
}
```

| Property                                   | Type           | Title/Description |
| ------------------------------------------ | -------------- | ----------------- |
| - [@id](#kind--@id)                             | string         | -                 |
| - [@type](#kind--@type)                         | string         | -                 |
| - [address](#kind--address)                     | null or array  | address           |
| + [hasEmail](#kind--hasEmail)                   | string         | Email             |
| - [family-name](#kind--family-name)             | null or string | family name       |
| + [fn](#kind--fn)                               | string         | formatted name    |
| - [given-name](#kind--given-name)               | null or string | given name        |
| - [organization-name](#kind--organization-name) | null or string | organization name |
| - [tel](#kind--tel)                             | null or string | telephone         |
| - [title](#kind--title)                         | null or string | position title    |

## <a name="kind--@id"></a>[Optional] Property `Kind > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/contacts/climate-support-001"
```

## <a name="kind--@type"></a>[Optional] Property `Kind > @type`

**Requirement:** Optional

| **Type**    | `string` |
| ----------- | -------- |
| **Default** | `"Kind"` |

## <a name="kind--address"></a>[Optional] Property `Kind > address`

**Title:** address

**Requirement:** Optional

The address of the contact

| **Type** | `null or array` |
| -------- | --------------- |

| Each item of this array must be                  | Description               |
| ------------------------------------------------ | ------------------------- |
| [Address](./temporal-spatial-metrics.md#address) | A single physical address |

## <a name="kind--hasEmail"></a>[Optional] Property `Kind > hasEmail`

**Title:** Email

**Requirement:** Optional

Email address for the contact in mailto: format (for example, mailto:support@example.gov)

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"mailto:climate-support@example.gov"
```

```json
"mailto:jane.smith@example.gov"
```

| Restrictions                      |                                                                                                                                                                                                                                                                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Must match regular expression** | ```^mailto:[\w\_\~\!\$\&\'\(\)\*\+\,\;\=\:.-]+@[\w.-]+\.[\w.-]+?$``` [Test](https://regex101.com/?regex=%5Emailto%3A%5B%5Cw%5C_%5C~%5C%21%5C%24%5C%26%5C%27%5C%28%5C%29%5C%2A%5C%2B%5C%2C%5C%3B%5C%3D%5C%3A.-%5D%2B%40%5B%5Cw.-%5D%2B%5C.%5B%5Cw.-%5D%2B%3F%24&testString=%22mailto%3Aclimate-support%40example.gov%22) |

## <a name="kind--family-name"></a>[Optional] Property `Kind > family-name`

**Title:** family name

**Requirement:** Optional

The family name of the contact

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Smith"
```

## <a name="kind--fn"></a>[Optional] Property `Kind > fn`

**Title:** formatted name

**Requirement:** Optional

The formatted text of the name of the contact

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"Climate Data Support Team"
```

```json
"Dr. Jane Smith"
```

## <a name="kind--given-name"></a>[Optional] Property `Kind > given-name`

**Title:** given name

**Requirement:** Optional

The given name of the contact

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Jane"
```

## <a name="kind--organization-name"></a>[Optional] Property `Kind > organization-name`

**Title:** organization name

**Requirement:** Optional

The name of the organization to contact

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"National Climate Data Center"
```

## <a name="kind--tel"></a>[Optional] Property `Kind > tel`

**Title:** telephone

**Requirement:** Optional

The telephone number for the contact

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"+1-555-123-4567"
```

## <a name="kind--title"></a>[Optional] Property `Kind > title`

**Title:** position title

**Requirement:** Optional

The position role of the person to contact

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Senior Climate Data Scientist"
```
