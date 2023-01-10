const router = require('../routes/location'); 
const utilities = require('../utilities/utility');
const db = require('../models');
const express = require('express');
const location = require('../models/location');
const Location = db.location; 

getAll = async (req, res) => {
    const location = await Location.findAll();
    res.status(200).json(location);
}
getByTitle = async (req, res)=> {

    const title = req.params.value;
    try{
        const location = await Location.findAll(
            {where:  { title: title}});
        if(location.length== 0){
            throw new Error("The Iteam Username has not been found Error");
        }
        res.status(200).json(location);
        

    } 
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message);
    }

}
getByBody = async(req, res) => {
    const body = req.params.value;
    try{
        const location = await Location.findAll(
            {where: {body: body}});
        if(location.length == 0){
            throw new Error("Unable to detect specific value");

        }
        res.status(200).json(location);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}
getByHolLocation = async(req, res) => {
    const HolLocation = req.params.value;
    try{
        const location = await Location.findAll(
            {where: {HolLocation: HolLocation}});
        if(location.length == 0){
            throw new Error("Unable to detect specific value");

        }
        res.status(200).json(location);
    }
    catch(error){
        utilities.formatErrorResponse(res,400,error.message);
    }
}

getById = async (req, res) => {
    const id = req.params.id;
    try{
        const location = await Location.findByPk(id);
        if(location = null || location.length ==0){
            throw new Error("Error you can't find Users ID" + id);

        }
        res.status(200).json(location);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);

    }
}

Locationcreate = async (req, res) => {
    const location = {
        title: req.body.title,
        body: req.body.body,
        HolLocation: req.body.HolLocation
    };
    try{
        if(location.title==null || location.body==null || location.HolLocation==null){
            throw new Error("Esseinatial fields missing");
        }
        await Location.create(location);
        res.status(201).json(location);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);
    }
}
Locationdeleting = async (req, res) => {
    const id = req.body.id;
    try {
      const deleted = await Location.destroy({ where: { id: id }});
      if (deleted == 0) {
        throw new Error("Id not found");
      }
      res.status(200).send("Tool deleted");
    } catch(error) {
      utilities.formatErrorResponse(res, 404, error.message);
    }
  };
Locationupdate = async (req, res) => {
    const id = req.body.id;
  
    const location = {
        title: req.body.title,
        body: req.body.body,
        HolLocation: req.body.HolLocation
    };
    try {
       if(location.title==null || location.body==null || location.HolLocation==null){
        throw new Error("Missing essential fields");
      }
      await Location.update(location, { where: { id: id } });
      res.status(200).json(location);
    } catch (error) {
      utilities.formatErrorResponse(res, 400, error.message);
    }
  };

module.exports = {getAll, getByTitle, getByBody, getByHolLocation, getById, Locationcreate, Locationdeleting, Locationupdate};
