const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    web_url: {
        type: String,
    }
});

const Article = mongoose.model("Article", ArticleSchema);

export default Article;