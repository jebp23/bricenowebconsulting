const express = require('express');
const path = require('path');
const cors = require('cors');
const emailConfig = require('')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.post('/contactForm', (req, res) => {    
    emailConfig()
})

var distDir = __dirname + "/dist";
app.use(express.static(distDir));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 8080);