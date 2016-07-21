import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { SessionService } from './../shared/session/session.service';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: []
})
export class HomeComponent {
  creatingSession: boolean = false;

  constructor(
		private session: SessionService,
		private router: Router
	) {}

  start(sessionName: any): void {
		this.session.getStartRoute().subscribe( (route: string) => {
			if( route === '/new-taster' ) {
				this.router.navigate([route]);
			} else {
				this.creatingSession = true;
		    setTimeout(() => {
		      sessionName.focus();
		    },10);
			}
		});
  }

  submitSession(): void {
    this.session.setName().subscribe();
  }

}
