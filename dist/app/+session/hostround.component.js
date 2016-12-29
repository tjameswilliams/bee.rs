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
var beers_service_1 = require('./../shared/beers/beers.service');
var session_service_1 = require('./../shared/session/session.service');
var HostRoundComponent = (function () {
    function HostRoundComponent(user, route, router, beers, session) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.beers = beers;
        this.session = session;
        this.confirmNextRound = false;
        this.ratingRange = [1, 2, 3, 4, 5];
    }
    HostRoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                var id = +params['id'];
                _this.beers.getBeer(id).subscribe(function (beer) {
                    _this.beer = beer;
                    _this.session.getSessionStatus().subscribe();
                });
            }
        });
    };
    HostRoundComponent.prototype.nextRound = function () {
        var _this = this;
        this.confirmNextRound = false;
        this.session.advanceSession(this.beer.id).subscribe(function (res) {
            if (res.id) {
                _this.router.navigate(['/host-round/' + res.id]);
            }
            else {
                _this.router.navigate(['/summary']);
            }
        });
    };
    HostRoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-start-session',
            templateUrl: 'hostround.component.html',
            styleUrls: ['session.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [beers_service_1.BeersService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router, beers_service_1.BeersService, session_service_1.SessionService])
    ], HostRoundComponent);
    return HostRoundComponent;
}());
exports.HostRoundComponent = HostRoundComponent;
