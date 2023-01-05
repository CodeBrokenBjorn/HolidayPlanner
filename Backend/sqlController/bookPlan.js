const router = require('../routes/bookPlan'); 
const utilities = require('../utilities/utility');
const db = require('../models');
const express = require('express');
const bookPlan = require('../models/bookPlan');
const BookPlan = db.bookPlan; 


getAll = async (req, res) => {
    const bookPlan = await BookPlan.findAll();
    res.status(200).json(bookPlan);
}
getByTitle = async (req, res)=> {

    const Title = req.params.value;
    try{
        const bookPlan = await BookPlan.findAll(
            {where:  { Title: Title}});
        if(bookPlan.length== 0){
            throw new Error("The Iteam Title has not been found Error");
        }
        res.status(200).json(bookPlan);
        

    } 
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message);
    }

}
getByBody = async(req, res) => {
    const Body = req.params.value;
    try{
        const bookPlan = await BookPlan.findAll(
            {where: {Body: Body}});
        if(bookPlan.length == 0){
            throw new Error("Unable to detect specific value");

        }
        res.status(200).json(bookPlan);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}
getByDescription = async(req, res) => {
    const Description = req.params.value;
    try{
        const bookPlan = await BookPlan.findAll(
            {where: {Description: Description}});
        if(bookPlan.length == 0){
            throw new Error("Unable to detect specific value");

        }
        res.status(200).json(bookPlan);
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

module.exports = {getAll, getByTitle, getByBody, getByDescription, getById, create};
