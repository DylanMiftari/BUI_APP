import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginFieldsComponent } from '../../moleculs/login-fields/login-fields.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeperatorWithTextComponent } from '../../atoms/seperator-with-text/seperator-with-text.component';
import { Router } from '@angular/router';
import { ErrorTextComponent } from '../../atoms/error-text/error-text.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LoginFieldsComponent, ButtonComponent, FormsModule, ReactiveFormsModule, SeperatorWithTextComponent,
    ErrorTextComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Input() errorMessage: string = "";
  @Output() loginSubmit = new EventEmitter<{pseudo: string|undefined, password: string|undefined}>();

  loginForm = new FormGroup({
    pseudo: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor(private router: Router) {}

  onSubmit() {
    this.loginSubmit.emit({
      pseudo: this.loginForm.value.pseudo, 
      password: this.loginForm.value.password
    });
  }

  clickOnRegister() {
    this.router.navigate(["/register"]);
  }
}
