// const location = require("./useBook");

module.exports = (sequelize, Sequelize) => {

    const BookPlan = sequelize.define("bookPlan",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'bookPlan_id'
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
