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
var socket_service_1 = require('../socket/socket.service');
var session_service_1 = require('../session/session.service');
var beer_1 = require('./beer');
var BeersService = (function () {
    function BeersService(io, session) {
        this.io = io;
        this.session = session;
        this.list = [];
    }
    BeersService.prototype.getBeers = function () {
        var self = this;
        this.io.socket.emit('beers:getBeers', this.session.id, function (beers) {
            self.list = beers;
        });
    };
    BeersService.prototype.getBeer = function (id, cb) {
        var self = this;
        this.io.socket.emit('beers:getBeer', id, function (beer) {
            cb(beer);
        });
    };
    BeersService.prototype.newBeer = function () {
        var beer = new beer_1.Beer;
        beer.setSessionId(this.session.id);
        return beer;
    };
    BeersService.prototype.saveBeer = function (beer, cb) {
        this.io.socket.emit('beers:saveBeer', beer, cb);
    };
    BeersService.prototype.deleteBeer = function (id, cb) {
        this.io.socket.emit('beers:deleteBeer', id, function (res) {
            cb();
        });
    };
    BeersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, session_service_1.SessionService])
    ], BeersService);
    return BeersService;
}());
exports.BeersService = BeersService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYmVlcnMvYmVlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUc5QjtJQUVDLHNCQUNTLEVBQWlCLEVBQ2pCLE9BQXVCO1FBRHZCLE9BQUUsR0FBRixFQUFFLENBQWU7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFIekIsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUl0QixDQUFDO0lBQ0osK0JBQVEsR0FBUjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBUyxLQUFhO1lBQzVFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELDhCQUFPLEdBQVAsVUFBUSxFQUFVLEVBQUUsRUFBWTtRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsVUFBUyxJQUFZO1lBQzdELEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELDhCQUFPLEdBQVA7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRCwrQkFBUSxHQUFSLFVBQVMsSUFBVSxFQUFFLEVBQVk7UUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsaUNBQVUsR0FBVixVQUFXLEVBQVUsRUFBRSxFQUFZO1FBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsVUFBUyxHQUFRO1lBQzVELEVBQUUsRUFBRSxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBL0JGO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFnQ2IsbUJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLG9CQUFZLGVBK0J4QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYmVlcnMvYmVlcnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLi9zb2NrZXQvc29ja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBCZWVyIH0gZnJvbSAnLi9iZWVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJlZXJzU2VydmljZSB7XG5cdHB1YmxpYyBsaXN0OiBCZWVyW10gPSBbXTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbzogU29ja2V0U2VydmljZSxcblx0XHRwcml2YXRlIHNlc3Npb246IFNlc3Npb25TZXJ2aWNlXG5cdCkge31cblx0Z2V0QmVlcnMoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuaW8uc29ja2V0LmVtaXQoJ2JlZXJzOmdldEJlZXJzJywgdGhpcy5zZXNzaW9uLmlkLCBmdW5jdGlvbihiZWVyczogQmVlcltdKSB7XG5cdFx0XHRzZWxmLmxpc3QgPSBiZWVycztcblx0XHR9KTtcblx0fVxuXHRnZXRCZWVyKGlkOiBOdW1iZXIsIGNiOiBGdW5jdGlvbikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCdiZWVyczpnZXRCZWVyJywgaWQsIGZ1bmN0aW9uKGJlZXI6IEJlZXJbXSkge1xuXHRcdFx0Y2IoYmVlcik7XG5cdFx0fSk7XG5cdH1cblx0bmV3QmVlcigpIHtcblx0XHRsZXQgYmVlciA9IG5ldyBCZWVyO1xuXHRcdGJlZXIuc2V0U2Vzc2lvbklkKHRoaXMuc2Vzc2lvbi5pZCk7XG5cdFx0cmV0dXJuIGJlZXI7XG5cdH1cblx0c2F2ZUJlZXIoYmVlcjogQmVlciwgY2I6IEZ1bmN0aW9uKSB7XG5cdFx0dGhpcy5pby5zb2NrZXQuZW1pdCgnYmVlcnM6c2F2ZUJlZXInLCBiZWVyLCBjYik7XG5cdH1cblx0ZGVsZXRlQmVlcihpZDogbnVtYmVyLCBjYjogRnVuY3Rpb24pIHtcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCdiZWVyczpkZWxldGVCZWVyJywgaWQsIGZ1bmN0aW9uKHJlczogYW55KSB7XG5cdFx0XHRjYigpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=
