module.exports = app => {
  const menus = require("../controllers/menu.controller.js");

  const router = require("express").Router();

  // 创建菜单
  router.post("/", menus.create);

  // 查询所有的菜单
  router.get("/", menus.findAll);

  app.use('/menus', router);
};