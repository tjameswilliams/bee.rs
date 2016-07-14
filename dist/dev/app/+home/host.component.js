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
var user_service_1 = require('./../shared/user/user.service');
var HostComponent = (function () {
    function HostComponent() {
    }
    HostComponent = __decorate([
        core_1.Component({
            selector: 'sd-host',
            templateUrl: 'host.component.html',
            styleUrls: ['home.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], HostComponent);
    return HostComponent;
}());
exports.HostComponent = HostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzFELDZCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBWTVEO0lBQUE7SUFFQSxDQUFDO0lBVEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7O3FCQUFBO0lBR0Ysb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBIiwiZmlsZSI6ImFwcC8raG9tZS9ob3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1ob3N0JyxcbiAgdGVtcGxhdGVVcmw6ICdob3N0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhvc3RDb21wb25lbnQge1xuXG59XG4iXX0=
