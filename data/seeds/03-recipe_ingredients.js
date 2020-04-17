
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {quantity: 3.6, recipe_id: 1, ingredient_id: 1},
        {quantity: 5.78, recipe_id: 1, ingredient_id: 2},
        {quantity: .6, recipe_id: 1, ingredient_id: 3},
        {quantity: 1, recipe_id: 2, ingredient_id: 4},
        {quantity: 6, recipe_id: 3, ingredient_id: 5},
        {quantity: 2.1, recipe_id: 3, ingredient_id: 6},
        {quantity: .9, recipe_id: 3, ingredient_id: 3},
        {quantity: .65, recipe_id: 3, ingredient_id: 1},
        {quantity: 2.6, recipe_id: 3, ingredient_id: 2},
      ]);
    });
};
