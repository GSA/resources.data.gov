#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const OPENAPI_URL = 'https://catalog.data.gov/openapi.json';
const OUTPUT_DIR = path.join(__dirname, '../pages/assets/api');
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'catalog-openapi.json');

function validateOpenAPISpec(data) {
  try {
    const spec = JSON.parse(data);

    if (!spec.openapi) {
      throw new Error('Missing openapi version field');
    }

    if (!spec.info || !spec.info.title) {
      throw new Error('Missing info.title field');
    }

    if (!spec.paths || Object.keys(spec.paths).length === 0) {
      throw new Error('No paths defined in spec');
    }

    return spec;
  } catch (error) {
    throw new Error(`Invalid OpenAPI spec: ${error.message}`);
  }
}

function writeSpec(data) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const spec = validateOpenAPISpec(data);

  spec._buildMetadata = {
    fetchedAt: new Date().toISOString(),
    source: OPENAPI_URL
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(spec, null, 2), 'utf8');

  return spec;
}

function fetchSpec() {
  return new Promise((resolve, reject) => {
    const req = https.get(OPENAPI_URL, { timeout: 10000 }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }

      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const spec = writeSpec(data);
          const endpointCount = Object.keys(spec.paths).length;
          resolve({ success: true, endpointCount });
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout after 10 seconds'));
    });
  });
}

function getCachedSpecAge() {
  try {
    const stats = fs.statSync(OUTPUT_PATH);
    const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
    return ageInHours.toFixed(1);
  } catch {
    return null;
  }
}

async function main() {
  try {
    process.stdout.write('Fetching catalog OpenAPI spec...\n');

    const result = await fetchSpec();

    process.stdout.write(`✓ Successfully fetched OpenAPI spec (${result.endpointCount} endpoints)\n`);
    process.stdout.write(`✓ Saved to ${OUTPUT_PATH}\n`);

  } catch (error) {
    process.stderr.write(`✗ Failed to fetch OpenAPI spec: ${error.message}\n`);

    if (fs.existsSync(OUTPUT_PATH)) {
      const age = getCachedSpecAge();
      process.stdout.write(`⚠ Using cached spec from ${age} hours ago\n`);
      process.stdout.write('⚠ Documentation may be out of sync with catalog API\n');
      process.exit(0);
    } else {
      process.stderr.write('✗ No cached spec available - build cannot continue\n');
      process.stderr.write('✗ Ensure catalog is accessible or commit an initial spec file\n');
      process.exit(1);
    }
  }
}

main();
