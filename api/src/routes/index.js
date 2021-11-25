const { Router } = require("express");
// Importar todos los routers;
const routerUser = require("./routers/user");

const router = Router();

// Configurar los routers


router.use("/user", routerUser);


module.exports = router;
