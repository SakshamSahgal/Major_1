const express = require('express')
const app = express()
const path = require("path");


require("dotenv").config()
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"..","Static")));
// Parse JSON and URL-encoded data
app.use(express.json()); // To support JSON-encoded bodies
app.use(express.urlencoded({ extended: false }));


require("./auth.js")(app,path);
require("./websocket.js")(app);
require("./Tracks.js")(app)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.render(path.join(__dirname,"..","ClientSide","index.ejs"))
})

