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
var forms_1 = require('@angular/forms');
var session_service_1 = require('./../shared/session/session.service');
var HomeComponent = (function () {
    function HomeComponent(session, router) {
        this.session = session;
        this.router = router;
        this.creatingSession = false;
    }
    HomeComponent.prototype.start = function (sessionName) {
        var self = this;
        this.session.getStartRoute(function (route) {
            if (route === '/new-taster') {
                self.router.navigate([route]);
            }
            else {
                self.creatingSession = true;
                setTimeout(function () {
                    sessionName.focus();
                }, 10);
            }
        });
    };
    HomeComponent.prototype.submitSession = function () {
        this.session.setName();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: []
        }), 
        __metadata('design:paramtypes', [session_service_1.SessionService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzFELGdDQUErQixxQ0FBcUMsQ0FBQyxDQUFBO0FBYXJFO0lBR0UsdUJBQ1EsT0FBdUIsRUFDdkIsTUFBYztRQURkLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFLdEIsQ0FBQztJQUVILDZCQUFLLEdBQUwsVUFBTSxXQUFnQjtRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBUyxLQUFhO1lBQ2hELEVBQUUsQ0FBQSxDQUFFLEtBQUssS0FBSyxhQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixVQUFVLENBQUM7b0JBQ1QsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQWpDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN0QyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3FCQUFBO0lBNEJGLG9CQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxxQkFBYSxnQkEyQnpCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgY3JlYXRpbmdTZXNzaW9uID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge31cblxuICBzdGFydChzZXNzaW9uTmFtZTogYW55KSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Vzc2lvbi5nZXRTdGFydFJvdXRlKGZ1bmN0aW9uKHJvdXRlOiBzdHJpbmcpIHtcblx0XHRcdGlmKCByb3V0ZSA9PT0gJy9uZXctdGFzdGVyJyApIHtcblx0XHRcdFx0c2VsZi5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmNyZWF0aW5nU2Vzc2lvbiA9IHRydWU7XG5cdFx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdCAgICAgIHNlc3Npb25OYW1lLmZvY3VzKCk7XG5cdFx0ICAgIH0sMTApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG4gIH1cblxuICBzdWJtaXRTZXNzaW9uKCkge1xuICAgIHRoaXMuc2Vzc2lvbi5zZXROYW1lKCk7XG4gIH1cblxufVxuIl19
