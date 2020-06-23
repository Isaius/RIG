'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      owner_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'players', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      type:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtype:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      quality:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      level:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      atk:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      def:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      prop:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('items');
  }
};
