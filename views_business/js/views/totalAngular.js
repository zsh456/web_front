var app=angular.module("project_app",['ui.bootstrap']);
    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
