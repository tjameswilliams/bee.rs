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
        var self = this;
        this.session.getLeaderBoard(function (leaderboard) {
            self.leaderboard = leaderboard;
        });
        this.user.init(function () {
            self.user.getSummary();
        });
    };
    SummaryComponent.prototype.closeSession = function () {
        var self = this;
        this.session.closeSession(function () {
            self.sessionClosed = true;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELDZCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELDhCQUE2QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQy9ELGdDQUErQixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3JFLDZCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBVXJEO0lBSUMsMEJBQ1MsSUFBaUIsRUFDZixNQUFjLEVBQ2QsS0FBbUIsRUFDbkIsT0FBdUIsRUFDekIsS0FBa0I7UUFKbEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFQM0IsZ0JBQVcsR0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFXLEtBQUssQ0FBQztJQU8zQixDQUFDO0lBQ0osbUNBQVEsR0FBUjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFTLFdBQWdCO1lBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNGLHVDQUFZLEdBQVo7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBakNGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLGtDQUFlLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBQywwQkFBVyxDQUFDO1NBQ3RDLENBQUM7O3dCQUFBO0lBMkJGLHVCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSx3QkFBZ0IsbUJBMEI1QixDQUFBIiwiZmlsZSI6ImFwcC8rc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmVlcnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvYmVlcnMvYmVlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvbm90ZXMvbm90ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJpYmJvbkNvbXBvbmVudCB9IGZyb20gJy4vcmliYm9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJ3N1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3VtbWFyeS5jb21wb25lbnQuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxSaWJib25Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtCZWVyc1NlcnZpY2UsTm90ZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRsZWFkZXJib2FyZDogYW55O1xuXHRyYXRpbmdSYW5nZTogYW55PSBbMSwyLDMsNCw1XTtcblx0c2Vzc2lvbkNsb3NlZDogYm9vbGVhbj0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGJlZXJzOiBCZWVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcblx0XHRwcml2YXRlIG5vdGVzOiBOb3RlU2VydmljZVxuXHQpIHt9XG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNlc3Npb24uZ2V0TGVhZGVyQm9hcmQoZnVuY3Rpb24obGVhZGVyYm9hcmQ6IGFueSkge1xuXHRcdFx0c2VsZi5sZWFkZXJib2FyZCA9IGxlYWRlcmJvYXJkO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlci5pbml0KGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi51c2VyLmdldFN1bW1hcnkoKTtcblx0XHR9KTtcbiAgfVxuXHRjbG9zZVNlc3Npb24oKTogdm9pZCB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Vzc2lvbi5jbG9zZVNlc3Npb24oZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLnNlc3Npb25DbG9zZWQgPSB0cnVlO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=
