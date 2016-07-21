import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { SessionService } from '../session/session.service';
import { Beer } from './beer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeersService {
	public list: Beer[] = [];
	constructor(
		private io: SocketService,
		private session: SessionService
	) {}
	getBeers(): Observable<any> {
		return new Observable((obs: any) => {
			this.io.socket.emit('beers:getBeers', this.session.id, (beers: Beer[]) => {
				this.list = beers;
				obs.next();
			});
		});
	}
	getBeer(id: Number): Observable<any> {
		return new Observable((obs: any) => {
			this.io.socket.emit('beers:getBeer', id, (beer: Beer[]) => {
				obs.next(beer);
			});
		});
	}
	newBeer(): Beer {
		let beer = new Beer;
		beer.setSessionId(this.session.id);
		return beer;
	}
	saveBeer(beer: Beer): Observable<any> {
		return new Observable((obs: any) => {
			this.io.socket.emit('beers:saveBeer', beer, (res: any) => {
				obs.next(res);
			});
		});
	}
	deleteBeer(id: number): Observable<any> {
		return new Observable((obs: any) => {
			this.io.socket.emit('beers:deleteBeer', id, (res: any) => {
				obs.next(res);
			});
		});
	}
}
