export class Note {
	id: number;
	beer_id: number;
	beer_guess: number= 0;
	created_at: Date= new Date();
	rating: number = 0;
	notes: string;
	beer_guess_options: any;
	guessed_correct: number;
	user_id: number;
	session_open: number;
	error: string;
	constructor(note: any= false) {
		if(note) {
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
	setGuess(beer_guess: number) {
		this.beer_guess = beer_guess;
	}
	setRating(rating: number) {
		this.rating = rating;
	}
	setUserId(user_id: number) {
		this.user_id = user_id;
	}
	setBeerId(beer_id: number) {
		this.beer_id = beer_id;
	}
}
