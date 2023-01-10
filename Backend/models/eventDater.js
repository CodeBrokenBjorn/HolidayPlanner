module.exports = (sequelize, Sequelize) => {

    const EventDater = sequelize.define("eventDater",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'id'
        },
        Destination: {
            type: Sequelize.STRING
        },
        Date: {
            type: Sequelize.DATE
        },
        EndDate: {
            type: Sequelize.DATE
        },
        Amount: {
            type: Sequelize.INTEGER
        }, 
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'eventDater'
    }
    );

    // Login.belongsTo(useBook,
    //     {foreignKey: 'useBook_id'});

    return EventDater;
};
