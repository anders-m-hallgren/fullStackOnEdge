import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { IReading } from './iReading';

const useLocal=false;
//const CHAT_URL = 'ws://echo.websocket.org/';
const urlAzure = 'wss://websocketapp.azurewebsites.net';
//url = 'wss://websocketapp.azurewebsites.net';
const urlLocal = 'wss://localhost/';

const url = useLocal ? urlLocal : urlAzure;

@Injectable()

export class DriverService {
	public messages: Subject<IReading>;
	constructor(wsService: WebsocketService) {
		this.messages = <Subject<IReading>>wsService
			.connect(url)
			.map((response: MessageEvent): IReading => {
				let data = JSON.parse(response.data);
				return {
                    customerID: data.customerID,
                    id: data.id,
                    metricType: data.metricType,
                    metricValue: data.metricValue,
                    readingTime: data.readingTime,
                    unit: data.unit
				}
			});
	}
}

/*
  sendMsg(message: MessageEvent) {
    console.log('SEND: new message from client to websocket: ', message);
    this.subject.next(message);
    message = null;
}*/