import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'safe-alert-snackbar',
    templateUrl: './alert-snackbar.component.html',
    styleUrls: ['./alert-snackbar.component.css']
})
export class AlertSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
