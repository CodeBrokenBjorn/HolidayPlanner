module.exports = (sequelize, Sequelize) => {

    const UseBook = sequelize.define("useBook",
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
        // UserRating: {
        //     type: Sequelize.STRING
        // },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'useBook'
    }
    );
    

    return UseBook;
};
