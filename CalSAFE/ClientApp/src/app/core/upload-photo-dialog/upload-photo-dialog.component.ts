import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'safe-upload-photo-dialog',
    templateUrl: './upload-photo-dialog.component.html',
    styleUrls: ['./upload-photo-dialog.component.css']
})
export class UploadPhotoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UploadPhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
}
