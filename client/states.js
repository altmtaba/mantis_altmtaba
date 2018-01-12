angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.viewissues', {
        views: {
            app: {
                controller: 'app_viewissues',
                templateProvider: function (app) {
                    return app.templateProvider('app.viewissues');
                }
            }
        }
    }).state('app.issuedetailsview', {
        views: {
            app: {
                controller: 'app_issuedetailsview',
                templateProvider: function (app) {
                    return app.templateProvider('app.issuedetailsview');
                }
            }
        }
    }).state('app.home', {
        views: {
            app: {
                controller: 'app_home',
                templateProvider: function (app) {
                    return app.templateProvider('app.home');
                }
            }
        }
    }).state('app.menu3', {
        views: {
            app: {
                controller: 'app_menu3',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu3');
                }
            }
        }
    }).state('app.loop', {
        views: {
            app: {
                controller: 'app_loop',
                templateProvider: function (app) {
                    return app.templateProvider('app.loop');
                }
            }
        }
    });
});