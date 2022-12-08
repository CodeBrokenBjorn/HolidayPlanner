module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user",
    {
        Username: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        }, 
        // UserRating: {
        //     type: Sequelize.STRING
        // },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user'
    }
    );

    return User;
};
