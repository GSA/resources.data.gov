---
title: "DCAT-US 3.0: Constraints and Restrictions"
layout: "page"
permalink: "/standards/catalog/dcat-us-3/constraints-and-restrictions/"
primary_nav_section: "Data Standards"
category_name: "Data standards"
---
# Constraints and Restrictions

Restriction classes describing access limits, controlled unclassified information, and rules on how a resource may be used.

<a name="access-restriction"></a>

## Class AccessRestriction [#](#access-restriction)

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

| Property                                     | Type               | Requirement Level | Title/Description                                                                                                                                                                                                                                 |
| -------------------------------------------- | ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#access-restriction--@id)                                 | string             | Optional          |                                                                                                                                                                                                                                                   |
| [@type](#access-restriction--@type)                             | string             | Optional          |                                                                                                                                                                                                                                                   |
| [restrictionNote](#access-restriction--restrictionNote)         | null or string     | Optional          | A note related to the access restriction                                                                                                                                                                                                          |
| [restrictionStatus](#access-restriction--restrictionStatus)     | object             | Mandatory         | The indication of whether or not there are access restrictions on the item, consider using a controlled vocabulary such as https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status                              |
| [specificRestriction](#access-restriction--specificRestriction) | More than one type | Recommended       | Authority, code list entry, or policy reference that defines the specific access restriction; consider using a controlled vocabulary such as the NARA https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction |

## <a name="access-restriction--@id"></a>`AccessRestriction > @id` [#](#access-restriction--@id)

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

## <a name="access-restriction--@type"></a>`AccessRestriction > @type` [#](#access-restriction--@type)

**Requirement:** Optional

| **Type**    | `string`              |
| ----------- | --------------------- |
| **Default** | `"AccessRestriction"` |

## <a name="access-restriction--restrictionNote"></a>`AccessRestriction > restrictionNote` [#](#access-restriction--restrictionNote)

**Requirement:** Optional

A note related to the access restriction

| **Type** | `null or string` |
| -------- | ---------------- |

**Example:**

```json
"Access restricted to authorized personnel only."
```

## <a name="access-restriction--restrictionStatus"></a>`AccessRestriction > restrictionStatus` [#](#access-restriction--restrictionStatus)

**Requirement:** Mandatory

The indication of whether or not there are access restrictions on the item, consider using a controlled vocabulary such as https://www.archives.gov/research/catalog/lcdrg/authority-lists/access-restriction-status

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Required**              | Yes                                                   |
| **Additional properties** | Any type allowed                                      |
| **Defined in**            | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

**Examples:**

```json
"Restricted - Fully"
```

```json
"Unrestricted"
```

## <a name="access-restriction--specificRestriction"></a>`AccessRestriction > specificRestriction` [#](#access-restriction--specificRestriction)

**Requirement:** Recommended

Authority, code list entry, or policy reference that defines the specific access restriction; consider using a controlled vocabulary such as the NARA https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-access-restriction

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Examples:**

```json
"CRCCRCA 4(1)(A)"
```

```json
"PRMPA - National Security Classified (B)"
```

| Any of                                                          |
| --------------------------------------------------------------- |
| [Null allowed when not required](#access-restriction--specificRestriction_anyOf_i0) |
| [Concept](#access-restriction--specificRestriction_anyOf_i1)                        |

### <a name="access-restriction--specificRestriction_anyOf_i0"></a>`AccessRestriction > specificRestriction > anyOf > Null allowed when not required` [#](#access-restriction--specificRestriction_anyOf_i0)

| **Type** | `null` |
| -------- | ------ |

### <a name="access-restriction--specificRestriction_anyOf_i1"></a>`AccessRestriction > specificRestriction > anyOf > Concept` [#](#access-restriction--specificRestriction_anyOf_i1)

inline description of the specific restriction

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Same definition as**    | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

---

<a name="cui-restriction"></a>

## Class CUIRestriction [#](#cui-restriction)

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

| Property                                                         | Type                    | Requirement Level | Title/Description                                                                                                                                                                                                                      |
| ---------------------------------------------------------------- | ----------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#cui-restriction--@id)                                                     | string                  | Optional          |                                                                                                                                                                                                                                        |
| [@type](#cui-restriction--@type)                                                 | string                  | Optional          |                                                                                                                                                                                                                                        |
| [cuiBannerMarking](#cui-restriction--cuiBannerMarking)                           | string                  | Mandatory         | CUI (Controlled Unclassified Information) banner marking is required for any unclassified information that is deemed sensitive and requires protection; see information at https://www.archives.gov/cui/registry/category-marking-list |
| [designationIndicator](#cui-restriction--designationIndicator)                   | string                  | Mandatory         | Agency that designated the information as CUI; include at least "Controlled by:" and, when possible, contact information                                                                                                               |
| [requiredIndicatorPerAuthority](#cui-restriction--requiredIndicatorPerAuthority) | null or array of string | Optional          | List of free-text required indicators from the applicable authority (for example, category descriptions or distribution statements)                                                                                                    |

## <a name="cui-restriction--@id"></a>`CUIRestriction > @id` [#](#cui-restriction--@id)

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/cui-restrictions/dataset-001"
```

## <a name="cui-restriction--@type"></a>`CUIRestriction > @type` [#](#cui-restriction--@type)

**Requirement:** Optional

| **Type**    | `string`           |
| ----------- | ------------------ |
| **Default** | `"CUIRestriction"` |

## <a name="cui-restriction--cuiBannerMarking"></a>`CUIRestriction > cuiBannerMarking` [#](#cui-restriction--cuiBannerMarking)

**Requirement:** Mandatory

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

## <a name="cui-restriction--designationIndicator"></a>`CUIRestriction > designationIndicator` [#](#cui-restriction--designationIndicator)

**Title:** CUI designation indicator

**Requirement:** Mandatory

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

## <a name="cui-restriction--requiredIndicatorPerAuthority"></a>`CUIRestriction > requiredIndicatorPerAuthority` [#](#cui-restriction--requiredIndicatorPerAuthority)

**Requirement:** Optional

List of free-text required indicators from the applicable authority (for example, category descriptions or distribution statements)

| **Type** | null or array of string |
| -------- | ----------------------- |

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

### <a name="cui-restriction--requiredIndicatorPerAuthority_items"></a>Indicator string [#](#cui-restriction--requiredIndicatorPerAuthority_items)

| **Type** | `string` |
| -------- | -------- |

---

<a name="use-restriction"></a>

## Class UseRestriction [#](#use-restriction)

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

| Property                                     | Type               | Requirement Level | Title/Description                                                                                                                                                                                                                           |
| -------------------------------------------- | ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@id](#use-restriction--@id)                                 | string             | Optional          |                                                                                                                                                                                                                                             |
| [@type](#use-restriction--@type)                             | string             | Optional          |                                                                                                                                                                                                                                             |
| [restrictionNote](#use-restriction--restrictionNote)         | null or string     | Optional          | Significant information pertaining to the use or reproduction of the data                                                                                                                                                                   |
| [restrictionStatus](#use-restriction--restrictionStatus)     | object             | Mandatory         | Indication of whether or not there are use restrictions on the archival materials, consider using a controlled vocabulary such as https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status                    |
| [specificRestriction](#use-restriction--specificRestriction) | More than one type | Recommended       | Authority, code list entry, or policy reference that defines the specific use restriction; consider using a controlled vocabulary such as the NARA https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-use-restriction |

## <a name="use-restriction--@id"></a>`UseRestriction > @id` [#](#use-restriction--@id)

**Requirement:** Optional

| **Type**   | `string` |
| ---------- | -------- |
| **Format** | `iri`    |

**Example:**

```json
"https://example.gov/restrictions/use-restriction-001"
```

## <a name="use-restriction--@type"></a>`UseRestriction > @type` [#](#use-restriction--@type)

**Requirement:** Optional

| **Type**    | `string`           |
| ----------- | ------------------ |
| **Default** | `"UseRestriction"` |

## <a name="use-restriction--restrictionNote"></a>`UseRestriction > restrictionNote` [#](#use-restriction--restrictionNote)

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

## <a name="use-restriction--restrictionStatus"></a>`UseRestriction > restrictionStatus` [#](#use-restriction--restrictionStatus)

**Requirement:** Mandatory

Indication of whether or not there are use restrictions on the archival materials, consider using a controlled vocabulary such as https://www.archives.gov/research/catalog/lcdrg/authority-lists/use-restriction-status

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Required**              | Yes                                                   |
| **Additional properties** | Any type allowed                                      |
| **Defined in**            | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |

**Examples:**

```json
"Restricted - Fully"
```

```json
"Unrestricted"
```

## <a name="use-restriction--specificRestriction"></a>`UseRestriction > specificRestriction` [#](#use-restriction--specificRestriction)

**Requirement:** Recommended

Authority, code list entry, or policy reference that defines the specific use restriction; consider using a controlled vocabulary such as the NARA https://www.archives.gov/research/catalog/lcdrg/authority-lists/specific-use-restriction

| **Type**                  | `combining`      |
| ------------------------- | ---------------- |
| **Additional properties** | Any type allowed |

**Examples:**

```json
"Copyright"
```

```json
"Trademark"
```

| Any of                                                          |
| --------------------------------------------------------------- |
| [Null allowed when not required](#use-restriction--specificRestriction_anyOf_i0) |
| [Concept](#use-restriction--specificRestriction_anyOf_i1)                        |

### <a name="use-restriction--specificRestriction_anyOf_i0"></a>`UseRestriction > specificRestriction > anyOf > Null allowed when not required` [#](#use-restriction--specificRestriction_anyOf_i0)

| **Type** | `null` |
| -------- | ------ |

### <a name="use-restriction--specificRestriction_anyOf_i1"></a>`UseRestriction > specificRestriction > anyOf > Concept` [#](#use-restriction--specificRestriction_anyOf_i1)

inline description of the specific restriction

| **Type**                  | `combining`                                           |
| ------------------------- | ----------------------------------------------------- |
| **Additional properties** | Any type allowed                                      |
| **Same definition as**    | [Concept](/standards/catalog/dcat-us-3/identifiers-and-relationships/#concept) |
