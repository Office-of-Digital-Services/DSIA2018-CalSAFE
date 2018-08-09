import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserSettingsComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
