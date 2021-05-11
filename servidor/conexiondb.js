
const mysql = require('mysql');



    let conexion = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password:'',
        database:'productosdb'
    });
    //probando conexion
    conexion.connect(function(error){
        if (error) {
            throw error;
    
        } else {
            console.log("conexion exitosa")
        }
    });



module.exports = conexion;