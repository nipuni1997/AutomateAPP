const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
// const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({extended:true}));

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

app.post('/register',(req,res)=>{
    const userName =req.body.userName;
    const email =req.body.email;
    const password=req.body.password;


    db.query("INSERT INTO user (email,name,password) VALUES (?,?,?)",
    [email,userName,password],
    (err,result)=>{
        console.log(err);
    }
    );
});
app.listen(3001,()=> {
    console.log("running sever");
});