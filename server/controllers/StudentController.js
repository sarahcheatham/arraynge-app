const StudentModel = require("../models/StudentModel");

module.exports.list = (req, res)=>{
    StudentModel.find({}).exec().then((students)=>{
        return res.json(students)
    })
}

module.exports.show = (req, res)=>{
    StudentModel.findById(req.params.id).exec().then((student)=>{
        return res.json(student)
    })
}
// module.exports.show = (req, res)=>{
//     StudentModel.find({ userId: req.params.userId }).exec().then((filteredStudents)=>{
//         console.log('req:', req.params.userId)
//         console.log('filteredStudents:', filteredStudents)
//         return res.json(filteredStudents)
//     })
// }

module.exports.create = (req, res)=>{
    const s = new StudentModel({
        userId: req.body.userId,
        name: req.body.name,
        gradelevel: req.body.gradelevel,
        subject: req.body.subject,
        score: req.body.score
    });
    s.save().then(savedStudent =>{
        return res.json(savedStudent)
    })
}

module.exports.update = (req, res)=>{
    StudentModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, scoreUpdate)=>{
            if(err) return res.status(500).send(err);
            return res.send(scoreUpdate)
        }
    )
}

module.exports.remove = (req, res)=>{
    StudentModel.findByIdAndRemove(req.params.id, (err, student)=>{
        if(err) return res.status(500).send(err)

        //creating a simple object to send back with a message and the id of the document that was removed
        const response = {
            message: "Student successfully deleted",
            id: student._id
        }
        return res.status(200).send(response);
    });
}

