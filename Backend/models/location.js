// const location = require("./useBook");

module.exports = (sequelize, Sequelize) => {

    const Location = sequelize.define("location",
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
        HolLocation: {
            type: Sequelize.STRING
        }, 
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'location'
    }
    );

    // Login.belongsTo(useBook,
    //     {foreignKey: 'useBook_id'});

    return Location;
};
