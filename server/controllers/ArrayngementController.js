const ArrayngementModel = require("../models/ArrayngementModel");

module.exports.list = (req, res)=>{
    ArrayngementModel.find({}).exec().then((arrayngements)=>{
        return res.json(arrayngements)
    })
}

module.exports.show = (req, res)=>{
    ArrayngementModel.findById(req.params.id).exec().then((arrayngement)=>{
        return res.json(arrayngement)
    })
}

module.exports.create = (req, res)=>{
    const a = new ArrayngementModel({
        classdata: req.body.classdata
    });
    a.save().then(savedArrayngement =>{
        return res.json(savedArrayngement)
    })
}

module.exports.update = (req, res)=>{
    return res.json({id: req.params.id})
}

module.exports.remove = (req, res)=>{
    return res.json({})
}