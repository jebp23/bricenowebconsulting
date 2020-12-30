const express = require('express');
const nodemailer = require("nodemailer");
const app = express();

//Body Parser/Cors-Headers Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Angular project file routing
var distDir = __dirname + "/dist";
app.use(express.static(distDir)); 

/*Endpoint routes
var apiRoutes = require('./Backend/apiRouter');
app.use('/api', apiRoutes);*/

app.post("/api/form", function(req, res) {
    
    var formRequest = req.body;

    var transporter = nodemailer.createTransport({
        auth: {
            user: 'jebp2389@gmail.com',
            pass: '20314037'
        }
    });

    const mailOptions = {
        from: 'Briceño Web Consulting <jebp2389@gmail.com>',
        to: formRequest.email,
        subject: `Hello ${formRequest.firstName}, we're your future associates!`,
        html: `
        <head>
            <meta charset="utf-8">
            <title>Hello, future partner!</title>
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"> 
            <style type="text/css">
    
                
    
                *{
                    margin: 0px;
                    padding: 0px;
                    font-family: 'Comfortaa', cursive;
                    background-color: #272830;
                    color: white;
                }
    
                
    
                body{
                    width: 100%;
                    max-height: 1vh;;
                }
    
                #homeTitle{
                    display: flex;
                    justify-content: space-evenly;
                    width: 80%;
                    margin: 10%;
                }
    
                #homeTitle div{
                    font-size: 1.2em;
                    line-height: 1.5;
                }
                
                #mainTitle{
                    text-decoration: underline;
                    text-decoration-color: #eb2977;
                }
    
                #subHeading{
                    text-decoration: underline;
                    text-decoration-color: #36b34b;
                }
    
                #linkedin{
                    padding: 20% 0px;
                }
    
                a{
                    text-decoration-color:  #f3931c;
                }
    
                #homeLogo{
                    display: none;
                }
    
                
    
            </style>
            <script src="filename.js"></script>
            </head>
            <body>
                <div id="homeTitle">
                    <div>
                        <h1 id="mainTitle">Briceño Web Consulting<br><br><i>Thank you for contacting us</i></h1>
                        <h2 id="subHeading">We will reply very shortly</h2>
                        <h3 id="linkedin">You can get to know me through mi <a href="https://www.linkedin.com/in/jes%C3%BAs-eduardo-brice%C3%B1o-pinto-8b9b29b7/" target="_blank"><i>Linkedin</i></a> profile while you wait for our response</h3>                    
                    </div>
                </div>
                
            </body>
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) return res.status(500).send(err);
        
        else if(!info) return res.status(404).send({message: 'The email info could not be saved'});
        
        else return res.status(200).send(info);
    });
});

//Server
app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started...');
});

