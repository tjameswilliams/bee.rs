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
var AppComponent = (function () {
    function AppComponent(io, user, router) {
        this.io = io;
        this.user = user;
        this.router = router;
        console.log('Environment config', index_1.Config);
        this.setSocketEvents();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.setSocketEvents = function () {
        var self = this;
        this.io.socket.on('route:redirect', function (route) {
            self.redirect(route);
        });
    };
    AppComponent.prototype.redirect = function (route) {
        console.log(route);
        this.router.navigate([route]);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [index_1.NameListService, http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavbarComponent, index_1.ToolbarComponent],
            providers: [core_2.CookieService, index_1.SocketService, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [index_1.SocketService, user_service_1.UserService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUE4QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3JELHNCQUEwRixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTNHLDZCQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBY3pEO0lBQ0Usc0JBQ1UsRUFBaUIsRUFDakIsSUFBaUIsRUFDakIsTUFBYztRQUZkLE9BQUUsR0FBRixFQUFFLENBQWU7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsY0FBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwrQkFBUSxHQUFSO0lBRUEsQ0FBQztJQUNELHNDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQVMsS0FBVTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELCtCQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE3Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxDQUFDLHVCQUFlLEVBQUUscUJBQWMsQ0FBQztZQUNoRCxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHVCQUFlLEVBQUUsd0JBQWdCLENBQUM7WUFDbEUsU0FBUyxFQUFFLENBQUMsb0JBQWEsRUFBQyxxQkFBYSxFQUFDLDBCQUFXLENBQUM7U0FDckQsQ0FBQzs7b0JBQUE7SUF1QkYsbUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLG9CQUFZLGVBc0J4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcblxuXG5pbXBvcnQgeyBDb25maWcsIE5hbWVMaXN0U2VydmljZSwgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50LCBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LiBXaXRoaW4gdGhlIEBSb3V0ZXMgYW5ub3RhdGlvbiBpcyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGVcbiAqIGFwcGxpY2F0aW9ucyByb3V0ZXMsIGNvbmZpZ3VyaW5nIHRoZSBwYXRocyBmb3IgdGhlIGxhenkgbG9hZGVkIGNvbXBvbmVudHMgKEhvbWVDb21wb25lbnQsIEFib3V0Q29tcG9uZW50KS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdmlld1Byb3ZpZGVyczogW05hbWVMaXN0U2VydmljZSwgSFRUUF9QUk9WSURFUlNdLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQ29va2llU2VydmljZSxTb2NrZXRTZXJ2aWNlLFVzZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGlvOiBTb2NrZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICBjb25zb2xlLmxvZygnRW52aXJvbm1lbnQgY29uZmlnJywgQ29uZmlnKTtcbiAgICB0aGlzLnNldFNvY2tldEV2ZW50cygpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIC8vdGhpcy5pby5zb2NrZXQuZW1pdCgnYXBwQ29udGV4dDpnZXRSb3V0ZScpXG4gIH1cbiAgc2V0U29ja2V0RXZlbnRzKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmlvLnNvY2tldC5vbigncm91dGU6cmVkaXJlY3QnLCBmdW5jdGlvbihyb3V0ZTogYW55KSB7XG4gICAgICBzZWxmLnJlZGlyZWN0KHJvdXRlKTtcbiAgICB9KTtcbiAgfVxuICByZWRpcmVjdChyb3V0ZTogYW55KSB7XG4gICAgY29uc29sZS5sb2cocm91dGUpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0pO1xuICB9XG59XG4iXX0=
