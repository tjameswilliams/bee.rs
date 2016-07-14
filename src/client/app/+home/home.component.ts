import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { SessionService } from './../shared/session/session.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: []
})
export class HomeComponent {
  creatingSession = false;

  constructor(private session: SessionService) {}

  start(sessionName: any) {
    this.creatingSession = true;
    setTimeout(() => {
      sessionName.focus();
    },10);
  }

  submitSession() {
    this.session.setName();
  }

  keyUp(e: KeyboardEvent) {
    switch(e.keyCode) {
      case 13:
        this.submitSession();
        break;
    }
  }
}
