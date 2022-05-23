const greet= require('../app')
greet()
const f=(function(){
    // console.log("hide");
    return ()=>{
        return 2+3
        // console.log("hi");
    }
})()
// function add(x,y){
//     return x+y
// }
// console.log(f);
module.exports=f;