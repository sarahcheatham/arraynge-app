const ClassDataModel = require("../models/ClassDataModel");

module.exports.list = (req, res)=>{
    ClassDataModel.find({}).exec().then((classesdata)=>{
        return res.json(classesdata)
    })
}

module.exports.show = (req, res)=>{
    ClassDataModel.findById(req.params.id).exec().then((classdata)=>{
        return res.json(classdata)
    })
}

module.exports.create = (req, res)=>{
    const c = new ClassDataModel({
        gradelevel: req.body.gradelevel,
        subject: req.body.subject
    });
    c.save().then(savedClass =>{
        return res.json(savedClass)
    })
}

module.exports.update = (req, res)=>{
    return res.json({id: req.params.id})
}

module.exports.remove = (req, res)=>{
    return res.json({})
}

