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
	$urlRouterProvider.when("","/home")
	$stateProvider.state("home", {
		templateUrl: "../views/home.html",
		url: "/home",
		controller: "home"
	}).state("about", {
		templateUrl: "../views/about.html",
		url: "/about",
		controller: "about"
	}).state("features", {
		templateUrl: "../views/features.html",
		url: "/features",
		controller: "features"
	}).state("travel", {
		templateUrl: "../views/travel.html",
		url: "/travel",
		controller: "travel"
	}).state("fashion", {
		templateUrl: "../views/fashion.html",
		url: "/fashion",
		controller: "fashion"
	}).state("music", {
		templateUrl: "../views/music.html",
		url: "/music",
		controller: "music"
	}).state("codes", {
		templateUrl: "../views/codes.html",
		url: "/codes",
		controller: "codes"
	}).state("contact", {
		templateUrl: "../views/contact.html",
		url: "/contact",
		controller: "contact"
	})
	
})
