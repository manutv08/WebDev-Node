const getDb = require('./database').getDb;
const mongodb = require('mongodb')
module.exports = class Product{
    constructor(name,imgUrl,price,description){
        this.productName = name
        this.imgUrl = imgUrl
        this.price = price
        this.description = description
    }
    save(){
        const db = getDb()
        return db.collection('products')
        .insertOne(this)
        .then(result=>{
            console.log('inserted successfully');
        })
        .catch(err=>{console.log(err);})
    }

    static fetchAll(){
        const db = getDb()
        return db.collection('products')
        .find()
        .toArray()
        .then(products=>{
            console.log(products);
            return products
        })
        .catch(err=>{console.log(err)})
    }

    static findById(prodId){
        const db = getDb()
        return db.collection('products')
        .findOne({_id:new mongodb.ObjectId(prodId)})
        .then(product => {return product})

    }
}








// const products = []
// module.exports = class Product{
//     constructor(name,imgUrl,price,description){
//         this.productName = name
//         this.imgUrl = imgUrl
//         this.price = price
//         this.description = description
//     }
//     save(){
//         products.push(this)
//     }

//     static fetchAll(){
//         return products
//     }
// }