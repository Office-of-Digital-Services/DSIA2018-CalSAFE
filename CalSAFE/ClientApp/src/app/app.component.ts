import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertSnackbarComponent } from './core/alert-snackbar/alert-snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private hubConnection: HubConnection;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("/alert")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection'));

    this.hubConnection.on("broadcastAlert", (message: string) => {
      this.snackBar.openFromComponent(AlertSnackbarComponent, {
        duration: 20000,
        data: {
          message: message
        },
        verticalPosition: 'top'
      });
    });
  }
}
