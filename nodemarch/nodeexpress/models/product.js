const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productName : String,
    imgUrl : String,
    price: Number,
    description: String,
})

module.exports = mongoose.model('Product', productSchema)

// const getDb = require('./database').getDb;
// const mongodb = require('mongodb')
// module.exports = class Product{
//     constructor(name,imgUrl,price,description,id){
//         this.productName = name
//         this.imgUrl = imgUrl
//         this.price = price
//         this.description = description
//         this._id = id
//     }

//     save(){

//         let dbop;
//             const db = getDb()
//             console.log('save',this._id)
//         if(this._id){

//             dbop = db.collection('products')
//             .updateOne({_id:new mongodb.ObjectId(this._id)},{$set:this})

//         }else{
//             dbop = db.collection('products')
//             .insertOne(this)
//         }

//         return dbop
//         .then(result =>{console.log(result)})
//         .catch(err => {console.log(err);})

//         // const db = getDb()
//         // return db.collection('products')
//         // .insertOne(this)
//         // .then(result=>{
//         //     console.log('inserted successfully');
//         // })
//         // .catch(err=>{console.log(err);})
//     }

//     // static findByIdandUpdate(prodId){
//     //     const db = getDb()
//     //     return db.collection('products')
//     //     .updateOne({_id:new mongodb.ObjectId(prodId)},{$set:this})
//     //     .then(result =>{console.log('updated successfully')})
//     //     .catch(err=>{console.log(err);})
//     // }

//     static fetchAll(){
//         const db = getDb()
//         return db.collection('products')
//         .find()
//         .toArray()
//         .then(products=>{
//             console.log(products);
//             return products
//         })
//         .catch(err=>{console.log(err)})
//     }

//     static findById(prodId){
//         const db = getDb()
//         return db.collection('products')
//         .findOne({_id:new mongodb.ObjectId(prodId)})
//         .then(product => {return product})

//     }

//     static deleteById(prodId){
//         const db = getDb()
//         return db.collection('products')
//         .deleteOne({_id:new mongodb.ObjectId(prodId)})
//         .then(result => {console.log('product Deleted')})
//         .catch(err=>console.error(err))
//     }
// }








// // const products = []
// // module.exports = class Product{
// //     constructor(name,imgUrl,price,description){
// //         this.productName = name
// //         this.imgUrl = imgUrl
// //         this.price = price
// //         this.description = description
// //     }
// //     save(){
// //         products.push(this)
// //     }

// //     static fetchAll(){
// //         return products
// //     }
// // }