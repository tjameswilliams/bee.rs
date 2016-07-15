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
var http_1 = require('@angular/http');
var core_2 = require('angular2-cookie/core');
var index_1 = require('./shared/index');
var user_service_1 = require('./shared/user/user.service');
var session_service_1 = require('./shared/session/session.service');
var AppComponent = (function () {
    function AppComponent(io, user, session, router) {
        this.io = io;
        this.user = user;
        this.session = session;
        this.router = router;
        this.setSocketEvents();
        this.window = window;
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        this.user.init(function (session_id) {
            if (session_id) {
                self.session.init(false);
            }
        });
        self.window.addEventListener('focus', function () {
            self.focusWindow();
        });
    };
    AppComponent.prototype.setSocketEvents = function () {
        var self = this;
        this.io.socket.on('session:initSession', function () {
            self.session.init(false);
        });
    };
    AppComponent.prototype.focusWindow = function () {
        this.user.getAppContext();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [index_1.NameListService, http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavbarComponent, index_1.ToolbarComponent],
            providers: [core_2.CookieService, index_1.SocketService, user_service_1.UserService, session_service_1.SessionService]
        }), 
        __metadata('design:paramtypes', [index_1.SocketService, user_service_1.UserService, session_service_1.SessionService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUE4QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3JELHNCQUEwRixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTNHLDZCQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELGdDQUErQixrQ0FBa0MsQ0FBQyxDQUFBO0FBY2xFO0lBRUUsc0JBQ1UsRUFBaUIsRUFDakIsSUFBaUIsRUFDakIsT0FBdUIsRUFDdkIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQWU7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsK0JBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFTLFVBQWU7WUFDckMsRUFBRSxDQUFBLENBQUUsVUFBVyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELHNDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNGLGtDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUF2Q0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxDQUFDLHVCQUFlLEVBQUUscUJBQWMsQ0FBQztZQUNoRCxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHVCQUFlLEVBQUUsd0JBQWdCLENBQUM7WUFDbEUsU0FBUyxFQUFFLENBQUMsb0JBQWEsRUFBQyxxQkFBYSxFQUFDLDBCQUFXLEVBQUMsZ0NBQWMsQ0FBQztTQUNwRSxDQUFDOztvQkFBQTtJQWlDRixtQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksb0JBQVksZUFnQ3hCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcblxuXG5pbXBvcnQgeyBDb25maWcsIE5hbWVMaXN0U2VydmljZSwgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50LCBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuIFdpdGhpbiB0aGUgQFJvdXRlcyBhbm5vdGF0aW9uIGlzIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZVxuICogYXBwbGljYXRpb25zIHJvdXRlcywgY29uZmlndXJpbmcgdGhlIHBhdGhzIGZvciB0aGUgbGF6eSBsb2FkZWQgY29tcG9uZW50cyAoSG9tZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQpLlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB2aWV3UHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU10sXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtDb29raWVTZXJ2aWNlLFNvY2tldFNlcnZpY2UsVXNlclNlcnZpY2UsU2Vzc2lvblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHdpbmRvdzogV2luZG93O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGlvOiBTb2NrZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIHRoaXMuc2V0U29ja2V0RXZlbnRzKCk7XG5cdFx0dGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMudXNlci5pbml0KGZ1bmN0aW9uKHNlc3Npb25faWQ6IGFueSkge1xuICAgICAgaWYoIHNlc3Npb25faWQgKSB7XG4gICAgICAgIHNlbGYuc2Vzc2lvbi5pbml0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL3RoaXMuaW8uc29ja2V0LmVtaXQoJ2FwcENvbnRleHQ6Z2V0Um91dGUnKVxuICAgIHNlbGYud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLmZvY3VzV2luZG93KCk7XG5cdFx0fSk7XG4gIH1cbiAgc2V0U29ja2V0RXZlbnRzKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmlvLnNvY2tldC5vbignc2Vzc2lvbjppbml0U2Vzc2lvbicsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5zZXNzaW9uLmluaXQoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cdGZvY3VzV2luZG93KCkge1xuXHRcdHRoaXMudXNlci5nZXRBcHBDb250ZXh0KCk7XG5cdH1cbn1cbiJdfQ==
