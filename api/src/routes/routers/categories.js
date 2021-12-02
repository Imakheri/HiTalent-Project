const { Router } = require("express");
const router = Router();
const {getCategories,updateCategories,createCategories, deleteCategories}=require("../../controllers/categoriesLogic");


router.get("/",getCategories)
router.post("/",createCategories)
router.put("/",updateCategories)
router.delete("/",deleteCategories)




module.exports = router;