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
      router.post('/updaterepair',validateToken,async (req,res)=>{
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
        db.query("UPDATE user SET email=?,name=? WHERE id=? ",
        [email,userName,preEmail],
        (err,result)=>{
            console.log(err);
        }
        );
        db.query("UPDATE repair SET address=?,city=?,province=?,tel=?,description=?,name=? WHERE id=?",
        [address,city,province,tel,description,email,preEmail],
        (err,result)=>{
            console.log(err);
        });
    });
    router.post('deletemechanic',)

// register mechsnic
    router.post('/registermechanics', async (req,res)=>{
      const name =req.body.name;
      const tel =req.body.tel;
      // const photo=req.body.photo;
      // const mac_id=req.body.mac_id;
  console.log(name,tel);
  
      db.query("INSERT INTO mechanic (name,tel) VALUES (?,?)",
      [name,tel],
      (err,result)=>{
          console.log(err);
          return res.send("Added");
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
//delete mechanic
router.delete('/deleteMechanic/:id',(req,res)=>{
  const id = req.params.id;
  console.log(id);
  db.query("DELETE FROM mechanic WHERE id = ?",id,(err,result)=>{
      if(err){
          console.log(err);
      }else{
          res.send(result);
      }
  })
});

//getHome
router.get('/getRepair',(req,res)=>{
  const sqlSelect="SELECT * FROM repair WHERE id=9";
  db.query(sqlSelect,(err,result)=>{
     
      
     console.log(result);
           res.send(result);
      
  });

})

router.get('/getMechanic',(req,res)=>{
  db.query("SELECT * FROM mechanic",(err,result)=>{
    console.log(result);
    res.send(result);
  });
})

router.get('/getAdds',(req,res)=>{
  const sqlSelect="SELECT * FROM addvertisement";
  // const sqlSelect="SELECT user.name,repair.id,repair.address,repair.city,repair.province,repair.tel FROM repair INNER JOIN user ON user.id=repair.user_id";
  db.query(sqlSelect,(err,result)=>{
    console.log(result);
           res.send(result);
  });
})

router.get('/getAll',(req,res)=>{
  const sqlSelect="SELECT * FROM repair";
  // const sqlSelect="SELECT user.name,repair.id,repair.address,repair.city,repair.province,repair.tel FROM repair INNER JOIN user ON user.id=repair.user_id";
  db.query(sqlSelect,(err,result)=>{
    console.log(result);
           res.send(result);
  });
})
    

    module.exports = router ;
