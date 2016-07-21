import { Injectable, EventEmitter, Output }    from '@angular/core';
import { SocketService } from './../socket/socket.service';
import { Note } from './note';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoteService {
	@Output() initialized = new EventEmitter();
	note: Note;
	ratings: any= false;
	constructor(
		private io: SocketService
	) { }
	init(beer_id: number, user_id: number): void {
		this.io.socket.emit('notes:getNote', {
			user_id: user_id,
			beer_id: beer_id
		}, (note: any) => {
			if( note.id ) {
				this.note = new Note(note);
			} else {
				this.note = new Note();
				this.note.setBeerId(beer_id);
				this.note.setUserId(user_id);
				this.note.beer_guess_options = note.beer_guess_options;
			}
		});
		this.io.socket.on('notes:ratingAdded', (rating: any) => {
			this.updateRating(rating);
		});
	}
	save(): Observable<any> {
		return new Observable((obs:any) => {
			this.io.socket.emit('notes:save', this.note, () => {
				obs.next();
			});
		});
	}
	getRatings(): Observable<any> {
		return new Observable( (obs: any) => {
			this.io.socket.emit('notes:getRatings', this.note.beer_id, (ratings:any) => {
				this.ratings = {};
				for(let i=0; i<ratings.length; i++) {
					this.ratings[ratings[i].id] = ratings[i];
				}
				obs.next();
			});
		});
	}
	updateRating(rating: any): void {
		this.ratings = this.ratings ? this.ratings : {};
		this.ratings[rating.id] = rating;
	}
	ratingList(): Array<any> {
		let ratings:any = [],
			ratingKeys = Object.keys(this.ratings);
		for(let i=0; i<ratingKeys.length; i++) {
			ratings.push(this.ratings[ratingKeys[i]]);
		}
		return ratings;
	}
}
