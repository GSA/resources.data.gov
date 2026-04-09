---
title: Catalog API
layout: page
---

The Data.gov Catalog API provides access to metadata about datasets published by federal, state, local, and tribal governments. You can use it to search for datasets, filter by organization or topic, and retrieve detailed information about individual records.

**4/9/2026: Note on upcoming changes:** The base URL for the data.gov APIs will change when Data.gov routes its APIs through api.data.gov.  This is expected to occur soon.  If you're building a new integration, avoid hard-coding the base URL and check this page for updates before going to production.  Email us with any questions at datagovhelp@gsa.gov

**Base URL:** `https://catalog.data.gov`

No API key is required. All endpoints are publicly accessible and return JSON.

Note: This API replaces the previous CKAN-based API. The prior endpoint remains available in a read-only state for existing integrations, but new development should use this API.

---

## Getting Started

Here is a complete working example that walks through finding NASA climate datasets step by step.

### Step 1: Find the organization slug for NASA

To filter results by organization, you first need the organization's slug. Fetch the full list of organizations and find the one you want.

**Request:**
```
GET https://catalog.data.gov/api/organizations
```

**Look for NASA in the response:**
```json
{
  "organizations": [
    {
      "id": "f4ca4614-8901-409b-8553-2e994ad10023",
      "name": "National Aeronautics and Space Administration",
      "slug": "nasa",
      "organization_type": "Federal Government",
      "dataset_count": 27040
    }
  ]
}
```

The slug is `nasa`. You will use this to filter search results.

### Step 2: Search for climate datasets from NASA

Use the `q` parameter for your keyword and `org_slug` to filter by organization.

**Request:**
```
GET https://catalog.data.gov/search?q=climate&org_slug=nasa&per_page=3
```

**Response:**
```json
{
  "sort": "relevance",
  "after": "WzY5LjM0NDY5NiwwLCJiYmRhZGNmYi00NDM1LTQzZWUtYjhlMy0yMzZiZjBlZDEwODIiXQ==",
  "results": [
    {
      "title": "Amazon Web Services: Downscaled Climate Projections (NEX-DCP30)",
      "publisher": "AWS NEX",
      "accessLevel": "public",
      "keyword": ["amazon-web-services", "aws", "climate", "earth-science"],
      "last_harvested_date": "2025-08-04T13:35:12.398986",
      "landingPage": "https://aws.amazon.com/nasa/nex/"
    },
    {
      "title": "Mirador - Climate Variability and Change",
      "publisher": "National Aeronautics and Space Administration",
      "accessLevel": "public",
      "keyword": ["aerosols", "atmospheric-height", "atmospheric-radiation"],
      "last_harvested_date": "2025-08-03T15:49:47.819080"
    }
  ]
}
```

The response includes an `after` value, which means there are more results available.

### Step 3: Get the next page

Pass the `after` value from the previous response to retrieve the next page. Keep all other parameters the same.

**Request:**
```
GET https://catalog.data.gov/search?q=climate&org_slug=nasa&per_page=3&after=WzY5LjM0NDY5NiwwLCJiYmRhZGNmYi00NDM1LTQzZWUtYjhlMy0yMzZiZjBlZDEwODIiXQ==
```

Continue repeating this step until the response no longer includes an `after` field, which means you have reached the last page. For more details see [Pagination](#pagination) below.

---

## Table of Contents

1. [Search Datasets](#search-datasets)
2. [Get Keywords](#get-keywords)
3. [Search Locations](#search-locations)
4. [Get Location Geometry](#get-location-geometry)
5. [Get Organizations](#get-organizations)
6. [Get Harvest Record](#get-harvest-record)
7. [Get Harvest Record Raw](#get-harvest-record-raw)
8. [Get Harvest Record Transformed](#get-harvest-record-transformed)
9. [Pagination](#pagination)
10. [Response Codes and Errors](#response-codes-and-errors)

---

## Search Datasets

Search the catalog for datasets using keywords, filters, and sorting options.

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
      <td>Full-text search query</td>
    </tr>
        <tr>
      <td><code>sort</code></td>
      <td>string</td>
      <td>No</td>
      <td><code>relevance</code></td>
      <td>Sort order: <code>relevance</code>, <code>popularity</code>, <code>distance</code>, or <code>last_harvested_date</code></td>
    </tr>
    <tr>
      <td><code>per_page</code></td>
      <td>integer</td>
      <td>No</td>
      <td>10</td>
      <td>Number of results to return per page (minimum: 1)</td>
    </tr>
    <tr>
      <td><code>org_slug</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Filter by organization slug (e.g., <code>nasa</code>). Use the <a href="#get-organizations">Get Organizations</a> endpoint to find valid slugs.</td>
    </tr>
    <tr>
      <td><code>org_type</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Filter by organization type. Valid values: <code>Federal Government</code>, <code>City Government</code>, <code>State Government</code>, <code>County Government</code>, <code>University</code>, <code>Tribal</code>, <code>Non-Profit</code></td>
    </tr>
    <tr>
      <td><code>keyword</code></td>
      <td>array</td>
      <td>No</td>
      <td>-</td>
      <td>Filter by one or more keywords (exact match). Repeat the parameter for multiple values.</td>
    </tr>
    <tr>
      <td><code>spatial_filter</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Limit results to datasets with or without spatial data: <code>geospatial</code> or <code>non-geospatial</code></td>
    </tr>
    <tr>
      <td><code>spatial_geometry</code></td>
      <td>string (GeoJSON)</td>
      <td>No</td>
      <td>-</td>
      <td>A GeoJSON geometry object defining a geographic shape to filter by. Use with <code>spatial_within</code> to control how datasets are matched against the shape.</td>
    </tr>
    <tr>
      <td><code>spatial_within</code></td>
      <td>boolean</td>
      <td>No</td>
      <td>false</td>
      <td>Controls how datasets are matched against <code>spatial_geometry</code>. When <code>false</code> (default), returns datasets whose spatial extent <em>intersects</em> the shape. When <code>true</code>, returns only datasets whose spatial extent falls <em>completely within</em> the shape.</td>
    </tr>    
    <tr>
      <td><code>after</code></td>
      <td>string</td>
      <td>No</td>
      <td>-</td>
      <td>Pagination cursor returned from a previous response. See <a href="#pagination">Pagination</a>.</td>
    </tr>
  </tbody>
</table>

### Example Requests

```
GET https://catalog.data.gov/search?q=water+quality
GET https://catalog.data.gov/search?q=climate&sort=popularity&per_page=25
GET https://catalog.data.gov/search?org_slug=nasa&per_page=10
GET https://catalog.data.gov/search?org_type=Federal+Government&spatial_filter=geospatial
GET https://catalog.data.gov/search?q=education&after=WzEwMC4wNjEzNiwwLCJiMWEzOTY3YzJhMTExZjE2NzgxN2IwMTI0YzUyYjBhYyJd
GET https://catalog.data.gov/search?spatial_geometry={"type":"Polygon","coordinates":[[[-109.05,37.0],[-102.05,37.0],[-102.05,41.0],[-109.05,41.0],[-109.05,37.0]]]}&spatial_within=true

```

### Response

**Status Code:** `200 OK`

```json
{
  "after": "WzEwMC4wNjEzNiwwLCJiMWEzOTY3YzJhMTExZjE2NzgxN2IwMTI0YzUyYjBhYyJd",
  "sort": "relevance",
  "results": [
    {
      "title": "National Household Education Surveys Program, 2012 Parent and Family Involvement in Education Survey",
      "description": "A cross-sectional survey collecting data from households on educational issues...",
      "identifier": "bdf82c61-0027-4d50-9505-44fc57f2fd12",
      "slug": "national-household-education-surveys-program-2012-parent-and-family-involvement-in-educati",
      "publisher": "National Center for Education Statistics (NCES)",
      "keyword": ["education", "homeschooling", "households", "parental-involvement-in-education"],
      "has_spatial": true,
      "popularity": 2,
      "last_harvested_date": "2025-08-02T21:17:47.154806",
      "distribution_titles": [
        "National Household Education Surveys Program (NHES):2012 Restricted-Use Data Files",
        "2012PFIascii.zip"
      ],
      "theme": [],
      "spatial_centroid": null,
      "spatial_shape": null,
      "organization": {
        "id": "217e855b-cd64-4ebc-958b-abbbb0f57ac2",
        "name": "Department of Education",
        "slug": "ed",
        "organization_type": "Federal Government",
        "logo": "https://raw.githubusercontent.com/GSA/logo/refs/heads/master/ed.png",
        "aliases": ["dept"],
        "description": null
      },
      "dcat": {
        "@type": "dcat:Dataset",
        "title": "National Household Education Surveys Program, 2012...",
        "description": "...",
        "accessLevel": "restricted public",
        "accrualPeriodicity": "irregular",
        "bureauCode": ["018:50"],
        "contactPoint": {
          "@type": "vcard:Contact",
          "fn": "Sarah Grady",
          "hasEmail": "mailto:sarah.grady@ed.gov"
        },
        "dataQuality": true,
        "distribution": ["..."],
        "identifier": "bdf82c61-0027-4d50-9505-44fc57f2fd12",
        "issued": "2014-05-21",
        "keyword": ["education", "homeschooling"],
        "language": ["en-US"],
        "license": "https://creativecommons.org/publicdomain/zero/1.0/",
        "modified": "2023-06-22T20:25:39.652070",
        "programCode": ["018:000"],
        "publisher": {
          "@type": "org:Organization",
          "name": "National Center for Education Statistics (NCES)"
        },
        "rights": "This dataset has restricted access.",
        "spatial": "United States",
        "systemOfRecords": "https://www2.ed.gov/notices/pai/pai-18-13-01.pdf",
        "temporal": "2012/2012"
      },
      "harvest_record": "https://catalog.data.gov/harvest_record/0be6d0c0-8383-4966-acd1-38b0d7baea3c",
      "harvest_record_raw": "https://catalog.data.gov/harvest_record/0be6d0c0-8383-4966-acd1-38b0d7baea3c/raw"
    }
  ]
}
```

### Response Fields

<table class="usa-table">
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>results</code></td>
      <td>array</td>
      <td>List of matching datasets</td>
    </tr>
    <tr>
      <td><code>sort</code></td>
      <td>string</td>
      <td>The sort order applied to this response</td>
    </tr>
    <tr>
      <td><code>after</code></td>
      <td>string</td>
      <td>Cursor for retrieving the next page of results. Absent if there are no more results.</td>
    </tr>
    <tr>
      <td><code>results[].title</code></td>
      <td>string</td>
      <td>Dataset title</td>
    </tr>
    <tr>
      <td><code>results[].description</code></td>
      <td>string</td>
      <td>Dataset description</td>
    </tr>
    <tr>
      <td><code>results[].identifier</code></td>
      <td>string (UUID)</td>
      <td>Unique dataset identifier</td>
    </tr>
    <tr>
      <td><code>results[].slug</code></td>
      <td>string</td>
      <td>URL-friendly identifier for the dataset</td>
    </tr>
    <tr>
      <td><code>results[].publisher</code></td>
      <td>string</td>
      <td>Name of the publishing organization</td>
    </tr>
    <tr>
      <td><code>results[].keyword</code></td>
      <td>array</td>
      <td>List of keywords associated with the dataset</td>
    </tr>
    <tr>
      <td><code>results[].theme</code></td>
      <td>array</td>
      <td>List of themes associated with the dataset</td>
    </tr>
    <tr>
      <td><code>results[].has_spatial</code></td>
      <td>boolean</td>
      <td>Whether the dataset has a spatial component</td>
    </tr>
    <tr>
      <td><code>results[].spatial_centroid</code></td>
      <td>object or null</td>
      <td>Geographic center point of the dataset's spatial coverage, if available</td>
    </tr>
    <tr>
      <td><code>results[].spatial_shape</code></td>
      <td>object or null</td>
      <td>GeoJSON shape representing the dataset's spatial coverage, if available</td>
    </tr>
    <tr>
      <td><code>results[].popularity</code></td>
      <td>integer</td>
      <td>Relative popularity score for the dataset</td>
    </tr>
    <tr>
      <td><code>results[].last_harvested_date</code></td>
      <td>string (ISO 8601)</td>
      <td>Date and time the dataset was last ingested into the catalog</td>
    </tr>
    <tr>
      <td><code>results[].distribution_titles</code></td>
      <td>array</td>
      <td>Titles of the dataset's available distributions (downloads, APIs, etc.)</td>
    </tr>
    <tr>
      <td><code>results[].organization</code></td>
      <td>object</td>
      <td>Information about the publishing organization. See <a href="#get-organizations">Get Organizations</a> for field definitions.</td>
    </tr>
    <tr>
      <td><code>results[].dcat</code></td>
      <td>object</td>
      <td>Full DCAT-US metadata for the dataset. See <a href="#dcat-object-fields">DCAT Object Fields</a> below.</td>
    </tr>
    <tr>
      <td><code>results[].harvest_record</code></td>
      <td>string (URL)</td>
      <td>Link to the harvest record for this dataset, if available</td>
    </tr>
    <tr>
      <td><code>results[].harvest_record_raw</code></td>
      <td>string (URL)</td>
      <td>Link to the raw source payload for this dataset's harvest record, if available</td>
    </tr>
  </tbody>
</table>

### DCAT Object Fields

The `dcat` object contains the full DCAT-US metadata as submitted by the publishing organization. Not all fields are present for every dataset. Fields marked as **always present** appear in virtually every result; others are optional and vary by publisher.

<table class="usa-table">
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Always Present</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@type</code></td>
      <td>string</td>
      <td>No</td>
      <td>Always <code>dcat:Dataset</code> when present</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>string</td>
      <td>Yes</td>
      <td>Dataset title</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>string</td>
      <td>Yes</td>
      <td>Full dataset description</td>
    </tr>
    <tr>
      <td><code>identifier</code></td>
      <td>string</td>
      <td>Yes</td>
      <td>Unique dataset identifier as assigned by the source system</td>
    </tr>
    <tr>
      <td><code>accessLevel</code></td>
      <td>string</td>
      <td>Yes</td>
      <td>One of: <code>public</code>, <code>restricted public</code>, or <code>non-public</code></td>
    </tr>
    <tr>
      <td><code>modified</code></td>
      <td>string</td>
      <td>Yes</td>
      <td>Date the dataset was last modified (ISO 8601)</td>
    </tr>
    <tr>
      <td><code>publisher</code></td>
      <td>object</td>
      <td>Yes</td>
      <td>Publishing organization. Contains <code>@type</code> (<code>org:Organization</code>) and <code>name</code></td>
    </tr>
    <tr>
      <td><code>contactPoint</code></td>
      <td>object</td>
      <td>Yes</td>
      <td>Contact information. Contains <code>@type</code> (<code>vcard:Contact</code>), <code>fn</code> (name), and <code>hasEmail</code></td>
    </tr>
    <tr>
      <td><code>keyword</code></td>
      <td>array</td>
      <td>Yes</td>
      <td>List of keywords describing the dataset</td>
    </tr>
    <tr>
      <td><code>distribution</code></td>
      <td>array</td>
      <td>No</td>
      <td>Available downloads and access methods, each following the <code>dcat:Distribution</code> structure</td>
    </tr>
    <tr>
      <td><code>landingPage</code></td>
      <td>string (URL)</td>
      <td>No</td>
      <td>URL of the dataset's home page</td>
    </tr>
    <tr>
      <td><code>license</code></td>
      <td>string (URL)</td>
      <td>No</td>
      <td>URL of the license under which the dataset is published</td>
    </tr>
    <tr>
      <td><code>bureauCode</code></td>
      <td>array</td>
      <td>No</td>
      <td>Federal bureau code(s) in <code>DDD:XX</code> format. Present on federal datasets.</td>
    </tr>
    <tr>
      <td><code>programCode</code></td>
      <td>array</td>
      <td>No</td>
      <td>Federal program code(s). Present on federal datasets.</td>
    </tr>
    <tr>
      <td><code>issued</code></td>
      <td>string</td>
      <td>No</td>
      <td>Date the dataset was first published (ISO 8601)</td>
    </tr>
    <tr>
      <td><code>theme</code></td>
      <td>array</td>
      <td>No</td>
      <td>Thematic categories for the dataset (e.g., <code>Transportation</code>, <code>Health</code>)</td>
    </tr>
    <tr>
      <td><code>spatial</code></td>
      <td>string</td>
      <td>No</td>
      <td>Geographic coverage of the dataset (e.g., <code>United States</code> or a bounding box)</td>
    </tr>
    <tr>
      <td><code>temporal</code></td>
      <td>string</td>
      <td>No</td>
      <td>Time period covered by the dataset (e.g., <code>2018-01-01/2018-09-28</code>)</td>
    </tr>
    <tr>
      <td><code>accrualPeriodicity</code></td>
      <td>string</td>
      <td>No</td>
      <td>How frequently the dataset is updated, using ISO 8601 duration format (e.g., <code>R/P1Y</code> for annual, <code>R/P1D</code> for daily)</td>
    </tr>
    <tr>
      <td><code>language</code></td>
      <td>array</td>
      <td>No</td>
      <td>Language(s) the dataset is available in (e.g., <code>en-US</code>)</td>
    </tr>
    <tr>
      <td><code>rights</code></td>
      <td>string</td>
      <td>No</td>
      <td>Description of any access restrictions or rights statement</td>
    </tr>
    <tr>
      <td><code>describedBy</code></td>
      <td>string (URL)</td>
      <td>No</td>
      <td>URL of a data dictionary or schema describing the dataset</td>
    </tr>
    <tr>
      <td><code>describedByType</code></td>
      <td>string</td>
      <td>No</td>
      <td>MIME type of the resource at <code>describedBy</code> (e.g., <code>application/pdf</code>)</td>
    </tr>
    <tr>
      <td><code>references</code></td>
      <td>array</td>
      <td>No</td>
      <td>URLs of related documents or resources</td>
    </tr>
    <tr>
      <td><code>isPartOf</code></td>
      <td>string</td>
      <td>No</td>
      <td>Identifier of a parent dataset that this dataset belongs to</td>
    </tr>
    <tr>
      <td><code>dataQuality</code></td>
      <td>boolean</td>
      <td>No</td>
      <td>Whether the dataset meets the publisher's data quality guidelines</td>
    </tr>
    <tr>
      <td><code>conformsTo</code></td>
      <td>string (URL)</td>
      <td>No</td>
      <td>URL of a standard or specification the dataset conforms to</td>
    </tr>
    <tr>
      <td><code>primaryITInvestmentUII</code></td>
      <td>string</td>
      <td>No</td>
      <td>Federal IT investment identifier in <code>DDD-XXXXXXXXX</code> format</td>
    </tr>
    <tr>
      <td><code>systemOfRecords</code></td>
      <td>string (URL)</td>
      <td>No</td>
      <td>URL of the Privacy Act System of Records Notice, if applicable</td>
    </tr>
    <tr>
      <td><code>phone</code></td>
      <td>string</td>
      <td>No</td>
      <td>Contact phone number for the dataset</td>
    </tr>
  </tbody>
</table>

---

## Get Keywords

Retrieve a list of the most commonly used keywords across all datasets, along with how many datasets use each one.

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
      <td>Only return keywords used by at least this many datasets</td>
    </tr>
  </tbody>
</table>

### Example Requests

```
GET https://catalog.data.gov/api/keywords
GET https://catalog.data.gov/api/keywords?size=50&min_count=100
```

### Response

**Status Code:** `200 OK`

```json
{
  "keywords": [
    { "keyword": "County or Equivalent Entity", "count": 90507 },
    { "keyword": "State FIPS Code", "count": 48578 }
  ],
  "size": 2,
  "min_count": 1,
  "total": 2
}
```

Keywords are sorted by count, highest first.

---

## Search Locations

Search for location names to use with spatial filtering. This endpoint is designed for autocomplete — pass a partial place name and receive matching location IDs.

**Endpoint:** `/api/locations/search`
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
      <td>-</td>
      <td>Partial or full location name to search for</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>integer</td>
      <td>No</td>
      <td>-</td>
      <td>Maximum number of results to return</td>
    </tr>
  </tbody>
</table>

### Example Request

```
GET https://catalog.data.gov/api/locations/search?q=Colorado&size=5
```

### Response

**Status Code:** `200 OK`

```json
{
  "locations": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "display_name": "Colorado, United States"
    }
  ],
  "size": 1,
  "total": 1
}
```

Use the `id` value from this response with the [Get Location Geometry](#get-location-geometry) endpoint.

---

## Get Location Geometry

Retrieve the geographic boundary (GeoJSON geometry) for a specific location by its ID.

**Endpoint:** `/api/location/{location_id}`
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
      <td><code>location_id</code></td>
      <td>string (UUID)</td>
      <td>Yes</td>
      <td>The location ID returned from <code>/api/locations/search</code></td>
    </tr>
  </tbody>
</table>

### Example Request

```
GET https://catalog.data.gov/api/location/a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

### Response

**Status Code:** `200 OK` or `404 Not Found`

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "geometry": {
    "type": "Polygon",
    "coordinates": [[[...]]]
  }
}
```

---

## Get Organizations

Retrieve the complete list of organizations that publish datasets in the catalog.

**Endpoint:** `/api/organizations`
**Method:** `GET`

No query parameters. Returns all organizations.

### Example Request

```
GET https://catalog.data.gov/api/organizations
```

### Response

**Status Code:** `200 OK`

```json
{
  "organizations": [
    {
      "id": "f4ca4614-8901-409b-8553-2e994ad10023",
      "name": "National Aeronautics and Space Administration",
      "slug": "nasa",
      "organization_type": "Federal Government",
      "aliases": [""],
      "dataset_count": 27040
    }
  ],
  "total": 312
}
```

### Response Fields

<table class="usa-table">
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>string (UUID)</td>
      <td>Unique organization identifier</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>string</td>
      <td>Organization display name</td>
    </tr>
    <tr>
      <td><code>slug</code></td>
      <td>string</td>
      <td>URL-friendly identifier, usable as <code>org_slug</code> in search</td>
    </tr>
    <tr>
      <td><code>organization_type</code></td>
      <td>string</td>
      <td>Type of organization: <code>Federal Government</code>, <code>State Government</code>, <code>City Government</code>, <code>County Government</code>, <code>University</code>, <code>Tribal</code>, or <code>Non-Profit</code></td>
    </tr>
    <tr>
      <td><code>aliases</code></td>
      <td>array</td>
      <td>Alternative names or abbreviations for the organization</td>
    </tr>
    <tr>
      <td><code>dataset_count</code></td>
      <td>integer</td>
      <td>Number of datasets published by this organization</td>
    </tr>
  </tbody>
</table>

---

## Get Harvest Record

Retrieve metadata about a specific harvest record by its ID. Harvest records track how individual datasets were ingested into the catalog.

**Endpoint:** `/harvest_record/{record_id}`
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
      <td>string (UUID)</td>
      <td>Yes</td>
      <td>The harvest record ID</td>
    </tr>
  </tbody>
</table>

### Example Request

```
GET https://catalog.data.gov/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8
```

### Response

**Status Code:** `200 OK` or `404 Not Found`

```json
{
  "id": "d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8",
  "identifier": "http://datainventory.doi.gov/id/dataset/bsee-0000000070",
  "status": "error",
  "action": "create",
  "date_created": "2025-11-26T07:46:13.673655",
  "date_finished": null,
  "harvest_job_id": "de2010f9-d9ec-4211-9690-5b3bbc9fe1f3",
  "harvest_source_id": "14348973-07a5-4661-8341-02230f2f6cbb",
  "source_hash": "47ca2dd5471e659e4cd1c83d79adb0b0c2c8c013a1e03d629d56b0541e307267",
  "source_raw": { },
  "source_transform": null,
  "ckan_id": null,
  "ckan_name": null,
  "parent_identifier": null
}
```

### Notes

- `record_id` must be a valid UUID format
- Date fields are returned in ISO 8601 format
- `source_raw` is parsed as JSON when possible

**Error Response:**

```json
{ "error": "Not Found" }
```

---

## Get Harvest Record Raw

Retrieve the original, unmodified source payload from a harvest record exactly as it was received.

**Endpoint:** `/harvest_record/{record_id}/raw`
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
      <td>string (UUID)</td>
      <td>Yes</td>
      <td>The harvest record ID</td>
    </tr>
  </tbody>
</table>

### Example Request

```
GET https://catalog.data.gov/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8/raw
```

### Response

**Status Code:** `200 OK` or `404 Not Found`

The `Content-Type` of the response is detected automatically based on the payload:

- `application/json` for JSON payloads
- `application/xml` for XML payloads
- `text/plain` for all other content

Returns `404` if the record does not exist or has no raw source data.

---

## Get Harvest Record Transformed

Retrieve the transformed DCAT-US payload for a harvest record. This is the version of the metadata after any source-specific transformations have been applied.

**Endpoint:** `/harvest_record/{record_id}/transformed`
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
      <td>string (UUID)</td>
      <td>Yes</td>
      <td>The harvest record ID</td>
    </tr>
  </tbody>
</table>

### Example Request

```
GET https://catalog.data.gov/harvest_record/000c4ce7-90c6-405c-8ed7-3ae06c45005c/transformed
```

### Response

**Status Code:** `200 OK` or `404 Not Found`
**Content-Type:** `application/json`

Returns `404` if the record does not exist or has no transformed data.

---

## Pagination

The `/search` endpoint uses cursor-based pagination. This approach is more reliable than page-number pagination for large result sets because it maintains consistent ordering even as the catalog changes.

**How it works:**

1. Make a request to `/search`. If more results exist beyond what was returned, the response will include an `after` field.
2. To get the next page, add `after=<value>` to your next request using the value from the previous response.
3. Continue until the response no longer includes an `after` field, which means you have reached the last page.

**Example:**

```
# First request
GET https://catalog.data.gov/search?q=water&per_page=10

# Response includes: "after": "WzEwMC4wNjEzNiwwLCJiMWEz..."

# Second request
GET https://catalog.data.gov/search?q=water&per_page=10&after=WzEwMC4wNjEzNiwwLCJiMWEz...
```

Keep all other parameters the same across pages. Changing `q`, `sort`, or filter parameters while paginating will return inconsistent results.

---

## Response Codes and Errors

<table class="usa-table">
  <thead>
    <tr>
      <th>Status Code</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200 OK</td>
      <td>Request was successful</td>
    </tr>
    <tr>
      <td>404 Not Found</td>
      <td>The requested resource does not exist, or the ID provided is not valid</td>
    </tr>
    <tr>
      <td>422 Unprocessable Entity</td>
      <td>The request was understood but contains invalid parameter values</td>
    </tr>
    <tr>
      <td>500 Internal Server Error</td>
      <td>An unexpected error occurred on the server</td>
    </tr>
  </tbody>
</table>

All error responses use this JSON format:

```json
{
  "error": "A description of what went wrong"
}
```

For validation errors (422), additional detail is provided:

```json
{
  "message": "Validation error",
  "detail": {
    "<location>": {
      "<field_name>": ["error message"]
    }
  }
}
```
