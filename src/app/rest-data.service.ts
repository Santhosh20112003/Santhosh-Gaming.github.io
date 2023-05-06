import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Data } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class RestDataService {
  apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
 
  
 
  getData(): Observable<Data> {
    
    return this.http
      .get<Data>(this.apiURL + '/findall');
  }
 
  
  

}
