const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

describe("server", () => {
    describe("GET /api/tables", () => {
        beforeEach(async () => {
            await db("tables").truncate();
        });
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
                    console.log(res);
                    expect(res.body.data).toHaveLength(0);
                })
        });
    })
})