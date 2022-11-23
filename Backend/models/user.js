module.exports = (Sequelize, sequelize) => {
    const user = sequelize.define("user",
    {
        userName: {
            type: Sequelize.STRING
        },
        passWord: {
            type: Sequelize.VARCHAR
        }, 
        //To do this latter <======|||U poop |||-------------<<<<<< 
        // passWord: {
        //     type: Sequelize.VARCHAR
        // },
        // passWord: {
        //     type: Sequelize.VARCHAR
        // },
    },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'user'
        }
    );
    return user;
}
