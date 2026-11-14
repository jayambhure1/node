const request = require("supertest");
const app = require("./app");

describe("POST /post-requests", () => {
  it("should reject empty request bodies", async () => {
    const response = await request(app)
      .post("/apis/sample/post-requests")
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.status).toBe("error");
    expect(response.body.message).toBe("Request body is required");
  });

  it("should accept a valid request body", async () => {
    const payload = { name: "John Doe", email: "john@example.com" };

    const response = await request(app)
      .post("/apis/sample/post-requests")
      .send(payload);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.data).toEqual(payload);
  });
});
