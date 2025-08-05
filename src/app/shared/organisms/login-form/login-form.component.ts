import { Component, EventEmitter, Output } from '@angular/core';
import { LoginFieldsComponent } from '../../moleculs/login-fields/login-fields.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LoginFieldsComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() loginSubmit = new EventEmitter<{pseudo: string|undefined, password: string|undefined}>();

  loginForm = new FormGroup({
    pseudo: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    this.loginSubmit.emit({
      pseudo: this.loginForm.value.pseudo, 
      password: this.loginForm.value.password
    });
  }
}
