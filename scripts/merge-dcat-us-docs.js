#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const submodulePath = path.join(repoRoot, "_external", "dcat-us");
const docsSourceDir = path.join(submodulePath, "jsonschema", "docs");
const outputDir = path.join(repoRoot, "pages", "_data_standards", "dcat-us-3");

const pageConfigs = {
  "index.md": {
    title: "DCAT-US 3.0 Schema Documentation",
    permalink: "/standards/catalog/dcat-us-3/",
  },
  "catalog.md": {
    title: "DCAT-US 3.0: Catalog",
    permalink: "/standards/catalog/dcat-us-3/catalog/",
  },
  "dataset.md": {
    title: "DCAT-US 3.0: Dataset",
    permalink: "/standards/catalog/dcat-us-3/dataset/",
  },
  "dataset-series.md": {
    title: "DCAT-US 3.0: Dataset Series",
    permalink: "/standards/catalog/dcat-us-3/dataset-series/",
  },
  "distribution.md": {
    title: "DCAT-US 3.0: Distribution",
    permalink: "/standards/catalog/dcat-us-3/distribution/",
  },
  "agents.md": {
    title: "DCAT-US 3.0: Agents",
    permalink: "/standards/catalog/dcat-us-3/agents/",
  },
  "constraints-and-restrictions.md": {
    title: "DCAT-US 3.0: Constraints and Restrictions",
    permalink: "/standards/catalog/dcat-us-3/constraints-and-restrictions/",
  },
  "identifiers-and-relationships.md": {
    title: "DCAT-US 3.0: Identifiers and Relationships",
    permalink: "/standards/catalog/dcat-us-3/identifiers-and-relationships/",
  },
  "temporal-spatial-metrics.md": {
    title: "DCAT-US 3.0: Temporal, Spatial, and Metrics",
    permalink: "/standards/catalog/dcat-us-3/temporal-spatial-metrics/",
  },
  "quality-governance.md": {
    title: "DCAT-US 3.0: Quality and Governance",
    permalink: "/standards/catalog/dcat-us-3/quality-governance/",
  },
};

const skippedFiles = new Set(["README.md"]);

function runCommand(command, cwd = repoRoot) {
  execSync(command, { cwd, stdio: "pipe" });
}

function ensureSubmoduleReady() {
  if (!fs.existsSync(path.join(submodulePath, ".git"))) {
    runCommand("git submodule update --init --depth 1 _external/dcat-us");
  }
}

function stripLeadingFrontMatter(content) {
  if (!content.startsWith("---\n")) {
    return content.trim();
  }

  const end = content.indexOf("\n---\n", 4);
  if (end === -1) {
    return content.trim();
  }

  return content.slice(end + 5).trim();
}

function titleFromFileName(fileName) {
  const baseName = path.basename(fileName, ".md");
  const words = baseName
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return `DCAT-US 3.0: ${words.join(" ")}`;
}

function getPageConfig(fileName) {
  if (pageConfigs[fileName]) {
    return pageConfigs[fileName];
  }

  const slug = path.basename(fileName, ".md");
  return {
    title: titleFromFileName(fileName),
    permalink: `/standards/catalog/dcat-us-3/${slug}/`,
  };
}

function yamlQuote(value) {
  return JSON.stringify(value);
}

function buildFrontMatter(fileName) {
  const config = getPageConfig(fileName);
  return [
    "---",
    `title: ${yamlQuote(config.title)}`,
    `layout: ${yamlQuote("page")}`,
    `permalink: ${yamlQuote(config.permalink)}`,
    `primary_nav_section: ${yamlQuote("Data Standards")}`,
    `category_name: ${yamlQuote("Data standards")}`,
    "---",
    "",
  ].join("\n");
}

function rewriteMarkdownLinks(content) {
  return content.replace(/\]\((\.\/)?([^\)#?]+\.md)(#[^\)]*)?\)/g, (match, _dotSlash, fileName, anchor = "") => {
    if (skippedFiles.has(fileName)) {
      return match;
    }

    const config = getPageConfig(fileName);
    return `](${config.permalink}${anchor})`;
  });
}

function writeOutputFile(fileName, content) {
  const outputPath = path.join(outputDir, fileName);
  const pageContent = `${buildFrontMatter(fileName)}${rewriteMarkdownLinks(stripLeadingFrontMatter(content))}\n`;
  fs.writeFileSync(outputPath, pageContent, "utf8");
}

function cleanSkippedOutputs() {
  skippedFiles.forEach((fileName) => {
    const outputPath = path.join(outputDir, fileName);
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  });
}

function mergeDocs() {
  const sourceFiles = fs
    .readdirSync(docsSourceDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();

  fs.mkdirSync(outputDir, { recursive: true });
  cleanSkippedOutputs();

  sourceFiles.forEach((fileName) => {
    if (skippedFiles.has(fileName)) {
      return;
    }

    const sourcePath = path.join(docsSourceDir, fileName);
    const sourceContent = fs.readFileSync(sourcePath, "utf8");
    writeOutputFile(fileName, sourceContent);
  });
}

function main() {
  try {
    ensureSubmoduleReady();

    if (!fs.existsSync(docsSourceDir)) {
      throw new Error(`Source docs directory not found: ${docsSourceDir}`);
    }

    mergeDocs();
    process.stdout.write("Merged DCAT-US 3.0 docs into pages/_data_standards/dcat-us-3/\n");
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exit(1);
  }
}

main();