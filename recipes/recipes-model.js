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

}

function getInstructions(recipe_id){

}

