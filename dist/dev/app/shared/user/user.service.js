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
    function UserService(io, cookies, router) {
        this.io = io;
        this.cookies = cookies;
        this.router = router;
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
        if (this.router.url !== route) {
            this.router.navigate([route]);
        }
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, core_2.CookieService, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN6RCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QztJQVFDLHFCQUNTLEVBQWlCLEVBQ2xCLE9BQXNCLEVBQ3JCLE1BQWM7UUFGZCxPQUFFLEdBQUYsRUFBRSxDQUFlO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxoQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBT3RCLElBQUksUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNwQixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxRQUFRO1NBQ2QsQ0FBQztJQUNILENBQUM7SUFDRCwwQkFBSSxHQUFKLFVBQUssRUFBWTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLEVBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3BDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLEtBQVU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFTLElBQVM7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFB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R0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRSxFQUFFLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELDhCQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssS0FBTSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNELENBQUM7SUFoR0g7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWlHYixrQkFBQztBQUFELENBaEdBLEFBZ0dDLElBQUE7QUFoR1ksbUJBQVcsY0FnR3ZCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc29ja2V0L3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cdHB1YmxpYyBpZDogbnVtYmVyO1xuXHRwdWJsaWMgc2Vzc2lvbl9pZDogbnVtYmVyO1xuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xuXHRwdWJsaWMgdXNlcl90eXBlOiBzdHJpbmc7XG5cdHB1YmxpYyBlcnJvcjogc3RyaW5nO1xuXHRwdWJsaWMgdXNlcnM6IGFueSA9IFtdO1xuXHRwcml2YXRlIGNvb2tpZU9wdGlvbnM6IGFueTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbzogU29ja2V0U2VydmljZSxcblx0XHRwdWJsaWMgY29va2llczogQ29va2llU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge1xuXHRcdHZhciB0b21vcnJvdyA9IG5ldyBEYXRlKCk7XG5cdFx0dG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblx0XHR0aGlzLmNvb2tpZU9wdGlvbnMgPSB7XG5cdFx0XHRwYXRoOiAnLycsXG5cdFx0XHRkYXRlOiB0b21vcnJvd1xuXHRcdH07XG5cdH1cblx0aW5pdChjYjogRnVuY3Rpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHR1c2VySWQgPSBzZWxmLmNvb2tpZXMuZ2V0KCd1c2VyX2lkJyk7XG5cdFx0Ly8gYmVjYXVzZSB0aGlzIGlzIGEgc2hhcmVkIHN0YXRlIGFwcGxpY2F0aW9uLCB0aGUgc3lzdGVtIGlzIHJlc3BvbnNpYmxlIGZvclxuXHRcdC8vIGJyb2FkY2FzdGluZyBwYXRoIGNoYW5nZXMuXG4gICAgdGhpcy5pby5zb2NrZXQub24oJ3JvdXRlOnJlZGlyZWN0JywgZnVuY3Rpb24ocm91dGU6IGFueSkge1xuICAgICAgc2VsZi5yZWRpcmVjdChyb3V0ZSk7XG4gICAgfSk7XG5cdFx0dGhpcy5pby5zb2NrZXQub24oJ3VzZXJzOnVzZXJBZGRlZCcsIGZ1bmN0aW9uKHVzZXI6IGFueSkge1xuICAgICAgc2VsZi51c2Vycy5wdXNoKHVzZXIpO1xuICAgIH0pO1xuXHRcdGlmKCB1c2VySWQgKSB7XG5cdFx0XHQvLyBpZiB3ZSBrbm93IHRoZSB1c2VyLCB3ZSBtYWtlIHN1cmUgaGUvc2hlIHN0aWxsIGV4aXN0cyBpbiB0aGUgc3lzdGVtLlxuXHRcdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgndXNlcnM6Z2V0VXNlcicsXG5cdFx0XHRcdHVzZXJJZCxcblx0XHRcdFx0ZnVuY3Rpb24odXNlcjogYW55KSB7XG5cdFx0XHRcdFx0aWYoIHVzZXIgJiYgdXNlci5pZCApIHtcblx0XHRcdFx0XHRcdHNlbGYuaWQgPSB1c2VyLmlkO1xuXHRcdFx0XHRcdFx0c2VsZi5uYW1lID0gdXNlci5uYW1lO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VyX3R5cGUgPSB1c2VyLnVzZXJfdHlwZTtcblx0XHRcdFx0XHRcdHNlbGYuc2Vzc2lvbl9pZCA9IHVzZXIuc2Vzc2lvbl9pZDtcblx0XHRcdFx0XHRcdHNlbGYuY29va2llcy5wdXQoJ3VzZXJfaWQnLCBzZWxmLmlkLnRvU3RyaW5nKCksIHRoaXMuY29va2llT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRjYih1c2VyLnNlc3Npb25faWQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyAtLT4gbm8gY3VycmVudCB1c2VyIHdhcyBmb3VuZC5cblx0XHRcdFx0XHRcdHNlbGYuY29va2llcy5yZW1vdmVBbGwoKTtcblx0XHRcdFx0XHRcdGNiKGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi5nZXRBcHBDb250ZXh0KCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2IoZmFsc2UpO1xuXHRcdFx0c2VsZi5nZXRBcHBDb250ZXh0KCk7XG5cdFx0fVxuXHR9XG5cdGdldEFwcENvbnRleHQoKSB7XG5cdFx0dGhpcy5pby5zb2NrZXQuZW1pdCgnYXBwQ29udGV4dDpnZXRSb3V0ZScsIHRoaXMuaWQpO1xuXHR9XG5cdGdldFVzZXJzKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCd1c2VyczpnZXRVc2VycycsIGZ1bmN0aW9uKHVzZXJzOiBhbnkpIHtcblx0XHRcdHNlbGYudXNlcnMgPSB1c2Vycztcblx0XHR9KTtcblx0fVxuXHRzZXRTZXNzaW9uSWQoc2Vzc2lvbklkOiBudW1iZXIpIHtcblx0XHR0aGlzLnNlc3Npb25faWQgPSBzZXNzaW9uSWQ7XG5cdH1cblx0c2V0VXNlclR5cGUodXNlclR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMudXNlcl90eXBlID0gdXNlclR5cGU7XG5cdH1cblx0c2V0VXNlck5hbWUoKSB7XG5cdFx0aWYoIHRoaXMubmFtZS50cmltKCkgPT09ICcnIHx8IHRoaXMubmFtZS50cmltKCkubGVuZ3RoIDwgMiApIHtcblx0XHRcdHRoaXMuZXJyb3IgPSAnUGxlYXNlIHRlbGwgeW91ciBwYXJ0eWdvZXJzIHdobyB5b3UgYXJlISc7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRzYXZlVXNlcihjYjogRnVuY3Rpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5pby5zb2NrZXQuZW1pdCgndXNlcnM6Y3JlYXRlVXNlcicsIHtcblx0XHRcdG5hbWU6IHNlbGYubmFtZSxcblx0XHRcdHVzZXJfdHlwZTogc2VsZi51c2VyX3R5cGUsXG5cdFx0XHRzZXNzaW9uX2lkOiBzZWxmLnNlc3Npb25faWRcblx0XHR9LCBmdW5jdGlvbihyZXM6IGFueSkge1xuXHRcdFx0c2VsZi5pZCA9IHJlcy5pbnNlcnRJZDtcblx0XHRcdHNlbGYuY29va2llcy5wdXQoJ3VzZXJfaWQnLCBzZWxmLmlkLnRvU3RyaW5nKCksIHRoaXMuY29va2llT3B0aW9ucyk7XG5cdFx0XHRjYigpO1xuXHRcdH0pO1xuXHR9XG5cdHJlZGlyZWN0KHJvdXRlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSk7XG5cdFx0aWYoIHRoaXMucm91dGVyLnVybCAhPT0gcm91dGUgKSB7XG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcm91dGVdKTtcblx0XHR9XG4gIH1cbn1cbiJdfQ==
