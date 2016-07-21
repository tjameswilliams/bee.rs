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
var ribbon_component_1 = require('./ribbon.component');
var SummaryComponent = (function () {
    function SummaryComponent(user, router, beers, session, notes) {
        this.user = user;
        this.router = router;
        this.beers = beers;
        this.session = session;
        this.notes = notes;
        this.ratingRange = [1, 2, 3, 4, 5];
        this.sessionClosed = false;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.getLeaderBoard().subscribe(function (leaderboard) {
            _this.leaderboard = leaderboard;
        });
        this.user.getSummary().subscribe();
    };
    SummaryComponent.prototype.closeSession = function () {
        var _this = this;
        this.session.closeSession().subscribe(function () {
            _this.sessionClosed = true;
        });
    };
    SummaryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-summary',
            templateUrl: 'summary.component.html',
            styleUrls: ['summary.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, ribbon_component_1.RibbonComponent],
            providers: [beers_service_1.BeersService, note_service_1.NoteService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, beers_service_1.BeersService, session_service_1.SessionService, note_service_1.NoteService])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
