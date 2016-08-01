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
var note_service_1 = require('./../shared/notes/note.service');
var autosize_1 = require('./../shared/directives/autosize');
var beervisual_component_1 = require('./beervisual.component');
var TastingRoundComponent = (function () {
    function TastingRoundComponent(user, route, router, beers, session, notes) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.beers = beers;
        this.session = session;
        this.notes = notes;
        this.ratingRange = [1, 2, 3, 4, 5];
        this.complete = false;
    }
    TastingRoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                var id = +params['id'];
                _this.beers.getBeer(id).subscribe(function (beer) {
                    _this.beer = beer;
                    _this.notes.init(beer.id, _this.user.id);
                    _this.session.getSessionStatus().subscribe();
                });
            }
            _this.complete = false;
        });
    };
    TastingRoundComponent.prototype.setRating = function (rating) {
        this.notes.note.setRating(rating);
    };
    TastingRoundComponent.prototype.isReady = function () {
        return Boolean(this.notes.note.rating && this.notes.note.notes && this.notes.note.notes.length > 0 && this.notes.note.beer_guess);
    };
    TastingRoundComponent.prototype.selectColor = function (color) {
        this.notes.note.details.color = color;
    };
    TastingRoundComponent.prototype.done = function () {
        var _this = this;
        this.notes.save().subscribe(function () {
            _this.complete = true;
            _this.notes.getRatings().subscribe();
        });
    };
    TastingRoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-start-session',
            templateUrl: 'tastinground.component.html',
            styleUrls: ['session.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, autosize_1.Autosize, beervisual_component_1.BeerVisual],
            providers: [beers_service_1.BeersService, note_service_1.NoteService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router, beers_service_1.BeersService, session_service_1.SessionService, note_service_1.NoteService])
    ], TastingRoundComponent);
    return TastingRoundComponent;
}());
exports.TastingRoundComponent = TastingRoundComponent;
