const router = require("../routes/eventDater");
const utilities = require("../utilities/utility");
const db = require("../models");
const express = require("express");
const EventDater = db.eventDater;
const bookPlan = db.bookPlan;

getAll = async (req, res) => {
  const eventDater = await EventDater.findAll(
    {
        order:['id'],
        include: [{
            model: bookPlan,
            required: true
        }]
    }
  );
  res.status(200).json(eventDater);
};
getByDestination = async (req, res) => {
  const Destination = req.params.value;
  try {
    const eventDater = await EventDater.findAll({
      where: { Destination: Destination },
      include: [{
        mode: bookPlan,
        required: true
      }]
    });
    if (bookPlan.length == 0) {
      throw new Error("The Iteam Title has not been found Error");
    }
    res.status(200).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
getByAmount = async (req, res) => {
  const Amount = req.params.value;
  try {
    const eventDater = await EventDater.findAll({ where: { Amount: Amount } });
    if (bookPlan.length == 0) {
      throw new Error("Unable to detect specific value");
    }
    res.status(200).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
getByStartDate = async (req, res) => {
  const StartDate = req.params.date;
  try {
    const eventDater = await EventDater.findAll({
      where: { StartDate: StartDate },
    });
    if (eventDater.length == 0) {
      throw new Error("Unable to detect specific value");
    }
    res.status(200).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
getByEndDate = async (req, res) => {
  const EndDate = req.params.date;
  try {
    const eventDater = await EventDater.findAll({
      where: { EndDate: EndDate },
    });
    if (eventDater.length == 0) {
      throw new Error("Unable to detect specific value");
    }
<<<<<<< HEAD
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
getByStartDate = async(req, res) => {
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
=======
    res.status(200).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e
getById = async (req, res) => {
  const id = req.params.id;
  try {
    const eventDater = await EventDater.findByPk(id, 
        {include: [{model: bookPlan, required: true}]}
        );
    if ((eventDater = null || eventDater.length == 0)) {
      throw new Error("Error you can't find Users ID" + id);
    }
    res.status(200).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
// test('Connection check if server is functional as inteded', () =>
//     expect()
// )
create = async (req, res) => {
  const eventDater = {
    Destination: req.body.Destination,
    StartDate: req.body.StartDate,
    EndDate: req.body.EndDate,
    Amount: req.body.Amount,
    bookPlan_Id: req.body.bookPlan_Id
  };
  try {
    if (eventDater.Destination == null || 
      eventDater.StartDate == null ||
       eventDater.EndDate == null || 
       eventDater.Amount == null || 
       eventDater.bookPlan_Id == null) {
      throw new Error("Esseinatial fields missing");
    }
    await EventDater.create(eventDater);
    res.status(201).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
update = async (req, res) => {
<<<<<<< HEAD
    const id = req.params.id;
    
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
=======
  const id = req.params.id;

  const eventDater = {
    Destination: req.body.Destination,
    StartDate: req.body.StartDate,
    EndDate: req.body.EndDate,
    Amount: req.body.Amount,
    bookPlan_Id: req.body.bookPlan_Id
  };
  try {
    if (
      (id =
        null ||
        eventDater.Destination == null ||
        eventDater.Date == null ||
        eventDater.Amount == null
        || eventDater.bookPlan_Id == null)
    ) {
      throw new Error("Missing Essential Fields");
>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e
    }
    await EventDater.update(eventDater, {
      where: {
        id: id,
      },
    });
    res.status(200).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

deleting = async (req, res) => {
<<<<<<< HEAD
    const id = req.params.id;
    try{
        console.log("Test for the anyoing code");
        const deleted = await EventDater.destroy({where: { id : id}});
        if(deleted == 0) {
            throw new Error("Id not found");
        }
        res.status(200).send("Item was deleted");
=======
  const id = req.params.id;
  try {
    console.log("Test for the anyoing code");
    const deleted = await EventDater.destroy({ where: { id: id } });
    if (deleted == 0) {
      throw new Error("Id not found");
>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e
    }
    res.status(200).send("Item was deleted");
  } catch (error) {
    utilities.formatErrorResponse(res, 404, error.message);
  }
};

<<<<<<< HEAD
module.exports = {getAll, getByDestination, getByAmount, getByStartDate, getByEndDate , getById, create, update, deleting};
=======
module.exports = {
  getAll,
  getByDestination,
  getByAmount,
  getByStartDate,
  getByEndDate,
  getById,
  create,
  update,
  deleting,
};
>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e
