"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var socket_service_1 = require('./../socket/socket.service');
var SessionService = (function () {
    function SessionService(io) {
        this.io = io;
        this.initialized = new core_1.EventEmitter();
    }
    SessionService.prototype.init = function (cb) {
        var self = this;
        this.io.socket.emit('sessions:getOpenSession', function (session) {
            if (session.id) {
                self.setSession(session);
            }
            else {
                self.initialized.next(false);
            }
            if (cb) {
                cb();
            }
        });
        this.io.socket.on('sessions:broadcastStatus', function (status) {
            setTimeout(function () {
                self.status = status;
            });
        });
        this.io.socket.on('sessions:setSession', function (session) {
            self.setSession(session);
        });
    };
    SessionService.prototype.setSession = function (session) {
        this.id = session.id;
        this.name = session.session_name;
        this.initialized.next(session.id);
    };
    SessionService.prototype.setName = function () {
        var self = this;
        if (self.name.trim() === '' || self.name.length < 1) {
            self.error = 'Please supply a name for this session!';
        }
        else {
            self.io.socket.emit('sessions:createSession', { name: self.name }, function (res) {
                self.id = res.id;
            });
        }
    };
    SessionService.prototype.advanceSession = function (beer_id, cb) {
        this.io.socket.emit('sessions:advanceSession', {
            beer_id: beer_id,
            session_id: this.id
        }, function (res) {
            cb(res);
        });
    };
    SessionService.prototype.getSessionStatus = function () {
        var self = this;
        if (!self.id) {
            self.init(function () {
                self.getSessionStatus();
            });
        }
        else {
            self.status = null;
            self.io.socket.emit('sessions:sessionStatus', self.id, function (status) {
                self.status = status;
            });
        }
    };
    SessionService.prototype.getLeaderBoard = function (cb) {
        var self = this;
        if (!self.id) {
            self.init(function () {
                self.getLeaderBoard(cb);
            });
        }
        else {
            self.io.socket.emit('sessions:getLeaderBoard', self.id, function (leaderboard) {
                cb(leaderboard);
            });
        }
    };
    SessionService.prototype.closeSession = function (cb) {
        var self = this;
        self.io.socket.emit('sessions:closeSession', self.id, function () {
            cb();
        });
    };
    SessionService.prototype.getStartRoute = function (cb) {
        var self = this;
        self.io.socket.emit('sessions:startRoute', function (route) {
            cb(route);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SessionService.prototype, "initialized", void 0);
    SessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
