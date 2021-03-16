var MongoClient = require('mongodb').MongoClient;

var MONGO_URL = "mongodb://localhost:27017/";

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  let dbo = client.db("customersdb");
  var myobj = { name: "Company Inc", address: "Highway 37" };

  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });
});