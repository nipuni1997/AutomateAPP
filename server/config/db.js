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
    