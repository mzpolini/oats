'use strict';
/* block cypher vars */
var bcServiceBasePath = 'https://api.blockcypher.com/v1/bcy/test';
var bctoken = '4eb1e48b0c88b8d3220adf101289c743';
var ogAddress = 'BvUw6CKT5Ky1pvUbetnEDkd5wLaqbPe7YS';
var oapAddress = '1BvUw6CKT5Ky1pvUbetnEDkd5wLaqefyXn8';
var assetID = '1E6jXTt9CFfwGSoMHeK81975e5WNn98F4G';
var pk = '6f4fd6d8e0ed13c943b4596fe2790fa3a7e0c2f51f0f16538b73040363c65806';

/* Controllers */
var accountControllers = angular.module('accountControllers', []);

accountControllers.controller('networkCtrl', ['$scope',
  function($scope) {
    $scope.bcServiceBasePath = bcServiceBasePath;
  }]);

accountControllers.controller('addressCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.queryAddress = function (qryAddress) {
      $http({
        method: 'GET',
        // header: "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept",
        url: bcServiceBasePath + '/addrs/' + qryAddress + '/balance'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
           $scope.addressBalance = response.data.balance
           $scope.origBalance = response.data.total_received
           $scope.spentBalance = response.data.total_sent
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          // $scope.displayAddress = "Error"
        });
    };
    $scope.getMetaData = function () {
      $http({
        method: 'GET',
        // header: "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept",
        url: bcServiceBasePath + '/addrs/' + oapAddress + '/meta?token=' + bctoken +'&private=true'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
           $scope.description = response.data.Description
           $scope.tokenName = response.data.tokenName
           $scope.url = response.data.url
           $scope.expirationDate = response.data.expirationDate
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          // $scope.displayAddress = "Error"
        });
    };

    $scope.putMeta = function (qryAddress) {
      var putDesc = $scope.description
      var puttokenName = $scope.tokenName
      var putUrl = $scope.url
      var putExp = $scope.expirationDate
      
      $http({
        method: 'PUT',
        data: {
        "tokenName":"Brood Coin Test",
        "Description":"Worth 2 hr of web development",
        "url":"www.lionbrood2.com",
        "expirationDate":"1/1/2016"
        },
        url: bcServiceBasePath + '/addrs/' + qryAddress + '/meta?token=' + bctoken +'&private=true' + ' | grep "HTTP/1.1"'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.putResponse = response
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          // $scope.displayAddress = "Error"
        });
    };

    $scope.ogAddress = ogAddress;
    $scope.oapAddress = oapAddress;
    $scope.getMetaData();
    function createAddress() {
      //curl -d '{"address": "BvUw6CKT5Ky1pvUbetnEDkd5wLaqbPe7YS", "amount": 100000}' https://api.blockcypher.com/v1/bcy/test/faucet?token=4eb1e48b0c88b8d3220adf101289c743

    };

  }]);
