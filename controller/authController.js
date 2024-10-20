const userModel = require("../models/userModel");
const { route } = require("../routes/testRoutes");
const bcrypt=require("bcryptjs")
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

const loginController =()=>{};

module.exports={registerController,loginController};