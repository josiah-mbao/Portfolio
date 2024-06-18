const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send-email', (req, res) => {
    console.log('Received POST request to /send-email'); // Log to confirm request is received
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`); // Log received data

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: email,
        to: 'josiahmbaomc@gmail.com',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log the error
            return res.status(500).json({ message: 'Error sending email' });
        }
        console.log('Email sent:', info.response); // Log success message
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
