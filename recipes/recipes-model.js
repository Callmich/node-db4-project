//need to aim the database here
const dB = require('../data/db-config.js')

module.exports = {
    //list of helper functions
    getRecipes,
    getShoppingList,
    getInstructions
}

//helper functions go here

function getRecipes(){
    return dB('recipes')
}

function getShoppingList(recipe_id){
    return dB('recipe_ingredients as ri')
      .where({recipe_id})
      .join('recipes as r', 'ri.recipe_id', 'r.id')
      .join('ingredients as i', 'ri.ingredient_id', 'i.id')
      .select('r.name as Recipe_Name', 'i.name as Ingredient_Name', 'ri.quantity as Amount_Needed')
}

function getInstructions(recipe_id){

}

