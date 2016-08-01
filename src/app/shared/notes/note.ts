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
	details: BeerDetails;
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
			this.details = new BeerDetails(note.details);
		} else {
			this.details = new BeerDetails(false);
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

class BeerDetails {
	colorOptions: Array<any> = [
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
	color: string = '#f7d281';
	clarity: string;
	constructor(details: any) {
		if( details ) {
			this.color = details.color;
			this.clarity = details.clarity;
		}
	}
}
