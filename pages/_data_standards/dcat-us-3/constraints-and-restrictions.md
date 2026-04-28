---
title: DCAT-US 3.0: Constraints and Restrictions
layout: page
permalink: /standards/catalog/dcat-us-3/constraints-and-restrictions/
primary_nav_section: Data Standards
category_name: Data standards
---
# Constraints and Restrictions

Restriction classes describing access limits, controlled unclassified information, and rules on how a resource may be used.

<a name="access-restriction"></a>

## AccessRestriction

**Title:** AccessRestriction

Rules or indicators that describe who can access a resource

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "AccessRestriction",
    "restrictionStatus": "Restricted - Fully",
    "specificRestriction": "PRMPA - National Security Classified (B)",
    "restrictionNote": "Access restricted to authorized personnel only."
}
```

| Property                                       | Type               | Title/Description    |
| ---------------------------------------------- | ------------------ | -------------------- |
| - [@id](#access-restriction--@id)                                 | string             | -                    |
| - [@type](#access-restriction--@type)                             | string             | -                    |
| - [restrictionNote](#access-restriction--restrictionNote)         | null or string     | restriction note     |
| + [restrictionStatus](#access-restriction--restrictionStatus)     | object             | restriction status   |
| - [specificRestriction](#access-restriction--specificRestriction) | More than one type | specific restriction |

## <a name="access-restriction--@id"></a>[Optional] Property `AccessRestriction > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="access-restriction--@type"></a>[Optional] Property `AccessRestriction > @type`

**Requirement:** Optional

| **Type**    | `string`              |
| ----------- | --------------------- |
| **Default** | `"AccessRestriction"` |

## <a name="access-restriction--restrictionNote"></a>[Optional] Property `AccessRestriction > restrictionNote`

**Title:** restriction note

**Requirement:** Optional

A note related to the access restriction

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Access restricted to authorized personnel only."
```

## <a name="access-restriction--restrictionStatus"></a>[Optional] Property `AccessRestriction > restrictionStatus`

**Title:** restriction status

**Requirement:** Optional

The indication of whether or not there are access restrictions on the item, consider using a controlled vocabulary such as https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status

| **Type**                  | More than one type                                    |
| ------------------------- | ----------------------------------------------------- |
| **Required**              | Yes                                                   |
| **Additional properties** | Any type allowed                                      |
| **Defined in**            | [Concept](./identifiers-and-relationships.md#concept) |

**Examples:**

```json
"Restricted - Fully"
```

```json
"Unrestricted"
```

## <a name="access-restriction--specificRestriction"></a>[Optional] Property `AccessRestriction > specificRestriction`

**Title:** specific restriction

**Requirement:** Optional

Authority, code list entry, or policy reference that defines the specific access restriction; consider using a controlled vocabulary such as the NARA https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"CRCCRCA 4(1)(A)"
```

```json
"PRMPA - National Security Classified (B)"
```

| Any of(Option)                                                  |
| --------------------------------------------------------------- |
| [Null allowed when not required](#access-restriction--specificRestriction_anyOf_i0) |
| [Concept](#access-restriction--specificRestriction_anyOf_i1)                        |

### <a name="access-restriction--specificRestriction_anyOf_i0"></a>Property `AccessRestriction > specificRestriction > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="access-restriction--specificRestriction_anyOf_i1"></a>Property `AccessRestriction > specificRestriction > anyOf > Concept`

**Title:** Concept

inline description of the specific restriction

| **Type**                  | More than one type                                    |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Same definition as**    | [Concept](./identifiers-and-relationships.md#concept) |

---

<a name="cui-restriction"></a>

## CUIRestriction

**Title:** CUIRestriction

Information describing Controlled Unclassified Information (CUI) restrictions for a resource

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "CUIRestriction",
    "cuiBannerMarking": "CUI//SP-CTI",
    "designationIndicator": "Controlled by: Agency XYZ"
}
```

| Property                                                           | Type                    | Title/Description                |
| ------------------------------------------------------------------ | ----------------------- | -------------------------------- |
| - [@id](#cui-restriction--@id)                                                     | string                  | -                                |
| - [@type](#cui-restriction--@type)                                                 | string                  | -                                |
| + [cuiBannerMarking](#cui-restriction--cuiBannerMarking)                           | string                  | CUI banner marking               |
| + [designationIndicator](#cui-restriction--designationIndicator)                   | string                  | CUI designation indicator        |
| - [requiredIndicatorPerAuthority](#cui-restriction--requiredIndicatorPerAuthority) | null or array of string | required indicator per authority |

## <a name="cui-restriction--@id"></a>[Optional] Property `CUIRestriction > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/cui-restrictions/dataset-001"
```

## <a name="cui-restriction--@type"></a>[Optional] Property `CUIRestriction > @type`

**Requirement:** Optional

| **Type**    | `string`           |
| ----------- | ------------------ |
| **Default** | `"CUIRestriction"` |

## <a name="cui-restriction--cuiBannerMarking"></a>[Optional] Property `CUIRestriction > cuiBannerMarking`

**Title:** CUI banner marking

**Requirement:** Optional

CUI (Controlled Unclassified Information) banner marking is required for any unclassified information that is deemed sensitive and requires protection; see information at https://www.archives.gov/cui/registry/category-marking-list

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"CUI//SP-CTI"
```

```json
"CUI//SP-PRVCY//SP-LEGAL"
```

## <a name="cui-restriction--designationIndicator"></a>[Optional] Property `CUIRestriction > designationIndicator`

**Title:** CUI designation indicator

**Requirement:** Optional

Agency that designated the information as CUI; include at least "Controlled by:" and, when possible, contact information

| **Type**     | `string` |
| ------------ | -------- |
| **Required** | Yes      |

**Examples:**

```json
"Controlled by: Agency XYZ"
```

```json
"Controlled by: DOC; POC: Jane Smith, mailto:jane.smith@example.gov, XXX-XXX-XXXX"
```

## <a name="cui-restriction--requiredIndicatorPerAuthority"></a>[Optional] Property `CUIRestriction > requiredIndicatorPerAuthority`

**Title:** required indicator per authority

**Requirement:** Optional

List of free-text required indicators from the applicable authority (for example, category descriptions or distribution statements)

| **Type** | `null or array of string` |
| -------- | ------------------------- |

**Example:**

```json
[
    "Privacy Act of 1974",
    "Federal Records Act"
]
```

| Each item of this array must be                          | Description |
| -------------------------------------------------------- | ----------- |
| [Indicator string](#cui-restriction--requiredIndicatorPerAuthority_items) | -           |

### <a name="cui-restriction--requiredIndicatorPerAuthority_items"></a>CUIRestriction > requiredIndicatorPerAuthority > Indicator string

**Title:** Indicator string

| **Type** | `string` |
| -------- | -------- |

---

<a name="use-restriction"></a>

## UseRestriction

**Title:** UseRestriction

Rules or legal limits on how a resource may be used

| **Type**                  | `object`         |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Example:**

```json
{
    "@type": "UseRestriction",
    "restrictionStatus": "Restricted - Fully",
    "specificRestriction": "Trademark",
    "restrictionNote": "This data may be used for any purpose without restriction."
}
```

| Property                                       | Type               | Title/Description    |
| ---------------------------------------------- | ------------------ | -------------------- |
| - [@id](#use-restriction--@id)                                 | string             | -                    |
| - [@type](#use-restriction--@type)                             | string             | -                    |
| - [restrictionNote](#use-restriction--restrictionNote)         | null or string     | restriction note     |
| + [restrictionStatus](#use-restriction--restrictionStatus)     | object             | restriction status   |
| - [specificRestriction](#use-restriction--specificRestriction) | More than one type | specific restriction |

## <a name="use-restriction--@id"></a>[Optional] Property `UseRestriction > @id`

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/restrictions/use-restriction-001"
```

## <a name="use-restriction--@type"></a>[Optional] Property `UseRestriction > @type`

**Requirement:** Optional

| **Type**    | `string`           |
| ----------- | ------------------ |
| **Default** | `"UseRestriction"` |

## <a name="use-restriction--restrictionNote"></a>[Optional] Property `UseRestriction > restrictionNote`

**Title:** restriction note

**Requirement:** Optional

Significant information pertaining to the use or reproduction of the data

| **Type** | `null or string` |
| -------- | ---------------- |

**Examples:**

```json
"This data may be used for any purpose without restriction."
```

```json
"This data may be used for research purposes. Commercial use requires written permission from the data steward."
```

## <a name="use-restriction--restrictionStatus"></a>[Optional] Property `UseRestriction > restrictionStatus`

**Title:** restriction status

**Requirement:** Optional

Indication of whether or not there are use restrictions on the archival materials, consider using a controlled vocabulary such as https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status

| **Type**                  | More than one type                                    |
| ------------------------- | ----------------------------------------------------- |
| **Required**              | Yes                                                   |
| **Additional properties** | Any type allowed                                      |
| **Defined in**            | [Concept](./identifiers-and-relationships.md#concept) |

**Examples:**

```json
"Restricted - Fully"
```

```json
"Unrestricted"
```

## <a name="use-restriction--specificRestriction"></a>[Optional] Property `UseRestriction > specificRestriction`

**Title:** specific restriction

**Requirement:** Optional

Authority, code list entry, or policy reference that defines the specific use restriction; consider using a controlled vocabulary such as the NARA https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-use-restriction

| **Type**                  | More than one type |
| ------------------------- | ------------------ |
| **Additional properties** | Any type allowed   |

**Examples:**

```json
"Copyright"
```

```json
"Trademark"
```

| Any of(Option)                                                  |
| --------------------------------------------------------------- |
| [Null allowed when not required](#use-restriction--specificRestriction_anyOf_i0) |
| [Concept](#use-restriction--specificRestriction_anyOf_i1)                        |

### <a name="use-restriction--specificRestriction_anyOf_i0"></a>Property `UseRestriction > specificRestriction > anyOf > Null allowed when not required`

**Title:** Null allowed when not required

| **Type** | `null` |
| -------- | ------ |

### <a name="use-restriction--specificRestriction_anyOf_i1"></a>Property `UseRestriction > specificRestriction > anyOf > Concept`

**Title:** Concept

inline description of the specific restriction

| **Type**                  | More than one type                                    |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Same definition as**    | [Concept](./identifiers-and-relationships.md#concept) |
