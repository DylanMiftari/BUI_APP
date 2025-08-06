import { Component } from '@angular/core';
import { RegisterTemplteComponent } from '../../../../shared/templates/register-templte/register-templte.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  standalone: true,
  imports: [CommonModule, RegisterTemplteComponent],
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  errorMessage: string = "";
  constructor(private userService: userService, private router: Router) {}

  register(params: any) {
    this.userService.register(params.pseudo, params.password, params.confirmPassword).subscribe({
      next: (response) => {
        localStorage.setItem("token", response.token);
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
