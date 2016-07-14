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
            self.ratings = self.ratings ? self.ratings : {};
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbm90ZXMvbm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFDcEUsK0JBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBRzlCO0lBSUMscUJBQ1MsRUFBaUI7UUFBakIsT0FBRSxHQUFGLEVBQUUsQ0FBZTtRQUpoQixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRTNDLFlBQU8sR0FBTyxLQUFLLENBQUM7SUFLcEIsQ0FBQztJQUNELDBCQUFJLEdBQUosVUFBSyxPQUFlLEVBQUUsT0FBZTtRQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztTQUNoQixFQUFFLFVBQVMsSUFBUztZQUNwQixFQUFFLENBQUEsQ0FBRSxJQUFJLENBQUMsRUFBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDeEQsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQUMsTUFBVztZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELDBCQUFJLEdBQUosVUFBSyxFQUFZO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM1QyxFQUFFLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELGdDQUFVLEdBQVY7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVMsT0FBVztZQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDaEQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Qsa0NBQVksR0FBWixVQUFhLE1BQVc7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNDLElBQUksT0FBTyxHQUFPLEVBQUUsRUFDbkIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFyREQ7UUFBQyxhQUFNLEVBQUU7O29EQUFBO0lBRlY7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXdEYixrQkFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFksbUJBQVcsY0F1RHZCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9ub3Rlcy9ub3RlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gJy4vLi4vc29ja2V0L3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGUgfSBmcm9tICcuL25vdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90ZVNlcnZpY2Uge1xuXHRAT3V0cHV0KCkgaW5pdGlhbGl6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdG5vdGU6IE5vdGU7XG5cdHJhdGluZ3M6IGFueT0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaW86IFNvY2tldFNlcnZpY2Vcblx0KSB7XG5cblx0fVxuXHRpbml0KGJlZXJfaWQ6IG51bWJlciwgdXNlcl9pZDogbnVtYmVyKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNlbGYuaW8uc29ja2V0LmVtaXQoJ25vdGVzOmdldE5vdGUnLCB7XG5cdFx0XHR1c2VyX2lkOiB1c2VyX2lkLFxuXHRcdFx0YmVlcl9pZDogYmVlcl9pZFxuXHRcdH0sIGZ1bmN0aW9uKG5vdGU6IGFueSkge1xuXHRcdFx0aWYoIG5vdGUuaWQgKSB7XG5cdFx0XHRcdHNlbGYubm90ZSA9IG5ldyBOb3RlKG5vdGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5ub3RlID0gbmV3IE5vdGUoKTtcblx0XHRcdFx0c2VsZi5ub3RlLnNldEJlZXJJZChiZWVyX2lkKTtcblx0XHRcdFx0c2VsZi5ub3RlLnNldFVzZXJJZCh1c2VyX2lkKTtcblx0XHRcdFx0c2VsZi5ub3RlLmJlZXJfZ3Vlc3Nfb3B0aW9ucyA9IG5vdGUuYmVlcl9ndWVzc19vcHRpb25zO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coc2VsZi5ub3RlKTtcblx0XHR9KTtcblx0XHRzZWxmLmlvLnNvY2tldC5vbignbm90ZXM6cmF0aW5nQWRkZWQnLCAocmF0aW5nOiBhbnkpID0+IHtcblx0XHRcdHNlbGYudXBkYXRlUmF0aW5nKHJhdGluZyk7XG5cdFx0fSk7XG5cdH1cblx0c2F2ZShjYjogRnVuY3Rpb24pIHtcblx0XHR0aGlzLmlvLnNvY2tldC5lbWl0KCdub3RlczpzYXZlJywgdGhpcy5ub3RlLCBmdW5jdGlvbigpIHtcblx0XHRcdGNiKCk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0UmF0aW5ncygpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2VsZi5pby5zb2NrZXQuZW1pdCgnbm90ZXM6Z2V0UmF0aW5ncycsIHRoaXMubm90ZS5iZWVyX2lkLCBmdW5jdGlvbihyYXRpbmdzOmFueSkge1xuXHRcdFx0c2VsZi5yYXRpbmdzID0gc2VsZi5yYXRpbmdzID8gc2VsZi5yYXRpbmdzIDoge307XG5cdFx0XHRmb3IobGV0IGk9MDsgaTxyYXRpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHNlbGYucmF0aW5nc1tyYXRpbmdzW2ldLmlkXSA9IHJhdGluZ3NbaV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0dXBkYXRlUmF0aW5nKHJhdGluZzogYW55KSB7XG5cdFx0dGhpcy5yYXRpbmdzID0gdGhpcy5yYXRpbmdzID8gdGhpcy5yYXRpbmdzIDoge307XG5cdFx0dGhpcy5yYXRpbmdzW3JhdGluZy5pZF0gPSByYXRpbmc7XG5cdH1cblx0cmF0aW5nTGlzdCgpIHtcblx0XHRsZXQgcmF0aW5nczphbnkgPSBbXSxcblx0XHRcdHJhdGluZ0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnJhdGluZ3MpO1xuXHRcdGZvcihsZXQgaT0wOyBpPHJhdGluZ0tleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJhdGluZ3MucHVzaCh0aGlzLnJhdGluZ3NbcmF0aW5nS2V5c1tpXV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmF0aW5ncztcblx0fVxufVxuIl19
