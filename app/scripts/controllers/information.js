'use strict';

/**
 * @ngdoc function
 * @name 1yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1yeomanApp
 */
angular.module('1yeoman')
  .controller('information', function ($scope,$http) {
    $http({
		url:"http://123.56.227.177:2504/sat-item",
		method:"GET",
		params:{classify:0},
		withCredentials:true
	}).success(function(e){
		console.log(e)
		$scope.data=e
	})
  }).filter("f",function(){
  	return function(e){
  		if(e.length>845){
  			return e.substr(0,845)+'...'
  		}else{
  			return e
  		}
  	}
  }).filter("h",function(){
  	return function(e){
  		if(e.length>330){
  			return e.substr(0,330)+'...'
  		}else{
  			return e
  		}
  	}
  }).filter("g",function(){
  	return function(e){
  		if(e.length>280){
  			return e.substr(0,278)+'...'
  		}else{
  			return e
  		}
  	}
  })
