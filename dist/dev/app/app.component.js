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
        console.log('Environment config', index_1.Config);
        this.setSocketEvents();
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        this.user.init(function (session_id) {
            if (session_id) {
                self.session.init(false);
            }
        });
    };
    AppComponent.prototype.setSocketEvents = function () {
        var self = this;
        this.io.socket.on('session:initSession', function () {
            self.session.init(false);
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHFCQUE4QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3JELHNCQUEwRixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTNHLDZCQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELGdDQUErQixrQ0FBa0MsQ0FBQyxDQUFBO0FBY2xFO0lBQ0Usc0JBQ1UsRUFBaUIsRUFDakIsSUFBaUIsRUFDakIsT0FBdUIsRUFDdkIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQWU7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsY0FBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVMsVUFBZTtZQUNyQyxFQUFFLENBQUEsQ0FBRSxVQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ0Qsc0NBQWUsR0FBZjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixhQUFhLEVBQUUsQ0FBQyx1QkFBZSxFQUFFLHFCQUFjLENBQUM7WUFDaEQsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1lBQ2xFLFNBQVMsRUFBRSxDQUFDLG9CQUFhLEVBQUMscUJBQWEsRUFBQywwQkFBVyxFQUFDLGdDQUFjLENBQUM7U0FDcEUsQ0FBQzs7b0JBQUE7SUEyQkYsbUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLG9CQUFZLGVBMEJ4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5cblxuaW1wb3J0IHsgQ29uZmlnLCBOYW1lTGlzdFNlcnZpY2UsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudCwgU29ja2V0U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LiBXaXRoaW4gdGhlIEBSb3V0ZXMgYW5ub3RhdGlvbiBpcyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGVcbiAqIGFwcGxpY2F0aW9ucyByb3V0ZXMsIGNvbmZpZ3VyaW5nIHRoZSBwYXRocyBmb3IgdGhlIGxhenkgbG9hZGVkIGNvbXBvbmVudHMgKEhvbWVDb21wb25lbnQsIEFib3V0Q29tcG9uZW50KS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdmlld1Byb3ZpZGVyczogW05hbWVMaXN0U2VydmljZSwgSFRUUF9QUk9WSURFUlNdLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQ29va2llU2VydmljZSxTb2NrZXRTZXJ2aWNlLFVzZXJTZXJ2aWNlLFNlc3Npb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGlvOiBTb2NrZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBTZXNzaW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xuICAgIHRoaXMuc2V0U29ja2V0RXZlbnRzKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMudXNlci5pbml0KGZ1bmN0aW9uKHNlc3Npb25faWQ6IGFueSkge1xuICAgICAgaWYoIHNlc3Npb25faWQgKSB7XG4gICAgICAgIHNlbGYuc2Vzc2lvbi5pbml0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL3RoaXMuaW8uc29ja2V0LmVtaXQoJ2FwcENvbnRleHQ6Z2V0Um91dGUnKVxuICB9XG4gIHNldFNvY2tldEV2ZW50cygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5pby5zb2NrZXQub24oJ3Nlc3Npb246aW5pdFNlc3Npb24nLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuc2Vzc2lvbi5pbml0KGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=
