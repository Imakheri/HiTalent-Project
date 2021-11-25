const { Router } = require("express");
const { createUser } = require("../../controllers/userLogic");

const router = Router();

router.post("/", createUser);

module.exports = router;
