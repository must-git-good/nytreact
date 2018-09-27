///SERVER////

//Dependencies://
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const axios = require('axios')
const env = require('dotenv').config()
const keys = require('./keys')
const mongoose = require('mongoose')

// Configuration://
const app = express()
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


// Database: //
const db = require('./models');

mongoose.connect("mongodb://localhost/nytreact", {useNewUrlParser: true});


// API ROUTES HERE:

app.post("/api/nyt", (req, res) => 
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.body.topic}&begin_date=${req.body.yearStart}0101&end_date=${req.body.endStart}0101&api-key=${keys.nytapi.key}`)
    .then(article => {
        res.json(article.data);
        console.log(JSON.stringify(article.data));
    })
    .catch(err => console.log(err))
);

app.post("/api/save", (req, res) => {
    db.Article.create(req.body)
    .then((savedItem) => {
        console.log("database updated!");
        res.json(savedItem);
    })
    .catch(err => {throw(err)});

}
);

// Routing: //
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




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



