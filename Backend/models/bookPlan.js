// const location = require("./useBook");

module.exports = (sequelize, Sequelize) => {

    const BookPlan = sequelize.define("bookPlan",
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
