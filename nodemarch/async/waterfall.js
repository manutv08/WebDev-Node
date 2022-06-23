const async = require('async')

async.waterfall([
    function(callback){
        callback(null,10)
    },
    function(num, callback){
        callback(null, num+5)
    },
    function(total, callback){
        console.log(total)
        callback(null)
    }
],function(err){
    console.log('done')
})