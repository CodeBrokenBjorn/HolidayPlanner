module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user",
    {
        UserName: {
            type: Sequelize.STRING
        },
        UserPassWord: {
            type: Sequelize.STRING
        }, 
        UserRating: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user'
    }
    );

    return User;
};
