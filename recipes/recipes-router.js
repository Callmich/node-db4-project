const express = require('express');

const Recipes = require('./recipes-model.js')

const router = express.Router();

//CRUD actions go here they will start with /api/recipe

router.get('/', (req, res)=>{
    Recipes.getRecipes()
        .then(recs =>{
            res.status(200).json(recs)
        })
        .catch(err =>{
            res.status(500).json({message: 'Failed to get Recipies from server'})
        })
})

router.get('/:id/ingredients', (req, res)=>{
    const id = req.params.id
    Recipes.getShoppingList(id)
        .then(list =>{
            res.status(200).json(list)
        })
        .catch(err =>{
            res.status(500).json({message: 'Failed to get Ingredients from server'})
        })
})









module.exports = router;