const nodemailer = require("nodemailer");

async function sendEmail(subject, message, text, email, attachment) {
    let attach = [];
    if (attachment) {
        attach = attachment;
    }
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        service: "gmail",
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.senderEmail, // generated ethereal user
            pass: process.env.senderPassword, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Task"<${process.env.senderEmail}>`, // sender address
        to: `${email}`, // list of receivers
        subject: subject, // Subject line
        attachments: attach,
        text: text, // plain text body
        html: message, // html body
    });
}
module.exports = { sendEmail }