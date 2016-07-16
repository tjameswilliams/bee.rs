import { Injectable, EventEmitter, Output }    from '@angular/core';
import { SocketService } from './../socket/socket.service';
import { Note } from './note';

@Injectable()
export class NoteService {
	@Output() initialized = new EventEmitter();
	note: Note;
	ratings: any= false;
	constructor(
		private io: SocketService
	) {

	}
	init(beer_id: number, user_id: number) {
		var self = this;
		self.io.socket.emit('notes:getNote', {
			user_id: user_id,
			beer_id: beer_id
		}, function(note: any) {
			if( note.id ) {
				self.note = new Note(note);
			} else {
				self.note = new Note();
				self.note.setBeerId(beer_id);
				self.note.setUserId(user_id);
				self.note.beer_guess_options = note.beer_guess_options;
			}
			console.log(self.note);
		});
		self.io.socket.on('notes:ratingAdded', (rating: any) => {
			self.updateRating(rating);
		});
	}
	save(cb: Function) {
		this.io.socket.emit('notes:save', this.note, function() {
			cb();
		});
	}
	getRatings() {
		var self = this;
		self.io.socket.emit('notes:getRatings', this.note.beer_id, function(ratings:any) {
			self.ratings = {};
			for(let i=0; i<ratings.length; i++) {
				self.ratings[ratings[i].id] = ratings[i];
			}
		});
	}
	updateRating(rating: any) {
		this.ratings = this.ratings ? this.ratings : {};
		this.ratings[rating.id] = rating;
	}
	ratingList() {
		let ratings:any = [],
			ratingKeys = Object.keys(this.ratings);
		for(let i=0; i<ratingKeys.length; i++) {
			ratings.push(this.ratings[ratingKeys[i]]);
		}
		return ratings;
	}
}
