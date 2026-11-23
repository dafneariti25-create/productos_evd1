var router=require("express").Router()
const e = require("express")
var {pruducto} =require("../conexion")
const producto = require("./models/producto")
const { where } = require("sequelize")

// ruta para mostrar la pagina de insertar
router.get("/insertarProducto", (req,res) =>{
    res.render("pages/insertarProducto")
})

// ruta o petición para guardar un producto nuevo en la base de datos
router.post("/guardarProducto", (req, res)=> {
    producto.create(req.body)
    .then(()=>{
        console.log("Se inserto correctamente");
        res.redirect("/listaProductos");
    })
    .catch((e)=>{
        res.status(400).send("Erroe al insertar"+e)
    })
})

// ruta para obtener la lista de los productos y enviarlos a la pagina
router.get("/listarProdutos", (req, res)=>{
    producto.findAll()
    .then((data)=>{
        res.render("pages/listarProductos",{productos:data})
    })
    .catch.log("Error en la consulta:"+e)
})

// ruta para buscar un producto con su ID
router.get("/buscarProducto/:idProducto", (req, res)=>{
    producto.findAll({
        where:{
            idProducto:req.params.idProducto
        }
        .then((data)=>{
            console.log(data)
            req.render("pages/modificarProducto", {producto:data})
        })
    })
})

// ruta o peticion para modificar un oroduto
router.post("/modificarProducto", (req, res)=> {
    var idProducto=req.body.idProducto;
    const productoModificado={
        nombreProducto: req.body.nombreProducto,
        marcaProducto:req.body.marcaProducto,
        precioProducto:req.body,precioProducto
    }
    producto.update(productoModificado,{
        where:{
            idProducto:idProducto
        }
    })
    .then(()=>{
        res.redirect("(listarProducto")
    })
    .catch((e)=>{
        console.log("Error al modificar:"+e)
    })
})

// ruta para eliminar un producto
router.get("/eliminarProducto/:idProducto", (req,res)=>{
    producto.destroy({
        where:{
            idProducto:req.params.idProducto
        }
    })
    .then(()=>{
        res.redirect("/listarProductos")
    })
    .catch((e)=>{
        res.status(400).send("Eror al eliminar:"+e)
    })
})

module.exports=router;