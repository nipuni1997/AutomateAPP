const express = require("express");



const router = express.Router();
const bcrypt = require('bcrypt');
// const { sign } = require('jsonwebtoken');
// const { validateToken } = require('../middlewares/AuthMiddleware');
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




router.post('/registercustomer', async (req,res)=>{
    const userName =req.body.userName;
    const email =req.body.email;
    const password=req.body.password;
    const userrole='customer';
console.log(userName,email,password);

    db.query("INSERT INTO user (email,name,password,userrole) VALUES (?,?,?,?)",
    [email,userName,password,userrole],
    (err,result)=>{
        console.log(err);
    }
    );
});

router.post('/registerrepair',async (req,res)=>{
    const userName = req.body.userName;
    const email =req.body.email;
    const address=req.body.address;
    const city=req.body.city;
    const province=req.body.province;
    const tel=req.body.tel;
    const description=req.body.description;
    const password=req.body.password;
    const confirm=req.body.confirm;
    const userrole='repair';
    console.log(username,email,address);
    db.query("INSERT INTO user (email,name,address,city,province,tel,description,password,userrole) VALUES (?,?,?,?,?,?,?,?,?)",
    [email,userName,address,city,province,tel,description,password,userrole],
    (err,result)=>{
        console.log(err);
    }
    );
});

module.exports = router ;
