const config = require("../config/config");
const User = require("././user");

const Sequelize = require("sequelize");
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
    db.User = User(sequelize, Sequelize);
    module.exports = db;
    