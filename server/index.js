const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
 app = express(),
  bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type:'application/json'}));

// const db = mysql.createConnection({
// user:"root",
// host:"localhost",
// password:"977450063",
// database:"login",
// });
// db.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
//   });

  const usersRouter = require('./routes/user');
app.use('/user', usersRouter);
// const shopsRouter = require('./routes/Shops');
// app.use('/shops', shopsRouter);


//   app.get("/getData",(req,res)=>{
//       const sqlget="select * from user";
//       db.query(sqlget,(err,result)=>{
//         res.send(result);
//         console.log(result);
//       })
     
//   })

// app.post('/registercustomer',(req,res)=>{
//     const userName =req.body.userName;
//     const email =req.body.email;
//     const password=req.body.password;
//     const userrole='customer';
// console.log(userName,email,password);

//     db.query("INSERT INTO user (email,name,password,userrole) VALUES (?,?,?,?)",
//     [email,userName,password,userrole],
//     (err,result)=>{
//         console.log(err);
//     }
//     );
// });

// app.post('/registerrepair',(req,res)=>{
//     const userName = req.body.userName;
//     const email =req.body.email;
//     const address=req.body.address;
//     const city=req.body.city;
//     const province=req.body.province;
//     const tel=req.body.tel;
//     const description=req.body.description;
//     const password=req.body.password;
//     const confirm=req.body.confirm;
//     const userrole='repair';
//     console.log(username,email,address);
//     db.query("INSERT INTO user (email,name,address,city,province,tel,description,password,userrole) VALUES (?,?,?,?,?,?,?,?,?)",
//     [email,userName,address,city,province,tel,description,password,userrole],
//     (err,result)=>{
//         console.log(err);
//     }
//     );
// });

// app.post('/registercustomer',(req,res)=>{
//     const userName =req.body.userName;
//     const phonenumber =req.body.phonenumber;
//     const message=req.body.message;
   
// console.log(userName,email,password);

//     db.query("INSERT INTO mechanic (name,phonenumber,message) VALUES (?,?,?)",
//     [userName,phonenumber,message],
//     (err,result)=>{
//         console.log(err);
//     }
//     );
// });

// app.post('/editshop',(req,res)=>{
//     const userName = req.body.userName;
//     const email =req.body.email;
//     const address=req.body.address;
//     const city=req.body.city;
//     const province=req.body.province;
//     const telephone=req.body.telephone;
  
//     console.log(username,email,address);
//     db.query("INSERT INTO user (email,name,address,city,province,tel,description,password,userrole) VALUES (?,?,?,?,?,?,?,?,?)",
//     [email,userName,address,city,province,tel,description,password,userrole],
//     (err,result)=>{
//         console.log(err);
//     }
//     );
// });
// //insert data
// app.post("/postData",(req,res)=>{
//     const email=req.body.email;
//     const name=req.body.name;
//     const password=req.body.password;
   
//     const sqlget="INSERT INTO user (email,name,password) VALUES (?,?,?)";
//     db.query(sqlget,[email,name,password],(err,result)=>{
//         console.log(err);
//     })

// })
app.listen(3001,()=> {
    console.log("running sever");
});