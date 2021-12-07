const { Router } = require("express");
const router = Router();
const {getAll, aprobar}=require("../../controllers/adminLogic");

router.get("/",getAll)
router.put("/",aprobar)

module.exports = router;