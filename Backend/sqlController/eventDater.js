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
    res.status(200).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
getById = async (req, res) => {
  const id = req.params.id;
  try {
    const eventDaters = await EventDater.findByPk(id);
      if ((eventDaters === null || eventDaters.length === 0)) {
        throw new Error("Error you can't find Users ID" + id);
      }
    res.status(200).json(eventDaters);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

create = async (req, res) => {
  let eventDater = {
    Destination: req.body.Destination,
    StartDate: req.body.StartDate,
    EndDate: req.body.EndDate,
    Amount: req.body.Amount,
    bookPlan_id: req.body.bookPlan_id
  };
  try {
    if (eventDater.Destination == null || 
      eventDater.StartDate == null ||
       eventDater.EndDate == null || 
       eventDater.Amount == null || 
       eventDater.bookPlan_id == null) {
      throw new Error("Esseinatial fields missing");
    }
    
    if(eventDater.StartDate > eventDater.EndDate){
      throw new Error("Invalid date provided:");
      
    }
    
    
    const eDater = await EventDater.create(eventDater);
    console.log()
    eventDater.id = eDater.id;
    res.status(201).json(eventDater);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
update = async (req, res) => {
  const id = req.body.id;
    const eventDater = {
      Destination: req.body.Destination,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      Amount: req.body.Amount,
    };
    try {

      console.log(eventDater);

      if (id ==null ||
        (eventDater.Destination == null ||
          eventDater.StartDate == null ||
          eventDater.EndDate == null ||
          eventDater.Amount == null)
          ) {
            throw new Error("Missing Essential Fields");
          }
      if(eventDater.StartDate > eventDater.EndDate){
        throw new Error("Invalid date provided:");
      }
          await EventDater.update(eventDater, {
            where: {
              id: id,
            },
          });
          res.status(200).json(eventDater);
        }
        catch(error) {
          utilities.formatErrorResponse(res,400,error.message);
        }
  
};

deleting = async (req, res) => {
  const id = req.params.id;
  try {
    console.log("Test for the anyoing code");
    const deleted = await EventDater.destroy({ where: { id: id } });
    if (deleted == 0) {
      throw new Error("Id not found");
    }
    res.status(200).send("Item was deleted");
  } catch (error) {
    utilities.formatErrorResponse(res, 404, error.message);
  }
};

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
