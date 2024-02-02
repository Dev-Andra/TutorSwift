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


server.listen(process.env.SERVER_PORT || 5000, () => {
    console.log("Server listening on port:", process.env.SERVER_PORT || 5000);
});