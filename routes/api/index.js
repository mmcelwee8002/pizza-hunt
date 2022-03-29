const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizza` to routes in 'pizza-routes.js'

router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports =router;
