
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tables").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tables").insert([
        {id: 1, name: "Skogsta", materials: "solid wood"},
        {id: 2, name: "Lisabo", materials: "particleboard, fiberboard, plywood, veneer"}
      ]);
    });
};
