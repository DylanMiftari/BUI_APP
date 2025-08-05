import { Component, Input } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-fields',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './register-fields.component.html',
  styleUrl: './register-fields.component.css'
})
export class RegisterFieldsComponent {
  @Input({ required: true }) form!: FormGroup;

  get pseudoControl(): FormControl {
    return this.form.get('pseudo') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.form.get("password") as FormControl;
  }
  get confirmPasswordControl(): FormControl {
    return this.form.get("confirmPassword") as FormControl;
  }
}
