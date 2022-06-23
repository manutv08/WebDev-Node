const async = require('async')

fruits = []
const apple = function(callback){
    //actions

    callback(null, "apple")
}

const Orange = function(callback){
    callback(null,"orange")
}

const Grapes = function(callback){
    callback(null,"grapes")
}

fruits.push(apple)
fruits.push(Orange)
fruits.push(Grapes)

async.parallel(fruits, function(err, result){
    console.log(result)
})