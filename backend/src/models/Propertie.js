const { Model, DataTypes } = require('sequelize');

class Propertie extends Model{
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            rarity: DataTypes.INTEGER,
        }, {
            sequelize: connection,
        })
    }
    static associate(models) {
        this.belongsToMany(models.Item, { foreignKey: 'prop_id', through: 'item_props' });
    }
}

module.exports = Propertie;