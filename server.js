const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const cors=require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app=express();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


app.use("/api/v1/test",require('./routes/testRoutes'));
app.use("/api/v1/auth",require("./routes/authRoutes"));
const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgBlue.white);
});
