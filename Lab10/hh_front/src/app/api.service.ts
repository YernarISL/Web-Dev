import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL =  "http://127.0.0.1:8000/api";
  httpHeaders = new HttpHeaders({"Content-Type": "application/json"});

  constructor(private http: HttpClient) { }

  getAllCompanies() : Observable<any> {
    return this.http.get(this.baseURL + "/companies", {headers : this.httpHeaders});
  }
}
