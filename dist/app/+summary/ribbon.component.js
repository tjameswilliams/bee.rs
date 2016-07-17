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
var RibbonComponent = (function () {
    function RibbonComponent(el) {
        this.fill = 'rgb(78, 167, 226)';
        this.el = el.nativeElement;
    }
    RibbonComponent.prototype.ngOnInit = function () {
        switch (this.rank) {
            case 1:
                this.fill = 'rgb(228, 221, 58)';
                break;
            case 2:
                this.fill = 'rgb(192, 192, 192)';
                break;
            case 3:
                this.fill = 'rgb(175, 109, 44)';
                break;
        }
    };
    RibbonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ribbon',
            templateUrl: 'ribbon.component.html',
            styles: ["\n\t.ribbon {\n\t\twidth: 50px;\n\t}"],
            inputs: ['rank:rank']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], RibbonComponent);
    return RibbonComponent;
}());
exports.RibbonComponent = RibbonComponent;
