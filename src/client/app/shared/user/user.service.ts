import { Injectable }    from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { SocketService } from '../socket/socket.service';

@Injectable()
export class UserService {
	public id: Number;
	public name: String;
	constructor(
		private io: SocketService,
		private cookies: CookieService
	) {
		if( this.cookies.get('user_id') ) {
			this.init();
		} else {
			this.getAppContext();
		}
	}
	init() {
		var self = this;
		this.io.socket.emit('users:getUser',
			this.cookies.get('user_id'),
			function(user: any) {
				if( user && user.id ) {
					self.id = Number(user.id);
					self.name = user.name;
					self.cookies.put('user_id', self.id);
				} else {
					// --> no current user was found.
					self.cookies.removeAll();
				}
				this.getAppContext();
		});
	}
	getAppContext() {
		var self = this;
		this.io.socket.emit('appContext:getRoute', self.id);
	}
}
