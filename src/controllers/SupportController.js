// controllers/SupportController.js
const supportModel = require('../models/SupportModel');
const nodemailer = require('nodemailer');


//GET 
async function getKBentry(req, res){

    //validate inputs
    const id = req.params.id;
    try{
        const result = await supportModel.getkbentry(id);
        return res.json(result.rows)

    }catch(err){
        res.status(500).json("An Error occured")
    }

};


//POST Send Email

async function sendEmail(req, res){
    //Get email data from body
    const {to, subject, text} = req.body;

    //Use Email service and credentials
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL1,
            pass: process.env.GMAIL_APP_PASSWORD
        },
    });

    const mailOptions = {
        from: process.env.EMAIL1,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
        console.log('was able to send email!');
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
      }



};





module.exports = {
    getKBentry, 
    sendEmail
}