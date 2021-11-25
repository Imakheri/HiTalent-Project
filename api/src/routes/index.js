const { Router } = require("express");
// Importar todos los routers;
const signIn = require("./SignIn");
const signUp = require("./SignUp");

const router = Router();

// Configurar los routers
router.use("/signIn", signIn);
router.use("/signUp", signUp);

module.exports = router;
