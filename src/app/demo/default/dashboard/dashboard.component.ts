import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { UsersService } from '../../../SharedServices/users-service.service';
import { AuthService } from 'src/app/auth.service'; // Import AuthService

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DefaultComponent {
  users: any[] = []; // Array to store retrieved users

  constructor(private usersService: UsersService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.getAllUsers(); // Call getAllUsers in ngOnInit lifecycle hook
  }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe(
      (data) => {
        this.users = data; // Update users array with fetched data
        console.log('Users:', this.users); // Optional: Log retrieved users
      },
      (error) => {
        console.error('Error fetching users:', error); // Handle errors
      }
    );
  }

  deleteUser(userId: string) {
    const token = 'your_token_here'; // Replace with the logic to get the token

    this.authService.deleteUser({ userId: userId, token: token }).subscribe(
      (response) => {
        console.log('User deleted successfully:', response);
        this.getAllUsers(); // Refresh the user list after deletion
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }


  
}
