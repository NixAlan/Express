const express = require("express")
const mongoose = require("mongoose")
const app = express()
const portNumber = 8000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const dbName = 'my_first_db';
mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`you are connected to the ${dbName} database!`)
})
.catch((err)=>{
    console.log(`there was an error connecting to the ${dbName} database!`)
    console.log(err)
})

// schema to shape our document and model to interface with db logic 
const Studentschema = new mongoose.Schema({

    name: {
        type: String
    },
    home_state: {
        type: String
    },
    lucky_number: {
        type: Number
    },
    birthday: {
    type: Object
    } 

},{timestamps: true})

//The Model is a combination of the:
//1. collectionName wich will be a singular, capitalized verson of the collection name that's held in the db
//2. the schema
const Student = mongoose.model('Student',Studentschema);

// our logic

app.post("/api/students", (req,res)=>{
Student.create(req.body)
.then((newStudent)=>{
    console.log(newStudent)
    res.json(newStudent)
})
.catch((err)=> console.log(err))
})



app.listen(8000,()=> console.log(`Server is connected on port ${portNumber}`))