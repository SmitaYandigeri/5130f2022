const mysql =  require("mysql");
const dotenv = require("dotenv");
const { getConnection } = require("oracledb");
let dbInstance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DASBASE,
    port: process.env.DBPORT
});


connection.query("SELECT * FROM HOMEWORK.TEACHERS", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

class DBService {
        static getDBInstance() {
            return dbInstance ? dbInstance : new DBService;
        }

        async register(firstName, lastName, emailId, password){
            const REGISTER_USER = "INSERT INTO HOMEWORK.TEACHERS(FIRST_NAME, LAST_NAME, EMAIL_ID, PASSWORD) VALUES(?,?,?,?);";
            try {
                const response = await new Promise((resolve, reject) => {
                    connection.query(REGISTER_USER,[firstName, lastName, emailId, password], function (err, result, fields) {
                        if (err) throw err;
                        resolve(result);
                    });
                  });
            } catch (error) {
                console.log(error);
            }
        }

  }
  
  module.exports = DBService;