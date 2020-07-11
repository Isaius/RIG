const { Model, DataTypes } = require('sequelize');

class Item extends Model{
    static init(connection) {
        super.init({
            type: DataTypes.STRING,
            subtype: DataTypes.STRING,
            quality: DataTypes.INTEGER,
            name: DataTypes.STRING,
            level: DataTypes.INTEGER,
            atk: DataTypes.INTEGER,
            def: DataTypes.INTEGER,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Player, { foreignKey: 'owner_id', as: 'owner' });
        this.belongsToMany(models.Propertie, { foreignKey: 'item_id', through: 'item_props' });
    }
}

module.exports = Item;