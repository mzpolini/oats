'use strict';
/* App Module */

var couplingApp = angular.module('couplingApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'accountControllers'
]);

couplingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/account', {
        templateUrl: 'partials/account.html',
        controller: 'addressCtrl'
      }).
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
