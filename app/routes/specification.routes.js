module.exports = app => {
  const specifications = require("../controllers/specification.controller.js");

  var router = require("express").Router();

  // 创建新的参数
  router.post("/", specifications.create);

  // 查询所有的参数
  router.get("/", specifications.findAll);

  // 根据id删除参数
  router.delete("/:id", specifications.delete);

  app.use('/specifications', router);
};