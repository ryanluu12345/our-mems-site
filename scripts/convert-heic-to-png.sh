#!/bin/bash

# Check if the directory argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Set the input directory
input_dir="$1"

# Check if the input directory exists
if [ ! -d "$input_dir" ]; then
    echo "The directory $input_dir does not exist."
    exit 1
fi

# Loop through all HEIC files in the current directory
for file in "$input_dir"/*HEIC; do
    # Check if there are no HEIC files
    if [ ! -e "$file" ]; then
        echo "No HEIC files found in the current directory."
        exit 1
    fi

    # Extract the filename without extension
    filename="${file%.*}"

    # Convert HEIC to PNG
    sips -s format png -s formatOptions best "$file" --out "${filename}.png"

    echo "Converted $file to ${filename}.png"
done

echo "All HEIC files have been converted to PNG."

echo "Removing all HEIC files."
rm -f "$input_dir"/*heic
rm -f "$input_dir"/*HEIC