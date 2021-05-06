module.exports = app => {
  const commoditys = require("../controllers/commodity.controller.js");

  var router = require("express").Router();

  // 创建新的商品
  router.post("/", commoditys.create);

  // 查询所有的商品
  router.get("/", commoditys.findAll);

  // 查询所有的品牌
  router.get("/brands", commoditys.findBrand);

  app.use('/commoditys', router);
};