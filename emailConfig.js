const nodemailer = require('nodemailer');

module.exports = (form) => {

var transporter = nodemailer.createTransport({
    service: 'AOL',
    auth: {
        user: 'bricenowebconsulting@aol.com',
        pass: '2020baires'
    }
});

const mailOptions = {
    from: 'Briceño Web Consulting <jebp2389@gmail.com>',
    to: form.email,
    subject: `Hello ${req.body.firstName}, we're your future associates!`,
    html : { path: './email.html' }
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err)
    console.log(err)
    else
    console.log(info);
    });
}