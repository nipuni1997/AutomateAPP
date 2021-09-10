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
        // console.log("Successfully connected to the database.");
      });

      //update repair station (my account)
      router.post('/updaterepair',async (req,res)=>{
        const userName = req.body.userName;
        const preEmail=req.body.preEmail;
        const email =req.body.email;
        const address=req.body.address;
        const city=req.body.city;
        const province=req.body.province;
        const tel=req.body.tel;
        const description=req.body.description;
        // const password=req.body.password;
        // const confirm=req.body.confirm;
        const userrole='repair';
        console.log(username,email,address);
        db.query("UPDATE user SET email=?,name=? WHERE email=? ",
        [email,userName,preEmail],
        (err,result)=>{
            console.log(err);
        }
        );
        db.query("UPDATE repair SET address=?,city=?,province=?,tel=?,description=?,email=? WHERE email=?",
        [address,city,province,tel,description,email,preEmail],
        (err,result)=>{
            console.log(err);
        });
    });

// register mechsnic
    router.post('/registermechanic', async (req,res)=>{
      const name =req.body.name;
      const tel =req.body.tel;
      const photo=req.body.photo;
      const mac_id=req.body.mac_id;
  // console.log(userName,email,password);
  
      db.query("INSERT INTO mechanic (name,tel,photo,mac_id) VALUES (?,?,?,?)",
      [name,tel,photo,mac_id],
      (err,result)=>{
          console.log(err);
      }
      );
  });

//update mechanics
  router.post('/updatemechanic', async (req,res)=>{
    const name =req.body.name;
    const tel =req.body.tel;
    const photo=req.body.photo;
    const mac_id=req.body.mac_id;
    
// console.log(userName,email,password);

    db.query("UPDATE  mechanic SET name=?,tel=?,photo=? WHERE mac_id=?",
    [name,tel,photo,mac_id],
    (err,result)=>{
        console.log(err);
    }
    );
});

//delete mechanic
router.post('/deletemechanic', async (req,res)=>{
  
  const mac_id=req.body.mac_id;
  
// console.log(userName,email,password);

  db.query("DELETE FROM mechanic WHERE mac_id=?",
  [mac_id],
  (err,result)=>{
      console.log(err);
  }
  );
});

//add addvertisement
router.post('/addAdvertisement', async (req,res)=>{
  const topic =req.body.topic;
  const description =req.body.description;
  const photo=req.body.photo;
  
// console.log(userName,email,password);

  db.query("INSERT INTO repair_add (topic,description,photo) VALUES (?,?,?)",
  [topic,description,photo],
  (err,result)=>{
      console.log(err);
  }
  );
});
//Delete ADD
router.post('/deleteAdvertisement', async (req,res)=>{
  const add_id =req.body.add_id;

  db.query("DELETE FROM repair_add WHERE add_id=?",
  [add_id],
  (err,result)=>{
    console.log(err);
  });
});
    

    module.exports = router ;
