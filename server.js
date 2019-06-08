const express =require('express');
const app=express();
const router=express.Router();
const webpush = require("web-push");


app.use(express.json());
require('./routes')(router);
app.use('/', router);

const publicVapidKey =
  "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
const privateVapidKey = "3KzvKasA2SoCxsp0iIG_o9B0Ozvl1XDwI63JRKNIWBM";

webpush.setVapidDetails(
  "mailto:sandhyaparkar@gmail.com",
  publicVapidKey,
  privateVapidKey
);

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`EV server running on ${port}........`);
})
