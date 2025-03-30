# File Metadata Microservice

## Description

The File Metadata Microservice allows users to upload a file and retrieve its metadata, including the file name, type, and size. This service is built using Node.js, Express, and Multer for file handling.

## Features

- Upload a file and retrieve its metadata

- Supports various file types

- Returns file name, MIME type, and file size in JSON format

- Serves static files from the public directory

## Technologies Used

- Node.js

- Express

- Multer (for handling file uploads)

- CORS

- Morgan

- dotenv

## Installation

1. Clone the repository:

2. Install dependencies:

3. Create a .env file in the root directory and add:

4. Start the server:


## API Endpoints

## Upload a file

POST /api/fileanalyse

Request:

- Form-data with a file under the field name upfile

## License

This project is open-source and available under the MIT License.

