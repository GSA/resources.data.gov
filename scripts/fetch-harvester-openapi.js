const https = require('https');
const fs = require('fs');
const path = require('path');

const OPENAPI_URL = 'https://harvest.data.gov/openapi.json';
const OUTPUT_PATH = path.join(__dirname, '../pages/assets/api/harvester-openapi.json');

console.log('Fetching harvester OpenAPI spec...');

https.get(OPENAPI_URL, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      JSON.parse(data);

      const dir = path.dirname(OUTPUT_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(OUTPUT_PATH, data);
      console.log(`✓ Successfully fetched and saved OpenAPI spec to ${OUTPUT_PATH}`);
    } catch (error) {
      console.error('✗ Failed to parse OpenAPI spec as JSON:', error.message);
      process.exit(1);
    }
  });
}).on('error', (error) => {
  console.error('✗ Failed to fetch OpenAPI spec:', error.message);
  process.exit(1);
});
