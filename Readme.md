
 **Live Link:** 🔗 https://backend-assignment-bmjb.onrender.com/

**Postman Documentation:** 📚 [https://documenter.getpostman.com/view/23487917/2s9YsNdVnd)

**About the API:** 💡

_**Say hello to your new bestie! 🤝 This RESTful API is here to help you manage your e-commerce SKUs like a pro. Create, read, update, delete - you name it, this API's got your back! Oh, and don't forget about managing inventory - it's all here, just waiting for your magic touch.**_

**Getting Started:** 🏃

1. To use the API, you will need a Postman account.
2. Once you have a Postman account, you can import the Postman collection for the API by following the link above.
3. Once you have imported the collection, you can start making requests to the API.

# Product Management API Overview 🗺️

_**Whether you're a coding ninja 🥷 or a business whizz, this API is your ultimate weapon for managing products and their variations. Create, read, update, and delete products effortlessly. Need to search for specific products? No problem! And the cherry on top? You can retrieve detailed info about each product, including its variants. Now, let's dive into the details.**_

## CRUD Operations 🛠️

CRUD (Create, Read, Update, Delete) operations are essential for managing your products and variants. Here's how you can use them:

### 1️⃣ Create Product: 🐣

_**Give birth to a new product!**_

**URL**: 🌍 `/api/products`

**Method**: 🛠️ POST

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

**Response**: 🎁

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

### 2️⃣ Get All Products: 🔎

_**Time for a product parade!**_

**URL**: 🌍 `/api/products`

**Method**: 🛠️ GET

**Response**: 🎉

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

### 3️⃣ Get Product by ID: 👀

_**Spotlight on a single product!**_

**URL**: 🌍 `/api/products/:id`

**Method**: 🛠️ GET

**Response**: ✨

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

### 4️⃣ Update Product by ID: ✏️

_**Give your product a makeover!**_

**URL**: 🌍 `/api/products/:id`

**Method**: 🛠️ PUT

**Request Body**: 🎁

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

**Response**: 🎁

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

### 5️⃣ Delete Product by ID: 🗑️

_**Say goodbye to a product!**_

**URL**: 🌍 `/api/products/:id`

**Method**: 🛠️ DELETE

**Response**: 🌟

```json
{
  "success": true,
  "message": "Product deleted successfully."
}
```

## Search Products: 🔍

_**Find the perfect product in a snap!**_

**URL**: 🌍 `/api/products/search`

**Method**: 🛠️ GET

**Query Parameters**:

- `query`: The search term

**Response**: 🎉

```json
[
  {
    "_id": "63957d3718a9290561c0a3b4",
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "variants": [
      {
        "_id": "63957d3718a929056 
