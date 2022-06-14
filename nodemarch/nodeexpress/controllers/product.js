// const products = []
const Product = require('../models/product')
exports.getAddProducts = (req, res) => {
    res.render('add-product',{pageTitle: 'Add product'})
}

exports.postAddProduct = (req, res) => {
    console.log('add product',req.body);

    const productName = req.body.productName
    const price = req.body.price
    const imgUrl = req.body.imgUrl
    const description = req.body.description

    const product = new Product(productName,imgUrl,price,description)
    product.save()
    res.redirect('/')
}
exports.getProducts=(req,res,next)=>{
    const products = Product.fetchAll()
    console.log(products);
    // res.send('home page containing list of products')
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    // res.sendFile(path.join(__dirname,'..','views','shop.html'))
    res.render('shop',{productsList:products,pageTitle: 'Shop'})
}