import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HomeComponent {
  creatingSession = false;
  sessionName: String;
  sessionNameError: Boolean;
  constructor() {}

  start() {
    this.creatingSession = true;
  }

  submitSession() {
    this.sessionNameError = false;
    if( !this.sessionName || this.sessionName.trim() === '' || this.sessionName.length < 2 ) {
      this.sessionNameError = true;
    } else {

    }
  }
}
