'use strict';
var app = angular.module('myApp', []);

app.controller('GetSamples',
    function ($scope, $http) {
        $scope.getAllSamplesByStatusUser = function () {
            $scope.tab = 1;

            $http.get('http://localhost:36059/api/Samples/GetAllSamplesByStatusUser')
                .then(function(data) {
                    $scope.dataset = data.data;
                });
        }

        $scope.getSamplesByStatus = function() {
            $scope.tab = 2;
            var myParams = { statustype: $scope.statusText };
            $http({
                url: 'http://localhost:36059/api/Samples/GetSamplesByStatus',
                method: 'GET',
                params: myParams,
                paramSerializer: '$httpParamSerializerJQLike'
            }).then(function (response) {
                $scope.dataset = response.data;
            }, function (error) {
                console.log(error);
            });
        }


        $scope.getSamplesByUserMatch = function () {
            $scope.tab = 3;

            var myParams = { CreatedBy: $scope.userText };
            $http({
                url: 'http://localhost:36059/api/Samples/GetSamplesByUserMatch',
                method: 'GET',
                params: myParams,
                paramSerializer: '$httpParamSerializerJQLike'
            }).then(function (response) {
                $scope.dataset = response.data;
            }, function (error) {
                console.log(error);
            });
        }

        $scope.greeting = function ()
        {
            return { text: 'Hello' }
        };


        $scope.getAllSamplesByStatusUser();
    });