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
var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        this.adjust();
    };
    Autosize.prototype.adjust = function () {
        this.element.nativeElement.style.overflow = 'hidden';
        this.element.nativeElement.style.height = 'auto';
        this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
    };
    __decorate([
        core_1.HostListener('input', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [HTMLTextAreaElement]), 
        __metadata('design:returntype', void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        core_1.Directive({
            selector: 'textarea[autosize]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Autosize);
    return Autosize;
}());
exports.Autosize = Autosize;
