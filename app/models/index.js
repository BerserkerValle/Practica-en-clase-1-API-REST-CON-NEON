// Cargamos el archivo de configuración con los datos de conexión a la base de datos
const dbConfig = require("../config/db.config.js/db.config.js");

// Importamos Sequelize, el ORM que nos permite trabajar con PostgreSQL como objetos JS
const Sequelize = require("sequelize");

const sequelizeOptions = {
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: dbConfig.ssl
  },
  pool: dbConfig.pool
};

const sequelize = dbConfig.DATABASE_URL
  ? new Sequelize(dbConfig.DATABASE_URL, sequelizeOptions)
  : new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      ...sequelizeOptions
    });

// Objeto db que exportaremos para acceder a Sequelize y los modelos desde el resto del proyecto
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Registramos el modelo de cliente en el objeto db
// aqui tambien se registra el usario por medio del modelo 
db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.clientes = require("./cliente.model.js")(sequelize, Sequelize);

// Aquí puedes seguir registrando otros modelos de forma similar
// Ejemplo: db.productos = require("./producto.model.js")(sequelize, Sequelize);

module.exports = db;