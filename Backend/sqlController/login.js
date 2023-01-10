const router = require('../routes/login'); 
const utilities = require('../utilities/utility');
const db = require('../models');
const express = require('express');
const login = require('../models/login');
const Login = db.login; 


getAll = async (req, res) => {
    const login = await Login.findAll();
    res.status(200).json(login);
}
getByUserName = async (req, res)=> {

    const Username = req.params.value;
    try{
        const login = await Login.findAll(
            {where:  { Username: Username}});
        if(login.length== 0){
            throw new Error("The Iteam Username has not been found Error");
        }
        res.status(200).json(login);
        

    } 
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message);
    }

}
getByPassWord = async(req, res) => {
    const Password = req.params.value;
    try{
        const login = await Login.findAll(
            {where: {Password: Password}});
        if(login.length == 0){
            throw new Error("Unable to detect specific value");

        }
        res.status(200).json(login);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

getById = async (req, res) => {
    const id = req.params.id;
    try{
        const login = await Login.findByPk(id);
        if(login = null || login.length ==0){
            throw new Error("Error you can't find Users ID" + id);

        }
        res.status(200).json(login);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);

    }
}
// test('Connection check if server is functional as inteded', () =>
//     expect()
// )
create = async (req, res) => {
    const login = {
        Username: req.body.Username,
        Password: req.body.Password
    };
    try{
        if(login.Username==null || login.Password==null){
            throw new Error("Esseinatial fields missing");
        }
        await Login.create(login);
        res.status(201).json(login);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);
    }
}

module.exports = {getAll, getByUserName, getByPassWord, getById, create};
