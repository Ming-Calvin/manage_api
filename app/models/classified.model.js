module.exports = (sequelize, Sequelize) => {
  const Classified = sequelize.define("classified", {
    name: {
      type: Sequelize.STRING
    },
    level: {
      type: Sequelize.INTEGER
    },
    pid: {
      type: Sequelize.INTEGER
    },
    effective: {
      type: Sequelize.BOOLEAN
    }
  });

  return Classified;
};