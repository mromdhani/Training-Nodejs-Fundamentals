var MongoClient = require('mongodb').MongoClient;

var MONGO_URL = "mongodb://localhost:27017/studentsdb";

// Connect to the db
// Note: The db will be created if it does not exist
MongoClient.connect(MONGO_URL, { useUnifiedTopology: true}, function (err, db) {
    if (err) throw err;
    console.log("Connection established successfully!");
    db.close();
    // db.close(err, function () {
    //     console.log("Connection Closed successfully!");
    // });
});
