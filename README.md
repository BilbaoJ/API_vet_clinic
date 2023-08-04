# API_vet_clinic

A simple API to manage pet and veterinarian information.

## Installation

1. Clone this repository: `https://github.com/BilbaoJ/API_vet_clinic.git`.
2. Go to the project directory and install the dependencies: `npm install`.

## Use

1. Set the environment variables in an `.env` file in the root of the project
2. Start the server: `npm run dev`.
3. Access the API at: `http://localhost:PORT`.

## Endpoints for Pets

### Get all pets

- Method: GET
- Endpoint: `api/v1/pets`

### Get information about a pet

- Method: GET
- Endpoint: `api/v1/pets/:id`

### Add a new pet

- Method: POST
- Endpoint: `api/v1/pets`
- Request Body:
```json
{
  "name": "",
  "breed": "",
  "birth_date": "",
  "owner": ""
}
```

### Update a pet's information
- Method: PUT
- Endpoint: api/v1/pets/:id
- Request Body:
```json
{
  "name": "",
  "breed": "",
  "birth_date": "",
  "owner": ""
}
```
### Delete a pet
- Method: DELETE
- Endpoint: api/v1/pets/:id

## Endpoints for Veterinarians

### Get all veterinarians

- Method: GET
- Endpoint: `api/v1/veterinarians`

### Get information about a veterinarian

- Method: GET
- Endpoint: `api/v1/veterinarians/:id`

### Add a new veterinarian

- Method: POST
- Endpoint: `api/v1/veterinarians`
- Request Body:
```json
{
  "name": "",
  "phone": "",
  "shift": ""
}
```

### Update a veterinarian's information
- Method: PUT
- Endpoint: api/v1/veterinarians/:id
- Request Body:
```json
{
  "name": "",
  "phone": "",
  "shift": ""
}
```
### Delete a veterinarian
- Method: DELETE
- Endpoint: api/v1/veterinarians/:id
