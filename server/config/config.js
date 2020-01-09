//PORT
process.env.PORT = process.env.PORT || 3000;

//ENVIRONMENT
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//MONGO URL CONNECTION
let urlDB = 'mongodb+srv://zeus:yUVhXH32p7npPAJ@boticacomunitaria-himc8.gcp.mongodb.net/stag?retryWrites=true&w=majority';
if (process.env.NODE_ENV === 'production'){
    urlDB =process.env.MONGO_URI;
}

process.env.URLDB = urlDB;