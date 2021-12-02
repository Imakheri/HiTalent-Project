const { Router } = require("express");
// Importar todos los routers;
const routerUser = require("./routers/user");
const routerPost=require("./routers/post")
const routerCategories=require("./routers/categories")
const routerReviews=require("./routers/review")
const router = Router();

// Configurar los routers


router.use("/user", routerUser);
router.use("/post",routerPost)
router.use("/categories",routerCategories)
router.use("/review",routerReviews)


module.exports = router;
