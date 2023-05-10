const router=require("express").Router()
const jwt=require("jsonwebtoken")
const UserTable=require("../Models/User")
const bcrpyt=require("bcryptjs")


router.post("/signup",async(req,res)=>{
   const isExist= await UserTable.findOne({useremail:req.body.useremail})
   if(isExist)
   res.send("Already Have Account")
   else
   {
   const salt=await bcrpyt.genSalt()
   const hashedpassword=await bcrpyt.hash(req.body.userpassword,salt)
   console.log(hashedpassword)
   const newuserdata=new UserTable({userpassword:hashedpassword,useremail:req.body.useremail,username:req.body.username})
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
        const ispasswordcorrect= await bcrpyt.compare(req.body.userpassword,isExist.userpassword)
        if(ispasswordcorrect)
        res.send(isExist)
        else
        res.send("Incorrect Password,",)
    }
    else
    res.send("Not Exist")
})


module.exports=router