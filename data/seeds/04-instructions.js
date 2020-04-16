
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, text: "Mix Flour and Sugar", recipe_id: 1},
        {step_number: 3, text: "Cook and flip", recipe_id: 1},
        {step_number: 2, text: "Combine dry mix with water", recipe_id: 1},
        {step_number: 1, text: "Open Package", recipe_id: 2},
        {step_number: 2, text: "Put in Toaster", recipe_id: 2},
        {step_number: 1, text: "Combine dry ingredients", recipe_id: 3},
        {step_number: 4, text: "Drink Water - It is important", recipe_id: 3},
        {step_number: 3, text: "fry chicken then add sause", recipe_id: 3},
        {step_number: 2, text: "rub on chicken", recipe_id: 3}
      ]);
    });
};
