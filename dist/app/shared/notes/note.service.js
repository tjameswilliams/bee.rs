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
var Observable_1 = require('rxjs/Observable');
var NoteService = (function () {
    function NoteService(io) {
        this.io = io;
        this.initialized = new core_1.EventEmitter();
        this.ratings = false;
    }
    NoteService.prototype.init = function (beer_id, user_id) {
        var _this = this;
        this.io.socket.emit('notes:getNote', {
            user_id: user_id,
            beer_id: beer_id
        }, function (note) {
            if (note.id) {
                _this.note = new note_1.Note(note);
            }
            else {
                _this.note = new note_1.Note();
                _this.note.setBeerId(beer_id);
                _this.note.setUserId(user_id);
                _this.note.beer_guess_options = note.beer_guess_options;
            }
        });
        this.io.socket.on('notes:ratingAdded', function (rating) {
            _this.updateRating(rating);
        });
    };
    NoteService.prototype.save = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('notes:save', _this.note, function () {
                obs.next();
            });
        });
    };
    NoteService.prototype.getRatings = function () {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            _this.io.socket.emit('notes:getRatings', _this.note.beer_id, function (ratings) {
                _this.ratings = {};
                for (var i = 0; i < ratings.length; i++) {
                    _this.ratings[ratings[i].id] = ratings[i];
                }
                obs.next();
            });
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
