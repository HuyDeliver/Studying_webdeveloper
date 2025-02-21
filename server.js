const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME
const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/router/web')
const connection = require('./src/config/database')
//config template engine
configViewEngine(app)
//phải khai báo middleware trước khi khai báo route
//config reg.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//Khai báo route
app.use(webRoutes)
//app.Method(Path, Handler)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
