// 导入数据库配置文件
const dbConfig = require("../config/db.config.js");

// 引入Sequelize框架
const Sequelize = require("sequelize");
// 创建数据库连接
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 引入登录文件
db.logins = require("./login.model.js")(sequelize, Sequelize);
// 引入菜单文件
db.menus = require("./menu.model.js")(sequelize, Sequelize);
// 引入分类管理文件
db.classifieds = require("./classified.model.js")(sequelize, Sequelize);
// 引入品牌管理文件
db.brands = require("./brand.model.js")(sequelize, Sequelize);
// 引入参数管理文件
db.specifications = require("./specification.model.js")(sequelize, Sequelize);
// 引入商品管理文件
db.commoditys = require("./commodity.model.js")(sequelize, Sequelize);

module.exports = db;