#!/bin/bash
set -e

echo "Running custom build script..."

# Run npm build steps
npm run gulp
npm run merge-dcat-us-docs
npm run fetch-harvester-openapi

# Run Jekyll build
bundle exec jekyll build

echo "Build complete!"
