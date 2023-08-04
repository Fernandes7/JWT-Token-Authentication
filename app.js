const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const QuestionRouter=require("./Router/QuestionRouter")
const UserRouter=require("./Router/UserRouter")
port=8000

app.use(cors())
app.use(express.json({ limit: '10mb' }));


app.use("/",QuestionRouter)
app.use("/",UserRouter)


mongoose.connect("mongodb+srv://Ferno:123@cluster0.wqriud4.mongodb.net/Amalcp").then(()=>console.log("Connected to Database"))
app.listen(port,(req,res)=>{
    console.log("Server Started Success fully")
})