// const location = require("./useBook");

module.exports = (sequelize, Sequelize) => {

    const BookPlan = sequelize.define("location",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'id'
        },
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING
        }, 
        location: {
            type: Sequelize.STRING
        }, 
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'bookPlan'
    }
    );

    // Login.belongsTo(useBook,
    //     {foreignKey: 'useBook_id'});

    return BookPlan;
};
