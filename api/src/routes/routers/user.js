const { Router } = require("express");
const { getLogIn } = require("../../controllers/userLogic");
const router = Router();

router.get('/', getLogIn);

module.exports = router;
