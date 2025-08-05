import { Component, Input } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-fields',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './login-fields.component.html',
  styleUrl: './login-fields.component.css'
})
export class LoginFieldsComponent {
  @Input({ required: true }) form!: FormGroup;

  get pseudoControl(): FormControl {
    return this.form.get('pseudo') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.form.get("password") as FormControl;
  }
}
