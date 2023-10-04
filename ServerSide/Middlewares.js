
const {readDB} = require("./MongoOperations.js");

async function validateCustomerCredentials(req,res,next){

    const result = await readDB("Access","Customers",{"username" : req.body.customerUsername , "password" : req.body.customerPassword})
    
    if(result.length>0)
        next();
    else
        return res.send("Wrong Credentials");
}

async function validateAdminCredentials(req,res,next){

    const result = await readDB("Access","Admin",{"username" : req.body.adminUsername , "password" : req.body.adminPassword})
    
    if(result.length>0)
        next();
    else
        return res.send("Wrong Credentials");
}

module.exports = {validateCustomerCredentials,validateAdminCredentials}