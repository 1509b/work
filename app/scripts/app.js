'use strict';

/**
 * @ngdoc overview
 * @name 1yeomanApp
 * @description
 * # 1yeomanApp
 *
 * Main module of the application.
 */
angular.module('1yeoman', ["ui.router"]).config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/information")
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
	}).state("evnture", {
		templateUrl: "../views/evnture.html",
		url: "/evnture",
		controller: "evnture"
	}).state("about", {
		templateUrl: "../views/about.html",
		url: "/about",
		controller: "about"
	})
})
