module.exports = function (app) {
    
    const {readDB} = require("./MongoOperations.js");

    app.get("/tracks/:id", (req, res) => {

        console.log(req.params.id);

        readDB("Tracks", "Routes", { "houseName": req.params.id }).then((result) => {
            res.send(result);
        }).catch((error) => {
            console.log(error);
            res.send([]);
        })

    });
}