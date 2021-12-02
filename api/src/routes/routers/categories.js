const { Router } = require("express");
const router = Router();
const {getCategories}=require("../../controllers/categoriesLogic");

router.get("/",getCategories)

module.exports = router;