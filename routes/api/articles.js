const router = require("express").Router();
const ArticleController = require("../../controllers/ArticleController");

// Matches with "/api/article"
router.route("/")
  .get(ArticleController.findAll)
  .post(ArticleController.create);

// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(ArticleController.findById)
  .put(ArticleController.update)
  .delete(ArticleController.remove);

module.exports = router;
