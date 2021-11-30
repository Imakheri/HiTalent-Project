const { Router } = require("express");
const {
  createReview,
  deleteReview,
  updateReview,
  getAllReviews,
  getPostReview,
} = require("../../controllers/reviewLogic");
const router = Router();

router.post("/", createReview);
router.delete("/:idReview", deleteReview);
router.put("/:idReview", updateReview);
router.get("/", getAllReviews);
router.get("/:idPost", getPostReview);

module.exports = router;
