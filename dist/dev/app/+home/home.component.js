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
var HomeComponent = (function () {
    function HomeComponent() {
        this.creatingSession = false;
    }
    HomeComponent.prototype.start = function () {
        this.creatingSession = true;
    };
    HomeComponent.prototype.submitSession = function () {
        this.sessionNameError = false;
        if (!this.sessionName || this.sessionName.trim() === '' || this.sessionName.length < 2) {
            this.sessionNameError = true;
        }
        else {
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBWTFEO0lBSUU7UUFIQSxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUdULENBQUM7SUFFaEIsNkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixFQUFFLENBQUEsQ0FBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztRQUVSLENBQUM7SUFDSCxDQUFDO0lBeEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1NBQ3ZDLENBQUM7O3FCQUFBO0lBbUJGLG9CQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxxQkFBYSxnQkFrQnpCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgY3JlYXRpbmdTZXNzaW9uID0gZmFsc2U7XG4gIHNlc3Npb25OYW1lOiBTdHJpbmc7XG4gIHNlc3Npb25OYW1lRXJyb3I6IEJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmNyZWF0aW5nU2Vzc2lvbiA9IHRydWU7XG4gIH1cblxuICBzdWJtaXRTZXNzaW9uKCkge1xuICAgIHRoaXMuc2Vzc2lvbk5hbWVFcnJvciA9IGZhbHNlO1xuICAgIGlmKCAhdGhpcy5zZXNzaW9uTmFtZSB8fCB0aGlzLnNlc3Npb25OYW1lLnRyaW0oKSA9PT0gJycgfHwgdGhpcy5zZXNzaW9uTmFtZS5sZW5ndGggPCAyICkge1xuICAgICAgdGhpcy5zZXNzaW9uTmFtZUVycm9yID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuICB9XG59XG4iXX0=
