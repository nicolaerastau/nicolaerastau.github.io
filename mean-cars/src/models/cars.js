"use strict";

var mongoose = require ("mongoose");

var carSchema = new mongoose.Schema({
      check: Boolean,
      name: String,
      model:String,
      color: String,
      year: Number,
      horsepower: Number

});

var model = mongoose.model("Car",carSchema);

module.exports = model;
