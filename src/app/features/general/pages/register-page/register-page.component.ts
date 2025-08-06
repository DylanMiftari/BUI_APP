import { Component } from '@angular/core';
import { RegisterTemplteComponent } from '../../../../shared/templates/register-templte/register-templte.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { DataUserService } from '../../../../core/services/data-user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  standalone: true,
  imports: [CommonModule, RegisterTemplteComponent],
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  errorMessage: string = "";
  constructor(private userService: UserService, private router: Router, protected dataUserService: DataUserService) {}

  register(params: any) {
    this.userService.register(params.pseudo, params.password, params.confirmPassword).subscribe({
      next: (response) => {
        localStorage.setItem("token", response.token);
        this.dataUserService.fetchUser().subscribe({
          next: () => {
            this.router.navigate(["/"]);
          }
        });
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
