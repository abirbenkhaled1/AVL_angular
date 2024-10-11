import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    // const requestBody = {
    //   token: this.Token
    // };
    const params = new HttpParams().set('token', this.Token);


    // @ts-ignore
    return this.http.get(`${this.baseUrl}/getUsers`, {},{ params });

  }



}
