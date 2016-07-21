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
var Observable_1 = require('rxjs/Observable');
var SessionService = (function () {
    function SessionService(io) {
        this.io = io;
        this.initiated = false;
        this.id = null;
        this.name = null;
        this.error = null;
        this.status = null;
    }
    SessionService.prototype.init = function () {
        var _this = this;
        this.io.socket.on('sessions:broadcastStatus', function (status) {
            setTimeout(function () {
                _this.status = status;
            });
        });
        this.io.socket.on('sessions:setSession', function (session) {
            _this.setSession(session);
        });
        return new Observable_1.Observable(function (obs) {
            if (_this.initiated && _this.id) {
                obs.next(_this.id);
            }
            else {
                _this.io.socket.emit('sessions:getOpenSession', function (session) {
                    if (session.id) {
                        _this.setSession(session);
                        obs.next(session.id);
                    }
                    else {
                        obs.next(false);
                    }
                    _this.initiated = true;
                });
            }
        });
    };
    SessionService.prototype.setSession = function (session) {
        this.id = session.id;
        this.name = session.session_name;
    };
    SessionService.prototype.setName = function () {
        var _this = this;
        if (this.name.trim() === '' || this.name.length < 1) {
            this.error = 'Please supply a name for this session!';
        }
        return new Observable_1.Observable(function (observer) {
            _this.io.socket.emit('sessions:createSession', { name: _this.name }, function (res) {
                _this.id = res.id;
                observer.next();
            });
        });
    };
    SessionService.prototype.advanceSession = function (beer_id) {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('sessions:advanceSession', {
                beer_id: beer_id,
                session_id: _this.id
            }, function (res) {
                obs.next(res);
            });
        });
    };
    SessionService.prototype.getSessionStatus = function () {
        var _this = this;
        this.status = null;
        return new Observable_1.Observable(function (obs) {
            _this.init().subscribe(function () {
                _this.io.socket.emit('sessions:sessionStatus', _this.id, function (status) {
                    _this.status = status;
                    obs.next();
                });
            });
        });
    };
    SessionService.prototype.getLeaderBoard = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.init().subscribe(function () {
                _this.io.socket.emit('sessions:getLeaderBoard', _this.id, function (leaderboard) {
                    obs.next(leaderboard);
                });
            });
        });
    };
    SessionService.prototype.closeSession = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.init().subscribe(function () {
                _this.io.socket.emit('sessions:closeSession', _this.id, function () {
                    _this.id = null;
                    obs.next();
                });
            });
        });
    };
    SessionService.prototype.getStartRoute = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('sessions:startRoute', function (route) {
                obs.next(route);
            });
        });
    };
    SessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
