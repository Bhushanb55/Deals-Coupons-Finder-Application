var userModel = require('../models/user-models');
module.exports = function (req, res){
    var newUser = new userModel();
    newUser.full_name = req.body.full_name;
    newUser.email_address = req.body.email_address;
    newUser.password = req.body.password;
    newUser.mobile_number = req.body.mobile_number;
    console.log(Object.keys(req.body).length);
    if(Object.keys(req.body).length === 0 ){
        res.send("There is no data to insert..")
    }
    else{

    
        newUser.save(function(err, created){
            if(err){
                return res.status(500).json({success: false, error: err});
            }
            else{
                res.status(201).json({success:true, data: created})
            }
        });
    }

}