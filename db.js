const mysql = require("mysql");
// var host = "‏";

var connection = mysql.createConnection({
    host: "‏",
    user:"",
    password:"",
    database:""
});

connection.connect((err) => {
    if (err) {throw Error;}
})

module.exports = connection;