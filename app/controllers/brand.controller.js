const db = require("../models");
const Brand = db.brands;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: brands } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, brands, totalPages, currentPage };
};

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
  const { pagenum, pagesize, cName } = req.query;
  var condition = cName ? { cName: { [Op.like]: `%${cName}%` } } : null;

  const { limit, offset } = getPagination(pagenum, pagesize);

  Brand.findAndCountAll({ where: condition, limit, offset  })
      .then(data => {
        const response = getPagingData(data, pagenum-1, limit);
        res.send(response);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || "查不到"
        });
      });
};

// 修改品牌信息
exports.update = (req, res) => {
  const id = req.params.id;

  Brand.update(req.body, {
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

// 根据id查询品牌信息
exports.findOne = (req, res) => {
  const id = req.params.id;
  Brand.findByPk(id)
      .then(data => {
        res.json({ data: data });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// 删除分类
exports.delete = (req, res) => {
  const id = req.params.id;

  Brand.destroy({
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