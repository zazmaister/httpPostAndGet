angular.module('app', []);

angular.module('app').controller('PromiseController', function($scope, $http) {
  $scope.status = 'Pending';
  
  //    Get request
  $http.get('http://smartninja.betoo.si/api/CMW/timeslots').then(function(result){
        $scope.status = 'Completed';
    $scope.timeslots = result.data;
  }, function(errorResponse){
    alert('Napaka pri pridobivanju podatkov!')
  });
  

  $scope.post = function(numberID,email){
    //    Post request s podatki timeslotId ter email
  $http.post('http://smartninja.betoo.si/api/CMW/reservations', 
             {timeslotId : numberID, email: email})
    .then(function(success){
        alert('Uspešno opravljen POST.')
    }, function(error){
        alert('Napaka pri pošiljanju podatkov!')
  });
  };

  
});

