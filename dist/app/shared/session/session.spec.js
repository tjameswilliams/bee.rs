"use strict";
var testing_1 = require('@angular/core/testing');
var session_service_1 = require('./session.service');
var socket_service_1 = require('./../socket/socket.service');
describe('Session', function () {
    beforeEach(function () {
        testing_1.addProviders([session_service_1.SessionService, socket_service_1.SocketService]);
    });
    it('No session should be open to begin', testing_1.async(testing_1.inject([session_service_1.SessionService, socket_service_1.SocketService], function (session, io) {
        session.init().subscribe(function () {
            expect(session.id).toEqual(null);
            io.socket.disconnect();
        });
    })));
    it('Should create a session when a session has been applied.', testing_1.async(testing_1.inject([session_service_1.SessionService, socket_service_1.SocketService], function (session, io) {
        session.name = 'Jazmine Test';
        session.setName().subscribe(function () {
            expect(session.name).toEqual('Jazmine Test');
            expect(session.id).toEqual(jasmine.any(Number));
            io.socket.disconnect();
        });
    })));
    it('should redirect to /new-host after creation', testing_1.async(testing_1.inject([session_service_1.SessionService, socket_service_1.SocketService], function (session, io) {
        session.getStartRoute().subscribe(function (route) {
            expect(route).toEqual('/new-host');
            io.socket.disconnect();
        });
    })));
    it('should close the session', testing_1.async(testing_1.inject([session_service_1.SessionService, socket_service_1.SocketService], function (session, io) {
        session.closeSession().subscribe(function () {
            session.init().subscribe(function () {
                expect(session.id).toEqual(null);
                io.socket.disconnect();
            });
        });
    })));
});
