'use strict';

/**
 * @ngdoc function
 * @name 1yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1yeomanApp
 */

angular.module("1yeoman")
	
	.controller("singlepage", function($scope, $http, $stateParams) {
		$http({
			url: 'http://123.56.227.177:2504/sat-item',
			method: "get",
			params: {
				id: $stateParams.id
			}
		}).success(function(e) {
			$scope.data = e
//			console.log($scope.data)
		});
	})