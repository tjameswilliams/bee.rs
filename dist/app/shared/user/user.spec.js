"use strict";
var testing_1 = require('@angular/core/testing');
var user_service_1 = require('./user.service');
describe('User Service', function () {
    beforeEach(function () {
        testing_1.addProviders([user_service_1.UserService]);
    });
    it('does stuff', testing_1.inject([user_service_1.UserService], function (user) {
    }));
});
