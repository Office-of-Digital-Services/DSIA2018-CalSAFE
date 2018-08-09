import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UploadPhotoDialogComponent } from './upload-photo-dialog/upload-photo-dialog.component';
import { AlertSnackbarComponent } from './alert-snackbar/alert-snackbar.component';
import { ReportSnackbarComponent } from './report-snackbar/report-snackbar.component';
import { CheckinConfirmDialogComponent } from './checkin-confirm-dialog/checkin-confirm-dialog.component';

@NgModule({
  declarations: [
    AlertSnackbarComponent,
    CheckinConfirmDialogComponent,
    ReportSnackbarComponent,
    UploadPhotoDialogComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    AlertSnackbarComponent,
    CheckinConfirmDialogComponent,
    ReportSnackbarComponent,
    UploadPhotoDialogComponent
  ]
})
export class CoreModule {
}
