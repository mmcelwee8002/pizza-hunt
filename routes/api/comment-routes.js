const router = require('express').Router();
const { addComment, removeComment }= require('../../controllers/comment-controller') ;

// /api/comments/<pizzaID>

router.route('/:pizzaId').post(addComment);

// /api/comments/<commentId>

router.route('/:pizzaId/:commentId').delete(removeComment);






module.exports = router;