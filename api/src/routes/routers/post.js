const { Router } = require("express");
const router = Router();
const {getPosts,updatePost,createPost, deletePost, addImage, deleteImage}=require("../../controllers/postLogic");
const { uploader } = require("../../middleware/uploader");

router.get("/",getPosts)
router.post("/",uploader.single("image"),createPost)
router.put("/",updatePost)
router.delete("/",deletePost)
router.put("/image",uploader.single("image"),addImage)
router.delete("/image",deleteImage)


module.exports = router;