
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Pancakes', origin: 'Grandma', category: 'Breakfast'},
        { name: 'Poptarts', origin: 'The Store'},
        { name: 'Chicken Wings', origin: 'Mom', category: 'Dinner'}
      ]);
    });
};
