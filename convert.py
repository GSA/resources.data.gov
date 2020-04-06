#!/usr/bin/env python
import csv
import yaml
import sys

if len(sys.argv) != 3:
    print(f"{sys.argv[0]}: collection csv-file")
    sys.exit(1)

collection_name = sys.argv[1]
filename = sys.argv[2]
path = f"pages/{collection_name}"
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
    for row in rows:
        slug = row[slug_index]
        markdown_file = f"{path}/{slug}.md"
        with open(markdown_file, "w") as f:
            markdown_data = dict(zip(headers, row))
            f.write("---\n")
            f.write(yaml.dump(markdown_data))
            f.write("---")
