import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';


import { Config, NameListService, NavbarComponent, ToolbarComponent, SocketService } from './shared/index';

import { UserService } from './shared/user/user.service';
import { SessionService } from './shared/session/session.service';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers: [CookieService,SocketService,UserService,SessionService]
})
export class AppComponent implements OnInit {
  constructor(
    private io: SocketService,
    private user: UserService,
    private session: SessionService,
    private router: Router,
		private window: Window
  ) {
    this.setSocketEvents();
  }
  ngOnInit() {
    var self = this;
    this.user.init(function(session_id: any) {
      if( session_id ) {
        self.session.init(false);
      }
    });
    //this.io.socket.emit('appContext:getRoute')
    self.window.addEventListener('focus', function() {
			self.focusWindow();
		});
  }
  setSocketEvents() {
    var self = this;
    this.io.socket.on('session:initSession', function() {
      self.session.init(false);
    });
  }
	focusWindow() {
		this.user.getAppContext();
	}
}
