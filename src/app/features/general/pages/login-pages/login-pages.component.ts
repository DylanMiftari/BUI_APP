import { Component } from '@angular/core';
import { LoginTemplateComponent } from '../../../../shared/templates/login-template/login-template.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  standalone: true,
  imports: [LoginTemplateComponent],
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css'
})
export class LoginPagesComponent {
  errorMessage: string = "";

  constructor(private userService: UserService, private router: Router) {}

  login(params: any) {
    this.userService.login(params.pseudo, params.password).subscribe({
      next: response => {
        localStorage.setItem("token", response.token);
        this.router.navigate(["/"])
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
