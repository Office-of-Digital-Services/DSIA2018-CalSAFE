import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'safe-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output() closeSidenav: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  close() {
    this.closeSidenav.emit(null);
  }
}
