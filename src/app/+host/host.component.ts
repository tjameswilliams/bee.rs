import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../shared/user/user.service';
import { SessionService } from './../shared/session/session.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-host',
  templateUrl: 'host.component.html',
  styleUrls: ['host.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HostComponent implements AfterViewInit {
  @ViewChildren('input') hostInput: any;
  constructor(
    private host: UserService,
    private session: SessionService,
    private router: Router
  ) {
    host.setUserType('host');
    host.setSessionId(session.id);
  }
  ngAfterViewInit() {
    this.hostInput.first.nativeElement.focus();
  }
  submit() {
    var self = this;
    if( self.host.setUserName() ) {
      self.host.saveUser(() => {
        self.router.navigate(['/info-manifest']);
      });
    }
  }
}
