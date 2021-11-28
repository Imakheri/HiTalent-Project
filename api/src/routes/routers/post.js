const { Router } = require("express");
const router = Router();
const {getPosts,updatePost,createPost, deletePost}=require("../../controllers/postLogic");
const { uploader } = require("../../middleware/uploader");

router.get("/",getPosts)
router.post("/",uploader.single("image"),createPost)
router.put("/",uploader.single("image"),updatePost)
router.delete("/",deletePost)




module.exports = router;