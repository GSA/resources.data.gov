#!/usr/bin/env python
import csv
import yaml
import sys
import os

if len(sys.argv) != 3:
    print(f"{sys.argv[0]}: collection csv-file")
    sys.exit(1)

collection_name = sys.argv[1]
filename = sys.argv[2]
path = f"pages/_{collection_name}"
admin_file = "pages/admin/config.yml"

# get the referenced collection from the netlify admin file.
fields = dict()
with open(admin_file) as fd:
    data = yaml.load(fd, Loader=yaml.FullLoader)
    collections = data["collections"]
    for collection in collections:
        if collection["name"] == collection_name:
            fields = collection["fields"]
            break

if not fields:
    print(f"{sys.argv[0]}: could not load {collection_name} from the admin file")
    sys.exit(1)

def find_field(all_fields, field_name):
    labels = list(map(lambda f: f["label"], all_fields))
    try:
        index = labels.index(field_name)
        return labels[index]
    except ValueError:
        return None

# ensure slugs are unique
slug_set = set()

with open(filename) as fd:
    data = list(csv.reader(fd))
    headers = data[0]
    slug_index = headers.index("slug")  # must be present

    errors = False
    for header in headers:
        if header == "publish":
            # ignore for now
            continue
        has_field = find_field(fields, header)
        if not has_field:
            errors = True
            print(f"error: csv header does not match admin config: {header}")
    if errors:
        print("Please fix csv headers before proceeding.")
        sys.exit(1)

    rows = data[1:]

    # verify slug uniqueness before we write anything
    for index, row in enumerate(rows):
        slug = row[slug_index].lower()
        if not slug:
            print(f"warning: row {index} has no slug, skipping")
            continue
        if slug in slug_set:
            print(f"error: duplicated slug {slug}")
            print("Please fix csv data before proceeding.")
            sys.exit(1)
        slug_set.add(slug)

    # remove pre-existing files so we have a clean copy every time.
    for filename in os.listdir(path):
        if filename.endswith(".md"):
            os.unlink(f"{path}/{filename}")

    for row in rows:
        slug = row[slug_index]
        if not slug:
            continue
        markdown_file = f"{path}/{slug}.md"
        with open(markdown_file, "x") as f:
            markdown_data = dict(zip(headers, row))
            markdown_data["layout"] = "resource"
            f.write("---\n")
            f.write(yaml.dump(markdown_data))
            f.write("---")
