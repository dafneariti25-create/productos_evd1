var express = require("express")
var path = require("path")
var productosRoutes = require("./routes/producto-routes")

var app = express()

// definimos el motor de vistas
app.set("view engine", "ejs")
// las vistas están en la carpeta "pages", no en "views"
app.set("views", path.join(__dirname, "pages"))

app.use(express.urlencoded({ extended: true }))

app.use("/", productosRoutes)

var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("SERVIDOR INICIADO EN EL PUERTO: " + port)
})