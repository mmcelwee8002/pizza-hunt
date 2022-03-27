const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizza` to routes in 'pizza-routes.js'

router.use('/pizzas', pizzaRoutes);


module.exports =router;