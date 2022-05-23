let jokes = require("./jokes")
let math = require("./math")
let app={}
app.config={
    'timeBetweenJoKes':1000
}
app.printJokes=function (){
var arr_allJokes = jokes.allJokes()
var totalNoOfJokes = arr_allJokes.length

var selectedno = math.getRandomNumber(1,totalNoOfJokes);
var joke = arr_allJokes[selectedno-1]
console.log(joke);
}
app.indefintely=function(){
    console.log(this.config.timeBetweenJoKes)
    setInterval(()=>this.printJokes(),this.config.timeBetweenJoKes)
}
// console.log(totalNoOfJokes);
app.indefintely()