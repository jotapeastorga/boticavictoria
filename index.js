const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://zeus:yUVhXH32p7npPAJ@boticacomunitaria-himc8.gcp.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("boticavictoria-stag").collection("departamentos");

   collection.find({}).toArray((error, result) => {
    if(error) {
        return response.status(500).send(error);
    }
    console.log(result);
});


   client.close();
});

