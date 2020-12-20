const express = require('express');
const path = require('path');
const nodeMailer = ('nodemailer');

const app = express();

//Body Parser/Cors Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Endpoint
app.post('/form', (req, res) => {
    let transporter = nodeMailer.createTransport({
        service: 'AOL',
        auth: {
            user: 'bricenowebconsulting@aol.com',
            pass: '2020baires'
        }
    });

    let mailOptions = {
        from: 'Briceño Web Consulting <jebp2389@gmail.com>',
        to: req.body.email,
        subject: `Hello ${req.body.firstName}, we're your future associates!`,
        html : { path: './email.html' }
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.send();
  });



//Server
let server = app.listen(process.env.PORT || 8080, ()=>{
    let port = server.address().port;
    console.log("Server started at http://localhost:", port);
});

//Angular project file routing
var distDir = __dirname + "/dist";
app.use(express.static(distDir));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});