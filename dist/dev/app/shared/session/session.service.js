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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSwrQkFBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUczRDtJQU1DLHdCQUNTLEVBQWlCO1FBQWpCLE9BQUUsR0FBRixFQUFFLENBQWU7UUFOaEIsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVMzQyxDQUFDO0lBQ0QsNkJBQUksR0FBSixVQUFLLEVBQU87UUFDWCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFVBQVMsT0FBWTtZQUNuRSxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUEsQ0FBRSxFQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNULEVBQUUsRUFBRSxDQUFDO1lBQ04sQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLDBCQUEwQixFQUFFLFVBQVMsTUFBVztZQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyx3Q0FBd0MsQ0FBQztRQUN2RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxFQUFDLFVBQUMsR0FBUTtnQkFDdEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsT0FBWSxFQUFFLEVBQVk7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQzlDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNuQixFQUFFLFVBQVMsR0FBUTtZQUNuQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCx5Q0FBZ0IsR0FBaEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFBLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFTLE1BQVc7Z0JBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFyREQ7UUFBQyxhQUFNLEVBQUU7O3VEQUFBO0lBRlY7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXdEYixxQkFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksc0JBQWMsaUJBdUQxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4vLi4vc29ja2V0L3NvY2tldC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHtcblx0QE91dHB1dCgpIGluaXRpYWxpemVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRpZDogbnVtYmVyO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGVycm9yOiBzdHJpbmc7XG5cdHN0YXR1czogYW55O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGlvOiBTb2NrZXRTZXJ2aWNlXG5cdCkge1xuXG5cdH1cblx0aW5pdChjYjogYW55KSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuaW8uc29ja2V0LmVtaXQoJ3Nlc3Npb25zOmdldE9wZW5TZXNzaW9uJywgZnVuY3Rpb24oc2Vzc2lvbjogYW55KSB7XG5cdFx0XHRzZWxmLmlkID0gc2Vzc2lvbi5pZDtcblx0XHRcdHNlbGYubmFtZSA9IHNlc3Npb24uc2Vzc2lvbl9uYW1lO1xuXHRcdFx0c2VsZi5pbml0aWFsaXplZC5uZXh0KHNlc3Npb24uaWQpO1xuXHRcdFx0aWYoIGNiICkge1xuXHRcdFx0XHRjYigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuaW8uc29ja2V0Lm9uKCdzZXNzaW9uczpicm9hZGNhc3RTdGF0dXMnLCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xuXHRcdFx0c2VsZi5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0fSk7XG5cdH1cblx0c2V0TmFtZSgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0aWYoIHNlbGYubmFtZS50cmltKCkgPT09ICcnIHx8IHNlbGYubmFtZS5sZW5ndGggPCAxKSB7XG5cdFx0XHRzZWxmLmVycm9yID0gJ1BsZWFzZSBzdXBwbHkgYSBuYW1lIGZvciB0aGlzIHNlc3Npb24hJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgnc2Vzc2lvbnM6Y3JlYXRlU2Vzc2lvbicse25hbWU6c2VsZi5uYW1lfSwocmVzOiBhbnkpID0+IHtcblx0XHRcdFx0c2VsZi5pZCA9IHJlcy5pZDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRhZHZhbmNlU2Vzc2lvbihiZWVyX2lkOiBhbnksIGNiOiBGdW5jdGlvbikge1xuXHRcdHRoaXMuaW8uc29ja2V0LmVtaXQoJ3Nlc3Npb25zOmFkdmFuY2VTZXNzaW9uJywge1xuXHRcdFx0YmVlcl9pZDogYmVlcl9pZCxcblx0XHRcdHNlc3Npb25faWQ6IHRoaXMuaWRcblx0XHR9LCBmdW5jdGlvbihyZXM6IGFueSkge1xuXHRcdFx0Y2IocmVzKTtcblx0XHR9KTtcblx0fVxuXHRnZXRTZXNzaW9uU3RhdHVzKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRpZiggIXNlbGYuaWQgKSB7XG5cdFx0XHRzZWxmLmluaXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuZ2V0U2Vzc2lvblN0YXR1cygpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuaW8uc29ja2V0LmVtaXQoJ3Nlc3Npb25zOnNlc3Npb25TdGF0dXMnLCBzZWxmLmlkLCBmdW5jdGlvbihzdGF0dXM6IGFueSkge1xuXHRcdFx0XHRzZWxmLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIl19
