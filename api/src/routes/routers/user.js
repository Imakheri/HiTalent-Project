const { Router } = require("express");
const router = Router();
const { createUser, deleteUser, getUser, getLogIn } = require("../../controllers/userLogic");
const router = Router();

router.post("/", createUser);
router.delete("/", deleteUser);
router.get("/", getUser);
router.get('/', getLogIn);

module.exports = router;
