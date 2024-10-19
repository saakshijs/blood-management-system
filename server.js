const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to Blood Bank App",

    });
});


const PORT=3000

app.listen(PORT,()=>{
    console.log("Node Server Running");
});
