
exports.up = function(knex) {
  return(knex.schema
    .createTable('recipes', recipes => {
        recipes.increments('id');
        recipes.string('name', 64)
          .unique()
          .notNullable();
        recipes.string('origin', 64);
        recipes.string('category', 32);
    })
    .createTable('ingredients', ingred =>{
        ingred.increments('id');
        ingred.string('name', 32)
          .unique()
          .notNullable();
        ingred.integer('calories');
    })
    .createTable('recipe_ingredients', recIng =>{
        recIng.increments('id');
        recIng.float('quantity');
        recIng.integer('recipe_id')
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        recIng.integer('ingredient_id')
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    })
    .createTable('instructions', instruc =>{
        instruc.increments('id');
        instruc.integer('step_number')
         .notNullable();
        instruc.string('text', 255)
          .notNullable();
        instruc.integer('recipe_id')
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    })
  )
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
