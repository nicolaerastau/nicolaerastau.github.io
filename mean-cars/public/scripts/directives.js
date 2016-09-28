"use strict";
angular.module("carsListApp")
.directive("carDirective" , function CarDirective(){
     return {
       templateUrl:"templates/car.html",
       replace: true,
       controller: "carCtrl"
     }

});
