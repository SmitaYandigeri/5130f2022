var connections = require("./database");
var app = require("./app")

app.get('/login', (request, response) => {
    console.log('login request');
    response.json({
        success:true
    });
});