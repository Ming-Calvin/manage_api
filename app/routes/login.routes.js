module.exports = app => {
  const logins = require("../controllers/login.controller.js");

  var router = require("express").Router();

  // 创建一个新的用户
  router.post("/", logins.create);

  // 根据用户名查找用户
  router.get("/", logins.findAll);

  app.use('/logins', router);
};