const router = require('../routes/user'); 
const utilities = require('../utilities/utility');
const db = require('../models');
const express = require('express');
const User = db.user; 

getAll = async (req, res) => {
    const user = await User.findAll();
    res.status(200).json(user);
}
getByUserName = async (req, res)=> {

    const Username = req.params.value;
    try{
        const user = await User.findAll(
            {where:  { Username: Username}});
        if(user.length== 0){
            throw new Error("The Iteam Username has not been found Error");
        }
        res.status(200).json(user);
        

    } 
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message);
    }

}
getByPassWord = async(req, res) => {
    const Password = req.params.value;
    try{
        const user = await User.findAll(
            {where: {Password: Password}});
        if(user.length == 0){
            throw new Error("Unable to detect specific value");

        }
        res.status(200).json(user);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}
getByGetRating = async(req, res) => {
    const UserRt = req.params.value;
    try{
        const user = await User.findAll(
            {where: {UserRating: UserRt}});
        if(user.length == 0){
            throw new Error("Unable to find the ratings value");

        }
        res.status(200).json(user);

        
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);

    }
}
getById = async (req, res) => {
    const id = req.params.id;
    try{
        const user = await User.findByPk(id);
        if(user = null || user.length ==0){
            throw new Error("Error you can't find Users ID" + id);

        }
        res.status(200).json(user);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);

    }
}
test('Connection check if server is functional as inteded', () =>
    expect()
)
module.exports = {getAll, getByUserName, getByPassWord ,getByGetRating,getById};
