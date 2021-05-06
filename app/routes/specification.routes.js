module.exports = app => {
  const specifications = require("../controllers/specification.controller.js");

  var router = require("express").Router();

  // 创建新的参数
  router.post("/", specifications.create);

  // 查询所有的参数
  router.get("/", specifications.findAll);

  app.use('/specifications', router);
};