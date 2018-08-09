import { Component } from '@angular/core';
import { RESOURCES } from './RESOURCES';

@Component({
    selector: 'safe-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resources = RESOURCES;
  resourceIndex = 0;

  constructor() {

  }

  setResourceIndex(index: number): void {
    this.resourceIndex = index;
  }
}
