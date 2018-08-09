import { Component } from '@angular/core';
import { EVACUATIONS } from './EVACUATIONS';

@Component({
    selector: 'safe-evacuations-widget',
    templateUrl: './evacuations-widget.component.html',
    styleUrls: ['./evacuations-widget.component.css']
})
export class EvacuationsWidgetComponent {
  evacuations = EVACUATIONS;

  constructor() {

  }
}
