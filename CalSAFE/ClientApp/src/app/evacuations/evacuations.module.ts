import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EvacuationsRoutingModule } from './evacuations-routing.module';

import { EvacuationsComponent } from './evacuations.component';

@NgModule({
  declarations: [
    EvacuationsComponent
  ],
  imports: [
    SharedModule,
    EvacuationsRoutingModule
  ]
})
export class EvacuationsModule {
}
