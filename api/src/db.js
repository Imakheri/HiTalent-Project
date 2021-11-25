require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/talents`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Users,
  Posts,
  Categories,
  Orders,
  Orden_detail,
  Payments,
  Reviews,
  Favorites,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Users.hasMany(Posts, { foreignKey: "user_id" }); // un usuario tiene muchos posts
Posts.belongsTo(Users, { foreignKey: "user_id" }); // un post pertenece a un unico usuario (quien CREA el post)

Categories.hasMany(Posts, { foreignKey: "category_id" }); // una categoria esta en muchas publicaciones
Posts.belongsTo(Categories, { foreignKey: "category_id" }); // una publicacion puede tener una unica categoria

Users.hasMany(Orders, { foreignKey: "user_id" });
Orders.belongsTo(Users, { foreignKey: "user_id" });

Orders.hasOne(Orden_detail, { foreignKey: "orden_detail_id" });
Orden_detail.belongsTo(Orders, { foreignKey: "orden_detail_id" });

Orders.hasMany(Payments, { foreignKey: "payment_id" });
Payments.belongsTo(Orders, { foreignKey: "payment_id" });

Orden_detail.hasMany(Posts, { foreignKey: "post_id" });
Posts.belongsTo(Orden_detail, { foreignKey: "post_id" });

//review

Users.hasMany(Reviews, { foreignKey: "user_id" });
Reviews.belongsTo(Users, { foreignKey: "user_id" });

Posts.hasMany(Reviews, { foreignKey: "post_id", constraints: false });
Reviews.belongsTo(Posts, { foreignKey: "post_id", constraints: false });

//favorite

Users.hasMany(Favorites, { foreignKey: "user_id" });
Favorites.belongsTo(Users, { foreignKey: "user_id" });

Posts.belongsTo(Favorites, { foreignKey: "post_id" });
Favorites.hasMany(Posts, { foreignKey: "post_id" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
