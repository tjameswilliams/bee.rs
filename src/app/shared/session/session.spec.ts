import { addProviders, inject, async } from '@angular/core/testing';
import { SessionService } from './session.service';
import { SocketService } from './../socket/socket.service';

describe('Session', () => {

	beforeEach(() => {
    addProviders([SessionService,SocketService]);
  });

	it('No session should be open to begin', async(inject([SessionService, SocketService], (session: SessionService, io: SocketService) => {
		session.init().subscribe(() => {
			expect(session.id).toEqual(null);
			io.socket.disconnect();
		});
	})));

	it('Should create a session when a session has been applied.', async(inject([SessionService, SocketService], (session: SessionService, io: SocketService) => {
		session.name = 'Jazmine Test';
		session.setName().subscribe(() => {
			expect(session.name).toEqual('Jazmine Test');
			expect(session.id).toEqual(jasmine.any(Number));
			io.socket.disconnect();
		});
	})));

	it('should redirect to /new-host after creation', async(inject([SessionService, SocketService], (session: SessionService, io: SocketService) => {
		session.getStartRoute().subscribe((route: string) => {
			expect(route).toEqual('/new-host');
			io.socket.disconnect();
		});
	})));

	it('should close the session', async(inject([SessionService, SocketService], (session: SessionService, io: SocketService) => {
		session.closeSession().subscribe(() => {
			session.init().subscribe( () => {
				expect(session.id).toEqual(null);
				io.socket.disconnect();
			});
		});
	})));
});
