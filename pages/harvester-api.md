---
title: Harvester API
layout: page
---

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Note on upcoming changes</h4>
    <p class="usa-alert__text">
      The base URL for the data.gov APIs will change when Data.gov routes its APIs through api.data.gov.  This is expected to occur soon.  If you're building a new integration, avoid hard-coding the base URL and check this page for updates before going to production.  Email us with any questions at <a href="mailto:datagovhelp@gsa.gov">datagovhelp@gsa.gov</a>.
    </p>
  </div>
</div>

The Harvester API provides programmatic access to Data.gov's harvest infrastructure — the system that collects dataset metadata from federal agencies and other publishers. Use this API to look up harvest sources, check job status, and investigate harvest errors.

**Base URL:** `https://harvest.data.gov/`

**Authentication:** [Sign up for an API key at api.data.gov](https://api.data.gov/signup). Documentation related to authenticaion and rate limits is available in [api.data.gov's developer manual](https://api.data.gov/docs/developer-manual/).

**Full OpenAPI Specification:** For complete technical details, including POST/PUT/DELETE operations, see the [interactive OpenAPI documentation](https://harvest.data.gov/openapi/docs).

---

## Quick Start

Get a list of all registered harvest sources:

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_sources/
```

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | [/harvest_sources/](#list-harvest-sources) | List all harvest sources |
| GET | [/harvest_source/{source_id}](#get-harvest-source) | Get a specific harvest source |
| GET | [/harvest_source/{source_id}/jobs](#list-jobs-for-source) | List harvest jobs for a source |
| GET | [/organization/](#list-organizations) | List all organizations |
| GET | [/organization/{org_id}](#get-organization) | Get a specific organization |
| GET | [/harvest_job/{job_id}](#get-harvest-job) | Get a specific harvest job |
| GET | [/harvest_job/{job_id}/errors](#get-job-errors) | Get errors for a harvest job |
| GET | [/harvest_record/{record_id}](#get-harvest-record) | Get a specific harvest record |
| GET | [/harvest_record/{record_id}/raw](#get-harvest-record-raw) | Get raw source payload for a record |
| GET | [/harvest_record/{record_id}/transformed](#get-harvest-record-transformed) | Get transformed payload for a record |
| POST | [/validate](#validate-catalog) | Validate a DCAT-US catalog |

---

## Harvest Sources

### List Harvest Sources

Returns all registered harvest sources.

**Endpoint:** `GET /harvest_sources/`

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_sources/
```

**Example Response:**

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Example Agency Data.json",
    "url": "https://example.gov/data.json",
    "organization_id": "7a85f64-5717-4562-b3fc-2c963f66afa6",
    "frequency": "daily",
    "schema_type": "dcatus1.1: federal",
    "source_type": "document",
    "notification_emails": ["data@example.gov"],
    "notification_frequency": "on_error"
  }
]
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| id | string (UUID) | Unique identifier for the harvest source |
| name | string | Display name for the source |
| url | string | URL of the data.json or other harvestable resource |
| organization_id | string (UUID) | ID of the publishing organization |
| frequency | string | How often the source is harvested: `daily`, `weekly`, `biweekly`, or `monthly`. Note: `manual` exists in the system but by policy all sources must be harvested at least monthly. |
| schema_type | string | Metadata schema: `dcatus1.1: federal`, `dcatus1.1: non-federal`, `iso19115_1`, or `iso19115_2` |
| source_type | string | Type of source: `document`, `waf`, or `waf-collection` |
| notification_emails | array | Email addresses notified of harvest results |
| notification_frequency | string | When to send notifications: `on_error`, `always`, or `on_error_or_update` |

---

### Get Harvest Source

Retrieve details for a specific harvest source.

**Endpoint:** `GET /harvest_source/{source_id}`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| source_id | string (UUID) | Yes | The harvest source ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_source/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

**Response:** Same structure as individual items in [List Harvest Sources](#list-harvest-sources).

---

### List Jobs for Source

Retrieve all harvest jobs for a specific source.

**Endpoint:** `GET /harvest_source/{source_id}/jobs`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| source_id | string (UUID) | Yes | The harvest source ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_source/3fa85f64-5717-4562-b3fc-2c963f66afa6/jobs
```

**Example Response:**

```json
[
  {
    "id": "de2010f9-d9ec-4211-9690-5b3bbc9fe1f3",
    "harvest_source_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "status": "complete",
    "date_created": "2026-04-29T06:00:00.000Z",
    "date_finished": "2026-04-29T06:05:23.000Z",
    "records_added": 42,
    "records_updated": 156,
    "records_deleted": 3,
    "records_errored": 2
  }
]
```

---

## Organizations

### List Organizations

Returns all organizations with registered harvest sources.

**Endpoint:** `GET /organizations/`

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/organizations/
```

**Example Response:**

```json
[
  {
    "id": "f4ca4614-8901-409b-8553-2e994ad10023",
    "name": "National Aeronautics and Space Administration",
    "slug": "nasa",
    "organization_type": "Federal Government",
    "aliases": ["NASA"],
    "logo": "https://example.gov/nasa-logo.png",
    "description": "NASA's open data portal.",
    "source_count": 5
  }
]
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| id | string (UUID) | Unique organization identifier |
| name | string | Organization display name |
| slug | string | URL-friendly identifier |
| organization_type | string | Type: `Federal Government`, `State Government`, `City Government`, `County Government`, `University`, `Tribal`, or `Non-Profit` |
| aliases | array | Alternative names or abbreviations |
| logo | string | URL to organization logo |
| description | string | Organization description |
| source_count | integer | Number of harvest sources for this organization |

---

### Get Organization

Retrieve details for a specific organization.

**Endpoint:** `GET /organization/{org_id}`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| org_id | string (UUID) | Yes | The organization ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/organization/f4ca4614-8901-409b-8553-2e994ad10023
```

---

## Harvest Jobs

### Get Harvest Job

Retrieve details for a specific harvest job.

**Endpoint:** `GET /harvest_job/{job_id}`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string (UUID) | Yes | The harvest job ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_job/de2010f9-d9ec-4211-9690-5b3bbc9fe1f3
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| id | string (UUID) | Unique job identifier |
| harvest_source_id | string (UUID) | The source this job harvested |
| status | string | Job status: `new`, `in_progress`, `complete`, or `error` |
| date_created | string (ISO 8601) | When the job was created |
| date_finished | string (ISO 8601) | When the job completed (null if still running) |
| records_added | integer | Number of new records created |
| records_updated | integer | Number of existing records updated |
| records_deleted | integer | Number of records removed |
| records_errored | integer | Number of records that failed processing |

---

### Get Job Errors

Retrieve errors from a specific harvest job.

**Endpoint:** `GET /harvest_job/{job_id}/errors`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| job_id | string (UUID) | Yes | The harvest job ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_job/de2010f9-d9ec-4211-9690-5b3bbc9fe1f3/errors
```

**Example Response:**

```json
[
  {
    "id": "8b2e4f71-3c9a-4b5d-9e8f-1a2b3c4d5e6f",
    "harvest_job_id": "de2010f9-d9ec-4211-9690-5b3bbc9fe1f3",
    "harvest_record_id": "d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8",
    "date_created": "2026-04-29T06:03:12.000Z",
    "type": "validation_error",
    "message": "Missing required field: title"
  }
]
```

---

## Harvest Records

### Get Harvest Record

Retrieve metadata about a specific harvest record. Harvest records track how individual datasets were ingested into the catalog.

**Endpoint:** `GET /harvest_record/{record_id}`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| record_id | string (UUID) | Yes | The harvest record ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8
```

**Example Response:**

```json
{
  "id": "d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8",
  "identifier": "http://datainventory.doi.gov/id/dataset/bsee-0000000070",
  "status": "success",
  "action": "update",
  "date_created": "2026-04-29T06:02:45.000Z",
  "date_finished": "2026-04-29T06:02:47.000Z",
  "harvest_job_id": "de2010f9-d9ec-4211-9690-5b3bbc9fe1f3",
  "harvest_source_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "source_hash": "47ca2dd5471e659e4cd1c83d79adb0b0c2c8c013a1e03d629d56b0541e307267",
  "ckan_id": "abc123",
  "ckan_name": "example-dataset",
  "parent_identifier": null
}
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| id | string (UUID) | Unique record identifier |
| identifier | string | The dataset's identifier from the source metadata |
| status | string | Processing status: `success` or `error` |
| action | string | What happened: `create`, `update`, or `delete` |
| date_created | string (ISO 8601) | When processing started |
| date_finished | string (ISO 8601) | When processing completed |
| harvest_job_id | string (UUID) | The job that processed this record |
| harvest_source_id | string (UUID) | The source this record came from |
| source_hash | string | Hash of the source metadata (used for change detection) |
| ckan_id | string | ID in the catalog system |
| ckan_name | string | URL-friendly name in the catalog |
| parent_identifier | string | Parent dataset identifier (for collections) |

---

### Get Harvest Record Raw

Retrieve the original, unmodified source payload from a harvest record exactly as it was received.

**Endpoint:** `GET /harvest_record/{record_id}/raw`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| record_id | string (UUID) | Yes | The harvest record ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8/raw
```

**Response:** The original metadata payload. Content-Type is detected automatically:

- `application/json` for JSON payloads
- `application/xml` for XML payloads
- `text/plain` for all other content

Returns `404 Not Found` if the record does not exist or has no raw source data.

---

### Get Harvest Record Transformed

Retrieve the transformed DCAT-US payload for a harvest record. This is the version of the metadata after any source-specific transformations have been applied.

**Endpoint:** `GET /harvest_record/{record_id}/transformed`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| record_id | string (UUID) | Yes | The harvest record ID |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' https://harvest.data.gov/harvest_record/d0e03fb2-f885-4b1d-8feb-2d8acc93f4f8/transformed
```

**Response:** The transformed DCAT-US metadata payload as JSON.

Returns `404 Not Found` if the record does not exist or has no transformed data.

---

## Validation

### Validate Catalog

Validate a DCAT-US catalog against the 1.1 schema.

**Endpoint:** `POST /validate`

**Note:** A DCAT-US 3.0 validator is planned but not yet available. Check back for updates.

**Request Body:**

```json
{
  "fetch_method": "url",
  "url": "https://example.gov/data.json",
  "schema": "dcatus1.1: federal dataset"
}
```

| Field | Type | Description |
|-------|------|-------------|
| fetch_method | string | How to retrieve the catalog: `url` (fetch from URL) or `json_text` (inline JSON) |
| url | string | URL to fetch (if fetch_method is `url`) |
| json_text | string | Inline JSON catalog (if fetch_method is `json_text`) |
| schema | string | Schema to validate against: `dcatus1.1: federal dataset` |

**Example Request:**

```bash
curl -H 'X-Api-Key: DEMO_KEY' -X POST https://harvest.data.gov/validate \
  -H "Content-Type: application/json" \
  -d '{
    "fetch_method": "url",
    "url": "https://example.gov/data.json",
    "schema": "dcatus1.1: federal dataset"
  }'
```

For full details on validation responses, see the [OpenAPI documentation](https://harvest.data.gov/openapi/docs).

---

## Error Responses

All endpoints return standard HTTP status codes:

| Status Code | Meaning |
|-------------|---------|
| 200 | OK — Request was successful |
| 404 | Not Found — The requested resource does not exist, or the ID provided is not valid |
| 422 | Unprocessable Entity — The request was understood but contains invalid parameter values |
| 500 | Internal Server Error — An unexpected error occurred on the server |

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

---

## Related Resources

- **[Catalog API](https://resources.data.gov/catalog-api/)** — Search and retrieve dataset metadata from the Data.gov catalog
- **[DCAT-US Schema](https://resources.data.gov/resources/dcat-us/)** — The federal metadata standard for dataset descriptions
- **[Full OpenAPI Specification](https://harvest.data.gov/openapi/docs)** — Interactive documentation with all endpoints, including POST/PUT/DELETE operations

---

## Questions or Issues?

If you encounter problems with the Harvester API or have questions about your agency's harvest sources, contact the Data.gov team at [datagovhelp@gsa.gov](mailto:datagovhelp@gsa.gov).