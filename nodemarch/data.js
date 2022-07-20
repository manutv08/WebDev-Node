const { emit } = require("process")
const { db } = require("./nodeexpress/models/user")

db.flightdata.insertOne({
    departureAirport:"Tvm",
    arrivalAirport:"Koc",
    aircraft:"Airbus 320",
    distance:400,
    interContinental:false
})
db.flightdata.insertOne({
    departureAirport:"Koc",
    arrivalAirport:"Bom",
    aircraft:"Airbus 320",
    distance:1200,
    interContinental:false
})

db.flightdata.insertMany([
    {
        departureAirport:"Tvm",
        arrivalAirport:"Koc",
        aircraft:"Airbus 320",
        distance:400,
        interContinental:false
    },
    {
    departureAirport:"Koc",
    arrivalAirport:"Bom",
    aircraft:"Airbus 320",
    distance:1200,
    interContinental:false
}
])

var Employee = [
    {
        empid:1,
        empname:"Ajesh"
    },
    {
        empid:1,
        empname:"Binu"
    },
    {
        empid:1,
        empname:"Raji"
    },
]

db.product.insert([
    {'prod_name':'pen',"quantity":5,"price":5},
    {'prod_name':'pen',"quantity":15,"price":25},
    {'prod_name':'pen',"quantity":25,"price":35},
    {'prod_name':'pen',"quantity":5,"price":15},
    {'prod_name':'pen',"quantity":15,"price":25},
])
db.product.find(
    {
    $and:[{ quantity: {
              $gt: 10,$lt:25
                    }},
            {price: {
                $lt: 20
                }
    
       
        }]
    })

    db.hobbies.insertMany([
        {_id:"sports", name:"sports"},
        {_id:"cooking", name:"cooking"},
        {_id:"cycling", name:"cycling"}
    ])

    db.hobbies.insertMany([
        {_id:"yoga", name:"yoga"},
        {_id:"cooking", name:"cooking"},
        {_id:"swimming", name:"swimming"}
    ])

    db.students.insertOne(
   {
     "_id": 1,
     "quizzes": [
       { "id" : 1, "score" : 6 },
       { "id" : 2, "score" : 9 }
     ]
   }
)

db.students.updateOne(
   { _id: 1 },
   {
     $push: {
       quizzes: {
         $each: [ { id: 3, score: 8 }, { id: 4, score: 7 }, { id: 5, score: 6 } ],
         $sort: { score: 1 }
       }
     }
   }
)
db.posts.find().count()
db.posts.find().count()
white_check_mark
eyes
raised_hands





db.posts.find().count()
db.posts.find({st_id:1307585})
db.posts.createIndex({st_id:1})
db.posts.find({st_id:1307585})
db.posts.findOne({st_id:1307585})

db.persons.aggregate([
    {$match:{favoriteFruit:"banana"}},
    {$group:{_id:{age:"$age", eyeColor:"$eyeColor"}}}
])
db.contacts.aggregate([
    {$match:{gender:"female"}},
     {$group:{_id:{state:"$location.state"},
     totalPersons:{$sum:1}}}])

db.contacts.aggregate([
    {$match:{"dob.age":{$gt:50}}},
     {$group:{_id:{gender:"$gender"}, 
    numberOfPersons:{$sum:1},
    averageAge: {$avg:"$dob.age"}}},
    {$sort:{numberOfPersons:-1}}
])

db.persons.aggregate([
    {$group:{_id:{favoriteFruit:"$favoriteFruit"}}},
    {$sort:{favoriteFruit:1}}
])

db.persons.aggregate([
    {$match:{eyeColor:{$ne:"blue"}}},
    {$group:{_id:{eyeColor:"$eyeColor", favoriteFruit:"$favoriteFruit"}}},
    {$sort:{"_id.eyeColor":1,"_id.favoriteFruit":1}}
])

db.persons.aggregate([
    {$project:{_id:0,name:1,"company.location.country":1}},
    {$count:"documents"}
]).pretty()

db.persons.aggregate([
    {$match:{age:{$gt:35}}},
    {$project:{_id:0,name:1,gender:1}},
]).pretty()

db.persons.aggregate([
    {$limit:10},
    {$project:{
        _id:0,
        name:1,
        info:{
            eyes:"$eyeColor",
            fruit:"$favoriteFruit",
            country:"$company.location.country"
        }
    }}
]).pretty()

db.contacts.aggregate([
    {$project:{_id:0, gender:1, 
        fullname:{$concat:[{$toUpper:"$name.first"}, ' ', {$toUpper:"$name.last"}]}}}
])

db.friends.insertMany(
    [
        {
          "name": "John",
          "hobbies": ["Sports", "Cooking"],
          "age": 29,
          "examScores": [
            { "subject": 4, "score": 57.9 },
            { "subject": 6, "score": 62.1 },
            { "subject": 3, "score": 88.5 }
          ]
        },
        {
          "name": "Manu",
          "hobbies": ["Eating", "Films"],
          "age": 30,
          "examScores": [
            { "subject": 7, "score": 52.1 },
            { "subject": 2, "score": 74.3 },
            { "subject": 5, "score": 53.1 }
          ]
        },
        {
          "name": "Smitha",
          "hobbies": ["Cooking", "Reading"],
          "age": 29,
          "examScores": [
            { "subject": 3, "score": 75.1 },
            { "subject": 8, "score": 44.2 },
            { "subject": 6, "score": 61.5 }
          ]
        }
      ]
)

db.friends.aggregate([
    {$group:{_id:{age:"$age"},
    allHobbies:{$push:"$hobbies"}}}
])

db.friends.aggregate([
    {$unwind:"$hobbies"},
    {$group:{_id:{age:"$age"},
    allHobbies:{$addToSet:"$hobbies"}}}
])

db.friends.aggregate([
    {$project:{_id:0, examScores:{$slice:["$examScores",1]}}}
])

db.friends.aggregate([
    {$unwind:"$examScores"},
    {$project:{_id:0, name:1, age:1, 
        score:"$examScores.score"}},
    {$sort:{score:-1}},
    {$group:{_id:"$name", maxScore:{$max:"$score"}}},
    {$sort:{maxScore:-1}},
]).pretty()

db.persons.aggregate([
    {$unwind:"$tags"},
    {$project:{_id:0, name:1, gender:1, 
        tags:"$tags"}},
]).pretty()
db.persons.aggregate([
    {$unwind:"$tags"},
    {$project:{_id:0, name:1, gender:1, 
        tags:1}},
]).pretty()

db.persons.aggregate([
    {$unwind:"$tags"},
    {$group:{_id:"$age", count:{$sum:1}}},
]).pretty()

db.persons.aggregate([
    {$project:{_id:0, tags:{$size:"$tags"}}}
])


db.products.aggregate([
    {
        $project:{
            _id:0, name:1,
            items:{$filter:{input: '$items', as: 'it', cond: {$gte: ["$$it.price", 100]}}}
        }
    }
]).pretty()

db.products.insertMany(
    [
  {
   _id: 0,
   items: [
     { item_id: 43, quantity: 2, price: 10 },
     { item_id: 2, quantity: 1, price: 240 }
   ]
},
{
   _id: 1,
   items: [
     { item_id: 23, quantity: 3, price: 110 },
     { item_id: 103, quantity: 4, price: 5 },
     { item_id: 38, quantity: 1, price: 300 }
   ]
},
{
    _id: 2,
    items: [
       { item_id: 4, quantity: 1, price: 23 }
    ]
}
]
)

db.products.aggregate([
    {
        $project:{
            _id:1,
            :{$filter:{input: '$examScores', as: 'sc', cond: {$gt: ["$$sc.score", 60]}}}
        }
    }
]).pretty()

db.posts.insertMany([
   {title:"my first post", author:"Jim", likes:5},
   {title:"my second post",author:"Jim", likes:2 },
   {title:"my cars",author:"Jayesh", likes:10 },
])
db.comments.insertMany([
    {postTitle:"my first post", comment:"great read", likes:4},
    {postTitle:"my second post", comment:"nice information", likes:1},
    {postTitle:"my second post", comment:"not too bad", likes:2},
    {postTitle:"my cars", comment:"my favorite", likes:10}

 ])

 db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"title",
        foreignField:"postTitle",
        as:"comments"
    }}
 ]).pretty()

 db.friends.aggregate([
    {$group:{_id:{age:"$age"}}},
    {$out:"ncol"}
 ])

 db.car.insertMany(
            [
               {_id:1, name:"Alto", color:"red", cno:"H410", country:"India"},
               {_id:2, name:"Polo", color:"white", cno:"H411", country:"Japan"},
               {_id:3, name:"Audi", color:"black", cno:"H412",country:"USA"}
            ])

db.car.insertMany(
  [
  { _id: 1, name: "Alto", color: "Red",cno: "H410",speed:40,mfdcountry: "India"},
  { _id: 2, name: "Polo", color: "White",cno: "H411",speed:45,mfdcountry: "Japan" },
  { _id: 3, name: "Audi", color: "Black",cno: "H412",speed:50,mfdcountry: "Germany" }
  ]
  )


db.car.findAndModify({
    query:{name:"Alto"},
    sort:{cno:1},
    update:{$inc:{speed:10}},
    new:true
})

db.car.findAndRemove(
    {
        query:{name:"Alto"},
        sort:{cno:1},
        update:{$inc:{speed:10}},

    }
)
db.orders.insertMany([
   {_id:1, name:"John", price:250, item_ordered:["Apples", "oranges"]},
   {_id:2, name:"Jaya", price:150, item_ordered:["vegetables", "oranges"]},
   {_id:3, name:"John", price:200, item_ordered:["Mango", "vegetables"]},
   {_id:4, name:"Jaya", price:50, item_ordered:["vegetables"]},
])

const mapFunction = function(){
    emit(this.name, this.price)
}
const reduceFunction = function(keyname, valueprice){
    return Array.sum(valueprice)
}

db.orders.mapReduce(mapFunction, reduceFunction, {out:"map_reduce"})

db.orders.aggregate([
    {$group:{_id:"$name", value:{$sum:"$price"}}},
    {$out:"map_aggregate"}
])


function getNextSequenceValue(sequencename){
    const sequencename = db.counters.findAndModify({
        query:{_id:sequencename},
        update:{$inc:{sequence_value:1}},
        new:true
    })
    return sequenceDocument.sequence_value
}
function getNextSequenceValue(sequencename){
   const sequenceDocument = db.counters.findAndModify({
      query:{_id:sequencename},
      update:{$inc:{sequence_value:1}},
      new:true
   });

   return sequenceDocument.sequence_value

 }

 db.phone.insertOne({
    "_id":getNextSequenceValue("productid"),
    product_name:"Apple Iphone",
    category:"mobiles"
 })
 db.phone.insertOne({
    "_id":getNextSequenceValue("productid"),
    product_name:"VIVO",
    category:"mobiles"
 })


db.users.insertOne({
    _id:1,
    address:{$ref:"ad_home",$id:2, $db:"newdb"},
    age:30,
    name:"manu"
})
db.ad_home.insertOne({
    _id:2, building:"111",
    city:"EKM", pin:456789
})

var user = db.users.findOne({name:"manu"})
var dbRef = user.address
db[dbRef.$ref].findOne({_id:(dbRef.$id)})

mongodump --db=
mongoexport -db test -collection traffic -out traffic.json





