
/*
  ng-app padrão do projeto
*/
var fazenda = angular.module("fazenda", ['ngAnimate', 'ngSanitize']);

/*
  ng-controller padrão do projeto  
*/
fazenda.controller("fazendaCtrl", function ($scope, $http) {
  $http.get('fazenda.json').then(function (data) {
    $scope.farmers = data.data.data;
  });

  $scope.getTopList = function (farmer) {
    if (farmer.positive) {
      var positive = parseInt(farmer.positive);
    } else if (isNaN(farmer.positive) || farmer.positive === null) {
      var positive = 0;
    }

    if (farmer.negative) {
      var negative = parseInt(farmer.negative);
    } else if (isNaN(farmer.negative) || farmer.negative === null) {
      var negative = 0;
    }
    console.log(positive);
    return positive;
  };

  $scope.getPercent = function (positive, negative, showPercent) {
    var positive = parseInt(positive);
    var negative = parseInt(negative);
    var total = positive + negative;

    var percentPos = Math.round((positive * 100) / total);
    var percentNeg = Math.round((negative * 100) / total);

    if (isNaN(percentPos) || isNaN(percentNeg)) {
      percentPos = 0;
      percentNeg = 0;
    }
    
    if (showPercent === 1) {
      return percentPos + "%";
    } else if (showPercent === 0) {
      return percentNeg + "%";
    }
    
  };


});
