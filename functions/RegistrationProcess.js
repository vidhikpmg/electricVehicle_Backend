const VehicleModel=require("../models/VehicleModel");

exports.register=(req)=>{
    // console.log(req);
    return new Promise(function (resolve, reject) {

        const ElectricVehicleRegistration=new VehicleModel({
            "VehicleNumber": req.VehicleNumber,
            "UserName": req.UserName,
            "MobileNumber": req.MobileNumber,
            "IdNumber": req.IdNumber,
            "Address": req.Address,
            "created_At":new Date()
        })

		ElectricVehicleRegistration.save()
			.then(function (result) {
		
                return resolve({
                    result:result,
                    "message":"Vehicle Registration Successfully done...."
                })
				
			})


	});

}