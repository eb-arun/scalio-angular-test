import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tableStore = new BehaviorSubject('');
  searchKey = new BehaviorSubject('');
  constructor(private http:HttpClient) { }

  loginSearch(key:string):Observable<any> {
    return this.http.get("https://api.github.com/search/users?q="+key+"in:login");
  }
}
