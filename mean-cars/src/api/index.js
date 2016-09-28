"use strict";

var express = require("express");
var Car = require("../models/cars");

var router = express.Router();

//get all cars
router.get("/cars", function(req,res){
  Car.find({}, function(err, cars){
     if(err){
       return res.status(500).json({message: err.message});
     }
     res.json({cars: cars});
  });
});

// add new car
router.post("/cars", function(req,res){
   var new_car = req.body;
   Car.create(new_car, function(err,cars){
      if(err){
        return res.status(500).json({err:err.message});
     }
       res.json({"car": new_car, message:"Car added to db"});
   });
});

//update one car
router.put("/cars/:id", function(req,res){
   var  id =  req.params.id;
   var car = req.body;
   if (car && car._id !==id){
       return res.status(500).json({err :"Ids don't match!"});
     }
    Car.findByIdAndUpdate(id,car,{new:true}, function(err,cars){
      if(err){
        return res.status(500).json({err:err.message});
      }
      res.json({"car":car, message: "Car updated"});
    });
});

//delete car from db
router.delete("/cars/:id", function(req,res){
   var id = req.params.id;
   Car.findByIdAndRemove(id,function(err,cars){
     if (err){
       return res.status(500).json({err: err.message});
     }
     res.json({message : "Car deleted"});
   });

});
module.exports = router;

