module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        key: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
    User.associate = (db) => {
        db.User.hasMany(db.Url);
    }
    return User;
}