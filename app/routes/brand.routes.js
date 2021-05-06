module.exports = app => {
  const brands = require("../controllers/brand.controller.js");

  var router = require("express").Router();

  // 创建新的品牌
  router.post("/", brands.create);

  // 查询所有的品牌
  router.get("/", brands.findAll);

  app.use('/brands', router);
};