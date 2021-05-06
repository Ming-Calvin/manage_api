const db = require("../models");
const Commodity = db.commoditys;
const Op = db.Sequelize.Op;
const Brand = db.brands;

// 创建一个新的商品
exports.create = (req, res) => {
  // 验证接收到 request
  if (!req.body.name) {
    res.status(400).send({
      // 报错没接收到
      message: "Content can not be empty!"
    });
    return;
  }

  // 创建一个新的商品
  const commodity = {
    name: req.body.name,
    brand: req.body.brand,
    class: req.body.class,
    price: req.body.price,
    number: req.body.number,
    status: req.body.status ? req.body.status : false,
    sell: req.body.status ? req.body.status : false
  };

  // 将商品数据保存到数据库
  Commodity.create(commodity)
      // 成功后返回上传的数据
      .then(data => {
        res.json({ data: data });
      })
      // 失败后报错
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "创建用户失败"
        });
      });
};

// 检索所有商品
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Commodity.findAll({ where: condition })
      .then(data => {
        res.json({ data: data });
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// 检索所有品牌
exports.findBrand= (req, res) => {
  Brand.findAll()
      .then(data => {
        res.json({ data: data });
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving tutorials."
        });
      });
};