var app = angular.module('myApp',[] );
	app.controller('myCtrl', function($scope, $http) {

    $scope.CityNameFrom = "";
    $scope.CityNameTo = "";
    $scope.Departure= "";
     $scope.Arrival= "";

	   
		    $http({
		    	url:'https://developer.goibibo.com/api/bus/search/?app_id=831b5193&app_key=fc5b976fda224edb7615f2bc4de8f120&format=json&source=mumbai&destination=Ahmedabad&dateofdeparture=20180716&dateofarrival=20180717',

		    	method:'GET'
		    })
		    .then(function mySuccess(response){

		    	$scope.BusList=response.data.data.returnflights;
          
		    	console.log($scope.BusList)

		    },function myError(error){

	    	})
	    


	   



	});