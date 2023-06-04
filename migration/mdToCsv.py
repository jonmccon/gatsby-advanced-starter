import os
import csv
from markdown import Markdown

# Specify the desired order of headers (optional)
header_order = ["title", "website", 
                "category", "size",
                "city", "neighborhood",
                "latitude", "longitude",
                "twit", "inst", 
                "linkATitle", "linkAURL",
                "linkBTitle", "linkBURL",
                "pullquote", "episodePromo", "episodePerson",
                "episodeURL", "color",
                "published"]

# Specify the fields to ignore (optional)
ignored_fields = ["featuredImage", "cover"]

# Specify the field to sort by (optional)
sort_field = "title"

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

    # Check if fields exist, and assign empty string if missing
    fields = header_order

    for field in fields:
        if field not in metadata:
            metadata[field] = ""

    # Remove "-" character from tags
    if "tags" in metadata:
        metadata["tags"] = [tag.lstrip("- ") for tag in metadata["tags"]]

    # Split place data into latitude and longitude
    if "place" in metadata and metadata["place"]:
        place_data = metadata["place"][0]
        if place_data:
            latitude, longitude = place_data.strip("[]").split(",")
            metadata["latitude"] = latitude.strip()
            metadata["longitude"] = longitude.strip()
        else:
            metadata["latitude"] = ""
            metadata["longitude"] = ""
    else:
        metadata["latitude"] = ""
        metadata["longitude"] = ""

   # Extract linkA if available
    linkA = metadata.get("linkA", [])
    linkATitle = linkA[0] if linkA and len(linkA) > 0 else ""
    linkAURL = linkA[1] if linkA and len(linkA) > 1 else ""
    metadata["linkATitle"] = linkATitle
    metadata["linkAURL"] = linkAURL

 # Extract linkB if available
    linkB = metadata.get("linkB")
    linkBTitle = linkB[0] if linkB and len(linkB) > 0 else ""
    linkBURL = linkB[1] if linkB and len(linkB) > 1 else ""
    metadata["linkBTitle"] = linkBTitle
    metadata["linkBURL"] = linkBURL

    return metadata




def write_to_csv(metadata_list, output_file, header_order=None, ignored_fields=None, sort_field=None):
    keys = set().union(*[metadata.keys() for metadata in metadata_list])

    if ignored_fields is not None:
        keys -= set(ignored_fields)

    if header_order is not None:
        keys = [key for key in header_order if key in keys]

    # Extract unique tags
    all_tags = set()
    for metadata in metadata_list:
        if "tags" in metadata:
            all_tags.update(metadata["tags"])

    # Convert set of tags to a list
    all_tags = list(all_tags)

    # Add tag columns to keys
    keys.extend(all_tags)

    # Iterate over each metadata and populate the tag columns
    for metadata in metadata_list:
        for tag in all_tags:
            if tag in metadata.get("tags", []):
                metadata[tag] = True
            else:
                metadata[tag] = False

    if sort_field is not None:
        metadata_list.sort(key=lambda x: x.get(sort_field, ""))

    with open(output_file, "w", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=keys, quoting=csv.QUOTE_MINIMAL)
        writer.writeheader()

        # Write data rows
        for metadata in metadata_list:
            row = {}
            for key in keys:
                value = metadata.get(key, "")

                # Handle different data types appropriately
                if isinstance(value, list):
                    value = ", ".join(value)
                elif isinstance(value, tuple):
                    value = value[0]
                else:
                    value = str(value).strip("[]'")

                row[key] = value

            # Assign linkA and linkB values
            row["linkATitle"] = metadata.get("linkATitle", "")
            row["linkAURL"] = metadata.get("linkAURL", "")
            row["linkBTitle"] = metadata.get("linkBTitle", "")
            row["linkBURL"] = metadata.get("linkBURL", "")

            writer.writerow(row)


# Specify the directory containing the Markdown files
markdown_directory = "../content/directory"

# Specify the output CSV file path
output_csv_file = "./output.csv"

# Parse the Markdown files and retrieve the metadata
metadata_list = parse_markdown_files(markdown_directory)

# Call the function with the appropriate arguments
write_to_csv(metadata_list, output_csv_file, header_order=header_order, ignored_fields=ignored_fields, sort_field=sort_field)
