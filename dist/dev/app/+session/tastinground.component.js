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
        var self = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                var id = +params['id'];
                self.beers.getBeer(id, function (beer) {
                    self.beer = beer;
                    self.notes.init(beer.id, self.user.id);
                });
            }
        });
        self.session.getSessionStatus();
    };
    TastingRoundComponent.prototype.setRating = function (rating) {
        this.notes.note.setRating(rating);
    };
    TastingRoundComponent.prototype.isReady = function () {
        return this.notes.note.rating && this.notes.note.notes && this.notes.note.notes.length > 0 && this.notes.note.beer_guess;
    };
    TastingRoundComponent.prototype.done = function () {
        var self = this;
        this.notes.save(function () {
            self.complete = true;
            self.notes.getRatings();
        });
    };
    TastingRoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-start-session',
            templateUrl: 'tastinground.component.html',
            styleUrls: ['session.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, autosize_1.Autosize],
            providers: [beers_service_1.BeersService, note_service_1.NoteService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router, beers_service_1.BeersService, session_service_1.SessionService, note_service_1.NoteService])
    ], TastingRoundComponent);
    return TastingRoundComponent;
}());
exports.TastingRoundComponent = TastingRoundComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2Vzc2lvbi90YXN0aW5ncm91bmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsNkJBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsOEJBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFDL0QsZ0NBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFDckUsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFFN0QseUJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFVM0Q7SUFLQywrQkFDUyxJQUFpQixFQUNmLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFtQixFQUNuQixPQUF1QixFQUN6QixLQUFrQjtRQUxsQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQVIzQixnQkFBVyxHQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGFBQVEsR0FBVyxLQUFLLENBQUM7SUFRdEIsQ0FBQztJQUNKLHdDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzdDLEVBQUUsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFVO29CQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNILENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0YseUNBQVMsR0FBVCxVQUFVLE1BQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCx1Q0FBTyxHQUFQO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzFILENBQUM7SUFDRCxvQ0FBSSxHQUFKO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUE5Q0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBQyxtQkFBUSxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUMsMEJBQVcsQ0FBQztTQUN0QyxDQUFDOzs2QkFBQTtJQXdDRiw0QkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksNkJBQXFCLHdCQXVDakMsQ0FBQSIsImZpbGUiOiJhcHAvK3Nlc3Npb24vdGFzdGluZ3JvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJlZXJzU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL2JlZXJzL2JlZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL25vdGVzL25vdGUuc2VydmljZSc7XG5pbXBvcnQgeyBCZWVyIH0gZnJvbSAnLi8uLi9zaGFyZWQvYmVlcnMvYmVlcic7XG5pbXBvcnQgeyBBdXRvc2l6ZSB9IGZyb20gJy4vLi4vc2hhcmVkL2RpcmVjdGl2ZXMvYXV0b3NpemUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1zdGFydC1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICd0YXN0aW5ncm91bmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2Vzc2lvbi5jb21wb25lbnQuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxBdXRvc2l6ZV0sXG4gIHByb3ZpZGVyczogW0JlZXJzU2VydmljZSxOb3RlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFzdGluZ1JvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3ViOiBhbnk7XG4gIGJlZXI6IEJlZXI7XG5cdHJhdGluZ1JhbmdlOiBhbnk9IFsxLDIsMyw0LDVdO1xuXHRjb21wbGV0ZTogYm9vbGVhbj0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGJlZXJzOiBCZWVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcblx0XHRwcml2YXRlIG5vdGVzOiBOb3RlU2VydmljZVxuXHQpIHt9XG5cdG5nT25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICBcdFx0aWYoIHBhcmFtc1snaWQnXSApIHtcbiAgXHRcdFx0bGV0IGlkID0gK3BhcmFtc1snaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgICAgIHNlbGYuYmVlcnMuZ2V0QmVlcihpZCwgKGJlZXI6IEJlZXIpID0+IHtcblx0XHRcdFx0XHRzZWxmLmJlZXIgPSBiZWVyO1xuXHRcdFx0XHRcdHNlbGYubm90ZXMuaW5pdChiZWVyLmlkLHNlbGYudXNlci5pZCk7XG5cdFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0pO1xuICAgIHNlbGYuc2Vzc2lvbi5nZXRTZXNzaW9uU3RhdHVzKCk7XG4gIH1cblx0c2V0UmF0aW5nKHJhdGluZzogbnVtYmVyKSB7XG5cdFx0dGhpcy5ub3Rlcy5ub3RlLnNldFJhdGluZyhyYXRpbmcpO1xuXHR9XG5cdGlzUmVhZHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMubm90ZXMubm90ZS5yYXRpbmcgJiYgdGhpcy5ub3Rlcy5ub3RlLm5vdGVzICYmIHRoaXMubm90ZXMubm90ZS5ub3Rlcy5sZW5ndGggPiAwICYmIHRoaXMubm90ZXMubm90ZS5iZWVyX2d1ZXNzO1xuXHR9XG5cdGRvbmUoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMubm90ZXMuc2F2ZShmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuY29tcGxldGUgPSB0cnVlO1xuXHRcdFx0c2VsZi5ub3Rlcy5nZXRSYXRpbmdzKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
