import { Injectable }    from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { SocketService } from '../socket/socket.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
	public initiated: boolean= false;
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
		tomorrow.setDate(tomorrow.getDate() + 10);
		this.cookieOptions = {
			path: '/',
			date: tomorrow
		};
	}
	init(): Observable<any> {
		var userId = this.cookies.get('user_id');
		// because this is a shared state application, the system is responsible for
		// broadcasting path changes.
    this.io.socket.on('route:redirect', (route: any) => {
      this.redirect(route);
    });
		this.io.socket.on('users:userAdded', (user: any) => {
      this.users.push(user);
    });
		// if we know the user, we make sure he/she still exists in the system.
		return new Observable((obs: any) => {
			if( this.initiated && this.name && userId ) {
				obs.next(this.session_id);
			} else {
				this.io.socket.emit('users:getUser',
					userId,
					(user: any) => {
						if( user && user.id ) {
							this.id = user.id;
							this.name = user.name;
							this.user_type = user.user_type;
							this.session_id = user.session_id;
							this.cookies.put('user_id', this.id.toString(), this.cookieOptions);
							obs.next(user.session_id);
						} else {
							// --> no current user was found.
							this.cookies.removeAll();
							obs.next(false);
						}
						this.getAppContext();
						this.initiated = true;
				});
			}
		});
	}
	getAppContext(): void {
		this.io.socket.emit('appContext:getRoute', this.id);
	}
	getUsers(): void {
		this.io.socket.emit('users:getUsers', (users: any) => {
			this.users = users;
		});
	}
	setSessionId(sessionId: number): void {
		this.session_id = sessionId;
	}
	setUserType(userType: string): void {
		this.user_type = userType;
	}
	setUserName(): boolean {
		if( this.name.trim() === '' || this.name.trim().length < 2 ) {
			this.error = 'Please tell your partygoers who you are!';
			return false;
		} else {
			return true;
		}
	}
	saveUser(): Observable<any> {
		return new Observable((obs: any) => {
			this.io.socket.emit('users:createUser', {
				name: this.name,
				user_type: this.user_type,
				session_id: this.session_id
			}, (res: any) => {
				this.id = res.insertId;
				this.cookies.put('user_id', this.id.toString(), this.cookieOptions);
				obs.next();
			});
		})
	}
	redirect(route: any): void {
		if( this.router.url !== route && (['/beer-manifest','/beer-editor','/start-session'].indexOf(this.router.url) === -1 || !this.id) ) {
			this.router.navigateByUrl(route);
		}
  }
	getSummary(): Observable<any> {
		return new Observable((obs: any) => {
			this.init().subscribe(() => {
				this.io.socket.emit('notes:getSummary', this.id, (summary: any) => {
					this.summary = summary;
					obs.next();
				});
			});
		});
	}
}
