import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HttpClientService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  private formHeaders = new Headers({});

  private privateData = {
    status: null,
    data: null,
    bizerror: null,
    syserror: null,
    errortype: null,
    message: null
  };

  constructor(private http: Http) { }

  get(url): Observable<any> {
    return this.http.get(url)
      .map(response => response.json() as any)
      .catch(error => this.handleError(error));
  }

  post(url, body): Observable<any> {
    return this.http.post(url, body, { headers: this.headers })
      .map(response => response.json() as any )
      .catch(error => this.handleError(error));
  }
  formPost(url, body): Observable<any> {
    return this.http.post(url, body)
      .map(response => response.json() as any )
      .catch(error => this.handleError(error));
  }
  

  handleError(error: any) {
    return Observable.throw(error || 'Server Error');
  }
  
  private handleResponse(dataToParse: any) {
    console.log(dataToParse,'handle response');
    return dataToParse;
  }


}
