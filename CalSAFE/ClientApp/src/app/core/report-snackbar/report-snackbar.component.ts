import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'safe-report-snackbar',
    templateUrl: './report-snackbar.component.html',
    styleUrls: ['./report-snackbar.component.css']
})
export class ReportSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
