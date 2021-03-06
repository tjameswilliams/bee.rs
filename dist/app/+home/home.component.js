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
var forms_1 = require('@angular/forms');
var session_service_1 = require('./../shared/session/session.service');
var HomeComponent = (function () {
    function HomeComponent(session, router) {
        this.session = session;
        this.router = router;
        this.creatingSession = false;
    }
    HomeComponent.prototype.start = function (sessionName) {
        var _this = this;
        this.session.getStartRoute().subscribe(function (route) {
            if (route === '/new-taster') {
                _this.router.navigate([route]);
            }
            else {
                _this.creatingSession = true;
                setTimeout(function () {
                    sessionName.focus();
                }, 10);
            }
        });
    };
    HomeComponent.prototype.submitSession = function () {
        this.session.setName().subscribe();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: []
        }), 
        __metadata('design:paramtypes', [session_service_1.SessionService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
