const db = require("../models");
const Menu = db.menus;
const Op = db.Sequelize.Op;

// 创建菜单
exports.create = (req, res) => {
  // 创建一个新的用户
  const menu = {
    name: req.body.name,
    path: req.body.path,
  };

  // 将用户数据保存到数据库
  Menu.create(menu)
      // 成功后返回上传的数据
      .then(data => {
        res.json({ data: data });
      })
      // 失败后报错
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "创建菜单失败"
        });
      });
};

// 提供菜单列表
exports.findAll = (req, res) => {
  // 无查询谈条件
  Menu.findAll()
      .then(data => {
        res.json({ data: data });
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "查询不到菜单"
        });
      });
};