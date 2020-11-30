import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  sendGetRequest(uri:string) {
    return this.httpClient.get(this.apiUrl+uri);
  }

  sendPostRequest(uri:string,data: Object): Observable<Object> {
    return this.httpClient.post(this.apiUrl+uri, data);
  }
}
