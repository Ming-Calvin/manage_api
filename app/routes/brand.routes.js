module.exports = app => {
  const brands = require("../controllers/brand.controller.js");

  var router = require("express").Router();

  // 创建新的品牌
  router.post("/", brands.create);

  // 查询所有的品牌
  router.get("/", brands.findAll);

  // 修改状态
  router.put("/:id", brands.update);

  // 根据id查找品牌信息
  router.get("/:id", brands.findOne);

  // 删除品牌
  router.delete("/:id", brands.delete);

  app.use('/brands', router);
};