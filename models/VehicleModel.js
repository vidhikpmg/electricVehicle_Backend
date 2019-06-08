'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ElectricVehicleSchema = mongoose.Schema({
    VehicleNumber:String,
    UserName:String,
    MobileNumber:Number,
    IdNumber:String,
    Address:String,
    ChargingStation:String,
    BatteryLevel:String,
    name:String,
    ChargeDuration:String,
    created_At:String,

});

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://risabhsharma71:Rpqb123@ds111420.mlab.com:11420/care4u')
.then(
    ()=>{
      console.log("connected to mongoDB")},
   (err)=>{
       console.log("err",err);
   })

module.exports = mongoose.model('ElectricVehicleModel', ElectricVehicleSchema);