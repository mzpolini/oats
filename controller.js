var bcServiceBasePath = 'https://api.blockcypher.com/v1/btc/test3';
var bctoken = '4eb1e48b0c88b8d3220adf101289c743';

var app = angular.module('myApp', [])
  .run( function run () {
    // request = require('request');
  })

  .controller('assetCtrl', function($scope, $http) {
      $scope.newAddress = function(){
        $http({
          method: 'POST',
          url: bcServiceBasePath + '/addrs'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.displayAddress = response.data.private

          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.displayAddress = "Error"
          });
        // Returns app to zero-state

      };
    }

  .controller('walletCtrl', function($scope, $http) {
    $scope.walletName = 'mzp'

    $scope.listWallet = function(){
      $http({
        method: 'GET',
        url: bcServiceBasePath + '/wallets?token=' + bctoken
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          return response.data.wallet_names
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          return "Error"
        });
      // Returns app to zero-state
    }

    $scope.getWalletAddr = function(){
      $http({
        method: 'GET',
        url: bcServiceBasePath + '/wallets/mzp'+'?token=' + bctoken
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.walletAddr = response.data.addresses
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          $scope.walletAddr = "Error"
        });
      // Returns app to zero-state
    }

    function NewAsset(){
      $http({
        method: 'POST',
        url: bcServiceBasePath + '/oap/addrs/'+'?token=' + bctoken
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          return response.data.original_address
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          return "Error"
        });
      // Returns app to zero-state
    }
  }]);
