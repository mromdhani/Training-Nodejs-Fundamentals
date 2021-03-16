var MongoClient = require('mongodb').MongoClient;

var MONGO_URL = "mongodb://localhost:27017/";

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  let dbo = client.db("customersdb");
  let myquery = { address: "Highway 37" };
   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    client.close();
  });
});