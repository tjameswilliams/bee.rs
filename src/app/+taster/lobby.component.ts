import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './../shared/user/user.service';

@Component({
  moduleId: module.id,
  selector: 'sd-lobby',
  templateUrl: 'lobby.component.html',
  styleUrls: ['taster.component.css'],
	directives: [ROUTER_DIRECTIVES],
})
export class LobbyComponent implements OnInit {
	constructor(
		private user: UserService
	) {}
	ngOnInit() {
		this.user.getUsers();
	}
}
