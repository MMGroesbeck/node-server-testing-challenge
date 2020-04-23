const db = require('../data/dbConfig.js');

module.exports = {
    getAll,
    insert,
    remove
}

async function getAll(){
    return db("tables");
};

async function insert(newTable) {
    const [id] = await db("tables")
        .insert(newTable, "id");
    return findById(id);
};

function findById(id) {
    return db("tables")
        .where({ id })
        .first();
}

async function remove(id) {
    return db("tables")
        .where({ id })
        .del();
};