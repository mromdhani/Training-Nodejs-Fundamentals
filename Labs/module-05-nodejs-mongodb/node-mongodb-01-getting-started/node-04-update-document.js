var MongoClient = require('mongodb').MongoClient;

var MONGO_URL = "mongodb://localhost:27017/";

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  let dbo = client.db("customersdb");
  let myquery = { address: "Highway 37" };
  let newvalues = { $set: {name: "Business Training", address: "Brussels, BE" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    client.close();
  });
});