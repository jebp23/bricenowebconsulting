const express = require('express');
const path = require('path');
const cors = require('cors');
const emailConfig = require('./emailConfig');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.post('/form', (req, res) => {
    emailConfig(req.body);
    res.status(200).send();
})

var distDir = __dirname + "/dist";
app.use(express.static(distDir));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 8080);