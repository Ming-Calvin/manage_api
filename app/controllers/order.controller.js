const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;

// 创建一个新的订单
exports.create = (req, res) => {
  // 验证接收到 request
  if (!req.body.name) {
    res.status(400).send({
      // 报错没接收到
      message: "Content can not be empty!"
    });
    return;
  }

  // 创建一个新的用户
  const order = {
    name: req.body.name,
    number: req.body.number,
    price: req.body.price,
    money: req.body.money,
    status: req.body.status ? req.body.status : false
  };

  // 将用户数据保存到数据库
  Order.create(order)
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

exports.findAll = (req, res) => {
  Order.findAll()
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

// 修改品牌信息
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id: id }
  })
      // 成功则返回查询到的信息
      .then(data => {
        res.json({ message: '修改成功'});
      })
      // 失败则不返回
      .catch(err => {
        res.status(500).send({});
      });

};

// 删除分类
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({
    where: { id: id }
  })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "删除成功"
          });
        } else {
          res.send({
            message: "删除失败，没找到对应id"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "不能删除id为" + id + "的数据"
        });
      });
};

exports.findAllOrderTrue = (req, res) => {
  Order.findAll({ where: { status: false } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "Some error occurred while retrieving tutorials."
        });
      });
};