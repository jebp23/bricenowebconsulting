const express = require('express');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const app = express();

//Body Parser/Cors-Headers Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors({ origin: "*" }));

//Server
app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started...');
});

//Angular project file routing
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//Endpoint
app.post('/api/form', (req, res) => {
    let body = req.body;

    let transporter = nodeMailer.createTransport({
        service: 'AOL',
        auth: {
            user: 'bricenowebconsulting@aol.com',
            pass: '2020baires'
        }
    });

    let mailOptions = {
        from: 'Briceño Web Consulting <jebp2389@gmail.com>',
        to: body.email,
        subject: `Hello ${body.firstName}, we're your future associates!`,
        html: {path: './email.html'}
    };


    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
        console.log(err)
        else
        console.log(info);
        });

    res.status(200).send();
});
