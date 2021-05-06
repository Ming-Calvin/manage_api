module.exports = (sequelize, Sequelize) => {
  const Commodity = sequelize.define("commodity", {
    name: {
      type: Sequelize.STRING
    },
    brand: {
      type: Sequelize.STRING
    },
    class: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DOUBLE
    },
    number: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.BOOLEAN
    },
    sell: {
      type: Sequelize.BOOLEAN
    }
  });

  return Commodity;
};