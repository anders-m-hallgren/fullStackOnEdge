import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Data } from './iData';
import { DATA } from './mock-data';

@Injectable()
export class TableService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Data[]>{
    return of(this.getMockData());
  }

  getMockData(){
    return DATA;
  }

  getServerData():Observable<Data>{
    return this.http.get('http://')
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response){
    let body = res.json();
    return body || [];
  }
  private handleError(error:any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
