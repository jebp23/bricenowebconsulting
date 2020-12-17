const express = require('express');
const cors = require('cors');
const emailConfig = require('./emailConfig');
const path = require('path');

const app = express();

//Body Parser/Cors Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Endpoint
app.post('/form', (req, res) => {
    emailConfig(req.body);
    res.status(200).send();
})

//Server
app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started...')
});

//Angular project file routing
var distDir = __dirname + "/dist";
app.use(express.static(distDir));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});