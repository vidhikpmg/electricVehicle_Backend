const express =require('express');
const app=express();
const router=express.Router();


app.use(express.json());
require('./routes')(router);
app.use('/', router);

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`EV server running on ${port}........`);
})
