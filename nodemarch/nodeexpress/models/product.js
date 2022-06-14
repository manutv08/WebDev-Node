const products = []
module.exports = class Product{
    constructor(name,imgUrl,price,description){
        this.productName = name
        this.imgUrl = imgUrl
        this.price = price
        this.description = description
    }
    save(){
        products.push(this)
    }

    static fetchAll(){
        return products
    }
}