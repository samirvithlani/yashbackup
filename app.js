//server creation
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


const studentRouter = require('./routes/StudentRoutes');
const studentRoleRouter = require('./routes/StudentRoleRoutes');
app.use('/student',studentRouter);
app.use('/studentRole',studentRoleRouter);

//db
mongoose.connect("mongodb://127.0.0.1:27017/sms",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
