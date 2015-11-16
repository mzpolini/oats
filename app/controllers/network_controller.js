// var bcServiceBasePath = 'https://api.blockcypher.com/v1/btc/test3';
// var bctoken = '4eb1e48b0c88b8d3220adf101289c743';
var app = angular.module('myApp', [])
  .run( function run () {
    // request = require('request');
  })

  .controller('networkCtrl', ['$scope', '$http',
    function ($scope, $http) {
      var bcServiceBasePath = 'https://api.blockcypher.com/v1/bcy/test';
      var bctoken = '4eb1e48b0c88b8d3220adf101289c743';
      var ogAddress = 'BvUw6CKT5Ky1pvUbetnEDkd5wLaqbPe7YS';
      var oapAddress = '1BvUw6CKT5Ky1pvUbetnEDkd5wLaqefyXn8';
      var assetID = '1E6jXTt9CFfwGSoMHeK81975e5WNn98F4G';
      var pk = '6f4fd6d8e0ed13c943b4596fe2790fa3a7e0c2f51f0f16538b73040363c65806';
      $scope.walletAddr = ogAddress;
      getAddressBalance(ogAddress);
      $scope.oapAddr = oapAddress;
      $scope.assetID = assetID;
      $scope.transactionHistory = viewAssetIDinfo;
      // issueAsset();

      function getAddressBalance(address) {
        $http({
          method: 'GET',
          url: bcServiceBasePath + '/addrs/' + address + '/balance'
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
        // Returns app to zero-state

      };
  }]);
