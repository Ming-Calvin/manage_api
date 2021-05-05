const db = require("../models");
const Login = db.logins;
const Op = db.Sequelize.Op;

// 创建一个新的用户
exports.create = (req, res) => {
  // 验证接收到 request
  if (!req.body.username) {
    res.status(400).send({
      // 报错没接收到
      message: "Content can not be empty!"
    });
    return;
  }

  // 创建一个新的用户
  const login = {
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
  };

  // 将用户数据保存到数据库
  Login.create(login)
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

// 根据username查找用户
exports.findAll = (req, res) => {
  const username = req.query.username;

  // 判断条件（准确判断）
  const condition = { username: { [Op.like]: username } };

  Login.findAll({ where: condition })
      // 成功则返回查询到的信息
      .then(data => {
        res.json({ data: data });
      })
      // 失败则不返回
      .catch(err => {
        res.status(500).send({});
      });
};
