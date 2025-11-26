---
title: Catalog API
layout: page
---

This documentation covers the JSON API endpoints available in the catalog application.

---

## Table of Contents

1. [Search Datasets](#search-datasets)
2. [Get Harvest Record](#get-harvest-record)
3. [Get Harvest Record Raw](#get-harvest-record-raw)
4. [Get Harvest Record Transformed](#get-harvest-record-transformed)
5. [Get Keywords](#get-keywords)

---

## Search Datasets

Search for datasets in the catalog.

**Endpoint:** `/search`  
**Method:** `GET`

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | string | No | `""` | Search query string |
| `per_page` | integer | No | 10 | Number of results per page |
| `results` | integer | No | 0 | Results hint for pagination |
| `from_hint` | string | No | - | Encoded hint for returning to search context |
| `org_id` | string | No | - | Filter by organization ID |
| `org_type` | array | No | - | Filter by organization type(s) |
| `keyword` | array | No | - | Filter by keyword(s) - exact match |
| `after` | string | No | - | Pagination cursor for next page |
| `spatial_filter` | string | No | - | Filter by spatial data: `"geospatial"` or `"non-geospatial"` |
| `sort` | string | No | `"relevance"` | Sort order: `"relevance"` or `"popularity"` |

### Example URLs

```
/search?q=health
/search?q=climate&sort=popularity
/search?q=education&per_page=1
/search?keyword=health&keyword=medical
/search?org_id=1&q=data
/search?spatial_filter=geospatial
/search?q=environment&after=<cursor>
```

### Response

**Status Code:** `200 OK`

**Response Body:**

Example: `/search?q=education&per_page=1`

Response:
```json
{
  "after": "WzEwMC4wNjEzNiwwLCJiMWEzOTY3YzJhMTExZjE2NzgxN2IwMTI0YzUyYjBhYyJd",
  "results": [
    {
      "_score": 100.06136,
      "_sort": [100.06136, 0, "b1a3967c2a111f167817b0124c52b0ac"
      ],
      "dcat": {
        "@type": "dcat:Dataset",
        "accessLevel": "public",
        "accrualPeriodicity": "irregular",
        "bureauCode": [
          "018:50"
        ],
        "contactPoint": {
          "@type": "vcard:Contact",
          "fn": "Sarah Grady",
          "hasEmail": "mailto:sarah.grady@ed.gov"
        },
        "dataQuality": true,
        "description": "The National Household Education Survey, 2005 Adult Education (AE-NHES:2005), is a study that is part of the National Household Education Survey (NHES) program. AE-NHES:2005 (https://nces.ed.gov/nhes/) is a cross-sectional survey that collects data directly from households on educational issues. This study was conducted using address based sample, self-administered questionnaires of households. Households in 2005 were sampled. The study's response rate was 67.5 percent. Key statistics produced from AE-NHES:2005 are participation in adult and continuing education and lifelong learning.",
        "distribution": [
          {
            "@type": "dcat:Distribution",
            "describedBy": "https://nces.ed.gov/nhes/pdf/userman/NHES_2005_AE_Codebook.pdf",
            "describedByType": "application/pdf",
            "description": "National Household Education Surveys Program, 2005 Adult Education Survey, data as a zipped ASCII data file",
            "downloadURL": "https://nces.ed.gov/nhes/data/ae05asc.zip",
            "format": "Zipped DAT",
            "mediaType": "application/zip",
            "title": "ae05asc.zip"
          }
        ],
        "identifier": "1661d277-822b-4e38-aa67-fd1a56343402",
        "issued": "2006-05-31",
        "keyword": [
          "0ee4621b-38be-46bb-8360-219726022a58",
          "adult-education",
          "continuing-education",
          "lifelong-learning"
        ],
        "language": [
          "en-US"
        ],
        "license": "https://creativecommons.org/publicdomain/zero/1.0/",
        "modified": "2023-06-22T20:25:39.652070",
        "programCode": [
          "018:000"
        ],
        "publisher": {
          "@type": "org:Organization",
          "name": "National Center for Education Statistics (NCES)",
          "subOrganizationOf": {
            "@type": "org:Organization",
            "name": "Institute of Education Sciences (IES)",
            "subOrganizationOf": {
              "@type": "org:Organization",
              "name": "Office of the Secretary (OS)",
              "subOrganizationOf": {
                "@type": "org:Organization",
                "name": "U.S. Department of Education",
                "subOrganizationOf": {
                  "@type": "org:Organization",
                  "name": "U.S. Government"
                }
              }
            }
          }
        },
        "references": [
          "https://nces.ed.gov/nhes/pdf/adulted/2005_ae.pdf",
          "https://nces.ed.gov/nhes/pdf/userman/NHES_2005_Vol_I.pdf",
          "https://nces.ed.gov/nhes/pdf/userman/NHES_2005_Vol_IV_AE.pdf"
        ],
        "spatial": "United States",
        "systemOfRecords": "https://www2.ed.gov/notices/pai/pai-18-13-01.pdf",
        "temporal": "2004/2005",
        "title": "National Household Education Surveys Program, 2005 Adult Education Survey"
      },
      "description": "The National Household Education Survey, 2005 Adult Education (AE-NHES:2005), is a study that is part of the National Household Education Survey (NHES) program. AE-NHES:2005 (https://nces.ed.gov/nhes/) is a cross-sectional survey that collects data directly from households on educational issues. This study was conducted using address based sample, self-administered questionnaires of households. Households in 2005 were sampled. The study's response rate was 67.5 percent. Key statistics produced from AE-NHES:2005 are participation in adult and continuing education and lifelong learning.",
      "has_spatial": true,
      "identifier": "1661d277-822b-4e38-aa67-fd1a56343402",
      "keyword": [
        "0ee4621b-38be-46bb-8360-219726022a58",
        "adult-education",
        "continuing-education",
        "lifelong-learning"
      ],
      "organization": {
        "aliases": [
          "dept"
        ],
        "description": null,
        "id": "217e855b-cd64-4ebc-958b-abbbb0f57ac2",
        "logo": "https://raw.githubusercontent.com/GSA/logo/refs/heads/master/ed.png",
        "name": "Department of Education",
        "organization_type": "Federal Government",
        "slug": "ed"
      },
      "popularity": 0,
      "publisher": "National Center for Education Statistics (NCES)",
      "slug": "national-household-education-surveys-program-2005-adult-education-survey",
      "theme": [],
      "title": "National Household Education Surveys Program, 2005 Adult Education Survey"
    }
  ],
  "sort": "relevance"
}
```

---

## Get Harvest Record

Retrieve a harvest record by ID.

**Endpoint:** `/harvest_record/<record_id>`  
**Method:** `GET`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string (UUID4) | Yes | The harvest record ID |

### Example URL

```
/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8
```

### Response

**Status Code:** `200 OK` or `404 Not Found`

**Success Response Body:**
```json
{
  "action": "create",
  "ckan_id": null,
  "ckan_name": null,
  "date_created": "2025-11-26T07:46:13.673655",
  "date_finished": null,
  "harvest_job_id": "de2010f9-d9ec-4211-9690-5b3bbc9fe1f3",
  "harvest_source_id": "14348973-07a5-4661-8341-02230f2f6cbb",
  "id": "d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8",
  "identifier": "http://datainventory.doi.gov/id/dataset/bsee-0000000070",
  "parent_identifier": null,
  "source_hash": "47ca2dd5471e659e4cd1c83d79adb0b0c2c8c013a1e03d629d56b0541e307267",
  "source_raw": {
    "accessLevel": "public",
    "bureauCode": [
      "010:22"
    ],
    "contactPoint": {
      "@type": "vcard:Contact",
      "fn": "Bureau of Safety and Environmental Enforcement (BSEE)",
      "hasEmail": "mailto:bseewebmaster@bsee.gov"
    },
    "description": "This data set contains Gulf of America Region Pipeline Locations (2000-Present)",
    "distribution": [
      {
        "@type": "dcat:Distribution",
        "accessURL": "https://www.bsee.gov/",
        "title": "Web Resource"
      },
      {
        "@type": "dcat:Distribution",
        "accessURL": "https://www.data.bsee.gov/Pipeline/Files/Pipeline-Locations-Present.pdf",
        "description": "Pipeline-Locations-Present.pdf",
        "title": "Gulf of America Region Pipeline Locations (2000-Present)"
      }
    ],
    "identifier": "http://datainventory.doi.gov/id/dataset/bsee-0000000070",
    "keyword": [
      "BSEE",
      "Segment",
      "asbuilt",
      "gulf of america region",
      "location",
      "pipeline",
      "segment number"
    ],
    "publisher": {
      "@type": "org:Organization",
      "name": "Bureau of Safety and Environmental Enforcement"
    },
    "spatial": "-180.0,-90.0,180.0,90.0",
    "theme": [
      "geospatial"
    ],
    "title": "BSEE Data Center - Gulf of America Region Pipeline Locations (2000-Present)"
  },
  "source_transform": null,
  "status": "error"
}
```

**Error Response Body:**
```json
{
  "error": "Not Found"
}
```

### Notes

- The `record_id` must be a valid UUID4 format
- DateTime fields are returned in ISO 8601 format
- The `source_raw` field is parsed as JSON if possible

---

## Get Harvest Record Raw

Retrieve the raw source payload from a harvest record.

**Endpoint:** `/harvest_record/<record_id>/raw`  
**Method:** `GET`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string (UUID4) | Yes | The harvest record ID |

### Example URL

```
/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8/raw
```

### Response

**Status Code:** `200 OK` or `404 Not Found`

**Content-Type:** 
- `application/json` - if payload is valid JSON
- `application/xml` - if payload is valid XML
- `text/plain` - for all other content

**Success Response Body:**
```json
{
  "accessLevel": "public",
  "bureauCode": [
    "010:22"
  ],
  "contactPoint": {
    "@type": "vcard:Contact",
    "fn": "Bureau of Safety and Environmental Enforcement (BSEE)",
    "hasEmail": "mailto:bseewebmaster@bsee.gov"
  },
  "description": "This data set contains Gulf of America Region Pipeline Locations (2000-Present)",
  "distribution": [
    {
      "@type": "dcat:Distribution",
      "accessURL": "https://www.bsee.gov/",
      "title": "Web Resource"
    },
    {
      "@type": "dcat:Distribution",
      "accessURL": "https://www.data.bsee.gov/Pipeline/Files/Pipeline-Locations-Present.pdf",
      "description": "Pipeline-Locations-Present.pdf",
      "title": "Gulf of America Region Pipeline Locations (2000-Present)"
    }
  ],
  "identifier": "http://datainventory.doi.gov/id/dataset/bsee-0000000070",
  "keyword": [
    "BSEE",
    "Segment",
    "asbuilt",
    "gulf of america region",
    "location",
    "pipeline",
    "segment number"
  ],
  "publisher": {
    "@type": "org:Organization",
    "name": "Bureau of Safety and Environmental Enforcement"
  },
  "spatial": "-180.0,-90.0,180.0,90.0",
  "theme": [
    "geospatial"
  ],
  "title": "BSEE Data Center - Gulf of America Region Pipeline Locations (2000-Present)"
}
```

**Error Response Body:**
```json
{
  "error": "Not Found"
}
```

### Notes

- Returns the raw harvest source payload as stored
- Content-Type is automatically detected based on payload format
- Returns 404 if record doesn't exist or has no source_raw data

---

## Get Harvest Record Transformed

Retrieve the transformed DCAT payload from a harvest record.

**Endpoint:** `/harvest_record/<record_id>/transformed`  
**Method:** `GET`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `record_id` | string (UUID4) | Yes | The harvest record ID |

### Example URL

```
/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8/transformed
```

### Response

**Status Code:** `200 OK` or `404 Not Found`

**Content-Type:** `application/json`

**Success Response Body:**
Example: `/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8/transformed
Response:
```json
{}
```

**Error Response Body:**
```json
{
  "error": "Not Found"
}
```

### Notes

- Returns the transformed source_transform payload
- Always returns JSON format
- Returns 404 if record doesn't exist or has no transformed data

---

## Get Keywords

Retrieve unique keywords from all datasets with their document counts.

**Endpoint:** `/api/keywords`  
**Method:** `GET`

### Query Parameters

| Parameter | Type | Required | Default | Valid Range | Description |
|-----------|------|----------|---------|-------------|-------------|
| `size` | integer | No | 100 | 1-1000 | Maximum number of keywords to return |
| `min_count` | integer | No | 1 | ≥1 | Minimum document count for keywords |

### Example URLs

```
/api/keywords
/api/keywords?size=50
/api/keywords?size=200&min_count=5
/api/keywords?min_count=10
```

### Response

**Status Code:** `200 OK` or `500 Internal Server Error`

**Success Response Body:**
Example:
`/api/keywords?size=3&min_count=1`
Response:
```json
{
  "keywords": [
    {
      "count": 90507,
      "keyword": "County or Equivalent Entity"
    },
    {
      "count": 71154,
      "keyword": "County or equivalent entity"
    },
    {
      "count": 48578,
      "keyword": "State FIPS Code"
    }
  ],
  "min_count": 1,
  "size": 3,
  "total": 3
}
```

**Error Response Body:**
```json
{
  "error": "Failed to fetch keywords",
  "message": "<error details>"
}
```

### Notes

- Keywords are returned sorted by document count (descending)
- The `size` parameter is clamped between 1 and 1000
- The `min_count` parameter must be at least 1
- Used for keyword autocomplete and filtering functionality

---

## Common Response Codes

| Status Code | Description |
|-------------|-------------|
| `200 OK` | Request successful |
| `404 Not Found` | Resource not found or invalid UUID format |
| `500 Internal Server Error` | Server error occurred |

## Error Response Format

All error responses follow this JSON structure:

```json
{
  "error": "Error message description"
}
```

For the `/api/keywords` endpoint specifically:

```json
{
  "error": "Failed to fetch keywords",
  "message": "Detailed error message"
}
```

---

## Notes on Pagination

The `/search` endpoint uses cursor-based pagination with the `after` parameter:

1. First request returns results with an `after` value (if more results exist)
2. Subsequent requests include the `after` value to get the next page
3. The `after` value is an encoded cursor that maintains sort order
4. When no `after` value is returned, there are no more results

---

## Authentication

Currently, these API endpoints do not require authentication.