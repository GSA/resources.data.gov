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

<table class="usa-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>q</code></td>
      <td>string</td>
      <td>No</td>
      <td><code>""</code></td>
      <td>Search query string</td>
    </tr>
    <tr>
      <td><code>per_page</code></td>
      <td>integer</td>
      <td>No</td>
      <td>10</td>
      <td>Number of results per page</td>
    </tr>
    <tr>
      <td><code>results</code></td>
      <td>integer</td>
      <td>No</td>
      <td>0</td>
      <td>Results hint for pagination</td>
    </tr>
    <tr>
      <td><code>from_hint</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Encoded hint for returning to search context</td>
    </tr>
    <tr>
      <td><code>org_id</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Filter by organization ID</td>
    </tr>
    <tr>
      <td><code>org_type</code></td>
      <td>array</td>
      <td>No</td>
      <td>-</td>
      <td>Filter by organization type(s)</td>
    </tr>
    <tr>
      <td><code>keyword</code></td>
      <td>array</td>
      <td>No</td>
      <td>-</td>
      <td>Filter by keyword(s) - exact match</td>
    </tr>
    <tr>
      <td><code>after</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Pagination cursor for next page</td>
    </tr>
    <tr>
      <td><code>spatial_filter</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Filter by spatial data: <code>"geospatial"</code> or <code>"non-geospatial"</code></td>
    </tr>
    <tr>
      <td><code>sort</code></td>
      <td>string</td>
      <td>No</td>
      <td><code>"relevance"</code></td>
      <td>Sort order: <code>"relevance"</code> or <code>"popularity"</code></td>
    </tr>
  </tbody>
</table>

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

<table class="usa-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>record_id</code></td>
      <td>string (UUID4)</td>
      <td>Yes</td>
      <td>The harvest record ID</td>
    </tr>
  </tbody>
</table>

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

<table class="usa-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>record_id</code></td>
      <td>string (UUID4)</td>
      <td>Yes</td>
      <td>The harvest record ID</td>
    </tr>
  </tbody>
</table>

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

<table class="usa-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>record_id</code></td>
      <td>string (UUID4)</td>
      <td>Yes</td>
      <td>The harvest record ID</td>
    </tr>
  </tbody>
</table>

### Example URL

```
/harvest_record/000c4ce7-90c6-405c-8ed7-3ae06c45005c/transformed
```

### Response

**Status Code:** `200 OK` or `404 Not Found`

**Content-Type:** `application/json`

**Success Response Body:**
```json
{
  "@type": "dcat:Dataset",
  "title": "SeaBASS Bio-optical and pigment data collected from 1979-08-22 to 2011-12-14 (NCEI Accession 0086308)",
  "issued": "2016-05-20T00:00:00.000+00:00",
  "rights": "otherRestrictions",
  "keyword": [
    "0086308",
    "ABSORPTION - SCATTERING - ATTENUATION COEFFICIENTS",
    "CHLOROPHYLL",
    "CHLOROPHYLL A",
    "CHLOROPHYLL B",
    "CHLOROPHYLL C",
    "OCEAN \u003E INDIAN OCEAN \u003E BAY OF BENGAL",
    "OCEAN \u003E PACIFIC OCEAN \u003E CENTRAL PACIFIC OCEAN \u003E HAWAIIAN ISLANDS",
    "OCEAN \u003E PACIFIC OCEAN \u003E NORTH PACIFIC OCEAN",
    "OCEAN \u003E PACIFIC OCEAN \u003E NORTH PACIFIC OCEAN \u003E BERING SEA",
    "OCEAN \u003E PACIFIC OCEAN \u003E SOUTH PACIFIC OCEAN",
    "OCEAN \u003E SOUTHERN OCEAN"
  ],
  "license": "https://creativecommons.org/publicdomain/zero/1.0/",
  "spatial": "95.0278,-70.0006,134.096,79.69",
  "language": [],
  "modified": "2016-05-20T00:00:00.000+00:00",
  "temporal": "1979-08-22T00:00:00+00:00/2011-12-14T00:00:00+00:00",
  "publisher": {
    "name": "NOAA National Centers for Environmental Information",
    "@type": "org:Organization"
  },
  "identifier": "gov.noaa.nodc:0086308",
  "references": [
    "http://seabass.gsfc.nasa.gov/",
    "https://doi.org/10.1175/1520-0426(2003)20\u003C563:anmftm\u003E2.0.co;2",
    "https://doi.org/10.1016/j.rse.2007.06.015",
    "http://seabass.gsfc.nasa.gov/archive/NURC/sortie1/documents/SORTIE1_2007_Data_Report_WET-DN-00509.pdf",
    "http://seabass.gsfc.nasa.gov/archive/NURC/sortie2/documents/SORTIE2_2008_Data_Report_WET-DN-00519.pdf",
    "https://doi.org/10.1080/01431160310001618086"
  ],
  "accessLevel": "non-public",
  "description": "This dataset contains SeaWiFS Bio-optical Archive and Storage System (SeaBASS) bio-optical, pigment, and other data collected from 1979-08-22 to 2011-12-14. Archived data include measurements of apparent and inherent optical properties, phytoplankton pigment concentrations, and other related oceanographic and atmospheric data, such as water temperature, salinity, stimulated fluorescence, and aerosol optical thickness. Data were collected using a number of different instrument packages, such as profilers, buoys, and hand-held instruments, and manufacturers on a variety of platforms, including ships and moorings.",
  "landingPage": "https://www.ncei.noaa.gov/contact",
  "contactPoint": {
    "fn": "NOAA National Centers for Environmental Information",
    "@type": "vcard:Contact",
    "hasEmail": "mailto:ncei.info@noaa.gov"
  },
  "distribution": [
    {
      "@type": "dcat:Distribution",
      "title": "GCMD Keyword Forum Page",
      "mediaType": "placeholder/value",
      "description": "Global Change Master Directory (GCMD). 2025. GCMD Keywords, Version 21. Greenbelt, MD: Earth Science Data and Information System, Earth Science Projects Division, Goddard Space Flight Center (GSFC), National Aeronautics and Space Administration (NASA). URL (GCMD Keyword Forum Page): https://forum.earthdata.nasa.gov/app.php/tag/GCMD+Keywords",
      "downloadURL": "https://forum.earthdata.nasa.gov/app.php/tag/GCMD%2BKeywords",
      "describedByType": "application/octet-steam"
    },
    {
      "@type": "dcat:Distribution",
      "title": "NCEI Contact Information",
      "mediaType": "placeholder/value",
      "description": "Information for contacts at NCEI.",
      "downloadURL": "https://www.ncei.noaa.gov/contact",
      "describedByType": "application/octet-steam"
    }
  ],
  "describedByType": "application/octet-steam"
}
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

<table class="usa-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
      <th>Valid Range</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>size</code></td>
      <td>integer</td>
      <td>No</td>
      <td>100</td>
      <td>1-1000</td>
      <td>Maximum number of keywords to return</td>
    </tr>
    <tr>
      <td><code>min_count</code></td>
      <td>integer</td>
      <td>No</td>
      <td>1</td>
      <td>≥1</td>
      <td>Minimum document count for keywords</td>
    </tr>
  </tbody>
</table>

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

<table class="usa-table">
  <thead>
    <tr>
      <th>Status Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200 OK</td>
      <td>Request successful</td>
    </tr>
    <tr>
      <td>404 Not Found</td>
      <td>Resource not found or invalid UUID format</td>
    </tr>
    <tr>
      <td>500 Internal Server Error</td>
      <td>Server error occurred</td>
    </tr>
  </tbody>
</table>

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