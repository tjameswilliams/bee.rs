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
        var self = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                var id = +params['id'];
                self.beers.getBeer(id, function (beer) { return self.beer = beer; });
            }
            self.session.getSessionStatus();
        });
    };
    HostRoundComponent.prototype.nextRound = function () {
        var self = this;
        this.session.advanceSession(self.beer.id, function (res) {
            if (res.id) {
                self.router.navigate(['/host-round/' + res.id]);
            }
            else {
                self.router.navigate(['/summary']);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2Vzc2lvbi9ob3N0cm91bmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsNkJBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsOEJBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFDL0QsZ0NBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFXckU7SUFNQyw0QkFDUyxJQUFpQixFQUNmLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFtQixFQUNuQixPQUF1QjtRQUp6QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFQbEMscUJBQWdCLEdBQVcsS0FBSyxDQUFDO1FBQ2pDLGdCQUFXLEdBQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFPM0IsQ0FBQztJQUNKLHFDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzdDLEVBQUUsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFVLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Ysc0NBQVMsR0FBVDtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFTLEdBQVE7WUFDMUQsRUFBRSxDQUFBLENBQUUsR0FBRyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEdBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0EsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBeENGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDckMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDOzswQkFBQTtJQWtDRix5QkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksMEJBQWtCLHFCQWlDOUIsQ0FBQSIsImZpbGUiOiJhcHAvK3Nlc3Npb24vaG9zdHJvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJlZXJzU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL2JlZXJzL2JlZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBCZWVyIH0gZnJvbSAnLi8uLi9zaGFyZWQvYmVlcnMvYmVlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXN0YXJ0LXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJ2hvc3Ryb3VuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZXNzaW9uLmNvbXBvbmVudC5jc3MnXSxcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbQmVlcnNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb3N0Um91bmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdWI6IGFueTtcbiAgc3RhdHVzOiBhbnk7XG4gIGJlZXI6IEJlZXI7XG5cdGNvbmZpcm1OZXh0Um91bmQ6IGJvb2xlYW49IGZhbHNlO1xuXHRyYXRpbmdSYW5nZTogYW55PSBbMSwyLDMsNCw1XTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSB1c2VyOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYmVlcnM6IEJlZXJzU2VydmljZSxcbiAgICBwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlXG5cdCkge31cblx0bmdPbkluaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gIFx0XHRpZiggcGFyYW1zWydpZCddICkge1xuICBcdFx0XHRsZXQgaWQgPSArcGFyYW1zWydpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgc2VsZi5iZWVycy5nZXRCZWVyKGlkLCAoYmVlcjogQmVlcikgPT4gc2VsZi5iZWVyID0gYmVlcik7XG4gIFx0XHR9XG5cdFx0XHRzZWxmLnNlc3Npb24uZ2V0U2Vzc2lvblN0YXR1cygpO1xuICBcdH0pO1xuICB9XG5cdG5leHRSb3VuZCgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zZXNzaW9uLmFkdmFuY2VTZXNzaW9uKHNlbGYuYmVlci5pZCwgZnVuY3Rpb24ocmVzOiBhbnkpIHtcblx0XHRcdGlmKCByZXMuaWQgKSB7XG5cdFx0XHRcdHNlbGYucm91dGVyLm5hdmlnYXRlKFsnL2hvc3Qtcm91bmQvJytyZXMuaWRdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYucm91dGVyLm5hdmlnYXRlKFsnL3N1bW1hcnknXSk7XG5cdFx0XHR9XG4gICAgfSk7XG5cdH1cbn1cbiJdfQ==
