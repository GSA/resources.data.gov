#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const submodulePath = path.join(repoRoot, "_external", "dcat-us");
const docsSourceDir = path.join(submodulePath, "jsonschema", "docs");
const outputDir = path.join(repoRoot, "pages", "_data_standards", "dcat-us-3");

const mainClassMap = [
  { source: "Catalog.md", output: "catalog.md", title: "Catalog" },
  { source: "Dataset.md", output: "dataset.md", title: "Dataset" },
  { source: "DatasetSeries.md", output: "dataset-series.md", title: "Dataset Series" },
  { source: "Distribution.md", output: "distribution.md", title: "Distribution" },
];

const groupedClassPages = [
  {
    output: "agents.md",
    title: "Agents",
    classes: ["Agent.md", "Organization.md", "Kind.md"],
  },
  {
    output: "constraints-and-restrictions.md",
    title: "Constraints and Restrictions",
    classes: ["AccessRestriction.md", "CUIRestriction.md", "UseRestriction.md"],
  },
  {
    output: "identifiers-and-relationships.md",
    title: "Identifiers and Relationships",
    classes: ["Identifier.md", "Relationship.md", "Checksum.md", "Concept.md", "ConceptScheme.md"],
  },
  {
    output: "temporal-spatial-metrics.md",
    title: "Temporal, Spatial, and Metrics",
    classes: ["PeriodOfTime.md", "Location.md", "Metric.md", "QualityMeasurement.md", "Activity.md", "Address.md"],
  },
  {
    output: "quality-governance.md",
    title: "Quality and Governance",
    classes: ["Standard.md", "Document.md", "CatalogRecord.md", "DataService.md", "Attribution.md"],
  },
];

function runCommand(command, cwd = repoRoot) {
  execSync(command, { cwd, stdio: "pipe" });
}

function ensureSubmoduleReady() {
  if (!fs.existsSync(path.join(submodulePath, ".git"))) {
    runCommand("git submodule update --init --depth 1 _external/dcat-us");
  }

  runCommand("git sparse-checkout init --no-cone", submodulePath);
  runCommand('printf "/jsonschema/definitions/\\n/jsonschema/docs/\\n" | git sparse-checkout set --stdin', submodulePath);
}

function readSourceDoc(fileName) {
  const fullPath = path.join(docsSourceDir, fileName);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing expected source doc: ${fullPath}`);
  }

  return fs.readFileSync(fullPath, "utf8").trim();
}

function buildFrontMatter(title, permalink) {
  return [
    "---",
    `title: DCAT-US 3.0: ${title}`,
    "layout: page",
    `permalink: ${permalink}`,
    "primary_nav_section: Data Standards",
    "category_name: Data standards",
    "---",
    "",
  ].join("\n");
}

function writeFile(outputPath, content) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${content.trim()}\n`, "utf8");
}

function buildMainClassPages() {
  mainClassMap.forEach((item) => {
    const sourceContent = readSourceDoc(item.source);
    const permalink = `/standards/catalog/dcat-us-3/${item.output.replace(".md", "")}/`;
    const pageContent = `${buildFrontMatter(item.title, permalink)}${sourceContent}`;
    writeFile(path.join(outputDir, item.output), pageContent);
  });
}

function buildGroupedPages() {
  groupedClassPages.forEach((group) => {
    const permalink = `/standards/catalog/dcat-us-3/${group.output.replace(".md", "")}/`;
    const sections = group.classes.map((classFile) => {
      const className = classFile.replace(".md", "");
      const sourceContent = readSourceDoc(classFile);
      return `## ${className}\n\n${sourceContent}`;
    });

    const pageContent = [
      buildFrontMatter(group.title, permalink),
      `This page combines supporting DCAT-US 3.0 classes used with the main schema classes.`,
      "",
      sections.join("\n\n---\n\n"),
      "",
    ].join("\n");

    writeFile(path.join(outputDir, group.output), pageContent);
  });
}

function main() {
  try {
    ensureSubmoduleReady();

    if (!fs.existsSync(docsSourceDir)) {
      throw new Error(`Source docs directory not found: ${docsSourceDir}`);
    }

    fs.mkdirSync(outputDir, { recursive: true });
    buildMainClassPages();
    buildGroupedPages();

    process.stdout.write("Merged DCAT-US 3.0 docs into pages/_data_standards/dcat-us-3/\n");
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exit(1);
  }
}

main();
