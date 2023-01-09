const studentRoleSchema = require('../model/StudentRoleSchema');


exports.createStudentRole = (req,res)=>{
    const studentRole = new studentRoleSchema(req.body);
    studentRole.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:err || "Something went wrong"
            })
        }
        else{
            res.status(200).json({
                message:"StudentRole created successfully",
                data:data
            })
        }
    })
}