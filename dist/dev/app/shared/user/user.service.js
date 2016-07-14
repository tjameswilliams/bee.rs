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
var router_1 = require('@angular/router');
var UserService = (function () {
    function UserService(io, cookies, router, window) {
        this.io = io;
        this.cookies = cookies;
        this.router = router;
        this.window = window;
        this.users = [];
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.cookieOptions = {
            path: '/',
            date: tomorrow
        };
    }
    UserService.prototype.init = function (cb) {
        var self = this, userId = self.cookies.get('user_id');
        this.io.socket.on('route:redirect', function (route) {
            self.redirect(route);
        });
        this.io.socket.on('users:userAdded', function (user) {
            self.users.push(user);
        });
        if (userId) {
            self.io.socket.emit('users:getUser', userId, function (user) {
                if (user && user.id) {
                    self.id = user.id;
                    self.name = user.name;
                    self.user_type = user.user_type;
                    self.session_id = user.session_id;
                    self.cookies.put('user_id', self.id.toString(), this.cookieOptions);
                    cb(user.session_id);
                }
                else {
                    self.cookies.removeAll();
                    cb(false);
                }
                self.getAppContext();
            });
        }
        else {
            cb(false);
            self.getAppContext();
        }
    };
    UserService.prototype.getAppContext = function () {
        this.io.socket.emit('appContext:getRoute', this.id);
    };
    UserService.prototype.getUsers = function () {
        var self = this;
        this.io.socket.emit('users:getUsers', function (users) {
            self.users = users;
        });
    };
    UserService.prototype.setSessionId = function (sessionId) {
        this.session_id = sessionId;
    };
    UserService.prototype.setUserType = function (userType) {
        this.user_type = userType;
    };
    UserService.prototype.setUserName = function () {
        if (this.name.trim() === '' || this.name.trim().length < 2) {
            this.error = 'Please tell your partygoers who you are!';
            return false;
        }
        else {
            return true;
        }
    };
    UserService.prototype.saveUser = function (cb) {
        var self = this;
        this.io.socket.emit('users:createUser', {
            name: self.name,
            user_type: self.user_type,
            session_id: self.session_id
        }, function (res) {
            self.id = res.insertId;
            self.cookies.put('user_id', self.id.toString(), this.cookieOptions);
            cb();
        });
    };
    UserService.prototype.redirect = function (route) {
        console.log(route);
        var self = this;
        if (self.router.url !== route && ['/beer-manifest', '/beer-editor', '/start-session'].indexOf(self.router.url) === -1) {
            console.log('redirected');
            self.router.navigateByUrl(route);
        }
    };
    UserService.prototype.getSummary = function () {
        var self = this;
        console.log('gettingSummary');
        self.io.socket.emit('notes:getSummary', this.id, function (summary) {
            console.log(summary);
            self.summary = summary;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, core_2.CookieService, router_1.Router, Window])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN6RCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QztJQVNDLHFCQUNTLEVBQWlCLEVBQ2xCLE9BQXNCLEVBQ3JCLE1BQWMsRUFDZCxNQUFjO1FBSGQsT0FBRSxHQUFGLEVBQUUsQ0FBZTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUGhCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFTdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMxQixRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ3BCLElBQUksRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFFBQVE7U0FDZCxDQUFDO0lBQ0gsQ0FBQztJQUNELDBCQUFJLEdBQUosVUFBSyxFQUFZO1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksRUFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHcEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQVMsS0FBVTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVMsSUFBUztZQUNu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QkFBVSxFQUFFOzttQkFBQTtJQThHYixrQkFBQztBQUFELENBN0dBLEFBNkdDLElBQUE7QUE3R1ksbUJBQVcsY0E2R3ZCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc29ja2V0L3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cdHB1YmxpYyBpZDogbnVtYmVyO1xuXHRwdWJsaWMgc2Vzc2lvbl9pZDogbnVtYmVyO1xuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRwdWJsaWMgdXNlcl90eXBlOiBzdHJpbmc7XG5cdHB1YmxpYyBlcnJvcjogc3RyaW5nO1xuXHRwdWJsaWMgdXNlcnM6IGFueSA9IFtdO1xuXHRwcml2YXRlIGNvb2tpZU9wdGlvbnM6IGFueTtcblx0cHJpdmF0ZSBzdW1tYXJ5OiBhbnk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaW86IFNvY2tldFNlcnZpY2UsXG5cdFx0cHVibGljIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHdpbmRvdzogV2luZG93XG5cdCkge1xuXHRcdHZhciB0b21vcnJvdyA9IG5ldyBEYXRlKCk7XG5cdFx0dG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblx0XHR0aGlzLmNvb2tpZU9wdGlvbnMgPSB7XG5cdFx0XHRwYXRoOiAnLycsXG5cdFx0XHRkYXRlOiB0b21vcnJvd1xuXHRcdH07XG5cdH1cblx0aW5pdChjYjogRnVuY3Rpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHR1c2VySWQgPSBzZWxmLmNvb2tpZXMuZ2V0KCd1c2VyX2lkJyk7XG5cdFx0Ly8gYmVjYXVzZSB0aGlzIGlzIGEgc2hhcmVkIHN0YXRlIGFwcGxpY2F0aW9uLCB0aGUgc3lzdGVtIGlzIHJlc3BvbnNpYmxlIGZvclxuXHRcdC8vIGJyb2FkY2FzdGluZyBwYXRoIGNoYW5nZXMuXG4gICAgdGhpcy5pby5zb2NrZXQub24oJ3JvdXRlOnJlZGlyZWN0JywgZnVuY3Rpb24ocm91dGU6IGFueSkge1xuICAgICAgc2VsZi5yZWRpcmVjdChyb3V0ZSk7XG4gICAgfSk7XG5cdFx0dGhpcy5pby5zb2NrZXQub24oJ3VzZXJzOnVzZXJBZGRlZCcsIGZ1bmN0aW9uKHVzZXI6IGFueSkge1xuICAgICAgc2VsZi51c2Vycy5wdXNoKHVzZXIpO1xuICAgIH0pO1xuXHRcdGlmKCB1c2VySWQgKSB7XG5cdFx0XHQvLyBpZiB3ZSBrbm93IHRoZSB1c2VyLCB3ZSBtYWtlIHN1cmUgaGUvc2hlIHN0aWxsIGV4aXN0cyBpbiB0aGUgc3lzdGVtLlxuXHRcdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgndXNlcnM6Z2V0VXNlcicsXG5cdFx0XHRcdHVzZXJJZCxcblx0XHRcdFx0ZnVuY3Rpb24odXNlcjogYW55KSB7XG5cdFx0XHRcdFx0aWYoIHVzZXIgJiYgdXNlci5pZCApIHtcblx0XHRcdFx0XHRcdHNlbGYuaWQgPSB1c2VyLmlkO1xuXHRcdFx0XHRcdFx0c2VsZi5uYW1lID0gdXNlci5uYW1lO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VyX3R5cGUgPSB1c2VyLnVzZXJfdHlwZTtcblx0XHRcdFx0XHRcdHNlbGYuc2Vzc2lvbl9pZCA9IHVzZXIuc2Vzc2lvbl9pZDtcblx0XHRcdFx0XHRcdHNlbGYuY29va2llcy5wdXQoJ3VzZXJfaWQnLCBzZWxmLmlkLnRvU3RyaW5nKCksIHRoaXMuY29va2llT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRjYih1c2VyLnNlc3Npb25faWQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyAtLT4gbm8gY3VycmVudCB1c2VyIHdhcyBmb3VuZC5cblx0XHRcdFx0XHRcdHNlbGYuY29va2llcy5yZW1vdmVBbGwoKTtcblx0XHRcdFx0XHRcdGNiKGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi5nZXRBcHBDb250ZXh0KCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2IoZmFsc2UpO1xuXHRcdFx0c2VsZi5nZXRBcHBDb250ZXh0KCk7XG5cdFx0fVxuXHR9XG5cdGdldEFwcENvbnRleHQoKSB7XG5cdFx0dGhpcy5pby5zb2NrZXQuZW1pdCgnYXBwQ29udGV4dDpnZXRSb3V0ZScsIHRoaXMuaWQpO1xuXHR9XG5cdGdldFVzZXJzKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCd1c2VyczpnZXRVc2VycycsIGZ1bmN0aW9uKHVzZXJzOiBhbnkpIHtcblx0XHRcdHNlbGYudXNlcnMgPSB1c2Vycztcblx0XHR9KTtcblx0fVxuXHRzZXRTZXNzaW9uSWQoc2Vzc2lvbklkOiBudW1iZXIpIHtcblx0XHR0aGlzLnNlc3Npb25faWQgPSBzZXNzaW9uSWQ7XG5cdH1cblx0c2V0VXNlclR5cGUodXNlclR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMudXNlcl90eXBlID0gdXNlclR5cGU7XG5cdH1cblx0c2V0VXNlck5hbWUoKSB7XG5cdFx0aWYoIHRoaXMubmFtZS50cmltKCkgPT09ICcnIHx8IHRoaXMubmFtZS50cmltKCkubGVuZ3RoIDwgMiApIHtcblx0XHRcdHRoaXMuZXJyb3IgPSAnUGxlYXNlIHRlbGwgeW91ciBwYXJ0eWdvZXJzIHdobyB5b3UgYXJlISc7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRzYXZlVXNlcihjYjogRnVuY3Rpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5pby5zb2NrZXQuZW1pdCgndXNlcnM6Y3JlYXRlVXNlcicsIHtcblx0XHRcdG5hbWU6IHNlbGYubmFtZSxcblx0XHRcdHVzZXJfdHlwZTogc2VsZi51c2VyX3R5cGUsXG5cdFx0XHRzZXNzaW9uX2lkOiBzZWxmLnNlc3Npb25faWRcblx0XHR9LCBmdW5jdGlvbihyZXM6IGFueSkge1xuXHRcdFx0c2VsZi5pZCA9IHJlcy5pbnNlcnRJZDtcblx0XHRcdHNlbGYuY29va2llcy5wdXQoJ3VzZXJfaWQnLCBzZWxmLmlkLnRvU3RyaW5nKCksIHRoaXMuY29va2llT3B0aW9ucyk7XG5cdFx0XHRjYigpO1xuXHRcdH0pO1xuXHR9XG5cdHJlZGlyZWN0KHJvdXRlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSk7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdGlmKCBzZWxmLnJvdXRlci51cmwgIT09IHJvdXRlICYmIFsnL2JlZXItbWFuaWZlc3QnLCcvYmVlci1lZGl0b3InLCcvc3RhcnQtc2Vzc2lvbiddLmluZGV4T2Yoc2VsZi5yb3V0ZXIudXJsKSA9PT0gLTEgKSB7XG5cdFx0XHRjb25zb2xlLmxvZygncmVkaXJlY3RlZCcpO1xuXHRcdFx0c2VsZi5yb3V0ZXIubmF2aWdhdGVCeVVybChyb3V0ZSk7XG5cdFx0XHQvL3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9XG4gIH1cblx0Z2V0U3VtbWFyeSgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc29sZS5sb2coJ2dldHRpbmdTdW1tYXJ5Jyk7XG5cdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgnbm90ZXM6Z2V0U3VtbWFyeScsIHRoaXMuaWQsIGZ1bmN0aW9uKHN1bW1hcnk6IGFueSkge1xuXHRcdFx0Y29uc29sZS5sb2coc3VtbWFyeSk7XG5cdFx0XHRzZWxmLnN1bW1hcnkgPSBzdW1tYXJ5O1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=
