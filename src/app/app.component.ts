import { Component } from '@angular/core';
import { Todo } from './Todo';
//import { Weather } from "./Weather";
import { TodoService } from './todo-service.service';
import { DriverService } from './driver.service';
import { WebsocketService } from './websocket.service';

import { IReading } from './iReading';


const version: string = '1.0';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ TodoService, DriverService, WebsocketService ]
})
export class AppComponent {
  title = 'cool app';
  version_display: string = version;
  todos:Todo[] = [];
  messages:IReading[] = [];
  // todos:Weather[] = [];
  answer: string ='';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  constructor(private _data:TodoService, private _driverService: DriverService) {
    //Object.assign(this, {single, multi})
    _driverService.messages.subscribe(msg => {			
      console.log("Response from websocket: ", msg);
      this.messages.push(msg);
    });
  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout( ()=>{
      this.answerDisplay=this.answer;
      this.showSpinner=false;      
    },2000)
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


