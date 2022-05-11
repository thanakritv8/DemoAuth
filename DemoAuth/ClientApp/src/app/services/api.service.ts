import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders();

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl + "api/";
  }

  get_current_user() {
    return this.http.get(this.baseUrl + 'Home/get-user-by-login', { headers: this.headers });
  }
}
