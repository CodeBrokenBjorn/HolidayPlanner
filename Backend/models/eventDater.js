

module.exports = (sequelize, Sequelize, bookPlan) => {

    const EventDater = sequelize.define("eventDater",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'id',

        },
        Destination: {
            type: Sequelize.STRING
        },
        StartDate: {
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
    EventDater.belongsTo(bookPlan, 
        {foreignKey: `bookPlan_id`});



        
    return EventDater;
};
