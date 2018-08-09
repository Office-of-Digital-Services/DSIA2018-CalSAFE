import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertSnackbarComponent } from '../../core/alert-snackbar/alert-snackbar.component';

import { EVENTS } from './EVENTS';
import { MatDialog } from '@angular/material/dialog';
import { UploadPhotoDialogComponent } from '../../core/upload-photo-dialog/upload-photo-dialog.component';
import { ReportSnackbarComponent } from '../../core/report-snackbar/report-snackbar.component';
import { CheckinConfirmDialogComponent } from '../../core/checkin-confirm-dialog/checkin-confirm-dialog.component';

@Component({
    selector: 'safe-events-widget',
    templateUrl: './events-widget.component.html',
    styleUrls: ['./events-widget.component.css']
})
export class EventsWidgetComponent {
  private hubConnection: HubConnection;

  events = EVENTS;
  eventIndex = 0;

  disableCheckIn: boolean = false;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    // Build SignalR connection
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("/report")
      .build();

    // Start SignalR connection
    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection'));

    // Listen for messages
    this.hubConnection.on("checkedIn", (message: string) => {
      this.snackBar.openFromComponent(ReportSnackbarComponent, {
        duration: 3000,
        data: {
          message: message
        },
        verticalPosition: 'top'
      });

      this.disableCheckIn = true;
    });
  }

  openPhotoUploadDialog(): void {
    let dialogRef = this.dialog.open(UploadPhotoDialogComponent, {
      width: '400px',
      //data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  checkIn(): void {
    let dialogRef = this.dialog.open(CheckinConfirmDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      // Broadcast Check in
      if (result == true) {
        this.hubConnection.send("CheckIn", "Checked In");
      }
    });
  }

  setEventIndex(index: number): void {
    this.eventIndex = index;
  }
}
