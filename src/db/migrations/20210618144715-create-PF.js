"use strict";
module.exports = {
  up:  (queryInterface, Sequelize) => {
 	return queryInterface.createTable("PF", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CPF: {
        type: Sequelize.STRING,
      },
      Nome: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      Telefone: {
        type: Sequelize.STRING,
      },
      Nascimento: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable("PF");
  },
};
