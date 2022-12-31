// const useBook = require("./useBook");
module.exports = (sequelize, Sequelize) => {

    const Login = sequelize.define("login",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'id'
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }, 
        // UserRating: {
        //     type: Sequelize.STRING
        // },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'login'
    }
    );

    // Login.belongsTo(useBook,
    //     {foreignKey: 'useBook_id'});

    return Login;
};
