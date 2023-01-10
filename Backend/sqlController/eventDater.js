const router = require('../routes/eventDater'); 
const utilities = require('../utilities/utility');
const db = require('../models');
const express = require('express');
const EventDater = db.eventDater; 


getAll = async (req, res) => {
    const eventDater = await EventDater.findAll();
    res.status(200).json(eventDater);
}
getByDestination = async (req, res)=> {

    const Destination = req.params.value;
    try{
        const eventDater = await EventDater.findAll(
            {where:  { Destination: Destination}});
        if(bookPlan.length== 0){
            throw new Error("The Iteam Title has not been found Error");
        }
        res.status(200).json(eventDater);
        

    } 
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message);
    }

}
getByAmount = async(req, res) => {
    const Amount = req.params.value;
    try{
        const eventDater = await EventDater.findAll(
            {where: {Amount: Amount}});
        if(bookPlan.length == 0){
            throw new Error("Unable to detect specific value");

        }
        res.status(200).json(eventDater);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}
// getByDescription = async(req, res) => {
//     const Description = req.params.value;
//     try{
//         const bookPlan = await BookPlan.findAll(
//         0    {where: {Description: Description}});
//         if(bookPlan.length == 0){
//             throw new Error("Unable to detect specific value");

//         }
//         res.status(200).json(bookPlan);
//     }
//     catch(error){
//         utilities.formatErrorResponse(res,400,error.message);
//     }
// }
getByDate = async(req, res) => {
    const Date = req.params.date;
        try{
            const eventDater = await EventDater.findAll(
                {where: {Date: Date}});
            if(eventDater.length == 0){
                throw new Error("Unable to detect specific value");
    
            }
            res.status(200).json(eventDater);
        }
        catch(error){
            utilities.formatErrorResponse(res,400,error.message);
        }
    
}
getByEndDate = async(req, res) => {
    const EndDate = req.params.date;
        try{
            const eventDater = await EventDater.findAll(
                {where: {EndDate: EndDate}});
            if(eventDater.length == 0){
                throw new Error("Unable to detect specific value");
    
            }
            res.status(200).json(eventDater);
        }
        catch(error){
            utilities.formatErrorResponse(res,400,error.message);
        }
    
}
getById = async (req, res) => {
    const id = req.params.id;
    try{
        const eventDater = await EventDater.findByPk(id);
        if(eventDater = null || eventDater.length ==0){
            throw new Error("Error you can't find Users ID" + id);

        }
        res.status(200).json(eventDater);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);

    }
}
// test('Connection check if server is functional as inteded', () =>
//     expect()
// )
create = async (req, res) => {
    const eventDater = {
        Destination: req.body.Destination,
        Date: req.body.Date,
        Amount: req.body.Amount
    };
    try{
        if(eventDater.title==null || eventDater.body==null){
            throw new Error("Esseinatial fields missing");
        }
        await EventDater.create(eventDater);
        res.status(201).json(eventDater);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);
    }
}
update = async (req, res) => {
    const id = req.body.id;
    
    const eventDater = {
        Destination: req.body.Destination,
        Date: req.body.Date,
        Amount: req.body.Amount
    };
    try{
        if(id= null ||
            eventDater.Destination==null ||
            eventDater.Date==null ||
            eventDater.Amount== null){
                throw new Error("Missing Essential Fields");
            }
            await EventDater.update(eventDater, 
                {where: {
                    id:id
                }});
                res.status(200).json(eventDater);
    }
    catch(error) {
        utilities.formatErrorResponse(res, 400, error.message);
    }
}

deleting = async (req, res) => {
    const id = req.body.id;
    console.log(id);
    try{
        console.log("Test for the anyoing code");
        const deleted = await EventDater.destroy({where: { id : id}});
        if(deleted == 0) {
            throw new Error("Id not found");
        }
        res.status(200).send("Item was deleted");
    }
    catch(error) {
        utilities.formatErrorResponse(res, 404, error.message);
    }
}

module.exports = {getAll, getByDestination, getByAmount, getByDate, getByEndDate , getById, create, update, deleting};
