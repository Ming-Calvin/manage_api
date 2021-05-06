module.exports = (sequelize, Sequelize) => {
  const Specification = sequelize.define("specification", {
    name: {
      type: Sequelize.STRING
    },
    pid: {
      type: Sequelize.INTEGER
    },
    level: {
      type: Sequelize.INTEGER
    },
    enable: {
      type: Sequelize.BOOLEAN
    }
  });

  return Specification;
};