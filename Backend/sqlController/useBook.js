const router = require("../routes/useBook");
const utilities = require("../utilities/utility");
const db = require("../models");
const express = require("express");
const { create } = require("./login");
const { useBook } = require("../routes/useBook");
const UseBook = db.useBook;

getAll = async (req, res) => {
  const useBook = await UseBook.findAll();
  res.status(200).json(useBook);
};
getById = async (req, res) => {
  const id = req.params.id;
  try {
    const useBook = await UseBook.findByPk(id);
    if ((useBook = null || useBook.length == 0)) {
      throw new Error("Error you can't find Users ID" + id);
    }
    res.status(200).json(useBook);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
// test('Connection check if server is functional as inteded', () =>
//     expect()
// // )
// getByUserName = async (req, res)=> {

//     const Username = req.params.value;
//     try{
//         const user = await User.findAll(
//             {where:  { Username: Username}});
//         if(user.length== 0){
//             throw new Error("The Iteam Username has not been found Error");
//         }
//         res.status(200).json(user);

//     }
//     catch(error){
//         utilities.formatErrorResponse(res, 400, error.message);
//     }

// }
getByTitle = async (req, res) => {
  const title = req.params.value;
  try {
    const useBook = await UseBook.findAll({ where: { title: title } });
    if (useBook.length == 0) {
      throw new Error("Unable to detect specific value");
    }
    res.status(200).json(useBook);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
getByBody = async (req, res) => {
  const body = req.params.value;
  try {
    const useBook = await UseBook.findAll({ where: { body: body } });
    if (useBook.length == 0) {
      throw new Error("Unable to find the ratings value");
    }
    res.status(200).json(useBook);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};
createUseBook = async (req, res) => {
  const useBook = {
    title: req.body.title,
    body: req.body.body
  };

  try{
    if (useBook.title==null || useBook.body==null) {
      throw new Error("Missing essential fields");
    }
    await UseBook.create(useBook);
    res.status(201).json(useBook);

  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

deleting = async (req, res) => {
  const id = req.body.id;
  try {
    const deleted = await UseBook.destroy({ where: { id: id }});
    if (deleted == 0) {
      throw new Error("Id not found");
    }
    res.status(200).send("Tool deleted");
  } catch(error) {
    utilities.formatErrorResponse(res, 404, error.message);
  }
};
update = async (req, res) => {
  const id = req.body.id;

  const useBook = {
    title: req.body.title,
    body: req.body.body,
  };
  try {
    if (id == null || useBook.title == null || useBook.body == null) {
      throw new Error("Missing essential fields");
    }
    await UseBook.update(useBook, { where: { id: id } });
    res.status(200).json(useBook);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

module.exports = {
  getAll,
  getByBody,
  getByTitle,
  getById,
  createUseBook,
  deleting,
  update,
};
