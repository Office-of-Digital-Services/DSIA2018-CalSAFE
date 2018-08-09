import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'evacuations', loadChildren: 'app/evacuations/evacuations.module#EvacuationsModule' },
  { path: 'events', loadChildren: 'app/events/events.module#EventsModule' },
  { path: 'reports', loadChildren: 'app/reports/reports.module#ReportsModule' },
  { path: 'resources', loadChildren: 'app/resources/resources.module#ResourcesModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
