import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';


import { SocketService } from './shared/index';

import { UserService } from './shared/user/user.service';
import { SessionService } from './shared/session/session.service';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [CookieService,SocketService,UserService,SessionService]
})
export class AppComponent implements OnInit {
	window: Window;
  constructor(
    private io: SocketService,
    private user: UserService,
    private session: SessionService,
    private router: Router
  ) {
    this.setSocketEvents();
		this.window = window;
  }
  ngOnInit() {
    this.user.init().subscribe((session_id: any) => {
      if( session_id ) {
        this.session.init();
      }
    });
    //this.io.socket.emit('appContext:getRoute')
    this.window.addEventListener('focus', () => {
			this.focusWindow();
		});
  }
  setSocketEvents() {
    this.io.socket.on('session:initSession', () => {
      this.session.init();
    });
  }
	focusWindow() {
		this.user.getAppContext();
	}
}
