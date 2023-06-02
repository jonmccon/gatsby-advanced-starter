import os
import csv
from markdown import Markdown

# Specify the desired order of headers (optional)
header_order = ["title", "website", 
                "category", "size",
                "city", "neighborhood", "map",
                "twit", "inst", 
                "tags",
                "linkA","linkB",
                "pullquote", "episodePromo", "episodePerson",
                "episodeURL", "color",
                "published"]

# Specify the fields to ignore (optional)
ignored_fields = ["featuredImage", "cover"]


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
    fields = header_order

    for field in fields:
        if field not in metadata:
            metadata[field] = ""
    
    # Remove "-" character from tags
    if "tags" in metadata:
        metadata["tags"] = [tag.lstrip("- ") for tag in metadata["tags"]]

    return metadata

def write_to_csv(metadata_list, output_file, header_order=None, ignored_fields=None):
    keys = set().union(*[metadata.keys() for metadata in metadata_list])

    if ignored_fields is not None:
        keys -= set(ignored_fields)

    if header_order is not None:
        keys = [key for key in header_order if key in keys]

    with open(output_file, "w", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=keys, quoting=csv.QUOTE_MINIMAL)
        writer.writeheader()

        for metadata in metadata_list:
            row = {}
            for key in keys:
                value = metadata.get(key, "")

                # Handle different data types appropriately
                if isinstance(value, list):
                    value = ", ".join(value)

                row[key] = value

            writer.writerow(row)



# Specify the directory containing the Markdown files
markdown_directory = "../content/directory"

# Specify the output CSV file path
output_csv_file = "./output.csv"

# Parse the Markdown files and retrieve the metadata
metadata_list = parse_markdown_files(markdown_directory)

# Call the function with the appropriate arguments
write_to_csv(metadata_list, output_csv_file, header_order=header_order, ignored_fields=ignored_fields)
