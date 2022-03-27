const router = require('express').Router();

const {
    getAllPizza,
    getPizzaByID,
    createPizza,
    updatePizza,
    deletePizza,
    } = require('../../controllers/pizza-controller');




//set up get all and post at /api/pizza
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//set up get one, put, and delete at /api/pizza/:id
router
    .route('/:id')
    .get(getPizzaByID)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;