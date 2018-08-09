import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvacuationsComponent } from './evacuations.component';

const routes: Routes = [
  { path: ':id', component: EvacuationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvacuationsRoutingModule {
}
