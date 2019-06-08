const registration=require("./functions/RegistrationProcess")
module.exports=(router)=>{
    console.log("***********Router Set*************");
    router.get('/',(req, res)=>{
        res.send({
            "response":"Hello EV Server"
        })
    })
    router.post('/vehicle_registration',(req, res)=>{
        console.log(req);

        registration.register(req.body).then(result=>{
            res.send({
                "response":result.result,
                "message":result.message
            });
        }
        )

        
    })
}

