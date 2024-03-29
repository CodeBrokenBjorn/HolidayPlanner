const config = require("../config/config");
const BookPlan = require("././bookPlan");
const EventDater = require("././eventDater");
const Sequelize = require("Sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        port: config.PORT
    }
);
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize; 
db.bookPlan = BookPlan(sequelize, Sequelize);
db.eventDater = EventDater(sequelize, Sequelize, db.bookPlan);
// test('Connection check if server is functional as inteded', () =>
//     expect(
//     )
// )

module.exports = db;
    