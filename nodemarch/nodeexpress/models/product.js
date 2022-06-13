const products = []
module.exports = class Product{
    constructor(name){
        this.productName = name
    }
    save(){
        products.push(this)
    }

    static fetchAll(){
        return products
    }
}