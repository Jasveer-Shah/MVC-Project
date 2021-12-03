const http = require("http")
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const errorController = require("./controllers/404")
const app = express();
// import handlebars package
  
        // define a name for the engine and the tool we are gonna use/initialize the view engine 
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin')
const shopRoute = require('./routes/shop')
        // handling different routes
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(path.join(__dirname, "public")))         // add static files as css

 app.use("/admin", adminRoutes);     // filters the file
 app.use('/', shopRoute);

 app.use(errorController.get404)

 app.listen(3000)