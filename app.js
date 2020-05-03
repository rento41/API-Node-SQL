const express = require('express');
const app = express();
const mysql = require('mysql')

//via consoleRoutes ist the redirect destination defined
const consoleRoutes = require('./api/routes/consoles');
const gamesRoutes = require('./api/routes/games');

//handler for routes - he will redirect all routs beginning with /consoles to consoleRoutes wich show on a specifig .js file
app.use('/consoles', consoleRoutes);
app.use('/games', gamesRoutes);


/*var SQLconnection = mysql.createConnection({
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
})*/

module.exports = app
