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
var socket_service_1 = require('../socket/socket.service');
var session_service_1 = require('../session/session.service');
var beer_1 = require('./beer');
var Observable_1 = require('rxjs/Observable');
var BeersService = (function () {
    function BeersService(io, session) {
        this.io = io;
        this.session = session;
        this.list = [];
    }
    BeersService.prototype.getBeers = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('beers:getBeers', _this.session.id, function (beers) {
                _this.list = beers;
                obs.next();
            });
        });
    };
    BeersService.prototype.getBeer = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('beers:getBeer', id, function (beer) {
                obs.next(beer);
            });
        });
    };
    BeersService.prototype.newBeer = function () {
        var beer = new beer_1.Beer;
        beer.setSessionId(this.session.id);
        return beer;
    };
    BeersService.prototype.saveBeer = function (beer) {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('beers:saveBeer', beer, function (res) {
                obs.next(res);
            });
        });
    };
    BeersService.prototype.deleteBeer = function (id) {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('beers:deleteBeer', id, function (res) {
                obs.next(res);
            });
        });
    };
    BeersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, session_service_1.SessionService])
    ], BeersService);
    return BeersService;
}());
exports.BeersService = BeersService;
