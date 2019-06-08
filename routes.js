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
    // Subscribe Route
    router.post("/subscribe", (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;
  
    // Send 201 - resource created
    res.status(201).json({});
  
    // Create payload
    const payload = JSON.stringify({ title: "Your Battery Level is 50%" });
  
    // Pass object into sendNotification
    webpush
      .sendNotification(subscription, payload)
      .catch(err => console.error(err));
  });
  
 
  
}

