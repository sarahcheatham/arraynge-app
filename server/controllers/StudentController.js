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

module.exports.create = (req, res)=>{
    const s = new StudentModel({
        name: req.body.name,
        score: req.body.score
    });
    s.save().then(savedStudent =>{
        return res.json(savedStudent)
    })
}

module.exports.update = (req, res)=>{
    return res.json({id: req.params.id})
}

module.exports.remove = (req, res)=>{
    return res.json({})
}

