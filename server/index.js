const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
 app = express();
 
 const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors({
	origin:("http://192.168.1.16:3001"),
	methods:("GET","POST"),
	credentials:true
}));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type:'application/json'}));
const cookieParser=require('cookie-parser');
app.use(cookieParser())

const session= require('express-session');
app.use(session({
	key:'userId',
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
	cookie:{
		expires:60*60*24,
		},
})
);

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