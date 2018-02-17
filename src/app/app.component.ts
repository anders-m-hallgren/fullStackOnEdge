import { Component } from '@angular/core';
import { Todo } from './Todo';
//import { Weather } from "./Weather";
import { TodoService } from './Todo-service.service';
import { DriverService } from './driver.service';
import { WebsocketService } from './websocket.service';

import { IReading } from './iReading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ DriverService, WebsocketService ]
})
export class AppComponent {
  title = 'cool app';
  todos:Todo[] = [];
  messages:IReading[] = [];
 // todos:Weather[] = [];

  constructor(private _data:TodoService, private _driverService: DriverService) {
    _driverService.messages.subscribe(msg => {			
      console.log("Response from websocket: ", msg);
      this.messages.push(msg);
    });
  }

  load(){
    this._data.getData().subscribe(b => this.todos = b);
  }

private message = {
  id:'request',
  customerID:'',
  readingTime:'',
  metricType: '',
  metricValue: '',
  unit: ''
}

sendMessage_getReading() {
  console.log('Request reading from server over websocket: ', this.message);
  this._driverService.messages.next(this.message);
  this.message = null;
}



  /*
  connect(){
    this._sock.connect(this.url).subscribe((message: MessageEvent) => {
      this.messages.push(message),
      console.log('received message from server: ', message + ', length=', this.messages.length);
      console.log(message);
    })
  }

  sendMessage(){
    let message: Message = new Message();
    // this.socket.emit('add-message', message);
    this._sock.sendMsg(message);
    console.log("Send message over ws");
  }
*/
}


