import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegisterFieldsComponent } from '../../moleculs/register-fields/register-fields.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeperatorWithTextComponent } from "../../atoms/seperator-with-text/seperator-with-text.component";
import { Router } from '@angular/router';
import { ErrorTextComponent } from '../../atoms/error-text/error-text.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [RegisterFieldsComponent, ButtonComponent, FormsModule, ReactiveFormsModule, SeperatorWithTextComponent, 
    ErrorTextComponent
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  @Input() errorMessage: string = "";
  @Output() registerSubmit = new EventEmitter<{pseudo: string|undefined, password: string|undefined, confirmPassword: string|undefined}>();

  registerForm = new FormGroup({
    pseudo: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    confirmPassword: new FormControl('', { nonNullable: true }),
  });

  constructor(private router: Router) {}

  onSubmit() {
    this.registerSubmit.emit({
      pseudo: this.registerForm.value.pseudo, 
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword
    });
  }

  clickOnSignIn() {
    this.router.navigate(["/login"]);
  }
}
