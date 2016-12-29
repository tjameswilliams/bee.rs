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
    this.route.params.subscribe(params => {
  		if( params['id'] ) {
  			let id = +params['id']; // (+) converts string 'id' to a number
        this.beers.getBeer(id).subscribe((beer: Beer) => {
					this.beer = beer;
					this.session.getSessionStatus().subscribe();
				});
  		}
  	});
  }
	nextRound() {
    this.confirmNextRound = false;
		this.session.advanceSession(this.beer.id).subscribe((res: any) => {
			if( res.id ) {
				this.router.navigate(['/host-round/'+res.id]);
			} else {
				this.router.navigate(['/summary']);
			}
    });
	}
}
