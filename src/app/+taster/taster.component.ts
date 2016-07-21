import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './../shared/user/user.service';
import { SessionService } from './../shared/session/session.service';

@Component({
  moduleId: module.id,
  selector: 'sd-taster',
  templateUrl: 'taster.component.html',
  styleUrls: ['taster.component.css'],
	directives: [ROUTER_DIRECTIVES],
})
export class TasterComponent implements OnInit {
	@ViewChildren('input') userInput: any;
	constructor(
		private user: UserService,
		private session: SessionService,
		private router: Router
	) { }
	ngOnInit() {
		this.user.setUserType('taster');
		if( this.session.id ) {
			this.user.setSessionId(this.session.id);
		} else {
			this.session.init().subscribe((session_id: any) => {
				this.user.setSessionId(this.session.id);
			});
		}
	}
	ngAfterViewInit() {
    this.userInput.first.nativeElement.focus();
  }
	submit() {
    if( this.user.setUserName() ) {
      this.user.saveUser().subscribe(() => {
        this.user.getAppContext();
      });
    }
  }
}
