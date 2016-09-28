"use strict";
angular.module("carsListApp")
.controller("carCtrl", function($scope,dataService){

     dataService.getCars(function(response){
           $scope.cars = response.data.cars;
        });

      $scope.addCar = function(){
        $scope.cars.unshift({ check:false});
      };

      $scope.deleteCar = function(car, index){
        dataService.deleteCar(car).then(function(){
          $scope.cars.splice(index,1);
        });
      };

      $scope.saveCar = function(car, i){
        $scope.cars[i].editing = false;
        dataService.updateCar(car);
      };

});
