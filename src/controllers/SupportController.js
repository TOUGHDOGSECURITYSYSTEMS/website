// controllers/SupportController.js
const bcrypt = require('bcrypt');
const supportModel = require("../models/SupportModel");
const nodemailer = require("nodemailer");

//GET
async function getKBentry(req, res) {
    //validate inputs
    const id = req.params.id;
    try {
        const result = await supportModel.getkbentry(id);
        return res.json(result.rows);
    } catch (err) {
        res.status(500).json("An Error occured");
    }
}




async function maurocheck(req, res) {
    //Get tech id to check
    console.log(req.query.zipcode);

    var techID = req.query.id;
    var zipcode = req.query.zipcode;
    try {
        const result = await supportModel.getTechID(techID, zipcode);
        return res.json(result.rows);
    } catch (err) {
        res.status(500).json("Error in maurocheck Controller");
    }
}

//POST Send Email
async function sendEmail(req, res) {
    //Get email data from body
    const { to, subject, text } = req.body;

    //Use Email service and credentials
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL1,
            pass: process.env.GMAIL_APP_PASSWORD,
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
        res.status(200).json({ message: "Email sent successfully" });
        console.log("was able to send email!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email" });
    }
}

async function signUpUser(req, res) {
    try {
        const { username, password, techID } = req.body;
        //first check if user exists:
        var existingUser =
            await require("../controllers/userController").getUser({
                email: username,
            });
        if (existingUser) {
            throw new Error("Email is already in use.");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser =
                await require("../controllers/userController").createUser(
                    username,
                    hashedPassword,
                    techID
                );

            res.status(200).json({
                message: "Sign up successful",
                user: newUser,
            });
        }
    } catch (error) {
        res.status(406).json({message: error.message});
    }
}

module.exports = {
    getKBentry,
    sendEmail,
    maurocheck,
    signUpUser,
};
