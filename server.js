const express = require('express');
const app = express();


//Body Parser/Cors-Headers Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/

//Angular project file routing
var distDir = __dirname + "/dist";
app.use(express.static(distDir)); 

//Endpoint routes
var apiRoutes = require('./Backend/apiRouter');
app.use('/api', apiRoutes);

//Server
app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started...');
});