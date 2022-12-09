const mongoose = require('mongoose')
const _User = require('../models/user.model')
const nodemailer = require('nodemailer')

const { EMAIL, PASS } = process.env



module.exports = {
    sendMail: async ({ fname, lname, email, phone, msg }) => {

        if (!fname || !lname || !email || !phone || !msg) return {
            code: 400,
            elements: [],
            message: "All input required!"
        }
        const user = await _User.findOne({ email })

        if (user) {
            const userMessage = await user.saveMessage(msg)
            console.log(userMessage)
        } else {
            const newUser = new _User({ fname, lname, email, phone, messages: { message: msg } })
            const storeUser = await newUser.save()
        }
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });
        const mailOptions = {
            from: testAccount.user,
            to: email,
            subject: "Portfolio contact",
            text: "Your response has been submitted!"
        }



        let info = await transporter.sendMail(mailOptions)
        // console.log("Email send " + info.response)

        // console.log("Message sent: %s", info.messageId);

        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        return {
            code: 200,
            elements: [],
            message: 'Email sent successfully'
        }

    }
}