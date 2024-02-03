const express = require("express");
const http = require("http");
const cors = require("cors");
const io = require("socket.io");
const spawn = require("child_process").spawn;
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const emailsToVerify = {}

app.get("/verify-email/:recipient", function (req, res, next) {
    const recipient = req.params.recipient;
    console.log(recipient);
    const pythonProcess = spawn('python', ['./python-scripts/emailVerification.py', recipient + "@gmail.com"]);

    pythonProcess.stdout.on('data', (data) => {
        const code = parseInt(data.toString()); // Parse the data to an integer
        console.log("Verification code:", code);
        // Here you can do something with the verification code, like sending it to the client
        res.json({ code: code }); // Sending the code back to the client
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python process closed with code ${code}`);
    });
});

app.get("/tutors/collect", function (req, res, next) {
    const tutorPyProcess = spawn('python', ['./python-scripts/findTutors.py']);

    tutorPyProcess.stdout.on('data', (data) => {
        // Remove surrounding brackets and split by comma followed by a space
        const tutors = data.toString();
        res.status(200).json(tutors);
    });

    tutorPyProcess.stderr.on('data', (data) => {
        console.error('Error:', data.toString());
    });

    tutorPyProcess.on('close', (code) => {
        console.log("Python process closed with code:", code);
    })
});

app.post("/auth/login", function (req, res, next) {
    const emailUsername = req.body.emailUsername;
    const password = req.body.passwordEntered;
});

server.listen(process.env.SERVER_PORT || 5000, () => {
    console.log("Server listening on port:", process.env.SERVER_PORT || 5000);
});