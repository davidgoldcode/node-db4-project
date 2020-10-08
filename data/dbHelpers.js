const db = require("./db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients AS r")
    .join("ingredients.id", "r.recipe_id")
    .select("r.quantity_required", "ingredients.name")
    .where("recipe_id", "=", recipe_id);
}

function getInstructions(recipe_id) {
  return db("recipe.description").where("id", "=", recipe_id);
}
