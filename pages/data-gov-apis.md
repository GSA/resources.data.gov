---
title: Data.gov APIs
layout: page
---

The Data.gov APIs provide programmatic access to federal open data. Use them to search for datasets, retrieve metadata, look up harvest sources, and check harvest job status -- all in support of the open data principles established by the [OPEN Government Data Act](https://www.congress.gov/bill/115th-congress/house-bill/4174).

**To get started, you will need a free API key.** [Register at open.gsa.gov](https://open.gsa.gov/api/datadotgov/) -- it takes less than a minute.

---

## What is api.data.gov?

When you register for an API key and make requests to the Data.gov APIs, you are going through [api.data.gov](https://api.data.gov) -- GSA's shared API gateway. It manages authentication, rate limiting, and usage tracking for Data.gov's APIs.

api.data.gov is not a barrier to access -- it is what makes access reliable. It ensures that federal open data is available consistently and at scale, in the spirit of the OPEN Government Data Act's mandate that government data be open and machine-readable by default.

Your API key is free. It identifies your application, allows you to track your own usage, and gives you a higher rate limit than the anonymous `DEMO_KEY`. For more information about how api.data.gov works, visit [api.data.gov/docs/developer-manual/](https://api.data.gov/docs/developer-manual/).

---

## API Key and Rate Limits

All requests must include your API key in the `X-Api-Key` HTTP header:
```
curl -H 'X-Api-Key: YOUR_KEY_HERE' 'https://api.gsa.gov/technology/datagov/v4/search?q=climate'
```
For initial exploration, you can use `DEMO_KEY` without registering:
```
curl -H 'X-Api-Key: DEMO_KEY' 'https://api.gsa.gov/technology/datagov/v4/search?q=climate'
```

`DEMO_KEY` has much lower rate limits and is not suitable for production use or automated queries.


<table class="usa-table">
  <thead>
    <tr>
      <th>Key type</th>
      <th>Hourly limit</th>
      <th>Daily limit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Personal API key</td>
      <td>1,000 requests/hour</td>
      <td>--</td>
    </tr>
    <tr>
      <td><code>DEMO_KEY</code></td>
      <td>30 requests/IP/hour</td>
      <td>50 requests/IP/day</td>
    </tr>
  </tbody>
</table>

Every response includes `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers so you can track your usage. If you exceed your limit, you will receive an HTTP `429 Too Many Requests` response. The block lifts automatically after one hour. For higher limits, contact us at datagovhelp@gsa.gov.

---

## Available APIs

### Catalog API

The Catalog API provides access to metadata about datasets published by federal, state, local, and tribal governments. Use it to search for datasets, filter by organization or topic, and retrieve detailed information about individual records.

**Base URL:** `https://api.gsa.gov/technology/datagov/v4/`

**Example request:**

```
curl -H 'X-Api-Key: DEMO_KEY' 'https://api.gsa.gov/technology/datagov/v4/search?q=climate'
```

[View full Catalog API documentation](/catalog-api/)


---

### Harvester API

The Harvester API provides access to Data.gov's harvest infrastructure -- the system that collects dataset metadata from federal agencies and other publishers. Use it to look up harvest sources, check job status, and investigate harvest errors.

**Base URL:** `https://api.gsa.gov/technology/datagov_harvest/v2/`

**Example request:**

```
curl -H 'X-Api-Key: DEMO_KEY' 'https://api.gsa.gov/technology/datagov_harvest/v2/harvest_sources/'
```

[View full Harvester API documentation](/harvester-api/)


---

## Questions or Issues?

Contact the Data.gov team at [datagovhelp@gsa.gov](mailto:datagovhelp@gsa.gov).
