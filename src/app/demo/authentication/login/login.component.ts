import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule], // Add RouterModule here
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';

  SignUpOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const userLoginRecord = {
      username: this.username,
      password: this.password
    };


    this.authService.login(userLoginRecord).subscribe({
      next: (response) => {
        console.log('login successful', response);


        const token = response.token;

        console.log("------------------------")
        console.log(this.username)
        console.log(token)
        console.log("------------------------")
        // Save username and token to local storage
        localStorage.setItem('username', this.username);
        localStorage.setItem('token', token);
        // Navigate to login page or show a success message
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Handle the error as needed (e.g., show an error message)
      }
    });
  }
}

