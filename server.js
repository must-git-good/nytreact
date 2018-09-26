///SERVER////

//Dependencies://
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const env = require('dotenv').config()
const keys = require('./keys')

// Configuration://
const app = express()
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


console.log("==========: ", keys.nytapi)

// Routing: //
app.get("/", (req, res) => res.send("Connected"));

app.post("/api/nyt", (req, res) => 
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.body.topic}&begin_date=${req.body.yearStart}&end_date=${req.body.endStart}&api-key=${keys.nytapi.key}`)
    .then(article => {
        res.json(article.data);
        console.log(JSON.stringify(article.data));
    })
    .catch(err => console.log(err))
);


// LISTEN! //
app.listen(3001, () => {
    console.log("Express server is listening on PORT: " + PORT);
});



// //MONGODB STUFF:

// const mongoose = require('mongoose');
// const Article = require('./models/articles');

// mongoose.connect('mongodb://localhost/nytreact');
// //DO THE NPM INSTALL


// Article.create({
//     value:"",
//     val2: "",
//     etc: ""
// }).then({

// }).catch(function(err) {
//     console.log(err);
// })



