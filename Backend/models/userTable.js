module.exports = (sequelize, Sequelize) => {

    const userTable = sequelize.define("cards",
    {
        title: {
            type: Sequelize.STRING
        },
        body: {
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
    

    return userTable;
};
