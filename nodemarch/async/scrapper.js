const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

axios.get('https://www.starwars.com/news')
.then(response =>{
    // console.log(response);
    const $ = cheerio.load(response.data)

    // const sectionheader = $('.news-loop-content')
    // console.log(sectionheader.find('h1').text())

    const headings=[]
    const output = $('.news-articles li')

    output.each((index, element)=>{
        headings.push($(element).find('h2').text().trim())
    });
    fs.writeFile('./headings.json',JSON.stringify(headings),(err)=>{
        console.log(err);
    })
})
