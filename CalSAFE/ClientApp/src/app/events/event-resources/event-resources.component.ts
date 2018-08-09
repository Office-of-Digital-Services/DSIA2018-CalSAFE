import { Component } from '@angular/core';
import { RESOURCES } from './RESOURCES';

@Component({
    selector: 'safe-event-resources',
    templateUrl: './event-resources.component.html',
    styleUrls: ['./event-resources.component.css']
})
export class EventResourcesComponent {
  resources = RESOURCES;
  resourceIndex = 0;

  constructor() {

  }

  setResourceIndex(index: number): void {
    this.resourceIndex = index;
  }
}
