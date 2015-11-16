// var bcServiceBasePath = 'https://api.blockcypher.com/v1/btc/test3';
// var bctoken = '4eb1e48b0c88b8d3220adf101289c743';
var app = angular.module('myApp', [])
  .run( function run () {
    // request = require('request');
  })

  .controller('assetCtrl', ['$scope', '$http',
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
      $scope.metaData = getMeta(assetID);

      function fundAddress() {
        //curl -d '{"address": "BvUw6CKT5Ky1pvUbetnEDkd5wLaqbPe7YS", "amount": 100000}' https://api.blockcypher.com/v1/bcy/test/faucet?token=4eb1e48b0c88b8d3220adf101289c743
      };
      function viewAssetIDinfo() {
        //curl https://api.blockcypher.com/v1/bcy/test/oap/1E6jXTt9CFfwGSoMHeK81975e5WNn98F4G/txs?token=4eb1e48b0c88b8d3220adf101289c743
        $http({
          method: 'GET',
          url: bcServiceBasePath + '/oap/' + assetID + '/txs?token=' + bctoken
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
             return response.data
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            // $scope.displayAddress = "Error"
          });
      };
      function putMeta(assetAddr, ) {
        data = [{
          "description":"Gold Coupon"
        }]
        $http({
          method: 'PUT',
          url: bcServiceBasePath + '/addrs/' + assetAddr + '/meta?token=' + bctoken
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
             $scope.metaData = response.data.satoshi
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            // $scope.displayAddress = "Error"
          });
      };
      function getMeta(assetAddr) {
        $http({
          method: 'GET',
          url: bcServiceBasePath + '/addrs/' + assetAddr + '/meta?token=' + bctoken
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
             $scope.metaData = response.data.satoshi



          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            // $scope.displayAddress = "Error"
          });
      };
      function issueAsset(PK, sendtoAddr, senttoAmt) {
        window.prompt("sometext","defaultText");
        // addr_data = [{"from_private": "6f4fd6d8e0ed13c943b4596fe2790fa3a7e0c2f51f0f16538b73040363c65806",
        // "to_address": "1BvUw6CKT5Ky1pvUbetnEDkd5wLaqefyXn8",
        // "amount": 1000,
        // "metadata": "1a2b3c4d5e6f"}]
        // $http({
        //   method: 'POST',
        //   data: addr_data,
        //   url: bcServiceBasePath + '/oap/issue?token=' + bctoken
        // }).then(function successCallback(response) {
        //     // this callback will be called asynchronously
        //     // when the response is available
        //     //  $scope.addressBalance = response.data.balance
        //     //  $scope.origBalance = response.data.total_received
        //     //  $scope.spentBalance = response.data.total_sent
        //   }, function errorCallback(response) {
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        //     // $scope.displayAddress = "Error"
        //   });
      };

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

      $scope.cancel = function(){
        // Returns app to zero-state
        delete $scope.files;
        $scope.stampSuccess = false;
        $scope.previousTimestamps = [];
        $scope.pendingTimestamp = null;
        $scope.cancelStamp();
      };
  }]);
