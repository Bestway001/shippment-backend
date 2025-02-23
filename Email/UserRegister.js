const express = require("express");
const app = express();
app.use(express.json());


app.post("/register", (req, res) => {
    // Registration logic here
    const {email} = req.body;
    if (!email) return res.status(400).json({ error: "Email is required"});
   
    const subject = "Welcome to Bestway Logistics";
    const text = `Welcome to Bestway Logistics. We are excited to have you on board your code is: ${process.env.AUTH_CODE}`;
    sendMail(email, subject, text);


    res.status(200).json ({ message: "Registration successful. check your email for your code"});
});