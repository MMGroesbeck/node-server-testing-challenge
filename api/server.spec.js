const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

describe("server", () => {
  describe("GET /api/tables", () => {
    beforeEach(async () => {
      await db("tables").truncate();
      await db("tables").insert({ name: "Skogsta", materials: "solid wood" });
      await db("tables").insert({
        name: "Lisabo",
        materials: "particleboard, fiberboard, plywood, veneer",
      });
    });
    it("should return status 200", function () {
      return request(server)
        .get("/api/tables")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("should return 2 items", function () {
      return request(server)
        .get("/api/tables")
        .then((res) => {
          expect(JSON.parse(res.text)).toHaveLength(2);
        });
    });
  });
  describe("POST /api/tables", () => {
    beforeAll(async () => {
      await db("tables").truncate();
    });
    it("should return status 201 on success", () => {
      return request(server)
        .post("/api/tables")
        .send({ name: "Skogsta", materials: "solid wood" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
    it("should return confirmation message", () => {
      return request(server)
        .post("/api/tables")
        .send({
          name: "Lisabo",
          materials: "particleboard, fiberboard, plywood, veneer",
        })
        .then((res) => {
          expect(res.body.message).toBe("Added to db.");
        });
    });
    it("should have added new items to database", () => {
      return request(server)
        .get("/api/tables")
        .then((res) => {
          expect(JSON.parse(res.text)).toHaveLength(2);
        });
    });
  });
  describe("DELETE /api/tables", () => {
    it.todo("should return status 204");
    it.todo("should remove item from database");
  });
});
