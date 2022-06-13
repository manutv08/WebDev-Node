// const products = []
const Product = require('../models/product')
exports.getAddProducts = (req, res) => {
    res.render('add-product',{pageTitle: 'Add product'})
    // res.sendFile(path.join(rootDir,'views','add-product.html'))
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    // res.send('<form action="/product" method="post"><input type="text" name="product"><button type= "submit" value="">Add product</button></form>')
    console.log('first middleware');
}

exports.postAddProduct = (req, res) => {
    console.log('add product',req.body);
    const product = new Product(req.body.productName)
    // products.push(req.body.productName)
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