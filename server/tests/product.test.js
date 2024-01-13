import request from "supertest";
import app from "../index.js";

describe("Product API Endpoints", () => {
  let productId; // Variable to store the product ID after creation

  // Test for creating a new product with variants
  it("should create a new product with variants", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({
        name: "Sample Product",
        description: "Sample Description",
        price: 100,
        variants: [
          {
            name: "Variant 1",
            SKU: "SKU123",
            additionalCost: 10,
            stockCount: 100,
          },
        ],
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("name", "Sample Product");

    // Store the product ID from the response for later use
    productId = res.body._id; // Assuming the product ID is returned in the response
  });

  // Test for retrieving all products
  it("should retrieve all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Test for updating a product by ID
  it("should update a product by ID", async () => {
    // Ensure a product ID is available from the previous test
    expect(productId).toBeDefined();

    const res = await request(app)
      .put(`/api/products/${productId}`)
      .send({ name: "Updated Product Name" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", "Updated Product Name");
  });

  // Test for deleting a product by ID
  it("should delete a product by ID", async () => {
    // Ensure a product ID is available from the previous tests
    expect(productId).toBeDefined();

    const res = await request(app).delete(`/api/products/${productId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Product deleted successfully");
  });
});
