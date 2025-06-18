const mongoose = require('mongoose')
const { boolean } = require('zod')
mongoose.connect("mongodb+srv://tomartushar0203:12341234@cluster0.bk76dth.mongodb.net/")

const TodoSchema=mongoose.Schema({
    Title:String,
    Description:String,
    Completed:Boolean
})

const todo=mongoose.model('todos',TodoSchema);

module.exports={
    todo
}