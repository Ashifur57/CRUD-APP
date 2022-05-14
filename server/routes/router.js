const express = require('express');
const route = express.Router();

const services = require('../services/render');

//Home page route
route.get('/', services.homeRoutes);

//Add user page route
route.get('/add-user',services.add_user)

//Update user page route
route.get('/update-user',services.update_user)

module.exports = route