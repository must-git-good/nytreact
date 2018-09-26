const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        validate: [
            function(input){
                return input.length >= SET_VALUE_W_CONST_ABOVE
            }
        ]
    },
});

const Article = mongoose.model("Article", ArticleSchema);

export default Article;