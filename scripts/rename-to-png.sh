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

# Initialize a counter
counter=1

# Loop through all files in the specified directory
for file in "$input_dir"/*; do
    # Check if it is a file (not a directory)
    if [ -f "$file" ]; then
        # Extract the filename without extension
        new_filename=$(printf "%s/%04d" "$input_dir" "$counter")
        
        # Rename the file to have a .png extension
        mv "$file" "${new_filename}.png"
        
        echo "Renamed $file to ${new_filename}.png"

        # Increment the counter
        counter=$((counter + 1))
    fi
done

echo "All files in $input_dir have been renamed to .png."