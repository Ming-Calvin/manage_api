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

// 删除分类
exports.delete = (req, res) => {
  const id = req.params.id;

  Classified.destroy({
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

// 修改分类
exports.update = (req, res) => {
  const id = req.params.id;

  Classified.update(req.body, {
    where: { id: id }
  })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "更新分类成功."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// 根据id查询分类信息
exports.findOne = (req, res) => {
  const id = req.params.id;
  Classified.findByPk(id)
      .then(data => {
        res.json({ data: data });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};