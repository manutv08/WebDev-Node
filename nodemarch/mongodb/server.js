const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localHost:27017";

const client = new MongoClient(url);

async function run(){
    try{
        await client.connect()
        const db = client.db('product')
        const coll = db.collection('product')
        const query =  {name:"Java", price:250, details:null}
        const result =  await coll.insertOne(query)
        console.log(result);
    } catch(err){
        console.log(err);
    }finally{
        await client.close()
    }
}
run()