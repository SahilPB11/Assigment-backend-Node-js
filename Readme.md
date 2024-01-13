# Product Management API

## Overview

This project provides a comprehensive and user-friendly API for managing products and their variants. It allows users to perform CRUD (Create, Read, Update, Delete) operations on products, search for products based on various criteria, and retrieve detailed information about individual products, including their variants. The API is designed to be easy to use and integrate with front-end applications.

## Getting Started

To get started, you will need to:

1. **Install the necessary dependencies**:

   - Node.js and npm
   - MongoDB

2. **Clone the project repository**:

   ```
   git clone https://github.com/username/product-management-api.git
   ```

3. **Set up the database**:

   - Start a MongoDB instance
   - Create a database named `product-management`
   - Import the `product-management.json` file into the database

4. **Configure the environment variables**:

   - Copy the `.env.example` file to `.env`
   - Fill in the database connection string and port number

5. **Install the dependencies**:

   ```
   npm install
   ```

6. **Run the server**:
   ```
   npm start
   ```

## API Endpoints

The API provides the following endpoints:

### Create Product

**URL**: `/api/products`

**Method**: POST

**Request Body**:

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "variants": [
    {
      "name": "Variant 1",
      "SKU": "SKU123",
      "additionalCost": 10,
      "stockCount": 10
    },
    {
      "name": "Variant 2",
      "SKU": "SKU456",
      "additionalCost": 20,
      "stockCount": 20
    }
  ]
}
```

**Response**:

```json
{
  "_id": "63957d3718a9290561c0a3b4",
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "variants": [
    {
      "_id": "63957d3718a9290561c0a3b5",
      "name": "Variant 1",
      "SKU": "SKU123",
      "additionalCost": 10,
      "stockCount": 10
    },
    {
      "_id": "63957d3718a9290561c0a3b6",
      "name": "Variant 2",
      "SKU": "SKU456",
      "additionalCost": 20,
      "stockCount": 20
    }
  ]
}
```

### Get All Products

**URL**: `/api/products`

**Method**: GET

**Response**:

```json
[
  {
    "_id": "63957d3718a9290561c0a3b4",
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "variants": [
      {
        "_id": "63957d3718a9290561c0a3b5",
        "name": "Variant 1",
        "SKU": "SKU123",
        "additionalCost": 10,
        "stockCount": 10
      },
      {
        "_id": "63957d3718a9290561c0a3b6",
        "name": "Variant 2",
        "SKU": "SKU456",
        "additionalCost": 20,
        "stockCount": 20
      }
    ]
  },
  ...
]
```

### Get Product by ID

**URL**: `/api/products/:id`

**Method**: GET

**Response**:

```json
{
  "_id": "63957d3718a9290561c0a3b4",
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "variants": [
    {
      "_id": "63957d3718a9290561c0a3b5",
      "name": "Variant 1",
      "SKU": "SKU123",
      "additionalCost": 10,
      "stockCount": 10
    },
    {
      "_id": "63957d3718a9290561c0a3b6",
      "name": "Variant 2",
      "SKU": "SKU456",
      "additionalCost": 20,
      "stockCount": 20
    }
  ]
}
```

### Update Product by ID

**URL**: `/api/products/:id`

**Method**: PUT

**Request Body**:

```json
{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 120,
  "variants": [
    {
      "_id": "63957d3718a9290561c0a3b5",
      "name": "Updated Variant 1",
      "SKU": "SKU123",
      "additionalCost": 15,
      "stockCount": 15
    },
    {
      "_id": "63957d3718a9290561c0a3b6",
      "name": "Updated Variant 2",
      "SKU": "SKU456",
      "additionalCost": 25,
      "stockCount": 25
    }
  ]
}
```

**Response**:

```json
{
  "_id": "63957d3718a9290561c0a3b4",
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 120,
  "variants": [
    {
      "_id": "63957d3718a9290561c0a3b5",
      "name": "Updated Variant 1",
      "SKU": "SKU123",
      "additionalCost": 15,
      "stockCount": 15
    },
    {
      "_id": "63957d3718a9290561c0a3b6",
      "name": "Updated Variant 2",
      "SKU": "SKU456",
      "additionalCost": 25,
      "stockCount": 25
    }
  ]
}
```

### Delete Product by ID

**URL**: `/api/products/:id`

**Method**: DELETE

**Response**:

```json
{
  "success": true,
  "message": "Product deleted successfully."
}
```

### Search Products

**URL**: `/api/products/search`

**Method**: GET

**Query Parameters**:

- `query`: The search term

**Response**:

```json
[
  {
    "_id": "63957d3718a9290561c0a3b4",
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "variants": [
      {
        "_id": "63957d3718a9290561c0a3b5",
        "name": "Variant 1",
        "SKU": "SKU123",
        "additionalCost": 10,
        "stockCount": 10
      },
      {
        "_id": "63957d3718a9290561c0a3b6",
        "name": "Variant 2",
        "SKU": "SKU456",
        "additionalCost": 20,
        "stockCount": 20
      }
    ]
  },
  ...
]
```

## Schema

The following schemas are used in the database:

### Product

```json
{
  "_id": "63957d3718a
```
