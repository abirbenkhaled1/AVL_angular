import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Token =''

  private baseUrl = 'http://localhost:8081/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {

    this.Token =localStorage.getItem('token')
    console.log(this.Token+"------------")

    const body = { token: this.Token };


    const params = new HttpParams().set('token', this.Token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log("------------")
    console.log(body.token)

    // @ts-ignore
    return this.http.get(`${this.baseUrl}/getUsers`, { headers: headers, params: params });

  }



}
