---
title: Harvester API - Interactive Documentation
layout: page
---

<div id="swagger-ui"></div>

<link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
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

<script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
<script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-standalone-preset.js"></script>

<script>
window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "/assets/api/harvester-openapi.json",
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
      return request;
    }
  });

  window.ui = ui;
};
</script>

<div class="usa-alert usa-alert--info" style="margin-top: 2rem;">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">API Authentication Required</h4>
    <p class="usa-alert__text">
      To use this API, you need an API key from <a href="https://open.gsa.gov/api/datadotgov/">api.data.gov</a>. 
      All requests must include your API key in the <code>X-Api-Key</code> header.
    </p>
    <p class="usa-alert__text">
      <strong>Base URL:</strong> <code>https://api.gsa.gov/technology/datagov_harvest/v2/</code>
    </p>
  </div>
</div>

## About This Documentation

This interactive documentation is automatically generated from the harvester application code using OpenAPI 3.0. 
You can explore endpoints, view request/response schemas, and test API calls directly using the "Try it out" feature.

For a curated introduction and common use cases, see the [Getting Started Guide](/harvester-api/).

### Need Help?

If you encounter problems with the Harvester API or have questions about your agency's harvest sources, contact the Data.gov team at [datagovhelp@gsa.gov](mailto:datagovhelp@gsa.gov).
