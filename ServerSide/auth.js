module.exports = (app,path) => {

    
    const {validateCustomerCredentials,validateAdminCredentials} = require("./Middlewares.js")

    app.post("/AdminLogin",validateAdminCredentials, (req, res) => {
        console.log(req.body)
        res.render(path.join(__dirname,"..","ClientSide","AdminDashboard.ejs"));
    })
    
    app.post("/CustomerLogin",validateCustomerCredentials, async (req, res) => {
        console.log(req.body);
        res.render(path.join(__dirname,"..","ClientSide","CustomerDashboard.ejs"));
    })
}