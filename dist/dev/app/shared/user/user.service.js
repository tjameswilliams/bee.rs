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
var core_2 = require('angular2-cookie/core');
var socket_service_1 = require('../socket/socket.service');
var UserService = (function () {
    function UserService(io, cookies) {
        this.io = io;
        this.cookies = cookies;
        if (this.cookies.get('user_id')) {
            this.init();
        }
        else {
            this.getAppContext();
        }
    }
    UserService.prototype.init = function () {
        var self = this;
        this.io.socket.emit('users:getUser', this.cookies.get('user_id'), function (user) {
            if (user && user.id) {
                self.id = Number(user.id);
                self.name = user.name;
                self.cookies.put('user_id', self.id);
            }
            else {
                self.cookies.removeAll();
            }
            this.getAppContext();
        });
    };
    UserService.prototype.getAppContext = function () {
        var self = this;
        this.io.socket.emit('appContext:getRoute', self.id);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, core_2.CookieService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUd6RDtJQUdDLHFCQUNTLEVBQWlCLEVBQ2pCLE9BQXNCO1FBRHRCLE9BQUUsR0FBRixFQUFFLENBQWU7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUU5QixFQUFFLENBQUEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDRixDQUFDO0lBQ0QsMEJBQUksR0FBSjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFDM0IsVUFBUyxJQUFTO1lBQ2pCLEVBQUUsQ0FBQSxDQUFFLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVQLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUIsQ0FBQztZQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxtQ0FBYSxHQUFiO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQWpDRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBa0NiLGtCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxtQkFBVyxjQWlDdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLi9zb2NrZXQvc29ja2V0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXHRwdWJsaWMgaWQ6IE51bWJlcjtcblx0cHVibGljIG5hbWU6IFN0cmluZztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbzogU29ja2V0U2VydmljZSxcblx0XHRwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2Vcblx0KSB7XG5cdFx0aWYoIHRoaXMuY29va2llcy5nZXQoJ3VzZXJfaWQnKSApIHtcblx0XHRcdHRoaXMuaW5pdCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldEFwcENvbnRleHQoKTtcblx0XHR9XG5cdH1cblx0aW5pdCgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5pby5zb2NrZXQuZW1pdCgndXNlcnM6Z2V0VXNlcicsXG5cdFx0XHR0aGlzLmNvb2tpZXMuZ2V0KCd1c2VyX2lkJyksXG5cdFx0XHRmdW5jdGlvbih1c2VyOiBhbnkpIHtcblx0XHRcdFx0aWYoIHVzZXIgJiYgdXNlci5pZCApIHtcblx0XHRcdFx0XHRzZWxmLmlkID0gTnVtYmVyKHVzZXIuaWQpO1xuXHRcdFx0XHRcdHNlbGYubmFtZSA9IHVzZXIubmFtZTtcblx0XHRcdFx0XHRzZWxmLmNvb2tpZXMucHV0KCd1c2VyX2lkJywgc2VsZi5pZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gLS0+IG5vIGN1cnJlbnQgdXNlciB3YXMgZm91bmQuXG5cdFx0XHRcdFx0c2VsZi5jb29raWVzLnJlbW92ZUFsbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZ2V0QXBwQ29udGV4dCgpO1xuXHRcdH0pO1xuXHR9XG5cdGdldEFwcENvbnRleHQoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuaW8uc29ja2V0LmVtaXQoJ2FwcENvbnRleHQ6Z2V0Um91dGUnLCBzZWxmLmlkKTtcblx0fVxufVxuIl19
