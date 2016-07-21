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
var beers_service_1 = require('./../shared/beers/beers.service');
var session_service_1 = require('./../shared/session/session.service');
var router_1 = require('@angular/router');
var ManifestComponent = (function () {
    function ManifestComponent(beers, router, session) {
        this.beers = beers;
        this.router = router;
        this.session = session;
    }
    ManifestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.init().subscribe(function () {
            _this.beers.getBeers().subscribe(function () { });
        });
    };
    ManifestComponent.prototype.addBeer = function () {
        this.router.navigate(['/beer-editor']);
    };
    ManifestComponent.prototype.goToBeer = function (id) {
        this.router.navigate(['/beer-editor', id]);
    };
    ManifestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-manifest',
            templateUrl: 'manifest.component.html',
            styleUrls: ['manifest.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [beers_service_1.BeersService]
        }), 
        __metadata('design:paramtypes', [beers_service_1.BeersService, router_1.Router, session_service_1.SessionService])
    ], ManifestComponent);
    return ManifestComponent;
}());
exports.ManifestComponent = ManifestComponent;
