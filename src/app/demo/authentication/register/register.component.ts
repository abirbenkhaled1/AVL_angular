import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public firstName: string = '';
  public lastName: string = '';
  public username: string = '';
  public email: string = '';
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

  register() {
    const userRegistrationRecord = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password
    };
    console.log("------------------------")
      console.log(userRegistrationRecord)
      console.log("------------------------")

    this.authService.register(userRegistrationRecord).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Navigate to login page or show a success message
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Handle the error as needed (e.g., show an error message)
      }
    });
  }
}
