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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var user_service_1 = require('./../shared/user/user.service');
var session_service_1 = require('./../shared/session/session.service');
var HostComponent = (function () {
    function HostComponent(host, session, router) {
        this.host = host;
        this.session = session;
        this.router = router;
        host.setUserType('host');
        host.setSessionId(session.id);
    }
    HostComponent.prototype.ngAfterViewInit = function () {
        this.hostInput.first.nativeElement.focus();
    };
    HostComponent.prototype.submit = function () {
        var self = this;
        if (self.host.setUserName()) {
            self.host.saveUser(function () {
                self.router.navigate(['/info-manifest']);
            });
        }
    };
    __decorate([
        core_1.ViewChildren('input'), 
        __metadata('design:type', Object)
    ], HostComponent.prototype, "hostInput", void 0);
    HostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-host',
            templateUrl: 'host.component.html',
            styleUrls: ['host.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService, router_1.Router])
    ], HostComponent);
    return HostComponent;
}());
exports.HostComponent = HostComponent;
