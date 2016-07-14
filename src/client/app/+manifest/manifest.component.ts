import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { BeersService } from './../shared/beers/beers.service';
import { SessionService } from './../shared/session/session.service';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-manifest',
  templateUrl: 'manifest.component.html',
  styleUrls: ['manifest.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES],
  providers: [BeersService]
})
export class ManifestComponent implements OnInit {
	constructor(
		private beers: BeersService,
		private router: Router,
		private session: SessionService
	) { }
	ngOnInit() {
		var self = this;
		this.session.initialized.subscribe(function(session_id: number) {
			self.beers.getBeers();
		});
		if( this.session.id ) {
			self.beers.getBeers();
		}
	}
	addBeer() {
		this.router.navigate(['/beer-editor']);
	}
	goToBeer(id: number) {
		this.router.navigate(['/beer-editor', id]);
	}
}
