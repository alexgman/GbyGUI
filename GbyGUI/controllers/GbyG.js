'use strict';
var app = angular.module('myApp',[]);
app.controller('GetAllSamplesByStatusUser',
  function ($scope, $http) {
      $http.get('http://localhost:36059/api/Samples/GetAllSamplesByStatusUser')
        .then(function (data) {
            $scope.dataset = data.data;
        });
  }
);