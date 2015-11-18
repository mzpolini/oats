var mainApplicationModuleName = 'oats';

var mainApplicationModule = angular.module(mainApplicationModuleName);

angular.element(document).ready(function() {
  angular.bootstrapp(document, [mainApplicationModuleName]);
});
