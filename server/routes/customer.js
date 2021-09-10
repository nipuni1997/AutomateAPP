const express = require("express");



const router = express.Router();
const bcrypt = require('bcrypt');
 const { sign } = require('jsonwebtoken');
 const { validateToken } = require('../middlewares/AuthMiddleware');
const mysql = require("mysql");
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"977450063",
    database:"login",
    });
    db.connect(error => {
        if (error) throw error;
        console.log("Successfully connected to the database.");
      });