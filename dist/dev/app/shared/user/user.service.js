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
        __metadata('design:paramtypes', [socket_service_1.SocketService, core_2.CookieService, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN6RCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QztJQVNDLHFCQUNTLEVBQWlCLEVBQ2xCLE9BQXNCLEVBQ3JCLE1BQWM7UUFGZCxPQUFFLEdBQUYsRUFBRSxDQUFlO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5oQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBUXRCLElBQUksUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNwQixJQUFJLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxRQUFRO1NBQ2QsQ0FBQztJQUNILENBQUM7SUFDRCwwQkFBSSxHQUFKLFVBQUssRUFBWTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLEVBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3BDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLEtBQVU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFTLElBQVM7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFB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QTVHQSxBQTRHQyxJQUFBO0FBNUdZLG1CQUFXLGNBNEd2QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4uL3NvY2tldC9zb2NrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXHRwdWJsaWMgaWQ6IG51bWJlcjtcblx0cHVibGljIHNlc3Npb25faWQ6IG51bWJlcjtcblx0cHVibGljIG5hbWU6IHN0cmluZztcblx0cHVibGljIHVzZXJfdHlwZTogc3RyaW5nO1xuXHRwdWJsaWMgZXJyb3I6IHN0cmluZztcblx0cHVibGljIHVzZXJzOiBhbnkgPSBbXTtcblx0cHJpdmF0ZSBjb29raWVPcHRpb25zOiBhbnk7XG5cdHByaXZhdGUgc3VtbWFyeTogYW55O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGlvOiBTb2NrZXRTZXJ2aWNlLFxuXHRcdHB1YmxpYyBjb29raWVzOiBDb29raWVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcblx0KSB7XG5cdFx0dmFyIHRvbW9ycm93ID0gbmV3IERhdGUoKTtcblx0XHR0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXHRcdHRoaXMuY29va2llT3B0aW9ucyA9IHtcblx0XHRcdHBhdGg6ICcvJyxcblx0XHRcdGRhdGU6IHRvbW9ycm93XG5cdFx0fTtcblx0fVxuXHRpbml0KGNiOiBGdW5jdGlvbikge1xuXHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdHVzZXJJZCA9IHNlbGYuY29va2llcy5nZXQoJ3VzZXJfaWQnKTtcblx0XHQvLyBiZWNhdXNlIHRoaXMgaXMgYSBzaGFyZWQgc3RhdGUgYXBwbGljYXRpb24sIHRoZSBzeXN0ZW0gaXMgcmVzcG9uc2libGUgZm9yXG5cdFx0Ly8gYnJvYWRjYXN0aW5nIHBhdGggY2hhbmdlcy5cbiAgICB0aGlzLmlvLnNvY2tldC5vbigncm91dGU6cmVkaXJlY3QnLCBmdW5jdGlvbihyb3V0ZTogYW55KSB7XG4gICAgICBzZWxmLnJlZGlyZWN0KHJvdXRlKTtcbiAgICB9KTtcblx0XHR0aGlzLmlvLnNvY2tldC5vbigndXNlcnM6dXNlckFkZGVkJywgZnVuY3Rpb24odXNlcjogYW55KSB7XG4gICAgICBzZWxmLnVzZXJzLnB1c2godXNlcik7XG4gICAgfSk7XG5cdFx0aWYoIHVzZXJJZCApIHtcblx0XHRcdC8vIGlmIHdlIGtub3cgdGhlIHVzZXIsIHdlIG1ha2Ugc3VyZSBoZS9zaGUgc3RpbGwgZXhpc3RzIGluIHRoZSBzeXN0ZW0uXG5cdFx0XHRzZWxmLmlvLnNvY2tldC5lbWl0KCd1c2VyczpnZXRVc2VyJyxcblx0XHRcdFx0dXNlcklkLFxuXHRcdFx0XHRmdW5jdGlvbih1c2VyOiBhbnkpIHtcblx0XHRcdFx0XHRpZiggdXNlciAmJiB1c2VyLmlkICkge1xuXHRcdFx0XHRcdFx0c2VsZi5pZCA9IHVzZXIuaWQ7XG5cdFx0XHRcdFx0XHRzZWxmLm5hbWUgPSB1c2VyLm5hbWU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXJfdHlwZSA9IHVzZXIudXNlcl90eXBlO1xuXHRcdFx0XHRcdFx0c2VsZi5zZXNzaW9uX2lkID0gdXNlci5zZXNzaW9uX2lkO1xuXHRcdFx0XHRcdFx0c2VsZi5jb29raWVzLnB1dCgndXNlcl9pZCcsIHNlbGYuaWQudG9TdHJpbmcoKSwgdGhpcy5jb29raWVPcHRpb25zKTtcblx0XHRcdFx0XHRcdGNiKHVzZXIuc2Vzc2lvbl9pZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIC0tPiBubyBjdXJyZW50IHVzZXIgd2FzIGZvdW5kLlxuXHRcdFx0XHRcdFx0c2VsZi5jb29raWVzLnJlbW92ZUFsbCgpO1xuXHRcdFx0XHRcdFx0Y2IoZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLmdldEFwcENvbnRleHQoKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYihmYWxzZSk7XG5cdFx0XHRzZWxmLmdldEFwcENvbnRleHQoKTtcblx0XHR9XG5cdH1cblx0Z2V0QXBwQ29udGV4dCgpIHtcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCdhcHBDb250ZXh0OmdldFJvdXRlJywgdGhpcy5pZCk7XG5cdH1cblx0Z2V0VXNlcnMoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuaW8uc29ja2V0LmVtaXQoJ3VzZXJzOmdldFVzZXJzJywgZnVuY3Rpb24odXNlcnM6IGFueSkge1xuXHRcdFx0c2VsZi51c2VycyA9IHVzZXJzO1xuXHRcdH0pO1xuXHR9XG5cdHNldFNlc3Npb25JZChzZXNzaW9uSWQ6IG51bWJlcikge1xuXHRcdHRoaXMuc2Vzc2lvbl9pZCA9IHNlc3Npb25JZDtcblx0fVxuXHRzZXRVc2VyVHlwZSh1c2VyVHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy51c2VyX3R5cGUgPSB1c2VyVHlwZTtcblx0fVxuXHRzZXRVc2VyTmFtZSgpIHtcblx0XHRpZiggdGhpcy5uYW1lLnRyaW0oKSA9PT0gJycgfHwgdGhpcy5uYW1lLnRyaW0oKS5sZW5ndGggPCAyICkge1xuXHRcdFx0dGhpcy5lcnJvciA9ICdQbGVhc2UgdGVsbCB5b3VyIHBhcnR5Z29lcnMgd2hvIHlvdSBhcmUhJztcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHNhdmVVc2VyKGNiOiBGdW5jdGlvbikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCd1c2VyczpjcmVhdGVVc2VyJywge1xuXHRcdFx0bmFtZTogc2VsZi5uYW1lLFxuXHRcdFx0dXNlcl90eXBlOiBzZWxmLnVzZXJfdHlwZSxcblx0XHRcdHNlc3Npb25faWQ6IHNlbGYuc2Vzc2lvbl9pZFxuXHRcdH0sIGZ1bmN0aW9uKHJlczogYW55KSB7XG5cdFx0XHRzZWxmLmlkID0gcmVzLmluc2VydElkO1xuXHRcdFx0c2VsZi5jb29raWVzLnB1dCgndXNlcl9pZCcsIHNlbGYuaWQudG9TdHJpbmcoKSwgdGhpcy5jb29raWVPcHRpb25zKTtcblx0XHRcdGNiKCk7XG5cdFx0fSk7XG5cdH1cblx0cmVkaXJlY3Qocm91dGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKHJvdXRlKTtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0aWYoIHNlbGYucm91dGVyLnVybCAhPT0gcm91dGUgJiYgWycvYmVlci1tYW5pZmVzdCcsJy9iZWVyLWVkaXRvcicsJy9zdGFydC1zZXNzaW9uJ10uaW5kZXhPZihzZWxmLnJvdXRlci51cmwpID09PSAtMSApIHtcblx0XHRcdGNvbnNvbGUubG9nKCdyZWRpcmVjdGVkJyk7XG5cdFx0XHRzZWxmLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJvdXRlKTtcblx0XHRcdC8vLmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1cbiAgfVxuXHRnZXRTdW1tYXJ5KCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRjb25zb2xlLmxvZygnZ2V0dGluZ1N1bW1hcnknKTtcblx0XHRzZWxmLmlvLnNvY2tldC5lbWl0KCdub3RlczpnZXRTdW1tYXJ5JywgdGhpcy5pZCwgZnVuY3Rpb24oc3VtbWFyeTogYW55KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhzdW1tYXJ5KTtcblx0XHRcdHNlbGYuc3VtbWFyeSA9IHN1bW1hcnk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
