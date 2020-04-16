const express = require('express');

//Create Routers for recipies
const RecipieRouter = require('')

const server = express();

server.use(express.json());
server.use('/api/recipies', RecipieRouter)

module.exports = server;