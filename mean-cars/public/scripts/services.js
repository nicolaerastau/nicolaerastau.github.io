"use strict";

angular.module("carsListApp")
.service("dataService",function($http){

       this.getCars = function(cb){
         $http.get("/api/cars/").then(cb);
        };

        this.deleteCar = function(car){
          if (!car._id){
            console.log("Error, no id");
          }
          return $http.delete("/api/cars/" + car._id).then(function(){
            console.log("I deleted the " + car.name);
          });
        };

        this.updateCar = function(car){
          if(!car_id){
            $http.post("/api/cars/",car);
          }else{
            $http.put("/api/cars/" + car._id, car).then(function(result){
              return result.data.animal;
            });
          }
        };
 });
