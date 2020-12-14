const express = require('express');
const cors = require('cors');
const configEmail = require('./emailConfig/emailConfig');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post('/form', (req, res) => {  
    configEmail(req.body);
    res.status(200).send();
})

app.use(express.static(__dirname+'/dist/personalWebsite'));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/personalWebsite/index.html'));
});

app.listen(3000);
