const mongodb = require('mongodb');
// const { get } = require('../routes/admin');
const MongoClient = mongodb.MongoClient

let _db;
MongoConnect = (callback) => {
    MongoClient.connect("mongodb+srv://user:<password>@cluster0.h7gwpdc.mongodb.net/cart?retryWrites=true&w=majority")
        .then(client => {
            console.log("Database connected");
            _db = client.db()
            callback()
        })
        .catch(err => console.log(err))

}

const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'no database found'
}
exports.MongoConnect = MongoConnect
exports.getDb = getDb