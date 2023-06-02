import os
import csv
from markdown import Markdown

def parse_markdown_files(directory):
    metadata_list = []

    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            filepath = os.path.join(directory, filename)
            with open(filepath, "r") as file:
                content = file.read()
                metadata = parse_metadata(content)
                metadata_list.append(metadata)

    return metadata_list

def parse_metadata(markdown_content):
    md = Markdown(extensions=["meta"])
    md.convert(markdown_content)
    metadata = md.Meta

    # Convert linkA from list to string
    metadata["linkA"] = " ".join(metadata.get("linkA", []))

    # Check if fields exist, and assign empty string if missing
    fields = ["title", "featuredImage", "website", "twit", "inst", "linkA",
              "linkB", "category", "city", "neighborhood", "size", "map",
              "tags", "episodeURL", "episodePromo", "episodePerson",
              "pullquote", "color", "published"]

    for field in fields:
        if field not in metadata:
            metadata[field] = ""

    return metadata

def write_to_csv(metadata_list, output_file):
    keys = metadata_list[0].keys()

    with open(output_file, "w", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=keys)
        writer.writeheader()
        writer.writerows(metadata_list)

# Specify the directory containing the Markdown files
markdown_directory = "../content/directory"

# Specify the output CSV file path
output_csv_file = "/output.csv"

# Parse the Markdown files and retrieve the metadata
metadata_list = parse_markdown_files(markdown_directory)

# Write the metadata to a CSV file
write_to_csv(metadata_list, output_csv_file)
