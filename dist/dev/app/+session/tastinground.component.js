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
            self.session.getSessionStatus();
            self.complete = false;
        });
    };
    TastingRoundComponent.prototype.setRating = function (rating) {
        this.notes.note.setRating(rating);
    };
    TastingRoundComponent.prototype.isReady = function () {
        return Boolean(this.notes.note.rating && this.notes.note.notes && this.notes.note.notes.length > 0 && this.notes.note.beer_guess);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2Vzc2lvbi90YXN0aW5ncm91bmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsNkJBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsOEJBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFDL0QsZ0NBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFDckUsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFFN0QseUJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFVM0Q7SUFLQywrQkFDUyxJQUFpQixFQUNmLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFtQixFQUNuQixPQUF1QixFQUN6QixLQUFrQjtRQUxsQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQVIzQixnQkFBVyxHQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGFBQVEsR0FBVyxLQUFLLENBQUM7SUFRdEIsQ0FBQztJQUNKLHdDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzdDLEVBQUUsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFVO29CQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNILENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YseUNBQVMsR0FBVCxVQUFVLE1BQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCx1Q0FBTyxHQUFQO1FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25JLENBQUM7SUFDRCxvQ0FBSSxHQUFKO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUEvQ0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBQyxtQkFBUSxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUMsMEJBQVcsQ0FBQztTQUN0QyxDQUFDOzs2QkFBQTtJQXlDRiw0QkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksNkJBQXFCLHdCQXdDakMsQ0FBQSIsImZpbGUiOiJhcHAvK3Nlc3Npb24vdGFzdGluZ3JvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJlZXJzU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL2JlZXJzL2JlZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RlU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL25vdGVzL25vdGUuc2VydmljZSc7XG5pbXBvcnQgeyBCZWVyIH0gZnJvbSAnLi8uLi9zaGFyZWQvYmVlcnMvYmVlcic7XG5pbXBvcnQgeyBBdXRvc2l6ZSB9IGZyb20gJy4vLi4vc2hhcmVkL2RpcmVjdGl2ZXMvYXV0b3NpemUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1zdGFydC1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICd0YXN0aW5ncm91bmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2Vzc2lvbi5jb21wb25lbnQuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxBdXRvc2l6ZV0sXG4gIHByb3ZpZGVyczogW0JlZXJzU2VydmljZSxOb3RlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFzdGluZ1JvdW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3ViOiBhbnk7XG4gIGJlZXI6IEJlZXI7XG5cdHJhdGluZ1JhbmdlOiBhbnk9IFsxLDIsMyw0LDVdO1xuXHRjb21wbGV0ZTogYm9vbGVhbj0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGJlZXJzOiBCZWVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcblx0XHRwcml2YXRlIG5vdGVzOiBOb3RlU2VydmljZVxuXHQpIHt9XG5cdG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICBcdFx0aWYoIHBhcmFtc1snaWQnXSApIHtcbiAgXHRcdFx0bGV0IGlkID0gK3BhcmFtc1snaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG5cdFx0XHRcdHNlbGYuYmVlcnMuZ2V0QmVlcihpZCwgKGJlZXI6IEJlZXIpID0+IHtcblx0XHRcdFx0XHRzZWxmLmJlZXIgPSBiZWVyO1xuXHRcdFx0XHRcdHNlbGYubm90ZXMuaW5pdChiZWVyLmlkLHNlbGYudXNlci5pZCk7XG5cdFx0XHRcdH0pO1xuICBcdFx0fVxuXHRcdFx0c2VsZi5zZXNzaW9uLmdldFNlc3Npb25TdGF0dXMoKTtcblx0XHRcdHNlbGYuY29tcGxldGUgPSBmYWxzZTtcbiAgXHR9KTtcbiAgfVxuXHRzZXRSYXRpbmcocmF0aW5nOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLm5vdGVzLm5vdGUuc2V0UmF0aW5nKHJhdGluZyk7XG5cdH1cblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gQm9vbGVhbih0aGlzLm5vdGVzLm5vdGUucmF0aW5nICYmIHRoaXMubm90ZXMubm90ZS5ub3RlcyAmJiB0aGlzLm5vdGVzLm5vdGUubm90ZXMubGVuZ3RoID4gMCAmJiB0aGlzLm5vdGVzLm5vdGUuYmVlcl9ndWVzcyk7XG5cdH1cblx0ZG9uZSgpOiB2b2lkIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5ub3Rlcy5zYXZlKGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi5jb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRzZWxmLm5vdGVzLmdldFJhdGluZ3MoKTtcblx0XHR9KTtcblx0fVxufVxuIl19
