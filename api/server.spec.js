const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

describe("server", () => {
    describe("GET /api/tables", () => {
        it("should return status 200", function() {
            return request(server)
                .get("/api/tables")
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
        it("should return 2 items", function() {
            return request(server)
                .get("/api/tables")
                .then(res => {
                    expect(JSON.parse(res.text)).toHaveLength(2);
                });
        });
    });
    describe("POST /api/tables", () => {
        beforeEach(async () => {
            await db("tables").truncate();
        })
        it.todo("should return status 201 on success");
        it.todo("should return confirmation message");
        it.todo("should add new item to database");
    });
    describe("DELETE /api/tables", () => {
        it.todo("should return status 204");
        it.todo("should remove item from database");
    });
});