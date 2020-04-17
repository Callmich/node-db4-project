const express = require('express');

//Create Routers for recipies
const RecipieRouter = require('./recipes/recipes-router.js')

const server = express();

server.use(express.json());
server.use('/api/recipe', RecipieRouter)

module.exports = server;