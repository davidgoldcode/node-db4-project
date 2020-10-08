exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
      tbl.text("description").notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity_required");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists()
    .createTable("recipe_ingredients", (tbl) => {})
    .createTable("ingredients", (tbl) => {})
    .createTable("recipe", (tbl) => {});
};
