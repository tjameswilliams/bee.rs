import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../shared/user/user.service';
import { BeersService } from './../shared/beers/beers.service';
import { SessionService } from './../shared/session/session.service';
import { NoteService } from './../shared/notes/note.service';
import { Beer } from './../shared/beers/beer';
import { Autosize } from './../shared/directives/autosize';

@Component({
  moduleId: module.id,
  selector: 'sd-start-session',
  templateUrl: 'tastinground.component.html',
  styleUrls: ['session.component.css'],
	directives: [ROUTER_DIRECTIVES,Autosize],
  providers: [BeersService,NoteService]
})
export class TastingRoundComponent implements OnInit {
  sub: any;
  beer: Beer;
	ratingRange: any= [1,2,3,4,5];
	complete: boolean= false;
	constructor(
		private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private beers: BeersService,
    private session: SessionService,
		private notes: NoteService
	) {}
	ngOnInit(): void {
    var self = this;
    this.sub = this.route.params.subscribe(params => {
  		if( params['id'] ) {
  			let id = +params['id']; // (+) converts string 'id' to a number
				self.beers.getBeer(id, (beer: Beer) => {
					self.beer = beer;
					self.notes.init(beer.id,self.user.id);
				});
  		}
			self.session.getSessionStatus();
			self.complete = false;
  	});
  }
	setRating(rating: number): void {
		this.notes.note.setRating(rating);
	}
	isReady(): boolean {
		return Boolean(this.notes.note.rating && this.notes.note.notes && this.notes.note.notes.length > 0 && this.notes.note.beer_guess);
	}
	done(): void {
		var self = this;
		this.notes.save(function() {
			self.complete = true;
			self.notes.getRatings();
		});
	}
}
