'use strict';
window.mocks = window.mocks || {};
window.mocks.issuedetailsview = window.mocks.issuedetailsview || {};
window.mocks.issuedetailsview.gotoreportissue = function ($scope, params, app) {
    return app.go('app.reportissue');
};
window.mocks.issuedetailsview.gotohome = function ($scope, params, app) {
    return app.go('app.home');
};