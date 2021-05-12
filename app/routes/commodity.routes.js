module.exports = app => {
  const commoditys = require("../controllers/commodity.controller.js");

  var router = require("express").Router();

  // 创建新的商品
  router.post("/", commoditys.create);

  // 查询所有的商品
  router.get("/", commoditys.findAll);

  // 查询所有的品牌
  router.get("/brands", commoditys.findBrand);

  // 根据id删除参数
  router.delete("/:id", commoditys.delete);

  // 修改状态
  router.put("/:id", commoditys.update);

  app.use('/commoditys', router);
};