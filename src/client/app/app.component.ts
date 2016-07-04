import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';


import { Config, NameListService, NavbarComponent, ToolbarComponent, SocketService } from './shared/index';

import { UserService } from './shared/user/user.service';

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
  providers: [CookieService,SocketService,UserService]
})
export class AppComponent implements OnInit {
  constructor(
    private io: SocketService,
    private user: UserService,
    private router: Router
  ) {
    console.log('Environment config', Config);
    this.setSocketEvents();
  }
  ngOnInit() {
    //this.io.socket.emit('appContext:getRoute')
  }
  setSocketEvents() {
    var self = this;
    this.io.socket.on('route:redirect', function(route: any) {
      self.redirect(route);
    });
  }
  redirect(route: any) {
    console.log(route);
    this.router.navigate([route]);
  }
}
