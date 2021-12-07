const { Router } = require("express");
const router = Router();
const {getUsers,getPosts}=require("../../controllers/adminLogic");

router.get("/user",getUsers)
router.get("/post",getPosts)


module.exports = router;