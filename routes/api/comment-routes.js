const router = require('express').Router();

//import the comment routes 
const {
    addComment,
    removeComment,
  } = require('../../controllers/comment-controller');



  // Set up POST at /api/comments/:pizzaId
router
.route('/:pizzaId')
.post(addComment);

  // Set up DELETE at /api/comments/:pizzaId/:commentId
  router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);
  

  // export router
  module.exports = router