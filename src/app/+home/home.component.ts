import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { SessionService } from './../shared/session/session.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: []
})
export class HomeComponent {
  creatingSession = false;

  constructor(
		private session: SessionService,
		private router: Router
	) {}

  start(sessionName: any) {
		var self = this;
		this.session.getStartRoute(function(route: string) {
			if( route === '/new-taster' ) {
				self.router.navigate([route]);
			} else {
				self.creatingSession = true;
		    setTimeout(() => {
		      sessionName.focus();
		    },10);
			}
		});

  }

  submitSession() {
    this.session.setName();
  }

}
