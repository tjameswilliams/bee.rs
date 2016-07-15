import { Injectable }    from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { SocketService } from '../socket/socket.service';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
	public id: number;
	public session_id: number;
	public name: string;
	public user_type: string;
	public error: string;
	public users: any = [];
	private cookieOptions: any;
	private summary: any;
	constructor(
		private io: SocketService,
		public cookies: CookieService,
		private router: Router
	) {
		var tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		this.cookieOptions = {
			path: '/',
			date: tomorrow
		};
	}
	init(cb: Function) {
		var self = this,
			userId = self.cookies.get('user_id');
		// because this is a shared state application, the system is responsible for
		// broadcasting path changes.
    this.io.socket.on('route:redirect', function(route: any) {
      self.redirect(route);
    });
		this.io.socket.on('users:userAdded', function(user: any) {
      self.users.push(user);
    });
		if( userId ) {
			// if we know the user, we make sure he/she still exists in the system.
			self.io.socket.emit('users:getUser',
				userId,
				function(user: any) {
					if( user && user.id ) {
						self.id = user.id;
						self.name = user.name;
						self.user_type = user.user_type;
						self.session_id = user.session_id;
						self.cookies.put('user_id', self.id.toString(), this.cookieOptions);
						cb(user.session_id);
					} else {
						// --> no current user was found.
						self.cookies.removeAll();
						cb(false);
					}
					self.getAppContext();
			});
		} else {
			cb(false);
			self.getAppContext();
		}
	}
	getAppContext() {
		this.io.socket.emit('appContext:getRoute', this.id);
	}
	getUsers() {
		var self = this;
		this.io.socket.emit('users:getUsers', function(users: any) {
			self.users = users;
		});
	}
	setSessionId(sessionId: number) {
		this.session_id = sessionId;
	}
	setUserType(userType: string) {
		this.user_type = userType;
	}
	setUserName() {
		if( this.name.trim() === '' || this.name.trim().length < 2 ) {
			this.error = 'Please tell your partygoers who you are!';
			return false;
		} else {
			return true;
		}
	}
	saveUser(cb: Function) {
		var self = this;
		this.io.socket.emit('users:createUser', {
			name: self.name,
			user_type: self.user_type,
			session_id: self.session_id
		}, function(res: any) {
			self.id = res.insertId;
			self.cookies.put('user_id', self.id.toString(), this.cookieOptions);
			cb();
		});
	}
	redirect(route: any) {
    console.log(route);
		var self = this;
		if( self.router.url !== route && ['/beer-manifest','/beer-editor','/start-session'].indexOf(self.router.url) === -1 ) {
			console.log('redirected');
			self.router.navigateByUrl(route);
			//.location.reload();
		}
  }
	getSummary() {
		var self = this;
		console.log('gettingSummary');
		self.io.socket.emit('notes:getSummary', this.id, function(summary: any) {
			console.log(summary);
			self.summary = summary;
		});
	}
}
