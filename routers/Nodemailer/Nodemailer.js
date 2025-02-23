const NodeMailer = require("nodemailer");

const transporter = NodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "process.env.EMAIL",
    pass: "process.env.PASSWORD",
  },
});

const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: "process.env.EMAIL",
        to,
        subject,
        text,
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
        console.log('Error sending email'err);
        } else {
        console.log('Email sent'info.response);
        }
    });
    }