const express = require('express');
const app = express();
const mysql = require('mysql')


var SQLconnection = mysql.createConnection({
  host: "sql7.freemysqlhosting.net",
  user: "sql7335861",
  password: "zX4VzkPTx1",
  database: "sql7335861"
})

SQLconnection.connect((err) => {
    if(err) throw err;
    console.log('Connect');
})

app.get('/', (req,res,next) => {
    let sql = "SELECT * FROM Mitarbeiter" 
    SQLconnection.query(sql, (err, result, fields) => {
        if(err) throw err;
        console.log("GET")
    res.json(result)
    })
})

module.exports = app


// MySQL DB Port 3306 xProtocol Prot 33060
// PIPE NAME: MYSQL