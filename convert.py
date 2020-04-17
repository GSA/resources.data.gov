#!/usr/bin/env python
import csv
import yaml
import sys
import os
from collections import Counter

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

def find_field(all_fields, field_name, get_options=False):
    labels = list(map(lambda f: f["label"], all_fields))
    try:
        index = labels.index(field_name)
        return all_fields[index]["options"] if get_options else fields[index]
    except ValueError:
        return None

def get_categories():
    categories  = list()
    for category_slug in os.listdir("pages/_categories/"):
        with open(f"pages/_categories/{category_slug}") as category_fd:
            raw = category_fd.read().replace('---', '')
            data = yaml.load(raw, Loader=yaml.FullLoader)
            categories.append(data["category_name"])
    return categories

def get_tags():
    keywords = list()
    for keyword_slug in os.listdir("pages/_keywords/"):
        with open(f"pages/_keywords/{keyword_slug}") as keyword_fd:
            raw = keyword_fd.read().replace('---', '')
            data = yaml.load(raw, Loader=yaml.FullLoader)
            keywords.append(data["name"])
    return keywords

categories = get_categories()
tags = get_tags()
tag_counter = Counter()
policy_tags = set()

# ensure slugs are unique
slug_set = set()

with open(filename) as fd:
    data = list(csv.reader(fd))
    headers = data[0]
    slug_index = headers.index("slug")  # must be present
    tags_index = headers.index("tags")
    policy_tags_index = headers.index("policy tags")
    category_index = headers.index("category")

    errors = False
    for header in headers:
        if header == "publish":
            # ignore for now
            continue
        has_field = find_field(fields, header.replace(' ', '_'))
        if not has_field:
            errors = True
            print(f"error: csv header does not match admin config: {header}")
    if errors:
        print("Please fix csv headers before proceeding.")
        sys.exit(1)

    rows = data[1:]

    # verify slug uniqueness before we write anything
    for index, row in enumerate(rows):
        csv_tags = row[tags_index]
        if not csv_tags:
            print(f"warning: row {index} has empty tags, skipping")
        else:
            for tag in csv_tags.split(","):
                tag_name = tag.strip()
                tag_counter[tag_name] += 1
                if tag_name not in tags:
                    print(f"warning: row {index} has an unknown category {tag_name}, skipping")
        category = row[category_index]
        if not category:
            print(f"warning: row {index} has an empty category, skipping")
        else:
            if category not in categories:
                print(f"warning: row {index} has an unknown category {category}, skipping")
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

    # custom handling for tags: convert them to a list so that the
    # yaml dump can produce tags as a list, not inline
    for index, row in enumerate(rows)        :
        csv_tags = row[tags_index]
        if not csv_tags:
            continue
        row[tags_index] = [t.strip() for t in csv_tags.split(",")]
    for index, row in enumerate(rows)        :
        csv_tags = row[policy_tags_index]
        if not csv_tags:
            continue
        row[policy_tags_index] = [t.strip() for t in csv_tags.split(",")]
        policy_tags.update([t.strip() for t in csv_tags.split(",")])

    for row in rows:
        slug = row[slug_index]
        if not slug:
            continue
        markdown_file = f"{path}/{slug}.md"
        with open(markdown_file, "x") as f:
            markdown_data = dict(zip(headers, row))
            markdown_data["layout"] = "resource"
            markdown_data["toc"] = True
            markdown_data["publish"] = bool(markdown_data["publish"])
            pt = markdown_data.pop("policy tags")
            markdown_data["policy_tags"] = pt
            f.write("---\n")
            f.write(yaml.dump(markdown_data, default_flow_style=False))
            f.write("---")

# obtain unused tags (NB: unused tags can be in other collections)
used_tags = set(tag_counter.keys())
listed_tags = set(tags)
print(f"unused tags for {collection_name}: {listed_tags - used_tags}")
print(policy_tags)
