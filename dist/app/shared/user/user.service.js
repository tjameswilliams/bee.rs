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
var UserService = (function () {
    function UserService(io, cookies, router) {
        this.io = io;
        this.cookies = cookies;
        this.router = router;
        this.users = [];
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.cookieOptions = {
            path: '/',
            date: tomorrow
        };
    }
    UserService.prototype.init = function (cb) {
        var self = this, userId = self.cookies.get('user_id');
        this.io.socket.on('route:redirect', function (route) {
            self.redirect(route);
        });
        this.io.socket.on('users:userAdded', function (user) {
            self.users.push(user);
        });
        if (userId) {
            self.io.socket.emit('users:getUser', userId, function (user) {
                if (user && user.id) {
                    self.id = user.id;
                    self.name = user.name;
                    self.user_type = user.user_type;
                    self.session_id = user.session_id;
                    self.cookies.put('user_id', self.id.toString(), this.cookieOptions);
                    cb(user.session_id);
                }
                else {
                    self.cookies.removeAll();
                    cb(false);
                }
                self.getAppContext();
            });
        }
        else {
            cb(false);
            self.getAppContext();
        }
    };
    UserService.prototype.getAppContext = function () {
        this.io.socket.emit('appContext:getRoute', this.id);
    };
    UserService.prototype.getUsers = function () {
        var self = this;
        this.io.socket.emit('users:getUsers', function (users) {
            self.users = users;
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
    UserService.prototype.saveUser = function (cb) {
        var self = this;
        this.io.socket.emit('users:createUser', {
            name: self.name,
            user_type: self.user_type,
            session_id: self.session_id
        }, function (res) {
            self.id = res.insertId;
            self.cookies.put('user_id', self.id.toString(), this.cookieOptions);
            cb();
        });
    };
    UserService.prototype.redirect = function (route) {
        console.log(route);
        var self = this;
        if (self.router.url !== route && ['/beer-manifest', '/beer-editor', '/start-session'].indexOf(self.router.url) === -1) {
            console.log('redirected');
            self.router.navigateByUrl(route);
        }
    };
    UserService.prototype.getSummary = function () {
        var self = this;
        console.log('gettingSummary');
        self.io.socket.emit('notes:getSummary', this.id, function (summary) {
            console.log(summary);
            self.summary = summary;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, core_2.CookieService, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
