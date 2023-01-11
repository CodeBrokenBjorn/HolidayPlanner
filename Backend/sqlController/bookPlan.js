const router = require('../routes/bookPlan'); 
const utilities = require('../utilities/utility');
const db = require('../models');
const express = require('express');
const bookPlan = require('../models/bookPlan');
const BookPlan = db.bookPlan; 
const fs = require('fs');
const path = require('path');


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
getByImage = async(req,res) => {
    const images = req.params.value;
    try{
        const bookPlan = await BookPlan.findAll(
            {where: {images: images}});
        if(bookPlan.length == 0) {
            throw new Error("Unable to find Image");

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
        const bookPlan = await BookPlan.findByPk(id);
        if(bookPlan = null || bookPlan.length ==0){
            throw new Error("Error you can't find Users ID" + id);

        }
        res.status(200).json(bookPlan);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);

    }
}
// test('Connection check if server is functional as inteded', () =>
//     expect()
// )
create = async (req, res) => {
    const bookPlan = {
        title: req.body.title,
        body: req.body.body,
        image: path.join('/public/images/', req.file.filename)
    };
    try{
        if(bookPlan.title==null || bookPlan.body==null || bookPlan.image==null){
            throw new Error("Esseinatial fields missing");
        }
        await BookPlan.create(bookPlan);
        res.status(201).json(bookPlan);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);
        await fs.promises.unlink(req.file.path);
    }
}
update = async (req, res) => {
    const id = req.body.id;
    
    const bookPlan = {
        title: req.body.title,
        body: req.body.body
    };
    try{
        if(id= null ||
            bookPlan.title==null ||
            bookPlan.body==null){
                throw new Error("Missing Essential Fields");
            }
            await BookPlan.update(bookPlan, 
                {where: {
                    id:id
                }});
                res.status(200).json(bookPlan);
    }
    catch(error) {
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try{
        console.log("Test for the anyoing code");
        const deleted = await BookPlan.destroy({where: { id : id}});
        if(deleted == 0) {
            throw new Error("Id not found");
        }
        res.status(200).send("Item was deleted");
    }
    catch(error) {
        utilities.formatErrorResponse(res, 404, error.message);
    }
}

module.exports = {getAll, getByTitle, getByBody,getById, create, update, deleting};
