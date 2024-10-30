import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  register(user: any): Observable<any> {
    console.log("--------------------------------------------");
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  deleteUser(body: { userId: string; token: string }): Observable<any> {
    const token = localStorage.getItem('token') || ''; // Get token from local storage
    body.token=token;
    console.log("--------------------------------------------");
    console.log("--------------------------------------------");
    console.log(body)
    
    console.log("--------------------------------------------");
    
    return this.http.delete(`${this.baseUrl}/delete`, { body }); // Use { body } to send the data in the request body
  }

  
}
