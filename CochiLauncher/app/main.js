(function () {
	'use strict';

	var app = angular.module('app');
	
	app.controller('Main', mainController);

	function mainController($rootScope, $scope, keyboardService, datasourceService) {
		
		//Managing keyboard
		/*
		$scope.onKeyDown = function($event){
			var key = window.event ? $event.keyCode : $event.which;
			console.log(key);
		}*/
		$scope.onKeyDown = keyboardService.keyDown;

		$rootScope.$on('list_up', function (event, data) {
			console.log('La lista ha cambiado UP');
		});

		$rootScope.$on('list_down', function (event, data) {
			console.log('La lista ha cambiado DOWN');
		});

		$rootScope.$on('game_left', function (event, data) {
			console.log('El juego ha cambiado LEFT');
		});

		$rootScope.$on('game_right', function (event, data) {
			console.log('El juego ha cambiado RIGHT');
		});

		$rootScope.$on('game_run', function (event, data) {
			console.log('Lanzar juego seleccionado');
		});

		$rootScope.$on('game_favorite_unfavorite', function (event, data) {
			console.log('Cambiar FAV sí/no del juego seleccionado');
		});

	}
})();