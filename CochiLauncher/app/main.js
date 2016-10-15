(function () {
	'use strict';

	var app = angular.module('app');
	
	app.controller('Main', mainController);

	function mainController($scope) {
		
		//Managing keyboard
		$scope.onKeyDown = function($event){
			var key = window.event ? $event.keyCode : $event.which;
			console.log(key);
		}
	}
})();