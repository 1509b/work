'use strict';

/**
 * @ngdoc function
 * @name 1yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1yeomanApp
 */
angular.module('1yeoman')
	.controller('venture', function($scope,$http) {
		$http({
			url: "http://123.56.227.177:2504/sat-item",
			method: "GET",
			params: {
				classify: 5
			},
			withCredentials: true
		}).success(function(e) {
			console.log(e)
			$scope.data = e
		})
	}).filter("j", function() {
		return function(e) {
			if(e.length > 230) {
				return e.substr(0, 230) + '...'
			} else {
				return e
			}
		}
	});