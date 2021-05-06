module.exports = (sequelize, Sequelize) => {
  const Brand = sequelize.define("brand", {
    cName: {
      type: Sequelize.STRING
    },
    eName: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.STRING
    },
    promote: {
      type: Sequelize.BOOLEAN
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return Brand;
};