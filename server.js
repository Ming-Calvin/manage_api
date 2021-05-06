const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 引入模型文件
const db = require("./app/models");
db.sequelize.sync();

// 删除现有表并重新同步数据库
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// 引入用户路由
require("./app/routes/login.routes")(app);
// 引入菜单路由
require("./app/routes/menu.routes")(app);
// 引入分类管理路由
require("./app/routes/classified.routes")(app);
// 引入品牌管理路由
require("./app/routes/brand.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});