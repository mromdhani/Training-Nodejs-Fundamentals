var MongoClient = require('mongodb').MongoClient;

var MONGO_URL = "mongodb://localhost:27017/";

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  let dbo = client.db("customersdb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
});