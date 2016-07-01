'use strict';
var app = angular.module('myApp', []);

app.controller('GetSamples',
    function ($scope, $http) {



        $scope.getAllSamplesByStatusUser = function () {
            $scope.tab = 1;

            $http.get('http://localhost:36059/api/Samples/GetAllSamplesByStatusUser')
                .then(function (data) {
                    $scope.dataset = data.data;
                });
        }

        $scope.getSamplesByStatus = function () {
            $scope.tab = 2;
            $scope.statusText = {
                value: 'Received',
                label: 'Enter Status:'
            };
            var myParams = { statustype: $scope.statusText.value };
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
            $scope.userText = {
                value: '0',
                label: 'Enter UserId:'
            };
            var myParams = { CreatedBy: $scope.userText.value };
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

        $scope.newSample = function() {
            $scope.tab = 4;
            $scope.newRecord = {
                SampleId: {
                    value: '',
                    label: 'Enter SampleId:'
                },
                Barcode: {
                    value: '',
                    label: 'Enter Barcode:'
                },
                CreatedAt: {
                    value: '',
                    label: 'Enter CreatedAt:'
                },
                CreatedBy: {
                    value: '',
                    label: 'Enter CreatedBy:'
                },
                StatusId: {
                    value: '',
                    label: 'Enter StatusId:'
                }
            };


        }


        $scope.getAllSamplesByStatusUser();
    });