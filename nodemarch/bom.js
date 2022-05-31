// 26/05/2022
// function hello(){
//     alert('hello')
// }
calc = (function(){
    return{
        b:5,
        add:function(value){
            const v = parseInt(value);
            return v+this.b
        }
    }
}())