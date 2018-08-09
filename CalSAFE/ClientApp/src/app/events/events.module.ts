import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';

import { EventsComponent } from './events.component';
import { EventResourcesComponent } from './event-resources/event-resources.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventResourcesComponent
  ],
  imports: [
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule {
}
