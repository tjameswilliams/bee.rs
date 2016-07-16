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
            if (session.id) {
                self.setSession(session);
            }
            else {
                self.initialized.next(false);
            }
            if (cb) {
                cb();
            }
        });
        this.io.socket.on('sessions:broadcastStatus', function (status) {
            setTimeout(function () {
                self.status = status;
            });
        });
        this.io.socket.on('sessions:setSession', function (session) {
            self.setSession(session);
        });
    };
    SessionService.prototype.setSession = function (session) {
        this.id = session.id;
        this.name = session.session_name;
        this.initialized.next(session.id);
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
            self.status = null;
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
    SessionService.prototype.closeSession = function (cb) {
        var self = this;
        self.io.socket.emit('sessions:closeSession', self.id, function () {
            cb();
        });
    };
    SessionService.prototype.getStartRoute = function (cb) {
        var self = this;
        self.io.socket.emit('sessions:startRoute', function (route) {
            cb(route);
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSwrQkFBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUczRDtJQU1DLHdCQUNTLEVBQWlCO1FBQWpCLE9BQUUsR0FBRixFQUFFLENBQWU7UUFOaEIsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQU92QyxDQUFDO0lBQ0wsNkJBQUksR0FBSixVQUFLLEVBQU87UUFDWCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFVBQVMsT0FBWTtZQUNuRSxFQUFFLENBQUEsQ0FBRSxPQUFPLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFFLEVBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsRUFBRSxFQUFFLENBQUM7WUFDTixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsVUFBUyxNQUFXO1lBQ2pFLFVBQVUsQ0FBQztnQkFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLFVBQVMsT0FBWTtZQUM3RCxJQUFJLENBQUMsVUFB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Q0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3JELEVBQUUsRUFBRSxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Qsc0NBQWEsR0FBYixVQUFjLEVBQVk7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxVQUFTLEtBQWE7WUFDaEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBeEZEO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQUZWO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUEyRmIscUJBQUM7QUFBRCxDQTFGQSxBQTBGQyxJQUFBO0FBMUZZLHNCQUFjLGlCQTBGMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UgfSBmcm9tICcuLy4uL3NvY2tldC9zb2NrZXQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XG5cdEBPdXRwdXQoKSBpbml0aWFsaXplZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0aWQ6IG51bWJlcjtcblx0bmFtZTogc3RyaW5nO1xuXHRlcnJvcjogc3RyaW5nO1xuXHRzdGF0dXM6IGFueTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbzogU29ja2V0U2VydmljZVxuXHQpIHsgfVxuXHRpbml0KGNiOiBhbnkpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5pby5zb2NrZXQuZW1pdCgnc2Vzc2lvbnM6Z2V0T3BlblNlc3Npb24nLCBmdW5jdGlvbihzZXNzaW9uOiBhbnkpIHtcblx0XHRcdGlmKCBzZXNzaW9uLmlkICkge1xuXHRcdFx0XHRzZWxmLnNldFNlc3Npb24oc2Vzc2lvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmluaXRpYWxpemVkLm5leHQoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYoIGNiICkge1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuaW8uc29ja2V0Lm9uKCdzZXNzaW9uczpicm9hZGNhc3RTdGF0dXMnLCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzZWxmLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHRoaXMuaW8uc29ja2V0Lm9uKCdzZXNzaW9uczpzZXRTZXNzaW9uJywgZnVuY3Rpb24oc2Vzc2lvbjogYW55KSB7XG5cdFx0XHRzZWxmLnNldFNlc3Npb24oc2Vzc2lvbik7XG5cdFx0fSk7XG5cdH1cblx0c2V0U2Vzc2lvbihzZXNzaW9uOiBhbnkpIHtcblx0XHR0aGlzLmlkID0gc2Vzc2lvbi5pZDtcblx0XHR0aGlzLm5hbWUgPSBzZXNzaW9uLnNlc3Npb25fbmFtZTtcblx0XHR0aGlzLmluaXRpYWxpemVkLm5leHQoc2Vzc2lvbi5pZCk7XG5cdH1cblx0c2V0TmFtZSgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0aWYoIHNlbGYubmFtZS50cmltKCkgPT09ICcnIHx8IHNlbGYubmFtZS5sZW5ndGggPCAxKSB7XG5cdFx0XHRzZWxmLmVycm9yID0gJ1BsZWFzZSBzdXBwbHkgYSBuYW1lIGZvciB0aGlzIHNlc3Npb24hJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgnc2Vzc2lvbnM6Y3JlYXRlU2Vzc2lvbicse25hbWU6c2VsZi5uYW1lfSwocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0c2VsZi5pZCA9IHJlcy5pZDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRhZHZhbmNlU2Vzc2lvbihiZWVyX2lkOiBhbnksIGNiOiBGdW5jdGlvbikge1xuXHRcdHRoaXMuaW8uc29ja2V0LmVtaXQoJ3Nlc3Npb25zOmFkdmFuY2VTZXNzaW9uJywge1xuXHRcdFx0YmVlcl9pZDogYmVlcl9pZCxcblx0XHRcdHNlc3Npb25faWQ6IHRoaXMuaWRcblx0XHR9LCBmdW5jdGlvbihyZXM6IGFueSkge1xuXHRcdFx0Y2IocmVzKTtcblx0XHR9KTtcblx0fVxuXHRnZXRTZXNzaW9uU3RhdHVzKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRpZiggIXNlbGYuaWQgKSB7XG5cdFx0XHRzZWxmLmluaXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuZ2V0U2Vzc2lvblN0YXR1cygpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuc3RhdHVzID0gbnVsbDtcblx0XHRcdHNlbGYuaW8uc29ja2V0LmVtaXQoJ3Nlc3Npb25zOnNlc3Npb25TdGF0dXMnLCBzZWxmLmlkLCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xuXHRcdFx0XHRzZWxmLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRnZXRMZWFkZXJCb2FyZChjYjogRnVuY3Rpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0aWYoICFzZWxmLmlkICkge1xuXHRcdFx0c2VsZi5pbml0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmdldExlYWRlckJvYXJkKGNiKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWxmLmlvLnNvY2tldC5lbWl0KCdzZXNzaW9uczpnZXRMZWFkZXJCb2FyZCcsIHNlbGYuaWQsIGZ1bmN0aW9uKGxlYWRlcmJvYXJkOiBhbnkpIHtcblx0XHRcdFx0Y2IobGVhZGVyYm9hcmQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGNsb3NlU2Vzc2lvbihjYjogRnVuY3Rpb24pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgnc2Vzc2lvbnM6Y2xvc2VTZXNzaW9uJywgc2VsZi5pZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRjYigpO1xuXHRcdH0pO1xuXHR9XG5cdGdldFN0YXJ0Um91dGUoY2I6IEZ1bmN0aW9uKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNlbGYuaW8uc29ja2V0LmVtaXQoJ3Nlc3Npb25zOnN0YXJ0Um91dGUnLCBmdW5jdGlvbihyb3V0ZTogc3RyaW5nKSB7XG5cdFx0XHRjYihyb3V0ZSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
