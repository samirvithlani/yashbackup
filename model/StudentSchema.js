const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({

        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },password:{
            type:String,
        },
        age:{
            type:Number,
        },
        role:{
            type:Schema.Types.ObjectId,
            ref:'StudentRole'
        }
},
{
    timestamps:true,
    zone:'Asia/Kolkata'
})
//model
// mongoose.model('Student',StudentSchema);
// module.exports = StudentSchema;
module.exports = mongoose.model('Student',StudentSchema);