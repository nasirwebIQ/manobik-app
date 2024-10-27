import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  model: any = {
    email: '',
    password: '',
  };

  private router = inject(Router);

  // Hardcoded valid credentials for demonstration
  private validCredentials = {
    email: 'user@example.com',
    password: '123', // Change this to your desired password
  };

  errorMessage: string | null = null; // For storing error messages

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // Check if the entered credentials match the valid credentials
    if (
      this.model.email === this.validCredentials.email &&
      this.model.password === this.validCredentials.password
    ) {
      this.router.navigate(['/profile']); // Navigate to user list
    } else {
      this.errorMessage = 'Invalid email or password'; // Set error message
    }
  }
}
