import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterFieldsComponent } from '../../moleculs/register-fields/register-fields.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [RegisterFieldsComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  @Output() registerSubmit = new EventEmitter<{pseudo: string|undefined, password: string|undefined, confirmPassword: string|undefined}>();

  registerForm = new FormGroup({
    pseudo: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    confirmPassword: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    this.registerSubmit.emit({
      pseudo: this.registerForm.value.pseudo, 
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword
    });
  }
}
