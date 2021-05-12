module.exports = app => {
  const orders = require("../controllers/order.controller.js");

  var router = require("express").Router();

  // 创建新的XX
  router.post("/", orders.create);

  // 查询所有的XX
  router.get("/", orders.findAll);

  // 修改状态
  router.put("/:id", orders.update);

  // 删除品牌
  router.delete("/:id", orders.delete);

  // 查询所有的XX
  router.get("/", orders.findAll);

  // 查询所有的XX
  router.get("/ordertrue", orders.findAllOrderTrue);

  app.use('/orders', router);
};