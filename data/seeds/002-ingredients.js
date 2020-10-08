exports.seed = function (knex) {
  const ingredients = [
    {
      name: "taco shell",
    },
    {
      name: "beef",
    },
    {
      name: "cheese",
    },
  ];
  return knex("ingredients").insert(ingredients);
};
