import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
    selector: 'safe-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  private hubConnection: HubConnection;

  alert: string;

  constructor() { }

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("/alert")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection'));
  }

  send(alert: string) {
    this.hubConnection.send("SendAlert", alert)
      .then(() => this.alert = "");
  }
}
