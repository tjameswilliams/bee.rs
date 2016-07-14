import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { SessionService } from '../session/session.service';
import { Beer } from './beer';

@Injectable()
export class BeersService {
	public list: Beer[] = [];
	constructor(
		private io: SocketService,
		private session: SessionService
	) {}
	getBeers() {
		var self = this;
		this.io.socket.emit('beers:getBeers', this.session.id, function(beers: Beer[]) {
			self.list = beers;
		});
	}
	getBeer(id: Number, cb: Function) {
		var self = this;
		this.io.socket.emit('beers:getBeer', id, function(beer: Beer[]) {
			cb(beer);
		});
	}
	newBeer() {
		let beer = new Beer;
		beer.setSessionId(this.session.id);
		return beer;
	}
	saveBeer(beer: Beer, cb: Function) {
		this.io.socket.emit('beers:saveBeer', beer, cb);
	}
	deleteBeer(id: number, cb: Function) {
		this.io.socket.emit('beers:deleteBeer', id, function(res: any) {
			cb();
		});
	}
}
