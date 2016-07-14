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
var beers_service_1 = require('./../shared/beers/beers.service');
var router_1 = require('@angular/router');
var BeerEditorComponent = (function () {
    function BeerEditorComponent(beers, route, router) {
        this.beers = beers;
        this.route = route;
        this.router = router;
        this.deleting = false;
        this.confirmId = false;
    }
    BeerEditorComponent.prototype.ngOnInit = function () {
        var self = this;
        this.beer = this.beers.newBeer();
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                var id = +params['id'];
                self.beers.getBeer(id, function (beer) { return self.beer = beer; });
            }
        });
    };
    BeerEditorComponent.prototype.ngAfterViewInit = function () {
        this.brandInput.first.nativeElement.focus();
    };
    BeerEditorComponent.prototype.save = function () {
        var self = this;
        this.beer.error = '';
        if (this.beer.name.trim() === '') {
            this.beer.error = 'Please name this beer!';
        }
        else {
            this.beers.saveBeer(this.beer, function (res) {
                if (!self.beer.id) {
                    self.beers.getBeer(res.insertId, function (beer) {
                        console.log(beer);
                        self.beer = beer;
                        console.log(self.beer);
                        self.confirmId = true;
                    });
                }
                else {
                    self.router.navigate(['/beer-manifest']);
                }
            });
        }
    };
    BeerEditorComponent.prototype.delete = function () {
        var self = this;
        this.beers.deleteBeer(self.beer.id, function () {
            self.router.navigate(['/beer-manifest']);
        });
    };
    __decorate([
        core_1.ViewChildren('brand'), 
        __metadata('design:type', Object)
    ], BeerEditorComponent.prototype, "brandInput", void 0);
    BeerEditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-beer-editor',
            templateUrl: 'beereditor.component.html',
            styleUrls: ['manifest.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [beers_service_1.BeersService]
        }), 
        __metadata('design:paramtypes', [beers_service_1.BeersService, router_1.ActivatedRoute, router_1.Router])
    ], BeerEditorComponent);
    return BeerEditorComponent;
}());
exports.BeerEditorComponent = BeerEditorComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rbWFuaWZlc3QvYmVlcmVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUMvRSxzQkFBeUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMxRCw4QkFBNkIsaUNBQWlDLENBQUMsQ0FBQTtBQUUvRCx1QkFBMEQsaUJBQWlCLENBQUMsQ0FBQTtBQVU1RTtJQU1DLDZCQUNTLEtBQW1CLEVBQ25CLEtBQXFCLEVBQ3JCLE1BQWM7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMdkIsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixjQUFTLEdBQVcsS0FBSyxDQUFDO0lBS3RCLENBQUM7SUFDTCxzQ0FBUSxHQUFSO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDN0MsRUFBRSxDQUFBLENBQUUsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxVQUFDLElBQVUsSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDN0QsQ0FBQztRQUNBLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDZDQUFlLEdBQWY7UUFDRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNGLGtDQUFJLEdBQUo7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7UUFDNUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFTLEdBQVE7Z0JBQy9DLEVBQUUsQ0FBQSxDQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVMsSUFBVTt3QkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFFLElBQUksQ0FBQztvQkFDdEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUVGLENBQUM7SUFDRCxvQ0FBTSxHQUFOO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWpERDtRQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzsyREFBQTtJQVR2QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixFQUFDLDBCQUFpQixDQUFDO1lBQ3hELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQzs7MkJBQUE7SUFvREYsMEJBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLDJCQUFtQixzQkFtRC9CLENBQUEiLCJmaWxlIjoiYXBwLyttYW5pZmVzdC9iZWVyZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlZXJzU2VydmljZSB9IGZyb20gJy4vLi4vc2hhcmVkL2JlZXJzL2JlZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmVlciB9IGZyb20gJy4vLi4vc2hhcmVkL2JlZXJzL2JlZXInO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1iZWVyLWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnYmVlcmVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtYW5pZmVzdC5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsUk9VVEVSX0RJUkVDVElWRVNdLFxuICBwcm92aWRlcnM6IFtCZWVyc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEJlZXJFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXHRAVmlld0NoaWxkcmVuKCdicmFuZCcpIGJyYW5kSW5wdXQ6IGFueTtcblx0YmVlcjogQmVlcjtcblx0c3ViOiBhbnk7XG5cdGRlbGV0aW5nOiBib29sZWFuPSBmYWxzZTtcblx0Y29uZmlybUlkOiBib29sZWFuPSBmYWxzZTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBiZWVyczogQmVlcnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcblx0KSB7IH1cblx0bmdPbkluaXQoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuYmVlciA9IHRoaXMuYmVlcnMubmV3QmVlcigpO1xuXHRcdHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cdFx0aWYoIHBhcmFtc1snaWQnXSApIHtcblx0XHRcdGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxuICAgICAgc2VsZi5iZWVycy5nZXRCZWVyKGlkLCAoYmVlcjogQmVlcikgPT4gc2VsZi5iZWVyID0gYmVlcik7XG5cdFx0fVxuICAgfSk7XG5cdH1cblx0bmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYnJhbmRJbnB1dC5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblx0c2F2ZSgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5iZWVyLmVycm9yID0gJyc7XG5cdFx0aWYoIHRoaXMuYmVlci5uYW1lLnRyaW0oKSA9PT0gJycgKSB7XG5cdFx0XHR0aGlzLmJlZXIuZXJyb3IgPSAnUGxlYXNlIG5hbWUgdGhpcyBiZWVyISc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYmVlcnMuc2F2ZUJlZXIodGhpcy5iZWVyLCBmdW5jdGlvbihyZXM6IGFueSkge1xuXHRcdFx0XHRpZiggIXNlbGYuYmVlci5pZCApIHtcblx0XHRcdFx0XHRzZWxmLmJlZXJzLmdldEJlZXIocmVzLmluc2VydElkLCBmdW5jdGlvbihiZWVyOiBCZWVyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhiZWVyKTtcblx0XHRcdFx0XHRcdHNlbGYuYmVlciA9IGJlZXI7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhzZWxmLmJlZXIpO1xuXHRcdFx0XHRcdFx0c2VsZi5jb25maXJtSWQ9IHRydWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5yb3V0ZXIubmF2aWdhdGUoWycvYmVlci1tYW5pZmVzdCddKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH1cblx0ZGVsZXRlKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmJlZXJzLmRlbGV0ZUJlZXIoc2VsZi5iZWVyLmlkLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYucm91dGVyLm5hdmlnYXRlKFsnL2JlZXItbWFuaWZlc3QnXSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
