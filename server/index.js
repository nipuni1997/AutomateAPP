const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
 app = express();
 
 const bodyParser = require('body-parser');
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

const repairRouter =require('./routes/repair');
app.use('/repair',repairRouter);



app.listen(3001,()=> {
    console.log("running sever");
});