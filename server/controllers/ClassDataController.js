const ClassDataModel = require("../models/ClassDataModel");


module.exports.list = (req, res)=>{
    ClassDataModel.find({ userId: req.user._id }).exec().then((allClasses)=>{
        return res.json(allClasses)
    })
}
module.exports.getLastClass = (req, res) => {
    ClassDataModel.find({ userId: req.user._id }).exec()
    .then(lastClass => {
        console.log("lastClass:", lastClass[lastClass.length - 1])
        return res.json(lastClass[lastClass.length - 1]);
    });
}

module.exports.show = (req, res)=>{
    ClassDataModel.findById(req.params.id).exec()
    .then(oneClass=>{
        console.log("oneClass:", oneClass)
        return res.json(oneClass)
    })
}

module.exports.create = (req, res)=>{
    const c = new ClassDataModel({
        userId: req.body.userId,
        gradelevel: req.body.gradelevel,
        subject: req.body.subject
    });
    c.save().then(savedClass =>{
        return res.json(savedClass)
    })
}

// module.exports.update = (req, res)=>{
//     ClassDataModel.findByIdAndUpdate(
//         req.params.id, 
//         req.body, 
//         {new: true},
//         (err, classUpdate)=>{
//             if(err) return res.status(500).send(err);
//             return res.send(classUpdate)
//         }
//     )
// }
module.exports.update = (req, res)=>{
    return res.json({id: req.params.id})
}

module.exports.remove = (req, res)=>{
    return res.json({})
}

