module.exports = app => {
  const classifieds = require("../controllers/classified.controller.js");

  var router = require("express").Router();

  // 创建一个新的分类
  router.post("/", classifieds.create);

  // 查询分类
  router.get("/", classifieds.findAll);

  app.use('/classifieds', router);
};