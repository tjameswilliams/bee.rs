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
    }
    HostRoundComponent.prototype.ngOnInit = function () {
        var self = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                var id = +params['id'];
                self.beers.getBeer(id, function (beer) { return self.beer = beer; });
            }
        });
        self.session.getSessionStatus();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2Vzc2lvbi9ob3N0cm91bmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsNkJBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsOEJBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFDL0QsZ0NBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFXckU7SUFJQyw0QkFDUyxJQUFpQixFQUNmLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFtQixFQUNuQixPQUF1QjtRQUp6QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFDL0IsQ0FBQztJQUNKLHFDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzdDLEVBQUUsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFVLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQzdELENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBNUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDckMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOzswQkFBQTtJQXNCRix5QkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksMEJBQWtCLHFCQXFCOUIsQ0FBQSIsImZpbGUiOiJhcHAvK3Nlc3Npb24vaG9zdHJvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJlZXJzU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL2JlZXJzL2JlZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBCZWVyIH0gZnJvbSAnLi8uLi9zaGFyZWQvYmVlcnMvYmVlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXN0YXJ0LXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJ2hvc3Ryb3VuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZXNzaW9uLmNvbXBvbmVudC5jc3MnXSxcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbQmVlcnNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb3N0Um91bmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdWI6IGFueTtcbiAgc3RhdHVzOiBhbnk7XG4gIGJlZXI6IEJlZXI7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGJlZXJzOiBCZWVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZVxuXHQpIHt9XG5cdG5nT25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICBcdFx0aWYoIHBhcmFtc1snaWQnXSApIHtcbiAgXHRcdFx0bGV0IGlkID0gK3BhcmFtc1snaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgICAgIHNlbGYuYmVlcnMuZ2V0QmVlcihpZCwgKGJlZXI6IEJlZXIpID0+IHNlbGYuYmVlciA9IGJlZXIpO1xuICBcdFx0fVxuICBcdH0pO1xuICAgIHNlbGYuc2Vzc2lvbi5nZXRTZXNzaW9uU3RhdHVzKCk7XG4gIH1cbn1cbiJdfQ==
