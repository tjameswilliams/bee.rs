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
