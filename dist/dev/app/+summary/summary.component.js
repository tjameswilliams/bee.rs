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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELDZCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELDhCQUE2QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQy9ELGdDQUErQixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3JFLDZCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBVXJEO0lBR0MsMEJBQ1MsSUFBaUIsRUFDZixNQUFjLEVBQ2QsS0FBbUIsRUFDbkIsT0FBdUIsRUFDekIsS0FBa0I7UUFKbEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFOM0IsZ0JBQVcsR0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQU8zQixDQUFDO0lBQ0osbUNBQVEsR0FBUjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFTLFdBQWdCO1lBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQTFCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBQyxrQ0FBZSxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUMsMEJBQVcsQ0FBQztTQUN0QyxDQUFDOzt3QkFBQTtJQW9CRix1QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksd0JBQWdCLG1CQW1CNUIsQ0FBQSIsImZpbGUiOiJhcHAvK3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJlZXJzU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL2JlZXJzL2JlZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL25vdGVzL25vdGUuc2VydmljZSc7XG5pbXBvcnQgeyBSaWJib25Db21wb25lbnQgfSBmcm9tICcuL3JpYmJvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICdzdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N1bW1hcnkuY29tcG9uZW50LmNzcyddLFxuXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsUmliYm9uQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQmVlcnNTZXJ2aWNlLE5vdGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0bGVhZGVyYm9hcmQ6IGFueTtcblx0cmF0aW5nUmFuZ2U6IGFueT0gWzEsMiwzLDQsNV07XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGJlZXJzOiBCZWVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcblx0XHRwcml2YXRlIG5vdGVzOiBOb3RlU2VydmljZVxuXHQpIHt9XG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNlc3Npb24uZ2V0TGVhZGVyQm9hcmQoZnVuY3Rpb24obGVhZGVyYm9hcmQ6IGFueSkge1xuXHRcdFx0c2VsZi5sZWFkZXJib2FyZCA9IGxlYWRlcmJvYXJkO1xuXHRcdH0pO1xuXHRcdHRoaXMudXNlci5pbml0KGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi51c2VyLmdldFN1bW1hcnkoKTtcblx0XHR9KTtcbiAgfVxufVxuIl19
