import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EvacuationsWidgetComponent } from './evacuations-widget/evacuations-widget.component';
import { EventsWidgetComponent } from './events-widget/events-widget.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    EvacuationsWidgetComponent,
    EventsWidgetComponent
  ],
  exports: [
    EvacuationsWidgetComponent,
    EventsWidgetComponent
  ]
})
export class WidgetModule {
}
