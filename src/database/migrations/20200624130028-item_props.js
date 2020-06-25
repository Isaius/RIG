'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('item_props', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      item_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'items', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      prop_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'properties', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      return queryInterface.dropTable('item_props');
  }
};
