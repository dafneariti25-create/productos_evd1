var sequelize=require("sequelize")
var productoModelo=require("./models/producto")

// conexion con la BD
/*
const conexion=new sequelize("productos", "root", "120330", {
    host:"localhost",
    port:"3306",
    dialect:"mysql",
});*/

// conexion remota con tidbcloud
const conexion=new sequelize("productosEVD1", "3Pw41pZR1NNmnhc.root", "shHXCbEWp0Qqdz7v", {
    host:"gateway01.us-west-2.prod.aws.tidbcloud.com",
    port:"4000",
    dialect:"mysql",
    dialectOptions:{
        ssl{
            minVersion:"TLSv1.2",
            rejectUnautho
        }
    }
})

const producto=productoModelo(conexion);

// verificamos la conexion
conexion.sync({force:false})
.then(()=>{
    console.log("Conectado exitosamende a la Base de Datos");
})
.catch((e)=> {
    console.log("Error al conectarse a la Base de Datos: "+e);
})

module.exports={
    producto
    
}