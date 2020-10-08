exports.seed = function (knex) {
  const recipeIngredients = [
    {
      recipe_id: 1,
      ingredients_id: 1,
      quantity_required: 3,
    },
    {
      recipe_id: 2,
      ingredients_id: 2,
      quantity_required: 7,
    },
    {
      recipe_id: 3,
      ingredients_id: 3,
      quantity_required: 1,
    },
  ];
  return knex("recipe_ingredients").insert(recipeIngredients);
};
