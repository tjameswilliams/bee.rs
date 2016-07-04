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
var io = require('socket.io-client');
var SocketService = (function () {
    function SocketService() {
        this.socket = io();
    }
    SocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc29ja2V0L3NvY2tldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsSUFBWSxFQUFFLFdBQU0sa0JBQWtCLENBQUMsQ0FBQTtBQUd2QztJQUVDO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBTEY7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQU1iLG9CQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxxQkFBYSxnQkFLekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NvY2tldC9zb2NrZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XG5cdHB1YmxpYyBzb2NrZXQ6IGFueTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zb2NrZXQgPSBpbygpO1xuXHR9XG59XG4iXX0=
