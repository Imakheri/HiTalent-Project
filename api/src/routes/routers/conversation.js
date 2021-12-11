const { Router } = require("express");
const router = Router();
const { Conversation } = require("../../db");
const { Op } = require("sequelize");

//Crear nueva conversacion
router.post("/", async (req, res, next) => {
  const { senderId, receiverId } = req.body;

  try {
    let newConversation = await Conversation.create({
      members: [senderId, receiverId],
    });
    res.json(newConversation);
  } catch (error) {
    next(error);
  }
});
//Obtener las conversaciones de un usuario
router.get("/:idUser", async (req, res, next) => {
  const { idUser } = req.params;
  try {
    const conversation = await Conversation.findAll({
      where: { members: { [Op.contains]: [idUser] } },
    });
    res.json(conversation);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
