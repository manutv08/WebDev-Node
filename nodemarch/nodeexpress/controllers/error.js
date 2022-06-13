exports.get404=(req,res)=>{
    // res.status(404).send("<h1>404 Error</h1>")
    // res.status(404).sendFile(path.join(rootDir,'views','404.html'))
    res.status(404).render('404',{pageTitle: '404'})
}