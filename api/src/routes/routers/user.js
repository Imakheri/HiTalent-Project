const { Router } = require("express");
const { createUser,deleteUser,getUser } = require("../../controllers/userLogic");

const router = Router();

router.post("/", createUser);
router.delete("/",deleteUser);
router.get("/",getUser)
module.exports = router;
