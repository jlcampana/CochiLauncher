(function () {
	'use strict';
	var app = angular.module('app');

	app.service('keyboardService', function ($http, $rootScope) {
		var self = this;
		this.keyboardMapping = {};

		//Reading keyboard configuration
		$http.get('config/keys.json').success(function (data) {
			self.keyboardMapping = data;
			console.log('Keymapping updated');
		});

		this.keyDown = function ($event) {
			var code = window.event ? $event.keyCode : $event.which;
			//var keys = Object.keys(self.keyboardMapping);
			console.info(code);

			Object.keys(self.keyboardMapping).forEach(function (key) {
				var codes = self.keyboardMapping[key];

				if (codes.indexOf(code) > -1) {
					$rootScope.$broadcast(key);
				}

			});
		};

	});
})();