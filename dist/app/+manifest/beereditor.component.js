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
        var _this = this;
        this.beer = this.beers.newBeer();
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                var id = +params['id'];
                _this.beers.getBeer(id).subscribe(function (beer) { return _this.beer = beer; });
            }
        });
    };
    BeerEditorComponent.prototype.ngAfterViewInit = function () {
        this.brandInput.first.nativeElement.focus();
    };
    BeerEditorComponent.prototype.save = function () {
        var _this = this;
        this.beer.error = '';
        if (this.beer.name.trim() === '') {
            this.beer.error = 'Please name this beer!';
        }
        else {
            this.beers.saveBeer(this.beer).subscribe(function (res) {
                if (!_this.beer.id) {
                    _this.beers.getBeer(res.insertId).subscribe(function (beer) {
                        _this.beer = beer;
                        _this.confirmId = true;
                    });
                }
                else {
                    _this.router.navigate(['/beer-manifest']);
                }
            });
        }
    };
    BeerEditorComponent.prototype.delete = function () {
        var _this = this;
        this.beers.deleteBeer(this.beer.id).subscribe(function () {
            _this.router.navigate(['/beer-manifest']);
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
