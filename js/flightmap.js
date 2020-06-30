  var app = angular.module('myApp', []);




          app.controller('myCtrl', function ($scope,$http,$interval) {


           


$scope.flightlivedata = function(){


         $http({

                        method: 'GET',
                        url: 'https://aviation-edge.com/api/public/flights?key=c598c1-2df0db-9b4a01-a9223f-307964'

                    })
                    .then(function mySuccess(response) {
                     

                        $scope.flights = response.data;
                        // console.log($scope.cities)

                        for (i = 0; i < $scope.flights.length; i++){
                  createMarker($scope.flights[i]);
              }
     

                    }, function myError(error) {
                      

                    })


             
               var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(19.0760,72.8777),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }



              var createMarker = function (info){

          
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.geography.latitude, info.geography.longitude),
                      icon:'https://www.globexploration.com/image/flighticon.png',
                      title: info.flight.icaoNumber
                  });
                  marker.content = '<div class="infoWindowContent">' + info.flight.number + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  




              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }
             



}



$scope.flightlivedata();

// $interval(function() {
//     $scope.flightlivedata(1);
// }, 1000)







//  var createMarker = function (info){

          
//                   var marker = new google.maps.Marker({
//                       map: $scope.map,
//                       position: new google.maps.LatLng(info.latitudeAirport, info.longitudeAirport),
//                       icon:'https://www.globexploration.com/image/airporticon',
//                       title: info.codeIataAirport
//                   });
//                   marker.content = '<div class="infoWindowContent">' + info.nameAirport + '</div>';
                  
//                   google.maps.event.addListener(marker, 'click', function(){
//                       infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
//                       infoWindow.open($scope.map, marker);
//                   });
                  
//                   $scope.markers.push(marker);
                  
//               }  




//               $scope.airportdata = function(){


//          $http({

//                         method: 'GET',
//                         url: 'https://aviation-edge.com/api/public/airportDatabase?key=c598c1-2df0db-9b4a01-a9223f-307964'


//                     })
//                     .then(function mySuccess(response) {
                     

//                         $scope.airports = response.data;
//                         // console.log($scope.cities)

//                         for (i = 0; i < $scope.airports.length; i++){
//                   createMarker($scope.airports[i]);
//               }
     

//                     }, function myError(error) {
                      

//                     })


//                var mapOptions = {
//                   zoom: 4,
//                   center: new google.maps.LatLng(19.0760,72.8777),
//                   mapTypeId: google.maps.MapTypeId.TERRAIN
//               }






//               $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

//               $scope.markers = [];
              
//               var infoWindow = new google.maps.InfoWindow();
              
             

//               $scope.openInfoWindow = function(e, selectedMarker){
//                   e.preventDefault();
//                   google.maps.event.trigger(selectedMarker, 'click');
//               }
           



// }


// $scope.airportdata();

        });
