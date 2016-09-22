'use strict';

/**
 * @ngdoc overview
 * @name 1yeomanApp
 * @description
 * # 1yeomanApp
 *
 * Main module of the application.
 */
$(function() {
	$('.banner div').width($('.banner div img').width() * $('.banner div img').length);
	$('.banner div').animate({
		'left': $('.banner div img').width()
	});
});
angular.module('1yeoman', ["ui.router", "ngSanitize"]).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when("", "/information");
	$stateProvider.state("information", {
		templateUrl: "../views/information.html",
		url: "/information",
		controller: "information"
	}).state("product", {
		templateUrl: "../views/product.html",
		url: "/product",
		controller: "product"
	}).state("automobile", {
		templateUrl: "../views/automobile.html",
		url: "/automobile",
		controller: "automobile"
	}).state("phone", {
		templateUrl: "../views/phone.html",
		url: "/phone",
		controller: "phone"
	}).state("financial", {
		templateUrl: "../views/financial.html",
		url: "/financial",
		controller: "financial"
	}).state("recreation", {
		templateUrl: "../views/recreation.html",
		url: "/recreation",
		controller: "recreation"
	}).state("venture", {
		templateUrl: "../views/venture.html",
		url: "/venture",
		controller: "venture"
	}).state("about", {
		templateUrl: "../views/about.html",
		url: "/about",
		controller: "about"
	}).state("singlepage", {
		templateUrl: "../views/singlepage.html",
		url: "/singlepage?id",
		controller: "singlepage"
	})
}).controller("index", function($scope, $http){
	$http({
		url: 'http://123.56.227.177:2504/sat-item',
		method: "get",
//		params: {classify:9}
	}).success(function(e) {
		$scope.data = e
		$scope.aa=true;
		$scope.isshow1=true;
		$scope.isshow2=false;
		$scope.isshow3=false;
		$scope.show1=function(){
			$scope.aa=true;
			$scope.bb=false;
			$scope.cc=false;
			$scope.isshow1=true;
			$scope.isshow2=false;
			$scope.isshow3=false;
		}
		$scope.show2=function(){
			$scope.aa=false;
			$scope.bb=true;
			$scope.cc=false;
			$scope.isshow1=false;
			$scope.isshow2=true;
			$scope.isshow3=false;
		}
		$scope.show3=function(){
			$scope.aa=false;
			$scope.bb=false;
			$scope.cc=true;
			$scope.isshow1=false;
			$scope.isshow2=false;
			$scope.isshow3=true;
		}
	});
});