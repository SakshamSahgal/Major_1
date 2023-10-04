const app = require('express')()
const path = require("path");
const mqttSubscriber = require('./mqtt.js')
// Set the view engine to EJS
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is running on port 3000')
    mqttSubscriber()
})

app.get('/', (req, res) => {
    res.render(path.join(__dirname,"ClientSide","index.ejs"))
})