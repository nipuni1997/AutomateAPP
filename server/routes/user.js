 const express = require("express");



const router = express.Router();
const bcrypt = require('bcrypt');
const cookieParser=require('cookie-parser');

const session= require('express-session');
const saltRound=10;
 const { sign } = require('jsonwebtoken');
 const { validateToken } = require('../middlewares/AuthMiddleware');
const mysql = require("mysql");
const { response } = require("express");
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

bcrypt.hash(password,saltRound,(err,hash) =>{
    if(err){
        console.log(err);
    }
    db.query("INSERT INTO user (email,name,password,userrole) VALUES (?,?,?,?)",
    [email,userName,hash,userrole],
    (err,result)=>{
        console.log(err);
    }
    );
})


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


    bcrypt.hash(password,saltRound,(err,hash) =>{
        if(err){
            console.log(err);
        }
    db.query("INSERT INTO user (email,name,password,userrole) VALUES (?,?,?,?)",
    [email,userName,hash,userrole],
    (err,result)=>{
        console.log(err);
    }
    );
})
    db.query("INSERT INTO repair (address,city,province,tel,description,email) VALUES (?,?,?,?,?,?)",
    [address,city,province,tel,description,email],
    (err,result)=>{
        console.log(err);
    });
});

router.post('/login' , async (req,res)=>{
    const userEmail = req.body.email;
    const password = req.body.password;
    // const userId= req.body.userId;
    // console.log(userId); 
console.log(userEmail,password);
    db.query("SELECT * from user WHERE email=?",[userEmail],
    (err,result)=>{
        console.log(err);
    //    if(err){
    //     //    res.send({err:err});
    //     console.log("user cant find");
    //    }
       if(result.length>0){
        bcrypt.compare(password,result[0].password,(error,response)=>{
            if(response){
                req.session.user=result;
                console.log(req.session.user);
                console.log(result[0].id);
                const accessToken = sign(
                    {  id: result[0].id},
                    'secret'
                  );
                  res.json(accessToken);
                return res.send(result);
                
            
            }else{
                console.log("Password incorrect");
               return res.send({message : "User and password do not match."});
            }
            // const accessToken = sign(
            //     {  id: result[0].id},
            //     'secret'
            //   );
            //   res.json(accessToken);

        })
       }else{
        console.log("cant find user");
         return  res.send({message : "User does not exist"});
           
       }
    }
    );
    console.log(session.user);
});




module.exports = router ;
