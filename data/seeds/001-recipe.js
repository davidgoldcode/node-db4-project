exports.seed = function (knex) {
  // Deletes ALL existing entries
  const recipes = [
    {
      name: "Beefy Taco",
      description: {
        1: "Get taco shell",
        2: "Put beef in it",
        3: "Eat while hot",
      },
    },
    {
      name: "Chicken Taco",
      description: {
        1: "Get tortilla",
        2: "Put chicken in it",
        3: "Eat at once",
      },
    },
    {
      name: "Fish Taco",
      description: {
        1: "Get big taco shell",
        2: "Put fish in it",
        3: "Eat it",
      },
    },
  ];
  return knex("recipe").insert(recipes);
};
