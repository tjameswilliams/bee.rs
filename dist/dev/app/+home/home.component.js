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
var session_service_1 = require('./../shared/session/session.service');
var HomeComponent = (function () {
    function HomeComponent(session) {
        this.session = session;
        this.creatingSession = false;
    }
    HomeComponent.prototype.start = function (sessionName) {
        this.creatingSession = true;
        setTimeout(function () {
            sessionName.focus();
        }, 10);
    };
    HomeComponent.prototype.submitSession = function () {
        this.session.setName();
    };
    HomeComponent.prototype.keyUp = function (e) {
        switch (e.keyCode) {
            case 13:
                this.submitSession();
                break;
        }
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
        __metadata('design:paramtypes', [session_service_1.SessionService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzFELGdDQUErQixxQ0FBcUMsQ0FBQyxDQUFBO0FBYXJFO0lBR0UsdUJBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRjNDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBRXNCLENBQUM7SUFFL0MsNkJBQUssR0FBTCxVQUFNLFdBQWdCO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFVBQVUsQ0FBQztZQUNULFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxDQUFnQjtRQUNwQixNQUFNLENBQUEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQTlCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN0QyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7O3FCQUFBO0lBd0JGLG9CQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxxQkFBYSxnQkF1QnpCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBjcmVhdGluZ1Nlc3Npb24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlKSB7fVxuXG4gIHN0YXJ0KHNlc3Npb25OYW1lOiBhbnkpIHtcbiAgICB0aGlzLmNyZWF0aW5nU2Vzc2lvbiA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXNzaW9uTmFtZS5mb2N1cygpO1xuICAgIH0sMTApO1xuICB9XG5cbiAgc3VibWl0U2Vzc2lvbigpIHtcbiAgICB0aGlzLnNlc3Npb24uc2V0TmFtZSgpO1xuICB9XG5cbiAga2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIHRoaXMuc3VibWl0U2Vzc2lvbigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==
