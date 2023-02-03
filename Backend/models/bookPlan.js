// const location = require("./useBook");

module.exports = (sequelize, Sequelize) => {

    const BookPlan = sequelize.define("bookPlan",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'id',
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING
        }, 
        images: {
            type: Sequelize.BLOB
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'bookPlan'
    }
    );


    return BookPlan;
};
