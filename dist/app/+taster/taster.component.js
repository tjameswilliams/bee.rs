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
var TasterComponent = (function () {
    function TasterComponent(user, session, router) {
        this.user = user;
        this.session = session;
        this.router = router;
    }
    TasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.setUserType('taster');
        if (this.session.id) {
            this.user.setSessionId(this.session.id);
        }
        else {
            this.session.init().subscribe(function (session_id) {
                _this.user.setSessionId(_this.session.id);
            });
        }
    };
    TasterComponent.prototype.ngAfterViewInit = function () {
        this.userInput.first.nativeElement.focus();
    };
    TasterComponent.prototype.submit = function () {
        var _this = this;
        if (this.user.setUserName()) {
            this.user.saveUser().subscribe(function () {
                _this.user.getAppContext();
            });
        }
    };
    __decorate([
        core_1.ViewChildren('input'), 
        __metadata('design:type', Object)
    ], TasterComponent.prototype, "userInput", void 0);
    TasterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-taster',
            templateUrl: 'taster.component.html',
            styleUrls: ['taster.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService, router_1.Router])
    ], TasterComponent);
    return TasterComponent;
}());
exports.TasterComponent = TasterComponent;
