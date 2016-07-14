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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbm90ZXMvbm90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFZQyxjQUFZLElBQWdCO1FBQWhCLG9CQUFnQixHQUFoQixZQUFnQjtRQVQ1QixlQUFVLEdBQVUsQ0FBQyxDQUFDO1FBQ3RCLGVBQVUsR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFRbEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztZQUNqRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxDQUFDO0lBQ0YsQ0FBQztJQUNELHVCQUFRLEdBQVIsVUFBUyxVQUFrQjtRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsd0JBQVMsR0FBVCxVQUFVLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNELHdCQUFTLEdBQVQsVUFBVSxPQUFlO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDRCx3QkFBUyxHQUFULFVBQVUsT0FBZTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0YsV0FBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksWUFBSSxPQXNDaEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL25vdGVzL25vdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm90ZSB7XG5cdGlkOiBudW1iZXI7XG5cdGJlZXJfaWQ6IG51bWJlcjtcblx0YmVlcl9ndWVzczogbnVtYmVyPSAwO1xuXHRjcmVhdGVkX2F0OiBEYXRlPSBuZXcgRGF0ZSgpO1xuXHRyYXRpbmc6IG51bWJlciA9IDA7XG5cdG5vdGVzOiBzdHJpbmc7XG5cdGJlZXJfZ3Vlc3Nfb3B0aW9uczogYW55O1xuXHRndWVzc2VkX2NvcnJlY3Q6IG51bWJlcjtcblx0dXNlcl9pZDogbnVtYmVyO1xuXHRzZXNzaW9uX29wZW46IG51bWJlcjtcblx0ZXJyb3I6IHN0cmluZztcblx0Y29uc3RydWN0b3Iobm90ZTogYW55PSBmYWxzZSkge1xuXHRcdGlmKG5vdGUpIHtcblx0XHRcdHRoaXMuaWQgPSBub3RlLmlkO1xuXHRcdFx0dGhpcy5iZWVyX2lkID0gbm90ZS5iZWVyX2lkO1xuXHRcdFx0dGhpcy5iZWVyX2d1ZXNzID0gbm90ZS5iZWVyX2d1ZXNzO1xuXHRcdFx0dGhpcy5ub3RlcyA9IG5vdGUubm90ZXM7XG5cdFx0XHR0aGlzLnJhdGluZyA9IG5vdGUucmF0aW5nO1xuXHRcdFx0dGhpcy5jcmVhdGVkX2F0ID0gbm90ZS5jcmVhdGVkX2F0O1xuXHRcdFx0dGhpcy5iZWVyX2d1ZXNzX29wdGlvbnMgPSBub3RlLmJlZXJfZ3Vlc3Nfb3B0aW9ucyA/IG5vdGUuYmVlcl9ndWVzc19vcHRpb25zIDogW107XG5cdFx0XHR0aGlzLmd1ZXNzZWRfY29ycmVjdCA9IG5vdGUuZ3Vlc3NlZF9jb3JyZWN0ID8gbm90ZS5ndWVzc2VkX2NvcnJlY3QgOiAwO1xuXHRcdFx0dGhpcy51c2VyX2lkID0gbm90ZS51c2VyX2lkO1xuXHRcdFx0dGhpcy5zZXNzaW9uX29wZW4gPSBub3RlLnNlc3Npb25fb3Blbjtcblx0XHR9XG5cdH1cblx0c2V0R3Vlc3MoYmVlcl9ndWVzczogbnVtYmVyKSB7XG5cdFx0dGhpcy5iZWVyX2d1ZXNzID0gYmVlcl9ndWVzcztcblx0fVxuXHRzZXRSYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcblx0XHR0aGlzLnJhdGluZyA9IHJhdGluZztcblx0fVxuXHRzZXRVc2VySWQodXNlcl9pZDogbnVtYmVyKSB7XG5cdFx0dGhpcy51c2VyX2lkID0gdXNlcl9pZDtcblx0fVxuXHRzZXRCZWVySWQoYmVlcl9pZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5iZWVyX2lkID0gYmVlcl9pZDtcblx0fVxufVxuIl19
