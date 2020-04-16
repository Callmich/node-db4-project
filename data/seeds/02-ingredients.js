
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'flour', calories: 50},
        {name: 'water', calories: 0},
        {name: 'sugar', calories: 100},
        {name: 'PopTarts'},
        {name: 'Chicken', calories: 200},
        {name: 'sause', calories: 50}
      ]);
    });
};
