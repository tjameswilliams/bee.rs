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
var note_1 = require('./note');
var NoteService = (function () {
    function NoteService(io) {
        this.io = io;
        this.initialized = new core_1.EventEmitter();
        this.ratings = false;
    }
    NoteService.prototype.init = function (beer_id, user_id) {
        var self = this;
        self.io.socket.emit('notes:getNote', {
            user_id: user_id,
            beer_id: beer_id
        }, function (note) {
            if (note.id) {
                self.note = new note_1.Note(note);
            }
            else {
                self.note = new note_1.Note();
                self.note.setBeerId(beer_id);
                self.note.setUserId(user_id);
                self.note.beer_guess_options = note.beer_guess_options;
            }
            console.log(self.note);
        });
        self.io.socket.on('notes:ratingAdded', function (rating) {
            self.updateRating(rating);
        });
    };
    NoteService.prototype.save = function (cb) {
        this.io.socket.emit('notes:save', this.note, function () {
            cb();
        });
    };
    NoteService.prototype.getRatings = function () {
        var self = this;
        self.io.socket.emit('notes:getRatings', this.note.beer_id, function (ratings) {
            self.ratings = {};
            for (var i = 0; i < ratings.length; i++) {
                self.ratings[ratings[i].id] = ratings[i];
            }
        });
    };
    NoteService.prototype.updateRating = function (rating) {
        this.ratings = this.ratings ? this.ratings : {};
        this.ratings[rating.id] = rating;
    };
    NoteService.prototype.ratingList = function () {
        var ratings = [], ratingKeys = Object.keys(this.ratings);
        for (var i = 0; i < ratingKeys.length; i++) {
            ratings.push(this.ratings[ratingKeys[i]]);
        }
        return ratings;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NoteService.prototype, "initialized", void 0);
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_service_1.SocketService])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbm90ZXMvbm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFDcEUsK0JBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBRzlCO0lBSUMscUJBQ1MsRUFBaUI7UUFBakIsT0FBRSxHQUFGLEVBQUUsQ0FBZTtRQUpoQixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRTNDLFlBQU8sR0FBTyxLQUFLLENBQUM7SUFLcEIsQ0FBQztJQUNELDBCQUFJLEdBQUosVUFBSyxPQUFlLEVBQUUsT0FBZTtRQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztTQUNoQixFQUFFLFVBQVMsSUFBUztZQUNwQixFQUFFLENBQUEsQ0FBRSxJQUFJLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDeEQsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQUMsTUFBVztZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELDBCQUFJLEdBQUosVUFBSyxFQUFZO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM1QyxFQUFFLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELGdDQUFVLEdBQVY7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVMsT0FBVztZQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsTUFBVztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0MsSUFBSSxPQUFPLEdBQU8sRUFBRSxFQUNuQixVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQXJERDtRQUFDLGFBQU0sRUFBRTs7b0RBQUE7SUFGVjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBd0RiLGtCQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQTtBQXZEWSxtQkFBVyxjQXVEdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL25vdGVzL25vdGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zb2NrZXQvc29ja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4vbm90ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSB7XG5cdEBPdXRwdXQoKSBpbml0aWFsaXplZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0bm90ZTogTm90ZTtcblx0cmF0aW5nczogYW55PSBmYWxzZTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbzogU29ja2V0U2VydmljZVxuXHQpIHtcblxuXHR9XG5cdGluaXQoYmVlcl9pZDogbnVtYmVyLCB1c2VyX2lkOiBudW1iZXIpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgnbm90ZXM6Z2V0Tm90ZScsIHtcblx0XHRcdHVzZXJfaWQ6IHVzZXJfaWQsXG5cdFx0XHRiZWVyX2lkOiBiZWVyX2lkXG5cdFx0fSwgZnVuY3Rpb24obm90ZTogYW55KSB7XG5cdFx0XHRpZiggbm90ZS5pZCApIHtcblx0XHRcdFx0c2VsZi5ub3RlID0gbmV3IE5vdGUobm90ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLm5vdGUgPSBuZXcgTm90ZSgpO1xuXHRcdFx0XHRzZWxmLm5vdGUuc2V0QmVlcklkKGJlZXJfaWQpO1xuXHRcdFx0XHRzZWxmLm5vdGUuc2V0VXNlcklkKHVzZXJfaWQpO1xuXHRcdFx0XHRzZWxmLm5vdGUuYmVlcl9ndWVzc19vcHRpb25zID0gbm90ZS5iZWVyX2d1ZXNzX29wdGlvbnM7XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhzZWxmLm5vdGUpO1xuXHRcdH0pO1xuXHRcdHNlbGYuaW8uc29ja2V0Lm9uKCdub3RlczpyYXRpbmdBZGRlZCcsIChyYXRpbmc6IGFueSkgPT4ge1xuXHRcdFx0c2VsZi51cGRhdGVSYXRpbmcocmF0aW5nKTtcblx0XHR9KTtcblx0fVxuXHRzYXZlKGNiOiBGdW5jdGlvbikge1xuXHRcdHRoaXMuaW8uc29ja2V0LmVtaXQoJ25vdGVzOnNhdmUnLCB0aGlzLm5vdGUsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2IoKTtcblx0XHR9KTtcblx0fVxuXHRnZXRSYXRpbmdzKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRzZWxmLmlvLnNvY2tldC5lbWl0KCdub3RlczpnZXRSYXRpbmdzJywgdGhpcy5ub3RlLmJlZXJfaWQsIGZ1bmN0aW9uKHJhdGluZ3M6YW55KSB7XG5cdFx0XHRzZWxmLnJhdGluZ3MgPSB7fTtcblx0XHRcdGZvcihsZXQgaT0wOyBpPHJhdGluZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2VsZi5yYXRpbmdzW3JhdGluZ3NbaV0uaWRdID0gcmF0aW5nc1tpXTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHR1cGRhdGVSYXRpbmcocmF0aW5nOiBhbnkpIHtcblx0XHR0aGlzLnJhdGluZ3MgPSB0aGlzLnJhdGluZ3MgPyB0aGlzLnJhdGluZ3MgOiB7fTtcblx0XHR0aGlzLnJhdGluZ3NbcmF0aW5nLmlkXSA9IHJhdGluZztcblx0fVxuXHRyYXRpbmdMaXN0KCkge1xuXHRcdGxldCByYXRpbmdzOmFueSA9IFtdLFxuXHRcdFx0cmF0aW5nS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucmF0aW5ncyk7XG5cdFx0Zm9yKGxldCBpPTA7IGk8cmF0aW5nS2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmF0aW5ncy5wdXNoKHRoaXMucmF0aW5nc1tyYXRpbmdLZXlzW2ldXSk7XG5cdFx0fVxuXHRcdHJldHVybiByYXRpbmdzO1xuXHR9XG59XG4iXX0=
