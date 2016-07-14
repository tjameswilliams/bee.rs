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
var router_1 = require('@angular/router');
var user_service_1 = require('./../shared/user/user.service');
var session_service_1 = require('./../shared/session/session.service');
var HostComponent = (function () {
    function HostComponent(host, session, router) {
        this.host = host;
        this.session = session;
        this.router = router;
        host.setUserType('host');
        host.setSessionId(session.id);
    }
    HostComponent.prototype.ngAfterViewInit = function () {
        this.hostInput.first.nativeElement.focus();
    };
    HostComponent.prototype.submit = function () {
        var self = this;
        if (self.host.setUserName()) {
            self.host.saveUser(function () {
                self.router.navigate(['/info-manifest']);
            });
        }
    };
    __decorate([
        core_1.ViewChildren('input'), 
        __metadata('design:type', Object)
    ], HostComponent.prototype, "hostInput", void 0);
    HostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-host',
            templateUrl: 'host.component.html',
            styleUrls: ['host.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService, router_1.Router])
    ], HostComponent);
    return HostComponent;
}());
exports.HostComponent = HostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9zdC9ob3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzFELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLDZCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELGdDQUErQixxQ0FBcUMsQ0FBQyxDQUFBO0FBWXJFO0lBRUUsdUJBQ1UsSUFBaUIsRUFDakIsT0FBdUIsRUFDdkIsTUFBYztRQUZkLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCw4QkFBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBbkJEO1FBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7O29EQUFBO0lBUnhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1NBQ3ZDLENBQUM7O3FCQUFBO0lBc0JGLG9CQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxxQkFBYSxnQkFxQnpCLENBQUEiLCJmaWxlIjoiYXBwLytob3N0L2hvc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9zdCcsXG4gIHRlbXBsYXRlVXJsOiAnaG9zdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob3N0LmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgSG9zdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkcmVuKCdpbnB1dCcpIGhvc3RJbnB1dDogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3Q6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICBob3N0LnNldFVzZXJUeXBlKCdob3N0Jyk7XG4gICAgaG9zdC5zZXRTZXNzaW9uSWQoc2Vzc2lvbi5pZCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaG9zdElucHV0LmZpcnN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuICBzdWJtaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmKCBzZWxmLmhvc3Quc2V0VXNlck5hbWUoKSApIHtcbiAgICAgIHNlbGYuaG9zdC5zYXZlVXNlcigoKSA9PiB7XG4gICAgICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnL2luZm8tbWFuaWZlc3QnXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
