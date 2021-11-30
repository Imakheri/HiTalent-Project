const { Router } = require("express");
const router = Router();
const {
  createUser,
  deleteUser,
  getUser,
  getLogIn,
  editUser,
  confirm,
  emailResetPassword,
  editPassword,
} = require("../../controllers/userLogic");
const { uploader } = require("../../middleware/uploader");

router.post("/", uploader.single("image"), createUser);
router.delete("/", deleteUser);
router.get("/", getUser);
router.get("/", getLogIn);
router.put("/", uploader.single("image"), editUser);
router.get("/confirm/:token", confirm);
router.post("/emailResetPassword", emailResetPassword);
router.put("/editPassword", editPassword);

module.exports = router;
