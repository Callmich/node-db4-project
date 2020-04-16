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









module.exports = router;