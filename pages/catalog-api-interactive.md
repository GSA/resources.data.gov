---
title: Catalog API - Interactive Documentation
layout: page
primary_nav_section: Developers
---

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">API Authentication Required</h4>
    <p class="usa-alert__text">
      To use this API, you need an API key from <a href="https://api.data.gov/signup">api.data.gov</a>. 
      All requests must include your API key in the <code>X-Api-Key</code> header.
    </p>
    <p class="usa-alert__text">
      <strong>Base URL:</strong> <code>https://api.gsa.gov/technology/datagov/v4/</code>
    </p>
  </div>
</div>

<div id="swagger-ui"></div>

<link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui.css" />
<style>
  #swagger-ui {
    font-family: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', sans-serif;
  }
  
  .swagger-ui .topbar {
    display: none;
  }
  
  .swagger-ui .info hgroup.main a,
  .swagger-ui .info .title small.version-stamp,
  .swagger-ui .info .title small,
  .swagger-ui .info hgroup.main small {
    display: none !important;
  }
  
  .swagger-ui .info {
    margin: 2rem 0;
  }
  
  .swagger-ui .scheme-container {
    padding: 1rem 0;
    background: #f0f0f0;
    border-radius: 4px;
    margin-bottom: 2rem;
  }
</style>

<script src="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-bundle.js"></script>
<script src="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-standalone-preset.js"></script>

<script>
window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "{{ '/assets/api/catalog-openapi.json' | relative_url }}",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "BaseLayout",
    defaultModelsExpandDepth: 1,
    defaultModelExpandDepth: 1,
    docExpansion: "list",
    filter: true,
    tryItOutEnabled: true,
    requestInterceptor: function(request) {
      if (request.url.includes('catalog.data.gov')) {
        request.url = request.url.replace(
          'https://catalog.data.gov',
          'https://api.gsa.gov/technology/datagov/v4'
        );
      }
      return request;
    }
  });

  window.ui = ui;
};
</script>

## About This Documentation

This interactive documentation is automatically generated from the catalog application code using OpenAPI 3.0. 
You can explore endpoints, view request/response schemas, and test API calls directly using the "Try it out" feature.

For a curated introduction and common use cases, see the [Getting Started Guide](/catalog-api/).

### Need Help?

If you encounter problems with the Catalog API or have questions about the data catalog, contact the Data.gov team at [datagovhelp@gsa.gov](mailto:datagovhelp@gsa.gov).
