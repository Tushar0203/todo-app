require('dotenv').config(); 
const express = require('express')
const cors = require('cors')
const { Todo, User } = require('./types')
const { todo } = require('./db')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));
app.get("/todos", async function (req, res) {
    const data = await todo.find()
    res.json(data)
})
app.post("/todo", async function (req, res) {
    const data = Todo.safeParse(req.body);
    console.log(req.body)
    if (!data.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    await todo.create({
        Title: req.body.title,
        Description: req.body.description,
        Completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})
app.put("/completed", async function (req, res) {
    const v = User.safeParse(req.body);
    if (!v.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    const data = await todo.updateOne({
        _id: req.body.id
    }, {
        Completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})