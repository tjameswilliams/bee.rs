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
var forms_1 = require('@angular/forms');
var beers_service_1 = require('./../shared/beers/beers.service');
var session_service_1 = require('./../shared/session/session.service');
var router_1 = require('@angular/router');
var ManifestComponent = (function () {
    function ManifestComponent(beers, router, session) {
        this.beers = beers;
        this.router = router;
        this.session = session;
    }
    ManifestComponent.prototype.ngOnInit = function () {
        var self = this;
        this.session.initialized.subscribe(function (session_id) {
            self.beers.getBeers();
        });
        if (this.session.id) {
            self.beers.getBeers();
        }
    };
    ManifestComponent.prototype.addBeer = function () {
        this.router.navigate(['/beer-editor']);
    };
    ManifestComponent.prototype.goToBeer = function (id) {
        this.router.navigate(['/beer-editor', id]);
    };
    ManifestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-manifest',
            templateUrl: 'manifest.component.html',
            styleUrls: ['manifest.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [beers_service_1.BeersService]
        }), 
        __metadata('design:paramtypes', [beers_service_1.BeersService, router_1.Router, session_service_1.SessionService])
    ], ManifestComponent);
    return ManifestComponent;
}());
exports.ManifestComponent = ManifestComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rbWFuaWZlc3QvbWFuaWZlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQXlDLGdCQUFnQixDQUFDLENBQUE7QUFDMUQsOEJBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFDL0QsZ0NBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFDckUsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFVNUQ7SUFDQywyQkFDUyxLQUFtQixFQUNuQixNQUFjLEVBQ2QsT0FBdUI7UUFGdkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFDNUIsQ0FBQztJQUNMLG9DQUFRLEdBQVI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVMsVUFBa0I7WUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDRixDQUFDO0lBQ0QsbUNBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0NBQVEsR0FBUixVQUFTLEVBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBNUJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixFQUFDLDBCQUFpQixDQUFDO1lBQ3hELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQzs7eUJBQUE7SUFzQkYsd0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHlCQUFpQixvQkFxQjdCLENBQUEiLCJmaWxlIjoiYXBwLyttYW5pZmVzdC9tYW5pZmVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVlcnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvYmVlcnMvYmVlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1tYW5pZmVzdCcsXG4gIHRlbXBsYXRlVXJsOiAnbWFuaWZlc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWFuaWZlc3QuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbQmVlcnNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNYW5pZmVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgYmVlcnM6IEJlZXJzU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2Vcblx0KSB7IH1cblx0bmdPbkluaXQoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Vzc2lvbi5pbml0aWFsaXplZC5zdWJzY3JpYmUoZnVuY3Rpb24oc2Vzc2lvbl9pZDogbnVtYmVyKSB7XG5cdFx0XHRzZWxmLmJlZXJzLmdldEJlZXJzKCk7XG5cdFx0fSk7XG5cdFx0aWYoIHRoaXMuc2Vzc2lvbi5pZCApIHtcblx0XHRcdHNlbGYuYmVlcnMuZ2V0QmVlcnMoKTtcblx0XHR9XG5cdH1cblx0YWRkQmVlcigpIHtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9iZWVyLWVkaXRvciddKTtcblx0fVxuXHRnb1RvQmVlcihpZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYmVlci1lZGl0b3InLCBpZF0pO1xuXHR9XG59XG4iXX0=
