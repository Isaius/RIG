const { Model, DataTypes } = require('sequelize');

class Player extends Model{
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            level: DataTypes.INTEGER,
        }, {
            sequelize: connection,
        })
    }
}

module.exports = Player;