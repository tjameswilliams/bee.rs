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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGlyZWN0aXZlcy9hdXRvc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1ELGVBQWUsQ0FBQyxDQUFBO0FBTW5FO0lBS0Usa0JBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFDdEMsQ0FBQztJQUpELDBCQUFPLEdBQVAsVUFBUSxRQUE2QjtRQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUdELDJCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0YsQ0FBQztJQWJGO1FBQUMsbUJBQVksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7OzsyQ0FBQTtJQUx6QztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7O2dCQUFBO0lBaUJGLGVBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGdCQUFRLFdBZXBCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9kaXJlY3RpdmVzL2F1dG9zaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3RleHRhcmVhW2F1dG9zaXplXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRvc2l6ZSB7XG4gQEhvc3RMaXN0ZW5lcignaW5wdXQnLFsnJGV2ZW50LnRhcmdldCddKVxuICBvbklucHV0KHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5hZGp1c3QoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZil7XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZHtcbiAgICB0aGlzLmFkanVzdCgpO1xuICB9XG4gIGFkanVzdCgpOiB2b2lke1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuIl19
