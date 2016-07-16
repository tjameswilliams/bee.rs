import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UserService } from './../shared/user/user.service';
import { BeersService } from './../shared/beers/beers.service';
import { SessionService } from './../shared/session/session.service';
import { NoteService } from './../shared/notes/note.service';
import { RibbonComponent } from './ribbon.component';

@Component({
  moduleId: module.id,
  selector: 'sd-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['summary.component.css'],
	directives: [ROUTER_DIRECTIVES,RibbonComponent],
  providers: [BeersService,NoteService]
})
export class SummaryComponent implements OnInit {
	leaderboard: any;
	ratingRange: any= [1,2,3,4,5];
	sessionClosed: boolean= false;
	constructor(
		private user: UserService,
    private router: Router,
    private beers: BeersService,
    private session: SessionService,
		private notes: NoteService
	) {}
	ngOnInit(): void {
		var self = this;
		this.session.getLeaderBoard(function(leaderboard: any) {
			self.leaderboard = leaderboard;
		});
		this.user.init(function() {
			self.user.getSummary();
		});
  }
	closeSession(): void {
		var self = this;
		this.session.closeSession(function() {
			self.sessionClosed = true;
		});
	}
}
