import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../shared/user/user.service';
import { BeersService } from './../shared/beers/beers.service';
import { SessionService } from './../shared/session/session.service';
import { NoteService } from './../shared/notes/note.service';
import { Beer } from './../shared/beers/beer';
import { Autosize } from './../shared/directives/autosize';
import { BeerVisual } from './beervisual.component';

@Component({
  moduleId: module.id,
  selector: 'sd-start-session',
  templateUrl: 'tastinground.component.html',
  styleUrls: ['session.component.css'],
	directives: [ROUTER_DIRECTIVES,Autosize,BeerVisual],
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
    this.sub = this.route.params.subscribe(params => {
  		if( params['id'] ) {
  			let id = +params['id']; // (+) converts string 'id' to a number
				this.beers.getBeer(id).subscribe((beer: Beer) => {
					this.beer = beer;
					this.notes.init(beer.id,this.user.id);
					this.session.getSessionStatus().subscribe();
				});
  		}
			this.complete = false;
  	});
  }
	setRating(rating: number): void {
		this.notes.note.setRating(rating);
	}
	isReady(): boolean {
		return Boolean(this.notes.note.rating && this.notes.note.notes && this.notes.note.notes.length > 0 && this.notes.note.beer_guess);
	}
	selectColor(color: string): void {
		this.notes.note.details.color = color;
	}
	done(): void {
		this.notes.save().subscribe(() => {
			this.complete = true;
			this.notes.getRatings().subscribe();
		});
	}
}
