module.exports = (sequelize, DataTypes) => {
    const Url = sequelize.define('Url',{
        url: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Url.associate = (db) => {
        db.Url.hasMany(db.Slang);
        db.Url.belongsTo(db.User);
    }
    return Url;
}