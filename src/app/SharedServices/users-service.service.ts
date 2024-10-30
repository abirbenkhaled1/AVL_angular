import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private token = ''; // Store token here
  private baseUrl = 'http://localhost:8081/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    this.token = localStorage.getItem('token') || ''; // Get token from local storage
    console.log(this.token);

    const params = new HttpParams().set('token', this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(`${this.baseUrl}/getUsers`, { headers, params });
  }

  deleteUser(userId: string): Observable<any> {
    const token = localStorage.getItem('token') || ''; // Get token from local storage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Add Authorization header
    });

    return this.http.delete(`${this.baseUrl}/deleteUser/${userId}`, { headers }); // Assuming your delete endpoint requires the userId in the URL
  }
}
