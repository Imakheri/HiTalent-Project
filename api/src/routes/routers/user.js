const { Router } = require("express");
const router = Router();
const { createUser, deleteUser, getUser, getLogIn,editUser } = require("../../controllers/userLogic");
const router = Router();
const { uploader } = require("../../middleware/uploader");

router.post("/",uploader.single("image"),createUser);
router.delete("/", deleteUser);
router.get("/", getUser);
router.get('/', getLogIn);
router.put("/",uploader.single("image"),editUser)

module.exports = router;
