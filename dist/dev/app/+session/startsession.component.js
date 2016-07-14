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
        var self = this;
        this.session.advanceSession(null, function (res) {
            self.router.navigate(['/host-round/' + res.id]);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2Vzc2lvbi9zdGFydHNlc3Npb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQsNkJBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsZ0NBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFTckU7SUFDQywrQkFDUyxJQUFpQixFQUNqQixPQUF1QixFQUNyQixNQUFjO1FBRmhCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0QixDQUFDO0lBQ0osd0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELDRDQUFZLEdBQVo7UUFDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsR0FBUTtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsR0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFyQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUMvQixDQUFDOzs2QkFBQTtJQWdCRiw0QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksNkJBQXFCLHdCQWVqQyxDQUFBIiwiZmlsZSI6ImFwcC8rc2Vzc2lvbi9zdGFydHNlc3Npb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2Qtc3RhcnQtc2Vzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnc3RhcnRzZXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Nlc3Npb24uY29tcG9uZW50LmNzcyddLFxuXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJ0U2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge31cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy51c2VyLmdldFVzZXJzKCk7XG5cdH1cblx0c3RhcnRTZXNzaW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnNlc3Npb24uYWR2YW5jZVNlc3Npb24obnVsbCwgZnVuY3Rpb24ocmVzOiBhbnkpIHtcbiAgICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnL2hvc3Qtcm91bmQvJytyZXMuaWRdKTtcbiAgICB9KTtcblx0fVxufVxuIl19
