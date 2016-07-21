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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var core_2 = require('angular2-cookie/core');
var index_1 = require('./shared/index');
var user_service_1 = require('./shared/user/user.service');
var session_service_1 = require('./shared/session/session.service');
var AppComponent = (function () {
    function AppComponent(io, user, session, router) {
        this.io = io;
        this.user = user;
        this.session = session;
        this.router = router;
        this.setSocketEvents();
        this.window = window;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.init().subscribe(function (session_id) {
            if (session_id) {
                _this.session.init();
            }
        });
        this.window.addEventListener('focus', function () {
            _this.focusWindow();
        });
    };
    AppComponent.prototype.setSocketEvents = function () {
        var _this = this;
        this.io.socket.on('session:initSession', function () {
            _this.session.init();
        });
    };
    AppComponent.prototype.focusWindow = function () {
        this.user.getAppContext();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [core_2.CookieService, index_1.SocketService, user_service_1.UserService, session_service_1.SessionService]
        }), 
        __metadata('design:paramtypes', [index_1.SocketService, user_service_1.UserService, session_service_1.SessionService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
