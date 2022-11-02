const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { request, response } = require("express");
const DBService = require("./database");
const bodyParser = require('body-parser');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(process.env.PORT , () => {
    console.log("Server Started On 3000...")
});


app.get('/login', (request, response) => {
    console.log('Processing Login Request...');
    
    response.json({
        success:true
    });
});

app.post('/register', (request, response) => {
    console.log('Processing Register Request...');
    console.log(request.body);
    const {firstName, lastName, emailId, password} = request.body;

    const db = DBService.getDBInstance();
    db.register(firstName, lastName, emailId, password);
    
    response.json({
        success:true
    });
});