const express=require('express')

const app=express()


app.use("/api/v1/test",require('./routes/testRoutes'))

const PORT=3000

app.listen(PORT,()=>{
    console.log("Node Server Running");
});
