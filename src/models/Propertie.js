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
}

module.exports = Propertie;