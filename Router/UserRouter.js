const router=require("express").Router()
const jwt=require("jsonwebtoken")
const UserTable=require("../Models/User")


router.post("/signup",async(req,res)=>{
   const isExist= await UserTable.findOne({useremail:req.body.useremail})
   if(isExist)
   res.send("Already Have Account")
   else
   {
   const newuserdata=new UserTable(req.body)
   const saveddata= await newuserdata.save()
   if(saveddata)
   res.send(saveddata)
   else
   res.send("No user Exist")
   }
})

router.post("/login",async(req,res)=>{
    const isExist=await UserTable.findOne({useremail:req.body.useremail})
    if(isExist)
    {
        if(isExist.userpassword===req.body.userpassword)
        res.send(isExist)
        else
        res.send("Incorrect Password")
    }
    else
    res.send("Not Exist")
})


module.exports=router