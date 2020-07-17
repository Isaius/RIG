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

    static associate(models) {
        this.hasMany(models.Item, { foreignKey: 'owner_id', as: 'items' });
    }
}

module.exports = Player;