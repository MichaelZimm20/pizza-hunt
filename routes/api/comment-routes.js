const router = require('express').Router();

//import the comment routes 
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');



  // Set up POST at /api/comments/:pizzaId
router
.route('/:pizzaId')
.post(addComment);

  // Set up DELETE at /api/comments/:pizzaId/:commentId
  router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);
  

    // Set up PUT at /api/comments/:pizzaId/:commentId
    router
    .route('/:pizzaId/:commentId')
    .put(addReply)
  

    router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

  // export router
  module.exports = router