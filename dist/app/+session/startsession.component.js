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
var user_service_1 = require('./../shared/user/user.service');
var session_service_1 = require('./../shared/session/session.service');
var StartSessionComponent = (function () {
    function StartSessionComponent(user, session, router) {
        this.user = user;
        this.session = session;
        this.router = router;
    }
    StartSessionComponent.prototype.ngOnInit = function () {
        this.user.getUsers();
    };
    StartSessionComponent.prototype.startSession = function () {
        var _this = this;
        this.session.advanceSession(null).subscribe(function (res) {
            _this.router.navigate(['/host-round/' + res.id]);
        });
    };
    StartSessionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-start-session',
            templateUrl: 'startsession.component.html',
            styleUrls: ['session.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService, router_1.Router])
    ], StartSessionComponent);
    return StartSessionComponent;
}());
exports.StartSessionComponent = StartSessionComponent;
