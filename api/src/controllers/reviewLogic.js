const { Review, Users, Posts } = require("../db");

async function createReview(req, res, next) {
  let { rating, description, user_id, post_id } = req.body;
  try {
    let newReview = await Review.create({
      rating,
      description,
    });
    let userId = Users.findByPk(user_id);
    let postId = Posts.findByPk(post_id);
    newReview.setUser(userId);
    newReview.setPost(postId);
    res.json(newReview);
  } catch (err) {
    next(err);
  }
}

async function deleteReview(req, res) {
  let { idReview } = req.params;
  try {
    Review.destroy({
      where: {
        id: idReview,
      },
    });
    res.status(200).send("Review eliminado");
  } catch (err) {
    next(err);
  }
}

async function updateReview(req, res, next) {
  let { idReview } = req.params;
  let { rating, description } = req.body;
  try {
    let review = await Review.findByPk(idReview);
    if (rating) review.rating = rating;
    if (description) review.description = description;
    review.save();
    res.json(review);
  } catch (err) {
    next(err);
  }
}

async function getAllReviews(req, res, next) {
  if(req.query.filter)
  try {
    let allReviews = await Review.findAll({
      where: {
        rating: req.query.filter
      },
      attributes: { exclude: ["user_id", "post_id", "updatedAt"] },
      order: [['createdAt', req.query.order]],
      include: [
        {
          model: Users,
          attributes: ["id", "username", "name", "fullName", "lastName"],
          //order: [['score', 'DESC'], ['createdAt', 'DESC'], ['username', 'ASC']]
        },
        {
          model: Posts,
          attributes: ["id", "title"],
          order: [['createdAt', 'DESC']]
        },
      ],
    });
    res.json(allReviews);
  } catch (err) {
    next(err);
  }
}

async function getPostReview(req, res, next) {
  // el id es el del POST,
  let { idPost } = req.params;
  if (idPost && idPost.length === 36) {
    // 36 es la length del UUID
    try {
      let foundPost = await Posts.findOne({
        where: {
          id: idPost,
        },
        attributes: ["id"],
        include: [
          {
            model: Review,
            attributes: ["rating", "description"],
            order: [['createdAt', 'DESC']]
          },
        ],
      });
      if (foundPost) res.json(foundPost);
      else
        throw new Error(
          "ERROR 500: La publicación no fue encontrada en la base de datos (UUID no existe)."
        );
    } catch (err) {
      next(err);
    }
  }
  if (idPost && idPost.length !== 36) {
    try {
      throw new TypeError(
        "ERROR 404: ID inválido (ID no es un tipo UUID válido)."
      ); // automaticamente rechaza un error, sin buscar por la DB
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  createReview,
  deleteReview,
  updateReview,
  getAllReviews,
  getPostReview,
};
