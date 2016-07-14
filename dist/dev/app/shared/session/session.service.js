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
var socket_service_1 = require('./../socket/socket.service');
var SessionService = (function () {
    function SessionService(io) {
        this.io = io;
        this.initialized = new core_1.EventEmitter();
    }
    SessionService.prototype.init = function (cb) {
        var self = this;
        this.io.socket.emit('sessions:getOpenSession', function (session) {
            self.id = session.id;
            self.name = session.session_name;
            self.initialized.next(session.id);
            if (cb) {
                cb();
            }
        });
        this.io.socket.on('sessions:broadcastStatus', function (status) {
            self.status = status;
        });
    };
    SessionService.prototype.setName = function () {
        var self = this;
        if (self.name.trim() === '' || self.name.length < 1) {
            self.error = 'Please supply a name for this session!';
        }
        else {
            self.io.socket.emit('sessions:createSession', { name: self.name }, function (res) {
                self.id = res.id;
            });
        }
    };
    SessionService.prototype.advanceSession = function (beer_id, cb) {
        this.io.socket.emit('sessions:advanceSession', {
            beer_id: beer_id,
            session_id: this.id
        }, function (res) {
            cb(res);
        });
    };
    SessionService.prototype.getSessionStatus = function () {
        var self = this;
        if (!self.id) {
            self.init(function () {
                self.getSessionStatus();
            });
        }
        else {
            self.io.socket.emit('sessions:sessionStatus', self.id, function (status) {
                self.status = status;
            });
        }
    };
    SessionService.prototype.getLeaderBoard = function (cb) {
        var self = this;
        if (!self.id) {
            self.init(function () {
                self.getLeaderBoard(cb);
            });
        }
        else {
            self.io.socket.emit('sessions:getLeaderBoard', self.id, function (leaderboard) {
                cb(leaderboard);
            });
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SessionService.prototype, "initialized", void 0);
    SessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSwrQkFBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUczRDtJQU1DLHdCQUNTLEVBQWlCO1FBQWpCLE9BQUUsR0FBRixFQUFFLENBQWU7UUFOaEIsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVMzQyxDQUFDO0lBQ0QsNkJBQUksR0FBSixVQUFLLEVBQU87UUFDWCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFVBQVMsT0FBWTtZQUNuRSxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUEsQ0FBRSxFQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNULEVBQUUsRUFBRSxDQUFDO1lBQ04sQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLFVBQVMsTUFBVztZQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyx3Q0FBd0MsQ0FBQztRQUN2RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxFQUFDLFVBQUMsR0FBUTtnQkFDdEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsT0FBWSxFQUFFLEVBQVk7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQzlDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNuQixFQUFFLFVBQVMsR0FBUTtZQUNuQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCx5Q0FBZ0IsR0FBaEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFBLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFTLE1BQVc7Z0JBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsRUFBWTtRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFBLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVMsV0FBZ0I7Z0JBQ2hGLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBakVEO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQUZWO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFvRWIscUJBQUM7QUFBRCxDQW5FQSxBQW1FQyxJQUFBO0FBbkVZLHNCQUFjLGlCQW1FMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLy4uL3NvY2tldC9zb2NrZXQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XG5cdEBPdXRwdXQoKSBpbml0aWFsaXplZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0aWQ6IG51bWJlcjtcblx0bmFtZTogc3RyaW5nO1xuXHRlcnJvcjogc3RyaW5nO1xuXHRzdGF0dXM6IGFueTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbzogU29ja2V0U2VydmljZVxuXHQpIHtcblxuXHR9XG5cdGluaXQoY2I6IGFueSkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCdzZXNzaW9uczpnZXRPcGVuU2Vzc2lvbicsIGZ1bmN0aW9uKHNlc3Npb246IGFueSkge1xuXHRcdFx0c2VsZi5pZCA9IHNlc3Npb24uaWQ7XG5cdFx0XHRzZWxmLm5hbWUgPSBzZXNzaW9uLnNlc3Npb25fbmFtZTtcblx0XHRcdHNlbGYuaW5pdGlhbGl6ZWQubmV4dChzZXNzaW9uLmlkKTtcblx0XHRcdGlmKCBjYiApIHtcblx0XHRcdFx0Y2IoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmlvLnNvY2tldC5vbignc2Vzc2lvbnM6YnJvYWRjYXN0U3RhdHVzJywgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcblx0XHRcdHNlbGYuc3RhdHVzID0gc3RhdHVzO1xuXHRcdH0pO1xuXHR9XG5cdHNldE5hbWUoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdGlmKCBzZWxmLm5hbWUudHJpbSgpID09PSAnJyB8fCBzZWxmLm5hbWUubGVuZ3RoIDwgMSkge1xuXHRcdFx0c2VsZi5lcnJvciA9ICdQbGVhc2Ugc3VwcGx5IGEgbmFtZSBmb3IgdGhpcyBzZXNzaW9uISc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuaW8uc29ja2V0LmVtaXQoJ3Nlc3Npb25zOmNyZWF0ZVNlc3Npb24nLHtuYW1lOnNlbGYubmFtZX0sKHJlczogYW55KSA9PiB7XG5cdFx0XHRcdHNlbGYuaWQgPSByZXMuaWQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0YWR2YW5jZVNlc3Npb24oYmVlcl9pZDogYW55LCBjYjogRnVuY3Rpb24pIHtcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCdzZXNzaW9uczphZHZhbmNlU2Vzc2lvbicsIHtcblx0XHRcdGJlZXJfaWQ6IGJlZXJfaWQsXG5cdFx0XHRzZXNzaW9uX2lkOiB0aGlzLmlkXG5cdFx0fSwgZnVuY3Rpb24ocmVzOiBhbnkpIHtcblx0XHRcdGNiKHJlcyk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0U2Vzc2lvblN0YXR1cygpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0aWYoICFzZWxmLmlkICkge1xuXHRcdFx0c2VsZi5pbml0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmdldFNlc3Npb25TdGF0dXMoKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWxmLmlvLnNvY2tldC5lbWl0KCdzZXNzaW9uczpzZXNzaW9uU3RhdHVzJywgc2VsZi5pZCwgZnVuY3Rpb24oc3RhdHVzOiBhbnkpIHtcblx0XHRcdFx0c2VsZi5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Z2V0TGVhZGVyQm9hcmQoY2I6IEZ1bmN0aW9uKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdGlmKCAhc2VsZi5pZCApIHtcblx0XHRcdHNlbGYuaW5pdChmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5nZXRMZWFkZXJCb2FyZChjYik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgnc2Vzc2lvbnM6Z2V0TGVhZGVyQm9hcmQnLCBzZWxmLmlkLCBmdW5jdGlvbihsZWFkZXJib2FyZDogYW55KSB7XG5cdFx0XHRcdGNiKGxlYWRlcmJvYXJkKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIl19
