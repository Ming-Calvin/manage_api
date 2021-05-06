module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    name: {
      type: Sequelize.STRING
    },
    number: {
      type: Sequelize.DOUBLE
    },
    price: {
      type: Sequelize.DOUBLE
    },
    money: {
      type: Sequelize.DOUBLE
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return Order;
};