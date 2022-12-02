const config = require("../config/config");
const User = require("././user");

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
db.user = User(sequelize, Sequelize);
// test('Connection check if server is functional as inteded', () =>
//     expect(
//     )
// )

module.exports = db;
    