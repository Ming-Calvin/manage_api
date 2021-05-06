const db = require("../models");
const Brand = db.brands;
const Op = db.Sequelize.Op;

// 创建一个新的品牌
exports.create = (req, res) => {
  // 验证接收到 request
  if (!req.body.cName) {
    res.status(400).send({
      // 报错没接收到
      message: "Content can not be empty!"
    });
    return;
  }

  // 创建一个新的品牌
  const brand = {
    cName: req.body.cName,
    eName: req.body.eName,
    logo: req.body.logo,
    promote: req.body.promote ? req.body.promote : false,
    status: req.body.status ? req.body.status : false,
  };

  // 将品牌数据保存到数据库
  Brand.create(brand)
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
  const cName = req.query.cName;
  var condition = cName ? { cName: { [Op.like]: `%${cName}%` } } : null;

  Brand.findAll({ where: condition })
      .then(data => {
        res.json({ data: data });
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "查不到"
        });
      });
};