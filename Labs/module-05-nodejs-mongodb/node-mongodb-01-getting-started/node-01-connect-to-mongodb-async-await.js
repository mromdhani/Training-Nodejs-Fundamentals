var MongoClient = require('mongodb').MongoClient;

var MONGO_URL = "mongodb://localhost:27017/mydb";

// Connect to the db
async function main () {
    let connection = await MongoClient.connect(MONGO_URI, {useNewUrlParser: true});
    console.log("Connected to Mongo")    
    await connection.close();
    console.log("Connection closed");
}