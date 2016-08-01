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
var BeerVisual = (function () {
    function BeerVisual(el) {
        this.el = el.nativeElement;
    }
    BeerVisual.prototype.ngOnInit = function () {
        console.log(this.color);
    };
    BeerVisual = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'beervisual',
            templateUrl: 'beervisual.component.html',
            inputs: ['color:color']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BeerVisual);
    return BeerVisual;
}());
exports.BeerVisual = BeerVisual;
