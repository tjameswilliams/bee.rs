import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../shared/user/user.service';
import { BeersService } from './../shared/beers/beers.service';
import { SessionService } from './../shared/session/session.service';
import { Beer } from './../shared/beers/beer';

@Component({
  moduleId: module.id,
  selector: 'sd-start-session',
  templateUrl: 'hostround.component.html',
  styleUrls: ['session.component.css'],
	directives: [ROUTER_DIRECTIVES],
  providers: [BeersService]
})
export class HostRoundComponent implements OnInit {
  sub: any;
  status: any;
  beer: Beer;
	confirmNextRound: boolean= false;
	ratingRange: any= [1,2,3,4,5];
	constructor(
		private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private beers: BeersService,
    private session: SessionService
	) {}
	ngOnInit() {
    var self = this;
    this.sub = this.route.params.subscribe(params => {
  		if( params['id'] ) {
  			let id = +params['id']; // (+) converts string 'id' to a number
        self.beers.getBeer(id, (beer: Beer) => self.beer = beer);
  		}
			self.session.getSessionStatus();
  	});
  }
	nextRound() {
		var self = this;
		this.session.advanceSession(self.beer.id, function(res: any) {
			if( res.id ) {
				self.router.navigate(['/host-round/'+res.id]);
			} else {
				self.router.navigate(['/summary']);
			}
    });
	}
}
