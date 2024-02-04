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
        const tutorsString = data.toString(); // Convert Buffer to string
        console.log(tutorsString)

        // Remove brackets and split the string into tuples
        const tuplesArray = tutorsString.slice(1, -1).split('),(');

        // Map over each tuple string and convert it into an array of values
        const arrayOfTuples = tuplesArray.map(tupleString => {
            // Remove surrounding parentheses and split by comma
            return tupleString.slice(1, -1).split(', ');
        });

        res.status(200).json(arrayOfTuples); // Send the array of tuples as JSON response

    });

    tutorPyProcess.stderr.on('data', (data) => {
        console.error('Error:', data.toString());
    });

    tutorPyProcess.on('close', (code) => {
        console.log("Python process closed with code:", code);
    })
});

app.get('/tutors/status/:tutorUsername', function (req, res, next) {
    const tutorUsername = req.params.tutorUsername;
    console.log(tutorUsername)

    const findStatusPyProcess = spawn('python', ['./python-scripts/status.py', 'getStatus', tutorUsername]);

    findStatusPyProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        console.log(data.toString().substring(5, data.toString().length - 5));
        res.status(200).send(data.toString().substring(5, data.toString().length - 5));
    });

    findStatusPyProcess.stderr.on('data', (data) => {
        console.error("Error:", data.toString());
    })

    findStatusPyProcess.on('close', (code) => {
        console.log("Python process closed with code:", code);
    })
});

app.get('/tutors/email/:tutorUsername', function (req, res, next) {
    const tutorUsername = req.params.tutorUsername;
    console.log(tutorUsername)

    const findStatusPyProcess = spawn('python', ['./python-scripts/getEmail.py', tutorUsername]);

    findStatusPyProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        console.log(data.toString().substring(5, data.toString().length - 5));
        res.status(200).send(data.toString().substring(5, data.toString().length - 5));
    });

    findStatusPyProcess.stderr.on('data', (data) => {
        console.error("Error:", data.toString());
    })

    findStatusPyProcess.on('close', (code) => {
        console.log("Python process closed with code:", code);
    })
});

app.post("/auth/register", function (req, res, next) {
    const data = req.body.data;

    const registerPyProcess = spawn('python', ['./python-scripts/userPassword.py', data.username, data.password, data.email, data.role]);

    registerPyProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        res.status(200).send(data.toString());
    });

    registerPyProcess.stderr.on('data', (data) => {
        console.log("Error:", data.toString());
    });

    registerPyProcess.stdout.on('close', (code) => {
        console.log("Pyhton process closed with code:", code);
    });
});

server.listen(process.env.SERVER_PORT || 5000, () => {
    console.log("Server listening on port:", process.env.SERVER_PORT || 5000);
});