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
            this.details = new BeerDetails(note.details);
        }
        else {
            this.details = new BeerDetails(false);
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
var BeerDetails = (function () {
    function BeerDetails(details) {
        this.colorOptions = [
            '#f7d281',
            '#ebaa32',
            '#dd8c00',
            '#ce7300',
            '#c05d00',
            '#b34c01',
            '#a63c00',
            '#9a3000',
            '#8f2400',
            '#841a00',
            '#7b1101',
            '#730800',
            '#6a0000',
            '#600300',
            '#5b0000',
            '#550000',
            '#500001',
            '#4a0001',
            '#440001',
            '#400000',
            '#3c0000',
            '#370000',
            '#330000',
            '#300000',
            '#2c0001',
            '#290000',
            '#260000',
            '#230000',
            '#220000',
            '#1e0000',
            '#1c0000',
            '#1a0001',
            '#180000',
            '#160100',
            '#140001',
            '#120000',
            '#100000',
            '#0e0000'
        ];
        this.color = '#f7d281';
        if (details) {
            this.color = details.color;
            this.clarity = details.clarity;
        }
    }
    return BeerDetails;
}());
