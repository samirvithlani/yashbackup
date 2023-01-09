const StudentSchema  = require('../model/StudentSchema');

exports.updateStudent = (req,res)=>{

    var id = req.params.id
    StudentSchema.findByIdAndUpdate(id,req.body,(err,data)=>{

        if(err){
            res.status(500).json({
                message:err || "Something went wrong"
            })
        }
        else{
            if(data){
                res.status(200).json({
                    message:"Student updated successfully",
                })
            }
            else{
                res.status(404).json({
                    message:"no students found"
                })
            }
        }
    })



}
exports.deleteStudent = (req,res)=>{

    var id = req.params.id;
    StudentSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:err || "Something went wrong"
            })
        }
        else{
            if(data){
                res.status(200).json({
                    message:"Student deleted successfully",
                })
            }
            else{
                res.status(404).json({
                    message:"no students found"
                })
            }
        }
    })


}

exports.getStudentById = (req,res)=>{

        var id = req.params.id;
        StudentSchema.findById(id,(err,data)=>{
            if(err){
                res.status(500).json({
                    message:err || "Something went wrong"
                })
            }
            else{
                if(data){
                    res.status(200).json({
                        message:"Student fetched successfully",
                        data:data
                    })
                }
                else{
                    res.status(404).json({
                        message:"Student not found"
                    })
                }
            }
        })
}

exports.getAllStudents = (req,res)=>{

    StudentSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:err || "Something went wrong"
            })
        }
        else{
            res.status(200).json({
                message:"Students fetched successfully",
                data:data
            })
        }

    })


}


exports.getAllStudentswithrole = (req,res)=>{

    StudentSchema.find({role:"63bbdd5f6260583f95d60091"}).populate('role').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:err || "Something went wrong"
            })
        }
        else{
            res.status(200).json({
                message:"Students fetched successfully",
                data:data
            })
        }
    })

}





exports.createStudent = (req,res)=>{

    console.log(req.body);
    const student = new StudentSchema(req.body)
    student.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:err
            })
        }
        else{
            res.status(201).json({
                message:"Student created successfully",
                data:data
            })
        }
    })
}

