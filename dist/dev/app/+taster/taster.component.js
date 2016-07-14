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
var TasterComponent = (function () {
    function TasterComponent(user, session, router) {
        this.user = user;
        this.session = session;
        this.router = router;
    }
    TasterComponent.prototype.ngOnInit = function () {
        var self = this;
        this.user.setUserType('taster');
        if (this.session.id) {
            this.user.setSessionId(this.session.id);
        }
        else {
            this.session.init(false);
            this.session.initialized.subscribe(function (session_id) {
                self.user.setSessionId(self.session.id);
            });
        }
    };
    TasterComponent.prototype.ngAfterViewInit = function () {
        this.userInput.first.nativeElement.focus();
    };
    TasterComponent.prototype.submit = function () {
        var self = this;
        if (self.user.setUserName()) {
            self.user.saveUser(function () {
                self.user.getAppContext();
            });
        }
    };
    __decorate([
        core_1.ViewChildren('input'), 
        __metadata('design:type', Object)
    ], TasterComponent.prototype, "userInput", void 0);
    TasterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-taster',
            templateUrl: 'taster.component.html',
            styleUrls: ['taster.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService, router_1.Router])
    ], TasterComponent);
    return TasterComponent;
}());
exports.TasterComponent = TasterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdGFzdGVyL3Rhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUMvRSx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCw2QkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBK0IscUNBQXFDLENBQUMsQ0FBQTtBQVNyRTtJQUVDLHlCQUNTLElBQWlCLEVBQ2pCLE9BQXVCLEVBQ3ZCLE1BQWM7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbkIsQ0FBQztJQUNMLGtDQUFRLEdBQVI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVMsVUFBa0I7Z0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBRUYsQ0FBQztJQUNELHlDQUFlLEdBQWY7UUFDRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUNGLGdDQUFNLEdBQU47UUFDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQTlCRjtRQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOztzREFBQTtJQVJ2QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUMvQixDQUFDOzt1QkFBQTtJQWlDRixzQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksdUJBQWUsa0JBZ0MzQixDQUFBIiwiZmlsZSI6ImFwcC8rdGFzdGVyL3Rhc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXRhc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAndGFzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rhc3Rlci5jb21wb25lbnQuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFRhc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBWaWV3Q2hpbGRyZW4oJ2lucHV0JykgdXNlcklucHV0OiBhbnk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkgeyB9XG5cdG5nT25Jbml0KCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLnVzZXIuc2V0VXNlclR5cGUoJ3Rhc3RlcicpO1xuXHRcdGlmKCB0aGlzLnNlc3Npb24uaWQgKSB7XG5cdFx0XHR0aGlzLnVzZXIuc2V0U2Vzc2lvbklkKHRoaXMuc2Vzc2lvbi5pZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2Vzc2lvbi5pbml0KGZhbHNlKTtcblx0XHRcdHRoaXMuc2Vzc2lvbi5pbml0aWFsaXplZC5zdWJzY3JpYmUoZnVuY3Rpb24oc2Vzc2lvbl9pZDogbnVtYmVyKSB7XG5cdFx0XHRcdHNlbGYudXNlci5zZXRTZXNzaW9uSWQoc2VsZi5zZXNzaW9uLmlkKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnVzZXJJbnB1dC5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblx0c3VibWl0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiggc2VsZi51c2VyLnNldFVzZXJOYW1lKCkgKSB7XG4gICAgICBzZWxmLnVzZXIuc2F2ZVVzZXIoKCkgPT4ge1xuICAgICAgICAvL3NlbGYucm91dGVyLm5hdmlnYXRlKFsnL3BsZWFzZS13YWl0J10pO1xuICAgICAgICBzZWxmLnVzZXIuZ2V0QXBwQ29udGV4dCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
