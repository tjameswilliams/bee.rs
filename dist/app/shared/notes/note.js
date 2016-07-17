"use strict";
var Note = (function () {
    function Note(note) {
        if (note === void 0) { note = false; }
        this.beer_guess = 0;
        this.created_at = new Date();
        this.rating = 0;
        if (note) {
            this.id = note.id;
            this.beer_id = note.beer_id;
            this.beer_guess = note.beer_guess;
            this.notes = note.notes;
            this.rating = note.rating;
            this.created_at = note.created_at;
            this.beer_guess_options = note.beer_guess_options ? note.beer_guess_options : [];
            this.guessed_correct = note.guessed_correct ? note.guessed_correct : 0;
            this.user_id = note.user_id;
            this.session_open = note.session_open;
        }
    }
    Note.prototype.setGuess = function (beer_guess) {
        this.beer_guess = beer_guess;
    };
    Note.prototype.setRating = function (rating) {
        this.rating = rating;
    };
    Note.prototype.setUserId = function (user_id) {
        this.user_id = user_id;
    };
    Note.prototype.setBeerId = function (beer_id) {
        this.beer_id = beer_id;
    };
    return Note;
}());
exports.Note = Note;
