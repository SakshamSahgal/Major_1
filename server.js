const express = require('express')
const app = express()
const path = require("path");
const mqttSubscriber = require('./mqtt.js')
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Parse JSON and URL-encoded data
app.use(express.json()); // To support JSON-encoded bodies
app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {
    console.log('Server is running on port 3000')
    mqttSubscriber()
})

app.get('/', (req, res) => {
    res.render(path.join(__dirname,"ClientSide","index.ejs"))
})

app.post("/AdminLogin", (req, res) => {
    console.log(req.body)
})

app.post("/CustomerLogin", (req, res) => {
    console.log(req.body)
})