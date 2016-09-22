'use strict';

/**
 * @ngdoc function
 * @name 1yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1yeomanApp
 */
angular.module('1yeoman')
  .controller('phone', function ($scope,$http) {
    $http({
		url:"http://123.56.227.177:2504/sat-item",
		method:"GET",
		params:{classify:3},
		withCredentials:true
	}).success(function(e){
		$scope.data=e
	})
  }).filter("q",function(){
  	return function(e){
  		if(e.length>100){
  			return e.substr(0,100)+'...'
  		}else{
  			return e
  		}
  	}
  });