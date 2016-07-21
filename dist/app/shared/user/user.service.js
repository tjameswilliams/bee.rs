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
var core_2 = require('angular2-cookie/core');
var socket_service_1 = require('../socket/socket.service');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var UserService = (function () {
    function UserService(io, cookies, router) {
        this.io = io;
        this.cookies = cookies;
        this.router = router;
        this.initiated = false;
        this.users = [];
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.cookieOptions = {
            path: '/',
            date: tomorrow
        };
    }
    UserService.prototype.init = function () {
        var _this = this;
        var userId = this.cookies.get('user_id');
        this.io.socket.on('route:redirect', function (route) {
            _this.redirect(route);
        });
        this.io.socket.on('users:userAdded', function (user) {
            _this.users.push(user);
        });
        return new Observable_1.Observable(function (obs) {
            if (!userId) {
                obs.next(false);
            }
            else if (_this.initiated && _this.name) {
                obs.next(_this.session_id);
            }
            else {
                _this.io.socket.emit('users:getUser', userId, function (user) {
                    if (user && user.id) {
                        _this.id = user.id;
                        _this.name = user.name;
                        _this.user_type = user.user_type;
                        _this.session_id = user.session_id;
                        _this.cookies.put('user_id', _this.id.toString(), _this.cookieOptions);
                        obs.next(user.session_id);
                    }
                    else {
                        _this.cookies.removeAll();
                        obs.next(false);
                    }
                    _this.getAppContext();
                    _this.initiated = true;
                });
            }
        });
    };
    UserService.prototype.getAppContext = function () {
        this.io.socket.emit('appContext:getRoute', this.id);
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        this.io.socket.emit('users:getUsers', function (users) {
            _this.users = users;
        });
    };
    UserService.prototype.setSessionId = function (sessionId) {
        this.session_id = sessionId;
    };
    UserService.prototype.setUserType = function (userType) {
        this.user_type = userType;
    };
    UserService.prototype.setUserName = function () {
        if (this.name.trim() === '' || this.name.trim().length < 2) {
            this.error = 'Please tell your partygoers who you are!';
            return false;
        }
        else {
            return true;
        }
    };
    UserService.prototype.saveUser = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('users:createUser', {
                name: _this.name,
                user_type: _this.user_type,
                session_id: _this.session_id
            }, function (res) {
                _this.id = res.insertId;
                _this.cookies.put('user_id', _this.id.toString(), _this.cookieOptions);
                obs.next();
            });
        });
    };
    UserService.prototype.redirect = function (route) {
        console.log(route);
        if (this.router.url !== route && (['/beer-manifest', '/beer-editor', '/start-session'].indexOf(this.router.url) === -1 || !this.id)) {
            console.log('redirected');
            this.router.navigateByUrl(route);
        }
    };
    UserService.prototype.getSummary = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.init().subscribe(function () {
                _this.io.socket.emit('notes:getSummary', _this.id, function (summary) {
                    _this.summary = summary;
                    obs.next();
                });
            });
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, core_2.CookieService, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
