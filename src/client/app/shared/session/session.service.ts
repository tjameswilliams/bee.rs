import { Injectable, EventEmitter, Output }    from '@angular/core';
import { SocketService } from './../socket/socket.service';

@Injectable()
export class SessionService {
	@Output() initialized = new EventEmitter();
	id: number;
	name: string;
	error: string;
	status: any;
	constructor(
		private io: SocketService
	) {

	}
	init(cb: any) {
		var self = this;
		this.io.socket.emit('sessions:getOpenSession', function(session: any) {
			self.id = session.id;
			self.name = session.session_name;
			self.initialized.next(session.id);
			if( cb ) {
				cb();
			}
		});
		this.io.socket.on('sessions:broadcastStatus', function(status: any) {
			self.status = status;
		});
	}
	setName() {
		var self = this;
		if( self.name.trim() === '' || self.name.length < 1) {
			self.error = 'Please supply a name for this session!';
		} else {
			self.io.socket.emit('sessions:createSession',{name:self.name},(res: any) => {
				self.id = res.id;
			});
		}
	}
	advanceSession(beer_id: any, cb: Function) {
		this.io.socket.emit('sessions:advanceSession', {
			beer_id: beer_id,
			session_id: this.id
		}, function(res: any) {
			cb(res);
		});
	}
	getSessionStatus() {
		var self = this;
		if( !self.id ) {
			self.init(function() {
				self.getSessionStatus();
			});
		} else {
			self.io.socket.emit('sessions:sessionStatus', self.id, function(status: any) {
				self.status = status;
			});
		}
	}
}
