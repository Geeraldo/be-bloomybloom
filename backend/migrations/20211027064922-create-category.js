"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.createTable("Category", {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   category: {
    //     type: Sequelize.STRING,
    //   },
    // });
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.dropTable("Category");
  },
};
