module.exports = app => {
  const classifieds = require("../controllers/classified.controller.js");

  var router = require("express").Router();

  // 创建一个新的分类
  router.post("/", classifieds.create);

  // 查询分类
  router.get("/", classifieds.findAll);

  // 删除分类
  router.delete("/:id", classifieds.delete);

  // 修改分类
  router.put("/:id", classifieds.update);

  // 根据id查找分类信息
  router.get("/:id", classifieds.findOne);

  app.use('/classifieds', router);
};