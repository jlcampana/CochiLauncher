(function () {
	'use strict';
	var app = angular.module('app');

	app.service('datasourceService', function ($http) {
		var self = this;
		self.games = [];
		self.lists = [];
		self.listIdx = 0;	//Restore from cache on loading...
		self.gameIdx = 0;

		//Reading list and games
		$http.get('config/games.json').success(function (data) {
			self.games = data;
			console.log('Games loaded');
		});

		$http.get('config/list.json').success(function (data) {
			self.lists = data;
			console.log('Game lists loaded');
		});

		this.previousList = function () {

		};

		this.nextList = function () {

		};

		this.currentList = function () {

		};

		this.gamesForCurrentList = function () {

		};

	});
})();