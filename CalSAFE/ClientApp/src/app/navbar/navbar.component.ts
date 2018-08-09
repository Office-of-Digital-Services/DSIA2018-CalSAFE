import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'safe-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  toggle() {
    this.toggleSidenav.emit(null);
  }
}
