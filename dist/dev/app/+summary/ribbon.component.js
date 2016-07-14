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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc3VtbWFyeS9yaWJib24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFZckU7SUFJQyx5QkFBWSxFQUFjO1FBRDFCLFNBQUksR0FBVSxtQkFBbUIsQ0FBQztRQUVqQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDQyxNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNQLEtBQUssQ0FBQztnQkFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO2dCQUNoQyxLQUFLLENBQUM7UUFDUixDQUFDO0lBQ0YsQ0FBQztJQTdCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxNQUFNLEVBQUUsQ0FBQyxzQ0FHUCxDQUFDO1lBQ0gsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3JCLENBQUM7O3VCQUFBO0lBcUJGLHNCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSx1QkFBZSxrQkFvQjNCLENBQUEiLCJmaWxlIjoiYXBwLytzdW1tYXJ5L3JpYmJvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAncmliYm9uJyxcblx0dGVtcGxhdGVVcmw6ICdyaWJib24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZXM6IFtgXG5cdC5yaWJib24ge1xuXHRcdHdpZHRoOiA1MHB4O1xuXHR9YF0sXG5cdGlucHV0czogWydyYW5rOnJhbmsnXVxufSlcbmV4cG9ydCBjbGFzcyBSaWJib25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRlbDogSFRNTEVsZW1lbnQ7XG5cdHJhbms6IG51bWJlcjtcblx0ZmlsbDogc3RyaW5nPSAncmdiKDc4LCAxNjcsIDIyNiknO1xuXHRjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuXHRcdHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuXHR9XG5cdG5nT25Jbml0KCkge1xuXHRcdHN3aXRjaCh0aGlzLnJhbmspIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5maWxsID0gJ3JnYigyMjgsIDIyMSwgNTgpJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMuZmlsbCA9ICdyZ2IoMTkyLCAxOTIsIDE5MiknO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0dGhpcy5maWxsID0gJ3JnYigxNzUsIDEwOSwgNDQpJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXX0=
