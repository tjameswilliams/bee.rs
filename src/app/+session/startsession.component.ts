import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UserService } from './../shared/user/user.service';
import { SessionService } from './../shared/session/session.service';

@Component({
  moduleId: module.id,
  selector: 'sd-start-session',
  templateUrl: 'startsession.component.html',
  styleUrls: ['session.component.css'],
	directives: [ROUTER_DIRECTIVES]
})
export class StartSessionComponent implements OnInit {
	constructor(
		private user: UserService,
		private session: SessionService,
    private router: Router
	) {}
	ngOnInit() {
		this.user.getUsers();
	}
	startSession() {
    this.session.advanceSession(null).subscribe((res: any) => {
      this.router.navigate(['/host-round/'+res.id]);
    });
	}
}
