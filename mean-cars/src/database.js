"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mean-cars", function(err){
    if (err){
      console.log("Failed connecting to Mongodb!");
    }else {
      console.log("Successfully connected to Mongodb!");
    }

});
