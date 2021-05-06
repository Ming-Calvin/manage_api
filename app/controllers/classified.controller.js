const db = require("../models");
const Classified = db.classifieds;
const Op = db.Sequelize.Op;

// 创建一个新的分类
exports.create = (req, res) => {
  // 验证接收到 request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // 创建一个新的分类
  const classified = {
    name: req.body.name,
    level: req.body.level,
    pid: req.body.pid,
    effective: req.body.effective ? req.body.effective : true
  };

  // 保存分类数据进数据库
  Classified.create(classified)
      // 成功后返回上传的数据
      .then(data => {
        res.send(data);
      })
      // 失败后报错
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "创建分类失败"
        });
      });
};

// 查询分类（传入分类名称时，可通过分类名称查询）
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Classified.findAll({ where: condition })
      // 查询成功返回数据
      .then(data => {
        res.json({ data: data });
      })
      // 查询不成功报错
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "查询出错"
        });
      });
};
