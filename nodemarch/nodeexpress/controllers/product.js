// const products = []
const Product = require('../models/product')
const mongodb = require('mongodb')
exports.getAddProducts = (req, res) => {
    if(!req.isAuthenticated()){
        res.redirect('/login')
    }

    res.render('add-product',{pageTitle: 'Add product'})
}

exports.postAddProduct = (req, res) => {
    console.log('add product',req.body);

    const productName = req.body.productName
    const price = req.body.price
    const imgUrl = req.body.imgUrl
    const description = req.body.description

    const product = new Product({
        productName:productName,
        imgUrl:imgUrl,
        price:price,
        description:description
    })
    product.save().then(()=>{console.log('products inserted successfully');})
    res.redirect('/')
}
exports.getProducts=(req,res,next)=>{
    
    if(!req.isAuthenticated()){
        res.redirect('/login')
    }

    Product.find()
    .then((products)=>{
        res.render('shop',{productsList:products,pageTitle: 'Shop'})
    })
    // console.log(products);
}

exports.getProduct = (req,res)=>{
    const prodId = req.params.id


    Product.findById(prodId)
    .then(product => {
        res.render('product_detail',{pageTitle:product.productName,
        product:product})
    })
}

exports.getEditProduct = (req,res)=>{
    const prodId = req.params.id
    Product.findById(prodId)
    .then(product =>{
        res.render('edit-product',{pageTitle:"Edit Product",product:product})

    })

}

exports.postEditProduct = (req,res)=>{

    const prodId = req.body.id
    const UproductName = req.body.productName
    const Uprice = req.body.price
    const UimgUrl = req.body.imgUrl
    const Udescription = req.body.description

    console.log(req.body);

    // const product = new Product
    // Product.findByIdAndUpdate({_id:new mongodb.ObjectId(prodId)},{
    Product.findByIdAndUpdate(new mongodb.ObjectId(prodId),
    {
        productName:UproductName,
        imgUrl:UimgUrl,
        price:Uprice,
        description:Udescription
    }
    )
    .then(result => {
        console.log('product update successfully')
        res.redirect('/')
    })

}

exports.postDeleteProduct = (req,res)=>{
    const prodId = req.body.id
    Product.findByIdAndRemove(prodId)
    .then(() =>{
        console.log('delted the product');
        res.redirect('/')
    })
    .catch(err => console.log(err))
}