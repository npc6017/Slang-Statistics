module.exports = (sequelize, DataTypes) => {
    const Slang = sequelize.define('Slang', {
        slang: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Slang.associate = (db) => {
        db.Slang.belongsTo(db.Url);
    }
    return Slang;
}