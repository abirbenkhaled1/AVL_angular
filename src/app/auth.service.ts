import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://d1dd-196-179-254-81.ngrok-free.app'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  logout(): void {
    // Supprimer les données utilisateur stockées localement (token)
    localStorage.removeItem('token'); // Supprimez le jeton stocké dans localStorage
    sessionStorage.removeItem('token'); // Supprimez le jeton stocké dans sessionStorage (si utilisé)
  
    // Redirection vers la page de connexion
    window.location.href = '/login'; // Adaptez l'URL à votre page de connexion
  }
  

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
