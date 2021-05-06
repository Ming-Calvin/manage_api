module.exports = app => {
  const orders = require("../controllers/order.controller.js");

  var router = require("express").Router();

  // 创建新的XX
  router.post("/", orders.create);

  // 查询所有的XX
  router.get("/", orders.findAll);

  app.use('/orders', router);
};