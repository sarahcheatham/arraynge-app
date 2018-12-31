const StudentModel = require("../models/StudentModel");
const UserModel = require("../models/UserModel");

module.exports.list = (req, res)=>{
    const userId = UserModel.find().exec().then((userId)=>{
        return res.json(userId)
    })
    StudentModel.find({userId}).exec().then((students)=>{
        return res.json(students)
    })
}

module.exports.show = (req, res)=>{
    StudentModel.findById(user.id).exec().then((student)=>{
        return res.json(student)
    })
}

module.exports.create = (req, res)=>{
    const s = new StudentModel({
        userId: req.params.id,
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

