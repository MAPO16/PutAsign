const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.put('/rest/asignacion', function (req, res) {
   connection.query('UPDATE `Asig_Mobi` SET `Emplid`=?, `Id_NumSer`=? where `Id_Asignacion`=?', [req.body.Emplid,req.body.Id_NumSer,req.body.Id_Asignacion], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
});


app.listen(2233, function () {
 console.log('Node app is running on port 2233');

});  