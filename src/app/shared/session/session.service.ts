import { Injectable, EventEmitter, Output, Inject }    from '@angular/core';
import { SocketService } from './../socket/socket.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {
	initiated: boolean = false;
	id: number = null;
	name: string = null;
	error: string = null;
	status: any = null;
	constructor(
		private io: SocketService
	) { }
	init(): Observable<any> {
		this.io.socket.on('sessions:broadcastStatus', (status: any) => {
			setTimeout(() => {
				this.status = status;
			});
		});
		this.io.socket.on('sessions:setSession', (session: any) => {
			this.setSession(session);
		});

		return new Observable((obs: any) => {
			if( this.initiated && this.id ) {
				obs.next(this.id);
			} else {
				this.io.socket.emit('sessions:getOpenSession', (session: any) => {
					if( session.id ) {
						this.setSession(session);
						obs.next(session.id);
					} else {
						obs.next(false);
					}
					this.initiated = true;
				});
			}
		});
	}
	setSession(session: any): void {
		this.id = session.id;
		this.name = session.session_name;
	}
	setName(): Observable<any> {
		if( this.name.trim() === '' || this.name.length < 1) {
			this.error = 'Please supply a name for this session!';
		}
		return new Observable( (observer: any) => {
			this.io.socket.emit('sessions:createSession',{name:this.name},(res: any) => {
				this.id = res.id;
				observer.next();
			});
		});
	}
	advanceSession(beer_id: any): Observable<any> {
		return new Observable( (obs: any) => {
			this.io.socket.emit('sessions:advanceSession', {
				beer_id: beer_id,
				session_id: this.id
			}, function(res: any) {
				obs.next(res);
			});
		});
	}
	getSessionStatus(): Observable<any> {
		this.status = null;
		return new Observable( (obs: any) => {
			this.init().subscribe(() => {
				this.io.socket.emit('sessions:sessionStatus', this.id, (status: any) => {
					this.status = status;
					obs.next();
				});
			});
		});
	}
	getLeaderBoard(): Observable<any> {
		return new Observable( (obs: any) => {
			this.init().subscribe(() => {
				this.io.socket.emit('sessions:getLeaderBoard', this.id, (leaderboard: any) => {
					obs.next(leaderboard);
				});
			});
		});
	}
	closeSession(): Observable<any> {
		return new Observable( (obs: any) => {
			this.init().subscribe(() => {
				this.io.socket.emit('sessions:closeSession', this.id, () => {
					this.id = null;
					obs.next();
				});
			});
		});
	}
	getStartRoute(): Observable<any> {
		return new Observable( (obs: any) => {
			this.io.socket.emit('sessions:startRoute', (route: string) => {
				obs.next(route);
			});
		});
	}
}
