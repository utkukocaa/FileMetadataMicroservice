
exports.uploadFile = function(req, res,next){


    console.log(req.file)
    res.json({
        name:req.file.originalname,
        type:req.file.mimetype,
        size:req.file.size
    })

        next()





}