const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


MongoConnect = (callback) => {
    MongoClient.connect("mongodb+srv://manu:simple@cluster0.h7gwpdc.mongodb.net/cart?retryWrites=true&w=majority")
        .then(client => {
            console.log("Database connected");
            callback(client)
        })
        .catch(err => console.log(err))

}

module.exports = MongoConnect;