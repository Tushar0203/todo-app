
const mongoose = require('mongoose');

mongoose.connect(process.env.URL);

mongoose.connect(process.env.URL)

const TodoSchema=mongoose.Schema({
    Title:String,
    Description:String,
    Completed:Boolean
})

const todo=mongoose.model('todos',TodoSchema);

module.exports={
    todo
}