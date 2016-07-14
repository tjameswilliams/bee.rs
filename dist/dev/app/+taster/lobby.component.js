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
var LobbyComponent = (function () {
    function LobbyComponent(user) {
        this.user = user;
    }
    LobbyComponent.prototype.ngOnInit = function () {
        this.user.getUsers();
    };
    LobbyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-lobby',
            templateUrl: 'lobby.component.html',
            styleUrls: ['taster.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], LobbyComponent);
    return LobbyComponent;
}());
exports.LobbyComponent = LobbyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdGFzdGVyL2xvYmJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBUzVEO0lBQ0Msd0JBQ1MsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUN2QixDQUFDO0lBQ0osaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQWJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ3BDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBUUYscUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHNCQUFjLGlCQU8xQixDQUFBIiwiZmlsZSI6ImFwcC8rdGFzdGVyL2xvYmJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbG9iYnknLFxuICB0ZW1wbGF0ZVVybDogJ2xvYmJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rhc3Rlci5jb21wb25lbnQuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIExvYmJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSB1c2VyOiBVc2VyU2VydmljZVxuXHQpIHt9XG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMudXNlci5nZXRVc2VycygpO1xuXHR9XG59XG4iXX0=
