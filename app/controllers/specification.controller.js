const db = require("../models");
const Specification = db.specifications;
const Op = db.Sequelize.Op;

// 创建一个新的用户
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
  const specification = {
    name: req.body.name,
    pid: req.body.pid,
    level: req.body.level,
    enable: req.body.enable ? req.body.enable : false
  };

  // 将用户数据保存到数据库
  Specification.create(specification)
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

// 查询参数列表
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Specification.findAll({ where: condition })
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

// 根据id删除
exports.delete = (req, res) => {
  const id = req.params.id;

  Specification.destroy({
    where: { id: id }
  })
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