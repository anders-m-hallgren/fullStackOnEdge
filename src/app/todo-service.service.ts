import { Injectable } from '@angular/core';
import { Todo } from "./Todo";
import { Weather } from "./Weather";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
 
const SERVICE_HOST = "skojfrontapp.azurewebsites.net";


@Injectable()
export class TodoService {
  constructor(private _htc:HttpClient) { }
 
getData():Observable<Todo[]>{
    return this._htc.get<Todo[]>(this.todo());
}
/* 
getData():Observable<Weather[]>{
      return this._htc.get<Weather[]>(this.weather());
  }
*/

  private todo(): string {
    return "https://" + SERVICE_HOST + "/todo/read?name=Anders";
  }

  private weather(): string {
    return "http://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22";
  }
}