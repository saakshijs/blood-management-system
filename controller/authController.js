const userModel = require("../models/userModel");
const { route } = require("../routes/testRoutes");
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken');
const registerController = async(req,res)=>{
    try{
        const existingUser=await userModel.findOne({email:req.body.email})

        if(existingUser){
            return res.status(200).send({
                sucess:false,
                message:'User is already exists'

            })
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(req.body.password,salt)
        req.body.password=hashedPassword



    const user=new userModel(req.body)
    await user.save()
    return res.status(201).send({
        success:true,
        message:"User Registered Successfully",
    })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error In Register API",
            error
        })
    }
};

const loginController =async(req,res)=>{
    try{
     const user=await userModel.findOne({email:req.body.email})
     if(!user){
        return  res.status(404).send({
            success:false,
            message:'User Not Found'
        })
     }
     const comparePassword=await bcrypt.compare(req.body.password,user.password)

     if(!comparePassword){
        return res.status(500).send({
            success:false,
            message:'Invalid Credentials'
        })
     }
     const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
     return res.status(200).send({
        success:true,
        message:'Login Successfully',
        token,
        user,
     })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Login API',
            error
    })
    }
};

module.exports={registerController,loginController};