const { Router } = require("express");
// Importar todos los routers;
const routerUser = require("./routers/user");
const routerPost=require("./routers/post")
const router = Router();

// Configurar los routers


router.use("/user", routerUser);
router.use("/post",routerPost)

module.exports = router;
