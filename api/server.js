const express = require("express");

const Tables = require("../tables/tables-model.js");
// .getAll(), .insert(newTable), .remove(id)
// where id = { id: id }

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/api/tables", (req, res) => {
    Tables.getAll()
        .then(tables => {
            res.status(200).json(tables);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.post("/api/tables", (req, res) => {
    return null;
});

server.delete("/api/tables", (req, res) => {
    return null;
});

module.exports = server;